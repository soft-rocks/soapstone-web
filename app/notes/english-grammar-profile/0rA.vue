<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// determiners-form-with-nouns, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="冠詞 + 名詞" mark="a small flat">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'She lives in', role: '主詞 + 動詞 + 介系詞', kind: 'dim' },
          { t: 'a', role: '冠詞', kind: 'key' },
          { t: 'small flat', role: '形容詞 + 名詞' },
          { t: 'in', role: '介系詞', kind: 'dim' },
          { t: 'the', role: '冠詞', kind: 'key' },
          { t: 'town.', role: '名詞' },
        ]"
      />
      <p class="translation">她住在鎮上的一間小公寓。</p>
    </NoteSlide>

    <NoteSlide title="a、an、the 放在哪些名詞前面" mark="a">
      <div class="rows is-labeled">
        <div>
          <span class="term">a</span>
          <span>子音開頭的單數名詞：a flat、a book</span>
        </div>
        <div>
          <span class="term">an</span>
          <span>母音開頭的單數名詞：an appointment、an apple</span>
        </div>
        <div>
          <span class="term">the</span>
          <span>單數、複數和不可數名詞：the town、the children、the water</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="a 和 an 看開頭的音">
      <div class="rows is-labeled">
        <div>
          <span class="term">an</span>
          <span>an egg、an hour、an umbrella</span>
        </div>
        <div>
          <span class="term">a</span>
          <span>a cat、a university、a European city</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="先用 a，再用 the">
      <NoteMark
        sentence="I bought a cake. The cake was delicious."
        :marks="['a cake.', 'The cake']"
      />
      <p class="translation">我買了一個蛋糕。那個蛋糕很好吃。</p>
    </NoteSlide>

    <NoteSlide title="雙方都知道的東西用 the" mark="the town.">
      <div class="rows is-labeled">
        <div>
          <span class="term">只有一個</span>
          <span>the sun、the sky</span>
        </div>
        <div>
          <span class="term">大家知道的地方</span>
          <span>the town、the station、the kitchen</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="單數名詞前面要有冠詞" mark="a small">
      <NoteFix wrong="She lives in small flat." right="She lives in a small flat." fix="a small" />
    </NoteSlide>

    <NoteSlide title="母音開頭用 an">
      <NoteFix wrong="I eat a apple every day." right="I eat an apple every day." fix="an apple" />
    </NoteSlide>

    <NoteSlide title="複數名詞前面不用 a">
      <NoteFix wrong="I have a two brothers." right="I have two brothers." fix="two brothers." />
    </NoteSlide>

    <NoteSlide title="再說到同一個東西用 the">
      <NoteFix
        wrong="I have a dog. A dog is very friendly."
        right="I have a dog. The dog is very friendly."
        fix="The dog"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
