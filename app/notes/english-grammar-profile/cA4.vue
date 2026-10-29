<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adjectives-form-with-pronoun, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="形容詞放在 something 這類代名詞後面" mark="nothing interesting">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I want to cook', kind: 'dim' },
          { t: 'something', role: '代名詞', kind: 'key' },
          { t: 'special', role: '形容詞', kind: 'key', ring: true },
          { t: 'for her birthday.', kind: 'dim' },
        ]"
      />
      <p class="translation">我想為她的生日煮點特別的東西。</p>
    </NoteSlide>

    <NoteSlide title="someone、somewhere 後面也接形容詞" mark="nothing interesting">
      <div class="rows is-labeled">
        <div>
          <span class="term">someone + 形容詞</span>
          <span
            ><NoteMark
              sentence="We need someone strong to move the piano."
              :marks="['someone strong']"
            /><span class="translation">我們需要一個力氣大的人來搬鋼琴。</span></span
          >
        </div>
        <div>
          <span class="term">somewhere + 形容詞</span>
          <span
            ><NoteMark sentence="Let's go somewhere quiet." :marks="['somewhere quiet']" /><span
              class="translation"
              >我們去個安靜的地方吧。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="形容詞不放在代名詞前面" mark="nothing interesting">
      <NoteFix
        wrong="Can you tell me interesting something about your town?"
        right="Can you tell me something interesting about your town?"
        fix="something interesting"
      />
    </NoteSlide>

    <NoteSlide title="形容詞放在 to 不定詞前面" mark="interesting">
      <NoteFix
        wrong="I have something to tell you important."
        right="I have something important to tell you."
        fix="important"
      />
    </NoteSlide>

    <NoteSlide title="nothing 前面不加 not" mark="There is nothing">
      <NoteFix
        wrong="There isn't nothing cheap in this shop."
        right="There's nothing cheap in this shop."
        fix="There's nothing"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
