<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// verbs-form-use-would-prefer-to-politeness, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words
// of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="would prefer 後面接 to 和原形動詞">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'I', role: '主詞', kind: 'dim' },
          { t: 'would prefer', role: '動詞', kind: 'key' },
          { t: 'to pay', role: 'to + 原形動詞', kind: 'key' },
          { t: 'in cash.', kind: 'dim' },
        ]"
      />
      <p class="translation">我比較希望用現金付款。</p>
      <p class="remark"><code>would prefer to</code> 比 <code>want to</code> 客氣。</p>
    </NoteSlide>

    <NoteSlide title="口語常把 would 縮寫成 'd" mark="would">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I\'d', role: 'I would', kind: 'key', ring: true },
          { t: 'prefer', role: '原形' },
          { t: 'to sit near the exit.', role: 'to + 原形動詞' },
        ]"
      />
      <p class="translation">我比較想坐出口附近。</p>
    </NoteSlide>

    <NoteSlide title="would prefer not to 是客氣的拒絕" mark="to">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'I\'d prefer', kind: 'dim' },
          { t: 'not', role: '否定 talk', kind: 'key', ring: true },
          { t: 'to talk about it.', role: 'to + 原形動詞', kind: 'key' },
        ]"
      />
      <p class="translation">我不太想談這件事。</p>
      <p class="remark">說話的人不想做那件事，可是不直接說 <code>no</code>。</p>
    </NoteSlide>

    <NoteSlide title="rather than 後面接另一個選擇，用原形動詞" mark="to pay">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I\'d prefer', kind: 'dim' },
          { t: 'to cycle', role: '想做的事', kind: 'key' },
          { t: 'rather than', role: '連接詞', kind: 'key' },
          { t: 'drive to work.', role: '原形動詞' },
        ]"
      />
      <p class="translation">我比較想騎腳踏車上班，不想開車。</p>
    </NoteSlide>

    <NoteSlide title="問句把 would 放到主詞前面" mark="would">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Would', role: '助動詞', kind: 'key', ring: true },
          { t: 'you', role: '主詞' },
          { t: 'prefer', role: '原形' },
          { t: 'to meet on Monday?', role: 'to + 原形動詞' },
        ]"
      />
      <p class="translation">你比較想星期一見面嗎？</p>
    </NoteSlide>

    <NoteSlide title="would 後面的 prefer 用原形" mark="prefer">
      <NoteFix
        wrong="She would prefers to travel by boat."
        right="She would prefer to travel by boat."
        fix="prefer"
      />
    </NoteSlide>

    <NoteSlide title="to 後面接原形動詞，不接動詞-ing" mark="pay">
      <NoteFix
        wrong="I would prefer to staying in a hotel."
        right="I would prefer to stay in a hotel."
        fix="stay"
      >
        這個 <code>to</code> 是不定詞的 <code>to</code>。
      </NoteFix>
    </NoteSlide>

    <NoteSlide title="would prefer 後面接動詞時，動詞前面加 to" mark="to">
      <NoteFix wrong="We'd prefer go by train." right="We'd prefer to go by train." fix="to" />
    </NoteSlide>

    <NoteSlide title="prefer 加動詞-ing 說平常的喜好" mark="would prefer">
      <NoteMark
        sentence="I prefer swimming in the sea to swimming in a pool."
        :marks="['prefer swimming']"
      />
      <p class="translation">比起在游泳池游泳，我比較喜歡在海裡游。</p>
    </NoteSlide>

    <NoteSlide title="would rather 後面接原形動詞，不加 to" mark="would prefer">
      <NoteMark sentence="I'd rather pay in cash." :marks="['rather pay']" />
      <p class="translation">我寧願付現金。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
