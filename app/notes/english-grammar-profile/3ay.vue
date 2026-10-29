<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// future-use-plans-in-the-past, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + was / were + going to + 原形動詞 (+ but ...)">
      <div class="rows is-labeled">
        <div>
          <span class="term">was / were going to</span>
          <span>過去定好的計畫。</span>
        </div>
        <div>
          <span class="term">but ...</span>
          <span>計畫後來怎麼了。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="計畫改變了" mark="but">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="I was going to stay in, but my friends called."
              :marks="['but']"
            /><span class="translation">我本來要待在家，可是朋友打電話來了。</span></span
          >
        </div>
      </div>
      <p class="remark">後面接 but，說明計畫沒照原樣進行。</p>
    </NoteSlide>
    <NoteSlide title="提醒對方以前的約定" mark="were going to">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="We were going to have coffee on Tuesday, do you remember?"
              :marks="['were going to']"
            /><span class="translation">我們說好星期二要喝咖啡，你記得嗎？</span></span
          >
        </div>
      </div>
      <p class="remark">
        was / were going to 也可以提醒對方，你們之前說好的事。這個計畫不一定改變了。
      </p>
    </NoteSlide>
    <NoteSlide title="過去的計畫用 was 或 were" mark="were">
      <NoteFix
        wrong="We are going to get married last year, but we broke up."
        right="We were going to get married last year, but we broke up."
        :fix="['were']"
      />
    </NoteSlide>
    <NoteSlide title="to 後面接原形動詞" mark="to">
      <NoteFix
        wrong="I was going to visited her, but I was busy."
        right="I was going to visit her, but I was busy."
        :fix="['visit']"
      />
    </NoteSlide>
    <NoteSlide title="going 後面要有 to" mark="going">
      <NoteFix
        wrong="They were going sell the car, but they kept it."
        right="They were going to sell the car, but they kept it."
        :fix="['to']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
