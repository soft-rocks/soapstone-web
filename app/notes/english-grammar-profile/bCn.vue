<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-with-of-object-pronoun-961, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="each + of + 受格代名詞" mark="each of them">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Please make sure', kind: 'dim' },
          { t: 'each', role: '每一個', kind: 'key' },
          { t: 'of', role: '介系詞' },
          { t: 'them', role: '受格', kind: 'key' },
          { t: 'has …', kind: 'dim' },
        ]"
      />
      <p class="translation">請確認他們每個人都有……</p>
    </NoteSlide>

    <NoteSlide title="some、a few、any、each" mark="each of">
      <div class="rows is-labeled">
        <div>
          <span class="term">some of</span>
          <span
            ><NoteMark sentence="I'll send you some of them." :marks="['some of them.']" /><span
              class="translation"
              >我會寄幾張給你。</span
            ></span
          >
        </div>
        <div>
          <span class="term">a few of</span>
          <span
            ><NoteMark
              sentence="Only a few of us stayed until the end."
              :marks="['a few of us']"
            /><span class="translation">我們只有幾個人待到最後。</span></span
          >
        </div>
        <div>
          <span class="term">any of</span>
          <span
            ><NoteMark sentence="Do any of you know the answer?" :marks="['any of you']" /><span
              class="translation"
              >你們有誰知道答案嗎？</span
            ></span
          >
        </div>
        <div>
          <span class="term">each of</span>
          <span
            ><NoteMark sentence="Each of us has a different job." :marks="['Each of us']" /><span
              class="translation"
              >我們每個人的工作都不一樣。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="動詞的單複數" mark="has">
      <div class="rows is-labeled">
        <div>
          <span class="term">some of</span>
          <span
            ><NoteMark sentence="Some of them live in the city." :marks="['live']" /><span
              class="translation"
              >他們有些人住在城裡。</span
            ></span
          >
        </div>
        <div>
          <span class="term">each of</span>
          <span
            ><NoteMark sentence="Each of them gets a prize." :marks="['gets']" /><span
              class="translation"
              >他們每個人都得到一個獎品。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="of 後面接受格" mark="them">
      <NoteFix
        wrong="Some of we went to the beach."
        right="Some of us went to the beach."
        fix="us"
      />
    </NoteSlide>

    <NoteSlide title="each of 後面用單數動詞" mark="has">
      <NoteFix
        wrong="Each of them have their own room."
        right="Each of them has their own room."
        fix="has"
      />
    </NoteSlide>

    <NoteSlide title="代名詞前面加 of" mark="of">
      <NoteFix wrong="Did any you see the match?" right="Did any of you see the match?" fix="of" />
    </NoteSlide>

    <NoteSlide title="some + 名詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Some', kind: 'key' },
          { t: 'people', role: '名詞，不加 of' },
          { t: 'live in the city.', kind: 'dim' },
        ]"
      />
      <p class="translation">有些人住在城裡。</p>
    </NoteSlide>

    <NoteSlide title="few of：很少">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Few of them', role: '很少', kind: 'key' },
          { t: 'came to the party.', kind: 'dim' },
        ]"
      />
      <p class="translation">他們很少人來參加派對。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
