<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adjectives-form-use-degree-adjectives-before-nouns-56, as slides, in the order of content.md.
// One point per slide: the title names it, the diagram shows it, and `mark` circles the
// matching words of the note's sentence. Keep the parts of one sentence on one line: Vue drops
// the whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="the very + 名詞，意思是正是、最" mark="the very center">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'We sat in', kind: 'dim' },
          { t: 'the', role: 'the' },
          { t: 'very', role: '形容詞', kind: 'key', ring: true },
          { t: 'front row.', role: '名詞', kind: 'key' },
        ]"
      />
      <p class="translation">我們坐在最前面那一排。</p>
    </NoteSlide>

    <NoteSlide title="major、sheer、utter、pure 加強名詞的語氣" mark="very center">
      <div class="rows is-labeled">
        <div>
          <span class="term">major（主要的、重大的）</span>
          <span
            ><NoteMark
              sentence="Sorry we're late. There was a major accident on the highway."
              :marks="['major accident']"
            /><span class="translation">抱歉我們遲到了。高速公路上發生了重大車禍。</span></span
          >
        </div>
        <div>
          <span class="term">sheer（純粹的）</span>
          <span
            ><NoteMark
              sentence="The other team was much better than us. We won by sheer luck."
              :marks="['sheer luck']"
            /><span class="translation">另一隊比我們強多了。我們純粹是靠運氣贏的。</span></span
          >
        </div>
        <div>
          <span class="term">pure（完全的）</span>
          <span
            ><NoteMark
              sentence="My new business partner and I sat next to each other on a train. I met her by pure chance."
              :marks="['pure chance']"
            /><span class="translation"
              >我的新事業夥伴和我在火車上坐在隔壁。我跟她完全是偶然遇見的。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="a huge fan、a big fan 表示非常喜歡" mark="very">
      <NoteMark
        sentence="Can I get his autograph? I'm a huge fan of his music."
        :marks="['huge fan']"
      />
      <p class="translation">我可以請他簽名嗎？我超喜歡他的音樂。</p>
    </NoteSlide>

    <NoteSlide title="very 當形容詞時，前面要加 the" mark="the very">
      <NoteFix
        wrong="We met at very beginning of the course."
        right="We met at the very beginning of the course."
        fix="the very"
      />
    </NoteSlide>

    <NoteSlide title="修飾名詞要用形容詞" mark="very center">
      <NoteFix wrong="It was sheerly luck." right="It was sheer luck." fix="sheer" />
    </NoteSlide>

    <NoteSlide title="very 不放在 a 後面表示很" mark="very">
      <NoteFix
        wrong="He is a very fan of the band."
        right="He is a huge fan of the band."
        fix="huge"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
