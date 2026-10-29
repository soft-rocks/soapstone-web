<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-use-background-events, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + was / were + -ing + when + 主詞 + 過去式">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'It', role: '主詞' },
          { t: 'was', kind: 'key', ring: true },
          { t: 'raining', role: '-ing' },
          { t: 'when', kind: 'key', ring: true },
          { t: 'I', role: '主詞' },
          { t: 'arrived.', role: '過去式' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="過去進行式、過去式、when / while">
      <div class="rows is-labeled">
        <div>
          <span class="term">過去進行式</span>
          <span>背景，正在進行的事。</span>
        </div>
        <div>
          <span class="term">過去式</span>
          <span>主要的事，在背景中發生。</span>
        </div>
        <div>
          <span class="term">when / while</span>
          <span>連接兩件事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="用在故事的開頭">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="The sun was shining and the birds were singing."
              :marks="[]"
            /><span class="translation">太陽照著，鳥在唱歌。</span></span
          >
        </div>
      </div>
      <p class="remark">故事常用過去進行式說開頭的背景。</p>
    </NoteSlide>
    <NoteSlide title="was 後面的動詞要加 -ing" mark="was">
      <NoteFix
        wrong="It was rain when I arrived."
        right="It was raining when I arrived."
        :fix="['raining']"
      />
    </NoteSlide>
    <NoteSlide title="突然發生的事用過去式">
      <NoteFix
        wrong="I was watching TV when the phone was ringing."
        right="I was watching TV when the phone rang."
        :fix="['rang.']"
      />
    </NoteSlide>
    <NoteSlide title="-ing 前面要有 was 或 were" mark="was">
      <NoteFix
        wrong="While I cooking, the lights went out."
        right="While I was cooking, the lights went out."
        :fix="['was']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
