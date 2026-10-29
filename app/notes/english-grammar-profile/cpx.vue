<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-question, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="是非疑問句" mark="Can">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="Yes, you can. / No, you can't."
              :marks="['can\'t.', 'can.']"
            /><span class="translation">可以。／不可以。</span></span
          >
        </div>
      </div>
      <p class="remark">簡答用 can 或 can't。</p>
    </NoteSlide>
    <NoteSlide title="常見的用法" mark="Can">
      <div class="rows is-labeled">
        <div>
          <span class="term">問能力</span>
          <span
            ><NoteMark sentence="Can you swim?" :marks="['Can']" /><span class="translation"
              >你會游泳嗎？</span
            ></span
          >
        </div>
        <div>
          <span class="term">問可不可以</span>
          <span
            ><NoteMark sentence="Can I sit here?" :marks="['Can']" /><span class="translation"
              >我可以坐這裡嗎？</span
            ></span
          >
        </div>
        <div>
          <span class="term">邀請和請求</span>
          <span
            ><NoteMark sentence="Can you come for dinner on Monday?" :marks="['Can']" /><span
              class="translation"
              >你星期一可以來吃晚餐嗎？</span
            ></span
          >
        </div>
      </div>
      <p class="remark">Can 開頭的問句常用來。</p>
    </NoteSlide>
    <NoteSlide title="wh- 疑問句">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="Where can I buy a ticket?" :marks="[]" /><span class="translation"
              >我可以在哪裡買票？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="寫成問句時，can 放在主詞前面" mark="Can">
      <NoteFix
        wrong="We can go to the park on Sunday?"
        right="Can we go to the park on Sunday?"
        :fix="['Can we']"
      />
    </NoteSlide>
    <NoteSlide title="can 的疑問句不用 do" mark="Can">
      <NoteFix wrong="Do you can help me?" right="Can you help me?" :fix="['Can', 'help']" />
    </NoteSlide>
    <NoteSlide title="簡答用 can 或 can't" mark="Can">
      <NoteFix
        wrong="Can you swim? — Yes, I do."
        right="Can you swim? — Yes, I can.#2"
        :fix="['can.']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
