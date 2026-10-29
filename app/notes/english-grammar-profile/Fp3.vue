<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// future-use-predictions, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + am / is / are + going to + 原形動詞" mark="like">
      <div class="rows is-labeled">
        <div>
          <span class="term">be going to</span>
          <span>根據現在知道的事，預測未來。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>預測會發生的事，像 like、miss、enjoy、teach、change。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="I think 開頭" mark="I think">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="I'm sure you're going to pass." :marks="['I\'m sure']" /><span
              class="translation"
              >我確定你會考過。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">預測前面常加 I think、I'm sure、I bet。</p>
    </NoteSlide>
    <NoteSlide title="否定的預測">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="This is not going to teach you much." :marks="['not']" /><span
              class="translation"
              >這不會教你多少東西。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">be 動詞後面加 not。</p>
    </NoteSlide>
    <NoteSlide title="問對方的預測">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="Do you think it's going to work?" :marks="['Do you think']" /><span
              class="translation"
              >你覺得這會成功嗎？</span
            ></span
          >
        </div>
      </div>
      <p class="remark">Do you think 後面接一般的句子。</p>
    </NoteSlide>
    <NoteSlide title="going to 後面接原形動詞" mark="going to">
      <NoteFix
        wrong="I think you're going to liking it."
        right="I think you're going to like it."
        :fix="['like']"
      />
    </NoteSlide>
    <NoteSlide title="Do you think 後面的句子不換位置">
      <NoteFix
        wrong="Do you think is it going to rain?"
        right="Do you think it's going to rain?"
        :fix="['it\'s']"
      />
    </NoteSlide>
    <NoteSlide title="going to 前面要有 am、is 或 are" mark="going to">
      <NoteFix
        wrong="I think the plan going to fail."
        right="I think the plan is going to fail."
        :fix="['is']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
