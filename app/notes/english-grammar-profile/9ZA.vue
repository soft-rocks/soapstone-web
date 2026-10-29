<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// questions-form-with-auxiliary-have, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="完成式的 wh- 疑問句把 have 放在主詞前面">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'What', role: '疑問詞' },
          { t: 'have', role: 'have', kind: 'key' },
          { t: 'you', role: '主詞' },
          { t: 'brought', role: '過去分詞', kind: 'key' },
          { t: 'for me?', kind: 'dim' },
        ]"
      />
      <p class="translation">你帶了什麼東西給我？</p>
    </NoteSlide>

    <NoteSlide title="主詞是 he、she、it 時用 has，過去完成式用 had" mark="have">
      <div class="rows is-labeled">
        <div>
          <span class="term">has</span>
          <span
            ><NoteMark sentence="Where has Dad gone?" :marks="['has']" /><span class="translation"
              >爸爸去哪裡了？</span
            ></span
          >
        </div>
        <div>
          <span class="term">had</span>
          <span
            ><NoteMark
              sentence="Where had you been before you came to London?"
              :marks="['had']"
            /><span class="translation">你來倫敦之前住過哪裡？</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="How have you been? 問的是上次見面到現在" mark="have">
      <NoteWords
        :size="32"
        :parts="[
          { t: 'How', role: '疑問詞' },
          { t: 'have you been?', role: '最近好嗎', kind: 'key' },
        ]"
      />
      <p class="translation">你最近好嗎？</p>
    </NoteSlide>

    <NoteSlide title="have 後面接過去分詞" mark="brought">
      <NoteFix wrong="What have you buyed?" right="What have you bought?" fix="bought" />
    </NoteSlide>

    <NoteSlide title="have 放在主詞前面" mark="have you">
      <NoteFix wrong="Where you have been?" right="Where have you been?" fix="have you" />
    </NoteSlide>

    <NoteSlide title="主詞是 she 時用 has" mark="have">
      <NoteFix wrong="What have she done?" right="What has she done?" fix="has" />
    </NoteSlide>

    <NoteSlide title="完成式用 have，不用 did" mark="have">
      <NoteFix wrong="What did you done?" right="What have you done?" fix="have" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
