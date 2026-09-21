export interface WordToken {
  text: string;
  is_masked: boolean;
}

export interface Sentence {
  /** Canonical URL of this sentence's index.json on the CDN. */
  link: string;
  original: string;
  /** Keyed by locale code, e.g. `zhtw`. */
  translations: Record<string, string>;
  word_tokens: WordToken[];
  images: string[];
  audios: string[];
}
