<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adverbs-form-comparative, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="程度副詞 + 比較級副詞 + than" mark="much more often than">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'You have to repair your car', role: '主詞 + 動詞 + 受詞', kind: 'dim' },
          { t: 'much', role: '程度副詞', kind: 'key' },
          { t: 'more often', role: '比較級副詞', kind: 'key' },
          { t: 'than your bicycle.', role: '比較的對象' },
        ]"
      />
      <p class="translation">汽車要修的次數比腳踏車多得多。</p>
    </NoteSlide>

    <NoteSlide title="than 後面接的成分" mark="than your bicycle">
      <div class="rows is-labeled">
        <div>
          <span class="term">名詞</span>
          <span>than your bicycle</span>
        </div>
        <div>
          <span class="term">子句</span>
          <span>than they did last year</span>
        </div>
        <div>
          <span class="term">時間副詞</span>
          <span>than before</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="比較級副詞的形式" mark="more often">
      <div class="rows is-labeled">
        <div>
          <span class="term">和形容詞同形 + -er</span>
          <span>faster、harder、earlier、later、sooner</span>
        </div>
        <div>
          <span class="term">more + -ly 副詞</span>
          <span>more quickly、more carefully、more often</span>
        </div>
        <div>
          <span class="term">不規則</span>
          <span>better、worse、further、more、less</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="說比較少用 less">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'I go to the gym', role: '主詞 + 動詞', kind: 'dim' },
          { t: 'less often', role: '比較級副詞', kind: 'key' },
          { t: 'than I used to.', role: '比較的對象' },
        ]"
      />
      <p class="translation">我去健身房的次數沒有以前多。</p>
    </NoteSlide>

    <NoteSlide title="修飾比較級副詞的程度副詞" mark="much">
      <div class="rows is-labeled">
        <div>
          <span class="term">much、far、a lot</span>
          <span>差很多</span>
        </div>
        <div>
          <span class="term">even</span>
          <span>還要，前面那個已經很高</span>
        </div>
        <div>
          <span class="term">slightly、a bit、a little</span>
          <span>差一點點</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="-ly 副詞前面加 more">
      <NoteFix
        wrong="She finished the test quicklier than me."
        right="She finished the test more quickly than me."
        fix="more quickly"
      />
    </NoteSlide>

    <NoteSlide title="well 的比較級是 better">
      <NoteFix
        wrong="My sister sings more well than I do."
        right="My sister sings better than I do."
        fix="better"
      />
    </NoteSlide>

    <NoteSlide title="接比較的對象用 than" mark="than">
      <NoteFix
        wrong="Trains run more often then buses here."
        right="Trains run more often than buses here."
        fix="than"
      />
    </NoteSlide>

    <NoteSlide title="fast 的比較級是 faster">
      <NoteFix
        wrong="Can you walk more fast? We're late."
        right="Can you walk faster? We're late."
        fix="faster"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
