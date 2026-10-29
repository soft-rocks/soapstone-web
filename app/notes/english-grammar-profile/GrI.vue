<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adjectives-form-with-degree-adverbs, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between
// two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="really、so、quite 的程度不一樣" mark="really hot">
      <div class="rows is-labeled">
        <div>
          <span class="term">really ≈ very</span>
          <span
            ><NoteMark
              sentence="Don't jump in yet. The pool is really cold."
              :marks="['really cold']"
            /><span class="translation">先別跳下去，游泳池的水真的很冰。</span></span
          >
        </div>
        <div>
          <span class="term">so，比 very 強</span>
          <span
            ><NoteMark sentence="I'm so tired. I'm going to bed." :marks="['so tired']" /><span
              class="translation"
              >我好累，我要去睡了。</span
            ></span
          >
        </div>
        <div>
          <span class="term">quite，比 very 弱</span>
          <span
            ><NoteMark
              sentence="It's quite cold today. Take a jacket."
              :marks="['quite cold']"
            /><span class="translation">今天滿冷的，帶件外套吧。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="名詞前面：a really，quite a" mark="really">
      <div class="rows is-labeled">
        <div>
          <span class="term">a + really + 形容詞</span>
          <span
            ><NoteMark
              sentence="We had a really nice dinner at the new restaurant."
              :marks="['a really nice']"
            /><span class="translation">我們在那家新餐廳吃了一頓很棒的晚餐。</span></span
          >
        </div>
        <div>
          <span class="term">quite + a + 形容詞</span>
          <span
            ><NoteMark
              sentence="Take the bus. It's quite a long walk to the museum."
              :marks="['quite a long']"
            /><span class="translation">搭公車吧，走到博物館滿遠的。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="quite 放在 a 前面" mark="really">
      <NoteFix
        wrong="They live in a quite big house."
        right="They live in quite a big house."
        fix="quite a"
      />
    </NoteSlide>

    <NoteSlide title="形容詞後面接名詞時，用 such a" mark="really hot">
      <NoteFix wrong="It was a so nice day." right="It was such a nice day." fix="such a" />
    </NoteSlide>

    <NoteSlide title="程度副詞放在形容詞前面" mark="really hot">
      <NoteFix
        wrong="The shoes are expensive quite."
        right="The shoes are quite expensive."
        fix="quite expensive"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
