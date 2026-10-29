<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-negative, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + cannot + 原形動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'cannot', kind: 'key', ring: true },
          { t: 'come', role: '原形動詞' },
          { t: 'to see you.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="cannot、can't、原形動詞" mark="cannot">
      <div class="rows is-labeled">
        <div>
          <span class="term">cannot</span>
          <span>寫成一個字。比較正式，書面常用。</span>
        </div>
        <div>
          <span class="term">can't</span>
          <span>cannot 的縮寫。口語和一般的信常用。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>做不到或不可以做的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="cannot 和 can't">
      <div class="rows is-labeled">
        <div>
          <span class="term">cannot</span>
          <span
            ><NoteMark sentence="I cannot come to the meeting." :marks="[]" /><span
              class="translation"
              >我沒辦法來開會。</span
            ></span
          >
        </div>
        <div>
          <span class="term">can't</span>
          <span
            ><NoteMark sentence="I can't find my keys." :marks="[]" /><span class="translation"
              >我找不到我的鑰匙。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="不可以">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="You can't park here." :marks="['can\'t']" /><span
              class="translation"
              >你不可以把車停在這裡。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">can't 也可以說不被允許的事。</p>
    </NoteSlide>
    <NoteSlide title="not 放在 can 後面，動詞前面">
      <NoteFix
        wrong="I can come not to the party."
        right="I can't come to the party."
        :fix="['can\'t', 'to']"
      />
    </NoteSlide>
    <NoteSlide title="can 的否定不用 don't，直接在 can 後面加 not">
      <NoteFix wrong="I don't can swim." right="I can't swim." :fix="['can\'t']" />
    </NoteSlide>
    <NoteSlide title="can't 後面直接接原形動詞">
      <NoteFix wrong="She can't to drive." right="She can't drive." :fix="['drive.']" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
