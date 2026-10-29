<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-some-and-any, as slides, in the order of content.md. One point per slide: the title
// names it, the diagram shows it, and `mark` circles the matching words of the note's sentence.
// Keep the parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="肯定句 some，否定句 any" mark="any.">
      <NoteWords
        :size="24"
        :parts="[
          { t: '… bring', kind: 'dim' },
          { t: 'some erasers', role: '肯定句', kind: 'key' },
          { t: '… they don\'t have', role: '否定句' },
          { t: 'any.', role: '指 erasers', kind: 'key' },
        ]"
      />
      <p class="translation">我們得帶一些橡皮擦，因為他們那裡一個都沒有。</p>
    </NoteSlide>

    <NoteSlide title="some 和 any 的用法" mark="any.">
      <div class="rows is-labeled">
        <div>
          <span class="term">肯定句</span>
          <span
            ><NoteMark sentence="I'm going to the shop. I'll get some." :marks="['some.']" /><span
              class="translation"
              >我要去商店，我會買一些。</span
            ></span
          >
        </div>
        <div>
          <span class="term">否定句</span>
          <span
            ><NoteMark
              sentence="I looked for envelopes, but I didn't find any."
              :marks="['any.']"
            /><span class="translation">我找了信封，可是一個也沒找到。</span></span
          >
        </div>
        <div>
          <span class="term">問句</span>
          <span
            ><NoteMark sentence="I need some glue. Have you got any?" :marks="['any?']" /><span
              class="translation"
              >我需要一些膠水，你有嗎？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="請別人拿東西：some">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'There\'s pizza left.', kind: 'dim' },
          { t: 'Would you like', role: '問別人要不要' },
          { t: 'some?', kind: 'key' },
        ]"
      />
      <p class="translation">還剩一些披薩，你要吃嗎？</p>
    </NoteSlide>

    <NoteSlide title="否定句用 any" mark="any.">
      <NoteFix
        wrong="I wanted cake, but there wasn't some left."
        right="I wanted cake, but there wasn't any left."
        fix="any"
      />
    </NoteSlide>

    <NoteSlide title="肯定句用 some" mark="some">
      <NoteFix
        wrong="We've got no milk. I'll buy any on the way home."
        right="We've got no milk. I'll buy some on the way home."
        fix="some"
      />
    </NoteSlide>

    <NoteSlide title="單數名詞用 one">
      <NoteFix
        wrong="I need an umbrella. Do you have any?"
        right="I need an umbrella. Do you have one?"
        fix="one?"
      />
    </NoteSlide>

    <NoteSlide title="any + 名詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Have you got', kind: 'dim' },
          { t: 'any', role: '限定詞', kind: 'key' },
          { t: 'stamps?', role: '名詞' },
        ]"
      />
      <p class="translation">你有郵票嗎？</p>
    </NoteSlide>

    <NoteSlide title="none：動詞不加 not">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I looked for envelopes, but', kind: 'dim' },
          { t: 'there were', role: '肯定動詞' },
          { t: 'none.', role: '一個也沒有', kind: 'key' },
        ]"
      />
      <p class="translation">我找了信封，可是一個也沒有。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
