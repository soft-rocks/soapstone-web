<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// present-form-negative, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="否定句的 not 放在 be 和動詞-ing 中間">
      <NoteWords
        :size="36"
        :parts="[
          { t: 'The fridge', role: '主詞' },
          { t: 'isn\'t', role: 'is + not', kind: 'key', ring: true },
          { t: 'working.', role: '動詞-ing' },
        ]"
      />
      <p class="translation">冰箱壞了。</p>
    </NoteSlide>
    <NoteSlide title="否定句有兩種縮寫，意思相同" mark="isn't">
      <div class="rows is-labeled">
        <div>
          <span class="term">be 和 not 縮寫</span>
          <span
            ><NoteMark sentence="She isn't coming today." :marks="['isn\'t']" /><span
              class="translation"
              >她今天不來。</span
            ></span
          >
        </div>
        <div>
          <span class="term">主詞和 be 縮寫</span>
          <span
            ><NoteMark sentence="We're not coming tonight." :marks="['We\'re', 'not']" /><span
              class="translation"
              >我們今晚不來。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">am 和 not 不縮寫。I 的否定句寫 I'm not。</p>
    </NoteSlide>
    <NoteSlide title="not 放在 be 後面" mark="isn't">
      <NoteFix wrong="She not is listening." right="She is not listening." :fix="['is', 'not']" />
    </NoteSlide>
    <NoteSlide title="進行式的否定句用 be + not，不用 don't" mark="isn't">
      <NoteFix
        wrong="I don't using the computer now."
        right="I'm not using the computer now."
        :fix="['I\'m', 'not']"
      />
    </NoteSlide>
    <NoteSlide title="am 和 not 不縮寫" mark="isn't">
      <NoteFix
        wrong="I amn't feeling well today."
        right="I'm not feeling well today."
        :fix="['I\'m', 'not']"
      />
    </NoteSlide>
    <NoteSlide title="be + not 後面的動詞加 -ing" mark="working">
      <NoteFix
        wrong="They aren't play outside."
        right="They aren't playing outside."
        fix="playing"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
