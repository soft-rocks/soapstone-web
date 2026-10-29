<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// nouns-form-uncountable-nouns-697, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="一個數量詞修飾四個抽象不可數名詞">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'We can develop', kind: 'dim' },
          { t: 'more', role: '數量詞', kind: 'key' },
          { t: 'humanity, solidarity, tolerance and respect', role: '抽象不可數名詞' },
          { t: 'among people of different countries.', kind: 'dim' },
        ]"
      />
      <p class="translation">我們可以讓不同國家的人之間多一些人情味、團結、包容和尊重。</p>
    </NoteSlide>

    <NoteSlide title="抽象不可數名詞說社會、組織和個人特質" mark="solidarity">
      <div class="rows is-labeled">
        <div>
          <span class="term">社會和價值</span>
          <span>solidarity, tolerance, equality, justice</span>
        </div>
        <div>
          <span class="term">工作和組織</span>
          <span>administration, management, safety</span>
        </div>
        <div>
          <span class="term">個人特質</span>
          <span>confidence, patience, courage, wisdom</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="抽象不可數名詞常接 show、lack、a great deal of 和形容詞" mark="more">
      <div class="rows is-labeled">
        <div>
          <span class="term">動詞 + 名詞</span>
          <span>show courage, lack confidence</span>
        </div>
        <div>
          <span class="term">數量詞 + 名詞</span>
          <span>a great deal of patience</span>
        </div>
        <div>
          <span class="term">形容詞 + 名詞</span>
          <span>social justice, mutual respect</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="tolerance 說抽象的包容時不加 -&#x2060;s" mark="tolerance">
      <NoteFix
        wrong="We need more tolerances in society."
        right="We need more tolerance in society."
        fix="tolerance"
      />
    </NoteSlide>

    <NoteSlide title="courage 是不可數名詞，前面不加 a">
      <NoteFix
        wrong="She showed a great courage."
        right="She showed great courage."
        fix="great courage"
      />
    </NoteSlide>

    <NoteSlide title="不可數名詞不用 many" mark="more">
      <NoteFix
        wrong="This job needs many patience."
        right="This job needs a lot of patience."
        fix="a lot of"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
