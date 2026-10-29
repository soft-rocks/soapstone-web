<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-none, as slides, in the order of content.md. One point per slide: the title names
// it, the diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on separate
// lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="none 代替前面說過的名詞" mark="none.">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'We expected', kind: 'dim' },
          { t: 'a social program,', role: '說過的名詞', kind: 'key' },
          { t: 'but there was', kind: 'dim' },
          { t: 'none.', role: '一個也沒有', kind: 'key' },
        ]"
      />
      <p class="translation">我們以為會有社交活動，結果一個都沒有。</p>
    </NoteSlide>

    <NoteSlide title="there were none、動詞 + none" mark="there was none.">
      <div class="rows is-labeled">
        <div>
          <span class="term">there were</span>
          <span
            ><NoteMark
              sentence="We looked for a café that was open, but there were none."
              :marks="['there were none.']"
            /><span class="translation">我們找了開著的咖啡店，可是一家都沒有。</span></span
          >
        </div>
        <div>
          <span class="term">受詞</span>
          <span
            ><NoteMark
              sentence="I asked for a receipt, but they gave me none."
              :marks="['gave me none.']"
            /><span class="translation">我要了收據，可是他們沒給。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="none 當主詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Six people applied.', kind: 'dim' },
          { t: 'None', role: '主詞', kind: 'key' },
          { t: 'was suitable.', role: '肯定動詞' },
        ]"
      />
      <p class="translation">六個人來應徵，一個都不合適。</p>
    </NoteSlide>

    <NoteSlide title="none 和 nothing" mark="none.">
      <div class="rows is-labeled">
        <div>
          <span class="term">none</span>
          <span
            ><NoteMark
              sentence="I wanted a seat by the window, but there were none."
              :marks="['none.']"
            /><span class="translation">我想要靠窗的位子，可是一個都沒有。</span></span
          >
        </div>
        <div>
          <span class="term">nothing</span>
          <span
            ><NoteMark
              sentence="I opened the box, but there was nothing inside."
              :marks="['nothing']"
            /><span class="translation">我打開箱子，裡面什麼都沒有。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="單獨用時寫 none，不寫 no" mark="none.">
      <NoteFix
        wrong="We booked a sea view, but there was no."
        right="We booked a sea view, but there was none."
        fix="none."
      />
    </NoteSlide>

    <NoteSlide title="代替說過的名詞用 none" mark="none.">
      <NoteFix
        wrong="I looked for a parking space, but there was nothing."
        right="I looked for a parking space, but there were none."
        fix="were none."
      />
    </NoteSlide>

    <NoteSlide title="none 前面的動詞用肯定">
      <NoteFix
        wrong="I waited for a reply, but I didn't get none."
        right="I waited for a reply, but I got none."
        fix="got none."
      />
    </NoteSlide>

    <NoteSlide title="not any：比較口語">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'We expected a reply, but there', kind: 'dim' },
          { t: 'wasn\'t any.', role: 'not any', kind: 'key' },
        ]"
      />
      <p class="translation">我們以為會有回覆，可是什麼都沒有。</p>
    </NoteSlide>

    <NoteSlide title="沒說過的人用 nobody">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'We waited at the door, but', kind: 'dim' },
          { t: 'nobody', role: '沒有人', kind: 'key' },
          { t: 'came.', kind: 'dim' },
        ]"
      />
      <p class="translation">我們在門口等，可是沒有人來。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
