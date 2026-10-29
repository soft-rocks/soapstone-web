<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-use-neither-nor-emphasis, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between
// two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="neither ... nor 強調兩件事都沒發生" mark="neither got married nor had">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'He', role: '主詞' },
          { t: 'neither', role: 'neither', kind: 'key', ring: true },
          { t: 'called', role: '動詞 1', kind: 'key' },
          { t: 'nor', role: 'nor', kind: 'key', ring: true },
          { t: 'wrote.', role: '動詞 2', kind: 'key' },
        ]"
      />
      <p class="translation">他既沒打電話，也沒寫信。</p>
      <p class="remark">句子裡不再加 <code>not</code>。</p>
    </NoteSlide>

    <NoteSlide title="Neither 放在句首時，兩個子句都倒裝" mark="neither">
      <NoteMark
        sentence="Neither did she reply, nor did she come to the party."
        :marks="['Neither did she', 'nor did she']"
      />
      <p class="translation">她既沒回覆，也沒來派對。</p>
    </NoteSlide>

    <NoteSlide title="neither ... nor 已經是否定，不再加 not" mark="neither">
      <NoteFix
        wrong="We don't neither walk nor exercise."
        right="We neither walk nor exercise."
        fix="We neither"
      />
    </NoteSlide>

    <NoteSlide title="neither 配 nor" mark="nor">
      <NoteFix
        wrong="She neither smiled or spoke."
        right="She neither smiled nor spoke."
        fix="nor"
      />
    </NoteSlide>

    <NoteSlide title="兩個動詞用同一個時態" mark="got married nor had">
      <NoteFix
        wrong="He neither ate nor drinks anything."
        right="He neither ate nor drank anything."
        fix="drank"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
