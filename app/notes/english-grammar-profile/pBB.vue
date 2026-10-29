<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// present-use-suggestions, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="Why don't you 不是問原因，是給建議">
      <NoteWords
        :size="32"
        :parts="[
          { t: 'Why don\'t you', role: 'Why don\'t you', kind: 'key', ring: true },
          { t: 'wear', role: '原形動詞', kind: 'key' },
          { t: 'your black suit?', role: '受詞', kind: 'dim' },
        ]"
      />
      <p class="translation">你何不穿你那套黑色西裝？</p>
    </NoteSlide>
    <NoteSlide title="Why don't we 建議大家一起做" mark="Why don't you">
      <div class="rows is-labeled">
        <div>
          <span class="term">you</span>
          <span
            ><NoteMark
              sentence="Why don't you ask your teacher?"
              :marks="['Why don\'t you']"
            /><span class="translation">你何不問問你的老師？</span></span
          >
        </div>
        <div>
          <span class="term">we</span>
          <span
            ><NoteMark sentence="Why don't we go to the beach?" :marks="['Why don\'t we']" /><span
              class="translation"
              >我們何不去海邊？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="if you want 讓對方決定要不要" mark="wear">
      <div class="rows is-labeled">
        <div>
          <span class="term">want</span>
          <span
            ><NoteMark
              sentence="I can drive you to the station, if you want."
              :marks="['if you want.']"
            /><span class="translation">你要的話，我可以載你去車站。</span></span
          >
        </div>
        <div>
          <span class="term">like</span>
          <span
            ><NoteMark
              sentence="We could have dinner after the film, if you like."
              :marks="['if you like.']"
            /><span class="translation">你想的話，我們看完電影可以去吃晚餐。</span></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="同一個句型也能真的問原因" mark="Why don't you">
      <div class="rows is-labeled">
        <div>
          <span class="term">建議</span>
          <span
            ><NoteMark sentence="Why don't you take a break?" :marks="['take']" /><span
              class="translation"
              >你何不休息一下？</span
            ></span
          >
        </div>
        <div>
          <span class="term">問原因</span>
          <span
            ><NoteMark sentence="Why don't you like fish?" :marks="['like']" /><span
              class="translation"
              >你為什麼不喜歡吃魚？</span
            ></span
          >
        </div>
      </div>
      <p class="remark">看上下文和語氣分辨。</p>
    </NoteSlide>
    <NoteSlide title="don't 後面接原形動詞" mark="wear">
      <NoteFix
        wrong="Why don't you trying the new café?"
        right="Why don't you try the new café?"
        :fix="['try']"
      />
    </NoteSlide>
    <NoteSlide title="主詞是 we，用 don't" mark="Why don't you">
      <NoteFix
        wrong="Why doesn't we go to the park?"
        right="Why don't we go to the park?"
        :fix="['don\'t']"
      />
    </NoteSlide>
    <NoteSlide title="句尾用問號" mark="Why don't you">
      <NoteFix
        wrong="Why don't we take a taxi."
        right="Why don't we take a taxi?"
        :fix="['taxi?']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
