<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-reported-speech, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide
      title="主詞 + said / thought / told + 人 + (that) + 主詞 + might + 原形動詞"
      mark="might"
    >
      <div class="rows is-labeled">
        <div>
          <span class="term">said / thought / told</span>
          <span>轉述的動詞，用過去式。</span>
        </div>
        <div>
          <span class="term">might</span>
          <span>原本的 may 或 might。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>轉述的內容。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="may 變成 might">
      <div class="rows is-labeled">
        <div>
          <span class="term">直接引述</span>
          <span
            ><NoteMark sentence='"It may rain," she said.' :marks="[]" /><span class="translation"
              >她說：「可能會下雨。」</span
            ></span
          >
        </div>
        <div>
          <span class="term">間接引述</span>
          <span
            ><NoteMark sentence="She said it might rain." :marks="[]" /><span class="translation"
              >她說可能會下雨。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="轉述想法" mark="might">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="I thought the guests might be cold."
              :marks="['thought', 'might']"
            /><span class="translation">我想客人可能會冷。</span></span
          >
        </div>
      </div>
      <p class="remark">thought、was afraid、wondered 這類動詞後面，也常用 might 說當時的想法。</p>
    </NoteSlide>
    <NoteSlide title="might 後面接原形動詞" mark="might">
      <NoteFix
        wrong="She said she might came later."
        right="She said she might come later."
        :fix="['come']"
      />
    </NoteSlide>
    <NoteSlide title="might 後面直接接原形動詞" mark="might">
      <NoteFix
        wrong="He told me it might to snow."
        right="He told me it might snow."
        :fix="['snow.']"
      />
    </NoteSlide>
    <NoteSlide title="told 後面要接人" mark="said">
      <NoteFix
        wrong="She told that she might be late."
        right="She told me that she might be late."
        :fix="['me']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
