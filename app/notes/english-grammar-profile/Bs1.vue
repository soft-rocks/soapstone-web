<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// future-form-with-adverbs-404, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + am / is / are + 副詞 + going to + 原形動詞" mark="going to">
      <div class="rows is-labeled">
        <div>
          <span class="term">副詞</span>
          <span>放在 be 動詞後面，going to 前面。</span>
        </div>
        <div>
          <span class="term">going to + 原形動詞</span>
          <span>未來的打算或預測。</span>
        </div>
        <div>
          <span class="term">never</span>
          <span>永遠不會。</span>
        </div>
        <div>
          <span class="term">really</span>
          <span>真的。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="縮寫時的位置">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="We're really going to miss you." :marks="[]" /><span
              class="translation"
              >我們真的會很想你。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">be 動詞縮寫時，副詞還是放在縮寫後面。</p>
    </NoteSlide>
    <NoteSlide title="否定句" mark="never">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="He's probably not going to come."
              :marks="['probably', 'not']"
            /><span class="translation">他可能不會來。</span></span
          >
        </div>
      </div>
      <p class="remark">否定句裡，probably 放在 not 前面。</p>
    </NoteSlide>
    <NoteSlide title="副詞放在 be 動詞後面">
      <NoteFix
        wrong="I never am going to forget it."
        right="I'm never going to forget it."
        :fix="['I\'m', 'going']"
      />
    </NoteSlide>
    <NoteSlide title="going to 中間不放副詞" mark="going to">
      <NoteFix
        wrong="We are going really to miss you."
        right="We are really going to miss you."
        :fix="['really', 'to']"
      />
    </NoteSlide>
    <NoteSlide title="never 已經是否定，不再加 not" mark="never">
      <NoteFix
        wrong="I'm not never going to eat there again."
        right="I'm never going to eat there again."
        :fix="['never']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
