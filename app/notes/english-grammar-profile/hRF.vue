<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adjectives-form-with-st, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="字尾是 -e，只加 -st" mark="latest">
      <div class="rows is-labeled">
        <div>
          <span class="term">large → largest</span>
          <span
            ><NoteMark
              sentence="On Sundays, we go to the largest park in the city."
              :marks="['largest']"
            /><span class="translation">星期天我們都去這座城市最大的公園。</span></span
          >
        </div>
        <div>
          <span class="term">safe → safest</span>
          <span
            ><NoteMark sentence="The train is the safest way to travel." :marks="['safest']" /><span
              class="translation"
              >火車是最安全的交通方式。</span
            ></span
          >
        </div>
        <div>
          <span class="term">nice → nicest</span>
          <span
            ><NoteMark sentence="She's the nicest person in our office." :marks="['nicest']" /><span
              class="translation"
              >她是我們辦公室人最好的。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="the latest 常用來說最新的東西" mark="the latest music videos">
      <NoteMark sentence="He always wants the latest phone." :marks="['the latest phone']" />
      <p class="translation">他總是想要最新的手機。</p>
    </NoteSlide>

    <NoteSlide title="safe 只加 -st，不加 -est" mark="latest">
      <NoteFix wrong="This is the safeest road." right="This is the safest road." fix="safest" />
    </NoteSlide>

    <NoteSlide title="保留字尾的 e" mark="latest">
      <NoteFix wrong="Which is the largst room?" right="Which is the largest room?" fix="largest" />
    </NoteSlide>

    <NoteSlide title="nicest 前面不加 most" mark="the latest">
      <NoteFix
        wrong="She's the most nicest teacher in the school."
        right="She's the nicest teacher in the school."
        fix="the nicest"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
