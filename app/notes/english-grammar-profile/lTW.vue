<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// questions-form-auxiliary-be, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="進行式的疑問句把 be 放在主詞前面">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Are', role: 'be', kind: 'key' },
          { t: 'you', role: '主詞' },
          { t: 'doing', role: '動詞-ing', kind: 'key' },
          { t: 'anything', role: '受詞' },
          { t: 'on Friday?', role: '時間', kind: 'dim' },
        ]"
      />
      <p class="translation">你星期五有要做什麼嗎？</p>
      <p class="remark">問的是對方有沒有安排好的計畫。</p>
    </NoteSlide>

    <NoteSlide title="現在進行式問現在發生的事、計畫和打算" mark="doing">
      <div class="rows is-labeled">
        <div>
          <span class="term">正在發生</span>
          <span
            ><NoteMark sentence="Is it raining?" :marks="['raining']" /><span class="translation"
              >在下雨嗎？</span
            ></span
          >
        </div>
        <div>
          <span class="term">打算</span>
          <span
            ><NoteMark sentence="Are you going to come?" :marks="['going to']" /><span
              class="translation"
              >你會來嗎？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="過去進行式用 Was 或 Were" mark="Are">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'Were', role: 'be：過去式', kind: 'key' },
          { t: 'you', role: '主詞' },
          { t: 'sleeping', role: '動詞-ing' },
          { t: 'when I called?', kind: 'dim' },
        ]"
      />
      <p class="translation">我打給你的時候你在睡覺嗎？</p>
    </NoteSlide>

    <NoteSlide title="進行式的疑問句用 be，不用 do" mark="Are">
      <NoteFix wrong="Do you coming tonight?" right="Are you coming tonight?" fix="Are" />
    </NoteSlide>

    <NoteSlide title="be 後面的動詞要加 -ing" mark="doing">
      <NoteFix wrong="Is she work today?" right="Is she working today?" fix="working" />
    </NoteSlide>

    <NoteSlide title="複數主詞用 Are" mark="Are">
      <NoteFix wrong="Is your parents coming?" right="Are your parents coming?" fix="Are" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
