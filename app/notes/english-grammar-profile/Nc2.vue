<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-invitations-with-like, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="I / We + would like to invite + 人 + to + 活動 / 地方">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Dear Neighbours,', kind: 'dim' },
          { t: 'I', kind: 'key', ring: true },
          { t: 'would like to invite', kind: 'key', ring: true },
          { t: 'you', role: '人' },
          { t: 'to', kind: 'key', ring: true },
          { t: 'my home for dinner.', role: '活動 / 地方' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="would like to invite、人、to + 活動或地方" mark="you">
      <div class="rows is-labeled">
        <div>
          <span class="term">would like to invite</span>
          <span>想邀請。很有禮貌。</span>
        </div>
        <div>
          <span class="term">人</span>
          <span>被邀請的人，像 you、all of you。</span>
        </div>
        <div>
          <span class="term">to + 活動或地方</span>
          <span>邀請去哪裡或參加什麼。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="加上時間和地點">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="I would like to invite you to dinner at my house on Saturday at half past seven."
              :marks="[]"
            /><span class="translation">我想邀請你星期六七點半來我家吃晚餐。</span></span
          >
        </div>
      </div>
      <p class="remark">邀請常接著說時間和地點。</p>
    </NoteSlide>
    <NoteSlide title="邀請去某個活動，要加 to" mark="to">
      <NoteFix
        wrong="I'd like to invite you my party."
        right="I'd like to invite you to my party."
        :fix="['to#2']"
      />
    </NoteSlide>
    <NoteSlide title="would like 後面接動詞時要加 to" mark="would like">
      <NoteFix
        wrong="I would like invite you to dinner."
        right="I would like to invite you to dinner."
        :fix="['to']"
      />
    </NoteSlide>
    <NoteSlide title="邀請去某個地方用 to" mark="to">
      <NoteFix
        wrong="We'd like to invite you for our house."
        right="We'd like to invite you to our house."
        :fix="['to#2']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
