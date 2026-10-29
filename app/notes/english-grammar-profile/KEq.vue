<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// future-form-with-adverbs-411, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + am / is / are + going to + 副詞 + 原形動詞" mark="to">
      <div class="rows is-labeled">
        <div>
          <span class="term">副詞</span>
          <span>放在 to 後面，修飾後面的動詞。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>主要動詞。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="going to 中間不放副詞" mark="going to">
      <NoteFix
        wrong="I'm going briefly to introduce the club."
        right="I'm going to briefly introduce the club."
        :fix="['to', 'introduce']"
      />
    </NoteSlide>
    <NoteSlide title="副詞後面接原形動詞">
      <NoteFix
        wrong="Nobody is going to even looking at you."
        right="Nobody is going to even look at you."
        :fix="['look']"
      />
    </NoteSlide>
    <NoteSlide title="to 後面就算隔了副詞，還是接原形動詞" mark="to">
      <NoteFix
        wrong="She's going to finally passed the test."
        right="She's going to finally pass the test."
        :fix="['pass']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
