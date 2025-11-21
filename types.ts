export enum SlideType {
  INTRO = 'INTRO',
  WARMUP = 'WARMUP',
  VOCABULARY = 'VOCABULARY',
  READING = 'READING',
  COMPREHENSION = 'COMPREHENSION',
  TRUE_FALSE = 'TRUE_FALSE',
  MATCHING = 'MATCHING',
  SUMMARY = 'SUMMARY'
}

export interface VocabWord {
  word: string;
  definition: string;
  icon: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  isTrue: boolean;
  explanation: string;
}

export interface MatchingPair {
  id: string;
  term: string;
  match: string;
}

export interface SlideState {
  currentSlideIndex: number;
  score: number;
  completedSlides: number[];
}