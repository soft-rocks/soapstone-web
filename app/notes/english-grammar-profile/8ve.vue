<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-negative-declarative-with-be, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="not 放在 be 後面" mark="isn't big">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'The new library', role: '主詞' },
          { t: 'isn\'t', role: 'be + not', kind: 'key', ring: true },
          { t: 'far', role: '形容詞', kind: 'key' },
          { t: 'from here.', kind: 'dim' },
        ]"
      />
      <p class="translation">新圖書館離這裡不遠。</p>
    </NoteSlide>

    <NoteSlide title="be + not 依主詞和時態有不同的縮寫" mark="isn't">
      <div class="rows is-labeled">
        <div>
          <span class="term">I'm not</span>
          <span
            ><NoteMark
              sentence="A man fell over in the street. I'm not a doctor, but I can help."
              :marks="['I\'m not']"
            /><span class="translation"
              >一個男人在街上跌倒了。我不是醫生，但我可以幫忙。</span
            ></span
          >
        </div>
        <div>
          <span class="term">aren't</span>
          <span
            ><NoteMark
              sentence="Someone left their trainers by the door. These shoes aren't mine."
              :marks="['aren\'t']"
            /><span class="translation">有人把運動鞋留在門邊。這雙鞋不是我的。</span></span
          >
        </div>
        <div>
          <span class="term">wasn't</span>
          <span
            ><NoteMark sentence="The bus wasn't on time this morning." :marks="['wasn\'t']" /><span
              class="translation"
              >今天早上公車沒準時。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="動詞是 be，否定加 not，不用 don't" mark="isn't">
      <NoteFix wrong="The room don't clean." right="The room isn't clean." fix="isn't" />
    </NoteSlide>

    <NoteSlide title="not 放在 be 後面，不放在前面" mark="isn't">
      <NoteFix
        wrong="Our teacher not is in the classroom."
        right="Our teacher is not in the classroom."
        fix="is not"
      />
    </NoteSlide>

    <NoteSlide title="沒有 I amn't，要寫 I'm not" mark="isn't">
      <NoteFix
        wrong="I amn't a big fan of horror films."
        right="I'm not a big fan of horror films."
        fix="I'm not"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
