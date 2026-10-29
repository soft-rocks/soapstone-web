<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// determiners-form-use-the-adjectives-specifying, as slides, in the order of content.md. One
// point per slide: the title names it, the diagram shows it, and `mark` circles the matching
// words of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="the + 形容詞 + 名詞" mark="the red dress.">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I want to buy', role: '主詞 + 動詞', kind: 'dim' },
          { t: 'the', role: '冠詞', kind: 'key' },
          { t: 'red', role: '形容詞' },
          { t: 'dress.', role: '名詞' },
        ]"
      />
      <p class="translation">我想買那件紅色洋裝。</p>
    </NoteSlide>

    <NoteSlide title="用形容詞分出是哪一個" mark="red">
      <div class="rows is-labeled">
        <div>
          <span class="term">顏色</span>
          <span>the red dress、the blue car</span>
        </div>
        <div>
          <span class="term">新舊</span>
          <span>the new café、the old bridge</span>
        </div>
        <div>
          <span class="term">大小</span>
          <span>the big box、the small bedroom</span>
        </div>
        <div>
          <span class="term">位置</span>
          <span>the left side、the top shelf</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="a 和 the 加形容詞" mark="the red">
      <div class="rows is-labeled">
        <div>
          <span class="term">a red dress</span>
          <span
            ><NoteMark sentence="I want a red dress for the party." :marks="['a red dress']" /><span
              class="translation"
              >我想要一件紅色洋裝去參加派對。</span
            ></span
          >
        </div>
        <div>
          <span class="term">the red dress</span>
          <span
            ><NoteMark
              sentence="I want to buy the red dress in the window."
              :marks="['the red dress']"
            /><span class="translation">我想買櫥窗裡那件紅色洋裝。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="the 放在形容詞前面" mark="the red">
      <NoteFix
        wrong="I want to buy red the dress."
        right="I want to buy the red dress."
        fix="the red"
      />
    </NoteSlide>

    <NoteSlide title="特指要加 the">
      <NoteFix
        wrong="Your keys are on small table by the door."
        right="Your keys are on the small table by the door."
        fix="the small"
      />
    </NoteSlide>

    <NoteSlide title="形容詞放在名詞前面">
      <NoteFix wrong="I think it's on the sofa red." right="I think it's on the red sofa." fix="red sofa." />
    </NoteSlide>

    <NoteSlide title="形容詞不加 s">
      <NoteFix
        wrong="Can you pass me the bigs plates?"
        right="Can you pass me the big plates?"
        fix="big plates?"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
