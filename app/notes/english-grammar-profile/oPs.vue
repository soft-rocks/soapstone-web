<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// questions-form-phrase-phrase, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="or 也可以連接兩個同一種的片語">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Is this area', role: '疑問句' },
          { t: 'in the city', role: '片語 A：介系詞片語', kind: 'key' },
          { t: 'or', role: 'or' },
          { t: 'in the countryside?', role: '片語 B：介系詞片語', kind: 'key' },
        ]"
      />
      <p class="translation">這一區是在市區還是在鄉下？</p>
    </NoteSlide>

    <NoteSlide title="片語可以是名詞片語、動詞片語或形容詞片語" mark="or">
      <div class="rows is-labeled">
        <div>
          <span class="term">名詞片語</span>
          <span
            ><NoteMark
              sentence="Do you want the red jacket or the blue one?"
              :marks="['the red jacket', 'the blue one']"
            /><span class="translation">你要紅色那件外套還是藍色那件？</span></span
          >
        </div>
        <div>
          <span class="term">動詞片語</span>
          <span
            ><NoteMark
              sentence="Do you want to eat out or cook at home?"
              :marks="['eat out', 'cook at home']"
            /><span class="translation">你想去外面吃還是在家煮？</span></span
          >
        </div>
        <div>
          <span class="term">形容詞片語</span>
          <span
            ><NoteMark
              sentence="Is the soup too hot or just right?"
              :marks="['too hot', 'just right']"
            /><span class="translation">湯太燙還是剛剛好？</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="片語 B 可以省略和片語 A 相同的字" mark="in the countryside">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Do you feel more sympathy', kind: 'dim' },
          { t: 'for your friends', role: '片語 A' },
          { t: 'or', role: 'or' },
          { t: 'for', kind: 'gone' },
          { t: 'your parents?', role: '片語 B', kind: 'key' },
        ]"
      />
      <p class="translation">你比較同情你的朋友，還是你的父母？</p>
    </NoteSlide>

    <NoteSlide title="兩個片語的種類要一樣" mark="in the city">
      <NoteFix
        wrong="Shall we take a taxi or walking?"
        right="Shall we take a taxi or walk?"
        fix="walk"
      />
    </NoteSlide>

    <NoteSlide title="選擇疑問句用 or，不用 and" mark="or">
      <NoteFix
        wrong="Is the hotel near the beach and in the town?"
        right="Is the hotel near the beach or in the town?"
        fix="or"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
