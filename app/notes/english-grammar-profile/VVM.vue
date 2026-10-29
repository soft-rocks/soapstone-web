<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adjectives-form-with-more, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="長的形容詞前面加 more" mark="more expensive">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'This sofa is', kind: 'dim' },
          { t: 'more', role: 'more', kind: 'key', ring: true },
          { t: 'comfortable', role: '形容詞', kind: 'key' },
          { t: 'than my bed.', role: 'than + 比較的對象' },
        ]"
      />
      <p class="translation">這張沙發比我的床舒服。</p>
    </NoteSlide>

    <NoteSlide title="哪些形容詞用 more" mark="more expensive">
      <div class="rows is-labeled">
        <div>
          <span class="term">三個音節以上</span>
          <span
            ><NoteMark
              sentence="Your health is more important than money."
              :marks="['more important']"
            /><span class="translation">你的健康比錢重要。</span></span
          >
        </div>
        <div>
          <span class="term">-ful、-ous、-ing、-ed</span>
          <span
            ><NoteMark
              sentence="She is more famous than her sister."
              :marks="['more famous']"
            /><span class="translation">她比她姊姊有名。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="more + 形容詞也可以放在名詞前面" mark="more expensive">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'I want a', kind: 'dim' },
          { t: 'more interesting', role: 'more + 形容詞', kind: 'key', ring: true },
          { t: 'job.', role: '名詞' },
        ]"
      />
      <p class="translation">我想要一份比較有趣的工作。</p>
    </NoteSlide>

    <NoteSlide title="長的形容詞不加 -er" mark="more expensive">
      <NoteFix
        wrong="This book is interestinger than that one."
        right="This book is more interesting than that one."
        fix="more interesting"
      />
    </NoteSlide>

    <NoteSlide title="用了 more，形容詞就不加 -er" mark="expensive">
      <NoteFix
        wrong="The test was more difficulter than I thought."
        right="The test was more difficult than I thought."
        fix="difficult"
      />
    </NoteSlide>

    <NoteSlide title="要說跟誰比，就加 than" mark="than">
      <NoteFix
        wrong="Gold is more expensive silver."
        right="Gold is more expensive than silver."
        fix="than"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
