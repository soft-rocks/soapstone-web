<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// prepositions-form-ing, as slides, in the order of content.md. One point per slide: the title
// names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="介系詞後面的動詞用 -ing">
      <NoteWords
        :size="34"
        :parts="[
          { t: 'Thanks', kind: 'dim' },
          { t: 'for', role: '介系詞' },
          { t: 'replying.', role: '動詞-ing', kind: 'key' },
        ]"
      />
      <p class="translation">謝謝你的回覆。</p>
    </NoteSlide>

    <NoteSlide title="形容詞、動詞、名詞後面的介系詞都接動詞-ing" mark="for">
      <div class="rows is-labeled">
        <div>
          <span class="term">形容詞 + 介系詞</span>
          <span>good at, interested in, afraid of, tired of</span>
        </div>
        <div>
          <span class="term">動詞 + 介系詞</span>
          <span>think about, talk about, dream of</span>
        </div>
        <div>
          <span class="term">名詞 + 介系詞</span>
          <span>thanks for, the idea of</span>
        </div>
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="She's interested in learning Korean."
              :marks="['in learning']"
            /><span class="translation">她對學韓文有興趣。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="by 加動詞-ing 說明用什麼方法" mark="replying.">
      <div class="rows is-labeled">
        <div>
          <span class="term">by + 動詞-ing</span>
          <span
            ><NoteMark
              sentence="You can save money by cooking at home."
              :marks="['by cooking']"
            /><span class="translation">你可以靠在家煮飯來省錢。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="介系詞後面不用原形動詞" mark="replying.">
      <NoteFix wrong="Thank you for help me." right="Thank you for helping me." fix="helping" />
    </NoteSlide>

    <NoteSlide title="介系詞後面不接 to 不定詞" mark="replying.">
      <NoteFix
        wrong="I'm interested in to learn Spanish."
        right="I'm interested in learning Spanish."
        fix="learning"
      />
    </NoteSlide>

    <NoteSlide title="good 後面要先接 at，再接動詞-ing" mark="for">
      <NoteFix wrong="I'm good cooking." right="I'm good at cooking." fix="at" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
