<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-obligation-496, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + have to / has to + have + 過去分詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">have to have + 過去分詞</span>
          <span>現在的規定，要求某件事已經完成。</span>
        </div>
        <div>
          <span class="term">had to have + 過去分詞</span>
          <span>過去的規定，要求某件事已經完成。</span>
        </div>
        <div>
          <span class="term">had to have been + -&#x2060;ing</span>
          <span>過去的規定，要求某件事已經持續一段時間。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="現在和過去的規定">
      <div class="rows is-labeled">
        <div>
          <span class="term">現在</span>
          <span
            ><NoteMark sentence="You have to have lived here for five years." :marks="[]" /><span
              class="translation"
              >你必須已經在這裡住滿五年。</span
            ></span
          >
        </div>
        <div>
          <span class="term">過去</span>
          <span
            ><NoteMark
              sentence="In those days, you had to have served in the army."
              :marks="[]"
            /><span class="translation">那個年代你必須已經服過兵役。</span></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="用 one 和 you 說一般人" mark="one">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="One has to have saved some money before buying a house."
              :marks="['One']"
            /><span class="translation">買房子之前，人必須先存一些錢。</span></span
          >
        </div>
      </div>
      <p class="remark">正式的寫作常用 one 說一般人。口語用 you。</p>
    </NoteSlide>
    <NoteSlide title="第二個 have 後面接過去分詞" mark="have">
      <NoteFix
        wrong="You have to have finish school."
        right="You have to have finished school."
        :fix="['finished']"
      />
    </NoteSlide>
    <NoteSlide title="to 後面接原形 have" mark="have">
      <NoteFix
        wrong="She had to had studied there."
        right="She had to have studied there."
        :fix="['have']"
      />
    </NoteSlide>
    <NoteSlide title="have been 後面接 -ing">
      <NoteFix
        wrong="You had to have been study in a public school."
        right="You had to have been studying in a public school."
        :fix="['studying']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
