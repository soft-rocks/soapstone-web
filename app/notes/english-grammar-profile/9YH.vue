<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-non-defining-subject-with-which, as slides, in the order of content.md. One point per slide: the title names it, the
// diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on separate
// lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="逗號加 which，給東西或地方補充資料" mark="Cardiff which is">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'We stayed at', kind: 'dim' },
          { t: 'the Grand Hotel,', role: '地方 + 逗號', kind: 'key' },
          { t: 'which', role: '主詞', kind: 'key', ring: true },
          { t: 'is', role: '動詞' },
          { t: 'near the station.', kind: 'dim' },
        ]"
      />
      <p class="translation">我們住在 Grand Hotel，那家飯店在車站附近。</p>
    </NoteSlide>

    <NoteSlide title="which 也可以指前面整件事" mark="which">
      <NoteMark
        sentence="My flat is on the top floor, which gives me a great view."
        :marks="['My flat is on the top floor', 'which']"
      />
      <p class="translation">我的公寓在頂樓，讓我有很棒的視野。</p>
    </NoteSlide>

    <NoteSlide title="非限定關係子句不用 that" mark="which">
      <NoteFix
        wrong="I live in Tainan, that is in the south."
        right="I live in Tainan, which is in the south."
        fix="which"
      />
    </NoteSlide>

    <NoteSlide title="which 就是主詞，不再加 it" mark="which is">
      <NoteFix
        wrong="I bought it at the market, which it is near my home."
        right="I bought it at the market, which is near my home."
        fix="which is"
      />
    </NoteSlide>

    <NoteSlide title="指東西和地方用 which" mark="which">
      <NoteFix
        wrong="We visited the museum, who was very interesting."
        right="We visited the museum, which was very interesting."
        fix="which"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
