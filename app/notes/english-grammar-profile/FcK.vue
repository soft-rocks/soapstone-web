<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-hers-as-object, as slides, in the order of content.md. One point per slide: the title names it, the
// diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="hers 等於 her 加名詞，放在 be 後面">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'When she gave the suitcase a good look, she realized that', kind: 'dim' },
          { t: 'it wasn\'t', role: '主詞 + be' },
          { t: 'hers.', role: '= her suitcase', kind: 'key' },
        ]"
      />
      <p class="translation">她仔細看了看那個行李箱，才發現那不是她的。</p>
    </NoteSlide>

    <NoteSlide title="hers 放在動詞、be 或介系詞後面" mark="hers.">
      <div class="rows is-labeled">
        <div>
          <span class="term">動詞後面</span>
          <span
            ><NoteMark
              sentence="I forgot my umbrella, so Anna lent me hers."
              :marks="['hers.']"
            /><span class="translation">我忘了帶傘，所以 Anna 借我她的。</span></span
          >
        </div>
        <div><span class="term">be 後面</span><span>The red coat is hers.</span></div>
        <div><span class="term">介系詞後面</span><span>My desk is next to hers.</span></div>
      </div>
    </NoteSlide>

    <NoteSlide title="be 加 hers 說東西是不是她的" mark="wasn't hers.">
      <div class="rows is-labeled">
        <div>
          <span class="term">確認</span>
          <span
            ><NoteMark
              sentence="That phone isn't hers. Hers has a pink case."
              :marks="['isn\'t hers.']"
            /><span class="translation">那支手機不是她的。她的有粉紅色的手機殼。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="hers 沒有撇號" mark="hers.">
      <NoteFix wrong="Is this scarf her's?" right="Is this scarf hers?" fix="hers?" />
    </NoteSlide>

    <NoteSlide title="後面沒有名詞時，說她的東西用 hers" mark="hers.">
      <NoteFix wrong="That coat is her." right="That coat is hers." fix="hers." />
    </NoteSlide>

    <NoteSlide title="she's 是 she is，所有格代名詞是 hers" mark="hers.">
      <NoteFix wrong="The blue bike is she's." right="The blue bike is hers." fix="hers." />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
