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
    <NoteSlide title="have to have 加過去分詞，要求某件事已經完成" mark="have">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Nowadays, one', role: '主詞', kind: 'dim' },
          { t: 'has to', kind: 'key' },
          { t: 'have', kind: 'key', ring: true },
          { t: 'finished', role: '過去分詞', kind: 'key' },
          { t: 'at least senior high school.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="have to have 是現在的規定，had to have 是過去的規定" mark="have">
      <div class="rows is-labeled">
        <div>
          <span class="term">現在</span>
          <span
            ><NoteMark
              sentence="You have to have lived here for five years."
              :marks="['have', 'to', 'have#2', 'lived']"
            /><span class="translation">你必須已經在這裡住滿五年。</span></span
          >
        </div>
        <div>
          <span class="term">過去</span>
          <span
            ><NoteMark
              sentence="In those days, you had to have served in the army."
              :marks="['had to have served']"
            /><span class="translation">那個年代你必須已經服過兵役。</span></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="正式的寫作用 one 說一般人，口語用 you" mark="one">
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
    <NoteSlide title="have been 後面接 -ing" mark="have">
      <NoteFix
        wrong="You had to have been work there for a year."
        right="You had to have been working there for a year."
        :fix="['working']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
