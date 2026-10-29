<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// nouns-form-as-objects, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="受詞放在動詞後面，是動作的對象">
      <NoteWords
        :size="32"
        :parts="[
          { t: 'I', role: '主詞', kind: 'dim' },
          { t: 'love', role: '動詞' },
          { t: 'my house.', role: '受詞', kind: 'key' },
        ]"
      />
      <p class="translation">我很愛我的房子。</p>
    </NoteSlide>

    <NoteSlide title="受詞可以是名詞片語、複數名詞或人名" mark="my house.">
      <div class="rows is-labeled">
        <div>
          <span class="term">限定詞 + 名詞</span>
          <span
            ><NoteMark sentence="I visit my family on Sundays." :marks="['my family']" /><span
              class="translation"
              >我星期天會去看我的家人。</span
            ></span
          >
        </div>
        <div>
          <span class="term">+ 形容詞</span>
          <span
            ><NoteMark sentence="She bought a new car." :marks="['a new car']" /><span
              class="translation"
              >她買了一台新車。</span
            ></span
          >
        </div>
        <div>
          <span class="term">複數名詞</span>
          <span
            ><NoteMark sentence="He likes dogs." :marks="['dogs']" /><span class="translation"
              >他喜歡狗。</span
            ></span
          >
        </div>
        <div>
          <span class="term">人名</span>
          <span
            ><NoteMark sentence="I called Peter." :marks="['Peter']" /><span class="translation"
              >我打電話給 Peter。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="地點放在受詞後面" mark="my house.">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I play', kind: 'dim' },
          { t: 'football', role: '受詞', kind: 'key' },
          { t: 'in the park.', role: '地點' },
        ]"
      />
      <p class="translation">我在公園踢足球。</p>
    </NoteSlide>

    <NoteSlide title="受詞不放在動詞前面" mark="my house.">
      <NoteFix
        wrong="I my homework do every evening."
        right="I do my homework every evening."
        fix="do my homework"
      />
    </NoteSlide>

    <NoteSlide title="受詞緊接在動詞後面">
      <NoteFix
        wrong="I play in the park football."
        right="I play football in the park."
        fix="football"
      />
    </NoteSlide>

    <NoteSlide title="buy 後面要有受詞" mark="my house.">
      <NoteFix wrong="I bought yesterday." right="I bought a jacket yesterday." fix="a jacket" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
