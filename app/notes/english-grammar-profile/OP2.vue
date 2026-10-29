<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-rather-than-non-finite-clause, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="A 是 to 不定詞，rather than 後面用原形動詞" mark="rather than stay">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I\'d prefer', kind: 'dim' },
          { t: 'to walk', role: 'A：to 不定詞', kind: 'key' },
          { t: 'rather than', role: 'rather than' },
          { t: 'take the bus.', role: 'B：原形動詞', kind: 'key', ring: true },
        ]"
      />
      <p class="translation">我寧可走路，也不要搭公車。</p>
    </NoteSlide>

    <NoteSlide title="A 是動詞-ing，B 也用動詞-ing" mark="rather than">
      <NoteWords
        :size="23"
        :parts="[
          { t: 'We\'re keen on', kind: 'dim' },
          { t: 'hiking', role: 'A：動詞-ing', kind: 'key' },
          { t: 'rather than', role: 'rather than' },
          { t: 'going shopping.', role: 'B：動詞-ing', kind: 'key', ring: true },
        ]"
      />
      <p class="translation">我們喜歡健行，不喜歡逛街。</p>
    </NoteSlide>

    <NoteSlide title="Rather than 放在句首" mark="rather than">
      <NoteMark
        sentence="Rather than wait for the bus, we walked home."
        :marks="['Rather than wait']"
      />
      <p class="translation">我們沒有等公車，直接走回家。</p>
    </NoteSlide>

    <NoteSlide title="to read 後面的 B 不用動詞-ing" mark="stay">
      <NoteFix
        wrong="I'd prefer to read rather than watching TV."
        right="I'd prefer to read rather than watch TV."
        fix="watch"
      />
    </NoteSlide>

    <NoteSlide title="swimming 後面的 B 不用原形動詞" mark="stay">
      <NoteFix
        wrong="She enjoys swimming rather than run."
        right="She enjoys swimming rather than running."
        fix="running"
      />
    </NoteSlide>

    <NoteSlide title="rather 後面要接 than" mark="rather than">
      <NoteFix
        wrong="We could cycle rather take the train."
        right="We could cycle rather than take the train."
        fix="rather than"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
