<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-use-because-reasons, as slides, in the order of content.md. One point per slide: the title names it, the
// diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="because 子句放在主要子句後面，說明原因">
      <NoteWords
        :size="34"
        :parts="[
          { t: 'I love her', role: '主要子句' },
          { t: 'because', role: '因為', kind: 'key' },
          { t: 'she is friendly.', role: '主詞 + 動詞' },
        ]"
      />
      <p class="translation">我愛她，因為她很友善。</p>
    </NoteSlide>

    <NoteSlide title="because 後面接有主詞和動詞的子句" mark="because">
      <div class="rows is-labeled">
        <div>
          <span class="term">原因</span>
          <span
            ><NoteMark
              sentence="I'm tired because I worked late."
              :marks="['because I worked late.']"
            /><span class="translation">我很累，因為我工作到很晚。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="回答 Why 的問題，可以只說 because 子句" mark="because">
      <div class="rows is-labeled">
        <div>
          <span class="term">A</span>
          <span
            ><NoteMark sentence="Why are you happy?" :marks="['Why']" /><span class="translation"
              >你為什麼這麼開心？</span
            ></span
          >
        </div>
        <div>
          <span class="term">B</span>
          <span
            ><NoteMark sentence="Because it's my birthday." :marks="['Because']" /><span
              class="translation"
              >因為今天是我生日。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="because 後面要有主詞" mark="she is">
      <NoteFix
        wrong="I like this café because is quiet."
        right="I like this café because it is quiet."
        fix="it"
      />
    </NoteSlide>

    <NoteSlide title="一句話只用 because 或 so 其中一個" mark="because">
      <NoteFix
        wrong="Because it was cold, so I wore a coat."
        right="I wore a coat because it was cold."
        fix="because it was cold."
      />
    </NoteSlide>

    <NoteSlide title="because 後面接子句，只接名詞用 because of" mark="she is friendly.">
      <NoteFix
        wrong="I stayed home because the rain."
        right="I stayed home because it was raining."
        fix="it was raining."
      >
        只接名詞要寫 <code>because of the rain</code>。
      </NoteFix>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
