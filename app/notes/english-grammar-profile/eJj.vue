<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-use-not-only-but-also-focus, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between
// two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="not only A but also B，強調 B" mark="not only because">
      <NoteWords
        :size="23"
        :parts="[
          { t: 'She', role: '主詞' },
          { t: 'not only', role: 'not only', kind: 'dim' },
          { t: 'sings', role: 'A：動詞', kind: 'key' },
          { t: 'but also', role: 'but also', kind: 'dim' },
          { t: 'writes her own songs.', role: 'B：動詞', kind: 'key', ring: true },
        ]"
      />
      <p class="translation">她不只會唱歌，還自己寫歌。</p>
    </NoteSlide>

    <NoteSlide title="A 和 B 也可以是兩個 because 子句" mark="but also because">
      <NoteMark
        sentence="We found a café near the museum. It was nice, not only because it was quiet but also because the staff were friendly."
        :marks="['not only because', 'but also because']"
      />
      <p class="translation">
        我們在博物館附近找到一家咖啡店。那家咖啡店很好，不只是因為安靜，也因為員工很友善。
      </p>
    </NoteSlide>

    <NoteSlide title="A 是動詞，B 也用動詞" mark="not only">
      <NoteFix
        wrong="He not only plays the piano but also singing."
        right="He not only plays the piano but also sings."
        fix="sings"
      />
    </NoteSlide>

    <NoteSlide title="not only 配 but also" mark="but also">
      <NoteFix
        wrong="She is not only smart, also kind."
        right="She is not only smart but also kind."
        fix="but also"
      />
    </NoteSlide>

    <NoteSlide title="not only 放在 A 前面" mark="not only">
      <NoteFix
        wrong="Not only she plays tennis but also golf."
        right="She plays not only tennis but also golf."
        fix="plays not only tennis"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
