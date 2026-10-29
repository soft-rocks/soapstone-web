<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// future-use-schedules, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="be due to 說排進行事曆的事" mark="is due to take place">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'Our annual conference for HR managers', role: '主詞', kind: 'dim' },
          { t: 'is due to', role: 'be due to', kind: 'key', ring: true },
          { t: 'take place', role: '原形動詞', kind: 'key' },
          { t: 'on December 10.', role: '排定的時間' },
        ]"
      />
      <p class="translation">我們的人資經理年會預定於 12 月 10 日舉行。</p>
    </NoteSlide>

    <NoteSlide title="be to 比 be due to 正式" mark="is due to">
      <div class="rows is-labeled">
        <div>
          <span class="term">be due to<br /><i>日常和正式場合</i></span>
          <span
            ><NoteMark
              sentence="The coach is due to pick us up at seven."
              :marks="['is due to']"
            /><span class="translation">遊覽車預定七點來接我們。</span></span
          >
        </div>
        <div>
          <span class="term">be to<br /><i>公告、新聞、正式信件</i></span>
          <span
            ><NoteMark sentence="The ceremony is to start at ten sharp." :marks="['is to']" /><span
              class="translation"
              >典禮預定十點整開始。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="be due to 也可以說根據估計會發生的事" mark="is due to">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Visitor numbers', role: '主詞', kind: 'dim' },
          { t: 'are due to grow', role: '預期會發生', kind: 'key', ring: true },
          { t: 'next year.', kind: 'dim' },
        ]"
      />
      <p class="translation">明年的遊客人數預期會增加。</p>
    </NoteSlide>

    <NoteSlide title="通知排好的變動時常用 be to" mark="is due to">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Sorry, but', kind: 'dim' },
          { t: 'we are to leave', role: 'be to + 原形動詞', kind: 'key', ring: true },
          { t: 'a bit earlier, at about four.', role: '變動' },
        ]"
      />
      <p class="translation">抱歉，我們得早一點出發，大概四點左右。</p>
    </NoteSlide>

    <NoteSlide title="to 後面接原形動詞" mark="take">
      <NoteFix
        wrong="The ceremony is to beginning at ten."
        right="The ceremony is to begin at ten."
        fix="begin"
      />
    </NoteSlide>

    <NoteSlide title="due 後面要有 to" mark="due to">
      <NoteFix
        wrong="The meeting is due start at nine."
        right="The meeting is due to start at nine."
        fix="due to"
      />
    </NoteSlide>

    <NoteSlide title="說排定的事，due to 後面接原形動詞" mark="take place">
      <NoteFix
        wrong="The conference is due to December."
        right="The conference is due to take place in December."
        fix="take place"
      >
        <code>due to</code> 加名詞的意思是因為。
      </NoteFix>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
