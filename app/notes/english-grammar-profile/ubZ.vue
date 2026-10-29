<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-negative-488, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="I / you / we / they + don't have to + 原形動詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">don't have to / doesn't have to</span>
          <span>不必。</span>
        </div>
        <div>
          <span class="term">haven't got to / hasn't got to</span>
          <span>不必。比較口語，常用在英式英文。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>不必做的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="過去：didn't have to">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="We didn't have to wait." :marks="[]" /><span class="translation"
              >我們不必等。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="主詞是 he、she、it 或單數名詞，用 doesn't">
      <NoteFix
        wrong="My sister don't have to go to school today."
        right="My sister doesn't have to go to school today."
        :fix="['doesn\'t']"
      />
    </NoteSlide>
    <NoteSlide title="doesn't 後面接原形 have" mark="have">
      <NoteFix
        wrong="He doesn't has to work tomorrow."
        right="He doesn't have to work tomorrow."
        :fix="['have']"
      />
    </NoteSlide>
    <NoteSlide title="have to 的否定要用 don't 或 doesn't" mark="have to">
      <NoteFix wrong="You not have to come." right="You don't have to come." :fix="['don\'t']" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
