import type { InjectionKey, Ref } from 'vue';

/** What a <NoteDeck> gives each <NoteSlide>. */
export interface DeckContext {
  /** Takes the next slide number. */
  register: () => number;
  /** The slide in view. */
  index: Ref<number>;
  /** The note's own sentence, which a slide can show with its words circled. */
  sentence?: string;
}

export const deckKey: InjectionKey<DeckContext> = Symbol('deck');
