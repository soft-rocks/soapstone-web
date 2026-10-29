<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-comparative-clauses-with-ours-hers, as slides, in the order of content.md. One point per slide: the title names it, the
// diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="than 後面用 hers，不用再說一次名詞">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'I told my mother that', kind: 'dim' },
          { t: 'your Spanish omelet', role: '主詞' },
          { t: 'is better than', role: '比較級' },
          { t: 'hers.', role: '= her Spanish omelet', kind: 'key' },
        ]"
      />
      <p class="translation">我跟我媽說，你做的西班牙烘蛋比她做的好吃。</p>
    </NoteSlide>

    <NoteSlide title="than 後面接 hers 或 ours，代替第二樣東西" mark="hers.">
      <div class="rows is-labeled">
        <div>
          <span class="term">ours</span>
          <span
            ><NoteMark sentence="Their garden is bigger than ours." :marks="['than ours.']" /><span
              class="translation"
              >他們的花園比我們的大。</span
            ></span
          >
        </div>
        <div>
          <span class="term">hers</span>
          <span
            ><NoteMark sentence="Your cake is better than hers." :marks="['than hers.']" /><span
              class="translation"
              >你的蛋糕比她的好吃。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="as ... as 中間放原形，not as ... as 是沒有那麼" mark="hers.">
      <div class="rows is-labeled">
        <div>
          <span class="term">not as ... as</span>
          <span
            ><NoteMark
              sentence="Their house isn't as old as ours."
              :marks="['isn\'t as old as ours.']"
            /><span class="translation">他們的房子沒有我們的那麼舊。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="比較的是車，用 hers，不用 her" mark="hers.">
      <NoteFix
        wrong="His car is faster than her."
        right="His car is faster than hers."
        fix="hers."
      />
    </NoteSlide>

    <NoteSlide title="比較兩支隊伍，用 ours 代替 our team" mark="hers.">
      <NoteFix
        wrong="Their team played better than us team."
        right="Their team played better than ours."
        fix="ours."
      />
    </NoteSlide>

    <NoteSlide title="hers 沒有撇號" mark="hers.">
      <NoteFix
        wrong="My answer is longer than her's."
        right="My answer is longer than hers."
        fix="hers."
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
