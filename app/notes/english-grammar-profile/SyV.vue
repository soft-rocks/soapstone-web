<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-use-i-dare-say, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="I dare say + (that) + 子句">
      <div class="rows is-labeled">
        <div>
          <span class="term">I dare say</span>
          <span>我想、大概。比較正式，也有點老派。</span>
        </div>
        <div>
          <span class="term">that</span>
          <span>可以省略。</span>
        </div>
        <div>
          <span class="term">子句</span>
          <span>說話者覺得大概是真的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="放在句尾或句中">
      <div class="rows is-labeled">
        <div>
          <span class="term">句尾</span>
          <span
            ><NoteMark sentence="You're tired after the trip, I dare say." :marks="[]" /><span
              class="translation"
              >你旅行後大概累了吧。</span
            ></span
          >
        </div>
        <div>
          <span class="term">句中</span>
          <span
            ><NoteMark
              sentence="The canteen, which I dare say needs improvement, is very busy at lunch."
              :marks="[]"
            /><span class="translation">餐廳中午很擠，我想它需要改善。</span></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="承認對方說得有道理" mark="I dare say">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="I dare say you're right, but I still want to try."
              :marks="['I dare say']"
            /><span class="translation">我想你說得對，可是我還是想試試看。</span></span
          >
        </div>
      </div>
      <p class="remark">I dare say 也常用來先承認對方的話，再提出不同的看法。</p>
    </NoteSlide>
    <NoteSlide title="主詞是 I，dare 不加 -s" mark="dare">
      <NoteFix wrong="I dares say it will rain." right="I dare say it will rain." :fix="['dare']" />
    </NoteSlide>
    <NoteSlide title="dare 後面接原形動詞 say" mark="dare">
      <NoteFix
        wrong="I dare saying that he is right."
        right="I dare say that he is right."
        :fix="['say']"
      />
    </NoteSlide>
    <NoteSlide title="子句用 that 開頭，或省略 that" mark="that">
      <NoteFix
        wrong="I dare say what the plan will work."
        right="I dare say that the plan will work."
        :fix="['that']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
