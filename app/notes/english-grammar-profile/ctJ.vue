<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-use-multiple-main-clauses-narrative, as slides, in the order of content.md. One
// point per slide: the title names it, the diagram shows it, and `mark` circles the matching
// words of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="連接詞說明子句之間的關係" mark="but then">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'The bus didn\'t come,', kind: 'dim' },
          { t: 'so', role: '結果', kind: 'key', ring: true },
          { t: 'we walked,', kind: 'dim' },
          { t: 'and then', role: '接下來', kind: 'key' },
          { t: 'it started to rain.', kind: 'dim' },
        ]"
      />
      <p class="translation">公車沒來，所以我們用走的，接著就開始下雨了。</p>
    </NoteSlide>

    <NoteSlide title="but 後面是出乎意料的事" mark="but then">
      <NoteMark
        sentence="I lost my keys, so I called my sister, but she was at work."
        :marks="['so', 'but']"
      />
      <p class="translation">我弄丟了鑰匙，所以打給我姊姊，可是她在上班。</p>
    </NoteSlide>

    <NoteSlide title="主要子句之間要用連接詞" mark="but then">
      <NoteFix
        wrong="We missed the train, we took a taxi, it was expensive."
        right="We missed the train, so we took a taxi, but it was expensive."
        fix="so we took a taxi, but"
      />
    </NoteSlide>

    <NoteSlide title="so 前面不再加 because" mark="but">
      <NoteFix
        wrong="Because the café was full, so we sat outside."
        right="The café was full, so we sat outside."
        fix="The café was full"
      />
    </NoteSlide>

    <NoteSlide title="then 連接子句時，前面加 and 或 but" mark="but then">
      <NoteFix
        wrong="She opened the box then she screamed."
        right="She opened the box, and then she screamed."
        fix="and then"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
