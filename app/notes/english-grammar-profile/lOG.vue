<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// determiners-form-with-nouns-318, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="所有格限定詞放在名詞前面">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I live with', role: '主詞和動詞', kind: 'dim' },
          { t: 'my', role: '所有格限定詞', kind: 'key' },
          { t: 'mother', role: '名詞' },
          { t: 'and', role: '連接詞', kind: 'dim' },
          { t: 'her', role: '所有格限定詞', kind: 'key' },
          { t: 'boyfriend.', role: '名詞' },
        ]"
      />
      <p class="translation">我跟我媽和她男朋友住在一起。</p>
    </NoteSlide>

    <NoteSlide title="his 和 her 看擁有的人" mark="her">
      <div class="rows is-labeled">
        <div>
          <span class="term">男生</span>
          <span
            ><NoteMark sentence="Tom loves his sister." :marks="['his']" /><span class="translation"
              >Tom 很愛他的妹妹。</span
            ></span
          >
        </div>
        <div>
          <span class="term">女生</span>
          <span
            ><NoteMark sentence="Anna loves her brother." :marks="['her']" /><span
              class="translation"
              >Anna 很愛她的哥哥。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="my、your、our" mark="my">
      <div class="rows is-labeled">
        <div>
          <span class="term">my</span>
          <span
            ><NoteMark
              sentence="I live with my family. My home is a flat."
              :marks="['my family', 'My home']"
            /><span class="translation">我跟家人住。我家是一間公寓。</span></span
          >
        </div>
        <div>
          <span class="term">your</span>
          <span
            ><NoteMark
              sentence="Don't forget your umbrella. It's raining."
              :marks="['your']"
            /><span class="translation">別忘了帶你的傘。外面在下雨。</span></span
          >
        </div>
        <div>
          <span class="term">our</span>
          <span
            ><NoteMark sentence="Our house has four rooms." :marks="['Our']" /><span
              class="translation"
              >我們家有四個房間。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="my 前面不加 the" mark="my">
      <NoteFix wrong="This is the my room." right="This is my room." fix="my room" />
    </NoteSlide>

    <NoteSlide title="名詞前面用 my" mark="my">
      <NoteFix wrong="I live with me family." right="I live with my family." fix="my" />
    </NoteSlide>

    <NoteSlide title="my 放在名詞前面" mark="my">
      <NoteFix wrong="This is bag my." right="This is my bag." fix="my bag" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
