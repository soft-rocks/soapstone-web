<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-habitual-past, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="would 說過去常常做的事" mark="would">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'In my opinion I worked very hard.', kind: 'dim' },
          { t: 'I', role: '主詞' },
          { t: 'would', kind: 'key', ring: true },
          { t: 'spend', role: '原形動詞' },
          { t: 'a lot of hours at work.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="would 只說過去的動作，狀態用 used to" mark="would">
      <div class="rows is-labeled">
        <div>
          <span class="term">would</span>
          <span
            ><NoteMark sentence="We would swim every day." :marks="['would swim']" /><span
              class="translation"
              >我們以前每天都會游泳。</span
            ></span
          >
        </div>
        <div>
          <span class="term">used to</span>
          <span
            ><NoteMark sentence="We used to live by the sea." :marks="['used to live']" /><span
              class="translation"
              >我們以前住在海邊。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="故事常用 would 說人物過去的習慣" mark="would">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="At night they would go to the beach and light a fire."
              :marks="['would']"
            /><span class="translation">晚上他們常常會去海灘生火。</span></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="說過去的狀態用 used to，不用 would" mark="would">
      <NoteFix
        wrong="When I was young, I would have long hair."
        right="When I was young, I used to have long hair."
        :fix="['used', 'to']"
      />
    </NoteSlide>
    <NoteSlide title="would 後面不用過去式" mark="would">
      <NoteFix
        wrong="We would went to the park every Sunday."
        right="We would go to the park every Sunday."
        :fix="['go']"
      />
    </NoteSlide>
    <NoteSlide title="would 後面直接接原形動詞" mark="would">
      <NoteFix
        wrong="My dad would to read us stories."
        right="My dad would read us stories."
        :fix="['read']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
