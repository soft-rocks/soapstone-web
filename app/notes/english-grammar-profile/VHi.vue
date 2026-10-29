<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-non-defining-subject-with-who, as slides, in the order of content.md. One point per slide: the title names it, the
// diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on separate
// lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="逗號加 who，給前面的人補充資料" mark="my brother who is">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'This is', kind: 'dim' },
          { t: 'my aunt,', role: '人 + 逗號', kind: 'key' },
          { t: 'who', role: '主詞', kind: 'key', ring: true },
          { t: 'lives', role: '動詞' },
          { t: 'in Tainan.', kind: 'dim' },
        ]"
      />
      <p class="translation">這是我阿姨，她住在台南。</p>
    </NoteSlide>

    <NoteSlide title="拿掉補充資料，句子還是完整的" mark="who is also interested in sports">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'My brother,', kind: 'key' },
          { t: 'who is a doctor,', role: '補充資料', kind: 'gone' },
          { t: 'lives in London.', kind: 'key' },
        ]"
      />
      <p class="translation">我哥哥是醫生，他住在倫敦。</p>
    </NoteSlide>

    <NoteSlide title="補充資料前面要加逗號" mark="brother who">
      <NoteFix
        wrong="I called my mother who lives in Canada."
        right="I called my mother, who lives in Canada."
        fix="mother who"
      />
    </NoteSlide>

    <NoteSlide title="指人用 who" mark="who">
      <NoteFix
        wrong="This is Jenny, which is my best friend."
        right="This is Jenny, who is my best friend."
        fix="who"
      />
    </NoteSlide>

    <NoteSlide title="非限定關係子句不用 that" mark="who">
      <NoteFix
        wrong="My father, that is a teacher, loves books."
        right="My father, who is a teacher, loves books."
        fix="who"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
