<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-affirmative-497, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + may + 原形動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I think it', role: '主詞' },
          { t: 'may', kind: 'key', ring: true },
          { t: 'be', role: '原形動詞' },
          { t: 'dirty.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="may、原形動詞" mark="may">
      <div class="rows is-labeled">
        <div>
          <span class="term">may</span>
          <span>可能。所有主詞都用 may，不加 -&#x2060;s。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>可能發生的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="may 後面不加 to" mark="may">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="We may need it." :marks="['may']" /><span class="translation"
              >我們可能會需要它。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">may 是情態動詞。後面直接接原形動詞。</p>
    </NoteSlide>
    <NoteSlide title="主詞不改變 may">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="I may go." :marks="[]" /><span class="translation"
              >我可能會去。</span
            ></span
          >
        </div>
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="She may go." :marks="[]" /><span class="translation"
              >她可能會去。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="may 後面直接接原形動詞" mark="may">
      <NoteFix wrong="It may to rain tomorrow." right="It may rain tomorrow." :fix="['rain']" />
    </NoteSlide>
    <NoteSlide title="may 不加 -s" mark="may">
      <NoteFix wrong="She mays come later." right="She may come later." :fix="['may']" />
    </NoteSlide>
    <NoteSlide title="may 後面接原形動詞" mark="may">
      <NoteFix wrong="He may comes with us." right="He may come with us." :fix="['come']" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
