<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-use-after-if-clauses-625, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="If + 主詞 + 過去式, + 主詞 + would + 原形動詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">if 子句</span>
          <span>想像的情況，用過去式。</span>
        </div>
        <div>
          <span class="term">would</span>
          <span>會。說想像中的結果。</span>
        </div>
        <div>
          <span class="term">If I were you</span>
          <span>如果我是你。給建議。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="If I were you" mark="I">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="If I were you, I would not watch TV all the time."
              :marks="['If I were you,', 'I#2']"
            /><span class="translation">如果我是你，我不會一直看電視。</span></span
          >
        </div>
      </div>
      <p class="remark">給建議的時候常用 If I were you。I 後面用 were。</p>
    </NoteSlide>
    <NoteSlide title="if 子句用過去式" mark="if">
      <NoteFix
        wrong="If I would have money, I would buy it."
        right="If I had money, I would buy it."
        :fix="['had']"
      />
    </NoteSlide>
    <NoteSlide title="would 後面接原形動詞" mark="would">
      <NoteFix
        wrong="If I were you, I would went home."
        right="If I were you, I would go home."
        :fix="['go']"
      />
    </NoteSlide>
    <NoteSlide title="would 後面直接接原形動詞" mark="would">
      <NoteFix
        wrong="If she had time, she would to help us."
        right="If she had time, she would help us."
        :fix="['help']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
