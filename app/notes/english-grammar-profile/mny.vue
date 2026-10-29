<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// future-use-be-about-to, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + was / were + (just) about to + 原形動詞" mark="was">
      <div class="rows is-labeled">
        <div>
          <span class="term">was / were</span>
          <span>be 的過去式，跟著主詞變化。</span>
        </div>
        <div>
          <span class="term">just</span>
          <span>放在 was 或 were 後面，表示時間更近。</span>
        </div>
        <div>
          <span class="term">about to + 原形動詞</span>
          <span>過去那個時間下一刻就要做的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="和 when 子句一起用" mark="when">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="We were about to go out when it started to rain."
              :marks="['when']"
            /><span class="translation">我們正要出門，就開始下雨了。</span></span
          >
        </div>
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="When I was about to answer, I realised the question was harder than I thought."
              :marks="['When']"
            /><span class="translation">我正要回答的時候，才發現這個問題比我想的難。</span></span
          >
        </div>
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="Just as we were about to leave, the phone rang."
              :marks="['Just as']"
            /><span class="translation">我們正要離開的時候，電話響了。</span></span
          >
        </div>
      </div>
      <p class="remark">when 子句說突然發生的事。這件事常讓主詞沒做成原本要做的事。</p>
    </NoteSlide>
    <NoteSlide title="不和 when 子句一起用" mark="when">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="I told him that our father was about to buy a new car."
              :marks="[]"
            /><span class="translation">我跟他說我們爸爸快要買新車了。</span></span
          >
        </div>
      </div>
      <p class="remark">說過去某個時間即將發生的事，也可以不接 when 子句。</p>
    </NoteSlide>
    <NoteSlide title="說過去的事，be 用 was 或 were" mark="was">
      <NoteFix
        wrong="Yesterday I am about to call you when you called me."
        right="Yesterday I was about to call you when you called me."
        :fix="['was']"
      />
    </NoteSlide>
    <NoteSlide title="when 子句說突然發生的事，用過去簡單式" mark="when">
      <NoteFix
        wrong="I was about to leave when the phone was about to ring."
        right="I was about to leave when the phone rang."
        :fix="['rang.']"
      />
    </NoteSlide>
    <NoteSlide title="about to 後面接原形動詞" mark="about to">
      <NoteFix
        wrong="They were about to eating when we arrived."
        right="They were about to eat when we arrived."
        :fix="['eat']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
