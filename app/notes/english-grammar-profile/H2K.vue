<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adjectives-form-ellipsis-with-the-75, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between
// two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="one of the + 最高級，後面省略複數名詞" mark="one of the worst">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'That winter was', kind: 'dim' },
          { t: 'one of the coldest', role: 'one of the + 最高級', kind: 'key', ring: true },
          { t: 'winters', kind: 'gone' },
        ]"
      />
      <p class="translation">那年冬天是最冷的幾個冬天之一。</p>
    </NoteSlide>

    <NoteSlide title="the 和 one of the 一起用" mark="one of the worst">
      <NoteMark
        sentence="He's not the tallest player, but he's one of the tallest."
        :marks="['the tallest', 'one of the tallest']"
      />
      <p class="translation">他不是最高的球員，不過是最高的之一。</p>
    </NoteSlide>

    <NoteSlide title="在一組東西裡比較，最高級前面加 the" mark="the worst">
      <NoteFix
        wrong="Of all the hotels, this one was cheapest."
        right="Of all the hotels, this one was the cheapest."
        fix="the cheapest"
      />
    </NoteSlide>

    <NoteSlide title="one of 後面要接 the" mark="one of the">
      <NoteFix
        wrong="That year was one of worst."
        right="That year was one of the worst."
        fix="the worst"
      />
    </NoteSlide>

    <NoteSlide title="前文沒有可以比較的東西，名詞不能省略" mark="worst">
      <NoteFix
        wrong="I went to the party yesterday. It was the most boring."
        right="I went to the party#2 yesterday. It was the most boring party I've been to."
        fix="party"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
