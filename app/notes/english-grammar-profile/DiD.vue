<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-affirmative-wh-interrogative, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="疑問詞後面先接助動詞，再接主詞" mark="What have you">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Where', role: '疑問詞', kind: 'key' },
          { t: 'did', role: '助動詞', kind: 'key', ring: true },
          { t: 'you', role: '主詞' },
          { t: 'buy', role: '原形動詞' },
          { t: 'those lovely shoes?', kind: 'dim' },
        ]"
      />
      <p class="translation">你那雙漂亮的鞋子是在哪裡買的？</p>
    </NoteSlide>

    <NoteSlide title="助動詞看動詞的形式決定" mark="have">
      <div class="rows is-labeled">
        <div>
          <span class="term">do / does / did</span>
          <span
            ><NoteMark sentence="What do you want for dinner?" :marks="['do']" /><span
              class="translation"
              >你晚餐想吃什麼？</span
            ></span
          >
        </div>
        <div>
          <span class="term">be + 動詞-ing</span>
          <span
            ><NoteMark
              sentence="I miss you already. When are you coming back from Japan?"
              :marks="['are']"
            /><span class="translation">我已經在想你了。你什麼時候從日本回來？</span></span
          >
        </div>
        <div>
          <span class="term">情態動詞</span>
          <span
            ><NoteMark
              sentence="The client wants a plan by Friday. When can we meet to talk about the project?"
              :marks="['can']"
            /><span class="translation"
              >客戶星期五前要一份計畫。我們什麼時候可以見面討論專案？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="疑問詞後面先接助動詞" mark="have you">
      <NoteFix
        wrong="Where you did learn to cook so well?"
        right="Where did you learn to cook so well?"
        fix="did you"
      />
    </NoteSlide>

    <NoteSlide title="一般動詞的疑問句要加 do" mark="have">
      <NoteFix
        wrong="What you want for dinner?"
        right="What do you want for dinner?"
        fix="do you"
      />
    </NoteSlide>

    <NoteSlide title="did 後面用原形動詞" mark="bought">
      <NoteFix wrong="What did you bought?" right="What did you buy?" fix="buy" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
