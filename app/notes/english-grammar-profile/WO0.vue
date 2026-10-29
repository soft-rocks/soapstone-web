<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// passives-use-with-will-future-reference, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between
// two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="will be 加過去分詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'the cinema', role: '主詞' },
          { t: 'will be', role: 'will be', kind: 'key' },
          { t: 'renovated', role: '過去分詞', kind: 'key' },
          { t: 'next year.', role: '時間', kind: 'dim' },
        ]"
      />
      <p class="translation">電影院明年要翻修。</p>
    </NoteSlide>

    <NoteSlide title="通知安排、計畫、預測" mark="will be renovated">
      <div class="rows is-labeled">
        <div>
          <span class="term">通知安排</span>
          <span
            ><NoteMark
              sentence="You will be booked into the Palace Hotel."
              :marks="['will be booked']"
            /><span class="translation">我們會幫你訂 Palace Hotel 的房間。</span></span
          >
        </div>
        <div>
          <span class="term">計畫</span>
          <span
            ><NoteMark
              sentence="The cinema will be renovated next year."
              :marks="['will be renovated']"
            /><span class="translation">電影院明年要翻修。</span></span
          >
        </div>
        <div>
          <span class="term">預測</span>
          <span
            ><NoteMark
              sentence="The match will be won by the home team."
              :marks="['will be won']"
            /><span class="translation">主隊會贏這場比賽。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="will 後面接原形 be" mark="be">
      <NoteFix
        wrong="The cinema will is renovated next year."
        right="The cinema will be renovated next year."
        fix="be"
      />
    </NoteSlide>

    <NoteSlide title="被動要有 be" mark="be">
      <NoteFix
        wrong="You will booked into the Palace Hotel."
        right="You will be booked into the Palace Hotel."
        fix="be"
      />
    </NoteSlide>

    <NoteSlide title="will not 後面不加 to" mark="will be">
      <NoteFix
        wrong="Your money will not to be returned."
        right="Your money will not be returned."
        fix="not be"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
