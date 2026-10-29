<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adjectives-form-use-with-noun-and-postmodfier, as slides, in the order of content.md. One
// point per slide: the title names it, the diagram shows it, and `mark` circles the matching
// words of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="possible 放在最高級和名詞中間，加強語氣" mark="shortest possible route">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'We want', kind: 'dim' },
          { t: 'the best', role: 'the + 最高級', kind: 'key' },
          { t: 'possible', role: 'possible', kind: 'key', ring: true },
          { t: 'price.', role: '名詞' },
        ]"
      />
      <p class="translation">我們想要最好的價格。</p>
    </NoteSlide>

    <NoteSlide title="常配 the earliest、the lowest、the worst" mark="possible">
      <div class="rows is-labeled">
        <div>
          <span class="term">the earliest possible</span>
          <span
            ><NoteMark
              sentence="Please reply at the earliest possible time."
              :marks="['the earliest possible time']"
            /><span class="translation">請盡早回覆。</span></span
          >
        </div>
        <div>
          <span class="term">the worst possible</span>
          <span
            ><NoteMark
              sentence="My car broke down on the way to my wedding. It happened at the worst possible time."
              :marks="['the worst possible time']"
            /><span class="translation"
              >我的車在去婚禮的路上拋錨了。這件事發生在最糟的時候。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="possible 放在最高級後面" mark="shortest possible">
      <NoteFix
        wrong="They offered us the possible best deal."
        right="They offered us the best possible deal."
        fix="best possible"
      />
    </NoteSlide>

    <NoteSlide title="修飾名詞要用形容詞 possible" mark="possible">
      <NoteFix
        wrong="It's the best possibly location."
        right="It's the best possible location."
        fix="possible"
      />
    </NoteSlide>

    <NoteSlide title="possible 前面要用最高級" mark="shortest">
      <NoteFix
        wrong="Please reply at the early possible time."
        right="Please reply at the earliest possible time."
        fix="earliest"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
