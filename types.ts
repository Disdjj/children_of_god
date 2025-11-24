
export enum EndingType {
  None = 'NONE',
  E0_Fantasy = 'E0', // New: Fantasy End
  E1_Homeless = 'E1',
  E2_Lawsuit = 'E2',
  E3_Hospital = 'E3',
  E4_Cog = 'E4',
  E5_Arrested = 'E5',
  E6_Fanatic = 'E6', // New: High Obedience End
  True_End = 'TRUE_END'
}

export type Language = 'zh' | 'en' | 'ja' | 'ko';

export interface LocalizedString {
  zh: string;
  en: string;
  ja: string;
  ko: string;
}

export interface StatsModifiers {
  sys?: number; // System Faith (Trust in govt/law)
  obe?: number; // Obedience (Compliance with mother/church)
  fam?: number; // Family Bond
}

export interface Option {
  id: string;
  text: LocalizedString;
  feedback: LocalizedString;
  nextRoundId?: number; 
  triggersEnding?: EndingType;
  modifiers?: StatsModifiers; // New: Changes stats
  requiredStats?: StatsModifiers; // New: Option only visible/selectable if stats met
}

export interface Round {
  id: number;
  year: string;
  title: LocalizedString;
  description: LocalizedString;
  imageKeyword: string;
  options: Option[];
}

export interface EndingData {
  id: EndingType;
  title: LocalizedString;
  description: LocalizedString;
  cause: LocalizedString;
}

export interface GameState {
  currentRoundId: number;
  isGameStarted: boolean;
  isGameOver: boolean;
  ending: EndingType;
  history: number[];
  showingFeedback: boolean;
  currentFeedback: LocalizedString | null;
  currentOptionTrigger: EndingType | null;
  language: Language;
  stats: {
    sys: number;
    obe: number;
    fam: number;
  };
}