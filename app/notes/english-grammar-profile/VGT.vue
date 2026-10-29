<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// determiners-form-the-superlatives, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="the + 最高級 + 名詞" mark="the most expensive mobile phone">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'It was', role: '主詞 + 動詞', kind: 'dim' },
          { t: 'the', role: '冠詞', kind: 'key' },
          { t: 'most expensive', role: '最高級形容詞', kind: 'key' },
          { t: 'mobile phone', role: '名詞' },
          { t: 'in the shop.', role: '範圍', kind: 'dim' },
        ]"
      />
      <p class="translation">那是店裡最貴的手機。</p>
    </NoteSlide>

    <NoteSlide title="最高級的寫法" mark="most expensive">
      <div class="rows is-labeled">
        <div>
          <span class="term">短的形容詞</span>
          <span>big → the biggest、cheap → the cheapest</span>
        </div>
        <div>
          <span class="term">字尾是 y</span>
          <span>happy → the happiest、easy → the easiest</span>
        </div>
        <div>
          <span class="term">長的形容詞</span>
          <span>the most expensive、the most beautiful</span>
        </div>
        <div>
          <span class="term">不規則</span>
          <span>good → the best、bad → the worst</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="範圍用 in 或 of" mark="in the shop.">
      <div class="rows is-labeled">
        <div>
          <span class="term">in</span>
          <span>地方或團體：in the shop、in the world、in my class</span>
        </div>
        <div>
          <span class="term">of</span>
          <span>時間或一群東西：of the year、of all、of the three</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="有所有格就不加 the">
      <NoteMark sentence="Taiwan's tallest building is Taipei 101." :marks="['Taiwan\'s tallest']" />
      <p class="translation">台灣最高的大樓是台北 101。</p>
    </NoteSlide>

    <NoteSlide title="最高級前面加 the" mark="the most">
      <NoteFix
        wrong="It was most expensive phone in the shop."
        right="It was the most expensive phone in the shop."
        fix="the most"
      />
    </NoteSlide>

    <NoteSlide title="most 和 -est 不一起用">
      <NoteFix
        wrong="This is the most biggest room in the house."
        right="This is the biggest room in the house."
        fix="the biggest"
      />
    </NoteSlide>

    <NoteSlide title="地方或團體用 in" mark="in the shop.">
      <NoteFix
        wrong="She is the tallest girl of our class."
        right="She is the tallest girl in our class."
        fix="in our class."
      />
    </NoteSlide>

    <NoteSlide title="good 的最高級是 best">
      <NoteFix wrong="It's the goodest pizza in town." right="It's the best pizza in town." fix="the best" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
