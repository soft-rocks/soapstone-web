<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-relative-pronouns, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="數量詞 + of + which" mark="some of which">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'several factors,', role: '一群東西', kind: 'key' },
          { t: 'some of', role: '數量詞 + of' },
          { t: 'which', role: '指 factors', kind: 'key' },
          { t: 'have …', kind: 'dim' },
        ]"
      />
      <p class="translation">……受到好幾個因素影響，其中有些跟……一點關係也沒有。</p>
    </NoteSlide>

    <NoteSlide title="常用的數量詞" mark="some of">
      <div class="rows is-labeled">
        <div>
          <span class="term">some of</span>
          <span
            ><NoteMark
              sentence="He brought ten paintings, some of which were very large."
              :marks="['some of which']"
            /><span class="translation">他帶了十幅畫來，其中有幾幅非常大。</span></span
          >
        </div>
        <div>
          <span class="term">most of</span>
          <span
            ><NoteMark
              sentence="The club has eighty members, most of whom live nearby."
              :marks="['most of whom']"
            /><span class="translation">這個社團有八十個會員，大部分住在附近。</span></span
          >
        </div>
        <div>
          <span class="term">none of</span>
          <span
            ><NoteMark
              sentence="I asked three teachers, none of whom knew the answer."
              :marks="['none of whom']"
            /><span class="translation">我問了三位老師，沒有一位知道答案。</span></span
          >
        </div>
        <div>
          <span class="term">both of</span>
          <span
            ><NoteMark
              sentence="She has two brothers, both of whom are doctors."
              :marks="['both of whom']"
            /><span class="translation">她有兩個哥哥，兩個都是醫生。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="which 指東西，whom 指人" mark="which">
      <div class="rows is-labeled">
        <div>
          <span class="term">which</span>
          <span
            ><NoteMark
              sentence="The town has several museums, many of which are free."
              :marks="['which']"
            /><span class="translation">這個鎮有好幾間博物館，很多都免費。</span></span
          >
        </div>
        <div>
          <span class="term">whom</span>
          <span
            ><NoteMark
              sentence="We met some local people, many of whom spoke English."
              :marks="['whom']"
            /><span class="translation">我們遇到一些當地人，很多都會說英文。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="同一句裡不用 them" mark="which">
      <NoteFix
        wrong="I have many friends, some of them live abroad."
        right="I have many friends, some of whom live abroad."
        fix="whom"
      />
    </NoteSlide>

    <NoteSlide title="of 後面用 whom" mark="which">
      <NoteFix
        wrong="There were forty guests, most of who were family."
        right="There were forty guests, most of whom were family."
        fix="whom"
      />
    </NoteSlide>

    <NoteSlide title="of 後面不用 that" mark="which">
      <NoteFix
        wrong="She wrote five books, two of that were bestsellers."
        right="She wrote five books, two of which were bestsellers."
        fix="which"
      />
    </NoteSlide>

    <NoteSlide title="前面加逗號" mark="factors,">
      <NoteFix
        wrong="We visited several temples many of which were very old."
        right="We visited several temples, many of which were very old."
        fix="temples,"
      />
    </NoteSlide>

    <NoteSlide title="兩個句子用 them">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I have many friends.', kind: 'dim' },
          { t: 'Some of them', role: '新的句子', kind: 'key' },
          { t: 'live abroad.', kind: 'dim' },
        ]"
      />
      <p class="translation">我有很多朋友。其中有些住在國外。</p>
    </NoteSlide>

    <NoteSlide title="名詞 + of which">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'He bought a house,', kind: 'dim' },
          { t: 'the roof of which', role: '房子的屋頂', kind: 'key' },
          { t: 'needed repairs.', kind: 'dim' },
        ]"
      />
      <p class="translation">他買了一棟房子，屋頂需要修理。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
