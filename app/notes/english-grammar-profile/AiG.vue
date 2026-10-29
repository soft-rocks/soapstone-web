<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-what-a-pity-that-clause, as slides, in the order of content.md. One point per slide: the title names it, the
// diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on separate
// lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="What a pity 後面接子句，說可惜的事" mark="What a pity that you didn't come">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'What a pity', role: '真可惜', kind: 'key', ring: true },
          { t: 'that', role: '可省略', kind: 'dim' },
          { t: 'it', role: '主詞' },
          { t: 'rained', role: '動詞', kind: 'key' },
          { t: 'on your wedding day.', kind: 'dim' },
        ]"
      />
      <p class="translation">你結婚那天下雨，真可惜。</p>
    </NoteSlide>

    <NoteSlide title="that 可以省略" mark="that">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'What a pity', kind: 'dim' },
          { t: 'that', kind: 'gone' },
          { t: 'you left your camera at home.', role: '子句', kind: 'key' },
        ]"
      />
      <p class="translation">你把相機忘在家裡，真可惜。</p>
    </NoteSlide>

    <NoteSlide title="What a shame 意思一樣" mark="What a pity">
      <NoteMark sentence="What a shame the shop has closed." :marks="['What a shame']" />
      <p class="translation">那家店關了，真可惜。</p>
    </NoteSlide>

    <NoteSlide title="pity 前面要加 a" mark="a pity">
      <NoteFix
        wrong="What pity that you can't stay."
        right="What a pity that you can't stay."
        fix="a pity"
      />
    </NoteSlide>

    <NoteSlide title="that 後面接完整的子句" mark="you didn't come">
      <NoteFix
        wrong="What a pity that missing the train."
        right="What a pity that we missed the train."
        fix="we missed"
      />
    </NoteSlide>

    <NoteSlide title="子句不倒裝，主詞在動詞前面" mark="you didn't">
      <NoteFix
        wrong="What a pity didn't you come."
        right="What a pity you didn't come."
        fix="you didn't"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
