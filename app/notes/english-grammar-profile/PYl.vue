<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adverbs-form-degree-modifying-determiners, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words
// of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="程度副詞放在限定詞前面，限定詞可以接 of 加代名詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'There are probably', role: 'There + be', kind: 'dim' },
          { t: 'very', role: '程度副詞', kind: 'key' },
          { t: 'few', role: '限定詞' },
          { t: 'of us', role: 'of + 代名詞' },
          { t: 'who have never been to a zoo.', role: '關係子句', kind: 'dim' },
        ]"
      />
      <p class="translation">我們之中大概很少人沒去過動物園。</p>
    </NoteSlide>

    <NoteSlide title="very、too、so 修飾 few、little、many、much" mark="very few">
      <div class="rows is-labeled">
        <div>
          <span class="term">可數名詞</span>
          <span
            ><NoteMark
              sentence="There are too many cars in the city centre."
              :marks="['too many cars']"
            /><span class="translation">市中心的車太多了。</span></span
          >
        </div>
        <div>
          <span class="term">不可數名詞</span>
          <span
            ><NoteMark
              sentence="We've got very little bread left."
              :marks="['very little bread']"
            /><span class="translation">我們的麵包剩很少了。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="almost、nearly 修飾 all、every">
      <div class="rows is-labeled">
        <div>
          <span class="term">all</span>
          <span
            ><NoteMark
              sentence="I can work at home almost all the time."
              :marks="['almost all']"
            /><span class="translation">我幾乎一直都可以在家工作。</span></span
          >
        </div>
        <div>
          <span class="term">every</span>
          <span
            ><NoteMark
              sentence="Nearly every room in the hotel has a sea view."
              :marks="['Nearly every room']"
            /><span class="translation">飯店裡幾乎每間房都看得到海。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="quite 修飾 a few、a lot of">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Quite', role: '程度副詞', kind: 'key' },
          { t: 'a few', role: '限定詞' },
          { t: 'people', role: '名詞' },
          { t: 'complained about the food.', role: '動詞 + 其餘部分', kind: 'dim' },
        ]"
      />
      <p class="translation">有不少人抱怨那些菜。</p>
    </NoteSlide>

    <NoteSlide title="不可數名詞前面用 little，不用 few" mark="very few">
      <NoteFix wrong="We have very few time." right="We have very little time." fix="very little" />
    </NoteSlide>

    <NoteSlide title="almost 直接放在 all 前面，the 放在 all 後面">
      <NoteFix
        wrong="Almost the all students passed."
        right="Almost all the students passed."
        fix="Almost all the"
      />
    </NoteSlide>

    <NoteSlide title="every 後面接單數名詞">
      <NoteFix
        wrong="Nearly every houses has a garden."
        right="Nearly every house has a garden."
        fix="every house"
      />
    </NoteSlide>

    <NoteSlide title="修飾 a lot of 用 quite，不用 very">
      <NoteFix
        wrong="There were very a lot of cars."
        right="There were quite a lot of cars."
        fix="quite a lot of"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
