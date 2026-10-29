<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// verbs-form-verb-to-infinitive-1079, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="remember to 說記得要去做的事">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Please', kind: 'dim' },
          { t: 'remember', role: '動詞', kind: 'key' },
          { t: 'to bring', role: 'to + 原形動詞', kind: 'key' },
          { t: 'your pajamas and your toothbrush.', role: 'bring 的受詞' },
        ]"
      />
      <p class="translation">請記得帶你的睡衣和牙刷。</p>
      <p class="remark">帶東西這件事還沒發生。</p>
    </NoteSlide>

    <NoteSlide title="提醒別人做事，用 remember to 或 don't forget to" mark="remember">
      <div class="rows is-labeled">
        <div>
          <span class="term">remember to</span>
          <span
            ><NoteMark sentence="Please remember to lock the door." :marks="['remember to']" /><span
              class="translation"
              >請記得鎖門。</span
            ></span
          >
        </div>
        <div>
          <span class="term">don't forget to</span>
          <span
            ><NoteMark sentence="Don't forget to come." :marks="['Don\'t forget to']" /><span
              class="translation"
              >別忘了要來。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="not 放在 to 前面，否定不定詞的動作" mark="to bring">
      <div class="rows is-labeled">
        <div>
          <span class="term">decide not to</span>
          <span
            ><NoteMark sentence="I decided not to go." :marks="['not to']" /><span
              class="translation"
              >我決定不去。</span
            ></span
          >
        </div>
        <div>
          <span class="term">promise not to</span>
          <span
            ><NoteMark sentence="She promised not to tell anyone." :marks="['not to']" /><span
              class="translation"
              >她答應不告訴任何人。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="decide 後面接動詞時，動詞前面加 to" mark="to">
      <NoteFix wrong="We decided stay at home." right="We decided to stay at home." fix="to" />
    </NoteSlide>

    <NoteSlide title="promise 後面接 to + 原形動詞，不接動詞-ing" mark="to bring">
      <NoteFix wrong="He promised calling me." right="He promised to call me." fix="to call" />
    </NoteSlide>

    <NoteSlide title="時態只加在前面的動詞上，to 後面用原形" mark="bring">
      <NoteFix
        wrong="I forgot to brought my keys."
        right="I forgot to bring my keys."
        fix="bring"
      />
    </NoteSlide>

    <NoteSlide title="否定不定詞時，not 後面的 to 不能省略" mark="to">
      <NoteFix wrong="I planned not visit them." right="I planned not to visit them." fix="to" />
    </NoteSlide>

    <NoteSlide title="remember 接動詞-ing，說記得以前做過的事" mark="remember">
      <div class="rows is-labeled">
        <div>
          <span class="term">remember to<br /><i>要去做</i></span>
          <span
            ><NoteMark sentence="Please remember to lock the door." :marks="['to lock']" /><span
              class="translation"
              >請記得鎖門。</span
            ></span
          >
        </div>
        <div>
          <span class="term">remember + 動詞&#x2060;-&#x2060;ing<br /><i>以前做過</i></span>
          <span
            ><NoteMark sentence="I remember meeting her at the party." :marks="['meeting']" /><span
              class="translation"
              >我記得在派對上見過她。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
