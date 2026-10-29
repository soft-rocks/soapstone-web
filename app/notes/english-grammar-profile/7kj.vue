<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-combining-clauses-of-the-same-type, as slides, in the order of content.md. One
// point per slide: the title names it, the diagram shows it, and `mark` circles the matching
// words of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="第二個 because 子句可以省略 because" mark="and there are">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'I like this café', kind: 'dim' },
          { t: 'because it\'s quiet', role: 'because 子句 1', kind: 'key' },
          { t: 'and', role: 'and' },
          { t: 'because', kind: 'gone' },
          { t: 'the coffee is good.', role: 'because 子句 2', kind: 'key', ring: true },
        ]"
      />
      <p class="translation">我喜歡這家咖啡店，因為很安靜，而且咖啡很好喝。</p>
    </NoteSlide>

    <NoteSlide title="and 也可以連接兩個動詞-ing 子句" mark="and">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'We\'re', kind: 'dim' },
          { t: 'going to the mountains', role: '動詞-ing', kind: 'key' },
          { t: 'and', role: 'and', ring: true },
          { t: 'staying in a cabin.', role: '動詞-ing', kind: 'key' },
        ]"
      />
      <p class="translation">我們要去山上，住在小木屋。</p>
    </NoteSlide>

    <NoteSlide title="and 連接的兩個子句要同類" mark="and">
      <NoteFix
        wrong="My sister loves dancing and to sing in the choir."
        right="My sister loves dancing and singing in the choir."
        fix="singing"
      />
    </NoteSlide>

    <NoteSlide title="兩個 because 子句用 and 連在同一個句子裡" mark="because">
      <NoteFix
        wrong="We left early because it was late. And because we were tired."
        right="We left early because it was late and we were tired."
        fix="and we were tired"
      />
    </NoteSlide>

    <NoteSlide title="if 子句裡不用 will" mark="and">
      <NoteFix
        wrong="If you want to relax and you will see your friends, go to the country."
        right="If you want to relax and see your friends, go to the country."
        fix="and see"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
