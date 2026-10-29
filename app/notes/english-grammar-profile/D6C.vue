<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-use-response-tokens, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title='"…？" "Not necessarily."'>
      <div class="rows is-labeled">
        <div>
          <span class="term">Not necessarily</span>
          <span>不一定。簡短的回答。</span>
        </div>
        <div>
          <span class="term">理由</span>
          <span>常接著說為什麼不一定。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="接著說理由" mark="Not necessarily.">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence='"Big cities are dangerous." "Not necessarily. Mine is very safe."'
              :marks="['Not necessarily.']"
            /><span class="translation"
              >「大城市很危險。」「不一定。我住的城市很安全。」</span
            ></span
          >
        </div>
      </div>
      <p class="remark">Not necessarily. 後面常接著說例外的情況。</p>
    </NoteSlide>
    <NoteSlide title="簡短的回答用副詞 necessarily" mark="necessarily.">
      <NoteFix
        wrong='"Is it expensive?" "Not necessary."'
        right='"Is it expensive?" "Not necessarily."'
        :fix="['necessarily.']"
      />
    </NoteSlide>
    <NoteSlide title="簡短的回答不用動詞">
      <NoteFix
        wrong='"Is he rich?" "Is not necessarily."'
        right='"Is he rich?" "Not necessarily."'
        :fix="['Not']"
      />
    </NoteSlide>
    <NoteSlide title="拼法是 necessarily，一個 c、兩個 s" mark="necessarily.">
      <NoteFix
        wrong='"Will it rain?" "Not neccessarily."'
        right='"Will it rain?" "Not necessarily."'
        :fix="['necessarily.']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
