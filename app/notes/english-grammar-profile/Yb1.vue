<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-use-were-pronoun-to-infinitive-formal, as slides, in the order of content.md. One point per slide: the title names it, the
// diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="Were 加代名詞加 to 不定詞，說假設的事">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Were I', role: 'Were + 代名詞', kind: 'key' },
          { t: 'to choose one of them,', role: 'to + 原形動詞', kind: 'key' },
          { t: 'I would select the last one.', role: '主要子句（would）' },
        ]"
      />
      <p class="translation">如果要我從中選一個，我會選最後那個。</p>
      <p class="remark"><code>Were I to choose</code> 等於 <code>If I were to choose</code>。</p>
    </NoteSlide>

    <NoteSlide title="所有的人稱都用 were，主要子句常用 would" mark="Were I">
      <div class="rows is-labeled">
        <div>
          <span class="term">Were we</span>
          <span
            ><NoteMark
              sentence="Were we to lose this customer, the business would be in trouble."
              :marks="['Were we to lose', 'would']"
            /><span class="translation">要是我們失去這個客戶，公司就會有麻煩。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="正式的信件用 Were you to 客氣地說明" mark="Were I">
      <div class="rows is-labeled">
        <div>
          <span class="term">請求</span>
          <span
            ><NoteMark
              sentence="Were you to require any further details, please contact our office."
              :marks="['Were you to require']"
            /><span class="translation"
              >如果您需要任何進一步的細節，請聯絡我們的辦公室。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="否定的時候，not 放在主詞後面、to 前面" mark="Were I">
      <div class="rows is-labeled">
        <div>
          <span class="term">否定</span>
          <span
            ><NoteMark
              sentence="Were they not to agree, we would need a new plan."
              :marks="['Were they not to']"
            /><span class="translation">要是他們不同意，我們就需要新的計畫。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="倒裝的條件子句一律用 Were" mark="Were">
      <NoteFix
        wrong="Was I to win the lottery, I would buy a house."
        right="Were I to win the lottery, I would buy a house."
        fix="Were"
      />
    </NoteSlide>

    <NoteSlide title="倒裝已經代替 if，不再加 if" mark="Were">
      <NoteFix
        wrong="If were we to move abroad, we would sell the car."
        right="Were we to move abroad, we would sell the car."
        fix="Were we"
      />
    </NoteSlide>

    <NoteSlide title="代名詞後面接 to 加原形動詞" mark="to choose">
      <NoteFix
        wrong="Were you lose your job, what would you do?"
        right="Were you to lose your job, what would you do?"
        fix="to"
      />
    </NoteSlide>

    <NoteSlide title="說假設的結果，主要子句用 would" mark="would">
      <NoteFix
        wrong="Were she to leave, the team will struggle."
        right="Were she to leave, the team would struggle."
        fix="would"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
