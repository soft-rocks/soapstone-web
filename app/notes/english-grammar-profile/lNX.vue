<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-by-itself, as slides, in the order of content.md. One point per slide: the title names it, the
// diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="by itself 說東西自己動起來">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Suddenly,', kind: 'dim' },
          { t: 'the window opened', role: '單數名詞 + 動詞' },
          { t: 'by itself', role: '自己', kind: 'key' },
          { t: 'and the room filled with cold air.', kind: 'dim' },
        ]"
      />
      <p class="translation">突然間，窗戶自己打開了，房間裡灌滿了冷空氣。</p>
      <p class="remark"><code>on its own</code> 意思一樣，可以互換。</p>
    </NoteSlide>

    <NoteSlide title="by itself 說自己動起來、單獨，或不需要幫忙" mark="by itself">
      <div class="rows is-labeled">
        <div>
          <span class="term">自己動起來</span>
          <span
            ><NoteMark
              sentence="The heating comes on by itself at six every morning."
              :marks="['by itself']"
            /><span class="translation">暖氣每天早上六點會自動打開。</span></span
          >
        </div>
        <div>
          <span class="term">單獨</span>
          <span
            ><NoteMark
              sentence="Don't leave the puppy by itself all day."
              :marks="['by itself']"
            /><span class="translation">別讓小狗整天自己待著。</span></span
          >
        </div>
        <div>
          <span class="term">不需要幫忙</span>
          <span
            ><NoteMark
              sentence="A small cut like this will heal by itself."
              :marks="['by itself.']"
            /><span class="translation">像這樣的小傷口會自己好。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="by 後面用反身代名詞 itself" mark="by itself">
      <NoteFix wrong="The door opened by it." right="The door opened by itself." fix="itself." />
    </NoteSlide>

    <NoteSlide title="複數名詞用 by themselves" mark="the window">
      <NoteFix
        wrong="The windows opened by itself."
        right="The windows opened by themselves."
        fix="themselves."
      />
    </NoteSlide>

    <NoteSlide title="指人用 himself 或 herself">
      <NoteFix
        wrong="My son walked to school by itself."
        right="My son walked to school by himself."
        fix="himself."
      />
    </NoteSlide>

    <NoteSlide title="說法是 by itself 或 on its own" mark="by itself">
      <NoteFix
        wrong="The machine works by its own."
        right="The machine works by itself."
        fix="itself."
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
