<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// determiners-form-with-singular-nouns-335, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="each 加單數名詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'and', role: '連接詞', kind: 'dim' },
          { t: 'each', role: 'each', kind: 'key' },
          { t: 'class', role: '單數名詞', kind: 'key' },
          { t: 'is about one hour long.', role: '補充', kind: 'dim' },
        ]"
      />
      <p class="translation">每堂課大約一個小時。</p>
    </NoteSlide>

    <NoteSlide title="a / an 和 one" mark="one hour">
      <div class="rows is-labeled">
        <div>
          <span class="term">an</span>
          <span
            ><NoteMark sentence="We have an extra ticket." :marks="['an']" /><span
              class="translation"
              >我們多一張票。</span
            ></span
          >
        </div>
        <div>
          <span class="term">one</span>
          <span
            ><NoteMark
              sentence="I bought one blue T-shirt and two pink ones."
              :marks="['one']"
            /><span class="translation">我買了一件藍色 T 恤和兩件粉紅色的。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="each 和 every" mark="each class">
      <div class="rows is-labeled">
        <div>
          <span class="term">each</span>
          <span
            ><NoteMark sentence="Each student gets a book." :marks="['Each student']" /><span
              class="translation"
              >每個學生各拿到一本書。</span
            ></span
          >
        </div>
        <div>
          <span class="term">every</span>
          <span
            ><NoteMark
              sentence="Every student in the school knows her."
              :marks="['Every student']"
            /><span class="translation">學校裡每個學生都認識她。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="each 後面用 class，不用 classes" mark="class#2">
      <NoteFix
        wrong="Each classes is one hour long."
        right="Each class is one hour long."
        fix="class"
      />
    </NoteSlide>

    <NoteSlide title="母音前面用 an" mark="each">
      <NoteFix wrong="We have a extra ticket." right="We have an extra ticket." fix="an" />
    </NoteSlide>

    <NoteSlide title="two 以上接複數名詞" mark="one hour">
      <NoteFix
        wrong="I bought three T-shirt yesterday."
        right="I bought three T-shirts yesterday."
        fix="T-shirts"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
