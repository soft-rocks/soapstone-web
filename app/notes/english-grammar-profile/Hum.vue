<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// determiners-form-with-quantifying-determiners-of, as slides, in the order of content.md. One
// point per slide: the title names it, the diagram shows it, and `mark` circles the matching
// words of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="數量限定詞加 of 再加所有格">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'All', role: '數量限定詞', kind: 'key' },
          { t: 'of', role: 'of', kind: 'key' },
          { t: 'my', role: '所有格限定詞' },
          { t: 'friends', role: '名詞' },
          { t: 'were there.', role: '動詞', kind: 'dim' },
        ]"
      />
      <p class="translation">我的朋友全都在場。</p>
    </NoteSlide>

    <NoteSlide title="常用的組合" mark="All of my">
      <div class="rows is-labeled">
        <div>
          <span class="term">all of my</span>
          <span
            ><NoteMark sentence="All of my friends were there." :marks="['All of my']" /><span
              class="translation"
              >我的朋友全都在場。</span
            ></span
          >
        </div>
        <div>
          <span class="term">some of my</span>
          <span
            ><NoteMark
              sentence="Some of my clothes are too small for me."
              :marks="['Some of my']"
            /><span class="translation">我有些衣服太小了。</span></span
          >
        </div>
        <div>
          <span class="term">some of your</span>
          <span
            ><NoteMark sentence="Bring some of your DVDs." :marks="['some of your']" /><span
              class="translation"
              >帶幾片你的 DVD 來。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="動詞跟著後面的名詞" mark="were">
      <div class="rows is-labeled">
        <div>
          <span class="term">複數名詞</span>
          <span
            ><NoteMark
              sentence="All of my cousins were at the wedding."
              :marks="['cousins were']"
            /><span class="translation">我的表兄弟姊妹全都去了婚禮。</span></span
          >
        </div>
        <div>
          <span class="term">不可數名詞</span>
          <span
            ><NoteMark sentence="All of my money was gone." :marks="['money was']" /><span
              class="translation"
              >我的錢全沒了。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="接 my 要加 of" mark="of">
      <NoteFix
        wrong="Some my friends were late."
        right="Some of my friends were late."
        fix="Some of"
      />
    </NoteSlide>

    <NoteSlide title="名詞前面用 my" mark="my">
      <NoteFix wrong="Some of me friends came." right="Some of my friends came." fix="my" />
    </NoteSlide>

    <NoteSlide title="可數名詞用複數" mark="friends">
      <NoteFix
        wrong="Some of my friend live near me."
        right="Some of my friends live near me."
        fix="friends"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
