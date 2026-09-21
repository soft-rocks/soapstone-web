import { defineStore } from 'pinia';

interface PracticeState {
  /** Grammar note this run belongs to. */
  noteId: string;
  /** Sentences in the order they will be shown, shuffled at the start of a run. */
  order: string[];
  position: number;
  /** Sentences answered correctly, keyed by the sentence itself. */
  correct: string[];
  /** Sentences the CDN has no recording for, skipped during the run. */
  missing: string[];
}

const empty = (): PracticeState => ({
  noteId: '',
  order: [],
  position: 0,
  correct: [],
  missing: [],
});

export const usePracticeStore = defineStore('practice', {
  state: empty,

  getters: {
    current: (state) => state.order[state.position] ?? '',
    finished: (state) => state.position >= state.order.length,
    answered: (state) => state.correct.length,
  },

  actions: {
    /** Every visit to a note's practice starts a fresh run; nothing carries over. */
    start(noteId: string, sentences: string[]) {
      this.$patch({ ...empty(), noteId, order: shuffle(sentences) });
    },
    markCorrect(sentence: string) {
      if (sentence && !this.correct.includes(sentence)) this.correct.push(sentence);
    },
    markMissing(sentence: string) {
      if (sentence && !this.missing.includes(sentence)) this.missing.push(sentence);
    },
    next() {
      this.position += 1;
    },
  },

  // Persisted to localStorage['soapstone:practice'] so a reload mid-run keeps its place
  persist: true,
});

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j]!, copy[i]!];
  }
  return copy;
}
