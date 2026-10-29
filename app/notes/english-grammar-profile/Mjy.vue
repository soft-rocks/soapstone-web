<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-defining-object-with-that, as slides, in the order of content.md. One point per slide: the title names it, the
// diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on separate
// lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="that 當受詞，子句有自己的主詞" mark="clothes that I will need">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'The lemon pie', role: '名詞', kind: 'key' },
          { t: 'that', role: '受詞', kind: 'key', ring: true },
          { t: 'you', role: '主詞' },
          { t: 'made', role: '動詞' },
          { t: 'for the party was delicious.', kind: 'dim' },
        ]"
      />
      <p class="translation">你為派對做的檸檬派很好吃。</p>
    </NoteSlide>

    <NoteSlide title="子句裡不再加受詞" mark="need">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'The book that I\'m reading', kind: 'key' },
          { t: 'it', kind: 'gone' },
          { t: 'is very funny.', kind: 'dim' },
        ]"
      />
      <p class="translation">我正在看的那本書很好笑。</p>
    </NoteSlide>

    <NoteSlide title="that 已經是受詞，不再加 it" mark="need">
      <NoteFix
        wrong="The team that I like it is called The Lions."
        right="The team that I like is called The Lions."
        fix="like is"
      />
    </NoteSlide>

    <NoteSlide title="限定關係子句不加逗號" mark="clothes that">
      <NoteFix
        wrong="The film, that we saw last night, was great."
        right="The film that we saw last night was great."
        fix="film that"
      />
    </NoteSlide>

    <NoteSlide title="that 當受詞時，子句要有自己的主詞" mark="that I">
      <NoteFix
        wrong="The shoes that bought are too small."
        right="The shoes that I bought are too small."
        fix="that I"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
