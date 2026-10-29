<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-obligation-and-necessity-545, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="Must + I / we + 原形動詞 + …？">
      <div class="rows is-labeled">
        <div>
          <span class="term">must I / must we</span>
          <span>我／我們必須……嗎？</span>
        </div>
        <div>
          <span class="term">疑問詞</span>
          <span>問細節，像 when、where、how many。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="寫信詢問規定" mark="must I">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="By what date must I reply?" :marks="['must I']" /><span
              class="translation"
              >我必須在哪一天前回覆？</span
            ></span
          >
        </div>
      </div>
      <p class="remark">正式的信件常用 must I 問規定、條件和截止日期。</p>
    </NoteSlide>
    <NoteSlide title="must 放在句首，不用 do" mark="must">
      <NoteFix
        wrong="I'm applying for a library card. Do I must bring a photo?"
        right="I'm applying for a library card. Must I bring a photo?"
        :fix="['Must', 'bring']"
      />
    </NoteSlide>
    <NoteSlide title="疑問詞後面先放 must，再放主詞" mark="must">
      <NoteFix wrong="Where I must sign?" right="Where must I sign?" :fix="['must', 'sign?']" />
    </NoteSlide>
    <NoteSlide title="mustn't 是「不可以」">
      <NoteFix
        wrong='"Must I pay now?" "No, you mustn&apos;t pay now."'
        right='"Must I pay now?" "No, you don&apos;t have to."'
        :fix="['don\'t have to.']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
