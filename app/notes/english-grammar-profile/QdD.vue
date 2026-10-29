<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-use-reason, as slides, in the order of content.md. One point per slide: the title names it, the
// diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="as 引出原因，意思跟 because 一樣，比較正式">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I am going to be absent from my English class next week,', role: '主要子句' },
          { t: 'as', role: '因為', kind: 'key' },
          { t: 'I am traveling to Italy.', role: '主詞 + 動詞' },
        ]"
      />
      <p class="translation">我下週英文課會請假，因為我要去義大利。</p>
    </NoteSlide>

    <NoteSlide title="as 和 since 都說明原因，前面常加逗號" mark="as">
      <div class="rows is-labeled">
        <div>
          <span class="term">as</span>
          <span
            ><NoteMark
              sentence="I can't come to the meeting, as I'll be at a conference."
              :marks="['as']"
            /><span class="translation">我不能來開會，因為我會在參加研討會。</span></span
          >
        </div>
        <div>
          <span class="term">since</span>
          <span
            ><NoteMark
              sentence="We should take an umbrella, since it's going to rain."
              :marks="['since']"
            /><span class="translation">我們應該帶傘，因為快下雨了。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="單獨回答 Why 的問題用 because，不用 as 或 since" mark="as">
      <div class="rows is-labeled">
        <div>
          <span class="term">A</span>
          <span
            ><NoteMark sentence="Why are you leaving?" :marks="['Why']" /><span class="translation"
              >你為什麼要走？</span
            ></span
          >
        </div>
        <div>
          <span class="term">B</span>
          <span
            ><NoteMark sentence="Because I'm tired." :marks="['Because']" /><span
              class="translation"
              >因為我累了。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="as 後面接完整的子句" mark="I am traveling">
      <NoteFix
        wrong="I stayed at home, as my cold."
        right="I stayed at home, as I had a cold."
        fix="I had a cold."
      />
    </NoteSlide>

    <NoteSlide title="單獨回答 Why 的問題用 because">
      <NoteFix
        wrong="Why didn't you come? As I was sick."
        right="Why didn't you come? Because I was sick."
        fix="Because"
      />
    </NoteSlide>

    <NoteSlide title="一句話只用 since 或 so 其中一個">
      <NoteFix
        wrong="Since it was late, so we took a taxi."
        right="We took a taxi, since it was late."
        fix="since it was late."
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
