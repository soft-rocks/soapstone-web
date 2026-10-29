<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// passives-form-use-with-by-in-a-relative, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between
// two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="關係子句用被動加 by，說明東西是誰做的">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'clothes', role: '名詞' },
          { t: 'which', role: '關係代名詞' },
          { t: 'are', role: 'be' },
          { t: 'manufactured', role: '過去分詞', kind: 'key' },
          { t: 'by famous brands', role: 'by + 做這件事的人', kind: 'key' },
        ]"
      />
      <p class="translation">名牌廠商做的衣服</p>
    </NoteSlide>

    <NoteSlide title="be 照前面名詞的單複數選" mark="clothes which are">
      <div class="rows is-labeled">
        <div>
          <span class="term">單數</span>
          <span
            ><NoteMark
              sentence="a song which was written by my brother"
              :marks="['song', 'was']"
            /><span class="translation">我哥哥寫的一首歌</span></span
          >
        </div>
        <div>
          <span class="term">複數</span>
          <span
            ><NoteMark
              sentence="clothes which are manufactured by famous brands"
              :marks="['clothes', 'are']"
            /><span class="translation">名牌廠商做的衣服</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="關係子句在句中時，後面接主要子句的動詞" mark="which are manufactured">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'The house', role: '主詞' },
          { t: 'which was built by my grandfather', role: '關係子句', kind: 'key' },
          { t: 'is still standing.', role: '動詞', kind: 'dim' },
        ]"
      />
      <p class="translation">我爺爺蓋的那棟房子還在。</p>
    </NoteSlide>

    <NoteSlide title="關係子句是被動，要有 be" mark="are">
      <NoteFix
        wrong="I like clothes which made by famous brands."
        right="I like clothes which are made by famous brands."
        fix="are"
      />
    </NoteSlide>

    <NoteSlide title="which 指單數名詞時用 was" mark="are">
      <NoteFix
        wrong="I read a book which were written by a doctor."
        right="I read a book which was written by a doctor."
        fix="was"
      />
    </NoteSlide>

    <NoteSlide title="名詞是人，用 who 或 that" mark="which">
      <NoteFix
        wrong="I met a boy which was bitten by a snake."
        right="I met a boy who was bitten by a snake."
        fix="who"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
