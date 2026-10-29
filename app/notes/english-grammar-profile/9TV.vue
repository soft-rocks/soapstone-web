<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-bravado, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + dare / daren't / dare not + 原形動詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">dare</span>
          <span>有膽量去做。</span>
        </div>
        <div>
          <span class="term">daren't / dare not</span>
          <span>沒有膽量去做。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>需要勇氣的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="說需要勇氣的事">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="She didn't dare say no to her boss." :marks="['dare']" /><span
              class="translation"
              >她不敢拒絕她的老闆。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">dare 常用在有風險、會被別人反對、或讓人害怕的事。</p>
    </NoteSlide>
    <NoteSlide title="說某人很勇敢">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="He was the only one who dared to jump." :marks="[]" /><span
              class="translation"
              >他是唯一敢跳下去的人。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">肯定句常用一般動詞 dare to，強調某人有膽量。</p>
    </NoteSlide>
    <NoteSlide title="一般動詞的 dare 說過去的事要用 dared">
      <NoteFix
        wrong="Yesterday he dare to ask her out."
        right="Yesterday he dared to ask her out."
        :fix="['dared']"
      />
    </NoteSlide>
    <NoteSlide title="daren't 後面直接接原形動詞" mark="daren't">
      <NoteFix
        wrong="They daren't to give up their cars."
        right="They daren't give up their cars."
        :fix="['give']"
      />
    </NoteSlide>
    <NoteSlide title="didn't dare 後面接原形動詞，或接 to 加原形動詞">
      <NoteFix
        wrong="I didn't dare told anyone."
        right="I didn't dare tell anyone."
        :fix="['tell']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
