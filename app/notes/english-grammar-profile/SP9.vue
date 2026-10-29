<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-any-as-object, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="否定句 + any" mark="I don't have any.">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'orange juice', role: '前面的名詞', kind: 'key' },
          { t: '…', kind: 'dim' },
          { t: 'I don\'t have', role: '否定句' },
          { t: 'any.', role: '受詞', kind: 'key' },
        ]"
      />
      <p class="translation">柳橙汁……我這裡沒有。</p>
    </NoteSlide>

    <NoteSlide title="複數名詞和不可數名詞" mark="any.">
      <div class="rows is-labeled">
        <div>
          <span class="term">複數名詞</span>
          <span
            ><NoteMark
              sentence="Please bring some good CDs. I don't have any."
              :marks="['CDs.', 'any.']"
            /><span class="translation">請帶幾張好聽的 CD 來，我一張也沒有。</span></span
          >
        </div>
        <div>
          <span class="term">不可數名詞</span>
          <span
            ><NoteMark
              sentence="I wanted to make tea, but we didn't have any."
              :marks="['tea,', 'any.']"
            /><span class="translation">我想泡茶，可是家裡沒有茶葉。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="問句裡的 any" mark="any.">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I need some stamps.', kind: 'dim' },
          { t: 'Do you have', role: '問句' },
          { t: 'any?', role: '受詞', kind: 'key' },
        ]"
      />
      <p class="translation">我需要幾張郵票，你有嗎？</p>
    </NoteSlide>

    <NoteSlide title="肯定句用 some" mark="any.">
      <NoteFix
        wrong="We need bread. I'll buy any."
        right="We need bread. I'll buy some."
        fix="some."
      />
    </NoteSlide>

    <NoteSlide title="not 後面用 any" mark="any.">
      <NoteFix
        wrong="I wanted milk, but there wasn't no."
        right="I wanted milk, but there wasn't any."
        fix="any."
      />
    </NoteSlide>

    <NoteSlide title="單數名詞用 one">
      <NoteFix
        wrong="I need a pen. I don't have any."
        right="I need a pen. I don't have one."
        fix="one."
      />
    </NoteSlide>

    <NoteSlide title="any + 名詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I don\'t have', kind: 'dim' },
          { t: 'any', role: '限定詞', kind: 'key' },
          { t: 'money.', role: '名詞' },
        ]"
      />
      <p class="translation">我一毛錢也沒有。</p>
    </NoteSlide>

    <NoteSlide title="none：動詞不加 not">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I looked for eggs, but', kind: 'dim' },
          { t: 'there were', role: '肯定動詞' },
          { t: 'none.', role: '一顆也沒有', kind: 'key' },
        ]"
      />
      <p class="translation">我找了蛋，可是一顆也沒有。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
