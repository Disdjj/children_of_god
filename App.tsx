
import React, { useState, useEffect, useRef } from 'react';
import { GameState, EndingType, Option, LocalizedString, StatsModifiers, Language } from './types';
import { ROUNDS, ENDINGS } from './data';
import { IMAGE_MAP } from './imageMap';
import { ShieldAlert, RefreshCw, ChevronRight, Terminal, Globe, Lock, Heart, Scale, Users } from 'lucide-react';

const INITIAL_STATE: GameState = {
  currentRoundId: 1,
  isGameStarted: false,
  isGameOver: false,
  ending: EndingType.None,
  history: [],
  showingFeedback: false,
  currentFeedback: null,
  currentOptionTrigger: null,
  language: 'zh',
  stats: {
    sys: 0, // System Faith
    obe: 0, // Obedience
    fam: 0  // Family Bond
  }
};

const UI_TEXT = {
  title: { zh: "神的孩子们", en: "God's Children", ja: "神の子ら", ko: "신의 아이들" },
  subtitle: { zh: "系统日志", en: "System.Log", ja: "システムログ", ko: "시스템 로그" },
  rec: { zh: "记录", en: "REC", ja: "REC", ko: "REC" },
  initiate: { zh: "启动", en: "INITIATE", ja: "起動", ko: "기동" },
  option: { zh: "选项", en: "OPTION", ja: "選択", ko: "선택" },
  feedbackTitle: { zh: "系统反馈", en: "System Feedback", ja: "システムフィードバック", ko: "시스템 피드백" },
  terminalState: { zh: "抵达终局", en: "TERMINAL STATE REACHED", ja: "終局到達", ko: "종국 도달" },
  continue: { zh: "继续", en: "CONTINUE", ja: "次へ", ko: "계속" },
  restart: { zh: "重启模拟", en: "Restart Simulation", ja: "シミュレーション再起動", ko: "시뮬레이션 재시작" },
  terminated: { zh: "已终止", en: "TERMINATED", ja: "終了", ko: "종료" },
  imgRef: { zh: "图像参考", en: "IMG_REF", ja: "画像参照", ko: "이미지_참조" },
  introQuote: {
    zh: "“没有救赎。只有通往同一终点的不同选择。”",
    en: "\"There is no salvation. Only choices that lead to the same destination.\"",
    ja: "「救いはない。あるのは、同じ結末に至る異なる選択だけだ。」",
    ko: "\"구원은 없다. 오직 같은 결말로 향하는 다른 선택만이 있을 뿐.\""
  },
  systemWarning: {
    zh: "系统警告：",
    en: "SYSTEM WARNING:",
    ja: "システム警告：",
    ko: "시스템 경고:"
  },
  warningBody: {
    zh: ["社会安全网失效模拟已加载。", "对象：山上彻也。", "目标：生存。"],
    en: ["Simulation of social safety net failure loaded.", "Subject: Tetsuya Yamagami.", "Objective: Survive."],
    ja: ["社会安全網破綻シミュレーションをロード。", "被験体：山上徹也。", "目標：生存。"],
    ko: ["사회 안전망 붕괴 시뮬레이션 로드됨.", "대상: 야마가미 테츠야.", "목표: 생존."]
  },
  endingDate: {
    zh: "2022年7月8日。改变现代日本的事件。安全网一个个失效了。",
    en: "July 8, 2022. The event that changed modern Japan. The safety nets failed, one by one.",
    ja: "2022年7月8日。現代日本を変えた事件。セーフティネットは一つずつ機能不全に陥った。",
    ko: "2022년 7월 8일. 현대 일본을 바꾼 사건. 안전망은 하나씩 붕괴되었다."
  },
  deadEnd: {
    zh: "这是一个死胡同。但时间线在别处继续。",
    en: "This is a dead end. But the timeline continues elsewhere.",
    ja: "これは袋小路だ。しかしタイムラインは他で続く。",
    ko: "막다른 길이다. 하지만 타임라인은 다른 곳에서 계속된다."
  },
  locked: {
    zh: "条件未满足",
    en: "Condition Not Met",
    ja: "条件未達成",
    ko: "조건 미충족"
  }
};

export default function App() {
  const [gameState, setGameState] = useState<GameState>(INITIAL_STATE);
  const scrollRef = useRef<HTMLDivElement>(null);

  const t = (content: LocalizedString | string): string => {
    if (typeof content === 'string') return content;
    return content[gameState.language];
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [gameState.currentRoundId, gameState.showingFeedback, gameState.isGameOver]);

  const startGame = () => {
    setGameState(prev => ({ ...prev, isGameStarted: true }));
  };

  const updateStats = (modifiers?: StatsModifiers) => {
    if (!modifiers) return gameState.stats;
    return {
      sys: gameState.stats.sys + (modifiers.sys || 0),
      obe: gameState.stats.obe + (modifiers.obe || 0),
      fam: gameState.stats.fam + (modifiers.fam || 0)
    };
  };

  const checkRequirements = (req?: StatsModifiers): boolean => {
    if (!req) return true;
    const { sys, obe, fam } = gameState.stats;
    if (req.sys !== undefined && sys < req.sys) return false;
    if (req.obe !== undefined && obe < req.obe) return false;
    if (req.fam !== undefined && fam < req.fam) return false;
    return true;
  };

  const handleOptionClick = (option: Option) => {
    const newStats = updateStats(option.modifiers);
    
    setGameState(prev => ({
      ...prev,
      showingFeedback: true,
      currentFeedback: option.feedback,
      currentOptionTrigger: option.triggersEnding || null,
      history: [...prev.history, parseInt(option.id)], // Loose parsing for history tracking
      stats: newStats
    }));
  };

  const proceed = () => {
    const { currentOptionTrigger, currentRoundId } = gameState;

    if (currentOptionTrigger && currentOptionTrigger !== EndingType.None) {
      setGameState(prev => ({
        ...prev,
        isGameOver: true,
        ending: currentOptionTrigger,
        showingFeedback: false
      }));
    } else {
      // Logic to find next round
      const currentIndex = ROUNDS.findIndex(r => r.id === currentRoundId);
      if (currentIndex === -1 || currentIndex === ROUNDS.length - 1) {
        // Fallback to True End if end of array
        setGameState(prev => ({
          ...prev,
          isGameOver: true,
          ending: EndingType.True_End,
          showingFeedback: false
        }));
      } else {
        const nextRound = ROUNDS[currentIndex + 1];
        setGameState(prev => ({
          ...prev,
          currentRoundId: nextRound.id,
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

  // Render Stats Indicators (Subtle)
  const renderStats = () => {
    if (!gameState.isGameStarted || gameState.isGameOver) return null;
    return (
      <div className="flex gap-4 text-[10px] font-mono text-stone-300 opacity-80 mb-2 justify-end">
        {gameState.stats.sys > 0 && <span className="flex items-center gap-1"><Scale size={10} /> SYS:{gameState.stats.sys}</span>}
        {gameState.stats.obe > 0 && <span className="flex items-center gap-1"><Lock size={10} /> OBE:{gameState.stats.obe}</span>}
        {gameState.stats.fam > 0 && <span className="flex items-center gap-1"><Heart size={10} /> FAM:{gameState.stats.fam}</span>}
      </div>
    );
  };

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-[#1d1815] via-[#181310] to-[#0f0c0a] text-stone-50 overflow-hidden font-serif selection:bg-amber-200/60 selection:text-stone-900">
      {/* CRT Overlay Effects */}
      <div className="fixed inset-0 pointer-events-none z-50 scanlines opacity-20"></div>
      <div className="fixed inset-0 pointer-events-none z-50 crt-flicker bg-gradient-to-b from-transparent to-black opacity-5"></div>
      
      {/* Main Content Area */}
      <div className="relative z-10 container mx-auto px-4 py-8 max-w-2xl h-screen flex flex-col">
        
        {/* Header */}
        <header className="mb-6 flex justify-between items-end border-b border-stone-700/60 pb-2">
          <div>
            <h1 className="text-2xl font-bold tracking-widest text-stone-100">{t(UI_TEXT.title)}</h1>
            <p className="text-xs font-mono text-stone-400 uppercase tracking-widest">{t(UI_TEXT.subtitle)}</p>
          </div>
          <div className="flex flex-col items-end gap-2">
             <div className="flex items-center gap-2 font-mono text-xs">
               <Globe size={10} className="text-stone-400 mr-1" />
               {(['zh', 'en', 'ja', 'ko'] as Language[]).map((lang) => (
                 <button
                   key={lang}
                   onClick={() => setGameState(prev => ({ ...prev, language: lang }))}
                   className={`
                     uppercase transition-colors px-1
                     ${gameState.language === lang 
                       ? 'text-red-500 font-bold border-b border-red-900' 
                       : 'text-stone-400 hover:text-stone-200'}
                   `}
                 >
                   {lang}
                 </button>
               ))}
             </div>
             <div className="text-right font-mono text-xs text-stone-400">
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
                <p className="text-lg leading-relaxed italic text-stone-200">
                  {t(UI_TEXT.introQuote)}
                </p>
                <div className="p-4 border border-stone-700 bg-stone-800/70 text-xs font-mono text-left text-stone-100">
                  <p className="text-red-500/80 mb-2">{t(UI_TEXT.systemWarning)}</p>
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
              {renderStats()}
              
              {/* Scene Image */}
              <div className="w-full h-64 bg-stone-800/70 border border-stone-700 relative overflow-hidden shadow-lg shadow-black/40">
                 <img
                   key={currentRound.id}
                   src={`/images/${IMAGE_MAP[currentRound.imageKeyword] || '01_funeral.png'}`}
                   alt={currentRound.imageKeyword}
                   className="w-full h-full object-contain opacity-100 transition-opacity duration-1000"
                   onError={(e) => {
                     // Fallback to placeholder if image fails to load
                     e.currentTarget.src = `https://picsum.photos/800/400?grayscale&blur=2&random=${currentRound.id}`;
                   }}
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-stone-900/10 to-transparent pointer-events-none"></div>
                 <div className="absolute bottom-4 left-4 font-mono text-xs bg-black/50 px-2 py-1 text-red-500">
                    {t(UI_TEXT.imgRef)}: {currentRound.imageKeyword.toUpperCase()}
                 </div>
              </div>

              {/* Scenario Text */}
              <div className="space-y-4 animate-slide-up">
                <h2 className="text-xl font-bold text-stone-50 border-l-2 border-red-700 pl-4">
                  {t(currentRound.title)}
                </h2>
                <p className="text-lg leading-loose text-stone-100">
                  {t(currentRound.description)}
                </p>
              </div>

              {/* Options or Feedback */}
              {!gameState.showingFeedback ? (
                <div className="grid gap-4 mt-8">
                  {currentRound.options.filter(opt => checkRequirements(opt.requiredStats)).map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => handleOptionClick(opt)}
                      className={`w-full text-left p-4 border transition-all duration-300 group
                        ${opt.requiredStats ? 'border-amber-700/70 bg-amber-900/15 shadow-[0_0_20px_rgba(255,193,94,0.08)]' : 'border-stone-500 bg-stone-800/40 hover:border-red-700 hover:bg-red-800/15'}
                      `}
                    >
                      <div className="flex justify-between items-start">
                        <span className="block text-xs font-mono text-stone-300 mb-1 group-hover:text-red-400">
                          {t(UI_TEXT.option)} {opt.id.toUpperCase()}
                        </span>
                        {opt.requiredStats && (
                          <span className="text-[10px] uppercase tracking-widest text-amber-300/80 border border-amber-700/70 px-1">
                             Critical Path Unlocked
                          </span>
                        )}
                      </div>
                      <span className="text-md text-stone-50">{t(opt.text)}</span>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="mt-8 border border-red-800/40 bg-red-900/15 p-6 relative overflow-hidden animate-fade-in">
                  <div className="absolute top-0 left-0 w-1 h-full bg-red-900"></div>
                  <div className="flex items-start gap-3">
                    <Terminal className="w-5 h-5 text-red-700 mt-1 shrink-0" />
                    <div className="space-y-4 w-full">
                      <p className="font-mono text-xs text-red-700 uppercase">{t(UI_TEXT.feedbackTitle)}</p>
                      <p className="text-lg font-medium text-stone-50">
                        {gameState.currentFeedback ? t(gameState.currentFeedback) : ''}
                      </p>
                      
                      <button
                        onClick={proceed}
                        className="mt-6 flex items-center gap-2 text-sm font-bold text-stone-200 hover:text-white transition-colors ml-auto"
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
              <div className={`w-20 h-20 border-2 rounded-full flex items-center justify-center mb-4 
                  ${gameState.ending === EndingType.E0_Fantasy ? 'border-amber-500 text-amber-500' : 'border-red-800 text-red-800'}`}>
                {gameState.ending === EndingType.E0_Fantasy ? <Heart size={40} /> : <ShieldAlert size={40} />}
              </div>
              
              <div className="space-y-2">
                <h2 className="text-3xl font-bold text-stone-100">{t(currentEnding.title)}</h2>
                <p className="text-red-500 font-mono text-sm tracking-widest uppercase">{currentEnding.id} // {t(UI_TEXT.terminated)}</p>
              </div>

              <div className={`max-w-md p-6 border bg-stone-800/70 space-y-4
                  ${gameState.ending === EndingType.E0_Fantasy ? 'border-amber-400/60 shadow-[0_0_25px_rgba(255,193,94,0.12)]' : 'border-stone-700/70'}`}>
                <p className="text-lg text-stone-100 italic">"{t(currentEnding.description)}"</p>
                <div className="h-px w-full bg-stone-700"></div>
                <p className="font-bold text-red-500">{t(currentEnding.cause)}</p>
              </div>

              {/* True End Special Content: The Three Bubbles */}
              {gameState.ending === EndingType.True_End && (
                <div className="w-full max-w-md space-y-6 mt-8 font-serif italic">
                  <div className="flex justify-start opacity-0 animate-fade-in" style={{animationDelay: '0.8s', animationFillMode: 'forwards'}}>
                    <div className="bg-stone-800/40 p-4 rounded-lg rounded-bl-none text-sm text-stone-300 border border-stone-600/40 max-w-[80%] leading-relaxed shadow-lg shadow-black/30">
                      {t({
                        zh: "“对我来说，哥哥是我最喜欢的哥哥。”",
                        en: "\"To me, my brother is my favorite brother.\"",
                        ja: "「私にとって、兄は大好きなお兄ちゃんでした。」",
                        ko: "\"나에게 있어서, 형은 내가 가장 좋아하는 형이었습니다.\""
                      })}
                    </div>
                  </div>
                  <div className="flex justify-start opacity-0 animate-fade-in" style={{animationDelay: '2.0s', animationFillMode: 'forwards'}}>
                    <div className="bg-stone-800/40 p-4 rounded-lg rounded-bl-none text-sm text-stone-300 border border-stone-600/40 max-w-[80%] leading-relaxed shadow-lg shadow-black/30">
                      {t({
                        zh: "“是个男子汉。”",
                        en: "\"He was a man.\"",
                        ja: "「立派な男だった。」",
                        ko: "\"진정한 남자였다.\""
                      })}
                    </div>
                  </div>
                  <div className="flex justify-end opacity-0 animate-fade-in" style={{animationDelay: '3.5s', animationFillMode: 'forwards'}}>
                    <div className="bg-red-900/25 p-4 rounded-lg rounded-br-none text-sm text-red-300 border border-red-700/40 max-w-[90%] text-right leading-relaxed shadow-lg shadow-red-900/10">
                      {t({
                        zh: "“对我而言，统一教还是我最爱的统一教。”",
                        en: "\"To me, the Unification Church is still my beloved Unification Church.\"",
                        ja: "「私にとって、統一教会はまだ愛する統一教会のままです。」",
                        ko: "\"나에게 있어 통일교는 여전히 내가 사랑하는 통일교입니다.\""
                      })}
                    </div>
                  </div>
                </div>
              )}

              {gameState.ending === EndingType.True_End ? (
                 <div className="text-xs font-mono text-stone-300 max-w-xs mx-auto mt-8">
                    {t(UI_TEXT.endingDate)}
                 </div>
              ) : (
                 <div className="text-xs font-mono text-stone-300 max-w-xs mx-auto mt-8">
                    {t(UI_TEXT.deadEnd)}
                 </div>
              )}

              <button
                onClick={restart}
                className="flex items-center gap-2 px-6 py-2 border border-stone-500 text-stone-100 hover:text-white hover:border-amber-200 transition-all text-sm uppercase tracking-widest mt-8"
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
