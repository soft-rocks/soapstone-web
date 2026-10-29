<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// nouns-form-noun-phrases-with-adjectives, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words
// of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="兩個形容詞放在限定詞和名詞中間">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'I bought', kind: 'dim' },
          { t: 'a', role: '限定詞' },
          { t: 'beautiful', role: '評價', kind: 'key' },
          { t: 'pink', role: '顏色', kind: 'key' },
          { t: 'skirt', role: '名詞' },
          { t: 'and a white top.', kind: 'dim' },
        ]"
      />
      <p class="translation">我買了一件漂亮的粉紅色裙子和一件白色上衣。</p>
    </NoteSlide>

    <NoteSlide title="順序是評價、大小、新舊、顏色" mark="beautiful pink">
      <div class="rows is-labeled">
        <div>
          <span class="term">大小 + 顏色</span>
          <span
            ><NoteMark sentence="She has short black hair." :marks="['short black']" /><span
              class="translation"
              >她留著一頭黑色短髮。</span
            ></span
          >
        </div>
        <div>
          <span class="term">評價 + 新舊</span>
          <span
            ><NoteMark sentence="It's a beautiful old city." :marks="['beautiful old']" /><span
              class="translation"
              >那是一座美麗的古城。</span
            ></span
          >
        </div>
        <div>
          <span class="term">大小 + 新舊</span>
          <span
            ><NoteMark sentence="We live in a small new flat." :marks="['small new']" /><span
              class="translation"
              >我們住在一間小小的新公寓。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="不同類的形容詞中間不加 and，兩個顏色中間加 and">
      <div class="rows is-labeled">
        <div>
          <span class="term">大小 + 新舊</span>
          <span
            ><NoteMark sentence="a big old house" :marks="['big old']" /><span class="translation"
              >一棟又大又舊的房子</span
            ></span
          >
        </div>
        <div>
          <span class="term">顏色 + and + 顏色</span>
          <span
            ><NoteMark sentence="a blue and white shirt" :marks="['and']" /><span
              class="translation"
              >一件藍白相間的襯衫</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="評價的形容詞放在顏色前面" mark="beautiful">
      <NoteFix
        wrong="She has a red lovely coat."
        right="She has a lovely red coat."
        fix="lovely red"
      />
    </NoteSlide>

    <NoteSlide title="大小的形容詞放在顏色前面">
      <NoteFix
        wrong="He has black short hair."
        right="He has short black hair."
        fix="short black"
      />
    </NoteSlide>

    <NoteSlide title="評價和大小中間不加 and">
      <NoteFix
        wrong="We stayed in a nice and small hotel."
        right="We stayed in a nice small hotel."
        fix="nice small"
      />
    </NoteSlide>

    <NoteSlide title="兩個形容詞都不放在名詞後面" mark="skirt">
      <NoteFix
        wrong="I want a bag big black."
        right="I want a big black bag."
        fix="big black bag"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
