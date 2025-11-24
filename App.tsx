import React, { useState, useEffect, useRef } from 'react';
import { GameState, EndingType, Option, LocalizedString, Language } from './types';
import { ROUNDS, ENDINGS } from './data';
import { ShieldAlert, RefreshCw, ChevronRight, Terminal, Globe } from 'lucide-react';

const INITIAL_STATE: GameState = {
  currentRoundId: 1,
  isGameStarted: false,
  isGameOver: false,
  ending: EndingType.None,
  history: [],
  showingFeedback: false,
  currentFeedback: null,
  currentOptionTrigger: null,
  language: 'zh' // Default to Chinese
};

// Static UI Strings
const UI_TEXT = {
  title: { zh: "神的孩子们", en: "God's Children" },
  subtitle: { zh: "系统日志", en: "System.Log" },
  rec: { zh: "记录", en: "REC" },
  initiate: { zh: "启动", en: "INITIATE" },
  option: { zh: "选项", en: "OPTION" },
  feedbackTitle: { zh: "系统反馈", en: "System Feedback" },
  terminalState: { zh: "抵达终局", en: "TERMINAL STATE REACHED" },
  continue: { zh: "继续", en: "CONTINUE" },
  restart: { zh: "重启模拟", en: "Restart Simulation" },
  terminated: { zh: "已终止", en: "TERMINATED" },
  imgRef: { zh: "图像参考", en: "IMG_REF" },
  introQuote: {
    zh: "“没有救赎。只有通往同一终点的不同选择。”",
    en: "\"There is no salvation. Only choices that lead to the same destination.\""
  },
  systemWarning: {
    zh: "系统警告：",
    en: "SYSTEM WARNING:"
  },
  warningBody: {
    zh: ["社会安全网失效模拟已加载。", "对象：山上彻也。", "目标：生存。"],
    en: ["Simulation of social safety net failure loaded.", "Subject: Tetsuya Yamagami.", "Objective: Survive."]
  },
  endingDate: {
    zh: "2022年7月8日。改变现代日本的事件。安全网一个个失效了。",
    en: "July 8, 2022. The event that changed modern Japan. The safety nets failed, one by one."
  },
  deadEnd: {
    zh: "这是一个死胡同。但时间线在别处继续。",
    en: "This is a dead end. But the timeline continues elsewhere."
  }
};

export default function App() {
  const [gameState, setGameState] = useState<GameState>(INITIAL_STATE);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Helper to get text based on current language
  const t = (content: LocalizedString | string): string => {
    if (typeof content === 'string') return content;
    return content[gameState.language];
  };

  const toggleLanguage = () => {
    setGameState(prev => ({
      ...prev,
      language: prev.language === 'zh' ? 'en' : 'zh'
    }));
  };

  // Auto-scroll when content changes
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [gameState.currentRoundId, gameState.showingFeedback, gameState.isGameOver]);

  const startGame = () => {
    setGameState(prev => ({ ...prev, isGameStarted: true }));
  };

  const handleOptionClick = (option: Option) => {
    setGameState(prev => ({
      ...prev,
      showingFeedback: true,
      currentFeedback: option.feedback,
      currentOptionTrigger: option.triggersEnding || null,
      history: [...prev.history, option.id as any]
    }));
  };

  const proceed = () => {
    const { currentOptionTrigger, currentRoundId } = gameState;

    if (currentOptionTrigger && currentOptionTrigger !== EndingType.None) {
      // Trigger Ending
      setGameState(prev => ({
        ...prev,
        isGameOver: true,
        ending: currentOptionTrigger,
        showingFeedback: false
      }));
    } else {
      // Next Round
      const nextId = currentRoundId + 1;
      if (nextId > 30) {
        // Fallback
        setGameState(prev => ({
          ...prev,
          isGameOver: true,
          ending: EndingType.True_End,
          showingFeedback: false
        }));
      } else {
        setGameState(prev => ({
          ...prev,
          currentRoundId: nextId,
          showingFeedback: false,
          currentFeedback: null
        }));
      }
    }
  };

  const restart = () => {
    setGameState(prev => ({ ...INITIAL_STATE, language: prev.language }));
  };

  const currentRound = ROUNDS.find(r => r.id === gameState.currentRoundId) || ROUNDS[0];
  const currentEnding = gameState.ending !== EndingType.None ? ENDINGS[gameState.ending] : null;

  return (
    <div className="relative min-h-screen w-full bg-stone-950 text-stone-300 overflow-hidden font-serif selection:bg-red-900 selection:text-white">
      {/* CRT Overlay Effects */}
      <div className="fixed inset-0 pointer-events-none z-50 scanlines opacity-50"></div>
      <div className="fixed inset-0 pointer-events-none z-50 crt-flicker bg-gradient-to-b from-transparent to-black opacity-20"></div>
      
      {/* Main Content Area */}
      <div className="relative z-10 container mx-auto px-4 py-8 max-w-2xl h-screen flex flex-col">
        
        {/* Header */}
        <header className="mb-6 flex justify-between items-end border-b border-stone-800 pb-2">
          <div>
            <h1 className="text-2xl font-bold tracking-widest text-stone-100">{t(UI_TEXT.title)}</h1>
            <p className="text-xs font-mono text-stone-500 uppercase tracking-widest">{t(UI_TEXT.subtitle)}</p>
          </div>
          <div className="flex flex-col items-end gap-2">
             <button 
               onClick={toggleLanguage}
               className="flex items-center gap-1 text-xs font-mono text-stone-500 hover:text-stone-300 transition-colors uppercase"
             >
               <Globe size={12} />
               {gameState.language === 'zh' ? 'EN / 中文' : 'EN / 中文'}
             </button>
             <div className="text-right font-mono text-xs text-stone-600">
               {gameState.isGameStarted && !gameState.isGameOver && (
                 <span>{t(UI_TEXT.rec)}: {currentRound.year} // R-{gameState.currentRoundId.toString().padStart(2, '0')}</span>
               )}
             </div>
          </div>
        </header>

        {/* Game State Rendering */}
        <main className="flex-1 overflow-y-auto pr-2 custom-scrollbar relative" ref={scrollRef}>
          
          {!gameState.isGameStarted && (
            <div className="h-full flex flex-col justify-center items-center text-center space-y-8 animate-fade-in">
              <div className="max-w-md space-y-6">
                <p className="text-lg leading-relaxed italic text-stone-400">
                  {t(UI_TEXT.introQuote)}
                </p>
                <div className="p-4 border border-stone-800 bg-stone-900/50 text-xs font-mono text-left">
                  <p className="text-red-900/70 mb-2">{t(UI_TEXT.systemWarning)}</p>
                  {UI_TEXT.warningBody[gameState.language].map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>
              <button 
                onClick={startGame}
                className="group relative px-8 py-3 bg-stone-200 text-stone-950 font-bold tracking-widest hover:bg-white transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {t(UI_TEXT.initiate)} <ChevronRight size={16} />
                </span>
              </button>
            </div>
          )}

          {gameState.isGameStarted && !gameState.isGameOver && (
            <div className="space-y-8 pb-20">
              {/* Image Placeholder */}
              <div className="w-full h-64 bg-stone-900 border border-stone-800 relative overflow-hidden grayscale contrast-125 brightness-75">
                 <img 
                   key={currentRound.id}
                   src={`https://picsum.photos/800/400?grayscale&blur=2&random=${currentRound.id}`} 
                   alt={currentRound.imageKeyword}
                   className="w-full h-full object-cover opacity-60 mix-blend-overlay transition-opacity duration-1000"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent"></div>
                 <div className="absolute bottom-4 left-4 font-mono text-xs bg-black/50 px-2 py-1 text-red-500">
                    {t(UI_TEXT.imgRef)}: {currentRound.imageKeyword.toUpperCase()}
                 </div>
              </div>

              {/* Scenario Text */}
              <div className="space-y-4 animate-slide-up">
                <h2 className="text-xl font-bold text-stone-200 border-l-2 border-red-900 pl-4">
                  {t(currentRound.title)}
                </h2>
                <p className="text-lg leading-loose text-stone-300">
                  {t(currentRound.description)}
                </p>
              </div>

              {/* Options or Feedback */}
              {!gameState.showingFeedback ? (
                <div className="grid gap-4 mt-8">
                  {currentRound.options.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => handleOptionClick(opt)}
                      className="w-full text-left p-4 border border-stone-700 hover:border-red-800 hover:bg-red-900/10 transition-all duration-300 group"
                    >
                      <span className="block text-xs font-mono text-stone-600 mb-1 group-hover:text-red-500">
                        {t(UI_TEXT.option)} {opt.id.toUpperCase()}
                      </span>
                      <span className="text-md text-stone-200">{t(opt.text)}</span>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="mt-8 border border-red-900/50 bg-red-950/10 p-6 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-red-900"></div>
                  <div className="flex items-start gap-3">
                    <Terminal className="w-5 h-5 text-red-700 mt-1 shrink-0" />
                    <div className="space-y-4 w-full">
                      <p className="font-mono text-xs text-red-700 uppercase">{t(UI_TEXT.feedbackTitle)}</p>
                      <p className="text-lg font-medium text-stone-200">
                        {gameState.currentFeedback ? t(gameState.currentFeedback) : ''}
                      </p>
                      
                      <button
                        onClick={proceed}
                        className="mt-6 flex items-center gap-2 text-sm font-bold text-stone-400 hover:text-white transition-colors ml-auto"
                      >
                        {gameState.currentOptionTrigger ? t(UI_TEXT.terminalState) : t(UI_TEXT.continue)} <ChevronRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {gameState.isGameOver && currentEnding && (
            <div className="h-full flex flex-col justify-center items-center text-center space-y-8 animate-fade-in pb-10">
              <div className="w-20 h-20 border-2 border-red-800 rounded-full flex items-center justify-center text-red-800 mb-4">
                <ShieldAlert size={40} />
              </div>
              
              <div className="space-y-2">
                <h2 className="text-3xl font-bold text-stone-100">{t(currentEnding.title)}</h2>
                <p className="text-red-500 font-mono text-sm tracking-widest uppercase">{currentEnding.id} // {t(UI_TEXT.terminated)}</p>
              </div>

              <div className="max-w-md p-6 border border-stone-800 bg-stone-900 space-y-4">
                <p className="text-lg text-stone-300 italic">"{t(currentEnding.description)}"</p>
                <div className="h-px w-full bg-stone-800"></div>
                <p className="font-bold text-red-700">{t(currentEnding.cause)}</p>
              </div>

              {gameState.ending === EndingType.True_End ? (
                 <div className="text-xs font-mono text-stone-500 max-w-xs mx-auto">
                    {t(UI_TEXT.endingDate)}
                 </div>
              ) : (
                 <div className="text-xs font-mono text-stone-500 max-w-xs mx-auto">
                    {t(UI_TEXT.deadEnd)}
                 </div>
              )}

              <button
                onClick={restart}
                className="flex items-center gap-2 px-6 py-2 border border-stone-700 text-stone-400 hover:text-white hover:border-white transition-all text-sm uppercase tracking-widest mt-8"
              >
                <RefreshCw size={14} /> {t(UI_TEXT.restart)}
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}