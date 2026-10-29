<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// conjunctions-form-sentence-sentence, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="句子。 + Or + 句子。" mark="Or">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I go shopping on Ladypool Road.', role: '句子' },
          { t: 'Or', role: '連接詞', kind: 'key' },
          { t: 'sometimes I go to my local shop.', role: '句子' },
        ]"
      />
      <p class="translation">我會去 Ladypool Road 買東西。或者有時候我會去家附近的店。</p>
    </NoteSlide>

    <NoteSlide title="And、But、Or 放在句首" mark="Or">
      <div class="rows is-labeled">
        <div>
          <span class="term">And</span>
          <span
            ><NoteMark sentence="The park is beautiful. And it is free." :marks="['And']" /><span
              class="translation"
              >公園很漂亮。而且是免費的。</span
            ></span
          >
        </div>
        <div>
          <span class="term">But</span>
          <span
            ><NoteMark
              sentence="I am from Estonia. But now I live in Dorchester."
              :marks="['But']"
            /><span class="translation">我來自愛沙尼亞。但是我現在住在多徹斯特。</span></span
          >
        </div>
        <div>
          <span class="term">Or</span>
          <span
            ><NoteMark
              sentence="I visit my parents. Or they come to my house."
              :marks="['Or']"
            /><span class="translation">我去看我爸媽。或者他們來我家。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="句首連接詞的用法" mark="Or">
      <div class="rows is-labeled">
        <div>
          <span class="term">大寫</span>
          <span>句號後面是新的句子，連接詞第一個字母大寫</span>
        </div>
        <div>
          <span class="term">完整的句子</span>
          <span>後面要有主詞和動詞</span>
        </div>
        <div>
          <span class="term">逗號</span>
          <span>And、But 後面通常不加逗號</span>
        </div>
        <div>
          <span class="term">正式的文章</span>
          <span>少用句首的 And 和 Or</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="後面接完整的句子">
      <NoteFix
        wrong="The hotel was clean. And very cheap too."
        right="The hotel was clean. And it was very cheap too."
        fix="it was"
      />
    </NoteSlide>

    <NoteSlide title="句首連接詞大寫">
      <NoteFix
        wrong="I love my job. but the hours are very long."
        right="I love my job. But the hours are very long."
        fix="But"
      />
    </NoteSlide>

    <NoteSlide title="句首的 But 不加逗號">
      <NoteFix
        wrong="I wanted to go to the party. But, I had to work."
        right="I wanted to go to the party. But I had to work."
        fix="But I"
      />
    </NoteSlide>

    <NoteSlide title="補充另一件事用 And">
      <NoteFix
        wrong="My street is very quiet. Or the neighbours are very kind."
        right="My street is very quiet. And the neighbours are very kind."
        fix="And"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
