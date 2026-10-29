<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-theirs-as-object, as slides, in the order of content.md. One point per slide: the title names it, the
// diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="theirs 等於 their 加名詞，放在 be 後面">
      <NoteWords
        :size="32"
        :parts="[
          { t: 'She told him that', kind: 'dim' },
          { t: 'the baby was', role: '主詞 + be' },
          { t: 'theirs.', role: '= their baby', kind: 'key' },
        ]"
      />
      <p class="translation">她告訴他，那個寶寶是他們的。</p>
    </NoteSlide>

    <NoteSlide title="theirs 放在動詞、be 或介系詞後面" mark="theirs.">
      <div class="rows is-labeled">
        <div>
          <span class="term">動詞後面</span>
          <span
            ><NoteMark
              sentence="We showed them our photos, and they showed us theirs."
              :marks="['theirs.']"
            /><span class="translation">我們給他們看我們的照片，他們也給我們看他們的。</span></span
          >
        </div>
        <div>
          <span class="term">介系詞後面</span>
          <span
            ><NoteMark
              sentence="Our flat is much smaller than theirs."
              :marks="['than theirs.']"
            /><span class="translation">我們的公寓比他們的小多了。</span></span
          >
        </div>
        <div><span class="term">be 後面</span><span>The black car is theirs.</span></div>
      </div>
    </NoteSlide>

    <NoteSlide title="名詞加 of theirs，說他們的某個人" mark="theirs.">
      <div class="rows is-labeled">
        <div>
          <span class="term">of theirs</span>
          <span
            ><NoteMark
              sentence="A friend of theirs runs a café in Tainan."
              :marks="['A friend of theirs']"
            /><span class="translation">他們的一個朋友在台南開咖啡店。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="theirs 沒有撇號" mark="theirs.">
      <NoteFix wrong="Is this dog their's?" right="Is this dog theirs?" fix="theirs?" />
    </NoteSlide>

    <NoteSlide title="後面沒有名詞時用 theirs" mark="theirs.">
      <NoteFix wrong="That boat is their." right="That boat is theirs." fix="theirs." />
    </NoteSlide>

    <NoteSlide title="there's 是 there is，所有格代名詞是 theirs" mark="theirs.">
      <NoteFix
        wrong="The house on the hill is there's."
        right="The house on the hill is theirs."
        fix="theirs."
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
