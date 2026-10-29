<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adjectives-form-one-of-the, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="one of the + 最高級後面接複數名詞" mark="days">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'Shibuya Crossing is', kind: 'dim' },
          { t: 'one of the most famous', role: 'one of the + 最高級', kind: 'key' },
          { t: 'sights', role: '複數名詞', kind: 'key', ring: true },
          { t: 'in Tokyo.', kind: 'dim' },
        ]"
      />
      <p class="translation">澀谷十字路口是東京最有名的景點之一。</p>
    </NoteSlide>

    <NoteSlide title="one of the ... 當主詞，動詞用單數" mark="one of the best">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'One of the best players', role: '主詞（one）', kind: 'key' },
          { t: 'is', role: '單數動詞', kind: 'key', ring: true },
          { t: 'ill today.', kind: 'dim' },
        ]"
      />
      <p class="translation">最好的球員之一今天生病了。</p>
    </NoteSlide>

    <NoteSlide title="所有格可以代替 the" mark="one of the">
      <NoteMark sentence="Ken is one of my oldest friends." :marks="['one of my oldest']" />
      <p class="translation">Ken 是我最老的朋友之一。</p>
    </NoteSlide>

    <NoteSlide title="one of the 後面的名詞用複數" mark="days">
      <NoteFix
        wrong="She's one of the best singer in Korea."
        right="She's one of the best singers in Korea."
        fix="singers"
      />
    </NoteSlide>

    <NoteSlide title="主詞是 one，動詞用單數" mark="was">
      <NoteFix
        wrong="One of my oldest friends live in Paris."
        right="One of my oldest friends lives in Paris."
        fix="lives"
      />
    </NoteSlide>

    <NoteSlide title="最高級前面要加 the" mark="the best">
      <NoteFix
        wrong="It's one of best restaurants in town."
        right="It's one of the best restaurants in town."
        fix="the best"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
