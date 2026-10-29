<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-possibility-515, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + might + 原形動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'My dad isn\'t working that day, so', kind: 'dim' },
          { t: 'he', role: '主詞' },
          { t: 'might', kind: 'key', ring: true },
          { t: 'take', role: '原形動詞' },
          { t: 'us.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="might、原形動詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">might</span>
          <span>可能、說不定。說話者的把握不大。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>可能的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="找東西">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="It might be on the computer table."
              :marks="['It might be']"
            /><span class="translation">它可能在電腦桌上。</span></span
          >
        </div>
      </div>
      <p class="remark">找不到東西的時候，常用 It might be 說可能的地方。</p>
    </NoteSlide>
    <NoteSlide title="might 不加 -s" mark="might">
      <NoteFix wrong="He mights come later." right="He might come later." :fix="['might']" />
    </NoteSlide>
    <NoteSlide title="might 後面接原形動詞" mark="might">
      <NoteFix wrong="She might went home." right="She might go home." :fix="['go']" />
    </NoteSlide>
    <NoteSlide title="might 後面的動詞不變化，一律用原形" mark="might">
      <NoteFix
        wrong="We might going to the beach."
        right="We might go to the beach."
        :fix="['go']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
