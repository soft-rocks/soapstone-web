<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-affirmative-487, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="I / you / we / they + have to + 原形動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'This weekend', kind: 'dim' },
          { t: 'I', kind: 'key', ring: true },
          { t: 'have to', kind: 'key', ring: true },
          { t: 'go', role: '原形動詞' },
          { t: 'to a party.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="have to / has to、have got to / has got to、原形動詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">have to / has to</span>
          <span>必須。</span>
        </div>
        <div>
          <span class="term">have got to / has got to</span>
          <span>必須。比較口語，常用在英式英文。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>必須做的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="縮寫">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="We've got to bring two pencils." :marks="[]" /><span
              class="translation"
              >我們必須帶兩支鉛筆。</span
            ></span
          >
        </div>
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="She's got to leave at six." :marks="[]" /><span class="translation"
              >她必須六點離開。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">have got to 常縮寫成 've got to，has got to 常縮寫成 's got to。</p>
    </NoteSlide>
    <NoteSlide title="過去和未來">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="I had to wait an hour." :marks="['had to']" /><span
              class="translation"
              >我必須等一個小時。</span
            ></span
          >
        </div>
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="You'll have to ask your mum." :marks="[]" /><span
              class="translation"
              >你必須問你媽媽。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">過去用 had to。未來用 will have to。</p>
    </NoteSlide>
    <NoteSlide title="主詞是 he、she、it 或單數名詞，用 has to">
      <NoteFix
        wrong="My brother have to work on Saturdays."
        right="My brother has to work on Saturdays."
        :fix="['has']"
      />
    </NoteSlide>
    <NoteSlide title="to 後面接原形動詞" mark="to">
      <NoteFix
        wrong="I have to cleaning my room."
        right="I have to clean my room."
        :fix="['clean']"
      />
    </NoteSlide>
    <NoteSlide title="have got 後面要接 to 和原形動詞" mark="to">
      <NoteFix
        wrong="You've got bring a towel."
        right="You've got to bring a towel."
        :fix="['to']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
