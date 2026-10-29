<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adjectives-form-use-with-by-far, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between
// two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="by far 放在 the 前面，表示遠遠超過其他的" mark="by far the most exciting">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'Ken is', kind: 'dim' },
          { t: 'by far', role: 'by far', kind: 'key', ring: true },
          { t: 'the tallest', role: 'the + 最高級', kind: 'key' },
          { t: 'in the class.', kind: 'dim' },
        ]"
      />
      <p class="translation">Ken 是班上最高的，比其他人高很多。</p>
    </NoteSlide>

    <NoteSlide title="by far 也可以放在名詞後面" mark="by far">
      <NoteMark sentence="She's the fastest runner by far." :marks="['by far']" />
      <p class="translation">她是跑得最快的，其他人差遠了。</p>
    </NoteSlide>

    <NoteSlide title="by far 不放在 the 和最高級中間" mark="by far the">
      <NoteFix
        wrong="It was the by far best meal of the trip."
        right="It was by far the best meal of the trip."
        fix="by far the best"
      />
    </NoteSlide>

    <NoteSlide title="加強 the most 的最高級用 by far" mark="by far">
      <NoteFix
        wrong="This is the very most beautiful forest of all."
        right="This is by far the most beautiful forest of all."
        fix="by far"
      />
    </NoteSlide>

    <NoteSlide title="by far 後面的最高級要加 the" mark="the most exciting">
      <NoteFix
        wrong="Ken is by far tallest in the class."
        right="Ken is by far the tallest in the class."
        fix="the tallest"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
