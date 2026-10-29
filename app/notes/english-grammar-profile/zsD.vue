<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-rules, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + must not + 原形動詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">must not / mustn't</span>
          <span>不可以、禁止。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>不允許的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="規定和告示" mark="mustn't">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="Passengers must not stand on the upper deck of the bus."
              :marks="['must not']"
            /><span class="translation">乘客在雙層巴士的上層不可以站著。</span></span
          >
        </div>
      </div>
      <p class="remark">正式的規定和告示常寫 must not。口語常說 mustn't。</p>
    </NoteSlide>
    <NoteSlide title="給建議的規則">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="You must not shout at a dog." :marks="['must not']" /><span
              class="translation"
              >你不可以對狗大吼。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">must not 也可以說說話者覺得不應該做的事，像教養孩子或照顧寵物的原則。</p>
    </NoteSlide>
    <NoteSlide title="must 的否定是 must not 或 mustn't" mark="mustn't">
      <NoteFix
        wrong="You don't must eat in class."
        right="You mustn't eat in class."
        :fix="['mustn\'t']"
      />
    </NoteSlide>
    <NoteSlide title="mustn't 是「不可以」" mark="mustn't">
      <NoteFix
        wrong="It's free, so you mustn't pay."
        right="It's free, so you don't have to pay."
        :fix="['don\'t have to']"
      />
    </NoteSlide>
    <NoteSlide title="must not 後面接原形動詞">
      <NoteFix
        wrong="Students must not running near the swimming pool."
        right="Students must not run near the swimming pool."
        :fix="['run']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
