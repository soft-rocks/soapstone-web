<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-use-let-s-not-suggestion, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between
// two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="Let's not 建議大家一起不要做" mark="Let's not lose">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'We\'re on holiday.', kind: 'dim' },
          { t: 'Let\'s not', role: 'let\'s not', kind: 'key', ring: true },
          { t: 'argue', role: '原形動詞', kind: 'key' },
          { t: 'about who pays.', kind: 'dim' },
        ]"
      />
      <p class="translation">我們在度假，別為了誰付錢吵架。</p>
    </NoteSlide>

    <NoteSlide title="Let's not forget that ... 提醒大家一件事" mark="Let's not">
      <NoteMark
        sentence="Our daughter wants to go to the festival alone. Let's not forget that she's only sixteen."
        :marks="['Let\'s not forget that']"
      />
      <p class="translation">我們的女兒想自己去音樂節。我們別忘了，她才十六歲。</p>
    </NoteSlide>

    <NoteSlide title="let's 的否定是 let's not" mark="Let's not">
      <NoteFix
        wrong="Let's don't wait any longer."
        right="Let's not wait any longer."
        fix="Let's not"
      />
    </NoteSlide>

    <NoteSlide title="not 放在 let's 後面、動詞前面" mark="not lose">
      <NoteFix wrong="Let's go not there." right="Let's not go there." fix="not go" />
    </NoteSlide>

    <NoteSlide title="let's not 後面不加 to" mark="lose">
      <NoteFix wrong="Let's not to tell anyone." right="Let's not tell anyone." fix="tell" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
