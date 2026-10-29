<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// determiners-form-singular-noun-ending-in-s-apostrophe, as slides, in the order of content.md.
// One point per slide: the title names it, the diagram shows it, and `mark` circles the
// matching words of the note's sentence. Keep the parts of one sentence on one line: Vue drops
// the whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="單複數同形的名詞只加撇號">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'keep', role: '動詞', kind: 'dim' },
          { t: 'some of', role: '數量', kind: 'dim' },
          { t: 'the series\'', role: '名詞 + \'', kind: 'key' },
          { t: 'aspects', role: '名詞' },
        ]"
      />
      <p class="translation">保留這個系列的一些特色</p>
    </NoteSlide>

    <NoteSlide title="單複數同形的名詞、人名和其他單數名詞" mark="series'">
      <div class="rows is-labeled">
        <div>
          <span class="term">單複數同形</span>
          <span
            ><NoteMark
              sentence="The series' first season was the best."
              :marks="['series\'']"
            /><span class="translation">這個影集的第一季最好看。</span></span
          >
        </div>
        <div>
          <span class="term">人名</span>
          <span
            ><NoteMark
              sentence="We stayed at James's house for the weekend."
              :marks="['James\'s']"
            /><span class="translation">我們週末住在 James 家。</span></span
          >
        </div>
        <div>
          <span class="term">其他單數名詞</span>
          <span
            ><NoteMark sentence="My boss's office is on the top floor." :marks="['boss\'s']" /><span
              class="translation"
              >我老闆的辦公室在頂樓。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="撇號放在最後的 s 後面" mark="series'">
      <NoteFix
        wrong="The serie's first episode was boring."
        right="The series' first episode was boring."
        fix="series'"
      />
    </NoteSlide>

    <NoteSlide title="人名表示所有要加撇號" mark="series'">
      <NoteFix
        wrong="Charles car is parked outside."
        right="Charles's car is parked outside."
        fix="Charles's"
      />
    </NoteSlide>

    <NoteSlide title="series、species 只加撇號" mark="series'">
      <NoteFix
        wrong="The species's habitat is shrinking."
        right="The species' habitat is shrinking."
        fix="species'"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
