<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-use-everyday-events-and-states, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + 過去式">
      <div class="rows is-labeled">
        <div>
          <span class="term">過去式</span>
          <span>說以前的事和習慣。</span>
        </div>
        <div>
          <span class="term">was / were</span>
          <span>說以前的狀態和感覺。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="說以前的感覺">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="We went back to that beach every summer. I loved the sound of the waves."
              :marks="['loved']"
            /><span class="translation">我們每年夏天都回到那片海灘。我很愛海浪的聲音。</span></span
          >
        </div>
      </div>
      <p class="remark">liked、loved、hated 說以前對某件事的感覺。</p>
    </NoteSlide>
    <NoteSlide title="說以前的人和地方">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="I lived in Tokyo for a year. The trains were always clean."
              :marks="['were']"
            /><span class="translation">我在東京住了一年。火車總是很乾淨。</span></span
          >
        </div>
      </div>
      <p class="remark">was 和 were 加形容詞，說以前看到的人或地方是什麼樣子。</p>
    </NoteSlide>
    <NoteSlide title="people 是複數，用 were" mark="people">
      <NoteFix
        wrong="The people in the village was very friendly."
        right="The people in the village were very friendly."
        :fix="['were']"
      />
    </NoteSlide>
    <NoteSlide title="說過去的事，兩個動詞都用過去式">
      <NoteFix
        wrong="Every time I visited my uncle, he gives me sweets."
        right="Every time I visited my uncle, he gave me sweets."
        :fix="['gave']"
      />
    </NoteSlide>
    <NoteSlide title="字尾是 e 的動詞只加 -d">
      <NoteFix
        wrong="I likeed the old bookshop in our town."
        right="I liked the old bookshop in our town."
        :fix="['liked']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
