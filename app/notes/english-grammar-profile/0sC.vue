<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// future-use-future-arrangements-412, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + am / is / are + 動詞-ing + 未來的時間" mark="this Saturday">
      <div class="rows is-labeled">
        <div>
          <span class="term">am / is / are + 動詞&#x2060;-&#x2060;ing</span>
          <span>已經安排好的事。</span>
        </div>
        <div>
          <span class="term">未來的時間</span>
          <span>像 tonight、tomorrow、this Saturday、next week、on 20th July。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="常用的動詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">go / come</span>
          <span
            ><NoteMark sentence="I'm going to the dentist tomorrow." :marks="[]" /><span
              class="translation"
              >我明天要去看牙醫。</span
            ></span
          >
        </div>
        <div>
          <span class="term">go back / come back</span>
          <span
            ><NoteMark sentence="They're going back on 20th July." :marks="[]" /><span
              class="translation"
              >他們七月二十日回去。</span
            ></span
          >
        </div>
        <div>
          <span class="term">have</span>
          <span
            ><NoteMark sentence="We're having the meal at 7 pm." :marks="[]" /><span
              class="translation"
              >我們晚上七點吃飯。</span
            ></span
          >
        </div>
        <div>
          <span class="term">meet / see</span>
          <span
            ><NoteMark sentence="I'm meeting Tom after school." :marks="[]" /><span
              class="translation"
              >我放學後要跟 Tom 見面。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">現在進行式說未來的安排，常用這些動詞。</p>
    </NoteSlide>
    <NoteSlide title="否定句">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="I'm not working tomorrow." :marks="['not']" /><span
              class="translation"
              >我明天不用上班。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">am、is、are 後面加 not。</p>
    </NoteSlide>
    <NoteSlide title="動詞-ing 前面要有 am、is 或 are">
      <NoteFix
        wrong="I working this Saturday."
        right="I'm working this Saturday."
        :fix="['I\'m']"
      />
    </NoteSlide>
    <NoteSlide title="和別人約好的事用現在進行式">
      <NoteFix
        wrong="I meet my friends tonight."
        right="I'm meeting my friends tonight."
        :fix="['I\'m meeting']"
      />
    </NoteSlide>
    <NoteSlide title="be 動詞後面接動詞-ing">
      <NoteFix
        wrong="We are have dinner at seven."
        right="We are having dinner at seven."
        :fix="['having']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
