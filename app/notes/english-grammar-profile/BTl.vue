<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// determiners-form-with-plural-and-uncountable-nouns-342, as slides, in the order of
// content.md. One point per slide: the title names it, the diagram shows it, and `mark` circles
// the matching words of the note's sentence. Keep the parts of one sentence on one line: Vue
// drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="數量限定詞加複數名詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I\'m convinced that', role: '主要子句', kind: 'dim' },
          { t: 'most', role: '數量限定詞', kind: 'key' },
          { t: 'people', role: '複數名詞', kind: 'key' },
          { t: 'watch', role: '動詞' },
        ]"
      />
      <p class="translation">我確信大多數人都看</p>
    </NoteSlide>

    <NoteSlide title="plenty of 接複數名詞和不可數名詞" mark="most people">
      <div class="rows is-labeled">
        <div>
          <span class="term">複數名詞</span>
          <span
            ><NoteMark sentence="We've got plenty of chairs." :marks="['plenty of chairs']" /><span
              class="translation"
              >我們的椅子很多。</span
            ></span
          >
        </div>
        <div>
          <span class="term">不可數名詞</span>
          <span
            ><NoteMark sentence="We've got plenty of time." :marks="['plenty of time']" /><span
              class="translation"
              >我們的時間很多。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="most、enough、plenty of 和 loads of" mark="most">
      <div class="rows is-labeled">
        <div>
          <span class="term">most</span>
          <span
            ><NoteMark
              sentence="Most shops in the village close on Sunday afternoons."
              :marks="['Most']"
            /><span class="translation">村子裡大部分商店星期天下午都關門。</span></span
          >
        </div>
        <div>
          <span class="term">enough</span>
          <span
            ><NoteMark sentence="Have you got enough money for the bus?" :marks="['enough']" /><span
              class="translation"
              >你搭公車的錢夠嗎？</span
            ></span
          >
        </div>
        <div>
          <span class="term">plenty of</span>
          <span
            ><NoteMark
              sentence="There's plenty of pizza for everyone."
              :marks="['plenty of']"
            /><span class="translation">披薩很多，每個人都夠吃。</span></span
          >
        </div>
        <div>
          <span class="term">loads of</span>
          <span
            ><NoteMark
              sentence="We went to loads of beautiful places."
              :marks="['loads of']"
            /><span class="translation">我們去了好多漂亮的地方。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="most 直接接名詞" mark="most people">
      <NoteFix
        wrong="Most of people watch too much TV."
        right="Most people watch too much TV."
        fix="Most people"
      />
    </NoteSlide>

    <NoteSlide title="enough 後面不加 of" mark="most">
      <NoteFix
        wrong="I haven't got enough of money for the ticket."
        right="I haven't got enough money for the ticket."
        fix="enough money"
      />
    </NoteSlide>

    <NoteSlide title="plenty 後面要加 of" mark="most">
      <NoteFix wrong="We've got plenty time." right="We've got plenty of time." fix="plenty of" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
