<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// verbs-form-verb-to-infinitive, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="want 後面接 to 和原形動詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'want', role: '動詞', kind: 'key' },
          { t: 'to invite', role: 'to + 原形動詞', kind: 'key' },
          { t: 'you', role: 'invite 的受詞' },
          { t: 'for dinner.', role: '目的', kind: 'dim' },
        ]"
      />
      <p class="translation">我想邀請你來吃晚餐。</p>
    </NoteSlide>

    <NoteSlide title="前面的動詞照時態和主詞變化，不定詞不變" mark="want">
      <div class="rows is-labeled">
        <div>
          <span class="term">第三人稱單數</span>
          <span
            ><NoteMark
              sentence="My brother wants to be a doctor."
              :marks="['wants', 'to be']"
            /><span class="translation">我哥想當醫生。</span></span
          >
        </div>
        <div>
          <span class="term">過去</span>
          <span
            ><NoteMark sentence="We wanted to stay longer." :marks="['wanted', 'to stay']" /><span
              class="translation"
              >我們本來想多待一會兒。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="否定和問句的 do 放在第一個動詞前面" mark="want">
      <div class="rows is-labeled">
        <div>
          <span class="term">否定</span>
          <span
            ><NoteMark
              sentence="Sometimes I don't like to go out because it's very cold."
              :marks="['don\'t']"
            /><span class="translation">有時候天氣很冷，我就不喜歡出門。</span></span
          >
        </div>
        <div>
          <span class="term">問句</span>
          <span
            ><NoteMark sentence="Do you want to come with us?" :marks="['Do']" /><span
              class="translation"
              >你想跟我們一起去嗎？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="want 後面接動詞時，動詞前面加 to" mark="to">
      <NoteFix wrong="I want go home." right="I want to go home." fix="to" />
    </NoteSlide>

    <NoteSlide title="to 後面的動詞用原形" mark="invite">
      <NoteFix
        wrong="She wants to buys a new bike."
        right="She wants to buy a new bike."
        fix="buy"
      />
    </NoteSlide>

    <NoteSlide title="不定詞的 to 後面不接動詞-ing" mark="invite">
      <NoteFix
        wrong="I need to finishing my homework."
        right="I need to finish my homework."
        fix="finish"
      />
    </NoteSlide>

    <NoteSlide title="否定用 don't，放在 want 前面" mark="want">
      <NoteFix wrong="I not want to go." right="I don't want to go." fix="don't" />
    </NoteSlide>

    <NoteSlide title="情態動詞和接名詞的 want 後面不加 to" mark="to">
      <div class="rows is-labeled">
        <div>
          <span class="term">情態動詞</span>
          <span
            ><NoteMark sentence="I can swim." :marks="['can', 'swim']" /><span class="translation"
              >我會游泳。</span
            ></span
          >
        </div>
        <div>
          <span class="term">want + 名詞</span>
          <span
            ><NoteMark sentence="I want a new phone." :marks="['a new phone']" /><span
              class="translation"
              >我想要一支新手機。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
