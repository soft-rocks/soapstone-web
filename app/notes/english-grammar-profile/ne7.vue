<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-with-adverbs-454, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + can / can't + 副詞 + 原形動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'can', kind: 'key', ring: true },
          { t: 'honestly', role: '副詞' },
          { t: 'say', role: '原形動詞' },
          { t: 'that I know her personality fairly well.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="副詞、原形動詞" mark="can">
      <div class="rows is-labeled">
        <div>
          <span class="term">副詞</span>
          <span>放在 can 或 can't 後面。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>主要動詞，放在副詞後面。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="這類副詞放在 can 後面" mark="can">
      <NoteFix
        wrong="I honestly can say that she is reliable."
        right="I can honestly say that she is reliable."
        :fix="['can', 'say']"
      />
    </NoteSlide>
    <NoteSlide title="no longer 已經是否定，不再加 not">
      <NoteFix wrong="I can't no longer wait." right="I can no longer wait." :fix="['can']" />
    </NoteSlide>
    <NoteSlide title="修飾動詞要用副詞 fully">
      <NoteFix
        wrong="I can full understand your problem."
        right="I can fully understand your problem."
        :fix="['fully']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
