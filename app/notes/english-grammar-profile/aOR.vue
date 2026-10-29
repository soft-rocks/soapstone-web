<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-questions-600, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="Did + 主詞 + use to + 原形動詞？">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'What', kind: 'dim' },
          { t: 'did', kind: 'key', ring: true },
          { t: 'we', role: '主詞' },
          { t: 'use to', kind: 'key', ring: true },
          { t: 'eat?', role: '原形動詞' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="Did、use to、原形動詞" mark="did">
      <div class="rows is-labeled">
        <div>
          <span class="term">Did</span>
          <span>放在主詞前面。</span>
        </div>
        <div>
          <span class="term">use to</span>
          <span>did 後面用 use，不加 -&#x2060;d。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>問的那件事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="問句要用 did" mark="did">
      <NoteFix wrong="What we used to eat?" right="What did we use to eat?" :fix="['did', 'use']" />
    </NoteSlide>
    <NoteSlide title="問句把 did 放在主詞前面" mark="did">
      <NoteFix
        wrong="Where you did use to live?"
        right="Where did you use to live?"
        :fix="['did', 'use']"
      />
    </NoteSlide>
    <NoteSlide title="use to 後面接原形動詞" mark="use to">
      <NoteFix
        wrong="Did you use to playing tennis?"
        right="Did you use to play tennis?"
        :fix="['play']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
