<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-affirmative-declarative, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between
// two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞放在最前面，後面接動詞" mark="My friend">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'I', role: '主詞', kind: 'key', ring: true },
          { t: 'study', role: '動詞', kind: 'key' },
          { t: 'Japanese', role: '受詞' },
          { t: 'at night school.', role: '其他', kind: 'dim' },
        ]"
      />
      <p class="translation">我在夜校讀日文。</p>
    </NoteSlide>

    <NoteSlide title="he、she、it 的一般動詞加 -s" mark="is">
      <div class="rows is-labeled">
        <div>
          <span class="term">I / you / we / they</span>
          <span
            ><NoteMark
              sentence="My aunt and uncle are nurses. They work in a hospital."
              :marks="['work']"
            /><span class="translation">我阿姨和姨丈是護理師。他們在醫院工作。</span></span
          >
        </div>
        <div>
          <span class="term">he / she / it</span>
          <span
            ><NoteMark
              sentence="My brother is never home on weekends. He plays football every Saturday."
              :marks="['plays']"
            /><span class="translation">我哥哥週末從來不在家。他每個星期六踢足球。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="主詞和名詞中間要有 be" mark="is">
      <NoteFix
        wrong="Our new neighbor a famous chef."
        right="Our new neighbor is a famous chef."
        fix="is"
      />
    </NoteSlide>

    <NoteSlide title="主詞是 she，動詞加 -s" mark="is">
      <NoteFix wrong="She live in Taipei." right="She lives in Taipei." fix="lives" />
    </NoteSlide>

    <NoteSlide title="職業的單數名詞前面加 a 或 an" mark="a nurse">
      <NoteFix
        wrong="Her uncle is architect in Tainan."
        right="Her uncle is an architect in Tainan."
        fix="an engineer"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
