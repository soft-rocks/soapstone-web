<script setup lang="ts">
/**
 * A sentence with some of its words circled. A slide puts the note's own sentence in its
 * top-right corner and circles the part it is about. Each entry of `marks` is a run of
 * consecutive words, matched without punctuation, and gets one ring. `her#2` picks the second
 * match, for a word the sentence has twice.
 */
import { measure } from '~/utils/measure';
import { ring } from '~/utils/ring';

const props = defineProps<{ sentence: string; marks: string[] }>();

const bare = (word: string) => word.toLowerCase().replace(/[^\p{L}\p{N}']/gu, '');

const groups = computed(() => {
  const words = props.sentence.split(' ');
  const keys = words.map(bare);
  // `box` is the ring's width in em: the text plus the 0.4em the ring reaches past each side.
  // The ring is 1.9em tall: the text's 1.2em plus 0.35em above and below.
  const out: { text: string; marked: boolean; box: number }[] = [];
  let at = 0;
  const starts = new Map<number, number>();
  for (const mark of props.marks) {
    const [run = '', nth = '1'] = mark.split('#');
    const want = run.split(' ').map(bare);
    let left = Number(nth);
    for (let i = 0; i + want.length <= keys.length; i++) {
      if (want.every((word, k) => keys[i + k] === word) && --left === 0) {
        starts.set(i, want.length);
        break;
      }
    }
  }
  while (at < words.length) {
    const length = starts.get(at);
    if (length) {
      const text = words.slice(at, at + length).join(' ');
      out.push({ text, marked: true, box: +(measure(text, 1, 700) + 0.8).toFixed(3) });
      at += length;
    } else {
      out.push({ text: words[at] ?? '', marked: false, box: 0 });
      at += 1;
    }
  }
  return out;
});
</script>

<template>
  <p class="mark-sentence">
    <template v-for="(group, index) in groups" :key="index"
      ><span v-if="group.marked" class="mark-ring"
        >{{ group.text
        }}<svg :viewBox="`0 0 ${group.box} 1.9`" preserveAspectRatio="none" aria-hidden="true">
          <path :d="ring(group.box, 1.9)" vector-effect="non-scaling-stroke" /></svg></span
      ><span v-else>{{ group.text }}</span
      >{{ index < groups.length - 1 ? ' ' : '' }}</template
    >
  </p>
</template>

<style>
/* Name the layer order first. A component style can load before main.css; without this,
   components would become the first layer, and the base reset would override it. */
@layer theme, base, components, utilities;

@layer components {
  .deck .mark-sentence {
    flex: none;
    margin: 0.3em 0.4em 0 0;
    font-size: 0.85em;
    white-space: nowrap;
    color: var(--ui-text-muted);
  }

  /* The margin is as wide as the part of the ring past the text, so the ring does not touch
     the words or the ring next to it */
  .deck .mark-ring {
    position: relative;
    margin: 0 0.4em;
    white-space: nowrap;
    font-weight: 600;
    color: var(--color-ink);
  }

  .deck .mark-ring svg {
    position: absolute;
    inset: -0.35em -0.4em;
    width: calc(100% + 0.8em);
    height: calc(100% + 0.7em);
    overflow: visible;
    pointer-events: none;
  }

  .deck .mark-ring path {
    fill: none;
    stroke: var(--color-ink);
    stroke-width: 1.5;
    stroke-linecap: round;
  }

  /* Only the sentence in the corner moves right on a phone. A sentence in the slide body
     stays on the left with its translation. */
  @container (max-width: 559px) {
    .deck .slide-head .mark-sentence {
      align-self: flex-end;
    }
  }
}
</style>
