<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-use-mid-position-hedging-or-emphasis, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + be + 副詞 + …">
      <div class="rows is-labeled">
        <div>
          <span class="term">probably</span>
          <span>大概、可能。讓說法委婉。</span>
        </div>
        <div>
          <span class="term">definitely / certainly</span>
          <span>一定。讓說法肯定。</span>
        </div>
        <div>
          <span class="term">位置</span>
          <span>be 動詞後面，或情態動詞和主要動詞中間。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="和 be going to 一起用">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="It's definitely going to get messy." :marks="['going to']" /><span
              class="translation"
              >一定會弄得很髒亂。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">副詞放在 be 後面、going to 前面。</p>
    </NoteSlide>
    <NoteSlide title="委婉的建議">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="You should probably wear a T-shirt and shorts."
              :marks="['should probably']"
            /><span class="translation">你大概應該穿T恤和短褲。</span></span
          >
        </div>
      </div>
      <p class="remark">should probably 讓建議聽起來比較客氣。</p>
    </NoteSlide>
    <NoteSlide title="放在 be 後面修飾整句話，要用副詞 probably" mark="probably">
      <NoteFix
        wrong="It is probable in the kitchen."
        right="It is probably in the kitchen."
        :fix="['probably']"
      />
    </NoteSlide>
    <NoteSlide title="副詞放在情態動詞和主要動詞中間">
      <NoteFix
        wrong="You should wear probably shorts."
        right="You should probably wear shorts."
        :fix="['probably', 'shorts.']"
      />
    </NoteSlide>
    <NoteSlide title="副詞放在 be 後面、going to 前面">
      <NoteFix
        wrong="It's going definitely to rain."
        right="It's definitely going to rain."
        :fix="['definitely', 'to']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
