<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-obligation, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + have to / has to + 原形動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'You', role: '主詞' },
          { t: 'have to', kind: 'key', ring: true },
          { t: 'bring', role: '原形動詞' },
          { t: 'your swimming costume.', kind: 'dim' },
        ]"
      />
      <p class="translation">你必須帶你的泳衣。</p>
    </NoteSlide>
    <NoteSlide title="have to、have got to、原形動詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">have to</span>
          <span>必須。義務常來自規定、安排或情況。</span>
        </div>
        <div>
          <span class="term">have got to</span>
          <span>必須。比較口語。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>必須做的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="have to 的義務來自外面，must 常是自己覺得" mark="have to">
      <div class="rows is-labeled">
        <div>
          <span class="term">have to</span>
          <span
            ><NoteMark sentence="I have to wear a uniform at work." :marks="['have to']" /><span
              class="translation"
              >我上班必須穿制服。</span
            ></span
          >
        </div>
        <div>
          <span class="term">must</span>
          <span
            ><NoteMark sentence="I must call my grandma more often." :marks="['must']" /><span
              class="translation"
              >我必須多打電話給奶奶。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="說理由" mark="have to">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="I can't stay because I have to catch the last train."
              :marks="['have to', 'because']"
            /><span class="translation">我不能留下來，因為我必須趕最後一班火車。</span></span
          >
        </div>
      </div>
      <p class="remark">have to 常和 because 一起用，說明為什麼不能做別的事。</p>
    </NoteSlide>
    <NoteSlide title="說義務要用 have to 加原形動詞" mark="have to">
      <NoteFix
        wrong="I have finish this report tonight."
        right="I have to finish this report tonight."
        :fix="['to']"
      />
    </NoteSlide>
    <NoteSlide title="to 後面接原形動詞" mark="to">
      <NoteFix
        wrong="He has to wearing a helmet."
        right="He has to wear a helmet."
        :fix="['wear']"
      />
    </NoteSlide>
    <NoteSlide title="過去的義務用 had to">
      <NoteFix
        wrong="Last week I have to stay late at the office every day."
        right="Last week I had to stay late at the office every day."
        :fix="['had']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
