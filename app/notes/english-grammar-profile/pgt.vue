<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adverbs-use-distancing, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="apparently 放在一般動詞前面，表示寫的人不保證">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'The author of the letter', role: '主詞', kind: 'dim' },
          { t: 'apparently', role: '保留態度副詞', kind: 'key' },
          { t: 'has', role: '動詞' },
          { t: 'no experience of being a parent in our times.', role: '受詞' },
        ]"
      />
      <p class="translation">寫這封信的人看來不知道在我們這個時代當父母是什麼樣子。</p>
    </NoteSlide>

    <NoteSlide title="保留態度副詞也可以放在 be 後面，或用逗號插入" mark="apparently">
      <div class="rows is-labeled">
        <div>
          <span class="term">be 後面</span>
          <span
            ><NoteMark
              sentence="The hotel is supposedly the best in town."
              :marks="['is supposedly']"
            /><span class="translation">據說那家飯店是城裡最好的。</span></span
          >
        </div>
        <div>
          <span class="term">用逗號插入</span>
          <span
            ><NoteMark
              sentence="His uncle, apparently, was a famous singer."
              :marks="['apparently']"
            /><span class="translation">他叔叔聽說是一位有名的歌手。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="資訊的來源不同，用不同的副詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">apparently</span>
          <span>看來，聽說</span>
        </div>
        <div>
          <span class="term">supposedly</span>
          <span>據說，寫的人常懷疑</span>
        </div>
        <div>
          <span class="term">allegedly</span>
          <span>據稱，常用在還沒證實的違法行為</span>
        </div>
        <div>
          <span class="term">reportedly</span>
          <span>據報導</span>
        </div>
        <div>
          <span class="term">seemingly</span>
          <span>表面上看起來</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="保留態度副詞不放在動詞和受詞中間" mark="apparently has">
      <NoteFix
        wrong="The company sold allegedly the data."
        right="The company allegedly sold the data."
        fix="allegedly sold"
      />
    </NoteSlide>

    <NoteSlide title="reportedly 後面不接 that">
      <NoteFix
        wrong="Reportedly that the minister will resign."
        right="The minister will reportedly resign."
        fix="will reportedly resign"
      />
    </NoteSlide>

    <NoteSlide title="allegedly 不和表示確定的副詞一起用">
      <NoteFix
        wrong="He definitely allegedly stole the car."
        right="He allegedly stole the car."
        fix="allegedly"
      />
    </NoteSlide>

    <NoteSlide title="修飾動詞用 allegedly，不用 alleged">
      <NoteFix
        wrong="The driver alleged ran a red light."
        right="The driver allegedly ran a red light."
        fix="allegedly"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
