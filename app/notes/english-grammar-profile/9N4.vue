<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adverbs-form-degree-modifying-comparatives, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words
// of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="程度副詞放在比較級前面，說明差多少">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'It will be', role: '主詞 + 動詞', kind: 'dim' },
          { t: 'a bit', role: '程度副詞', kind: 'key' },
          { t: 'more expensive', role: '比較級' },
          { t: 'than the bus.', role: 'than + 比較的對象', kind: 'dim' },
        ]"
      />
      <p class="translation">這會比搭公車貴一點。</p>
    </NoteSlide>

    <NoteSlide title="各個程度副詞的意思" mark="a bit">
      <div class="rows is-labeled">
        <div>
          <span class="term">slightly、a bit、a little</span>
          <span>差一點</span>
        </div>
        <div>
          <span class="term">much、far、a lot</span>
          <span>差很多</span>
        </div>
        <div>
          <span class="term">considerably、significantly</span>
          <span>差很多，用在正式的場合</span>
        </div>
        <div>
          <span class="term">so much</span>
          <span>差很多，表達說話的人的感受</span>
        </div>
        <div>
          <span class="term">even</span>
          <span>更，兩邊都有這個性質</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="even 表示兩邊都有這個性質">
      <div class="rows is-labeled">
        <div>
          <span class="term">even</span>
          <span
            ><NoteMark
              sentence="Tom is tall, but his brother is even taller."
              :marks="['even taller.']"
            /><span class="translation">Tom 很高，可是他哥哥更高。</span></span
          >
        </div>
        <div>
          <span class="term">much</span>
          <span
            ><NoteMark
              sentence="Tom is short, but his brother is much taller."
              :marks="['much taller.']"
            /><span class="translation">Tom 很矮，可是他哥哥高得多。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="程度副詞也修飾比較級副詞" mark="a bit more expensive">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I lived in Spain', role: '主詞 + 動詞', kind: 'dim' },
          { t: 'a lot', role: '程度副詞', kind: 'key' },
          { t: 'longer', role: '比較級副詞' },
          { t: 'than in England.', role: 'than + 比較的對象', kind: 'dim' },
        ]"
      />
      <p class="translation">我在西班牙住的時間比在英國長得多。</p>
    </NoteSlide>

    <NoteSlide title="比較級前面不用 very" mark="a bit">
      <NoteFix
        wrong="This flat is very cheaper than the last one."
        right="This flat is much cheaper than the last one."
        fix="much cheaper"
      />
    </NoteSlide>

    <NoteSlide title="-er 已經是比較級，不再加 more">
      <NoteFix
        wrong="The new road is much more safer."
        right="The new road is much safer."
        fix="much safer."
      />
    </NoteSlide>

    <NoteSlide title="修飾比較級用 a lot，不加 of">
      <NoteFix
        wrong="The train is a lot of faster than the bus."
        right="The train is a lot faster than the bus."
        fix="a lot faster"
      />
    </NoteSlide>

    <NoteSlide title="so 要加 much 才修飾比較級">
      <NoteFix
        wrong="I feel so better today."
        right="I feel so much better today."
        fix="so much better"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
