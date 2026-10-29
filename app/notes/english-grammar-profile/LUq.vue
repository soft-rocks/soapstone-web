<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-obligation-593, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + should be + -ing">
      <div class="rows is-labeled">
        <div>
          <span class="term">should be + -&#x2060;ing</span>
          <span>應該正在做，說一般的義務或理想。</span>
        </div>
        <div>
          <span class="term">shouldn't be + -&#x2060;ing</span>
          <span>不應該正在做。</span>
        </div>
        <div>
          <span class="term">if 子句</span>
          <span>常說在什麼情況下。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="說一般的情況">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="Wild animals should be running free." :marks="[]" /><span
              class="translation"
              >野生動物應該自由地奔跑。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">這個句型不只說現在這一刻，也說一般的情況。</p>
    </NoteSlide>
    <NoteSlide title="先說理想，再說現實">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="Children should be playing outside, but many stay indoors."
              :marks="['but']"
            /><span class="translation">孩子們應該在外面玩，可是很多人待在室內。</span></span
          >
        </div>
      </div>
      <p class="remark">議論文常先用 should be + -&#x2060;ing 說理想，再用 but 說現實。</p>
    </NoteSlide>
    <NoteSlide title="shouldn't be 後面接 -ing" mark="shouldn't be">
      <NoteFix
        wrong="He shouldn't be drive."
        right="He shouldn't be driving."
        :fix="['driving.']"
      />
    </NoteSlide>
    <NoteSlide title="should 和 -ing 中間要有 be" mark="be">
      <NoteFix
        wrong="Animals should running free."
        right="Animals should be running free."
        :fix="['be']"
      />
    </NoteSlide>
    <NoteSlide title="shouldn't 後面直接接 be" mark="shouldn't">
      <NoteFix
        wrong="Children shouldn't to be working."
        right="Children shouldn't be working."
        :fix="['be']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
