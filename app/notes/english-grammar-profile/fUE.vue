<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adverbs-form-degree-modifying-adverbs-124, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words
// of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="程度副詞放在被修飾的副詞前面">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'The mobile market', role: '主詞', kind: 'dim' },
          { t: 'is growing', role: '動詞', kind: 'dim' },
          { t: 'incredibly', role: '程度副詞', kind: 'key' },
          { t: 'fast', role: '情狀副詞' },
          { t: 'in Britain.', role: '地點', kind: 'dim' },
        ]"
      />
      <p class="translation">英國的手機市場成長得快得驚人。</p>
    </NoteSlide>

    <NoteSlide title="enough 放在被修飾的副詞後面">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'You\'re not speaking', role: '主詞 + 動詞', kind: 'dim' },
          { t: 'loudly', role: '情狀副詞' },
          { t: 'enough.', role: '程度副詞', kind: 'key' },
        ]"
      />
      <p class="translation">你說話不夠大聲。</p>
    </NoteSlide>

    <NoteSlide title="各個程度副詞的意思" mark="incredibly">
      <div class="rows is-labeled">
        <div>
          <span class="term">incredibly、remarkably、extraordinarily</span>
          <span>非常，程度高得讓人意外</span>
        </div>
        <div>
          <span class="term">surprisingly、unusually</span>
          <span>出乎意料地，比平常更</span>
        </div>
        <div>
          <span class="term">quite</span>
          <span>相當</span>
        </div>
        <div>
          <span class="term">reasonably、fairly</span>
          <span>還算，程度中等</span>
        </div>
        <div>
          <span class="term">relatively</span>
          <span>和別的比起來還算</span>
        </div>
        <div>
          <span class="term">almost、nearly、virtually</span>
          <span>幾乎，差一點就到全部</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="被修飾的副詞可以是情狀、頻率、時間副詞" mark="fast">
      <div class="rows is-labeled">
        <div>
          <span class="term">情狀副詞</span>
          <span
            ><NoteMark
              sentence="Our fund-raising day went reasonably well."
              :marks="['reasonably well.']"
            /><span class="translation">我們的募款日辦得還算順利。</span></span
          >
        </div>
        <div>
          <span class="term">頻率副詞</span>
          <span
            ><NoteMark
              sentence="We eat out fairly often these days."
              :marks="['fairly often']"
            /><span class="translation">我們最近滿常外食的。</span></span
          >
        </div>
        <div>
          <span class="term">時間副詞</span>
          <span
            ><NoteMark
              sentence="She arrived unusually early this morning."
              :marks="['unusually early']"
            /><span class="translation">她今天早上比平常早到。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="表示全部的副詞前面用 almost、nearly、virtually">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'The attitude of young people', role: '主詞', kind: 'dim' },
          { t: 'has', role: '助動詞', kind: 'dim' },
          { t: 'almost', role: '程度副詞', kind: 'key' },
          { t: 'completely', role: '表示全部的副詞' },
          { t: 'changed.', role: '動詞', kind: 'dim' },
        ]"
      />
      <p class="translation">年輕人的態度幾乎完全變了。</p>
    </NoteSlide>

    <NoteSlide title="修飾副詞的字也要用副詞" mark="incredibly fast">
      <NoteFix
        wrong="The market is growing incredible fast."
        right="The market is growing incredibly fast."
        fix="incredibly fast."
      />
    </NoteSlide>

    <NoteSlide title="修飾動詞用 well，不用 good">
      <NoteFix
        wrong="The day went reasonably good."
        right="The day went reasonably well."
        fix="reasonably well."
      />
    </NoteSlide>

    <NoteSlide title="completely 前面不加 very">
      <NoteFix
        wrong="The town has very completely changed."
        right="The town has almost completely changed."
        fix="almost completely"
      />
    </NoteSlide>

    <NoteSlide title="enough 放在副詞後面">
      <NoteFix
        wrong="She didn't drive enough carefully."
        right="She didn't drive carefully enough."
        fix="carefully enough."
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
