<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-general-truths-and-tendencies-449, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + can + 原形動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Too much work', role: '主詞' },
          { t: 'can', kind: 'key', ring: true },
          { t: 'cause', role: '原形動詞' },
          { t: 'stress and heart problems.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="主詞、can、原形動詞" mark="Too much work">
      <div class="rows is-labeled">
        <div>
          <span class="term">主詞</span>
          <span>一類事情或一類人，像 too much work、young people、some medicines。</span>
        </div>
        <div>
          <span class="term">can</span>
          <span>一般來說可能會。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>常見的結果或反應，像 cause、make、feel、lead to、damage。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="說造成的結果" mark="cause">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="Loud music can damage your hearing." :marks="['damage']" /><span
              class="translation"
              >很大聲的音樂可能會損害聽力。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">常用 cause、lead to、make、damage、help。</p>
    </NoteSlide>
    <NoteSlide title="說人的反應">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="Some young people can feel bored in museums."
              :marks="['feel']"
            /><span class="translation">有些年輕人在博物館裡可能會覺得無聊。</span></span
          >
        </div>
      </div>
      <p class="remark">常用 feel、get、become。</p>
    </NoteSlide>
    <NoteSlide title="can 後面接原形動詞" mark="can">
      <NoteFix
        wrong="Too much sugar can causes problems."
        right="Too much sugar can cause problems."
        :fix="['cause']"
      />
    </NoteSlide>
    <NoteSlide title="can 後面直接接原形動詞" mark="can">
      <NoteFix
        wrong="Stress can to make you ill."
        right="Stress can make you ill."
        :fix="['make']"
      />
    </NoteSlide>
    <NoteSlide title="lead to 的 to 是介系詞，後面接名詞">
      <NoteFix
        wrong="Lack of sleep can lead to make mistakes."
        right="Lack of sleep can lead to mistakes."
        :fix="['mistakes.']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
