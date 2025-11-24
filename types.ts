export enum EndingType {
  None = 'NONE',
  E1_Homeless = 'E1',
  E2_Lawsuit = 'E2',
  E3_Hospital = 'E3',
  E4_Cog = 'E4',
  E5_Arrested = 'E5',
  True_End = 'TRUE_END'
}

export type Language = 'zh' | 'en';

export interface LocalizedString {
  zh: string;
  en: string;
}

export interface Option {
  id: string;
  text: LocalizedString;
  feedback: LocalizedString;
  nextRoundId?: number; // If undefined, maps to next sequential round by default
  triggersEnding?: EndingType;
}

export interface Round {
  id: number;
  year: string;
  title: LocalizedString;
  description: LocalizedString;
  imageKeyword: string; // Used to seed the placeholder image
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
  history: number[]; // Track path
  showingFeedback: boolean;
  currentFeedback: LocalizedString | null;
  currentOptionTrigger: EndingType | null; // Track where the current feedback leads
  language: Language;
}