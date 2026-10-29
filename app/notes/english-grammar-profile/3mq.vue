<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// nouns-form-plural-ies, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="子音加 y 結尾，y 改成 i 再加 es">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'I have a lot of', kind: 'dim' },
          { t: 'hobbies.', role: 'hobby → hobbies', kind: 'key' },
        ]"
      />
      <p class="translation">我有很多嗜好。</p>
    </NoteSlide>

    <NoteSlide title="母音加 y 不改 y，只加 s" mark="hobbies.">
      <div class="rows is-labeled">
        <div>
          <span class="term">子音 + y</span>
          <span>city → cities, party → parties, baby → babies</span>
        </div>
        <div>
          <span class="term">母音 + y</span>
          <span>day → days, boy → boys, key → keys</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="人名字尾是 y，只加 s" mark="hobbies.">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'There are two', kind: 'dim' },
          { t: 'Marys', role: '人名 + s', kind: 'key' },
          { t: 'in my class.', kind: 'dim' },
        ]"
      />
      <p class="translation">我們班有兩個 Mary。</p>
    </NoteSlide>

    <NoteSlide title="city 的 t 是子音，y 改成 i 再加 es" mark="hobbies.">
      <NoteFix
        wrong="I've been to three different citys."
        right="I've been to three different cities."
        fix="cities"
      />
    </NoteSlide>

    <NoteSlide title="day 的 a 是母音，只加 s">
      <NoteFix
        wrong="We stayed there for three daies."
        right="We stayed there for three days."
        fix="days"
      />
    </NoteSlide>

    <NoteSlide title="y 改成 i 以後要加 es">
      <NoteFix
        wrong="There are two babis in the room."
        right="There are two babies in the room."
        fix="babies"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
