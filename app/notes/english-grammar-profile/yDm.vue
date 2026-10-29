<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-in-discussion, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="Need + I / we + 原形動詞？">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Need', kind: 'key', ring: true },
          { t: 'I', kind: 'key', ring: true },
          { t: 'go', role: '原形動詞' },
          { t: 'on?', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide
      title="Need I go on? / Need I say more?、Need you + 原形動詞？、Need we + 原形動詞？"
    >
      <div class="rows is-labeled">
        <div>
          <span class="term">Need I go on? / Need I say more?</span>
          <span>理由已經夠了。</span>
        </div>
        <div>
          <span class="term">Need you + 原形動詞？</span>
          <span>你有必要這樣做嗎？表示不贊成。</span>
        </div>
        <div>
          <span class="term">Need we + 原形動詞？</span>
          <span>我們有必要……嗎？表示懷疑。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="表示不贊成">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="Need you work in this way?" :marks="['Need you']" /><span
              class="translation"
              >你有必要這樣工作嗎？</span
            ></span
          >
        </div>
      </div>
      <p class="remark">Need you …？ 委婉地批評對方的做法。</p>
    </NoteSlide>
    <NoteSlide title="表示懷疑">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="Need we spend so much on the project?" :marks="['Need we']" /><span
              class="translation"
              >我們有必要在這個計畫上花這麼多錢嗎？</span
            ></span
          >
        </div>
      </div>
      <p class="remark">Need we …？ 在討論裡提出懷疑，請大家重新想一想。</p>
    </NoteSlide>
    <NoteSlide title="Need 開頭的反問句，need 後面直接接原形動詞" mark="Need">
      <NoteFix wrong="Need I to go on?" right="Need I go on?" :fix="['go']" />
    </NoteSlide>
    <NoteSlide title="問句把 need 放在主詞前面" mark="Need">
      <NoteFix wrong="I need say more?" right="Need I say more?" :fix="['Need', 'say']" />
    </NoteSlide>
    <NoteSlide title="need 後面接原形動詞" mark="Need">
      <NoteFix
        wrong="Need you shouting like that?"
        right="Need you shout like that?"
        :fix="['shout']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
