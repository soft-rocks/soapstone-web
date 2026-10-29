<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// future-use-suggestions-obligation, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide
      title="主詞 + suggest / recommend / insist / ask / propose + that + 主詞 + 現在簡單式"
    >
      <NoteWords
        :size="24"
        :parts="[
          { t: 'We would', role: '主詞' },
          { t: 'suggest', kind: 'key', ring: true },
          { t: 'that', kind: 'key', ring: true },
          { t: 'our', role: '主詞' },
          { t: 'management takes a closer look.', role: '現在簡單式' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="suggest / recommend / propose、insist / ask / demand、現在簡單式">
      <div class="rows is-labeled">
        <div>
          <span class="term">suggest / recommend / propose</span>
          <span>建議。</span>
        </div>
        <div>
          <span class="term">insist / ask / demand</span>
          <span>要求。</span>
        </div>
        <div>
          <span class="term">現在簡單式</span>
          <span>英式英文常用。主詞是 he、she、it 時，動詞加 -&#x2060;s。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>正式的寫法。不論主詞是什麼，都用原形動詞，叫做假設語氣。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="現在簡單式和原形動詞" mark="We">
      <div class="rows is-labeled">
        <div>
          <span class="term">現在簡單式</span>
          <span
            ><NoteMark sentence="I suggest that he takes the train." :marks="['I']" /><span
              class="translation"
              >我建議他搭火車。</span
            ></span
          >
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span
            ><NoteMark sentence="I suggest that he take the train." :marks="['I']" /><span
              class="translation"
              >我建議他改搭火車。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">兩種寫法意思一樣。主詞是 I、we、you、they 時，兩種寫法看起來一樣。</p>
    </NoteSlide>
    <NoteSlide title="would suggest / would recommend" mark="would">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="We would recommend that you book early." :marks="['would']" /><span
              class="translation"
              >我們建議您提早訂位。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">would 讓建議聽起來比較客氣。</p>
    </NoteSlide>
    <NoteSlide title="suggest 後面不接「受詞 + to + 原形動詞」" mark="suggest">
      <NoteFix
        wrong="I suggest you to take the train."
        right="I suggest that you take the train."
        :fix="['that', 'take']"
      />
    </NoteSlide>
    <NoteSlide title="recommend 後面不直接接 to 和原形動詞" mark="that">
      <NoteFix
        wrong="I recommend to go to the theatre."
        right="I recommend that we go to the theatre."
        :fix="['that we']"
      />
    </NoteSlide>
    <NoteSlide title="子句裡要有完整的動詞，主詞後面不直接接動詞-ing">
      <NoteFix
        wrong="I recommend that we booking the tickets today."
        right="I recommend that we book the tickets today."
        :fix="['book']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
