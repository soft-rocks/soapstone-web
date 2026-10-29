<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-use-negative-clause-nor-focus, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="否定子句後面接 nor，nor 後面倒裝" mark="nor did Kristin">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I don\'t eat meat,', role: '否定子句', kind: 'dim' },
          { t: 'nor', role: 'nor', kind: 'key' },
          { t: 'do I', role: '助動詞 + 主詞', kind: 'key', ring: true },
          { t: 'eat fish.', role: '動詞' },
        ]"
      />
      <p class="translation">我不吃肉，也不吃魚。</p>
    </NoteSlide>

    <NoteSlide title="主詞不同、動作一樣時，nor 後面只寫助動詞和主詞" mark="did Kristin">
      <NoteMark
        sentence="She doesn't like coffee, nor does her husband."
        :marks="['nor does her husband']"
      />
      <p class="translation">她不喜歡咖啡，她先生也不喜歡。</p>
    </NoteSlide>

    <NoteSlide title="nor 後面要倒裝" mark="did Kristin">
      <NoteFix
        wrong="We can't stay long, nor we can come back tomorrow."
        right="We can't stay long, nor can we come back tomorrow."
        fix="can we"
      />
    </NoteSlide>

    <NoteSlide title="nor 已經是否定，不再加 not" mark="nor did">
      <NoteFix
        wrong="He didn't call, nor didn't he write."
        right="He didn't call, nor did he write."
        fix="did he"
      />
    </NoteSlide>

    <NoteSlide title="nor 接在否定子句後面" mark="did not sleep">
      <NoteFix
        wrong="She likes coffee, nor does her husband."
        right="She doesn't like coffee, nor does her husband."
        fix="doesn't like"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
