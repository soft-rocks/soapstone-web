<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adverbs-use-degree-with-verbs, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="very much 放在受詞後面" mark="very much">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'I', role: '主詞', kind: 'dim' },
          { t: 'like', role: '動詞' },
          { t: 'my garden', role: '受詞' },
          { t: 'very much.', role: '程度副詞', kind: 'key' },
        ]"
      />
      <p class="translation">我很喜歡我的花園。</p>
    </NoteSlide>

    <NoteSlide title="really 放在動詞前面">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'I', role: '主詞', kind: 'dim' },
          { t: 'really', role: '程度副詞', kind: 'key' },
          { t: 'love', role: '動詞' },
          { t: 'my new job.', role: '受詞' },
        ]"
      />
      <p class="translation">我真的很愛我的新工作。</p>
      <p class="remark">
        <code>hate</code> 常和 <code>really</code> 一起用，很少接 <code>very much</code>。
      </p>
    </NoteSlide>

    <NoteSlide title="否定句和疑問句裡，really 放在動詞前面，very much 放在句尾" mark="very much">
      <div class="rows is-labeled">
        <div>
          <span class="term">don't really</span>
          <span
            ><NoteMark sentence="I don't really like spicy food." :marks="['don\'t really']" /><span
              class="translation"
              >我不太喜歡吃辣。</span
            ></span
          >
        </div>
        <div>
          <span class="term">very much</span>
          <span
            ><NoteMark sentence="I don't like rainy days very much." :marks="['very much']" /><span
              class="translation"
              >我不太喜歡下雨天。</span
            ></span
          >
        </div>
        <div>
          <span class="term">疑問句</span>
          <span
            ><NoteMark sentence="Do you really like it?" :marks="['really']" /><span
              class="translation"
              >你真的喜歡嗎？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="very much 不放在動詞和受詞中間" mark="very much">
      <NoteFix
        wrong="My dad likes very much old jazz records."
        right="My dad likes old jazz records very much."
        fix="very much"
      />
    </NoteSlide>

    <NoteSlide title="very 不能單獨修飾動詞" mark="very">
      <NoteFix
        wrong="The kids very enjoyed the puppet show."
        right="The kids really enjoyed the puppet show."
        fix="really"
      />
    </NoteSlide>

    <NoteSlide title="加強喜好動詞時，really 放在動詞前面">
      <NoteFix wrong="She loves her cat really." right="She really loves her cat." fix="really" />
    </NoteSlide>

    <NoteSlide title="放在句尾修飾動詞時，very 後面要有 much" mark="very much">
      <NoteFix
        wrong="My grandmother likes her new flat very."
        right="My grandmother likes her new flat very much."
        fix="much"
      />
    </NoteSlide>

    <NoteSlide title="really 放在 don't 前面語氣比較強，放在後面語氣比較弱">
      <NoteFork
        stem="I"
        :branches="[
          {
            head: 'don\'t really',
            rest: 'like horror films',
            meaning: '語氣比較弱',
            zh: '我不太喜歡恐怖片。',
          },
          {
            head: 'really don\'t',
            rest: 'like horror films',
            meaning: '語氣比較強',
            zh: '我真的很不喜歡恐怖片。',
          },
        ]"
      />
    </NoteSlide>

    <NoteSlide title="a lot 和 very much 的位置相同" mark="very much">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'We', role: '主詞', kind: 'dim' },
          { t: 'like', role: '動詞' },
          { t: 'the Thai place on Hill Street', role: '受詞' },
          { t: 'a lot.', role: '程度副詞', kind: 'key' },
        ]"
      />
      <p class="translation">我們很喜歡 Hill 街上那家泰國餐廳。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
