<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-mine, as slides, in the order of content.md. One point per slide: the title names it, the
// diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="mine 等於 my 加名詞，代替前面說過的東西">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'I bought a new jacket because', kind: 'dim' },
          { t: 'mine', role: '= my jacket', kind: 'key' },
          { t: 'was very old.', role: '動詞' },
        ]"
      />
      <p class="translation">我買了一件新夾克，因為我那件很舊了。</p>
    </NoteSlide>

    <NoteSlide title="mine 可以當主詞、受詞，也可以放在 be 和介系詞後面" mark="mine">
      <div class="rows is-labeled">
        <div>
          <span class="term">主詞</span>
          <span
            ><NoteMark sentence="This isn't my umbrella. Mine is black." :marks="['Mine']" /><span
              class="translation"
              >這不是我的傘。我的是黑色的。</span
            ></span
          >
        </div>
        <div>
          <span class="term">受詞</span>
          <span>Can I borrow yours? I lost mine.</span>
        </div>
        <div>
          <span class="term">be 後面</span>
          <span>That bag is mine.</span>
        </div>
        <div>
          <span class="term">介系詞後面</span>
          <span
            ><NoteMark sentence="Your shoes are nicer than mine." :marks="['mine.']" /><span
              class="translation"
              >你的鞋子比我的好看。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="動詞跟著 mine 代替的名詞變化" mark="mine was">
      <div class="rows is-labeled">
        <div>
          <span class="term">複數</span>
          <span
            ><NoteMark
              sentence="My sister's shoes are new, but mine are old."
              :marks="['mine are']"
            /><span class="translation">我姊姊的鞋子是新的，可是我的是舊的。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="名詞前面用 my，mine 後面不接名詞">
      <NoteFix wrong="This is mine book." right="This is my book." fix="my" />
    </NoteSlide>

    <NoteSlide title="後面沒有名詞時用 mine" mark="mine">
      <NoteFix wrong="That coffee is my." right="That coffee is mine." fix="mine." />
    </NoteSlide>

    <NoteSlide title="mine 代替複數名詞時也不加 s" mark="mine">
      <NoteFix wrong="These keys are mines." right="These keys are mine." fix="mine." />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
