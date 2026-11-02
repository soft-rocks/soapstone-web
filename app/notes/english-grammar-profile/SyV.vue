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
    <NoteSlide title="I dare say + (that) + 子句" mark="I dare say">
      <div class="rows is-labeled">
        <div>
          <span class="term">I dare say</span>
          <span>我想、大概。比較正式，也比較舊式。</span>
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
    <NoteSlide title="放在句尾或句中" mark="I dare say">
      <div class="rows is-labeled">
        <div>
          <span class="term">句尾</span>
          <span
            ><NoteMark sentence="It'll rain later, I dare say." :marks="['I dare say']" /><span
              class="translation"
              >晚一點大概會下雨吧。</span
            ></span
          >
        </div>
        <div>
          <span class="term">句中</span>
          <span
            ><NoteMark
              sentence="The museum, which I dare say few tourists know about, is free on Sundays."
              :marks="['I dare say']"
            /><span class="translation">那間博物館星期天免費，我想知道它的觀光客不多。</span></span
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
      <NoteFix
        wrong="I dares say the trains will be full today."
        right="I dare say the trains will be full today."
        :fix="['dare']"
      />
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
