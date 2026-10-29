<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// present-form-use-negative-questions-persuasion, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="先用問句讓讀者想到麻煩，再推銷">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Don\'t', role: 'Don\'t', kind: 'key' },
          { t: 'you', role: '主詞' },
          { t: 'just', role: 'just', ring: true },
          { t: 'hate', role: '原形動詞', kind: 'key', ring: true },
          { t: 'taking the bus to school every morning?', role: '受詞', kind: 'dim' },
        ]"
      />
      <p class="translation">每天早上搭公車上學，你不覺得很討厭嗎？</p>
    </NoteSlide>
    <NoteSlide title="說服的步驟是先說問題，再給辦法" mark="hate">
      <div class="rows is-labeled">
        <div>
          <span class="term">問題</span>
          <span
            ><NoteMark
              sentence="Don't you find that your phone dies too quickly?"
              :marks="['Don\'t you find']"
            /><span class="translation">你不覺得你的手機太快沒電了嗎？</span></span
          >
        </div>
        <div>
          <span class="term">辦法</span>
          <span
            ><NoteMark sentence="Then try our new battery." :marks="['try']" /><span
              class="translation"
              >那就試試我們的新電池。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="Don't you、Isn't it 和 Wouldn't you 說不同的事" mark="Don't">
      <div class="rows is-labeled">
        <div>
          <span class="term">Don't you</span>
          <span
            ><NoteMark
              sentence="Don't you hate waiting in long queues?"
              :marks="['Don\'t you']"
            /><span class="translation">排長長的隊，你不覺得很討厭嗎？</span></span
          >
        </div>
        <div>
          <span class="term">Isn't it</span>
          <span
            ><NoteMark sentence="Isn't it time for a change?" :marks="['Isn\'t it']" /><span
              class="translation"
              >不是該改變一下了嗎？</span
            ></span
          >
        </div>
        <div>
          <span class="term">Wouldn't you</span>
          <span
            ><NoteMark
              sentence="Wouldn't you like a bigger kitchen?"
              :marks="['Wouldn\'t you']"
            /><span class="translation">你不想要一個大一點的廚房嗎？</span></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="主詞是 you，用 don't" mark="Don't">
      <NoteFix
        wrong="Doesn't you hate getting up early?"
        right="Don't you hate getting up early?"
        :fix="['Don\'t']"
      />
    </NoteSlide>
    <NoteSlide title="hate 後面接動詞-ing" mark="hate">
      <NoteFix
        wrong="Don't you just hate take the bus?"
        right="Don't you just hate taking the bus?"
        :fix="['taking']"
      />
    </NoteSlide>
    <NoteSlide title="just 放在 you 後面" mark="just">
      <NoteFix
        wrong="Don't just you hate the rain?"
        right="Don't you just hate the rain?"
        :fix="['you just']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
