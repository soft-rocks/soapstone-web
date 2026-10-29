<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// determiners-form-either-neither-of-determiner-with-plural, as slides, in the order of
// content.md. One point per slide: the title names it, the diagram shows it, and `mark` circles
// the matching words of the note's sentence. Keep the parts of one sentence on one line: Vue
// drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="neither of 加限定詞和複數名詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'neither', role: 'either / neither', kind: 'key' },
          { t: 'of', role: 'of', kind: 'key' },
          { t: 'these', role: '限定詞' },
          { t: 'games', role: '複數名詞' },
          { t: 'will be of any interest', role: '動詞', kind: 'dim' },
        ]"
      />
      <p class="translation">這兩場比賽都不會讓你感興趣</p>
    </NoteSlide>

    <NoteSlide title="either of 任何一個，neither of 兩個都不" mark="neither of">
      <div class="rows is-labeled">
        <div>
          <span class="term">either of</span>
          <span
            ><NoteMark sentence="You can take either of the buses." :marks="['either of']" /><span
              class="translation"
              >兩班公車你搭哪一班都可以。</span
            ></span
          >
        </div>
        <div>
          <span class="term">neither of</span>
          <span
            ><NoteMark
              sentence="Neither of my parents speaks English."
              :marks="['Neither of']"
            /><span class="translation">我爸媽兩個都不會說英文。</span></span
          >
        </div>
        <div>
          <span class="term">not ... either of</span>
          <span
            ><NoteMark
              sentence="I don't like either of them."
              :marks="['don\'t', 'either of']"
            /><span class="translation">他們兩個我都不喜歡。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="of 後面要有限定詞" mark="these">
      <NoteFix
        wrong="Neither of games will interest you."
        right="Neither of these games will interest you."
        fix="these"
      />
    </NoteSlide>

    <NoteSlide title="neither 不再加 not" mark="neither">
      <NoteFix
        wrong="Neither of us didn't know the answer."
        right="Neither of us knew the answer."
        fix="knew"
      />
    </NoteSlide>

    <NoteSlide title="代名詞用受格" mark="neither of">
      <NoteFix wrong="Either of we can help you." right="Either of us can help you." fix="us" />
    </NoteSlide>

    <NoteSlide title="三個以上用 any of" mark="neither of">
      <NoteFix
        wrong="You can choose either of the five colours."
        right="You can choose any of the five colours."
        fix="any of"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
