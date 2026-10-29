<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-use-imperative, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="Be sure to + 原形動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'If you cannot attend,', kind: 'dim' },
          { t: 'be sure to', kind: 'key', ring: true },
          { t: 'inform', role: '原形動詞' },
          { t: 'me in advance.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="be sure to、原形動詞" mark="be">
      <div class="rows is-labeled">
        <div>
          <span class="term">be sure to</span>
          <span>務必、一定要。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>要對方做的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="放在 if 子句後面" mark="be sure to">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="If you need help, be sure to ask."
              :marks="['be sure to', 'If']"
            /><span class="translation">如果你需要幫忙，一定要問。</span></span
          >
        </div>
      </div>
      <p class="remark">be sure to 常接在 if 子句後面，說在某種情況下一定要做的事。</p>
    </NoteSlide>
    <NoteSlide title="sure 後面要有 to，再接原形動詞" mark="sure">
      <NoteFix wrong="Be sure contact me." right="Be sure to contact me." :fix="['to']" />
    </NoteSlide>
    <NoteSlide title="祈使句用原形 be" mark="be">
      <NoteFix
        wrong="Are sure to call me tomorrow."
        right="Be sure to call me tomorrow."
        :fix="['Be']"
      />
    </NoteSlide>
    <NoteSlide title="to 後面接原形動詞" mark="to">
      <NoteFix
        wrong="Be sure to bringing your passport."
        right="Be sure to bring your passport."
        :fix="['bring']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
