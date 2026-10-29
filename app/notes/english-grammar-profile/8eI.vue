<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-form-with-adverbs, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + was / were + 副詞 + -ing">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'was', kind: 'key', ring: true },
          { t: 'always', role: '副詞' },
          { t: 'dreaming', role: '-ing' },
          { t: 'about getting a kitten.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="just、always、still">
      <div class="rows is-labeled">
        <div>
          <span class="term">just</span>
          <span>剛好正在。</span>
        </div>
        <div>
          <span class="term">always</span>
          <span>總是、一直。</span>
        </div>
        <div>
          <span class="term">still</span>
          <span>還在。</span>
        </div>
        <div>
          <span class="term">really</span>
          <span>真的。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="was just + -ing">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="I was just watching a football match when you called."
              :marks="[]"
            /><span class="translation">你打來的時候，我剛好在看足球比賽。</span></span
          >
        </div>
      </div>
      <p class="remark">was just + -&#x2060;ing 說某件事發生的時候，自己剛好正在做什麼。</p>
    </NoteSlide>
    <NoteSlide title="was always + -ing">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="He was always losing his keys." :marks="[]" /><span
              class="translation"
              >他總是在弄丟鑰匙。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">was always + -&#x2060;ing 說過去一直重複的事，有時候帶有抱怨。</p>
    </NoteSlide>
    <NoteSlide title="was 後面的動詞要加 -ing" mark="was">
      <NoteFix wrong="I was just watch TV." right="I was just watching TV." :fix="['watching']" />
    </NoteSlide>
    <NoteSlide title="副詞放在 was 和 -ing 中間" mark="was">
      <NoteFix
        wrong="She was dreaming always about horses."
        right="She was always dreaming about horses."
        :fix="['always', 'about']"
      />
    </NoteSlide>
    <NoteSlide title="主詞是 they，用 were">
      <NoteFix
        wrong="They was still eating when we arrived."
        right="They were still eating when we arrived."
        :fix="['were']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
