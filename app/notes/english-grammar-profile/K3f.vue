<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-be-likely-to-probability, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + be + (修飾語) + likely to + 原形動詞" mark="likely">
      <div class="rows is-labeled">
        <div>
          <span class="term">likely to</span>
          <span>很可能。</span>
        </div>
        <div>
          <span class="term">unlikely to</span>
          <span>不太可能。</span>
        </div>
        <div>
          <span class="term">修飾語</span>
          <span>very、quite、highly、most，放在 likely 前面，調整可能性的高低。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="說到自己">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="I'm very likely to make mistakes." :marks="[]" /><span
              class="translation"
              >我很可能會犯錯。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">主詞是 I 時，常用來說自己可能會有的反應或結果。</p>
    </NoteSlide>
    <NoteSlide title="likely 後面要有 to，再接原形動詞" mark="likely">
      <NoteFix
        wrong="Problems are likely happen."
        right="Problems are likely to happen."
        :fix="['to']"
      />
    </NoteSlide>
    <NoteSlide title="likely 是形容詞，前面要有 be 動詞" mark="likely">
      <NoteFix
        wrong="It likely to rain this afternoon."
        right="It is likely to rain this afternoon."
        :fix="['is']"
      />
    </NoteSlide>
    <NoteSlide title="這裡的 likely 是形容詞，沒有 likelily 這個字" mark="likely">
      <NoteFix
        wrong="She is very likelily to win."
        right="She is very likely to win."
        :fix="['likely']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
