<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// future-use-be-due-to, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + was / were + due to + 原形動詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">was / were</span>
          <span>be 的過去式，跟著主詞變化。</span>
        </div>
        <div>
          <span class="term">due to</span>
          <span>按照時間表或安排，預定要發生。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>預定的動作。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="排定的事後來怎麼了">
      <div class="rows is-labeled">
        <div>
          <span class="term">照時間發生</span>
          <span
            ><NoteMark
              sentence="My plane was due to leave at eight, and it left on time."
              :marks="['was due to']"
            /><span class="translation">我的飛機預定八點起飛，結果準時起飛了。</span></span
          >
        </div>
        <div>
          <span class="term">沒有照時間發生</span>
          <span
            ><NoteMark
              sentence="The concert was due to start at seven, but it started an hour late."
              :marks="['was due to']"
            /><span class="translation">音樂會預定七點開始，結果晚了一個小時。</span></span
          >
        </div>
      </div>
      <p class="remark">was due to 只說當時的安排。事情後來有沒有照時間發生，要看上下文。</p>
    </NoteSlide>
    <NoteSlide title="被動">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="The factory that was due to be built near the lake was dangerous."
              :marks="[]"
            /><span class="translation">原本預定蓋在湖邊的那座工廠很危險。</span></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="說過去的安排，be 用 was 或 were" mark="were">
      <NoteFix
        wrong="Last week the meeting is due to start at three."
        right="Last week the meeting was due to start at three."
        :fix="['was']"
      />
    </NoteSlide>
    <NoteSlide title="過去的意思由 was 表示" mark="to">
      <NoteFix
        wrong="The bus was due to arrived at noon."
        right="The bus was due to arrive at noon."
        :fix="['arrive']"
      />
    </NoteSlide>
    <NoteSlide title="被動是 due to be 加過去分詞">
      <NoteFix
        wrong="The road was due to opened in May."
        right="The road was due to be opened in May."
        :fix="['be']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
