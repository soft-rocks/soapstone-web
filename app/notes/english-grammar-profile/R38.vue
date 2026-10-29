<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-use-don-t-let-pronoun-permission, as slides, in the order of content.md. One
// point per slide: the title names it, the diagram shows it, and `mark` circles the matching
// words of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="Don't let + 受詞 + 原形動詞，叫對方不要允許" mark="Don't let them spend">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Don\'t let', role: '不要讓', kind: 'key', ring: true },
          { t: 'her', role: '受格', kind: 'key' },
          { t: 'touch', role: '原形動詞', kind: 'key' },
          { t: 'the stove. It\'s hot.', kind: 'dim' },
        ]"
      />
      <p class="translation">別讓她碰爐子，很燙。</p>
    </NoteSlide>

    <NoteSlide title="Don't let + 東西 + 原形動詞，不要讓某件事發生" mark="Don't let">
      <NoteMark
        sentence="Keep the heat low under the pan. Don't let the milk burn."
        :marks="['Don\'t let the milk burn']"
      />
      <p class="translation">鍋子下面的火保持小火。別讓牛奶燒焦。</p>
    </NoteSlide>

    <NoteSlide title="let 後面的動詞不加 to" mark="spend">
      <NoteFix wrong="Don't let him to drive." right="Don't let him drive." fix="drive" />
    </NoteSlide>

    <NoteSlide title="let 後面的代名詞用受格" mark="them">
      <NoteFix
        wrong="Don't let they eat too much sugar."
        right="Don't let them eat too much sugar."
        fix="them"
      />
    </NoteSlide>

    <NoteSlide title="否定的祈使句用 Don't 開頭" mark="Don't let">
      <NoteFix
        wrong="Not let him go out in the rain."
        right="Don't let him go out in the rain."
        fix="Don't"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
