<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// nouns-form-nouns-only-used-in-the-plural, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words
// of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="jeans 只有複數形，說一條也用複數動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'The jeans', role: '只有複數形', kind: 'key' },
          { t: 'were', role: '複數動詞', kind: 'key' },
          { t: 'expensive, but the other things were very cheap.', kind: 'dim' },
        ]"
      />
      <p class="translation">那條牛仔褲很貴，不過其他東西都很便宜。</p>
    </NoteSlide>

    <NoteSlide title="兩條腿的衣服和兩個部分的工具只有複數形" mark="jeans">
      <div class="rows is-labeled">
        <div>
          <span class="term">衣服</span>
          <span>jeans, trousers, shorts, pyjamas</span>
        </div>
        <div>
          <span class="term">工具</span>
          <span>glasses, scissors</span>
        </div>
        <div>
          <span class="term">其他</span>
          <span>clothes, stairs, goods, thanks</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="說幾條、幾副用 a pair of" mark="The jeans">
      <div class="rows is-labeled">
        <div>
          <span class="term">a pair of</span>
          <span
            ><NoteMark sentence="I bought a pair of jeans." :marks="['a pair of']" /><span
              class="translation"
              >我買了一條牛仔褲。</span
            ></span
          >
        </div>
        <div>
          <span class="term">two pairs of</span>
          <span
            ><NoteMark
              sentence="I need two pairs of shorts for the trip."
              :marks="['two pairs of']"
            /><span class="translation">這趟旅行我需要兩條短褲。</span></span
          >
        </div>
      </div>
      <p class="remark"><code>a pair of</code> 當主詞時，動詞用單數。</p>
    </NoteSlide>

    <NoteSlide title="代替這些名詞用 them，不用 it" mark="The jeans">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'I love these', kind: 'dim' },
          { t: 'clothes.', role: '複數名詞' },
          { t: 'I bought', kind: 'dim' },
          { t: 'them', role: '代名詞', kind: 'key' },
          { t: 'in Paris.', kind: 'dim' },
        ]"
      />
      <p class="translation">我很喜歡這些衣服，是我在巴黎買的。</p>
    </NoteSlide>

    <NoteSlide title="jeans 只有複數形，動詞用複數" mark="were">
      <NoteFix wrong="My jeans is too long." right="My jeans are too long." fix="are" />
    </NoteSlide>

    <NoteSlide title="trousers 前面不加 a，說一條用 a pair of">
      <NoteFix
        wrong="I need a new trousers."
        right="I need a new pair of trousers."
        fix="pair of"
      />
    </NoteSlide>

    <NoteSlide title="glasses 是複數，代名詞用 them">
      <NoteFix
        wrong="Where are my glasses? I can't find it."
        right="Where are my glasses? I can't find them."
        fix="them"
      />
    </NoteSlide>

    <NoteSlide title="cloth 是布料，衣服只有複數形 clothes">
      <NoteFix
        wrong="I bought a new cloth for the party."
        right="I bought some new clothes for the party."
        fix="some new clothes"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
