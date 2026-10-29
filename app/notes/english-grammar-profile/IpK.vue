<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adjectives-form-with-too, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="too 表示超過想要的程度，所以有問題" mark="too small">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'These shoes are', kind: 'dim' },
          { t: 'too', role: 'too', kind: 'key', ring: true },
          { t: 'big.', role: '形容詞', kind: 'key' },
          { t: 'Do you have a smaller size?', kind: 'dim' },
        ]"
      />
      <p class="translation">這雙鞋太大了，有小一號的嗎？</p>
    </NoteSlide>

    <NoteSlide title="very 只說程度高，too 說程度太高" mark="too">
      <div class="rows is-labeled">
        <div>
          <span class="term">very</span>
          <span
            ><NoteMark sentence="The soup is very hot." :marks="['very hot']" /><span
              class="translation"
              >湯很燙。</span
            ></span
          >
        </div>
        <div>
          <span class="term">too</span>
          <span
            ><NoteMark
              sentence="The soup is too hot. I'll wait a minute."
              :marks="['too hot']"
            /><span class="translation">湯太燙了，我等一下再喝。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="not too 表示不會太怎麼樣" mark="too small">
      <NoteMark
        sentence="The shoes aren't too expensive. They're about 30 pounds."
        :marks="['too expensive']"
      />
      <p class="translation">那雙鞋不會太貴，大概三十英鎊。</p>
    </NoteSlide>

    <NoteSlide title="稱讚時不用 too" mark="too">
      <NoteFix
        wrong="Thank you for the meal. It was too delicious."
        right="Thank you for the meal. It was really delicious."
        fix="really"
      />
    </NoteSlide>

    <NoteSlide title="形容詞前面只用 too，不加 much" mark="too small">
      <NoteFix
        wrong="This bag is too much expensive."
        right="This bag is too expensive."
        fix="too expensive"
      />
    </NoteSlide>

    <NoteSlide title="太怎麼樣的 too 有兩個 o" mark="too">
      <NoteFix wrong="The tea is to sweet." right="The tea is too sweet." fix="too" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
