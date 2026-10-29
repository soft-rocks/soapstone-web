<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-use-the-best-that, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between
// two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="that 子句用現在完成式，說到目前為止的經驗" mark="that I have ever seen">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Moving to Tainan is', kind: 'dim' },
          { t: 'the best decision', role: 'the best + 名詞', kind: 'key' },
          { t: 'that', role: '關係代名詞', kind: 'key', ring: true },
          { t: 'I\'ve ever made.', role: '主詞 + have ever + 過去分詞' },
        ]"
      />
      <p class="translation">搬到台南是我做過最好的決定。</p>
    </NoteSlide>

    <NoteSlide title="that 當受詞時可以省略" mark="that">
      <NoteMark
        sentence="These are the best cookies my mum has ever baked."
        :marks="['cookies my mum']"
      />
      <p class="translation">這是我媽媽烤過最好吃的餅乾。</p>
      <p class="remark">省略 <code>that</code> 的說法比較口語。</p>
    </NoteSlide>

    <NoteSlide title="that 也可以當子句的主詞" mark="that">
      <NoteMark
        sentence="It's the best restaurant that has ever opened in this street."
        :marks="['that has ever opened']"
      />
      <p class="translation">那是這條街上開過最好的餐廳。</p>
    </NoteSlide>

    <NoteSlide title="have 後面接過去分詞" mark="seen">
      <NoteFix
        wrong="Grandma makes the best soup that I've ever ate."
        right="Grandma makes the best soup that I've ever eaten."
        fix="eaten"
      />
    </NoteSlide>

    <NoteSlide title="關係代名詞用 that，不用 what" mark="that">
      <NoteFix
        wrong="This is the best coffee what I've ever had in Taipei."
        right="This is the best coffee that I've ever had in Taipei."
        fix="that"
      />
    </NoteSlide>

    <NoteSlide title="that 已經是受詞，不再加 it" mark="seen">
      <NoteFix
        wrong="That's the best song that the band has ever written it."
        right="That's the best song that the band has ever written."
        fix="written"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
