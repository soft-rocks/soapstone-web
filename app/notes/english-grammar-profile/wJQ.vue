<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// questions-form-use-ellipted-modal-hedging, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="or 後面省略了主詞和情態動詞">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Maybe', role: '委婉' },
          { t: 'you could', role: '主詞 + 情態動詞' },
          { t: 'hand out toys', role: '動詞片語 A', kind: 'key' },
          { t: 'or', role: 'or' },
          { t: 'you could', kind: 'gone' },
          { t: 'show a movie?', role: '動詞片語 B', kind: 'key' },
        ]"
      />
      <p class="translation">也許你可以發玩具，或是放一部電影？</p>
    </NoteSlide>

    <NoteSlide title="直述句的語序加上問號，語調上揚" mark="Maybe">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Maybe', role: 'Maybe 或 Perhaps', kind: 'key', ring: true },
          { t: 'we could play a game or read them a story', role: '直述句的語序' },
          { t: '?', role: '語調上揚', kind: 'key' },
        ]"
      />
      <p class="translation">也許我們可以玩個遊戲，或是讀故事給他們聽？</p>
    </NoteSlide>

    <NoteSlide title="Maybe 加問號，命令就變成委婉的建議" mark="could">
      <div class="rows is-labeled">
        <div>
          <span class="term">命令</span>
          <span
            ><NoteMark sentence="You must hand out toys." :marks="['must']" /><span
              class="translation"
              >你必須發玩具。</span
            ></span
          >
        </div>
        <div>
          <span class="term">委婉的建議</span>
          <span
            ><NoteMark
              sentence="Maybe you could hand out toys or show a movie?"
              :marks="['Maybe', 'could']"
            /><span class="translation">也許你可以發玩具，或是放一部電影？</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="動詞片語 B 用原形動詞，不用 -ing" mark="show">
      <NoteFix
        wrong="Maybe you could hand out toys or showing a movie?"
        right="Maybe you could hand out toys or show a movie?"
        fix="show"
      />
    </NoteSlide>

    <NoteSlide title="動詞片語 B 不加 to" mark="show">
      <NoteFix
        wrong="Maybe we could meet on Friday or to have lunch on Saturday?"
        right="Maybe we could meet on Friday or have lunch on Saturday?"
        fix="have"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
