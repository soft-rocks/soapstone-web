<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adjectives-form-use-complex-noun-phrases-69, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="最高級 + 名詞後面接更多種介系詞片語" mark="of my life">
      <div class="rows is-labeled">
        <div>
          <span class="term">in our lives</span>
          <span
            ><NoteMark
              sentence="Exercise is the most important thing in our lives."
              :marks="['in our lives']"
            /><span class="translation">運動是我們生活中最重要的事。</span></span
          >
        </div>
        <div>
          <span class="term">for + 對象</span>
          <span
            ><NoteMark
              sentence="Sleep is the best medicine for a cold."
              :marks="['for a cold']"
            /><span class="translation">睡覺是治感冒最好的藥。</span></span
          >
        </div>
        <div>
          <span class="term">on / at + 地方</span>
          <span
            ><NoteMark
              sentence="The fish is the most expensive dish on the menu."
              :marks="['on the menu']"
            /><span class="translation">魚是菜單上最貴的菜。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="one of the + 最高級 + 複數名詞" mark="the most exciting day">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'Venice is', kind: 'dim' },
          { t: 'one of the most beautiful', role: 'one of the + 最高級', kind: 'key' },
          { t: 'cities', role: '複數名詞', kind: 'key', ring: true },
          { t: 'in Europe.', kind: 'dim' },
        ]"
      />
      <p class="translation">威尼斯是歐洲最美的城市之一。</p>
    </NoteSlide>

    <NoteSlide title="one of the 後面的名詞用複數" mark="day">
      <NoteFix
        wrong="It's one of the best restaurant in town."
        right="It's one of the best restaurants in town."
        fix="restaurants"
      />
    </NoteSlide>

    <NoteSlide title="主詞是 one，動詞用單數" mark="was">
      <NoteFix
        wrong="One of the oldest buildings are the library."
        right="One of the oldest buildings is the library."
        fix="is"
      />
    </NoteSlide>

    <NoteSlide title="the most 前面要加 the" mark="the most">
      <NoteFix
        wrong="Getting the job was most exciting news of the year."
        right="Getting the job was the most exciting news of the year."
        fix="the most"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
