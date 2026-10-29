<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// conjunctions-form-plus-with-nouns, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="名詞 + plus + 名詞" mark="plus bills.">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'At the moment, I pay', role: '主詞 + 動詞', kind: 'dim' },
          { t: '550 pounds monthly', role: '主要的價錢' },
          { t: 'plus', role: '加上', kind: 'key' },
          { t: 'bills.', role: '另外的費用' },
        ]"
      />
      <p class="translation">我目前每個月付 550 英鎊，另外還要付水電費。</p>
    </NoteSlide>

    <NoteSlide title="plus 的用法" mark="plus">
      <div class="rows is-labeled">
        <div>
          <span class="term">價錢</span>
          <span
            ><NoteMark
              sentence="It cost me £2,500 plus the taxes."
              :marks="['plus the taxes.']"
            /><span class="translation">它花了我 2,500 英鎊，另外還要加稅。</span></span
          >
        </div>
        <div>
          <span class="term">人數</span>
          <span
            ><NoteMark
              sentence="We are six people plus my two cats."
              :marks="['plus my two cats.']"
            /><span class="translation">我們有六個人，另外還有我的兩隻貓。</span></span
          >
        </div>
        <div>
          <span class="term">算術</span>
          <span
            ><NoteMark sentence="Two plus three is five." :marks="['plus']" /><span
              class="translation"
              >二加三等於五。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="plus 前面不加 and" mark="plus">
      <NoteFix
        wrong="The ticket costs 20 euros and plus a booking fee."
        right="The ticket costs 20 euros plus a booking fee."
        fix="euros plus"
      />
    </NoteSlide>

    <NoteSlide title="plus 後面接名詞" mark="plus bills.">
      <NoteFix
        wrong="I pay 600 pounds a month plus pay the bills."
        right="I pay 600 pounds a month plus the bills."
        fix="plus the bills."
      />
    </NoteSlide>

    <NoteSlide title="連接形容詞用 and">
      <NoteFix
        wrong="My new room is big plus bright."
        right="My new room is big and bright."
        fix="and"
      />
    </NoteSlide>

    <NoteSlide title="主要的價錢放在 plus 前面" mark="550 pounds monthly plus">
      <NoteFix
        wrong="The hotel costs breakfast plus 90 euros a night."
        right="The hotel costs 90 euros a night plus breakfast."
        fix="plus breakfast."
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
