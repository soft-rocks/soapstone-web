<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// future-form-with-adverbs-410, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + am / is / are + 副詞 + going to + 原形動詞" mark="going to">
      <div class="rows is-labeled">
        <div>
          <span class="term">副詞</span>
          <span>放在 be 動詞後面，going to 前面。</span>
        </div>
        <div>
          <span class="term">going to + 原形動詞</span>
          <span>預測或打算。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="否定句">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="That is certainly not going to happen."
              :marks="['certainly', 'not']"
            /><span class="translation">那肯定不會發生。</span></span
          >
        </div>
      </div>
      <p class="remark">certainly、probably、clearly、simply 放在 not 前面。</p>
    </NoteSlide>
    <NoteSlide title="going to 中間不放副詞" mark="going to">
      <NoteFix
        wrong="The change is going undoubtedly to affect sales."
        right="The change is undoubtedly going to affect sales."
        :fix="['undoubtedly', 'to']"
      />
    </NoteSlide>
    <NoteSlide title="否定句裡，certainly 放在 not 前面">
      <NoteFix
        wrong="It is not certainly going to rain."
        right="It is certainly not going to rain."
        :fix="['certainly', 'going']"
      />
    </NoteSlide>
    <NoteSlide title="這個位置要用副詞 certainly，不用形容詞 certain">
      <NoteFix
        wrong="The change is certain going to affect sales."
        right="The change is certainly going to affect sales."
        :fix="['certainly']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
