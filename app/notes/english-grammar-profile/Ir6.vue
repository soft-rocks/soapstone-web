<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-use-not-necessarily, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + don't / doesn't + necessarily + 原形動詞" mark="doesn't">
      <div class="rows is-labeled">
        <div>
          <span class="term">not necessarily</span>
          <span>不一定。</span>
        </div>
        <div>
          <span class="term">位置</span>
          <span>放在 don't 或 doesn't 後面，或放在 be 後面。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="不同的看法">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="This is not necessarily the way older people see it."
              :marks="['This is not necessarily the way']"
            /><span class="translation">年長的人不一定這樣看。</span></span
          >
        </div>
      </div>
      <p class="remark">This is not necessarily the way … 說不同的人可能有不同的看法。</p>
    </NoteSlide>
    <NoteSlide title="一般動詞的否定要用 don't 或 doesn't" mark="doesn't">
      <NoteFix
        wrong="Rich people not necessarily feel happy."
        right="Rich people don't necessarily feel happy."
        :fix="['don\'t']"
      />
    </NoteSlide>
    <NoteSlide title="修飾形容詞要用副詞 necessarily" mark="necessarily">
      <NoteFix
        wrong="A big house is not necessary better."
        right="A big house is not necessarily better."
        :fix="['necessarily']"
      />
    </NoteSlide>
    <NoteSlide title="doesn't 後面接原形動詞" mark="doesn't">
      <NoteFix
        wrong="Hard work doesn't necessarily brings success."
        right="Hard work doesn't necessarily bring success."
        :fix="['bring']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
