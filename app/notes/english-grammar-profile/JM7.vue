<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-use-let-third-person-pronoun-permission, as slides, in the order of content.md.
// One point per slide: the title names it, the diagram shows it, and `mark` circles the
// matching words of the note's sentence. Keep the parts of one sentence on one line: Vue drops
// the whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="let + him / her / them + 原形動詞，叫對方允許" mark="let her go">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'He\'s tired.', kind: 'dim' },
          { t: 'Let', role: 'let', kind: 'key' },
          { t: 'him', role: '受格', kind: 'key', ring: true },
          { t: 'sleep.', role: '原形動詞', kind: 'key' },
        ]"
      />
      <p class="translation">他累了，讓他睡吧。</p>
    </NoteSlide>

    <NoteSlide title="let 後面也可以接名詞" mark="let her">
      <NoteMark
        sentence="It's Friday, and there's no school tomorrow. Let the kids watch one more episode."
        :marks="['Let the kids watch']"
      />
      <p class="translation">今天是星期五，明天不用上學。讓孩子們再看一集。</p>
    </NoteSlide>

    <NoteSlide title="let 後面的動詞不加 to" mark="let her go">
      <NoteFix
        wrong="Let them to borrow the car for the weekend."
        right="Let them borrow the car for the weekend."
        fix="borrow"
      />
    </NoteSlide>

    <NoteSlide title="let 後面的代名詞用受格" mark="her">
      <NoteFix wrong="Let she choose the film." right="Let her choose the film." fix="her" />
    </NoteSlide>

    <NoteSlide title="對方自己想做，用 let，不用 make" mark="let">
      <NoteFix
        wrong="He wants to drive. Make him drive."
        right="He wants to drive. Let him drive."
        fix="Let"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
