<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-how-adjective, as slides, in the order of content.md. One point per slide: the title names it, the
// diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on separate
// lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="How 加形容詞，回應聽到或看到的事" mark="How exciting">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'How', role: 'How', kind: 'key', ring: true },
          { t: 'wonderful!', role: '形容詞', kind: 'key' },
          { t: 'Congratulations!', kind: 'dim' },
        ]"
      />
      <p class="translation">太棒了！恭喜！</p>
    </NoteSlide>

    <NoteSlide title="說人的行為，加 of 加人" mark="How">
      <NoteMark
        sentence="You carried my bags all the way here? How nice of you!"
        :marks="['How nice of you']"
      />
      <p class="translation">你一路幫我提行李到這裡？你真好！</p>
    </NoteSlide>

    <NoteSlide title="How 接形容詞，What a 接名詞" mark="How">
      <div class="rows is-labeled">
        <div>
          <span class="term">How</span>
          <span
            ><NoteMark sentence="How lovely!" :marks="['How lovely']" /><span class="translation"
              >真好！</span
            ></span
          >
        </div>
        <div>
          <span class="term">What a</span>
          <span
            ><NoteMark sentence="What a lovely day!" :marks="['What a lovely day']" /><span
              class="translation"
              >天氣真好！</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="只有形容詞，用 How" mark="How">
      <NoteFix wrong="What exciting!" right="How exciting!" fix="How" />
    </NoteSlide>

    <NoteSlide title="surprise 是名詞，用 What a" mark="How">
      <NoteFix wrong="How surprise!" right="What a surprise!" fix="What a" />
    </NoteSlide>

    <NoteSlide title="事情讓人興奮，用 exciting" mark="exciting">
      <NoteFix
        wrong="How excited! You won a trip to Paris!"
        right="How exciting! You won a trip to Paris!"
        fix="exciting"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
