<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-wishes-and-preferences-with-like, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="If possible 加 I'd like to，客氣地說希望的安排" mark="I'd like to">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'If possible,', kind: 'dim' },
          { t: 'I\'d like to', kind: 'key', ring: true },
          { t: 'come', role: '原形動詞' },
          { t: 'to see you on Tuesday afternoon.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="點餐時用 I would like 加食物" mark="like">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="I would like the chicken, please."
              :marks="['would like']"
            /><span class="translation">我要雞肉，謝謝。</span></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="說偏好時，would like 後面接名詞" mark="like">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="I'd like an aisle seat on the flight, if possible."
              :marks="['I\'d like', 'aisle seat']"
            /><span class="translation">如果可以，我想要飛機上靠走道的位子。</span></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="would like 後面接 to 和原形動詞" mark="to">
      <NoteFix
        wrong="I'd like coming on Tuesday, if possible."
        right="I'd like to come on Tuesday, if possible."
        :fix="['to', 'come']"
      />
    </NoteSlide>
    <NoteSlide title="would like 後面接動詞時要加 to" mark="to">
      <NoteFix
        wrong="I'd like see you tomorrow."
        right="I'd like to see you tomorrow."
        :fix="['to']"
      />
    </NoteSlide>
    <NoteSlide title="would 後面接原形 like" mark="like">
      <NoteFix wrong="He would likes the fish." right="He would like the fish." :fix="['like']" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
