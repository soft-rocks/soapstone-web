<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-surprise, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="Can you believe + (that) + 子句?" mark="that">
      <div class="rows is-labeled">
        <div>
          <span class="term">Can you believe</span>
          <span>表示驚訝，不是真的在問。</span>
        </div>
        <div>
          <span class="term">子句</span>
          <span>讓人驚訝的事。that 可以省略。</span>
        </div>
        <div>
          <span class="term">it / this / that</span>
          <span>指前面剛說的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="放在句首或句尾">
      <div class="rows is-labeled">
        <div>
          <span class="term">句首</span>
          <span
            ><NoteMark sentence="Can you believe he's only fifteen?" :marks="[]" /><span
              class="translation"
              >你敢相信他才十五歲嗎？</span
            ></span
          >
        </div>
        <div>
          <span class="term">句尾</span>
          <span
            ><NoteMark sentence="It cost me fifty pounds! Can you believe that?" :marks="[]" /><span
              class="translation"
              >這花了我五十英鎊！你相信嗎？</span
            ></span
          >
        </div>
      </div>
      <p class="remark">書寫時，句尾常用驚嘆號代替問號。</p>
    </NoteSlide>
    <NoteSlide title="加上 I can't believe">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="Can you believe it? I can't believe it!"
              :marks="['I can\'t believe it!']"
            /><span class="translation">你相信嗎？我真不敢相信！</span></span
          >
        </div>
      </div>
      <p class="remark">說話者自己也常接著說 I can't believe it。</p>
    </NoteSlide>
    <NoteSlide title="can 後面接原形動詞 believe" mark="believe">
      <NoteFix wrong="Can you believed it?" right="Can you believe it?" :fix="['believe']" />
    </NoteSlide>
    <NoteSlide title="問句裡，can 放在 you 前面" mark="Can">
      <NoteFix wrong="You can believe he won?" right="Can you believe he won?" :fix="['Can you']" />
    </NoteSlide>
    <NoteSlide title="believe 後面的子句用一般的語序" mark="believe">
      <NoteFix
        wrong="Can you believe how much did it cost?"
        right="Can you believe how much it cost?"
        :fix="['it']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
