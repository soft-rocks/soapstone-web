<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adverbs-form-very-time-adverbs, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="very 加強時間副詞 soon">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'I hope', role: '主詞 + 動詞', kind: 'dim' },
          { t: 'you get well', role: '子句' },
          { t: 'very', role: '程度副詞', kind: 'key' },
          { t: 'soon.', role: '時間副詞', kind: 'key' },
        ]"
      />
      <p class="translation">我希望你很快就好起來。</p>
    </NoteSlide>

    <NoteSlide title="soon、early、late 放在動詞或受詞後面" mark="very soon">
      <div class="rows is-labeled">
        <div>
          <span class="term">very early</span>
          <span
            ><NoteMark sentence="I got up very early this morning." :marks="['very early']" /><span
              class="translation"
              >我今天早上很早就起床了。</span
            ></span
          >
        </div>
        <div>
          <span class="term">very late</span>
          <span
            ><NoteMark sentence="The plane arrived very late." :marks="['very late']" /><span
              class="translation"
              >飛機很晚才到。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="very often 可以放在一般動詞前面，very recently 可以放在 have 後面">
      <div class="rows is-labeled">
        <div>
          <span class="term">very often</span>
          <span
            ><NoteMark sentence="We very often eat out on Fridays." :marks="['very often']" /><span
              class="translation"
              >我們星期五很常在外面吃飯。</span
            ></span
          >
        </div>
        <div>
          <span class="term">very recently</span>
          <span
            ><NoteMark
              sentence="She has very recently changed jobs."
              :marks="['very recently']"
            /><span class="translation">她最近才換了工作。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="加強 now 用 right now">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'I need it', role: '主詞 + 動詞 + 受詞', kind: 'dim' },
          { t: 'right now.', role: '加強 now', kind: 'key' },
        ]"
      />
      <p class="translation">我現在馬上就要。</p>
    </NoteSlide>

    <NoteSlide title="now、today、tomorrow 前面不加 very">
      <NoteFix
        wrong="I'll call you very tomorrow."
        right="I'll call you first thing tomorrow."
        fix="first thing"
      />
    </NoteSlide>

    <NoteSlide title="very 放在時間副詞前面，不放在後面" mark="very soon">
      <NoteFix wrong="She came home late very." right="She came home very late." fix="very late" />
    </NoteSlide>

    <NoteSlide title="very 跟著時間副詞放在動詞後面" mark="very soon">
      <NoteFix wrong="We very arrived early." right="We arrived very early." fix="very early" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
