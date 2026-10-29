<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adjectives-form-with-quite-a, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="quite 放在 a 前面" mark="quite a good idea">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'The lake is', kind: 'dim' },
          { t: 'quite', role: 'quite', kind: 'key', ring: true },
          { t: 'a', role: 'a / an', kind: 'key' },
          { t: 'long', role: '形容詞' },
          { t: 'way', role: '名詞' },
          { t: 'from here.', kind: 'dim' },
        ]"
      />
      <p class="translation">湖離這裡滿遠的。</p>
    </NoteSlide>

    <NoteSlide title="a 或 an 看後面形容詞的發音" mark="quite a">
      <div class="rows is-labeled">
        <div>
          <span class="term">quite a + 子音</span>
          <span
            ><NoteMark
              sentence="She has quite a big family. There are six kids."
              :marks="['quite a big']"
            /><span class="translation">她家人口滿多的，有六個小孩。</span></span
          >
        </div>
        <div>
          <span class="term">quite an + 母音</span>
          <span
            ><NoteMark
              sentence="We live in quite an old house near the river."
              :marks="['quite an old']"
            /><span class="translation">我們住在河邊一棟相當老的房子。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="複數和不可數名詞前面沒有 a" mark="quite">
      <div class="rows is-labeled">
        <div>
          <span class="term">複數名詞</span>
          <span
            ><NoteMark sentence="They're quite nice people." :marks="['quite nice people']" /><span
              class="translation"
              >他們是滿好的人。</span
            ></span
          >
        </div>
        <div>
          <span class="term">不可數名詞</span>
          <span
            ><NoteMark
              sentence="We had quite good weather last week."
              :marks="['quite good weather']"
            /><span class="translation">我們上禮拜天氣還算不錯。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="quite a long time 說時間相當久" mark="quite a">
      <NoteMark
        sentence="I've been waiting for quite a long time."
        :marks="['quite a long time']"
      />
      <p class="translation">我已經等了滿久了。</p>
    </NoteSlide>

    <NoteSlide title="quite 不放在 a 後面" mark="quite a">
      <NoteFix
        wrong="It was a quite difficult situation."
        right="It was quite a difficult situation."
        fix="quite a"
      />
    </NoteSlide>

    <NoteSlide title="母音開頭的形容詞前面用 an" mark="a good">
      <NoteFix
        wrong="It's quite a interesting book."
        right="It's quite an interesting book."
        fix="an"
      />
    </NoteSlide>

    <NoteSlide title="複數名詞前面不加 a" mark="quite a">
      <NoteFix
        wrong="They're quite a friendly neighbors."
        right="They're quite friendly neighbors."
        fix="quite friendly"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
