<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-use-sentence-evaluative, as slides, in the order of content.md. One point per slide: the title names it, the
// diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="which 指前面整句話說的事">
      <NoteWords
        :size="22"
        :parts="[
          {
            t: 'It is now possible to send a letter and receive an answer within ten minutes,',
            role: '子句',
          },
          { t: 'which', role: '指整件事', kind: 'key' },
          { t: 'is a good thing.', role: '評價' },
        ]"
      />
      <p class="translation">現在寄出一封信，十分鐘內就能收到回覆，這是件好事。</p>
    </NoteSlide>

    <NoteSlide title="which is / was 加形容詞或名詞片語，說出看法" mark="which">
      <div class="rows is-labeled">
        <div>
          <span class="term">看法</span>
          <span
            ><NoteMark
              sentence="The train was half an hour late, which was really annoying."
              :marks="['which was really annoying.']"
            /><span class="translation">火車誤點半小時，真的很煩。</span></span
          >
        </div>
        <div>
          <span class="term">看法</span>
          <span
            ><NoteMark
              sentence="She remembered my birthday, which was very sweet of her."
              :marks="['which was very sweet of her.']"
            /><span class="translation">她記得我的生日，她真貼心。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="which means 說明這件事帶來的結果" mark="which">
      <div class="rows is-labeled">
        <div>
          <span class="term">結果</span>
          <span
            ><NoteMark
              sentence="The bridge is closed, which means we'll have to take the long way."
              :marks="['which means']"
            /><span class="translation">橋封閉了，也就是說我們得繞遠路。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="which 可以指一個名詞，也可以指整個子句" mark="which">
      <div class="rows is-labeled">
        <div>
          <span class="term">指名詞</span>
          <span
            ><NoteMark
              sentence="He gave me a book, which was about Japan."
              :marks="['a book,', 'which']"
            /><span class="translation">他給了我一本書，那本書是講日本的。</span></span
          >
        </div>
        <div>
          <span class="term">指整個子句</span>
          <span
            ><NoteMark
              sentence="He gave me a book, which was kind of him."
              :marks="['He gave me a book,', 'which']"
            /><span class="translation">他給了我一本書，他人真好。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="指前面整件事用 which，不用 what" mark="which">
      <NoteFix
        wrong="He passed all his exams, what surprised everyone."
        right="He passed all his exams, which surprised everyone."
        fix="which"
      />
    </NoteSlide>

    <NoteSlide title="指整個子句只能用 which，不用 that" mark="which">
      <NoteFix
        wrong="It rained all weekend, that was disappointing."
        right="It rained all weekend, which was disappointing."
        fix="which"
      />
    </NoteSlide>

    <NoteSlide title="which 就是主詞，不再加 it" mark="which">
      <NoteFix
        wrong="We missed the bus, which it made us late."
        right="We missed the bus, which made us late."
        fix="which made"
      />
    </NoteSlide>

    <NoteSlide title="指整個子句的 which 前面要加逗號" mark="minutes,">
      <NoteFix
        wrong="She called me back immediately which was nice."
        right="She called me back immediately, which was nice."
        fix="immediately,"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
