<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adjectives-form-use-with-postmodfier-and-noun, as slides, in the order of content.md. One
// point per slide: the title names it, the diagram shows it, and `mark` circles the matching
// words of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="possible 和 ever 放在名詞後面，加強最高級" mark="best way possible">
      <div class="rows is-labeled">
        <div>
          <span class="term">名詞 + possible</span>
          <span
            ><NoteMark
              sentence="We'll finish in the shortest time possible."
              :marks="['time possible']"
            /><span class="translation">我們會用最短的時間完成。</span></span
          >
        </div>
        <div>
          <span class="term">名詞 + ever</span>
          <span
            ><NoteMark sentence="It was the hottest summer ever." :marks="['summer ever']" /><span
              class="translation"
              >那是有史以來最熱的夏天。</span
            ></span
          >
        </div>
        <div>
          <span class="term">名詞 + by far</span>
          <span
            ><NoteMark
              sentence="In our chess club, Lucy is the strongest player by far."
              :marks="['player by far']"
            /><span class="translation"
              >在我們的西洋棋社，Lucy 是最強的棋手，其他人差遠了。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="possible 可以放在名詞前面或後面" mark="way possible">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'the best possible way', role: 'possible 在前', kind: 'key' },
          { t: '=', kind: 'dim' },
          { t: 'the best way possible', role: 'possible 在後', kind: 'key', ring: true },
        ]"
      />
    </NoteSlide>

    <NoteSlide title="ever 放在名詞後面" mark="best way">
      <NoteFix
        wrong="We had the ever biggest crowd at the stadium."
        right="We had the biggest crowd ever at the stadium."
        fix="biggest crowd ever"
      />
    </NoteSlide>

    <NoteSlide title="到目前為止用 ever，不用 never" mark="best">
      <NoteFix
        wrong="My grandma bakes the best cookies never."
        right="My grandma bakes the best cookies ever."
        fix="ever"
      />
    </NoteSlide>

    <NoteSlide title="possible 前面要用最高級" mark="best">
      <NoteFix
        wrong="Call me at the early time possible."
        right="Call me at the earliest time possible."
        fix="earliest"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
