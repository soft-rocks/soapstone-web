<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-use-purpose, as slides, in the order of content.md. One point per slide: the title names it, the
// diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="to 不定詞子句放在前面，說出目的">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'To contact me,', role: '目的', kind: 'key' },
          { t: 'you can call me on my mobile phone.', role: '主要子句（方法）' },
        ]"
      />
      <p class="translation">要聯絡我的話，你可以打我的手機。</p>
    </NoteSlide>

    <NoteSlide title="目的放在前面加逗號，放在後面不加逗號" mark="To contact me,">
      <div class="rows is-labeled">
        <div>
          <span class="term">前面</span>
          <span
            ><NoteMark
              sentence="To get to the station, turn left at the bank."
              :marks="['To get to the station,']"
            /><span class="translation">要去車站的話，在銀行那裡左轉。</span></span
          >
        </div>
        <div>
          <span class="term">後面</span>
          <span
            ><NoteMark
              sentence="I went to the market to buy some fruit."
              :marks="['to buy some fruit.']"
            /><span class="translation">我去市場買水果。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="回答 Why 的問題，可以只說 to 不定詞子句" mark="To contact me,">
      <div class="rows is-labeled">
        <div>
          <span class="term">A</span>
          <span
            ><NoteMark sentence="Why are you saving money?" :marks="['Why']" /><span
              class="translation"
              >你為什麼在存錢？</span
            ></span
          >
        </div>
        <div>
          <span class="term">B</span>
          <span
            ><NoteMark sentence="To buy a new laptop." :marks="['To buy']" /><span
              class="translation"
              >為了買一台新筆電。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="說目的用 to 加原形動詞，不用 for" mark="To">
      <NoteFix
        wrong="I came here for learn English."
        right="I came here to learn English."
        fix="to"
      />
    </NoteSlide>

    <NoteSlide title="to 後面用原形動詞，不用動詞-ing" mark="contact">
      <NoteFix
        wrong="To getting to my house, take bus 5."
        right="To get to my house, take bus 5."
        fix="get"
      />
    </NoteSlide>

    <NoteSlide title="to 前面不加 for" mark="To">
      <NoteFix
        wrong="She went to the bank for to get some money."
        right="She went to the bank to get some money."
        fix="to get"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
