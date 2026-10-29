<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-questions-554, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="Need + 主詞 + 原形動詞 + …？">
      <div class="rows is-labeled">
        <div>
          <span class="term">Need</span>
          <span>放在句首，不加 -&#x2060;s，也不用 do。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>問是不是必要做的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="Need 開頭的問句，need 後面直接接原形動詞" mark="Need">
      <NoteFix
        wrong="You've been late three times this week. Need I to tell you again?"
        right="You've been late three times this week. Need I tell you again?"
        :fix="['tell']"
      />
    </NoteSlide>
    <NoteSlide title="情態動詞的 need 不加 -s" mark="Need">
      <NoteFix
        wrong="It's only a short meeting. Needs he come?"
        right="It's only a short meeting. Need he come?"
        :fix="['Need']"
      />
    </NoteSlide>
    <NoteSlide title="情態動詞的 need 放在句首，不用 do" mark="Need">
      <NoteFix wrong="Do need I bring a pen?" right="Need I bring a pen?" :fix="['Need']" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
