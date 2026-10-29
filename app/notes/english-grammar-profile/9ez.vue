<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-permission-501, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="May + I + 原形動詞 …？">
      <div class="rows is-labeled">
        <div>
          <span class="term">May I</span>
          <span>我可以……嗎？</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>想做的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="may 後面直接接原形動詞" mark="May">
      <NoteFix wrong="May I to use your phone?" right="May I use your phone?" :fix="['use']" />
    </NoteSlide>
    <NoteSlide title="may 放在句首，不用 do" mark="May">
      <NoteFix wrong="Do I may sit here?" right="May I sit here?" :fix="['May', 'sit']" />
    </NoteSlide>
    <NoteSlide title="問句把 may 放在 I 前面" mark="May">
      <NoteFix
        wrong="I may open the window?"
        right="May I open the window?"
        :fix="['May', 'open']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
