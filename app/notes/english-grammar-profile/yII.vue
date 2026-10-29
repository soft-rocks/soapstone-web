<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-so-adjective-that-clause, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between
// two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="that 子句說明程度很高造成的結果" mark="so tired that">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'The tea was', kind: 'dim' },
          { t: 'so hot', role: 'so + 形容詞', kind: 'key' },
          {
            t: 'that I had to wait ten minutes.',
            role: 'that 子句：結果',
            kind: 'key',
            ring: true,
          },
        ]"
      />
      <p class="translation">茶燙到我得等十分鐘。</p>
    </NoteSlide>

    <NoteSlide title="so 接形容詞，such 接 a + 形容詞 + 名詞" mark="so tired">
      <div class="rows is-labeled">
        <div>
          <span class="term">so + 形容詞</span>
          <span
            ><NoteMark
              sentence="The lecture was so long that half the class fell asleep."
              :marks="['so long']"
            /><span class="translation">那堂課長到班上一半的人都睡著了。</span></span
          >
        </div>
        <div>
          <span class="term">such + a + 名詞</span>
          <span
            ><NoteMark
              sentence="It was such a long lecture that half the class fell asleep."
              :marks="['such a long lecture']"
            /><span class="translation">那是一堂長到班上一半的人都睡著的課。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="口語常省略 that" mark="that">
      <NoteMark
        sentence="I moved house yesterday. I was so tired I went to bed at eight."
        :marks="['so tired I']"
      />
      <p class="translation">我昨天搬家。我累到八點就上床睡覺了。</p>
    </NoteSlide>

    <NoteSlide title="接結果的 that 子句時用 so，不用 very" mark="so">
      <NoteFix
        wrong="It was very cold that the lake froze."
        right="It was so cold that the lake froze."
        fix="so"
      />
    </NoteSlide>

    <NoteSlide title="有 a 加名詞時用 such" mark="so tired">
      <NoteFix
        wrong="It was so a nice day that we went to the beach."
        right="It was such a nice day that we went to the beach."
        fix="such a"
      />
    </NoteSlide>

    <NoteSlide title="too 接 to 不定詞，接 that 子句用 so" mark="so">
      <NoteFix
        wrong="I was too happy that I cried."
        right="I was so happy that I cried."
        fix="so"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
