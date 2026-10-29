<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-with-adverbs-500, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + may + 副詞 + 原形動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'may', kind: 'key', ring: true },
          { t: 'also', role: '副詞' },
          { t: 'ask', role: '原形動詞' },
          { t: 'you for another favour.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="may、副詞、原形動詞" mark="also">
      <div class="rows is-labeled">
        <div>
          <span class="term">may</span>
          <span>可能。</span>
        </div>
        <div>
          <span class="term">副詞</span>
          <span>常用 also、even、still、well、never。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>可能發生的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="副詞的位置" mark="may">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="It may also help you." :marks="['may']" /><span class="translation"
              >它可能也會幫到你。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">副詞放在 may 後面、原形動詞前面。</p>
    </NoteSlide>
    <NoteSlide title="may well" mark="may">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="You may well be right." :marks="['may well', 'may']" /><span
              class="translation"
              >你很可能是對的。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">may well 表示很有可能，比 may 更確定。</p>
    </NoteSlide>
    <NoteSlide title="also 放在 may 和原形動詞中間" mark="also">
      <NoteFix
        wrong="It may help also you."
        right="It may also help you."
        :fix="['also', 'you.']"
      />
    </NoteSlide>
    <NoteSlide title="副詞後面直接接原形動詞">
      <NoteFix wrong="She may well to be right." right="She may well be right." :fix="['be']" />
    </NoteSlide>
    <NoteSlide title="may 後面接原形動詞" mark="may">
      <NoteFix wrong="She may even wins." right="She may even win." :fix="['win.']" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
