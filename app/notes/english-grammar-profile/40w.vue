<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-invitations, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="You + must + come + and + 原形動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'You', kind: 'key', ring: true },
          { t: 'must', kind: 'key', ring: true },
          { t: 'come', kind: 'key', ring: true },
          { t: 'and', kind: 'key', ring: true },
          { t: 'stay', role: '原形動詞' },
          { t: 'in our house too.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="you must come、and + 原形動詞" mark="stay">
      <div class="rows is-labeled">
        <div>
          <span class="term">you must come</span>
          <span>你一定要來。熱情的邀請。</span>
        </div>
        <div>
          <span class="term">and + 原形動詞</span>
          <span>來做的事，像 stay、see、visit。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="邀請和義務" mark="You must come">
      <div class="rows is-labeled">
        <div>
          <span class="term">邀請</span>
          <span
            ><NoteMark
              sentence="You must come and visit us in Wales!"
              :marks="['You must come']"
            /><span class="translation">你一定要來威爾斯看我們！</span></span
          >
        </div>
        <div>
          <span class="term">義務</span>
          <span
            ><NoteMark sentence="You must come to the meeting." :marks="['You must come']" /><span
              class="translation"
              >你必須來開會。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">
        You must come 說邀請時，語氣很熱情。說義務時，語氣很嚴肅。看說話的情況判斷。
      </p>
    </NoteSlide>
    <NoteSlide title="come 後面接地方或活動，要加 to" mark="come">
      <NoteFix
wrong="You must come our barbecue next Sunday."
        right="You must come to our barbecue next Sunday." :fix="['to']" />
    </NoteSlide>
    <NoteSlide title="must 後面直接接原形動詞" mark="must">
      <NoteFix
        wrong="You must to come and see us at the weekend."
        right="You must come and see us at the weekend."
        :fix="['come']"
      />
    </NoteSlide>
    <NoteSlide title="and 後面接原形動詞" mark="and">
      <NoteFix
        wrong="You must come and staying with us."
        right="You must come and stay with us."
        :fix="['stay']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
