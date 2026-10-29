<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adjectives-form-use-complex-noun-phrases, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="介系詞片語說明在什麼範圍裡最怎麼樣" mark="of my life">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'It\'s', kind: 'dim' },
          { t: 'the biggest', role: 'the + 最高級', kind: 'key' },
          { t: 'aquarium', role: '名詞' },
          { t: 'in Asia.', role: 'in + 範圍', kind: 'key', ring: true },
        ]"
      />
      <p class="translation">那是亞洲最大的水族館。</p>
    </NoteSlide>

    <NoteSlide title="地方和團體用 in，時間和一群用 of" mark="of my life">
      <div class="rows is-labeled">
        <div>
          <span class="term">in + 地方 / 團體</span>
          <span
            ><NoteMark
              sentence="Grandpa is the oldest person in our village."
              :marks="['in our village']"
            /><span class="translation">爺爺是我們村子裡年紀最大的人。</span></span
          >
        </div>
        <div>
          <span class="term">of + 時間 / 一群</span>
          <span
            ><NoteMark
              sentence="Sports day was the best day of the school year."
              :marks="['of the school year']"
            /><span class="translation">運動會是整個學年最棒的一天。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="最高級前面要加 the" mark="the happiest">
      <NoteFix
        wrong="Lake Baikal is deepest lake on Earth."
        right="Lake Baikal is the deepest lake on Earth."
        fix="the deepest"
      />
    </NoteSlide>

    <NoteSlide title="範圍是地方或團體時用 in" mark="of">
      <NoteFix
        wrong="Our hotel has the biggest swimming pool of the city."
        right="Our hotel has the biggest swimming pool in the city."
        fix="in"
      />
    </NoteSlide>

    <NoteSlide title="在一個範圍裡最怎麼樣，用最高級" mark="happiest">
      <NoteFix
        wrong="That's the taller tree in the whole park."
        right="That's the tallest tree in the whole park."
        fix="tallest"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
