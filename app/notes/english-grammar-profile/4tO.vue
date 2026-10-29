<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-use-multiple-main-clauses-instructions, as slides, in the order of content.md.
// One point per slide: the title names it, the diagram shows it, and `mark` circles the
// matching words of the note's sentence. Keep the parts of one sentence on one line: Vue drops
// the whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="逗號隔開動作，最後一個前面加 then" mark="then turn right">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'Go out of the station,', role: '動作 1', kind: 'key' },
          { t: 'cross the road,', role: '動作 2', kind: 'key' },
          { t: 'then', role: 'then', kind: 'key', ring: true },
          { t: 'turn left.', role: '動作 3', kind: 'key' },
        ]"
      />
      <p class="translation">出車站，過馬路，然後左轉。</p>
    </NoteSlide>

    <NoteSlide title="用 first、then、and then 排出步驟" mark="then">
      <NoteMark
        sentence="The receptionist at the clinic gave me a form. First fill in the form, then sign it, and then give it to the nurse."
        :marks="['First', 'then', 'and then']"
      />
      <p class="translation">診所的櫃台人員給我一張表格。先填表格，然後簽名，再交給護理師。</p>
    </NoteSlide>

    <NoteSlide title="用 you 開頭時，後面的動作省略 you" mark="You start">
      <NoteMark
        sentence="You start at the bank, walk to the corner, then turn right."
        :marks="['You start', 'walk', 'turn']"
      />
      <p class="translation">你從銀行出發，走到轉角，然後右轉。</p>
    </NoteSlide>

    <NoteSlide title="指示用原形動詞開頭" mark="go straight ahead">
      <NoteFix
        wrong="Going straight, turning left, then stop."
        right="Go straight, turn left, then stop."
        fix="Go straight, turn left"
      />
    </NoteSlide>

    <NoteSlide title="接下來用 then，比較才用 than" mark="then">
      <NoteFix
        wrong="Go straight, than turn left."
        right="Go straight, then turn left."
        fix="then"
      />
    </NoteSlide>

    <NoteSlide title="主詞是 you，動詞不加 -s" mark="turn right">
      <NoteFix
        wrong="You go to the corner and turns left."
        right="You go to the corner and turn left."
        fix="turn"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
