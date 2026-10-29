<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-be-sure-certain-to, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + am / is / are + sure to + 原形動詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">be sure to</span>
          <span>一定會。</span>
        </div>
        <div>
          <span class="term">be certain to</span>
          <span>一定會。比較正式。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>確定會發生的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="說好處和結果">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="By bicycle, you are sure to arrive at work on time."
              :marks="[]"
            /><span class="translation">騎腳踏車，你一定能準時上班。</span></span
          >
        </div>
      </div>
      <p class="remark">寫作文和商業信件時，常用來說某個做法一定會帶來的好處。</p>
    </NoteSlide>
    <NoteSlide title="be sure 後面接 to 和原形動詞，或接完整的 that 子句" mark="that">
      <NoteFix
        wrong="He is sure that win the race."
        right="He is sure to win the race."
        :fix="['to']"
      />
    </NoteSlide>
    <NoteSlide title="to 後面接原形動詞" mark="to">
      <NoteFix
        wrong="We are certain to attracting more customers."
        right="We are certain to attract more customers."
        :fix="['attract']"
      />
    </NoteSlide>
    <NoteSlide title="sure 是形容詞，前面要有 be 動詞" mark="sure">
      <NoteFix wrong="This plan sure to work." right="This plan is sure to work." :fix="['is']" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
