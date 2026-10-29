<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// verbs-form-linking-verb-be, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="be 動詞連接主詞和主詞補語">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'It', role: '主詞' },
          { t: 'was', role: 'be 動詞', kind: 'key' },
          { t: 'very nice.', role: '主詞補語' },
        ]"
      />
      <p class="translation">那真的很不錯。</p>
      <p class="remark"><code>was</code> 沒有動作，只把主詞和主詞補語連起來。</p>
    </NoteSlide>

    <NoteSlide title="be 動詞照時態和主詞變化" mark="was">
      <div class="rows is-labeled">
        <div>
          <span class="term">I</span>
          <span>am、was</span>
        </div>
        <div>
          <span class="term">he、she、it</span>
          <span>is、was</span>
        </div>
        <div>
          <span class="term">you、we、they</span>
          <span>are、were</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="主詞補語可以是形容詞、名詞、年齡或地點" mark="very nice">
      <div class="rows is-labeled">
        <div>
          <span class="term">形容詞</span>
          <span
            ><NoteMark sentence="My home is not too big." :marks="['big']" /><span
              class="translation"
              >我家不會太大。</span
            ></span
          >
        </div>
        <div>
          <span class="term">名詞</span>
          <span
            ><NoteMark sentence="My mother is a doctor." :marks="['a doctor']" /><span
              class="translation"
              >我媽媽是醫生。</span
            ></span
          >
        </div>
        <div>
          <span class="term">年齡</span>
          <span
            ><NoteMark sentence="I am 22 years old." :marks="['22 years old']" /><span
              class="translation"
              >我二十二歲。</span
            ></span
          >
        </div>
        <div>
          <span class="term">地點</span>
          <span
            ><NoteMark sentence="The keys are on the table." :marks="['on the table']" /><span
              class="translation"
              >鑰匙在桌上。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="主詞和形容詞中間要有 be 動詞" mark="was">
      <NoteFix wrong="My sister very tall." right="My sister is very tall." fix="is" />
    </NoteSlide>

    <NoteSlide title="主詞是複數名詞，現在式用 are" mark="was">
      <NoteFix wrong="My parents is teachers." right="My parents are teachers." fix="are" />
    </NoteSlide>

    <NoteSlide title="說年齡用 be 動詞，不用 have">
      <NoteFix wrong="I have 22 years old." right="I am 22 years old." fix="am" />
    </NoteSlide>

    <NoteSlide title="過去的事用 was 或 were" mark="was">
      <NoteFix
        wrong="Yesterday the weather is very cold."
        right="Yesterday the weather was very cold."
        fix="was"
      />
    </NoteSlide>

    <NoteSlide title="be 動詞後面接動詞-ing 時是助動詞，不是連綴動詞" mark="was">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'I\'m', role: '助動詞 be', kind: 'key', ring: true },
          { t: 'working', role: '動詞-ing' },
          { t: 'today.', kind: 'dim' },
        ]"
      />
      <p class="translation">我今天要上班。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
