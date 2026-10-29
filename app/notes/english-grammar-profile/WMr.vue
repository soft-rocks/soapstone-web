<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-affirmative-interrogative-with-be, as slides, in the order of content.md. One
// point per slide: the title names it, the diagram shows it, and `mark` circles the matching
// words of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="be 放到主詞前面就是問句" mark="are you">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Are', role: 'be', kind: 'key', ring: true },
          { t: 'you', role: '主詞', kind: 'key' },
          { t: 'hungry?', role: '形容詞' },
          { t: 'There\'s pizza in the kitchen.', kind: 'dim' },
        ]"
      />
      <p class="translation">你餓了嗎？廚房裡有披薩。</p>
    </NoteSlide>

    <NoteSlide title="有疑問詞時，疑問詞放在最前面" mark="How">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Where', role: '疑問詞', kind: 'key', ring: true },
          { t: 'is', role: 'be', kind: 'key' },
          { t: 'the lost property office?', role: '主詞' },
        ]"
      />
      <p class="translation">失物招領處在哪裡？</p>
    </NoteSlide>

    <NoteSlide title="簡短回答用 Yes 或 No 加主詞和 be" mark="are">
      <NoteMark sentence="A: Is your sister at home? B: Yes, she is." :marks="['Yes, she is']" />
      <p class="translation">A：你姊姊在家嗎？B：在。</p>
    </NoteSlide>

    <NoteSlide title="直接問的時候，be 放在主詞前面" mark="are you">
      <NoteFix
        wrong="Excuse me, where the bus station is?"
        right="Excuse me, where is the bus station?"
        fix="is the bus station"
      />
    </NoteSlide>

    <NoteSlide title="be 的疑問句不加 do" mark="are">
      <NoteFix
        wrong="Does the museum is free for students?"
        right="Is the museum free for students?"
        fix="Is"
      />
    </NoteSlide>

    <NoteSlide title="主詞是複數，用 are" mark="are">
      <NoteFix
        wrong="Is the twins in the same class?"
        right="Are the twins in the same class?"
        fix="Are"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
