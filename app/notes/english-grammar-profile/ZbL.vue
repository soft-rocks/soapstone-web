<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adjectives-form-ellipsis-with-the, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="前面說過是什麼，the + 最高級後面省略名詞" mark="the best">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'All the rooms are nice,', role: '一組東西', kind: 'dim' },
          { t: 'but this one is', kind: 'dim' },
          { t: 'the biggest', role: 'the + 最高級', kind: 'key', ring: true },
          { t: 'room', kind: 'gone' },
        ]"
      />
      <p class="translation">所有房間都不錯，不過這間最大。</p>
    </NoteSlide>

    <NoteSlide title="長的形容詞用 the most" mark="the best">
      <NoteMark
        sentence="All the questions were hard, but the last one was the most difficult."
        :marks="['the most difficult']"
      />
      <p class="translation">所有題目都很難，不過最後一題最難。</p>
    </NoteSlide>

    <NoteSlide title="在一組東西裡比較，最高級前面加 the" mark="the best">
      <NoteFix
        wrong="Of all the presents, Mark's was most beautiful."
        right="Of all the presents, Mark's was the most beautiful."
        fix="the most"
      />
    </NoteSlide>

    <NoteSlide title="三個以上比較，用最高級" mark="best">
      <NoteFix
        wrong="I have three brothers, and Tom is the older."
        right="I have three brothers, and Tom is the oldest."
        fix="oldest"
      />
    </NoteSlide>

    <NoteSlide title="加了 -est 就不加 most" mark="best">
      <NoteFix
        wrong="Of the three rooms, this one is the most biggest."
        right="Of the three rooms, this one is the biggest."
        fix="the biggest"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
