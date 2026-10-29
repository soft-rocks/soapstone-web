<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// nouns-form-ing-forms-object, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="動詞-&#x2060;ing 當名詞，指一種活動">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I', kind: 'dim' },
          { t: 'practiced', role: '動詞' },
          { t: 'windsurfing', role: '動詞-ing（受詞）', kind: 'key' },
          { t: 'and', kind: 'dim' },
          { t: 'scuba diving.', role: '動詞-ing（受詞）', kind: 'key' },
        ]"
      />
      <p class="translation">我練習了風帆衝浪和水肺潛水。</p>
    </NoteSlide>

    <NoteSlide title="go 和說喜好、練習、開始停止的動詞常接動詞-&#x2060;ing" mark="practiced">
      <div class="rows is-labeled">
        <div>
          <span class="term">喜好</span>
          <span>like, love, enjoy, prefer, hate</span>
        </div>
        <div>
          <span class="term">練習和開始停止</span>
          <span>practice, start, stop, finish</span>
        </div>
        <div>
          <span class="term">go + 動詞-&#x2060;ing</span>
          <span>go swimming, go shopping, go skiing</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="介系詞後面的動詞用 -&#x2060;ing" mark="windsurfing">
      <div class="rows is-labeled">
        <div>
          <span class="term">like</span>
          <span
            ><NoteMark
              sentence="We did a lot of things, like swimming and going shopping."
              :marks="['like swimming']"
            /><span class="translation">我們做了很多事，像是游泳和逛街。</span></span
          >
        </div>
        <div>
          <span class="term">at</span>
          <span
            ><NoteMark sentence="She's good at drawing." :marks="['at drawing']" /><span
              class="translation"
              >她很會畫畫。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="enjoy 後面的動詞用 -&#x2060;ing" mark="windsurfing">
      <NoteFix wrong="I enjoy to read in bed." right="I enjoy reading in bed." fix="reading" />
    </NoteSlide>

    <NoteSlide title="介系詞 in 後面的動詞用 -&#x2060;ing">
      <NoteFix
        wrong="I'm interested in learn Spanish."
        right="I'm interested in learning Spanish."
        fix="learning"
      />
    </NoteSlide>

    <NoteSlide title="go 後面直接接動詞-&#x2060;ing，不加 to">
      <NoteFix
        wrong="Let's go to swimming this afternoon."
        right="Let's go swimming this afternoon."
        fix="go swimming"
      />
    </NoteSlide>

    <NoteSlide title="字尾不發音的 e 去掉再加 -&#x2060;ing">
      <NoteFix wrong="I love danceing." right="I love dancing." fix="dancing" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
