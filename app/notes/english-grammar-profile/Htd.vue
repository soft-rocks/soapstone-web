<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-defining-object-with-which, as slides, in the order of content.md. One point per slide: the title names it, the
// diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on separate
// lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide
      title="which 當受詞，說明是哪一個東西"
      mark="The coffee cup which my good friend gave"
    >
      <NoteWords
        :size="24"
        :parts="[
          { t: 'The jacket', role: '東西', kind: 'key' },
          { t: 'which', role: '受詞', kind: 'key', ring: true },
          { t: 'I', role: '主詞' },
          { t: 'bought', role: '動詞' },
          { t: 'online doesn\'t fit.', kind: 'dim' },
        ]"
      />
      <p class="translation">我在網路上買的那件夾克不合身。</p>
    </NoteSlide>

    <NoteSlide title="子句緊接在它說明的東西後面" mark="cup which">
      <div class="rows is-labeled">
        <div>
          <span class="term">主詞後面</span>
          <span
            ><NoteMark
              sentence="The bus which I usually take didn't come this morning."
              :marks="['The bus which I usually take']"
            /><span class="translation">我平常搭的那班公車今天早上沒來。</span></span
          >
        </div>
        <div>
          <span class="term">句尾</span>
          <span
            ><NoteMark
              sentence="Did you get the package which I sent?"
              :marks="['the package which I sent']"
            /><span class="translation">你收到我寄的包裹了嗎？</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="子句裡不再加受詞" mark="gave me">
      <NoteMark
        sentence="The book which I'm reading now is about the ocean."
        :marks="['which I\'m reading now']"
      />
      <p class="translation">我現在在看的那本書是講海洋的。</p>
    </NoteSlide>

    <NoteSlide title="which 已經是受詞，不再加 it" mark="gave">
      <NoteFix
        wrong="The cake which you made it was delicious."
        right="The cake which you made was delicious."
        fix="made was"
      />
    </NoteSlide>

    <NoteSlide title="說明是哪一個，不加逗號" mark="cup which">
      <NoteFix
        wrong="The film, which we watched yesterday, was boring."
        right="The film which we watched yesterday was boring."
        fix="film which"
      />
    </NoteSlide>

    <NoteSlide title="指東西用 which 或 that" mark="which">
      <NoteFix
        wrong="The song who you played at the party was great."
        right="The song which you played at the party was great."
        fix="which"
      />
    </NoteSlide>

    <NoteSlide title="which 當受詞時，子句要有自己的主詞" mark="my good friend gave">
      <NoteFix
        wrong="The shirt which bought is too big."
        right="The shirt which I bought is too big."
        fix="which I"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
