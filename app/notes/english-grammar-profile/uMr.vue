<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// and-i-or-and-me, as slides, in the order of content.md. One point per slide: the title names
// it, the diagram shows it, and `mark` circles the matching words of the note's sentence. Keep
// the parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="受格代名詞當動詞的受詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'you', role: '主詞' },
          { t: 'want to see', role: '動詞' },
          { t: 'me.', role: '受格代名詞', kind: 'key' },
        ]"
      />
      <p class="translation">你想見我。</p>
    </NoteSlide>

    <NoteSlide title="主格在前，受格在後" mark="me">
      <div class="rows is-labeled">
        <div>
          <span class="term">I → me</span>
          <span
            ><NoteMark sentence="I like Tom. Tom likes me." :marks="['me']" /><span
              class="translation"
              >我喜歡 Tom。Tom 喜歡我。</span
            ></span
          >
        </div>
        <div>
          <span class="term">he → him</span>
          <span
            ><NoteMark sentence="He called his mum. His mum called him." :marks="['him']" /><span
              class="translation"
              >他打電話給他媽媽。他媽媽打電話給他。</span
            ></span
          >
        </div>
        <div>
          <span class="term">she → her</span>
          <span
            ><NoteMark sentence="She knows us. We know her." :marks="['her']" /><span
              class="translation"
              >她認識我們。我們認識她。</span
            ></span
          >
        </div>
        <div>
          <span class="term">we → us</span>
          <span
            ><NoteMark sentence="We help them. They help us." :marks="['us']" /><span
              class="translation"
              >我們幫助他們。他們幫助我們。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="動詞後面用 me" mark="me">
      <NoteFix wrong="Can you help I?" right="Can you help me?" fix="me" />
    </NoteSlide>

    <NoteSlide title="受詞用 her" mark="me">
      <NoteFix wrong="I can see hers on Saturday." right="I can see her on Saturday." fix="her" />
    </NoteSlide>

    <NoteSlide title="受詞放在動詞後面" mark="me">
      <NoteFix wrong="Tom me called yesterday." right="Tom called me yesterday." fix="called me" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
