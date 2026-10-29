<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-modifying, as slides, in the order of content.md. One point per slide: the title
// names it, the diagram shows it, and `mark` circles the matching words of the note's sentence. Keep
// the parts of one sentence on one line: Vue drops the whitespace between two elements on separate
// lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="數量詞 + of + 指示代名詞" mark="some of these">
      <NoteWords
        :size="24"
        :parts="[
          { t: '… a lot of', kind: 'dim' },
          { t: 'TV programs', role: '前面的名詞', kind: 'key' },
          { t: '… but only', kind: 'dim' },
          { t: 'some', role: '數量詞', kind: 'key' },
          { t: 'of', kind: 'key' },
          { t: 'these', role: '指示代名詞', kind: 'key' },
        ]"
      />
      <p class="translation">我們國家的電視節目很多，可是只有其中一些好看。</p>
    </NoteSlide>

    <NoteSlide title="常用的數量詞" mark="some of these">
      <div class="rows is-labeled">
        <div>
          <span class="term">其中一個</span>
          <span
            ><NoteMark
              sentence="We have three rooms free. You can choose one of these."
              :marks="['one of these.']"
            /><span class="translation">我們有三間空房，你可以選其中一間。</span></span
          >
        </div>
        <div>
          <span class="term">其中一部分</span>
          <span
            ><NoteMark
              sentence="I've read all her books, and most of these are about love."
              :marks="['most of these']"
            /><span class="translation">她的書我全讀過了，大部分是寫愛情的。</span></span
          >
        </div>
        <div>
          <span class="term">一個也沒有</span>
          <span
            ><NoteMark
              sentence="He offered me biscuits, but I wanted none of those."
              :marks="['none of those.']"
            /><span class="translation">他請我吃餅乾，可是那些我都不想吃。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="all of that：全部">
      <NoteWords
        :size="24"
        :parts="[
          { t: '… parks,', role: '前面說過的' },
          { t: 'you can see', kind: 'dim' },
          { t: 'all of that', kind: 'key' },
          { t: 'in a weekend.', kind: 'dim' },
        ]"
      />
      <p class="translation">這座城市有海灘、博物館和公園，這些全部週末就看得完。</p>
    </NoteSlide>

    <NoteSlide title="this / that 和 these / those" mark="these">
      <div class="rows is-labeled">
        <div>
          <span class="term">複數名詞</span>
          <span
            ><NoteMark
              sentence="We saw many towns. A few of these had castles."
              :marks="['towns.', 'A few of these']"
            /><span class="translation">我們看了很多小鎮，其中幾個有城堡。</span></span
          >
        </div>
        <div>
          <span class="term">一件事</span>
          <span
            ><NoteMark
              sentence="He told me a long story, but I didn't believe much of that."
              :marks="['story,', 'much of that.']"
            /><span class="translation"
              >他跟我講了一個很長的故事，可是我大部分都不相信。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="數量詞後面加 of" mark="some of these">
      <NoteFix
        wrong="I bought six eggs, but some these were broken."
        right="I bought six eggs, but some of these were broken."
        fix="of"
      />
    </NoteSlide>

    <NoteSlide title="複數名詞用 these" mark="these">
      <NoteFix
        wrong="We tried three restaurants, and all of this were good."
        right="We tried three restaurants, and all of these were good."
        fix="these"
      />
    </NoteSlide>

    <NoteSlide title="one of these：動詞用單數">
      <NoteFix
        wrong="I bought four books, and one of these were damaged."
        right="I bought four books, and one of these was damaged."
        fix="was"
      />
    </NoteSlide>

    <NoteSlide title="數量詞 + of + them">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I have many friends, but', kind: 'dim' },
          { t: 'few of them', kind: 'key' },
          { t: 'live nearby.', kind: 'dim' },
        ]"
      />
      <p class="translation">我有很多朋友，可是住在附近的沒幾個。</p>
    </NoteSlide>

    <NoteSlide title="數量詞 + 名詞：不加 of">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Some', role: '數量詞', kind: 'key' },
          { t: 'programs', role: '名詞' },
          { t: 'are interesting.', kind: 'dim' },
        ]"
      />
      <p class="translation">有些節目很好看。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
