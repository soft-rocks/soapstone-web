<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-questions-502, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="May + I + 原形動詞 + …？" mark="May">
      <div class="rows is-labeled">
        <div>
          <span class="term">May</span>
          <span>放在句首。</span>
        </div>
        <div>
          <span class="term">I</span>
          <span>May 的問句主詞通常是 I，有時候是 we。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>想做的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="May I ask">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="May I ask if the price includes tax?"
              :marks="['May I ask', 'if']"
            /><span class="translation">請問價格有包含稅嗎？</span></span
          >
        </div>
      </div>
      <p class="remark">May I ask 用來有禮貌地問問題。後面可以接名詞、if 子句或疑問詞子句。</p>
    </NoteSlide>
    <NoteSlide title="子句用直述句的順序">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="May I ask when the train leaves?" :marks="[]" /><span
              class="translation"
              >請問火車什麼時候開？</span
            ></span
          >
        </div>
      </div>
      <p class="remark">if 或疑問詞後面的子句用直述句的順序，主詞在動詞前面。</p>
    </NoteSlide>
    <NoteSlide title="ask 後面的子句用直述句的順序">
      <NoteFix
        wrong="May I ask where is the office?"
        right="May I ask where the office is?"
        :fix="['the', 'office is?']"
      />
    </NoteSlide>
    <NoteSlide title="may 後面的主詞用 I" mark="May">
      <NoteFix wrong="May me ask a question?" right="May I ask a question?" :fix="['I']" />
    </NoteSlide>
    <NoteSlide title="是非問題要用 if 或 whether 帶出子句">
      <NoteFix
        wrong="May I ask you we will get a discount?"
        right="May I ask you if we will get a discount?"
        :fix="['if']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
