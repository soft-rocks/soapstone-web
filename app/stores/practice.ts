import { defineStore } from 'pinia';

/** One practice set's saved progress: its shuffled order and the sentences already done. */
export interface SavedRun {
  order: string[];
  /** Sentences answered correctly. A done sentence is not asked again until a restart. */
  done: string[];
  /** Shown on the practices page. */
  title?: string;
  /** The route of the practice page, for the link on the practices page. */
  path?: string;
  /** How many times every sentence in the set was answered. Opening it does not count. */
  completions?: number;
  /** When the set was last opened, in milliseconds since the epoch. */
  openedAt?: number;
}

/** What the practices page needs to know about one set. */
export interface PracticeSummary {
  runId: string;
  title: string;
  path: string;
  completions: number;
  done: number;
  total: number;
  finished: boolean;
}

interface PracticeState {
  /** Saved progress per practice set, keyed by run id (a note id, or a book id). */
  runs: Record<string, SavedRun>;
  /** The set on screen now. */
  runId: string;
  position: number;
  /** Sentences the CDN has no file for, skipped in this visit only. */
  skipped: string[];
}

export const usePracticeStore = defineStore('practiceRuns', {
  state: (): PracticeState => ({
    runs: {},
    runId: '',
    position: 0,
    skipped: [],
  }),

  getters: {
    run: (state): SavedRun => state.runs[state.runId] ?? { order: [], done: [] },
    order(): string[] {
      return this.run.order;
    },
    current(): string {
      return this.run.order[this.position] ?? '';
    },
    finished(): boolean {
      return this.position >= this.run.order.length;
    },
    answered(): number {
      return this.run.done.length;
    },
    /**
     * Every set opened so far, for the practices page. The set opened last is on top;
     * a finished set goes to the bottom, below every set still in progress.
     */
    summaries: (state): PracticeSummary[] =>
      Object.entries(state.runs)
        .filter(([, run]) => run.path)
        .map(([runId, run]) => ({
          runId,
          title: run.title || runId,
          path: run.path!,
          completions: run.completions ?? 0,
          done: run.done.length,
          total: run.order.length,
          finished: run.order.length > 0 && run.done.length >= run.order.length,
          openedAt: run.openedAt ?? 0,
        }))
        .sort((a, b) => Number(a.finished) - Number(b.finished) || b.openedAt - a.openedAt)
        .map(({ openedAt: _openedAt, ...summary }) => summary),
  },

  actions: {
    /**
     * Opens a practice set. A set with saved progress keeps its order and resumes at the
     * first sentence not done yet. A new set, or one whose sentences changed, is shuffled.
     */
    start(runId: string, sentences: string[], meta: { title: string; path: string }) {
      const saved = this.runs[runId];
      if (!saved || !sameSentences(saved.order, sentences)) {
        this.runs[runId] = { ...saved, order: shuffle(sentences), done: [] };
      }
      const run = this.runs[runId]!;
      run.title = meta.title;
      run.path = meta.path;
      run.openedAt = Date.now();
      this.runId = runId;
      this.skipped = [];
      this.position = -1;
      this.next();
    },
    /** Shuffles the set again and clears what was done. */
    restart() {
      const run = this.runs[this.runId];
      if (!run) return;
      run.order = shuffle(run.order);
      run.done = [];
      this.skipped = [];
      this.position = -1;
      this.next();
    },
    markCorrect(sentence: string) {
      const run = this.runs[this.runId];
      if (!run || !sentence) return;
      if (run.done.includes(sentence)) return;
      run.done.push(sentence);
      // The last sentence of the set answered: that is one practice
      if (run.done.length === run.order.length) run.completions = (run.completions ?? 0) + 1;
    },
    markMissing(sentence: string) {
      if (sentence && !this.skipped.includes(sentence)) this.skipped.push(sentence);
    },
    /** Moves to the next sentence that is neither done nor skipped. */
    next() {
      const { order, done } = this.run;
      let position = this.position + 1;
      while (
        position < order.length &&
        (done.includes(order[position]!) || this.skipped.includes(order[position]!))
      ) {
        position += 1;
      }
      this.position = position;
    },
  },

  // Only the saved progress goes to localStorage['soapstone:practiceRuns']
  persist: { pick: ['runs'] },
});

function sameSentences(a: string[], b: string[]): boolean {
  if (a.length !== b.length) return false;
  const set = new Set(a);
  return b.every((sentence) => set.has(sentence));
}

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j]!, copy[i]!];
  }
  return copy;
}
