<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// nouns-form-compound-nouns, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="複合名詞把字合起來當一個名詞用">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'My house is next to the', kind: 'dim' },
          { t: 'bus', role: '第一個字', kind: 'key' },
          { t: 'stop.', role: '主要名詞', kind: 'key' },
        ]"
      />
      <p class="translation">我家就在公車站旁邊。</p>
      <p class="remark">複合名詞的意思以最後一個字為主。</p>
    </NoteSlide>

    <NoteSlide title="合成一個字、分開寫或用連字號" mark="bus stop">
      <div class="rows is-labeled">
        <div>
          <span class="term">合成一個字</span>
          <span>bedroom, bathroom, football, homework</span>
        </div>
        <div>
          <span class="term">分開寫</span>
          <span>bus stop, swimming pool, living room</span>
        </div>
        <div>
          <span class="term">用連字號</span>
          <span>T-&#x2060;shirt, mother-&#x2060;in-&#x2060;law</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="第一個字可以是名詞、動詞-&#x2060;ing 或形容詞" mark="bus">
      <div class="rows is-labeled">
        <div>
          <span class="term">名詞 + 名詞</span>
          <span>bus stop, bedroom, toothbrush</span>
        </div>
        <div>
          <span class="term">動詞-&#x2060;ing + 名詞</span>
          <span>swimming pool, washing machine</span>
        </div>
        <div>
          <span class="term">形容詞 + 名詞</span>
          <span>blackboard, high school, supermarket</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="複數的 -&#x2060;s 加在主要名詞上" mark="stop.">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'We need two', kind: 'dim' },
          { t: 'bus', role: '第一個字' },
          { t: 'tickets.', role: '主要名詞 + s', kind: 'key' },
        ]"
      />
      <p class="translation">我們需要兩張公車票。</p>
    </NoteSlide>

    <NoteSlide title="第一個字不加 -&#x2060;s">
      <NoteFix
        wrong="I bought two toothsbrushes."
        right="I bought two toothbrushes."
        fix="toothbrushes."
      />
    </NoteSlide>

    <NoteSlide title="說明用途的字放在前面" mark="bus stop">
      <NoteFix
        wrong="Let's meet at the pool swimming."
        right="Let's meet at the swimming pool."
        fix="swimming pool"
      />
    </NoteSlide>

    <NoteSlide title="固定的複合名詞不拆成 of 片語" mark="bus stop">
      <NoteFix
        wrong="I left my bag in the room of living."
        right="I left my bag in the living room."
        fix="living room"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
