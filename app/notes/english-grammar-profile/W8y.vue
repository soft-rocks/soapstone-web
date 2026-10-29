<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-some-as-subject-and-object, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="some 當受詞" mark="need some.">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I can bring', kind: 'dim' },
          { t: 'CDs', role: '前面的名詞', kind: 'key' },
          { t: 'if you need', kind: 'dim' },
          { t: 'some.', role: '指 CDs', kind: 'key' },
        ]"
      />
      <p class="translation">如果你需要的話，我可以帶一些 CD 過去。</p>
    </NoteSlide>

    <NoteSlide title="複數名詞和不可數名詞" mark="some.">
      <div class="rows is-labeled">
        <div>
          <span class="term">複數名詞</span>
          <span
            ><NoteMark
              sentence="These cookies are delicious. Would you like some?"
              :marks="['cookies', 'some?']"
            /><span class="translation">這些餅乾很好吃，你要吃一些嗎？</span></span
          >
        </div>
        <div>
          <span class="term">不可數名詞</span>
          <span
            ><NoteMark
              sentence="We need more meat. Could you bring some?"
              :marks="['meat.', 'some?']"
            /><span class="translation">肉不夠，你可以帶一些來嗎？</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="some 當主詞" mark="some.">
      <div class="rows is-labeled">
        <div>
          <span class="term">一部分</span>
          <span
            ><NoteMark
              sentence="On the beach, some were playing football."
              :marks="['some were']"
            /><span class="translation">海灘上有些人在踢足球。</span></span
          >
        </div>
        <div>
          <span class="term">some ... some</span>
          <span
            ><NoteMark
              sentence="Some were swimming, and some were sunbathing."
              :marks="['Some were swimming,', 'some were sunbathing.']"
            /><span class="translation">有些人在游泳，有些人在做日光浴。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="否定句用 any" mark="some.">
      <NoteFix
        wrong="I wanted juice, but there wasn't some."
        right="I wanted juice, but there wasn't any."
        fix="any."
      />
    </NoteSlide>

    <NoteSlide title="some 後面不加 ones" mark="some.">
      <NoteFix
        wrong="These apples look good. I'll buy some ones."
        right="These apples look good. I'll buy some."
        fix="some."
      />
    </NoteSlide>

    <NoteSlide title="some 當主詞，動詞用複數">
      <NoteFix
        wrong="Many students came, and some was from abroad."
        right="Many students came, and some were from abroad."
        fix="were"
      />
    </NoteSlide>

    <NoteSlide title="some + 名詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I bought', kind: 'dim' },
          { t: 'some', role: '限定詞', kind: 'key' },
          { t: 'apples.', role: '名詞' },
        ]"
      />
      <p class="translation">我買了一些蘋果。</p>
    </NoteSlide>

    <NoteSlide title="some of + 受格代名詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Some of', kind: 'key' },
          { t: 'them', role: '哪一群人' },
          { t: 'were playing football.', kind: 'dim' },
        ]"
      />
      <p class="translation">他們有些人在踢足球。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
