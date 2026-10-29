<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-defining-subject-with-who, as slides, in the order of content.md. One point per slide: the title names it, the
// diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on separate
// lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="who 說明是哪一個人，前面不加逗號" mark="a pen friend who really likes">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I know', kind: 'dim' },
          { t: 'a girl', role: '人', kind: 'key' },
          { t: 'who', role: '主詞', kind: 'key', ring: true },
          { t: 'speaks', role: '動詞' },
          { t: 'five languages.', kind: 'dim' },
        ]"
      />
      <p class="translation">我認識一個會說五種語言的女孩。</p>
    </NoteSlide>

    <NoteSlide title="限定不加逗號，非限定加逗號" mark="who">
      <div class="rows is-labeled">
        <div>
          <span class="term">限定</span>
          <span
            ><NoteMark
              sentence="The man who lives above us plays the piano every night."
              :marks="['The man who lives above us']"
            /><span class="translation">住在我們樓上的那個男人每天晚上都彈鋼琴。</span></span
          >
        </div>
        <div>
          <span class="term">非限定</span>
          <span
            ><NoteMark
              sentence="My father, who plays the piano, lives above us."
              :marks="['who plays the piano']"
            /><span class="translation">我爸爸會彈鋼琴，他住在我們樓上。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="who 就是主詞，不再加 she" mark="who really likes">
      <NoteFix
        wrong="I have a friend who she lives in Spain."
        right="I have a friend who lives in Spain."
        fix="who lives"
      />
    </NoteSlide>

    <NoteSlide title="指人用 who" mark="who">
      <NoteFix
        wrong="The woman which called you is my aunt."
        right="The woman who called you is my aunt."
        fix="who"
      />
    </NoteSlide>

    <NoteSlide title="people 是複數，用 are" mark="likes">
      <NoteFix
        wrong="I like people who is honest."
        right="I like people who are honest."
        fix="are"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
