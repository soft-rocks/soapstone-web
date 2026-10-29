<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// future-form-affirmative, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="正式的郵件寫完整的 will" mark="will">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'We', role: '主詞', kind: 'dim' },
          { t: 'will be', role: 'will be', kind: 'key', ring: true },
          { t: 'waiting', role: '動詞-ing', kind: 'key' },
          { t: 'for you at the River\'s Cafe at 6:30.', kind: 'dim' },
        ]"
      />
      <p class="translation">我們 6:30 會在 River's Cafe 等你。</p>
      <p class="remark">對方到的時候，等的動作已經開始。</p>
    </NoteSlide>

    <NoteSlide title="主詞是 I 和 we 時，will 可以換成 shall" mark="will">
      <NoteFork
        stem="We"
        :branches="[
          {
            head: 'will be',
            rest: 'driving to Scotland',
            meaning: '每個人稱',
            zh: '我們夏天會開車去蘇格蘭。',
          },
          {
            head: 'shall be',
            rest: 'driving to Scotland',
            meaning: '只用在 I 和 we，英式正式說法',
            zh: '我們夏天會開車去蘇格蘭。',
          },
        ]"
      />
    </NoteSlide>

    <NoteSlide title="will 和 shall 都縮寫成 'll" mark="will">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I\'ll', role: 'I will 或 I shall', kind: 'key', ring: true },
          { t: 'be working', role: 'be + 動詞-ing' },
          { t: 'on Saturday.', kind: 'dim' },
        ]"
      />
      <p class="translation">我星期六會上班。</p>
    </NoteSlide>

    <NoteSlide title="shall 後面直接接原形的 be" mark="will be">
      <NoteFix
        wrong="We shall to be waiting for you at the station."
        right="We shall be waiting for you at the station."
        fix="shall be"
      />
    </NoteSlide>

    <NoteSlide title="shall 後面先接 be，再接動詞-ing" mark="be">
      <NoteFix
        wrong="I shall attending class on Monday."
        right="I shall be attending class on Monday."
        fix="be attending"
      />
    </NoteSlide>

    <NoteSlide title="shall 後面的 be 用原形" mark="be">
      <NoteFix
        wrong="We shall are leaving at dawn."
        right="We shall be leaving at dawn."
        fix="be"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
