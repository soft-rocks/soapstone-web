<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// questions-form-use-right-as-an-informal-tag, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="口語在直述句後面加 right，確認說得對不對">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'You asked me for some help,', role: '直述句' },
          { t: 'right?', role: '語調上揚', kind: 'key', ring: true },
        ]"
      />
      <p class="translation">你有請我幫忙，對吧？</p>
    </NoteSlide>

    <NoteSlide title="right 不用跟著直述句變化" mark="right">
      <div class="rows is-labeled">
        <div>
          <span class="term">一般的附加問句</span>
          <span
            ><NoteMark sentence="You're fourteen, aren't you?" :marks="['aren\'t you']" /><span
              class="translation"
              >你十四歲，對吧？</span
            ></span
          >
        </div>
        <div>
          <span class="term">right</span>
          <span
            ><NoteMark sentence="You're fourteen, right?" :marks="['right']" /><span
              class="translation"
              >你十四歲，對不對？</span
            ></span
          >
        </div>
      </div>
      <p class="remark"><code>right</code> 比較口語，正式的文章不用。</p>
    </NoteSlide>

    <NoteSlide title="否定的直述句後面也用 right" mark="right">
      <NoteWords
        :size="32"
        :parts="[
          { t: 'You don\'t eat meat,', role: '否定的直述句' },
          { t: 'right?', role: 'right', kind: 'key' },
        ]"
      />
      <p class="translation">你不吃肉，對吧？</p>
    </NoteSlide>

    <NoteSlide title="句尾只加 right" mark="right">
      <NoteFix
        wrong="You're coming tomorrow, is it right?"
        right="You're coming tomorrow, right?"
        fix="right"
      />
    </NoteSlide>

    <NoteSlide title="right 後面不加代名詞" mark="right">
      <NoteFix wrong="You like coffee, right you?" right="You like coffee, right?" fix="right" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
