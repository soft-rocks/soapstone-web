<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// determiners-use-generic-their, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="單數主詞用 their">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Everyone', role: '單數主詞', kind: 'key' },
          { t: 'has', role: '動詞' },
          { t: 'their', role: 'their', kind: 'key' },
          { t: 'own opinion.', role: '名詞' },
        ]"
      />
      <p class="translation">每個人都有自己的看法。</p>
    </NoteSlide>

    <NoteSlide title="不知道是男是女，就用 their" mark="their">
      <div class="rows is-labeled">
        <div>
          <span class="term">his or her</span>
          <span
            ><NoteMark
              sentence="Every student must bring his or her book."
              :marks="['his or her']"
            /><span class="translation">每個學生都要帶自己的書。（正式，比較長）</span></span
          >
        </div>
        <div>
          <span class="term">their</span>
          <span
            ><NoteMark sentence="Every student must bring their book." :marks="['their']" /><span
              class="translation"
              >每個學生都要帶自己的書。（常用）</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="公司和團體也用 their" mark="their">
      <div class="rows is-labeled">
        <div>
          <span class="term">公司</span>
          <span
            ><NoteMark
              sentence="IBM ordered copies which show their new product."
              :marks="['their']"
            /><span class="translation">IBM 訂了一批介紹他們新產品的影本。</span></span
          >
        </div>
        <div>
          <span class="term">球隊</span>
          <span
            ><NoteMark
              sentence="The team played their best game of the season."
              :marks="['their']"
            /><span class="translation">這支球隊打出了這一季最好的一場比賽。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="everyone 動詞用單數" mark="has">
      <NoteFix
        wrong="Everyone have their own opinion."
        right="Everyone has their own opinion."
        fix="has"
      />
    </NoteSlide>

    <NoteSlide title="所有格是 their" mark="their">
      <NoteFix
        wrong="Someone left there umbrella on the bus."
        right="Someone left their umbrella on the bus."
        fix="their"
      />
    </NoteSlide>

    <NoteSlide title="名詞前面用 their，不用 them" mark="their">
      <NoteFix
        wrong="Each student must bring them own lunch."
        right="Each student must bring their own lunch."
        fix="their"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
