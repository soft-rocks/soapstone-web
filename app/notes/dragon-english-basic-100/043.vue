<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 043, as slides, in the order of notes/dragon-english-basic-100/043.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide title="try 接動詞-ing，表示試著做一件事，看結果怎麼樣" mark="tried making">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Last Sunday I', kind: 'dim' },
          { t: 'tried', role: '動詞', kind: 'key' },
          { t: 'making', role: '動詞-ing', kind: 'key', ring: true },
          { t: 'some Italian food', role: '受詞' },
          { t: 'for the first time,', kind: 'dim' },
          { t: 'and it was delicious.', role: '結果' },
        ]"
      />
      <p class="translation">{{ note.translation }}</p>
      <p class="remark">那件事本身做得到，重點在結果好不好。</p>
    </NoteSlide>

    <NoteSlide title="try to 接動詞原形，表示努力去做一件不容易的事" mark="tried">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'tried', role: '動詞', kind: 'key' },
          { t: 'to open', role: 'to + 動詞原形', kind: 'key' },
          { t: 'the window,', role: '受詞' },
          { t: 'but it was stuck.', role: '沒做到', kind: 'dim' },
        ]"
      />
      <p class="translation">我試著打開窗戶，但窗戶卡住了。</p>
      <p class="remark">那件事可能沒做到。</p>
    </NoteSlide>

    <NoteSlide title="tried 加動詞-ing 看結果，tried to 是努力去做" mark="tried making">
      <NoteFork
        stem="I tried"
        :branches="[
          {
            head: 'making',
            rest: 'curry for the first time',
            meaning: '做得到，看結果',
            zh: '第一次試著做咖哩',
          },
          {
            head: 'to finish',
            rest: 'the book in one day',
            meaning: '不容易，可能沒做到',
            zh: '想一天看完那本書',
          },
        ]"
      />
    </NoteSlide>

    <NoteSlide title="否定是 try not to，表示盡量不要做" mark="tried">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Try', role: '動詞' },
          { t: 'not', role: '否定', kind: 'key', ring: true },
          { t: 'to make', role: 'to + 動詞原形', kind: 'key' },
          { t: 'any noise.', role: '受詞' },
        ]"
      />
      <p class="translation">盡量不要發出聲音。</p>
    </NoteSlide>
  </NoteDeck>
</template>
