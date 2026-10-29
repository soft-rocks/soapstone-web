<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// nouns-form-complex-noun-phrases-with-adjectives-combined, as slides, in the order of
// content.md. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="but 連接兩個方向相反的形容詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I was born in', kind: 'dim' },
          { t: 'a', role: '限定詞' },
          { t: 'small', role: '第一個形容詞' },
          { t: 'but', role: '對比', kind: 'key' },
          { t: 'beautiful', role: '第二個形容詞' },
          { t: 'city.', role: '名詞' },
        ]"
      />
      <p class="translation">我出生在一座不大但很漂亮的城市。</p>
    </NoteSlide>

    <NoteSlide title="方向一樣用 and，方向相反用 but" mark="but">
      <div class="rows is-labeled">
        <div>
          <span class="term">and<br /><i>方向一樣</i></span>
          <span
            ><NoteMark sentence="It's a small and quiet town." :marks="['and']" /><span
              class="translation"
              >那是一個又小又安靜的鎮。</span
            ></span
          >
        </div>
        <div>
          <span class="term">but<br /><i>方向相反</i></span>
          <span
            ><NoteMark sentence="It's a small but busy town." :marks="['but']" /><span
              class="translation"
              >那是一個不大但很熱鬧的鎮。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="cold 和 windy 不形成對比，用 and" mark="but">
      <NoteFix
        wrong="It was a cold but windy day."
        right="It was a cold and windy day."
        fix="and"
      />
    </NoteSlide>

    <NoteSlide title="a 只放在第一個形容詞前面" mark="a">
      <NoteFix
        wrong="It's a cheap but a good hotel."
        right="It's a cheap but good hotel."
        fix="but good"
      />
    </NoteSlide>

    <NoteSlide title="a 和 an 看緊接在後面的第一個形容詞" mark="a">
      <NoteFix
        wrong="She bought a old but beautiful dress."
        right="She bought an old but beautiful dress."
        fix="an"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
