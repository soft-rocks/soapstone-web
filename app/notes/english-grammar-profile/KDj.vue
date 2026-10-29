<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-of-ours, as slides, in the order of content.md. One point per slide: the title names it, the
// diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="some friends of ours 說我們的朋友之中的幾個">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Finally we went to Venice, where we met', kind: 'dim' },
          { t: 'some friends', role: 'some + 名詞' },
          { t: 'of ours.', role: '我們的', kind: 'key' },
        ]"
      />
      <p class="translation">最後我們去了威尼斯，在那裡跟我們的幾個朋友碰面。</p>
    </NoteSlide>

    <NoteSlide title="聽的人不知道是誰，用 a 加名詞加 of ours" mark="of ours.">
      <div class="rows is-labeled">
        <div>
          <span class="term">一個</span>
          <span
            ><NoteMark
              sentence="A neighbor of ours has a beautiful garden."
              :marks="['A neighbor of ours']"
            /><span class="translation">我們的一個鄰居有一座很漂亮的花園。</span></span
          >
        </div>
        <div>
          <span class="term">一個</span>
          <span
            ><NoteMark sentence="A friend of ours is a pilot." :marks="['A friend of ours']" /><span
              class="translation"
              >我們有一個朋友是機師。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="放在名字後面，前後加逗號，說明這個人是誰" mark="of ours.">
      <div class="rows is-labeled">
        <div>
          <span class="term">補充說明</span>
          <span
            ><NoteMark
              sentence="Emma, a neighbor of ours, teaches piano."
              :marks="['a neighbor of ours,']"
            /><span class="translation">Emma 是我們的鄰居，她教鋼琴。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="of 後面用 ours，不用 us" mark="of ours.">
      <NoteFix
        wrong="Some friends of us live in Spain."
        right="Some friends of ours live in Spain."
        fix="ours"
      />
    </NoteSlide>

    <NoteSlide title="a 和 our 不能放在一起" mark="some friends of ours.">
      <NoteFix
        wrong="An our neighbor called the police."
        right="A neighbor of ours called the police."
        fix="A neighbor of ours"
      />
    </NoteSlide>

    <NoteSlide title="ours 沒有撇號" mark="ours.">
      <NoteFix wrong="He's a cousin of our's." right="He's a cousin of ours." fix="ours." />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
