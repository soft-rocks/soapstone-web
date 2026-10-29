<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// verbs-form-be-complement, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="be 連接主詞和補語">
      <NoteWords
        :size="32"
        :parts="[
          { t: 'My house', role: '主詞' },
          { t: 'is', role: 'be', kind: 'key' },
          { t: 'very clean.', role: '補語' },
        ]"
      />
      <p class="translation">我家很乾淨。</p>
    </NoteSlide>

    <NoteSlide title="be 的形式跟著主詞" mark="is">
      <div class="rows is-labeled">
        <div>
          <span class="term">I</span>
          <span>am, was</span>
        </div>
        <div>
          <span class="term">he / she / it</span>
          <span>is, was</span>
        </div>
        <div>
          <span class="term">you / we / they</span>
          <span>are, were</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="補語可以是形容詞、名詞片語、介系詞片語或日期" mark="very clean.">
      <div class="rows is-labeled">
        <div>
          <span class="term">形容詞</span>
          <span
            ><NoteMark sentence="The tea is too sweet." :marks="['too sweet']" /><span
              class="translation"
              >茶太甜了。</span
            ></span
          >
        </div>
        <div>
          <span class="term">名詞片語</span>
          <span
            ><NoteMark sentence="Ms Lee is our new teacher." :marks="['our new teacher']" /><span
              class="translation"
              >李老師是我們的新老師。</span
            ></span
          >
        </div>
        <div>
          <span class="term">介系詞片語</span>
          <span
            ><NoteMark sentence="Our teacher is from Ireland." :marks="['from Ireland']" /><span
              class="translation"
              >我們老師是愛爾蘭人。</span
            ></span
          >
        </div>
        <div>
          <span class="term">日期</span>
          <span
            ><NoteMark sentence="The test is on Monday." :marks="['on Monday']" /><span
              class="translation"
              >考試在星期一。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="主詞和形容詞補語中間要有 be" mark="is">
      <NoteFix
        wrong="The new swimming pool very popular."
        right="The new swimming pool is very popular."
        fix="is"
      />
    </NoteSlide>

    <NoteSlide title="主詞是複數，用 are" mark="is">
      <NoteFix
        wrong="The tickets for the concert is expensive."
        right="The tickets for the concert are expensive."
        fix="are"
      />
    </NoteSlide>

    <NoteSlide title="agree 是動詞，前面不加 be">
      <NoteFix
        wrong="My grandparents are own a small boat."
        right="My grandparents own a small boat."
        fix="own"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
