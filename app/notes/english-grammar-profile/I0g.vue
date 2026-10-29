<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// verbs-form-verb-ing-form, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="mind 後面接動詞-ing">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Would', kind: 'dim' },
          { t: 'you', role: '主詞', kind: 'dim' },
          { t: 'mind', role: '動詞', kind: 'key' },
          { t: 'telling', role: '動詞-ing', kind: 'key' },
          { t: 'Mr. and Mrs. Thomas?', role: 'telling 的受詞' },
        ]"
      />
      <p class="translation">可以麻煩你告訴 Thomas 先生和太太嗎？</p>
    </NoteSlide>

    <NoteSlide title="finish、keep、avoid、suggest 後面也接動詞-ing" mark="telling">
      <div class="rows is-labeled">
        <div>
          <span class="term">finish</span>
          <span
            ><NoteMark
              sentence="She finished writing the report."
              :marks="['finished writing']"
            /><span class="translation">她寫完了報告。</span></span
          >
        </div>
        <div>
          <span class="term">keep</span>
          <span
            ><NoteMark sentence="My computer keeps freezing." :marks="['keeps freezing']" /><span
              class="translation"
              >我的電腦一直當機。</span
            ></span
          >
        </div>
        <div>
          <span class="term">avoid</span>
          <span
            ><NoteMark
              sentence="The doctor told me to avoid eating late at night."
              :marks="['avoid eating']"
            /><span class="translation">醫生叫我避免太晚吃東西。</span></span
          >
        </div>
        <div>
          <span class="term">suggest</span>
          <span
            ><NoteMark
              sentence="I suggest trying that new pizza place."
              :marks="['suggest trying']"
            /><span class="translation">我建議試試那家新開的披薩店。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="Would you mind 是客氣的請求" mark="Would you mind">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Would you mind', role: '客氣的請求', kind: 'key' },
          { t: 'closing the window?', role: '動詞-ing' },
        ]"
      />
      <p class="translation">可以麻煩你關一下窗嗎？</p>
    </NoteSlide>

    <NoteSlide title="答應 Would you mind 的請求，要說 No" mark="Would you mind">
      <NoteMark sentence="No, not at all." :marks="['No']" />
      <p class="translation">不會，一點也不介意。</p>
    </NoteSlide>

    <NoteSlide title="not 放在動詞-ing 前面" mark="telling">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'I', kind: 'dim' },
          { t: 'suggest', role: '動詞' },
          { t: 'not', role: '否定 going', kind: 'key', ring: true },
          { t: 'going out', role: '動詞-ing', kind: 'key' },
          { t: 'tonight.', kind: 'dim' },
        ]"
      />
      <p class="translation">我建議今晚不要出去。</p>
    </NoteSlide>

    <NoteSlide title="mind 後面接動詞-ing，不接不定詞" mark="telling">
      <NoteFix
        wrong="Would you mind to open the door?"
        right="Would you mind opening the door?"
        fix="opening"
      />
    </NoteSlide>

    <NoteSlide title="finish 後面的動詞用動詞-ing" mark="telling">
      <NoteFix
        wrong="I've finished clean my room."
        right="I've finished cleaning my room."
        fix="cleaning"
      />
    </NoteSlide>

    <NoteSlide title="suggest 後面不接人加不定詞" mark="mind">
      <NoteFix
        wrong="My friend suggested me to try yoga."
        right="My friend suggested trying yoga."
        fix="trying"
      />
    </NoteSlide>

    <NoteSlide title="stop to 的不定詞是停下來的目的" mark="mind">
      <NoteMark sentence="He stopped to buy a coffee." :marks="['stopped to buy']" />
      <p class="translation">他停下來買了一杯咖啡。</p>
    </NoteSlide>

    <NoteSlide title="Would you like 是邀請，後面接不定詞" mark="mind">
      <NoteMark
        sentence="Would you like to join us for lunch on Sunday?"
        :marks="['like to join']"
      />
      <p class="translation">你星期天要跟我們一起吃午餐嗎？</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
