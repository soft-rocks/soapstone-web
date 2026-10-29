<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-use-rather-than-phrase, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between
// two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="選 A，不選 B，A 和 B 是同一種成分" mark="rather than">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Take', kind: 'dim' },
          { t: 'the stairs', role: 'A：名詞片語', kind: 'key' },
          { t: 'rather than', role: 'rather than', kind: 'key', ring: true },
          { t: 'the lift.', role: 'B：名詞片語', kind: 'key' },
        ]"
      />
      <p class="translation">走樓梯，不要搭電梯。</p>
    </NoteSlide>

    <NoteSlide title="A 和 B 也可以是介系詞片語" mark="rather than">
      <NoteMark
        sentence="I'd like to sit by the window rather than near the door."
        :marks="['by the window', 'near the door']"
      />
      <p class="translation">我想坐窗邊，不想坐門旁邊。</p>
    </NoteSlide>

    <NoteSlide title="rather 後面要接 than" mark="rather than">
      <NoteFix
        wrong="Drink water rather juice."
        right="Drink water rather than juice."
        fix="rather than"
      />
    </NoteSlide>

    <NoteSlide title="是 rather than，不是 rather of" mark="than">
      <NoteFix
        wrong="We chose the train rather of the plane."
        right="We chose the train rather than the plane."
        fix="than"
      />
    </NoteSlide>

    <NoteSlide title="A 是介系詞片語，B 也要是介系詞片語" mark="fatty foods">
      <NoteFix
        wrong="Go by train rather than the car."
        right="Go by train rather than by car."
        fix="by car"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
