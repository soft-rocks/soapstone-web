<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// determiners-form-much-with-uncountable-nouns-negative, as slides, in the order of content.md.
// One point per slide: the title names it, the diagram shows it, and `mark` circles the
// matching words of the note's sentence. Keep the parts of one sentence on one line: Vue drops
// the whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="否定句的 much 加不可數名詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'haven\'t got', role: '否定的動詞', kind: 'key' },
          { t: 'much', role: 'much', kind: 'key' },
          { t: 'time', role: '不可數名詞' },
          { t: 'to watch it.', role: '補充', kind: 'dim' },
        ]"
      />
      <p class="translation">我沒什麼時間看。</p>
    </NoteSlide>

    <NoteSlide title="否定的動詞加 much 和 There isn't much" mark="haven't got much">
      <div class="rows is-labeled">
        <div>
          <span class="term">否定的動詞 + much</span>
          <span
            ><NoteMark sentence="I haven't got much time." :marks="['haven\'t got much']" /><span
              class="translation"
              >我沒什麼時間。</span
            ></span
          >
        </div>
        <div>
          <span class="term">There isn't much</span>
          <span
            ><NoteMark
              sentence="There isn't much food in the fridge."
              :marks="['isn\'t much']"
            /><span class="translation">冰箱裡沒什麼食物。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="much 接不可數，many 接複數" mark="much">
      <div class="rows is-labeled">
        <div>
          <span class="term">much</span>
          <span
            ><NoteMark sentence="We didn't have much money." :marks="['much']" /><span
              class="translation"
              >我們沒什麼錢。</span
            ></span
          >
        </div>
        <div>
          <span class="term">many</span>
          <span
            ><NoteMark sentence="We didn't buy many things." :marks="['many']" /><span
              class="translation"
              >我們沒買很多東西。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="複數名詞用 many" mark="much">
      <NoteFix
        wrong="I haven't got much friends here."
        right="I haven't got many friends here."
        fix="many"
      />
    </NoteSlide>

    <NoteSlide title="不可數名詞不加 -s" mark="time">
      <NoteFix
        wrong="We didn't get much homeworks."
        right="We didn't get much homework."
        fix="homework"
      />
    </NoteSlide>

    <NoteSlide title="不可數名詞用 isn't" mark="haven't">
      <NoteFix
        wrong="There aren't much milk left."
        right="There isn't much milk left."
        fix="isn't"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
