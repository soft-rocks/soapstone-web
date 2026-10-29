<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-use-auxiliary-do-for-emphasis, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="do 放在動詞前面，表示真的、確實" mark="do miss">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'We', role: '主詞' },
          { t: 'do', role: '加強語氣', kind: 'key', ring: true },
          { t: 'enjoy', role: '原形動詞', kind: 'key' },
          { t: 'living by the sea.', kind: 'dim' },
        ]"
      />
      <p class="translation">我們真的很喜歡住在海邊。</p>
    </NoteSlide>

    <NoteSlide title="he、she、it 用 does，過去用 did" mark="do">
      <div class="rows is-labeled">
        <div>
          <span class="term">does</span>
          <span
            ><NoteMark
              sentence="Who made this? This soup does taste good."
              :marks="['does taste']"
            /><span class="translation">這是誰做的？這湯真的很好喝。</span></span
          >
        </div>
        <div>
          <span class="term">did</span>
          <span
            ><NoteMark
              sentence="I did call you, but you didn't answer."
              :marks="['did call']"
            /><span class="translation">我真的有打給你，可是你沒接。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="用來回應別人的懷疑" mark="do miss">
      <NoteMark
        sentence="A: You didn't study. B: I did study, but the test was hard."
        :marks="['did study']"
      />
      <p class="translation">A：你沒讀書。B：我真的有讀，只是考試很難。</p>
    </NoteSlide>

    <NoteSlide title="does 後面用原形動詞" mark="miss">
      <NoteFix wrong="She does likes chocolate." right="She does like chocolate." fix="like" />
    </NoteSlide>

    <NoteSlide title="說過去的事用 did" mark="do">
      <NoteFix wrong="You do say that yesterday." right="You did say that yesterday." fix="did" />
    </NoteSlide>

    <NoteSlide title="主詞是 he，用 does" mark="do">
      <NoteFix wrong="He do work hard." right="He does work hard." fix="does" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
