<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// negation-form-not-non-finite-and-ellipted-clauses, as slides, in the order of content.md. One
// point per slide: the title names it, the diagram shows it, and `mark` circles the matching
// words of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="動詞-ing 沒有助動詞，否定時直接加 not">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I would like to apologize', role: '主詞 + 主要動詞', kind: 'dim' },
          { t: 'for', role: '介系詞' },
          { t: 'not', role: 'not', kind: 'key', ring: true },
          { t: 'being able to attend', role: '動詞-ing', kind: 'key' },
          { t: 'on Friday.', role: '時間', kind: 'dim' },
        ]"
      />
      <p class="translation">很抱歉，我星期五沒辦法出席。</p>
    </NoteSlide>

    <NoteSlide title="not 放在 to 前面" mark="not">
      <NoteWords
        :size="32"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'decided', role: '動詞' },
          { t: 'not', role: 'not', kind: 'key', ring: true },
          { t: 'to go.', role: 'to + 原形動詞' },
        ]"
      />
      <p class="translation">我決定不去。</p>
      <p class="remark">
        口語也說 <code>to not tell</code>，正式的文章用 <code>not to tell</code>。
      </p>
    </NoteSlide>

    <NoteSlide title="省略子句省掉相同的部分，not 直接放在前面" mark="not">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Take the bus', kind: 'dim' },
          { t: 'and', role: 'and' },
          { t: 'not', role: 'not', kind: 'key', ring: true },
          { t: 'take', kind: 'gone' },
          { t: 'the train.', role: '剩下的部分' },
        ]"
      />
      <p class="translation">搭公車，不要搭火車。</p>
    </NoteSlide>

    <NoteSlide title="單獨的 Not 說這一次不一樣" mark="not">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Every time a letter arrived, I opened it at once.', kind: 'dim' },
          { t: 'Not this time.', role: 'I didn\'t open it this time.', kind: 'key' },
        ]"
      />
      <p class="translation">每次信來，我都馬上拆開。這一次沒有。</p>
    </NoteSlide>

    <NoteSlide title="動詞-ing 前面不用 don't" mark="not">
      <NoteFix wrong="I'm sorry for don't calling." right="I'm sorry for not calling." fix="not" />
    </NoteSlide>

    <NoteSlide title="否定動詞-ing 用 not，不用 no" mark="not">
      <NoteFix
        wrong="Thank you for no telling my parents."
        right="Thank you for not telling my parents."
        fix="not"
      />
    </NoteSlide>

    <NoteSlide title="省略子句沒有動詞，不用 don't">
      <NoteFix
        wrong="We'll meet at the café and don't at the station."
        right="We'll meet at the café and not at the station."
        fix="not"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
