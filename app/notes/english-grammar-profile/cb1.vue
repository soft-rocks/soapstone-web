<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-form-use-with-already, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="already 強調已經做完，常比預期早" mark="already">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'She has', role: '主詞 + has' },
          { t: 'already', role: '比預期早', kind: 'key', ring: true },
          { t: 'won', role: '過去分詞', kind: 'key' },
          { t: 'three gold medals at international tournaments.', kind: 'dim' },
        ]"
      />
      <p class="translation">她已經在國際賽事拿過三面金牌了。</p>
      <p class="remark">這位選手今年才十九歲。</p>
    </NoteSlide>

    <NoteSlide title="already 放在句尾，常表示驚訝" mark="already">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I only gave you the test ten minutes ago.', kind: 'dim' },
          { t: 'Have you finished', kind: 'dim' },
          { t: 'already?', role: '句尾', kind: 'key', ring: true },
        ]"
      />
      <p class="translation">我十分鐘前才把考卷給你。你已經寫完了？</p>
    </NoteSlide>

    <NoteSlide title="好幾件做完的事，可以只在第一件加 already" mark="already">
      <NoteMark
        sentence="The party is ready to go. I've already booked the hall and sent the invitations."
        :marks="['already', 'booked', 'sent']"
      />
      <p class="translation">派對都準備好了。我已經訂好場地，也寄出邀請函了。</p>
    </NoteSlide>

    <NoteSlide title="already 不放在 won 和受詞中間" mark="has already">
      <NoteFix
        wrong="My cousin has won already three races this season."
        right="My cousin has already won three races this season."
        fix="has already"
      />
    </NoteSlide>

    <NoteSlide title="否定句用 yet，不用 already" mark="already">
      <NoteFix
        wrong="Dad hasn't already painted the garden fence."
        right="Dad hasn't painted the garden fence yet."
        fix="yet."
      />
    </NoteSlide>

    <NoteSlide title="有 last week，用過去簡單式" mark="won">
      <NoteFix
        wrong="We have already bought the concert tickets last week."
        right="We bought the concert tickets last week."
        fix="bought"
      />
    </NoteSlide>

    <NoteSlide title="yet 用在問句和否定句，放在句尾" mark="already">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'The match is on Saturday.', kind: 'dim' },
          { t: 'Have you bought the tickets', kind: 'dim' },
          { t: 'yet?', role: '句尾', kind: 'key', ring: true },
        ]"
      />
      <p class="translation">比賽在星期六。你買票了沒？</p>
    </NoteSlide>

    <NoteSlide title="問句加 already，表示覺得對方做得比預期早" mark="already">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'The trip isn\'t until July.', kind: 'dim' },
          { t: 'Have you', kind: 'dim' },
          { t: 'already', role: '比預期早', kind: 'key', ring: true },
          { t: 'bought the tickets?', kind: 'dim' },
        ]"
      />
      <p class="translation">旅行要到七月才去。你已經買好票了？</p>
    </NoteSlide>

    <NoteSlide title="still 加否定句，說比預期晚" mark="already">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'The concert is tomorrow, and', kind: 'dim' },
          { t: 'I', kind: 'dim' },
          { t: 'still haven\'t', role: '比預期晚', kind: 'key', ring: true },
          { t: 'bought the tickets.', kind: 'dim' },
        ]"
      />
      <p class="translation">演唱會就在明天，我到現在還沒買票。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
