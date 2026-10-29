<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-be-obliged-to-obligation, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + am / is / are / was / were + obliged to + 原形動詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">be obliged to</span>
          <span>不得不、有義務。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>被要求做的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="正式的通知">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="All staff are obliged to attend the training." :marks="[]" /><span
              class="translation"
              >所有員工都必須參加訓練。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">公司和機構的通知常用這個說法。</p>
    </NoteSlide>
    <NoteSlide title="否定：not obliged to">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="You are not obliged to answer." :marks="['not obliged to']" /><span
              class="translation"
              >你不必回答。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">not obliged to 表示「不必」，沒有義務，不是「不可以」。</p>
    </NoteSlide>
    <NoteSlide title="這個片語是 be obliged to，用過去分詞 obliged" mark="obliged">
      <NoteFix
        wrong="We are oblige to pay the fee."
        right="We are obliged to pay the fee."
        :fix="['obliged']"
      />
    </NoteSlide>
    <NoteSlide title="obliged 前面要有 be 動詞" mark="obliged">
      <NoteFix
        wrong="Everyone obliged to have a permit."
        right="Everyone is obliged to have a permit."
        :fix="['is']"
      />
    </NoteSlide>
    <NoteSlide title="to 後面接原形動詞" mark="to">
      <NoteFix
        wrong="They were obliged to leaving the country."
        right="They were obliged to leave the country."
        :fix="['leave']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
