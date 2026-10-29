<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// future-use-questions-about-the-future-417, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="(wh- 疑問詞) + am / is / are + 主詞 + 動詞-ing ...?" mark="When">
      <div class="rows is-labeled">
        <div>
          <span class="term">wh- 疑問詞</span>
          <span>像 when、what kind of、how many、which。</span>
        </div>
        <div>
          <span class="term">動詞&#x2060;-&#x2060;ing</span>
          <span>安排好的計畫或活動。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="問活動的細節">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="What kind of materials are you providing?" :marks="[]" /><span
              class="translation"
              >你們會提供哪一類的資料？</span
            ></span
          >
        </div>
      </div>
      <p class="remark">問活動會提供什麼、有多少人參加。</p>
    </NoteSlide>
    <NoteSlide title="Are you planning to">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="Are you planning to visit Japan?"
              :marks="['Are you planning to']"
            /><span class="translation">你有打算去日本嗎？</span></span
          >
        </div>
      </div>
      <p class="remark">Are you planning to 加原形動詞，問對方有沒有這個打算。</p>
    </NoteSlide>
    <NoteSlide title="疑問句裡，be 動詞放在主詞前面">
      <NoteFix
        wrong="When the festival is starting?"
        right="When is the festival starting?"
        :fix="['is', 'starting?']"
      />
    </NoteSlide>
    <NoteSlide title="planning 後面接 to 和原形動詞">
      <NoteFix
        wrong="Are you planning visit Japan?"
        right="Are you planning to visit Japan?"
        :fix="['to']"
      />
    </NoteSlide>
    <NoteSlide title="現在進行式的疑問句用 be 動詞，不用 do 或 does">
      <NoteFix
        wrong="When does the course starting?"
        right="When is the course starting?"
        :fix="['is']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
