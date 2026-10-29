<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// verbs-form-reporting-verbs-direct-object-that-clause-1055, as slides, in the order of
// content.md. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="that 子句是 realized 的直接受詞" mark="realized that">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'When I got there,', role: '時間子句', kind: 'dim' },
          { t: 'I', role: '主詞', kind: 'dim' },
          { t: 'realized', role: '動詞', kind: 'key' },
          { t: 'that', kind: 'key' },
          { t: 'I wasn\'t the only winner.', role: '子句' },
        ]"
      />
      <p class="translation">我到了那裡才發現，得獎的不只我一個。</p>
    </NoteSlide>

    <NoteSlide title="心理動詞和轉述動詞都可以接 that 子句" mark="realized">
      <div class="rows is-labeled">
        <div>
          <span class="term">心理動詞</span>
          <span
            ><NoteMark
              sentence="I understand that you're angry, but please let me explain."
              :marks="['understand']"
            /><span class="translation">我理解你很生氣，可是請讓我解釋。</span></span
          >
        </div>
        <div>
          <span class="term">轉述動詞</span>
          <span
            ><NoteMark
              sentence="He finally admitted that he had eaten the last biscuit."
              :marks="['admitted']"
            /><span class="translation">他終於承認最後一塊餅乾是他吃的。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="動詞用過去式時，子句常跟著用過去式" mark="wasn't">
      <div class="rows is-labeled">
        <div>
          <span class="term">過去式</span>
          <span
            ><NoteMark
              sentence="She explained that the train had left."
              :marks="['explained', 'had left']"
            /><span class="translation">她解釋說火車已經開走了。</span></span
          >
        </div>
        <div>
          <span class="term">現在還是真的</span>
          <span
            ><NoteMark
              sentence="I totally understand that you don't want to go on holiday with your parents."
              :marks="['don\'t want']"
            /><span class="translation">我完全理解你不想和爸媽去度假。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="suggest 的子句用原形動詞，或 should 加原形動詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">原形動詞</span>
          <span
            ><NoteMark
              sentence="The doctor suggested that he rest for a week."
              :marks="['rest']"
            /><span class="translation">醫生建議他休息一個星期。</span></span
          >
        </div>
        <div>
          <span class="term">should + 原形動詞</span>
          <span
            ><NoteMark
              sentence="The doctor suggested that he should rest for a week."
              :marks="['should rest']"
            /><span class="translation">醫生建議他休息一個星期。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="動詞後面接子句時用 that，不用 to" mark="that">
      <NoteFix
        wrong="I realized to I had lost my wallet."
        right="I realized that I had lost my wallet."
        fix="that"
      />
    </NoteSlide>

    <NoteSlide title="explain 要說出聽話的人時，在人前面加 to">
      <NoteFix
        wrong="He explained me that the shop was closed."
        right="He explained to me that the shop was closed."
        fix="to me"
      />
    </NoteSlide>

    <NoteSlide title="suggest 後面不接人加 to 不定詞">
      <NoteFix
        wrong="She suggested me to take a taxi."
        right="She suggested that I take a taxi."
        fix="that I take"
      />
    </NoteSlide>

    <NoteSlide title="that 後面的子句要有主詞" mark="I#3">
      <NoteFix
        wrong="He admitted that made a mistake."
        right="He admitted that he made a mistake."
        fix="he made"
      />
    </NoteSlide>

    <NoteSlide title="主詞相同時，decide 常接 to 不定詞" mark="realized">
      <NoteMark sentence="We decided to stay at home." :marks="['to stay']" />
      <p class="translation">我們決定待在家。</p>
    </NoteSlide>

    <NoteSlide title="名詞後面的 that 是關係代名詞" mark="that">
      <NoteMark sentence="I remember the song that you sang." :marks="['the song that']" />
      <p class="translation">我記得你唱的那首歌。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
