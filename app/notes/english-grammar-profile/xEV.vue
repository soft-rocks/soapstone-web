<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-one, as slides, in the order of content.md. One point per slide: the title names
// it, the diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on separate
// lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="one 代替單數名詞" mark="my old one">
      <NoteWords
        :size="22"
        :parts="[
          { t: '… a new', kind: 'dim' },
          { t: 'pullover', role: '單數名詞', kind: 'key' },
          { t: 'because', kind: 'dim' },
          { t: 'my old', role: '限定詞 + 修飾語' },
          { t: 'one', role: '代替 pullover', kind: 'key' },
        ]"
      />
      <p class="translation">……新的套頭毛衣，因為我舊的那件……</p>
    </NoteSlide>

    <NoteSlide title="說過的名詞、看得出來的名詞" mark="one">
      <div class="rows is-labeled">
        <div>
          <span class="term">說過的</span>
          <span
            ><NoteMark
              sentence="This cup is dirty. Can I have a clean one?"
              :marks="['a clean one?']"
            /><span class="translation">這個杯子髒了，可以給我一個乾淨的嗎？</span></span
          >
        </div>
        <div>
          <span class="term">看得出來的</span>
          <span
            ><NoteMark
              sentence="I'll take the black one with the big screen."
              :marks="['the black one']"
            /><span class="translation">（在手機店）我要黑色、大螢幕的那支。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="單獨用 one" mark="one">
      <div class="rows is-labeled">
        <div>
          <span class="term">單獨用</span>
          <span
            ><NoteMark sentence="I need an umbrella. Have you got one?" :marks="['one?']" /><span
              class="translation"
              >我需要一把傘，你有嗎？</span
            ></span
          >
        </div>
        <div>
          <span class="term">加形容詞</span>
          <span
            ><NoteMark
              sentence="I need an umbrella. Have you got a big one?"
              :marks="['a big one?']"
            /><span class="translation">我需要一把傘，你有大的嗎？</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="不特定的一個用 one" mark="one">
      <NoteFix
        wrong="I don't have a pen. Can you lend me it?"
        right="I don't have a pen. Can you lend me one?"
        fix="one?"
      />
    </NoteSlide>

    <NoteSlide title="單獨用的 one 不加 a" mark="one">
      <NoteFix
        wrong="I'd like a sandwich. Can you make me a one?"
        right="I'd like a sandwich. Can you make me one?"
        fix="one?"
      />
    </NoteSlide>

    <NoteSlide title="不可數名詞不用 one">
      <NoteFix
        wrong="I need some advice. Can you give me a good one?"
        right="I need some advice. Can you give me some good advice?"
        fix="some good advice?"
      />
    </NoteSlide>

    <NoteSlide title="複數用 ones">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'My shoes are old. I need', kind: 'dim' },
          { t: 'new ones.', role: '代替複數名詞', kind: 'key' },
        ]"
      />
      <p class="translation">我的鞋子舊了，我需要新的。</p>
    </NoteSlide>

    <NoteSlide title="同一個東西用 it">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I bought', kind: 'dim' },
          { t: 'a new lamp.', role: '說過的東西' },
          { t: 'It\'s', role: '同一盞', kind: 'key' },
          { t: 'very bright.', kind: 'dim' },
        ]"
      />
      <p class="translation">我買了一盞新檯燈，它很亮。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
