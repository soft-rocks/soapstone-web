<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-affirmative-with-like, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="would like 後面接 to 和原形動詞，說想做的事" mark="would">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'would like', kind: 'key', ring: true },
          { t: 'to', kind: 'key', ring: true },
          { t: 'eat', role: '原形動詞' },
          { t: 'some Spanish food.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="like 說一般的喜好，would like 說這次想要的東西" mark="like">
      <div class="rows is-labeled">
        <div>
          <span class="term">like</span>
          <span
            ><NoteMark sentence="I like Spanish food." :marks="['like']" /><span class="translation"
              >我喜歡西班牙菜。</span
            ></span
          >
        </div>
        <div>
          <span class="term">would like</span>
          <span
            ><NoteMark sentence="I'd like some Spanish food." :marks="['I\'d like']" /><span
              class="translation"
              >我想吃一些西班牙菜。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="would like 後面接動詞時要加 to" mark="like">
      <NoteFix wrong="I would like eat pizza." right="I would like to eat pizza." :fix="['to']" />
    </NoteSlide>
    <NoteSlide title="would 後面接原形 like" mark="would">
      <NoteFix
        wrong="My boss would likes a black coffee with sugar."
        right="My boss would like a black coffee with sugar."
        :fix="['like']"
      />
    </NoteSlide>
    <NoteSlide title="to 後面接原形動詞" mark="to">
      <NoteFix
        wrong="We'd like to going to the beach."
        right="We'd like to go to the beach."
        :fix="['go']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
