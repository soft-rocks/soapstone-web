<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-of-mine, as slides, in the order of content.md. One point per slide: the title names it, the
// diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="a friend of mine 說我的朋友之中的一個">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'A friend', role: 'a + 名詞' },
          { t: 'of mine', role: '我的', kind: 'key' },
          { t: 'gave me a present for my birthday.', kind: 'dim' },
        ]"
      />
      <p class="translation">我的一個朋友送了我生日禮物。</p>
    </NoteSlide>

    <NoteSlide title="聽的人不知道是誰用 a friend of mine，已經知道用 my friend" mark="of mine">
      <div class="rows is-labeled">
        <div>
          <span class="term">a friend of mine</span>
          <span
            ><NoteMark sentence="A friend of mine is a nurse." :marks="['A friend of mine']" /><span
              class="translation"
              >我有一個朋友是護理師。</span
            ></span
          >
        </div>
        <div>
          <span class="term">my friend</span>
          <span
            ><NoteMark sentence="My friend Lisa is a nurse." :marks="['My friend']" /><span
              class="translation"
              >我朋友 Lisa 是護理師。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="說幾個人用 some 或數字，名詞用複數" mark="A friend">
      <div class="rows is-labeled">
        <div>
          <span class="term">複數</span>
          <span
            ><NoteMark
              sentence="Some friends of mine are coming for dinner."
              :marks="['Some friends']"
            /><span class="translation">我的幾個朋友要來吃晚餐。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="of 後面用 mine，不用 me" mark="of mine">
      <NoteFix
        wrong="A friend of me works in a bank."
        right="A friend of mine works in a bank."
        fix="mine"
      />
    </NoteSlide>

    <NoteSlide title="a 和 my 不能放在一起" mark="A friend of mine">
      <NoteFix
        wrong="A my friend called me yesterday."
        right="A friend of mine called me yesterday."
        fix="A friend of mine"
      />
    </NoteSlide>

    <NoteSlide title="說兩個以上，名詞用複數">
      <NoteFix
        wrong="Two friend of mine are in my class."
        right="Two friends of mine are in my class."
        fix="friends"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
