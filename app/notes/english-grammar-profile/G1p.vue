<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adjectives-form-with-est-64, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="字尾的 y 改成 i，再加 -est" mark="easiest">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'He\'s', kind: 'dim' },
          { t: 'the funniest', role: 'funny → funniest', kind: 'key', ring: true },
          { t: 'person I know.', kind: 'dim' },
        ]"
      />
      <p class="translation">他是我認識最好笑的人。</p>
    </NoteSlide>

    <NoteSlide title="常見的 -iest 最高級" mark="The easiest">
      <div class="rows is-labeled">
        <div>
          <span class="term">busy → busiest</span>
          <span
            ><NoteMark sentence="December is our busiest month." :marks="['busiest']" /><span
              class="translation"
              >十二月是我們最忙的月份。</span
            ></span
          >
        </div>
        <div>
          <span class="term">heavy → heaviest</span>
          <span
            ><NoteMark
              sentence="Give me the heaviest box. I'm strong."
              :marks="['heaviest']"
            /><span class="translation">把最重的箱子給我，我力氣大。</span></span
          >
        </div>
        <div>
          <span class="term">early → earliest</span>
          <span
            ><NoteMark sentence="The earliest bus leaves at six." :marks="['earliest']" /><span
              class="translation"
              >最早的公車六點開。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="y 要改成 i" mark="easiest">
      <NoteFix
        wrong="This is the easyest question."
        right="This is the easiest question."
        fix="easiest"
      />
    </NoteSlide>

    <NoteSlide title="加了 -iest 就不加 most" mark="The easiest">
      <NoteFix
        wrong="She's the most happiest girl in the class."
        right="She's the happiest girl in the class."
        fix="the happiest"
      />
    </NoteSlide>

    <NoteSlide title="字尾是 -y 的形容詞加 -iest" mark="easiest">
      <NoteFix
        wrong="It was the busyst day of the week."
        right="It was the busiest day of the week."
        fix="busiest"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
