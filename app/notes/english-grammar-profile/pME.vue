<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-negative-485, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide
      title="主詞 + am / is / are + not + likely / certain / sure / obliged / bound + to + 原形動詞"
    >
      <div class="rows is-labeled">
        <div>
          <span class="term">not likely to</span>
          <span>不太可能。</span>
        </div>
        <div>
          <span class="term">not certain to / not sure to</span>
          <span>不一定會。</span>
        </div>
        <div>
          <span class="term">not obliged to</span>
          <span>沒有義務、不必。</span>
        </div>
        <div>
          <span class="term">not bound to</span>
          <span>不一定會。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="not 的位置" mark="not">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="Its good effects are not certain to outweigh the bad ones."
              :marks="['not']"
            /><span class="translation">它的好處不一定大過壞處。</span></span
          >
        </div>
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="The bus isn't likely to come before nine."
              :marks="['isn\'t']"
            /><span class="translation">公車不太可能在九點前來。</span></span
          >
        </div>
      </div>
      <p class="remark">not 放在 be 動詞後面，形容詞前面。口語常用縮寫 isn't、aren't。</p>
    </NoteSlide>
    <NoteSlide title="not 放在 be 動詞後面" mark="not">
      <NoteFix
        wrong="Prices not are likely to fall."
        right="Prices are not likely to fall."
        :fix="['are', 'likely']"
      />
    </NoteSlide>
    <NoteSlide title="likely 是形容詞，否定用 be 動詞加 not" mark="likely">
      <NoteFix
        wrong="The plan doesn't likely to succeed."
        right="The plan is not likely to succeed."
        :fix="['is not']"
      />
    </NoteSlide>
    <NoteSlide title="形容詞後面要接 to 和原形動詞" mark="to">
      <NoteFix
        wrong="She isn't certain win the prize."
        right="She isn't certain to win the prize."
        :fix="['to']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
