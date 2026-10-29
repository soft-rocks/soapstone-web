<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adjectives-form-use-the-best-with-noun-and, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="現在完成式的子句說到目前為止的經驗" mark="I have ever had">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'This is', kind: 'dim' },
          { t: 'the best pizza', role: 'the best + 名詞', kind: 'key' },
          { t: 'I\'ve ever eaten.', role: '主詞 + have ever + 過去分詞', kind: 'key', ring: true },
        ]"
      />
      <p class="translation">這是我吃過最好吃的披薩。</p>
      <p class="remark">名詞和子句中間省略了 <code>that</code>。</p>
    </NoteSlide>

    <NoteSlide title="其他最高級也可以用" mark="the best">
      <div class="rows is-labeled">
        <div>
          <span class="term">the worst</span>
          <span
            ><NoteMark
              sentence="We walked out after twenty minutes. It was the worst movie we've ever seen."
              :marks="['the worst movie']"
            /><span class="translation">我們二十分鐘就離場了，那是我們看過最爛的電影。</span></span
          >
        </div>
        <div>
          <span class="term">the most + 形容詞</span>
          <span
            ><NoteMark
              sentence="Santorini is the most beautiful island I've ever visited."
              :marks="['the most beautiful island']"
            /><span class="translation">聖托里尼是我去過最美的島。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="到目前為止的經驗用現在完成式" mark="have ever had">
      <NoteFix
        wrong="It's the best book I ever read."
        right="It's the best book I've ever read."
        fix="I've ever read"
      />
    </NoteSlide>

    <NoteSlide title="hear 的過去分詞是 heard" mark="had">
      <NoteFix
        wrong="That's the best song I've ever heared."
        right="That's the best song I've ever heard."
        fix="heard"
      />
    </NoteSlide>

    <NoteSlide title="名詞就是受詞，子句裡不再加 it" mark="I have ever had">
      <NoteFix
        wrong="This is the best cake I've ever eaten it."
        right="This is the best cake I've ever eaten."
        fix="eaten"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
