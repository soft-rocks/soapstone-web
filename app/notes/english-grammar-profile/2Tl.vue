<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// determiners-form-a-adjectives, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="an + 形容詞 + 名詞" mark="an interesting place.">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'it is', role: '主詞 + 動詞', kind: 'dim' },
          { t: 'an', role: '冠詞', kind: 'key' },
          { t: 'interesting', role: '形容詞' },
          { t: 'place.', role: '名詞' },
        ]"
      />
      <p class="translation">那是一個很有意思的地方。</p>
    </NoteSlide>

    <NoteSlide title="a + 形容詞 + 名詞">
      <NoteMark
        sentence="We have a big garden and a small swimming pool."
        :marks="['a big garden', 'a small swimming pool.']"
      />
      <p class="translation">我們有一個大花園和一個小游泳池。</p>
    </NoteSlide>

    <NoteSlide title="a 還是 an 看形容詞" mark="an interesting">
      <div class="rows is-labeled">
        <div>
          <span class="term">an</span>
          <span>an old house、an easy test、an interesting place</span>
        </div>
        <div>
          <span class="term">a</span>
          <span>a quick snack、a new car、a useful book</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="加了形容詞，冠詞跟著換">
      <div class="rows is-labeled">
        <div>
          <span class="term">an apple</span>
          <span>a red apple</span>
        </div>
        <div>
          <span class="term">a house</span>
          <span>an old house</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="冠詞看後面的形容詞">
      <NoteFix wrong="It's a old house." right="It's an old house." fix="an old" />
    </NoteSlide>

    <NoteSlide title="冠詞放在最前面" mark="an interesting">
      <NoteFix
        wrong="It is interesting a place."
        right="It is an interesting place."
        fix="an interesting"
      />
    </NoteSlide>

    <NoteSlide title="形容詞放在名詞前面">
      <NoteFix wrong="We have a garden big." right="We have a big garden." fix="big garden." />
    </NoteSlide>

    <NoteSlide title="有形容詞也要加冠詞">
      <NoteFix wrong="She is good student." right="She is a good student." fix="a good" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
