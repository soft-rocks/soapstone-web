<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-as-if-or-as-though-finite, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between
// two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="as if 子句用想像的情況說明前面的動作" mark="as though he had never left">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'He ran out of the room,', role: '主要子句', kind: 'dim' },
          { t: 'as if', role: 'as if', kind: 'key', ring: true },
          { t: 'someone was chasing him.', role: '想像的情況', kind: 'key' },
        ]"
      />
      <p class="translation">他衝出房間，好像有人在追他一樣。</p>
    </NoteSlide>

    <NoteSlide title="比主要子句更早的事，用過去完成式" mark="had never left">
      <NoteMark sentence="He looked pale, as though he had seen a ghost." :marks="['had seen']" />
      <p class="translation">他臉色蒼白，好像見到鬼一樣。</p>
    </NoteSlide>

    <NoteSlide title="正式的寫法用 were" mark="as though">
      <NoteMark
        sentence="She talks to her cat as if it were a person."
        :marks="['as if it were']"
      />
      <p class="translation">她跟她的貓說話，好像牠是人一樣。</p>
    </NoteSlide>

    <NoteSlide title="as if 後面接子句，要有主詞和動詞" mark="as though he had">
      <NoteFix
        wrong="He ran out, as if a ghost."
        right="He ran out, as if he had seen a ghost."
        fix="he had seen a ghost"
      />
    </NoteSlide>

    <NoteSlide title="表示好像，用 as if 或 as though" mark="as though">
      <NoteFix
        wrong="She smiled, as nothing had happened."
        right="She smiled, as if nothing had happened."
        fix="as if"
      />
    </NoteSlide>

    <NoteSlide title="用 as if，不用 like if" mark="as though">
      <NoteFix
        wrong="He ran away like if he was scared."
        right="He ran away as if he was scared."
        fix="as if"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
