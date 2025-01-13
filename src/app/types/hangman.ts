export interface HangmanWord {
  word: string;
  hint: string;
  category: string;
}

export interface HangmanGameState {
  currentWord: HangmanWord;
  guessedLetters: string[];
  mistakes: number;
  gameStatus: 'playing' | 'won' | 'lost';
} 