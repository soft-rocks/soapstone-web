<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adjectives-form-double-consonant-er, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="重複最後一個子音，再加 -er" mark="hotter">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Elephants are', kind: 'dim' },
          { t: 'bigger', role: 'big + g + -er', kind: 'key', ring: true },
          { t: 'than horses.', role: 'than + 比較的對象' },
        ]"
      />
      <p class="translation">大象比馬大。</p>
      <p class="remark">單音節，字尾是一個短母音加一個子音。</p>
    </NoteSlide>

    <NoteSlide title="hot、thin、wet 也重複最後一個子音" mark="hotter">
      <div class="rows is-labeled">
        <div>
          <span class="term">hot → hotter</span>
          <span
            ><NoteMark sentence="Today is hotter than yesterday." :marks="['hotter']" /><span
              class="translation"
              >今天比昨天熱。</span
            ></span
          >
        </div>
        <div>
          <span class="term">thin → thinner</span>
          <span
            ><NoteMark sentence="She looks thinner now." :marks="['thinner']" /><span
              class="translation"
              >她現在看起來比較瘦。</span
            ></span
          >
        </div>
        <div>
          <span class="term">wet → wetter</span>
          <span
            ><NoteMark
              sentence="This summer was wetter than last summer."
              :marks="['wetter']"
            /><span class="translation">今年夏天比去年夏天多雨。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="字尾兩個子音或長母音，不重複">
      <div class="rows is-labeled">
        <div>
          <span class="term">cold → colder</span>
          <span
            ><NoteMark sentence="It's colder today." :marks="['colder']" /><span class="translation"
              >今天比較冷。</span
            ></span
          >
        </div>
        <div>
          <span class="term">cheap → cheaper</span>
          <span
            ><NoteMark sentence="The bus is cheaper." :marks="['cheaper']" /><span
              class="translation"
              >公車比較便宜。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="hot 要重複 t" mark="hotter">
      <NoteFix
        wrong="Today is hoter than yesterday."
        right="Today is hotter than yesterday."
        fix="hotter"
      />
    </NoteSlide>

    <NoteSlide title="字尾兩個子音，不再重複">
      <NoteFix
        wrong="The new flat is smalller than our old one."
        right="The new flat is smaller than our old one."
        fix="smaller"
      />
    </NoteSlide>

    <NoteSlide title="重複子音的比較級前面不加 more" mark="hotter">
      <NoteFix wrong="Your dog is more bigger now." right="Your dog is bigger now." fix="bigger" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
