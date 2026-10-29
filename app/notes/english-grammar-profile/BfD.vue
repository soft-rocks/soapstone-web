<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-possibility, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + can + 原形動詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">can</span>
          <span>某件事有辦法做，或有可能。</span>
        </div>
        <div>
          <span class="term">can't / cannot</span>
          <span>某件事沒辦法做，或不可能。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>那件事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="說一個地方可以做什麼">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="At the shop you can find milk and juice, but you can't buy meat."
              :marks="[]"
            /><span class="translation">那家店可以買到牛奶和果汁，但是買不到肉。</span></span
          >
        </div>
      </div>
      <p class="remark">說在某個地方能找到或買到什麼。</p>
    </NoteSlide>
    <NoteSlide title="說時間上能不能安排">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="I can't see you today. I can see you on Friday."
              :marks="[]"
            /><span class="translation">我今天沒辦法見你，星期五可以。</span></span
          >
        </div>
      </div>
      <p class="remark">說某件事因為時間或情況做不到。</p>
    </NoteSlide>
    <NoteSlide title="can 的否定是 can't 或 cannot" mark="can't">
      <NoteFix
        wrong="I don't can see you today."
        right="I can't see you today."
        :fix="['can\'t']"
      />
    </NoteSlide>
    <NoteSlide title="can't 後面接原形動詞" mark="can't">
      <NoteFix
        wrong="You can't buying meat there."
        right="You can't buy meat there."
        :fix="['buy']"
      />
    </NoteSlide>
    <NoteSlide title="can't 只有一個 n" mark="can't">
      <NoteFix
        wrong="I cann't see you today because I'm sick."
        right="I can't see you today because I'm sick."
        :fix="['can\'t']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
