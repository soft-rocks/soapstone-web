<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adverbs-form-front-position, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="副詞放在句首，後面照樣接主詞和動詞" mark="Sometimes I go">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'Sometimes', role: '副詞', kind: 'key' },
          { t: 'I', role: '主詞' },
          { t: 'go', role: '動詞' },
          { t: 'to the beach.', role: '地點', kind: 'dim' },
        ]"
      />
      <p class="translation">有時候我會去海邊。</p>
    </NoteSlide>

    <NoteSlide title="常放在句首的副詞" mark="Sometimes">
      <div class="rows is-labeled">
        <div>
          <span class="term">sometimes</span>
          <span>有時候</span>
        </div>
        <div>
          <span class="term">maybe</span>
          <span>也許，說不定</span>
        </div>
        <div>
          <span class="term">today、yesterday、tomorrow</span>
          <span>說明哪一天</span>
        </div>
        <div>
          <span class="term">now</span>
          <span>現在</span>
        </div>
        <div>
          <span class="term">then</span>
          <span>然後，接著說下一件事</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="直述句的 always 和 never 不放在句首">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'always', role: '頻率副詞', kind: 'key' },
          { t: 'get up', role: '動詞' },
          { t: 'before my parents.', role: '時間', kind: 'dim' },
        ]"
      />
      <p class="translation">我都比我爸媽早起。</p>
    </NoteSlide>

    <NoteSlide title="表示也許的 maybe 寫成一個字">
      <NoteFix
        wrong="May be we can go swimming on Sunday."
        right="Maybe we can go swimming on Sunday."
        fix="Maybe"
      />
    </NoteSlide>

    <NoteSlide title="always 放在主詞和動詞中間">
      <NoteFix
        wrong="Always I take the same bus."
        right="I always take the same bus."
        fix="I always take"
      />
    </NoteSlide>

    <NoteSlide title="句首的副詞後面，主詞放在動詞前面" mark="Sometimes I">
      <NoteFix
        wrong="Sometimes visit we our cousins in Tainan."
        right="Sometimes we visit our cousins in Tainan."
        fix="we visit"
      />
    </NoteSlide>

    <NoteSlide title="句首的副詞後面要有主詞">
      <NoteFix
        wrong="Tomorrow will be at home all day."
        right="Tomorrow I will be at home all day."
        fix="Tomorrow I will"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
