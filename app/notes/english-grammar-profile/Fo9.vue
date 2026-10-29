<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-questions-607, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="Will + 主詞 + 原形動詞 + …？" mark="what time">
      <div class="rows is-labeled">
        <div>
          <span class="term">Will</span>
          <span>放在主詞前面。</span>
        </div>
        <div>
          <span class="term">疑問詞</span>
          <span>what、when、where、what time、how long 放在句首。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>問的那件事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="Will you be …？" mark="will you be">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="Will you be at home this evening?" :marks="['Will you be']" /><span
              class="translation"
              >你今天傍晚會在家嗎？</span
            ></span
          >
        </div>
      </div>
      <p class="remark">Will you be 常用來問對方以後會在哪裡或會怎樣。</p>
    </NoteSlide>
    <NoteSlide title="will 的問句不用 do" mark="will">
      <NoteFix
        wrong="Do you will come tomorrow?"
        right="Will you come tomorrow?"
        :fix="['Will', 'come']"
      />
    </NoteSlide>
    <NoteSlide title="疑問詞後面先放 will，再放主詞" mark="will">
      <NoteFix
        wrong="What time you will be here?"
        right="What time will you be here?"
        :fix="['will', 'be']"
      />
    </NoteSlide>
    <NoteSlide title="簡答句尾的 will 不縮寫" mark="will">
      <NoteFix
        wrong='"Will you be there?" "Yes, I&apos;ll."'
        right='"Will you be there?" "Yes, I will."'
        :fix="['I will.']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
