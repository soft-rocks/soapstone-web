<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// future-form-affirmative-398, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + am / is / are + going to + 原形動詞" mark="are">
      <div class="rows is-labeled">
        <div>
          <span class="term">am / is / are</span>
          <span
            >跟著主詞變化。I 用 am，he、she、it 和單數名詞用 is，you、we、they 和複數名詞用
            are。</span
          >
        </div>
        <div>
          <span class="term">going to</span>
          <span>表示未來。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>未來要發生的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="縮寫" mark="are">
      <div class="rows is-labeled">
        <div>
          <span class="term">I'm going to</span>
          <span
            ><NoteMark sentence="I'm going to wear them on holiday." :marks="[]" /><span
              class="translation"
              >我要在度假時穿它們。</span
            ></span
          >
        </div>
        <div>
          <span class="term">it's going to</span>
          <span
            ><NoteMark sentence="It's going to be hot." :marks="[]" /><span class="translation"
              >天氣會很熱。</span
            ></span
          >
        </div>
        <div>
          <span class="term">we're going to</span>
          <span
            ><NoteMark sentence="We're going to have pizza." :marks="[]" /><span class="translation"
              >我們要吃披薩。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">口語常把 am、is、are 縮寫。</p>
    </NoteSlide>
    <NoteSlide title="going to 前面要有 am、is 或 are" mark="going to">
      <NoteFix
        wrong="We going to take a taxi."
        right="We are going to take a taxi."
        :fix="['are']"
      />
    </NoteSlide>
    <NoteSlide title="going to 的 to 後面接原形動詞" mark="going to">
      <NoteFix
        wrong="I'm going to buying a new phone."
        right="I'm going to buy a new phone."
        :fix="['buy']"
      />
    </NoteSlide>
    <NoteSlide title="主詞是 she，用 is">
      <NoteFix
        wrong="She are going to visit her aunt."
        right="She is going to visit her aunt."
        :fix="['is']"
      />
    </NoteSlide>
    <NoteSlide title="going 後面要有 to" mark="going">
      <NoteFix
        wrong="It is going start at half past four."
        right="It is going to start at half past four."
        :fix="['to']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
