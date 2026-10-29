<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// verbs-form-like-to-infinitive-or-ing, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="like 後面接動詞-ing">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'like', role: '動詞', kind: 'key' },
          { t: 'learning', role: '動詞-ing', kind: 'key' },
          { t: 'grammar.', role: 'learning 的受詞' },
        ]"
      />
      <p class="translation">我喜歡學文法。</p>
    </NoteSlide>

    <NoteSlide title="like 後面接動詞-ing 或 to + 原形動詞，意思一樣" mark="learning">
      <NoteFork
        stem="I like"
        :branches="[
          {
            head: 'reading',
            rest: 'travel magazines.',
            meaning: '動詞-ing',
            zh: '我喜歡看旅遊雜誌。',
          },
          {
            head: 'to read',
            rest: 'travel magazines.',
            meaning: 'to + 原形動詞',
            zh: '我喜歡看旅遊雜誌。',
          },
        ]"
      />
    </NoteSlide>

    <NoteSlide title="don't like 後面兩種形式都可以接" mark="like">
      <NoteFork
        stem="I don't like"
        :branches="[
          { head: 'washing', rest: 'the car.', meaning: '動詞-ing', zh: '我不喜歡洗車。' },
          { head: 'to wash', rest: 'the car.', meaning: 'to + 原形動詞', zh: '我不喜歡洗車。' },
        ]"
      />
    </NoteSlide>

    <NoteSlide title="like 後面不直接接原形動詞" mark="learning">
      <NoteFix wrong="I like play football." right="I like playing football." fix="playing" />
    </NoteSlide>

    <NoteSlide title="to 後面接原形動詞，兩種形式不能混在一起" mark="learning">
      <NoteFix wrong="She likes to swimming." right="She likes swimming." fix="swimming" />
    </NoteSlide>

    <NoteSlide title="現在簡單式的 like 照主詞變化" mark="like">
      <NoteFix
        wrong="My aunt like gardening in the spring."
        right="My aunt likes gardening in the spring."
        fix="likes"
      />
    </NoteSlide>

    <NoteSlide title="run 要重複 n 再加 -ing" mark="learning">
      <NoteFix
        wrong="I like runing along the river."
        right="I like running along the river."
        fix="running"
      />
    </NoteSlide>

    <NoteSlide title="would like 說現在想做，後面只接 to + 原形動詞" mark="like">
      <div class="rows is-labeled">
        <div>
          <span class="term">like<br /><i>平常喜歡</i></span>
          <span
            ><NoteMark sentence="I like learning grammar." :marks="['like']" /><span
              class="translation"
              >我喜歡學文法。</span
            ></span
          >
        </div>
        <div>
          <span class="term">would like<br /><i>現在想要</i></span>
          <span
            ><NoteMark
              sentence="I would like to learn the piano this year."
              :marks="['would like', 'to learn']"
            /><span class="translation">我今年想學鋼琴。</span></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
