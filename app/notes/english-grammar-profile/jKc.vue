<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-the-same-noun-as-pronoun-or, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="the same + 名詞 + as，名詞說哪一方面一樣" mark="the same age as you">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'My sister is', kind: 'dim' },
          { t: 'the same', role: 'the same', kind: 'key' },
          { t: 'height', role: '名詞', kind: 'key', ring: true },
          { t: 'as me.', role: 'as + 受格' },
        ]"
      />
      <p class="translation">我姊姊跟我一樣高。</p>
    </NoteSlide>

    <NoteSlide title="名詞可以不寫，as 後面也可以是所有格代名詞" mark="as you">
      <NoteMark sentence="Your bag is the same as mine." :marks="['the same as mine']" />
      <p class="translation">你的包包跟我的一樣。</p>
    </NoteSlide>

    <NoteSlide title="same 前面要加 the" mark="the same">
      <NoteFix
        wrong="We're in same class as Ken."
        right="We're in the same class as Ken."
        fix="the same"
      />
    </NoteSlide>

    <NoteSlide title="the same 後面接 as，不接 than" mark="as">
      <NoteFix
        wrong="Her dress is the same color than mine."
        right="Her dress is the same color as mine."
        fix="as"
      />
    </NoteSlide>

    <NoteSlide title="the same 後面接 as，不接 with" mark="as">
      <NoteFix
        wrong="This cake tastes the same with the one at the bakery."
        right="This cake tastes the same as the one at the bakery."
        fix="as"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
