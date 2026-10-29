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
    <NoteSlide title="I'd like to + 原形動詞">
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
    <NoteSlide title="would like、if possible">
      <div class="rows is-labeled">
        <div>
          <span class="term">would like</span>
          <span>想要。說願望和偏好。</span>
        </div>
        <div>
          <span class="term">if possible</span>
          <span>如果可以的話。讓請求更客氣。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="點餐">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="I would like the chicken, please."
              :marks="['I would like']"
            /><span class="translation">我要雞肉，謝謝。</span></span
          >
        </div>
      </div>
      <p class="remark">在餐廳點餐時，常用 I would like 加食物。</p>
    </NoteSlide>
    <NoteSlide title="說偏好">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="I'd like the window seat, if possible." :marks="[]" /><span
              class="translation"
              >如果可以，我想要靠窗的位子。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">說自己比較想要哪一個時，也可以用 would like。</p>
    </NoteSlide>
    <NoteSlide title="would like 後面接 to 和原形動詞" mark="to">
      <NoteFix
        wrong="I'd like coming on Tuesday, if possible."
        right="I'd like to come on Tuesday, if possible."
        :fix="['to come']"
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
