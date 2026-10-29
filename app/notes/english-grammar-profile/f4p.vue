<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// verbs-form-would-like-to, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="would like 後面接 to 和原形動詞">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'I\'d', role: 'I + would', kind: 'key' },
          { t: 'like', role: '原形動詞', kind: 'key' },
          { t: 'to invite', role: 'to + 原形動詞', kind: 'key' },
          { t: 'you', role: 'invite 的受詞' },
          { t: 'to dinner', role: '目的', kind: 'dim' },
          { t: 'on Sunday.', role: '時間', kind: 'dim' },
        ]"
      />
      <p class="translation">我想邀請你星期天來吃晚餐。</p>
      <p class="remark"><code>would like to</code> 比 <code>want to</code> 客氣。</p>
    </NoteSlide>

    <NoteSlide title="Would you like to 用來邀請別人" mark="I'd">
      <NoteMark sentence="Would you like to join our quiz team?" :marks="['Would', 'like to']" />
      <p class="translation">你想加入我們的問答隊嗎？</p>
    </NoteSlide>

    <NoteSlide title="拒絕邀請常說 I'd like to, but ..." mark="I'd">
      <NoteMark sentence="I'd like to, but I've got a cold." :marks="['I\'d like to']" />
      <p class="translation">我很想，可是我感冒了。</p>
    </NoteSlide>

    <NoteSlide title="否定用 wouldn't like to" mark="I'd">
      <NoteMark sentence="I wouldn't like to live in a big city." :marks="['wouldn\'t']" />
      <p class="translation">我不會想住在大城市。</p>
    </NoteSlide>

    <NoteSlide title="would like 後面接動詞時，動詞前面加 to" mark="to">
      <NoteFix
        wrong="I would like visit the old castle tomorrow."
        right="I would like to visit the old castle tomorrow."
        fix="to"
      />
    </NoteSlide>

    <NoteSlide title="would 後面的 like 用原形" mark="like">
      <NoteFix
        wrong="Grandpa would likes to see the sea."
        right="Grandpa would like to see the sea."
        fix="like"
      />
    </NoteSlide>

    <NoteSlide title="to 後面接原形動詞" mark="invite">
      <NoteFix
        wrong="We would like to booking a table for four."
        right="We would like to book a table for four."
        fix="book"
      />
    </NoteSlide>

    <NoteSlide title="would like 的問句把 would 放到主詞前面" mark="I'd">
      <NoteFix
        wrong="Do you would like to try my cake?"
        right="Would you like to try my cake?"
        fix="Would"
      />
    </NoteSlide>

    <NoteSlide title="like to 說平常喜歡，would like to 說現在想做" mark="I'd">
      <div class="rows is-labeled">
        <div>
          <span class="term">like to<br /><i>平常喜歡</i></span>
          <span
            ><NoteMark sentence="I like to swim before breakfast." :marks="['like to']" /><span
              class="translation"
              >我喜歡早餐前游泳。</span
            ></span
          >
        </div>
        <div>
          <span class="term">would like to<br /><i>現在想做</i></span>
          <span
            ><NoteMark
              sentence="I'd like to swim in the lake this afternoon."
              :marks="['I\'d like to']"
            /><span class="translation">我今天下午想去湖裡游泳。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="would like 後面也可以直接接名詞" mark="like">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I\'d like', role: 'would like', kind: 'key' },
          { t: 'a table for two by the window,', role: '名詞', ring: true },
          { t: 'please.', kind: 'dim' },
        ]"
      />
      <p class="translation">麻煩給我們一張窗邊的兩人桌。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
