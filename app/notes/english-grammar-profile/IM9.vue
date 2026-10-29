<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-predictions, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + shall + 原形動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'As a result,', kind: 'dim' },
          { t: 'our town', role: '主詞' },
          { t: 'shall', kind: 'key', ring: true },
          { t: 'have', role: '原形動詞' },
          {
            t: 'financial benefits, as people visiting the library will also visit the shops.',
            kind: 'dim',
          },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="預測的 shall 主要跟 I 和 we 一起用" mark="shall">
      <div class="rows is-labeled">
        <div>
          <span class="term">we shall</span>
          <span
            ><NoteMark
              sentence="If the trains keep running late, we shall lose a lot of customers."
              :marks="['we', 'shall']"
            /><span class="translation">如果火車一直誤點，我們會失去很多顧客。</span></span
          >
        </div>
      </div>
      <p class="remark">主詞是其他名詞時，一般用 will。our town shall 是很正式的寫法。</p>
    </NoteSlide>
    <NoteSlide title="probably、certainly 放在 shall 和原形動詞中間" mark="shall">
      <div class="rows is-labeled">
        <div>
          <span class="term">probably</span>
          <span
            ><NoteMark
              sentence="People live longer every year. We shall probably live longer than our parents."
              :marks="['shall', 'probably']"
            /><span class="translation">人一年比一年長壽。我們可能會比我們的父母活得久。</span></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="shall 後面直接接原形動詞" mark="shall">
      <NoteFix
        wrong="If the plan goes ahead, we shall to benefit from it."
        right="If the plan goes ahead, we shall benefit from it."
        :fix="['benefit']"
      />
    </NoteSlide>
    <NoteSlide title="probably 放在 shall 和原形動詞中間" mark="shall">
      <NoteFix
        wrong="Thanks to modern medicine, we shall live probably longer."
        right="Thanks to modern medicine, we shall probably live longer."
        :fix="['probably']"
      />
    </NoteSlide>
    <NoteSlide title="shall 後面接原形動詞" mark="shall">
      <NoteFix
        wrong="With the new factory, we shall becomes a richer town."
        right="With the new factory, we shall become a richer town."
        :fix="['become']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
