<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-either-or, as slides, in the order of content.md. One point per slide: the title
// names it, the diagram shows it, and `mark` circles the matching words of the note's sentence.
// Keep the parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="either 放在句首，後面兩個子句選一個" mark="Either">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'Either', role: 'either', kind: 'key', ring: true },
          { t: 'you finish your homework', role: '子句 1', kind: 'key' },
          { t: 'or', role: 'or' },
          { t: 'you stay home tonight.', role: '子句 2', kind: 'key' },
        ]"
      />
      <p class="translation">你要嘛把作業寫完，要嘛今晚待在家。</p>
    </NoteSlide>

    <NoteSlide title="主詞一樣時，either 放在動詞前面" mark="or">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'We can', role: '主詞 + 助動詞' },
          { t: 'either', role: 'either', kind: 'key', ring: true },
          { t: 'take the bus', role: '動詞 1', kind: 'key' },
          { t: 'or', role: 'or' },
          { t: 'walk.', role: '動詞 2', kind: 'key' },
        ]"
      />
      <p class="translation">我們可以搭公車，或是走路。</p>
    </NoteSlide>

    <NoteSlide title="either 配 or，neither 才配 nor" mark="or">
      <NoteFix
        wrong="You can either call me nor send an email."
        right="You can either call me or send an email."
        fix="or"
      />
    </NoteSlide>

    <NoteSlide title="第二個選擇前面用 or" mark="or">
      <NoteFix
        wrong="Either you call her, either you send her a text."
        right="Either you call her or you send her a text."
        fix="or"
      />
    </NoteSlide>

    <NoteSlide title="or 後面的形式跟 either 後面一樣" mark="or">
      <NoteFix
        wrong="You should either rest or going to the doctor."
        right="You should either rest or go to the doctor."
        fix="go"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
