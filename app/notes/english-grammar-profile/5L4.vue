<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// nouns-form-use-wh-cleft-focus, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="What 子句當主詞，be 後面放重點">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'What companies care about', role: 'What 子句' },
          { t: 'is', role: 'be' },
          { t: 'money.', role: '重點', kind: 'key' },
        ]"
      />
      <p class="translation">企業在乎的是錢。</p>
    </NoteSlide>

    <NoteSlide title="分裂句把重點移到句尾" mark="money.">
      <div class="rows is-labeled">
        <div>
          <span class="term">一般的句子</span>
          <span
            ><NoteMark sentence="My son wants a bike." :marks="[]" /><span class="translation"
              >我兒子想要一台腳踏車。</span
            ></span
          >
        </div>
        <div>
          <span class="term">分裂句</span>
          <span
            ><NoteMark sentence="What my son wants is a bike." :marks="['a bike']" /><span
              class="translation"
              >我兒子想要的是一台腳踏車。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="be 後面可以接名詞片語、不定詞、原形動詞或 that 子句" mark="money.">
      <div class="rows is-labeled">
        <div>
          <span class="term">名詞片語</span>
          <span
            ><NoteMark sentence="What I need is a long holiday." :marks="['a long holiday']" /><span
              class="translation"
              >我需要的是一個長假。</span
            ></span
          >
        </div>
        <div>
          <span class="term">to + 原形動詞</span>
          <span
            ><NoteMark
              sentence="What tourists want is to see the typical sights."
              :marks="['to see']"
            /><span class="translation">遊客想要的是看到最有代表性的景點。</span></span
          >
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span
            ><NoteMark sentence="What I did was call the police." :marks="['call']" /><span
              class="translation"
              >我做的是打電話報警。</span
            ></span
          >
        </div>
        <div>
          <span class="term">that 子句</span>
          <span
            ><NoteMark
              sentence="What worries me is that nobody called."
              :marks="['that nobody called']"
            /><span class="translation">讓我擔心的是沒有人打電話來。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="be 的單複數可以跟著重點，時態跟著 What 子句" mark="is">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'What everyone loved', role: 'What 子句' },
          { t: 'were', role: '複數', kind: 'key' },
          { t: 'the special effects.', role: '複數名詞' },
        ]"
      />
      <p class="translation">大家喜歡的是特效。</p>
      <p class="remark">What 子句用過去式，<code>be</code> 通常也用過去式。</p>
    </NoteSlide>

    <NoteSlide title="What 已經是受詞，子句裡不再加 it" mark="What">
      <NoteFix wrong="What I need it is a coffee." right="What I need is a coffee." fix="need is" />
    </NoteSlide>

    <NoteSlide title="分裂句的主詞用 What 開頭" mark="What">
      <NoteFix
        wrong="That I love about summer is the long evenings."
        right="What I love about summer is the long evenings."
        fix="What"
      />
    </NoteSlide>

    <NoteSlide title="What 子句後面要有 be" mark="is">
      <NoteFix wrong="What I want a new phone." right="What I want is a new phone." fix="is" />
    </NoteSlide>

    <NoteSlide title="What 子句不是問句，不加 do" mark="What companies care about">
      <NoteFix
        wrong="What do companies care about is money."
        right="What companies care about is money."
        fix="companies care"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
