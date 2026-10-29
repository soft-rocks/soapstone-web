<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-non-defining-object-with-which, as slides, in the order of content.md. One point per slide: the title names it, the
// diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on separate
// lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="逗號加 which，which 當子句動詞的受詞" mark="your letter which I received">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'I\'m wearing my grandmother\'s ring,', role: '東西 + 逗號', kind: 'dim' },
          { t: 'which', role: '受詞', kind: 'key', ring: true },
          { t: 'she', role: '主詞' },
          { t: 'gave', role: '動詞', kind: 'key' },
          { t: 'me on my wedding day.', kind: 'dim' },
        ]"
      />
      <p class="translation">我戴著奶奶的戒指，那是她在我結婚那天送我的。</p>
    </NoteSlide>

    <NoteSlide title="子句在句子中間，前後都加逗號" mark="which I received">
      <NoteMark
        sentence="My old laptop, which I bought in 2015, still works."
        :marks="['which I bought in 2015']"
      />
      <p class="translation">我那台舊筆電是 2015 年買的，現在還能用。</p>
    </NoteSlide>

    <NoteSlide title="子句裡不再加受詞" mark="received">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'The soup, which my father made,', kind: 'key' },
          { t: 'it', kind: 'gone' },
          { t: 'was too salty.', kind: 'dim' },
        ]"
      />
      <p class="translation">那碗湯是我爸爸煮的，太鹹了。</p>
    </NoteSlide>

    <NoteSlide title="介系詞放在子句動詞後面" mark="which I received">
      <NoteMark
        sentence="The concert tickets, which we paid for in advance, were non-refundable."
        :marks="['paid for']"
      />
      <p class="translation">演唱會的票我們事先付了錢，不能退。</p>
    </NoteSlide>

    <NoteSlide title="which 已經是受詞，不再加 it" mark="received">
      <NoteFix
        wrong="I lent him my camera, which he broke it."
        right="I lent him my camera, which he broke."
        fix="broke"
      />
    </NoteSlide>

    <NoteSlide title="非限定關係子句不用 that" mark="which">
      <NoteFix
        wrong="We ate at Mario's, that my sister recommended."
        right="We ate at Mario's, which my sister recommended."
        fix="which"
      />
    </NoteSlide>

    <NoteSlide title="非限定關係子句不能省略 which" mark="which">
      <NoteFix
        wrong="I finally read his novel, I bought last year."
        right="I finally read his novel, which I bought last year."
        fix="which"
      />
    </NoteSlide>

    <NoteSlide title="指東西用 which" mark="which">
      <NoteFix
        wrong="She showed us her garden, who she planted herself."
        right="She showed us her garden, which she planted herself."
        fix="which"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
