<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-be-expressions, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide
      title="主詞 + am / is / are / was / were + allowed / supposed / able + to + 原形動詞"
      mark="allowed to"
    >
      <div class="rows is-labeled">
        <div>
          <span class="term">be allowed to</span>
          <span>被准許。這是被動的形式，例句 ① 都是被動句。</span>
        </div>
        <div>
          <span class="term">be supposed to</span>
          <span>照規定或安排應該。</span>
        </div>
        <div>
          <span class="term">be able to</span>
          <span>能夠。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="be allowed to、be supposed to 和 be able to">
      <div class="rows is-labeled">
        <div>
          <span class="term">be allowed to</span>
          <span
            ><NoteMark
              sentence="Are you allowed to wear jeans at work?"
              :marks="['allowed to']"
            /><span class="translation">你上班可以穿牛仔褲嗎？</span></span
          >
        </div>
        <div>
          <span class="term">be supposed to</span>
          <span
            ><NoteMark
              sentence="The meeting is supposed to finish at four."
              :marks="['supposed to']"
            /><span class="translation">會議應該四點結束。</span></span
          >
        </div>
        <div>
          <span class="term">be able to</span>
          <span
            ><NoteMark
              sentence="We were able to watch the fireworks from the roof."
              :marks="['able to']"
            /><span class="translation">我們從屋頂看到了煙火。</span></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="過去的 was supposed to">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="We were supposed to fly home on Sunday, but the flight was cancelled."
              :marks="['were supposed to']"
            /><span class="translation">我們本來星期天要搭飛機回家，可是航班取消了。</span></span
          >
        </div>
      </div>
      <p class="remark">was / were supposed to 常說原本安排好、後來沒照做的事。</p>
    </NoteSlide>
    <NoteSlide title="allowed 前面要有 be 動詞" mark="allowed">
      <NoteFix
        wrong="You allowed to use a dictionary."
        right="You are allowed to use a dictionary."
        :fix="['are']"
      />
    </NoteSlide>
    <NoteSlide title="這個片語是 be supposed to，supposed 要有 -d">
      <NoteFix
        wrong="You are suppose to sign the form in pen."
        right="You are supposed to sign the form in pen."
        :fix="['supposed']"
      />
    </NoteSlide>
    <NoteSlide title="will 後面接原形 be" mark="will">
      <NoteFix
        wrong="You will are allowed to stay up late."
        right="You will be allowed to stay up late."
        :fix="['be']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
