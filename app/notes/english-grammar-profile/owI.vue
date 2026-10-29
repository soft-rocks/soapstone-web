<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adjectives-form-compound-adjectives-10, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words
// of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="形容詞 + 名詞-ed，說人的特質" mark="open-minded">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Our new doctor is', kind: 'dim' },
          { t: 'kind-hearted.', role: '形容詞 + 名詞-ed', kind: 'key', ring: true },
        ]"
      />
      <p class="translation">我們的新醫生心地很善良。</p>
    </NoteSlide>

    <NoteSlide title="名詞 + 動詞-ing，說事情給人的感覺" mark="easy-going">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'It was a', kind: 'dim' },
          { t: 'jaw-dropping', role: '名詞 + 動詞-ing', kind: 'key', ring: true },
          { t: 'view.', role: '名詞' },
        ]"
      />
      <p class="translation">那是讓人看到下巴都掉下來的景色。</p>
    </NoteSlide>

    <NoteSlide title="副詞 / 形容詞 + 過去分詞，說東西被怎麼樣了" mark="open-minded">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'We finally went on our', kind: 'dim' },
          { t: 'long-awaited', role: '副詞 + 過去分詞', kind: 'key', ring: true },
          { t: 'trip.', role: '名詞' },
        ]"
      />
      <p class="translation">我們終於去了期待已久的旅行。</p>
    </NoteSlide>

    <NoteSlide title="self- 和固定的片語" mark="easy-going and open-minded">
      <div class="rows is-labeled">
        <div>
          <span class="term">self- + 形容詞</span>
          <span
            ><NoteMark sentence="She is very self-confident." :marks="['self-confident']" /><span
              class="translation"
              >她很有自信。</span
            ></span
          >
        </div>
        <div>
          <span class="term">固定的片語</span>
          <span
            ><NoteMark
              sentence="They come from a well-to-do family."
              :marks="['well-to-do']"
            /><span class="translation">他們出身有錢人家。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="說人的特質，名詞要加 -ed" mark="open-minded">
      <NoteFix
        wrong="She is an open-mind person."
        right="She is an open-minded person."
        fix="open-minded"
      />
    </NoteSlide>

    <NoteSlide title="說東西給人的感覺，用動詞-ing" mark="easy-going">
      <NoteFix
        wrong="They made an eye-caught poster."
        right="They made an eye-catching poster."
        fix="eye-catching"
      />
    </NoteSlide>

    <NoteSlide title="放在名詞前面要加連字號" mark="easy-going">
      <NoteFix
        wrong="We went on a long awaited trip."
        right="We went on a long-awaited trip."
        fix="long-awaited"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
