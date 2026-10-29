<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// nouns-form-ing-forms-abstract-nouns, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="Teaching 指教書這個工作，是抽象名詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Teaching', role: '動詞-ing（抽象名詞）', kind: 'key' },
          { t: 'is', role: '單數動詞' },
          { t: 'terribly challenging and demanding.', kind: 'dim' },
        ]"
      />
      <p class="translation">教書非常有挑戰性，也非常吃力。</p>
    </NoteSlide>

    <NoteSlide title="動詞-&#x2060;ing 可以指行業、學問或社會活動" mark="Teaching">
      <div class="rows is-labeled">
        <div>
          <span class="term">行業和工作</span>
          <span>teaching, nursing, banking, advertising</span>
        </div>
        <div>
          <span class="term">學習和成長</span>
          <span>learning, training, parenting</span>
        </div>
        <div>
          <span class="term">生活和社會</span>
          <span>housing, shopping, spending, funding</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="動詞-&#x2060;ing 抽象名詞可以接形容詞、the … of 和介系詞" mark="Teaching">
      <div class="rows is-labeled">
        <div>
          <span class="term">形容詞 + 動詞-&#x2060;ing</span>
          <span
            ><NoteMark
              sentence="Online shopping has changed the way we live."
              :marks="['Online shopping']"
            /><span class="translation">網路購物改變了我們的生活方式。</span></span
          >
        </div>
        <div>
          <span class="term">the … of</span>
          <span
            ><NoteMark
              sentence="The teaching of languages starts at primary school."
              :marks="['The teaching of']"
            /><span class="translation">語言教學從小學就開始。</span></span
          >
        </div>
        <div>
          <span class="term">介系詞 + 動詞-&#x2060;ing</span>
          <span
            ><NoteMark sentence="She wants a career in nursing." :marks="['in nursing']" /><span
              class="translation"
              >她想從事護理工作。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="teaching 當抽象名詞時不加 a" mark="Teaching">
      <NoteFix
        wrong="She has a teaching at a primary school."
        right="She teaches at a primary school."
        fix="teaches"
      />
    </NoteSlide>

    <NoteSlide title="說行業用動詞-&#x2060;ing，不用說人的名詞" mark="Teaching">
      <NoteFix
        wrong="My brother works in the advertiser."
        right="My brother works in advertising."
        fix="advertising"
      />
    </NoteSlide>

    <NoteSlide title="the teaching 後面接名詞時要有 of" mark="Teaching">
      <NoteFix
        wrong="The teaching English is changing."
        right="The teaching of English is changing."
        fix="of"
      />
    </NoteSlide>

    <NoteSlide title="動詞-&#x2060;ing 抽象名詞不可數，動詞用單數" mark="is">
      <NoteFix
        wrong="Advertising are very important for a new product."
        right="Advertising is very important for a new product."
        fix="is"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
