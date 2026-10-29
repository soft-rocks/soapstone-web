<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adverbs-form-use-adverb-enough, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="副詞 + enough 放在句首" mark="Luckily enough,">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Luckily', role: '副詞', kind: 'key' },
          { t: 'enough,', role: 'enough', kind: 'key' },
          { t: 'we', role: '主詞' },
          { t: 'have', role: '動詞' },
          { t: 'a garden.', role: '受詞', kind: 'dim' },
        ]"
      />
      <p class="translation">幸好我們有個花園。</p>
    </NoteSlide>

    <NoteSlide title="也可以插在主詞和動詞中間" mark="Luckily enough,">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'The plan,', role: '主詞' },
          { t: 'oddly enough,', role: '副詞 + enough', kind: 'key' },
          { t: 'worked', role: '動詞' },
          { t: 'perfectly.', role: '情狀副詞', kind: 'dim' },
        ]"
      />
      <p class="translation">說也奇怪，這個計畫進行得非常順利。</p>
    </NoteSlide>

    <NoteSlide title="各個組合的意思" mark="Luckily enough,">
      <div class="rows is-labeled">
        <div>
          <span class="term">luckily enough</span>
          <span>很幸運的是</span>
        </div>
        <div>
          <span class="term">surprisingly enough</span>
          <span>出乎意料的是</span>
        </div>
        <div>
          <span class="term">sadly enough</span>
          <span>可惜的是，令人難過的是</span>
        </div>
        <div>
          <span class="term">strangely enough、oddly enough</span>
          <span>說也奇怪</span>
        </div>
        <div>
          <span class="term">funnily enough</span>
          <span>說來好笑，說來也巧</span>
        </div>
        <div>
          <span class="term">interestingly enough</span>
          <span>有意思的是</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="這裡的 enough 不是足夠">
      <div class="rows is-labeled">
        <div>
          <span class="term">加強語氣</span>
          <span
            ><NoteMark
              sentence="Surprisingly enough, he passed the test."
              :marks="['Surprisingly enough,']"
            /><span class="translation">出乎意料的是，他考試過了。</span></span
          >
        </div>
        <div>
          <span class="term">足夠</span>
          <span
            ><NoteMark
              sentence="He didn't study hard enough to pass the test."
              :marks="['hard enough']"
            /><span class="translation">他讀得不夠認真，考試沒過。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="enough 放在副詞後面" mark="Luckily enough,">
      <NoteFix
        wrong="Enough surprisingly, nobody complained."
        right="Surprisingly enough, nobody complained."
        fix="Surprisingly enough,"
      />
    </NoteSlide>

    <NoteSlide title="說出看法用副詞 funnily">
      <NoteFix
        wrong="Funny enough, I was thinking about you this morning."
        right="Funnily enough, I was thinking about you this morning."
        fix="Funnily enough,"
      />
    </NoteSlide>

    <NoteSlide title="後面直接接子句，不加 that">
      <NoteFix
        wrong="Luckily enough that we had an umbrella."
        right="Luckily enough, we had an umbrella."
        fix="Luckily enough,"
      />
    </NoteSlide>

    <NoteSlide title="前面不再加 very">
      <NoteFix
        wrong="Very sadly enough, the shop closed last year."
        right="Sadly enough, the shop closed last year."
        fix="Sadly enough,"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
