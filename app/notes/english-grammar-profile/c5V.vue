<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-same-subject-and-object, as slides, in the order of content.md. One point per slide: the title names it, the
// diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞和受詞是同一個人，受詞用 myself">
      <NoteWords
        :size="32"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'bought', role: '動詞' },
          { t: 'myself', role: '受詞 = I', kind: 'key' },
          { t: 'a yellow T-shirt.', role: '東西' },
        ]"
      />
      <p class="translation">我給自己買了一件黃色 T 恤。</p>
    </NoteSlide>

    <NoteSlide title="enjoy、hurt 常和 myself、yourself 一起用" mark="myself">
      <div class="rows is-labeled">
        <div>
          <span class="term">enjoy</span>
          <span
            ><NoteMark sentence="I enjoyed myself at the party." :marks="['enjoyed myself']" /><span
              class="translation"
              >我在派對上玩得很開心。</span
            ></span
          >
        </div>
        <div>
          <span class="term">hurt</span>
          <span
            ><NoteMark
              sentence="Be careful with that knife. Don't hurt yourself."
              :marks="['hurt yourself.']"
            /><span class="translation">小心那把刀，別傷到自己。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="主詞和受詞是同一個人用 myself，不是用 me" mark="myself">
      <div class="rows is-labeled">
        <div>
          <span class="term">myself</span>
          <span
            ><NoteMark sentence="I bought myself a cake." :marks="['I', 'myself']" /><span
              class="translation"
              >我買了一個蛋糕給自己。</span
            ></span
          >
        </div>
        <div>
          <span class="term">me</span>
          <span
            ><NoteMark sentence="My mom bought me a cake." :marks="['My mom', 'me']" /><span
              class="translation"
              >我媽媽買了一個蛋糕給我。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="主詞和受詞都是我，用 myself" mark="myself">
      <NoteFix wrong="I bought me a new phone." right="I bought myself a new phone." fix="myself" />
    </NoteSlide>

    <NoteSlide title="enjoy 後面要有受詞" mark="myself">
      <NoteFix
        wrong="I really enjoyed at the beach."
        right="I really enjoyed myself at the beach."
        fix="myself"
      />
    </NoteSlide>

    <NoteSlide title="單數是 yourself">
      <NoteFix wrong="Did you hurt yourselve?" right="Did you hurt yourself?" fix="yourself?" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
