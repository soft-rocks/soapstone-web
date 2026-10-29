<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-use-if-clause-possible-politeness, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="If it is / it's possible, + 請求或要求" mark="could you">
      <div class="rows is-labeled">
        <div>
          <span class="term">if it's possible</span>
          <span>如果可以的話。</span>
        </div>
        <div>
          <span class="term">if possible</span>
          <span>省略了 it is，比較短。書面常用。</span>
        </div>
        <div>
          <span class="term">請求或要求</span>
          <span>常用 could you、I would like、please。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="放在句首或句尾">
      <div class="rows is-labeled">
        <div>
          <span class="term">句首</span>
          <span
            ><NoteMark sentence="If possible, please call me before ten." :marks="[]" /><span
              class="translation"
              >可以的話，請在十點前打給我。</span
            ></span
          >
        </div>
        <div>
          <span class="term">句尾</span>
          <span
            ><NoteMark sentence="I'd like a room with a sea view, if possible." :marks="[]" /><span
              class="translation"
              >可以的話，我想要一間看得到海的房間。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">放在句首時，後面加逗號。</p>
    </NoteSlide>
    <NoteSlide title="放在句子中間">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="I would, if possible, like the pool to open earlier."
              :marks="['if possible,']"
            /><span class="translation">可以的話，我希望游泳池早一點開。</span></span
          >
        </div>
      </div>
      <p class="remark">if possible 也可以放在句子中間，前後加逗號。</p>
    </NoteSlide>
    <NoteSlide title="寫完整的子句時要有主詞 it">
      <NoteFix
        wrong="If is possible, I'd like to pay by card."
        right="If it's possible, I'd like to pay by card."
        :fix="['it\'s']"
      />
    </NoteSlide>
    <NoteSlide title="這裡用形容詞 possible" mark="possible,">
      <NoteFix
        wrong="If possibly, please send it today."
        right="If possible, please send it today."
        :fix="['possible,']"
      />
    </NoteSlide>
    <NoteSlide title="if 子句用現在簡單式" mark="If">
      <NoteFix
        wrong="If it will be possible, could you call me?"
        right="If it's possible, could you call me?"
        :fix="['it\'s']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
