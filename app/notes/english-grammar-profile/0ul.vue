<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// determiners-use-these-already-mentioned, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between
// two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="these 指前面提過的東西">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I\'ll need', role: '主詞和動詞', kind: 'dim' },
          { t: 'these', role: 'these', kind: 'key' },
          { t: 'things', role: '複數名詞', kind: 'key' },
          { t: 'because it\'s summertime.', role: '原因', kind: 'dim' },
        ]"
      />
      <p class="translation">我會需要這些東西，因為現在是夏天。</p>
    </NoteSlide>

    <NoteSlide title="these 和現在有關，those 是過去" mark="these things">
      <div class="rows is-labeled">
        <div>
          <span class="term">these</span>
          <span
            ><NoteMark
              sentence="I bought new trainers. I'll wear these trainers tomorrow."
              :marks="['these trainers']"
            /><span class="translation">我買了新運動鞋。我明天要穿這雙運動鞋。</span></span
          >
        </div>
        <div>
          <span class="term">those</span>
          <span
            ><NoteMark
              sentence="I had red trainers as a child. I loved those trainers."
              :marks="['those trainers']"
            /><span class="translation">我小時候有一雙紅色運動鞋。我很愛那雙鞋。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="用 these 比較兩樣東西" mark="these">
      <div class="rows is-labeled">
        <div>
          <span class="term">前一樣</span>
          <span
            ><NoteMark
              sentence="The first jeans I wanted were too small."
              :marks="['The first jeans']"
            /><span class="translation">我一開始想要的那件牛仔褲太小了。</span></span
          >
        </div>
        <div>
          <span class="term">這一樣</span>
          <span
            ><NoteMark sentence="These jeans are better." :marks="['These jeans']" /><span
              class="translation"
              >這件牛仔褲比較好。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="these 接複數名詞" mark="things">
      <NoteFix
        wrong="I'll need these thing for the beach."
        right="I'll need these things for the beach."
        fix="things"
      />
    </NoteSlide>

    <NoteSlide title="these 不再加 s" mark="these">
      <NoteFix wrong="I'll take theses shoes." right="I'll take these shoes." fix="these" />
    </NoteSlide>

    <NoteSlide title="these 動詞用複數" mark="these">
      <NoteFix wrong="These jeans is better." right="These jeans are better." fix="are" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
