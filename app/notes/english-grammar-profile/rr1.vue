<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-ellipsis-558, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + 動詞 + …, as + 主詞 + ought to." mark="to.">
      <div class="rows is-labeled">
        <div>
          <span class="term">ought to</span>
          <span>句子在 to 結束，後面的動詞省略。</span>
        </div>
        <div>
          <span class="term">省略的動詞</span>
          <span>前面已經說過，聽的人知道是什麼。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="to 不能省略" mark="to.">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="My doctor says I need more exercise. I don't exercise as often as I ought to." :marks="['to.']" /><span
              class="translation"
              >醫生說我需要多運動。我運動得沒有我應該的那麼常。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">省略的時候，to 要留下來。</p>
    </NoteSlide>
    <NoteSlide title="回答問題" mark="ought to.">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence='"Should I call him?" "Yes, I think you ought to."'
              :marks="['ought to.']"
            /><span class="translation">「我該打給他嗎？」「對，我想你應該打。」</span></span
          >
        </div>
      </div>
      <p class="remark">回答問題時也可以只說 ought to。</p>
    </NoteSlide>
    <NoteSlide title="should 後面不接 to" mark="ought to.">
      <NoteFix
        wrong="I'm always tired at work. I don't sleep as much as I should to."
        right="I'm always tired at work. I don't sleep as much as I ought to."
        :fix="['ought']"
      />
    </NoteSlide>
    <NoteSlide title="動詞省略以後，句子在 to 結束" mark="to.">
      <NoteFix
        wrong="Dad does all the cleaning. My brother doesn't help, but he ought to it."
        right="Dad does all the cleaning. My brother doesn't help, but he ought to."
        :fix="['to.']"
      />
    </NoteSlide>
    <NoteSlide title="ought 不加 -s" mark="ought">
      <NoteFix
        wrong="Kate lives far from home now. She doesn't call her mum, but she oughts to."
        right="Kate lives far from home now. She doesn't call her mum, but she ought to."
        :fix="['ought']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
