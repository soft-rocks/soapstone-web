<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adjectives-form-use-with-not-that-much, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between
// two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="not that much 加比較級，表示差距不大" mark="not that much older">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'The new flat', role: '主詞' },
          { t: 'isn\'t', role: 'be + not', kind: 'key' },
          { t: 'that much', role: 'that much', kind: 'key', ring: true },
          { t: 'bigger', role: '比較級', kind: 'key' },
          { t: 'than our old one.', role: 'than + 比較的對象' },
        ]"
      />
      <p class="translation">新公寓沒有比我們以前那間大多少。</p>
    </NoteSlide>

    <NoteSlide title="look、feel 這類動詞的否定用 don't" mark="not">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'You', role: '主詞' },
          { t: 'don\'t look', role: 'don\'t + 連綴動詞', kind: 'key', ring: true },
          { t: 'that much older', role: 'that much + 比較級', kind: 'key' },
          { t: 'than your students.', kind: 'dim' },
        ]"
      />
      <p class="translation">你看起來沒有比你的學生大多少。</p>
    </NoteSlide>

    <NoteSlide title="not that much 常用來反駁對方的想法" mark="not that much older">
      <NoteMark
        sentence="A: Your brother is so tall! B: He isn't that much taller than me."
        :marks="['that much taller']"
      />
      <p class="translation">A：你哥哥好高！B：他沒有比我高多少。</p>
    </NoteSlide>

    <NoteSlide title="表示差距不大要加 not" mark="not">
      <NoteFix
        wrong="Don't worry, the test is that much harder than last time."
        right="Don't worry, the test isn't that much harder than last time."
        fix="isn't"
      />
    </NoteSlide>

    <NoteSlide title="that much 後面要用比較級" mark="older">
      <NoteFix
        wrong="The train isn't that much fast than the bus."
        right="The train isn't that much faster than the bus."
        fix="faster"
      />
    </NoteSlide>

    <NoteSlide title="修飾比較級用 that much，不用 that many" mark="that much">
      <NoteFix
        wrong="The hotel isn't that many cheaper."
        right="The hotel isn't that much cheaper."
        fix="that much"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
