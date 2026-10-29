<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// determiners-form-one-s, as slides, in the order of content.md. One point per slide: the title
// names it, the diagram shows it, and `mark` circles the matching words of the note's sentence.
// Keep the parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="one's 泛指一般人">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'how much tourism', role: '主詞', kind: 'dim' },
          { t: 'can affect', role: '動詞' },
          { t: 'one\'s', role: 'one\'s', kind: 'key' },
          { t: 'life.', role: '名詞', kind: 'key' },
        ]"
      />
      <p class="translation">觀光對一個人的生活影響有多大。</p>
    </NoteSlide>

    <NoteSlide title="one's 正式，your 口語" mark="one's life">
      <div class="rows is-labeled">
        <div>
          <span class="term">正式</span>
          <span
            ><NoteMark sentence="One should look after one's health." :marks="['one\'s']" /><span
              class="translation"
              >一個人應該照顧自己的健康。</span
            ></span
          >
        </div>
        <div>
          <span class="term">口語</span>
          <span
            ><NoteMark sentence="You should look after your health." :marks="['your']" /><span
              class="translation"
              >你應該照顧自己的健康。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="前後一致" mark="one's">
      <div class="rows is-labeled">
        <div>
          <span class="term">one ... one's</span>
          <span
            ><NoteMark sentence="One must do one's best." :marks="['One', 'one\'s']" /><span
              class="translation"
              >一個人必須盡力而為。</span
            ></span
          >
        </div>
        <div>
          <span class="term">of one's own</span>
          <span
            ><NoteMark
              sentence="It's important to have a room of one's own."
              :marks="['of one\'s own']"
            /><span class="translation">有一個屬於自己的房間很重要。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="所有格要有撇號" mark="one's">
      <NoteFix
        wrong="Tourism can affect ones life."
        right="Tourism can affect one's life."
        fix="one's"
      />
    </NoteSlide>

    <NoteSlide title="主詞是 one，所有格用 one's" mark="one's">
      <NoteFix
        wrong="One should always keep your promises."
        right="One should always keep one's promises."
        fix="one's"
      />
    </NoteSlide>

    <NoteSlide title="特定的人不用 one's" mark="one's">
      <NoteFix
        wrong="My sister lost one's keys yesterday."
        right="My sister lost her keys yesterday."
        fix="her"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
