<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-clause-clause-ellipted-subject, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞一樣時，第二個動作省略主詞" mark="and watch TV">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'We', role: '主詞' },
          { t: 'go to the park', role: '動作 1', kind: 'key' },
          { t: 'and', role: 'and' },
          { t: 'we', kind: 'gone' },
          { t: 'play football.', role: '動作 2', kind: 'key', ring: true },
        ]"
      />
      <p class="translation">我們去公園踢足球。</p>
    </NoteSlide>

    <NoteSlide title="助動詞和 to 也一起省略" mark="watch">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'I can', role: '主詞 + 助動詞' },
          { t: 'wash', role: '動詞 1', kind: 'key' },
          { t: 'or', role: 'or' },
          { t: 'I can', kind: 'gone' },
          { t: 'dry the dishes.', role: '動詞 2', kind: 'key', ring: true },
        ]"
      />
      <p class="translation">我可以洗碗或擦碗。</p>
    </NoteSlide>

    <NoteSlide title="省略 to 時，第二個動詞也用原形" mark="watch TV">
      <NoteFix
        wrong="My dad likes to fish and sleeping in the sun."
        right="My dad likes to fish and sleep in the sun."
        fix="sleep"
      />
    </NoteSlide>

    <NoteSlide title="兩個動作都是過去的事，都用過去式" mark="watch">
      <NoteFix
        wrong="Last week we visited my aunt and stay for dinner."
        right="Last week we visited my aunt and stayed for dinner."
        fix="stayed"
      />
    </NoteSlide>

    <NoteSlide title="主詞不一樣時，不能省略" mark="She likes">
      <NoteFix
        wrong="I cook dinner and washes the dishes."
        right="I cook dinner and my brother washes the dishes."
        fix="my brother"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
