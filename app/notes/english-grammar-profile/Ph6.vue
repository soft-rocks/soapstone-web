<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-defining-subject-with-which, as slides, in the order of content.md. One point per slide: the title names it, the
// diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on separate
// lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="which 說明是哪一種東西，前面不加逗號" mark="clothes which can get dirty">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I want', kind: 'dim' },
          { t: 'a phone', role: '東西', kind: 'key' },
          { t: 'which', role: '主詞', kind: 'key', ring: true },
          { t: 'takes', role: '動詞' },
          { t: 'good photos.', kind: 'dim' },
        ]"
      />
      <p class="translation">我想要一支拍照好看的手機。</p>
    </NoteSlide>

    <NoteSlide title="限定關係子句裡，which 和 that 都可以" mark="which">
      <div class="rows is-labeled">
        <div>
          <span class="term">which</span>
          <span
            ><NoteMark
              sentence="The bus which goes to the airport leaves at six."
              :marks="['which']"
            /><span class="translation">開往機場的公車六點開。</span></span
          >
        </div>
        <div>
          <span class="term">that</span>
          <span
            ><NoteMark
              sentence="The bus that goes to the airport leaves at six."
              :marks="['that']"
            /><span class="translation">開往機場的公車六點開。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="which 就是主詞，不再加 it" mark="which can">
      <NoteFix
        wrong="I bought a T-shirt which it has a car on it."
        right="I bought a T-shirt which has a car on it."
        fix="which has"
      />
    </NoteSlide>

    <NoteSlide title="說明是哪一個，不加逗號" mark="clothes which">
      <NoteFix
        wrong="The shoes, which are on the left, are mine."
        right="The shoes which are on the left are mine."
        fix="shoes which"
      />
    </NoteSlide>

    <NoteSlide title="指東西用 which 或 that" mark="which">
      <NoteFix
        wrong="I need a bag who is big enough for my laptop."
        right="I need a bag which is big enough for my laptop."
        fix="which"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
