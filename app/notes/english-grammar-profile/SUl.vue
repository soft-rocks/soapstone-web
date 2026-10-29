<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// nouns-form-use-the-thing, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="The thing 和子句先說範圍，be 後面放重點">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'The thing', role: 'The thing', kind: 'key' },
          { t: 'I enjoyed most', role: '子句' },
          { t: 'was', role: 'be' },
          { t: 'a new computer game.', role: '重點', kind: 'key' },
        ]"
      />
      <p class="translation">我最喜歡的是一款新的電腦遊戲。</p>
      <p class="remark">子句前面省略了 <code>that</code>。</p>
    </NoteSlide>

    <NoteSlide title="The thing 的句子把重點移到句尾" mark="The thing">
      <div class="rows is-labeled">
        <div>
          <span class="term">一般的句子</span>
          <span
            ><NoteMark sentence="I need a holiday." :marks="[]" /><span class="translation"
              >我需要休個假。</span
            ></span
          >
        </div>
        <div>
          <span class="term">The thing 的句子</span>
          <span
            ><NoteMark sentence="The thing I need is a holiday." :marks="['a holiday']" /><span
              class="translation"
              >我需要的是休個假。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="be 後面可以接名詞片語、that 子句或不定詞" mark="was">
      <div class="rows is-labeled">
        <div>
          <span class="term">名詞片語</span>
          <span
            ><NoteMark
              sentence="The thing I prefer is the swimming pool."
              :marks="['the swimming pool']"
            /><span class="translation">我比較喜歡的是游泳池。</span></span
          >
        </div>
        <div>
          <span class="term">that 子句</span>
          <span
            ><NoteMark
              sentence="The thing is that I don't have any money."
              :marks="['that I don\'t have any money']"
            /><span class="translation">問題是我沒有錢。</span></span
          >
        </div>
        <div>
          <span class="term">to + 原形動詞</span>
          <span
            ><NoteMark
              sentence="The thing to do is ask the teacher."
              :marks="['ask the teacher']"
            /><span class="translation">該做的是去問老師。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="thing 前面可以加 only、best、worst、first" mark="The thing">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'The', kind: 'dim' },
          { t: 'only', role: '唯一', kind: 'key' },
          { t: 'thing I don\'t like', role: 'thing + 子句' },
          { t: 'is the food.', kind: 'dim' },
        ]"
      />
      <p class="translation">我唯一不喜歡的是食物。</p>
    </NoteSlide>

    <NoteSlide title="The thing 已經是受詞，子句裡不再加 it" mark="I enjoyed most">
      <NoteFix
        wrong="The thing I like it most is the music."
        right="The thing I like most is the music."
        fix="like most"
      />
    </NoteSlide>

    <NoteSlide title="子句後面要有 be，再接重點" mark="was">
      <NoteFix
        wrong="The thing I need a holiday."
        right="The thing I need is a holiday."
        fix="is"
      />
    </NoteSlide>

    <NoteSlide title="The thing 後面不加 what" mark="The thing">
      <NoteFix
        wrong="The thing what I hate is the traffic."
        right="The thing I hate is the traffic."
        fix="The thing I hate"
      />
    </NoteSlide>

    <NoteSlide title="主詞是 The things，be 用 are" mark="was">
      <NoteFix
        wrong="The things I miss most is my friends and my dog."
        right="The things I miss most are my friends and my dog."
        fix="are"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
