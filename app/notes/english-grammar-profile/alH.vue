<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-affirmative-603, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + will + 原形動詞" mark="to">
      <div class="rows is-labeled">
        <div>
          <span class="term">will</span>
          <span>情態動詞。每個主詞都用 will，不加 -&#x2060;s。</span>
        </div>
        <div>
          <span class="term">'ll</span>
          <span>will 的縮寫，接在代名詞後面。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>will 後面直接接原形動詞，不加 to。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="句子裡常有未來的時間" mark="tomorrow">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="She'll be home at six." :marks="[]" /><span class="translation"
              >她六點會到家。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">will 的句子常加上 tomorrow、tonight、next week、at 7.30 這類時間。</p>
    </NoteSlide>
    <NoteSlide title="will 後面直接接原形動詞">
      <NoteFix wrong="I will to come tomorrow." right="I will come tomorrow." :fix="['come']" />
    </NoteSlide>
    <NoteSlide title="will 後面接原形動詞，不加 -s">
      <NoteFix wrong="She will comes at seven." right="She will come at seven." :fix="['come']" />
    </NoteSlide>
    <NoteSlide title="'ll 就是 will，不再加 will">
      <NoteFix wrong="I'll will come tomorrow." right="I'll come tomorrow." :fix="['come']" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
