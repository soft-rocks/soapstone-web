<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// questions-use-focus, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="作者自己提出問題，接著自己回答">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'So', role: '引出問題' },
          { t: 'what makes a good present?', role: 'wh- 疑問句', kind: 'key' },
          {
            t: 'From my point of view, the best presents are personal.',
            role: '作者的回答',
          },
        ]"
      />
      <p class="translation">那什麼樣的禮物才是好禮物呢？依我看，最好的禮物是有個人心意的禮物。</p>
    </NoteSlide>

    <NoteSlide title="So 從前面引出問題，But 轉到另一個方向" mark="So">
      <div class="rows is-labeled">
        <div>
          <span class="term">So</span>
          <span
            ><NoteMark
              sentence="So how can we save energy at home? There are three easy steps."
              :marks="['So']"
            /><span class="translation">那我們在家可以怎麼省電？有三個簡單的步驟。</span></span
          >
        </div>
        <div>
          <span class="term">But</span>
          <span
            ><NoteMark
              sentence="Cars cause a lot of pollution. But what are the alternatives?"
              :marks="['But']"
            /><span class="translation">汽車造成很多污染。可是有什麼其他的選擇？</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="What else can I tell you? 在信裡轉到下一個話題" mark="what">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'What else can I tell you?', role: '轉到下一個話題', kind: 'key' },
          { t: 'There are cafés at the airport if you\'re hungry.', role: '新的話題', kind: 'dim' },
        ]"
      />
      <p class="translation">我還能告訴你什麼呢？如果你餓了，機場有咖啡店。</p>
    </NoteSlide>

    <NoteSlide title="be 放在主詞前面" mark="makes">
      <NoteFix
        wrong="So what the alternatives are?"
        right="So what are the alternatives?"
        fix="are"
      />
    </NoteSlide>

    <NoteSlide title="疑問句的句尾用問號" mark="what">
      <NoteFix wrong="But how can we change this." right="But how can we change this?" fix="this" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
