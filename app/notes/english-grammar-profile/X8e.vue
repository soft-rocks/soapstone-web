<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-use-change-of-situation, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + had planned / wanted / hoped + to + 原形動詞, but + 句子">
      <div class="rows is-labeled">
        <div>
          <span class="term">had planned to</span>
          <span>本來計畫要。</span>
        </div>
        <div>
          <span class="term">had wanted to</span>
          <span>本來想要。</span>
        </div>
        <div>
          <span class="term">had hoped to</span>
          <span>本來希望。</span>
        </div>
        <div>
          <span class="term">but</span>
          <span>帶出後來的變化。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="原本的打算沒實現" mark="had planned">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="It was my mum's birthday. We had planned to take her to the cinema, but she felt ill."
              :marks="['had planned', 'but']"
            /><span class="translation"
              >那天是我媽媽的生日。我們本來打算帶她去看電影，可是她不舒服。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">had planned 加 but，說原本的計畫沒有實現。</p>
    </NoteSlide>
    <NoteSlide title="想法改變了">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="My sister was angry with her boyfriend. At first she had wanted to call him, but she changed her mind."
              :marks="[]"
            /><span class="translation"
              >我姊姊在生她男朋友的氣。她一開始本來想打給他，可是她改變主意了。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">at first … had wanted 說一開始的想法，後來改變了。</p>
    </NoteSlide>
    <NoteSlide title="plan 後面接 to 和原形動詞" mark="to">
      <NoteFix
        wrong="My parents had planned go to Spain in May."
        right="My parents had planned to go to Spain in May."
        :fix="['to']"
      />
    </NoteSlide>
    <NoteSlide title="had 後面接過去分詞" mark="had">
      <NoteFix
        wrong="I had want to come to your wedding, but I was ill."
        right="I had wanted to come to your wedding, but I was ill."
        :fix="['wanted']"
      />
    </NoteSlide>
    <NoteSlide title="to 後面接原形動詞" mark="to">
      <NoteFix
        wrong="My cousins had hoped to went abroad this summer."
        right="My cousins had hoped to go abroad this summer."
        :fix="['go']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
