<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-questions-522, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="Might + 主詞 + 原形動詞 + …？">
      <div class="rows is-labeled">
        <div>
          <span class="term">Might … ？</span>
          <span>會不會……？有沒有可能……？</span>
        </div>
        <div>
          <span class="term">Might … not … ？</span>
          <span>……難道不是……嗎？用來委婉地提出建議。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>問的那件事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="用 or 列出兩個可能" mark="Might">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="Did you send the wrong bill, or might it be the bill for the last tenant?"
              :marks="['might', 'or']"
            /><span class="translation"
              >是你們寄錯了帳單，還是那可能是上一個房客的帳單？</span
            ></span
          >
        </div>
      </div>
      <p class="remark">Might 的問句常跟另一個問句用 or 連在一起，列出兩個可能的原因。</p>
    </NoteSlide>
    <NoteSlide title="沒有縮寫的時候，not 放在主詞後面" mark="not">
      <NoteFix
        wrong="Might not it be better to wait?"
        right="Might it not be better to wait?"
        :fix="['it', 'be']"
      />
    </NoteSlide>
    <NoteSlide title="might 的問句不用 do" mark="Might">
      <NoteFix
        wrong="Do you might know the answer?"
        right="Might you know the answer?"
        :fix="['Might', 'know']"
      />
    </NoteSlide>
    <NoteSlide title="might 後面接原形動詞" mark="Might">
      <NoteFix wrong="Might she knows the way?" right="Might she know the way?" :fix="['know']" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
