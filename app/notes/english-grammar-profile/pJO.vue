<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-use-purpose-result, as slides, in the order of content.md. One point per slide: the title names it, the
// diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="so that 引出目的，子句裡常用情態動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Could you please give me some extra exercises', role: '主要子句' },
          { t: 'so that', role: '為了、好讓', kind: 'key' },
          { t: 'I can cover the work I missed?', role: '主詞 + can + 原形動詞' },
        ]"
      />
      <p class="translation">可以請你多給我一些練習，讓我把缺的進度補上嗎？</p>
    </NoteSlide>

    <NoteSlide title="子句的主詞可以和主要子句不同" mark="so that">
      <div class="rows is-labeled">
        <div>
          <span class="term">同一個主詞</span>
          <span
            ><NoteMark
              sentence="I'm leaving early so that I can avoid the traffic."
              :marks="['so that I can']"
            /><span class="translation">我要早點出發，才能避開塞車。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="口語常說 so，正式的書面語用 in order that" mark="so that">
      <div class="rows is-labeled">
        <div>
          <span class="term">so</span>
          <span
            ><NoteMark sentence="Turn the music down so the baby can sleep." :marks="['so']" /><span
              class="translation"
              >把音樂關小聲一點，讓寶寶可以睡覺。</span
            ></span
          >
        </div>
        <div>
          <span class="term">in order that</span>
          <span
            ><NoteMark
              sentence="We sent the agenda early in order that everyone could prepare."
              :marks="['in order that']"
            /><span class="translation">我們提早寄出議程，好讓大家可以準備。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="主要子句是過去式，so that 子句用 could 或 would" mark="can">
      <div class="rows is-labeled">
        <div>
          <span class="term">過去</span>
          <span
            ><NoteMark
              sentence="She wrote the number on her hand so that she wouldn't forget it."
              :marks="['wrote', 'wouldn\'t']"
            /><span class="translation">她把號碼寫在手上，免得忘記。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="so that 後面接有主詞和動詞的子句" mark="I can cover">
      <NoteFix
        wrong="I saved money so that to buy a bike."
        right="I saved money so that I could buy a bike."
        fix="I could buy"
      />
    </NoteSlide>

    <NoteSlide title="主要子句是過去式，so that 子句用 could" mark="can">
      <NoteFix
        wrong="I left a note so that she can find the key yesterday."
        right="I left a note yesterday so that she could find the key."
        fix="could"
      />
    </NoteSlide>

    <NoteSlide title="in order that 後面接子句，只接原形動詞用 in order to">
      <NoteFix
        wrong="We arrived early in order that get good seats."
        right="We arrived early in order that we could get good seats."
        fix="we could get"
      >
        只接原形動詞要寫 <code>in order to get good seats</code>。
      </NoteFix>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
