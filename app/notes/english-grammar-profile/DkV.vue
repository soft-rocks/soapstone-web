<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-use-as-as, as slides, in the order of content.md. One point per slide: the title
// names it, the diagram shows it, and `mark` circles the matching words of the note's sentence.
// Keep the parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="第二個 as 後面接子句" mark="as much as you do">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'The test', role: '主詞' },
          { t: 'wasn\'t as hard', role: 'not as + 形容詞', kind: 'key' },
          { t: 'as', role: 'as', kind: 'key' },
          { t: 'I thought.', role: '主詞 + 動詞', kind: 'key', ring: true },
        ]"
      />
      <p class="translation">考試沒有我想的那麼難。</p>
    </NoteSlide>

    <NoteSlide title="子句的動詞常用助動詞代替" mark="you do">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'I don\'t play video games', kind: 'dim' },
          { t: 'as often as', role: 'as + 副詞 + as', kind: 'key' },
          { t: 'I did', role: '主詞 + 助動詞', kind: 'key', ring: true },
          { t: 'at school.', kind: 'dim' },
        ]"
      />
      <p class="translation">我沒有像以前讀書時那麼常玩電玩了。</p>
      <p class="remark"><code>did</code> 代替 <code>played video games</code>。</p>
    </NoteSlide>

    <NoteSlide title="as ... as I can 表示盡我所能" mark="as much as">
      <NoteMark sentence="I'll help as much as I can." :marks="['as much as I can']" />
      <p class="translation">我會盡量幫忙。</p>
    </NoteSlide>

    <NoteSlide title="as ... as 中間用原級" mark="as much as">
      <NoteFix
        wrong="It's not as colder as I expected."
        right="It's not as cold as I expected."
        fix="cold"
      />
    </NoteSlide>

    <NoteSlide title="as ... as 前後都是 as" mark="as you do">
      <NoteFix
        wrong="She doesn't run as fast than I do."
        right="She doesn't run as fast as I do."
        fix="as#2"
      />
    </NoteSlide>

    <NoteSlide title="代替一般動詞用 did，不用 was" mark="do">
      <NoteFix
        wrong="I don't read as much as I was at school."
        right="I don't read as much as I did at school."
        fix="did"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
