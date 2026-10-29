<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// and-i-or-and-me-928, as slides, in the order of content.md. One point per slide: the title
// names it, the diagram shows it, and `mark` circles the matching words of the note's sentence.
// Keep the parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主格代名詞當主詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'He', role: '主格代名詞', kind: 'key' },
          { t: 'prefers', role: '動詞' },
          { t: 'chess.', role: '受詞', kind: 'dim' },
        ]"
      />
      <p class="translation">他比較喜歡下西洋棋。</p>
    </NoteSlide>

    <NoteSlide title="代名詞指的人或東西" mark="He">
      <div class="rows is-labeled">
        <div>
          <span class="term">he</span>
          <span
            ><NoteMark sentence="My brother is twelve. He prefers chess." :marks="['He']" /><span
              class="translation"
              >我弟弟十二歲。他比較喜歡下西洋棋。</span
            ></span
          >
        </div>
        <div>
          <span class="term">she</span>
          <span
            ><NoteMark
              sentence="My friend's name is Julissa. She is from Ecuador."
              :marks="['She']"
            /><span class="translation">我朋友叫 Julissa。她來自厄瓜多。</span></span
          >
        </div>
        <div>
          <span class="term">it</span>
          <span
            ><NoteMark sentence="I like my home. It has a big garden." :marks="['It']" /><span
              class="translation"
              >我喜歡我家。它有一個大花園。</span
            ></span
          >
        </div>
        <div>
          <span class="term">they</span>
          <span
            ><NoteMark
              sentence="I like my neighbours. They're nice people."
              :marks="['They\'re']"
            /><span class="translation">我喜歡我的鄰居。他們人很好。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="主詞用主格" mark="He">
      <NoteFix wrong="Him prefers chess." right="He prefers chess." fix="He" />
    </NoteSlide>

    <NoteSlide title="主詞只寫一次" mark="He">
      <NoteFix
        wrong="My friend she lives near my home."
        right="My friend lives near my home."
        fix="My friend lives"
      />
    </NoteSlide>

    <NoteSlide title="子句要有主詞" mark="He">
      <NoteFix
        wrong="I like my home because is beautiful."
        right="I like my home because it is beautiful."
        fix="it is"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
