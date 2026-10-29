<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-questions-540, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="Must + 主詞 + 原形動詞 + …？" mark="How much">
      <div class="rows is-labeled">
        <div>
          <span class="term">Must I</span>
          <span>我必須……嗎？</span>
        </div>
        <div>
          <span class="term">疑問詞</span>
          <span>what、when、how much 這類詞放在句首。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>問的那件事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="用 or 列出兩個選擇" mark="must">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="Can I change the date, or must I cancel?"
              :marks="['must', 'or']"
            /><span class="translation">我可以改日期嗎，還是我必須取消？</span></span
          >
        </div>
      </div>
      <p class="remark">must 的問句常跟另一個問句用 or 連在一起。</p>
    </NoteSlide>
    <NoteSlide title="must 的問句不用 do" mark="must">
      <NoteFix wrong="Do I must pay now?" right="Must I pay now?" :fix="['Must', 'pay']" />
    </NoteSlide>
    <NoteSlide title="問句把 must 放在主詞前面" mark="must">
      <NoteFix
        wrong="How much money I must bring?"
        right="How much money must I bring?"
        :fix="['must', 'bring?']"
      />
    </NoteSlide>
    <NoteSlide title="must 後面直接接原形動詞" mark="must">
      <NoteFix
wrong="Must we to wear a tie at the company dinner?"
        right="Must we wear a tie at the company dinner?" :fix="['wear']" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
