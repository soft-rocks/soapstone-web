<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// nouns-form-containers-quantity-expressions, as slides, in the order of content.md. One
// point per slide: the title names it, the diagram shows it, and `mark` circles the matching
// words of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="不可數名詞用單位詞來數">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'I have', kind: 'dim' },
          { t: 'a piece', role: '單位詞', kind: 'key' },
          { t: 'of', role: 'of' },
          { t: 'news.', role: '不可數名詞' },
        ]"
      />
      <p class="translation">我有一個消息。</p>
    </NoteSlide>

    <NoteSlide title="單位詞說容器、形狀或重量" mark="a piece">
      <div class="rows is-labeled">
        <div>
          <span class="term">容器</span>
          <span>a bottle of water, a cup of tea</span>
        </div>
        <div>
          <span class="term">形狀和大小</span>
          <span>a slice of bread, a bar of chocolate</span>
        </div>
        <div>
          <span class="term">重量和量</span>
          <span>a kilo of rice, a litre of milk</span>
        </div>
        <div>
          <span class="term">a piece of</span>
          <span>a piece of advice, a piece of furniture</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="複數加在單位詞上，不可數名詞不變" mark="a piece">
      <div class="rows is-labeled">
        <div>
          <span class="term">bottle + s</span>
          <span
            ><NoteMark sentence="two bottles of water" :marks="['bottles']" /><span
              class="translation"
              >兩瓶水</span
            ></span
          >
        </div>
        <div>
          <span class="term">piece + s</span>
          <span
            ><NoteMark sentence="three pieces of paper" :marks="['pieces']" /><span
              class="translation"
              >三張紙</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="bread 不能直接加 a，要用單位詞" mark="a piece">
      <NoteFix wrong="Can I have a bread?" right="Can I have a slice of bread?" fix="a slice of" />
    </NoteSlide>

    <NoteSlide title="複數加在 bottles 上，water 不變" mark="news.">
      <NoteFix
        wrong="We need two bottles of waters."
        right="We need two bottles of water."
        fix="water"
      />
    </NoteSlide>

    <NoteSlide title="單位詞和名詞中間要有 of" mark="of">
      <NoteFix wrong="I'd like a cup tea." right="I'd like a cup of tea." fix="of" />
    </NoteSlide>

    <NoteSlide title="數字二以上，單位詞加 -&#x2060;s" mark="a piece">
      <NoteFix
        wrong="She bought three piece of cake."
        right="She bought three pieces of cake."
        fix="pieces"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
