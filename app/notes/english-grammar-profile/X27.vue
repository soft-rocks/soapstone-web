<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-negative-597, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + didn't use to + 原形動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'This year I\'ve met lots of new people that', kind: 'dim' },
          { t: 'I', role: '主詞' },
          { t: 'didn\'t use to', kind: 'key', ring: true },
          { t: 'talk', role: '原形動詞' },
          { t: 'to.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="didn't use to、原形動詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">didn't use to</span>
          <span>以前不常、以前不會。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>過去不做的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="現在不一樣了" mark="didn't use to">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="We didn't use to talk to each other. Now we're good friends."
              :marks="['didn\'t use to']"
            /><span class="translation">我們以前不跟對方說話。現在我們是好朋友。</span></span
          >
        </div>
      </div>
      <p class="remark">didn't use to 常接著說現在的情況。</p>
    </NoteSlide>
    <NoteSlide title="否定要用 didn't" mark="didn't">
      <NoteFix
        wrong="I not used to like fish."
        right="I didn't use to like fish."
        :fix="['didn\'t use']"
      />
    </NoteSlide>
    <NoteSlide title="use to 後面接原形動詞" mark="use to">
      <NoteFix
        wrong="She didn't use to going out."
        right="She didn't use to go out."
        :fix="['go']"
      />
    </NoteSlide>
    <NoteSlide title="use 後面要接 to" mark="use">
      <NoteFix wrong="We didn't use talk much." right="We didn't use to talk much." :fix="['to']" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
