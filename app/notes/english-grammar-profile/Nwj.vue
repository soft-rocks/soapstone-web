<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adjectives-form-with-enough-to-infinitive, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="to 不定詞是程度夠了能做的事" mark="lucky enough to take">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'My daughter is', kind: 'dim' },
          { t: 'old enough', role: '形容詞 + enough', kind: 'key' },
          { t: 'to walk to school alone.', role: 'to 不定詞', kind: 'key', ring: true },
        ]"
      />
      <p class="translation">我女兒已經大到可以自己走路上學了。</p>
    </NoteSlide>

    <NoteSlide title="not + 形容詞 + enough，表示程度不夠" mark="enough">
      <NoteMark
        sentence="Teenagers aren't always mature enough to choose a career."
        :marks="['aren\'t', 'mature enough']"
      />
      <p class="translation">青少年不一定成熟到可以自己選擇職業。</p>
    </NoteSlide>

    <NoteSlide title="lucky enough to 和 kind enough to" mark="lucky enough">
      <div class="rows is-labeled">
        <div>
          <span class="term">lucky enough to</span>
          <span
            ><NoteMark
              sentence="We were lucky enough to get tickets for the final."
              :marks="['lucky enough to get']"
            /><span class="translation">我們很幸運，買到了決賽的票。</span></span
          >
        </div>
        <div>
          <span class="term">kind enough to</span>
          <span
            ><NoteMark
              sentence="Would you be kind enough to close the door?"
              :marks="['kind enough to close']"
            /><span class="translation">可以麻煩你把門關上嗎？</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="for + 人放在 to 不定詞前面" mark="enough to">
      <NoteMark
        sentence="The book is simple enough for children to read."
        :marks="['for children']"
      />
      <p class="translation">這本書夠簡單，小孩也看得懂。</p>
    </NoteSlide>

    <NoteSlide title="enough 放在形容詞後面" mark="lucky enough">
      <NoteFix
        wrong="She is enough old to vote."
        right="She is old enough to vote."
        fix="old enough"
      />
    </NoteSlide>

    <NoteSlide title="enough 後面接動詞要加 to" mark="to take">
      <NoteFix
        wrong="He was brave enough tell the truth."
        right="He was brave enough to tell the truth."
        fix="to tell"
      />
    </NoteSlide>

    <NoteSlide title="做得到的事用 to 不定詞，不用 for 加動詞-ing" mark="to take">
      <NoteFix
        wrong="The box wasn't strong enough for holding the books."
        right="The box wasn't strong enough to hold the books."
        fix="to hold"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
