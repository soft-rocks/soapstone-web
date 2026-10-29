<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// questions-form-main-verb-be, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="疑問詞放在句首，be 放在主詞前面">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'How', role: '疑問詞', kind: 'key' },
          { t: 'was', role: 'be', kind: 'key' },
          { t: 'your dinner yesterday?', role: '主詞' },
        ]"
      />
      <p class="translation">你昨天的晚餐怎麼樣？</p>
    </NoteSlide>

    <NoteSlide title="be 依照主詞和時態變化" mark="was">
      <div class="rows is-labeled">
        <div>
          <span class="term">is</span>
          <span
            ><NoteMark sentence="Who is that girl?" :marks="['is']" /><span class="translation"
              >那個女孩是誰？</span
            ></span
          >
        </div>
        <div>
          <span class="term">are</span>
          <span
            ><NoteMark sentence="Where are my keys?" :marks="['are']" /><span class="translation"
              >我的鑰匙在哪裡？</span
            ></span
          >
        </div>
        <div>
          <span class="term">were</span>
          <span
            ><NoteMark sentence="How many people were at the party?" :marks="['were']" /><span
              class="translation"
              >派對上有多少人？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="is 常和疑問詞縮寫，are 和 was 不縮寫" mark="was">
      <NoteWords
        :size="32"
        :parts="[
          { t: 'What\'s', role: 'What is', kind: 'key', ring: true },
          { t: 'your name?', role: '主詞' },
        ]"
      />
      <p class="translation">你叫什麼名字？</p>
    </NoteSlide>

    <NoteSlide title="wh- 疑問句的 be 放在主詞前面" mark="was">
      <NoteFix wrong="Where your brother is?" right="Where is your brother?" fix="is" />
    </NoteSlide>

    <NoteSlide title="be 是主要動詞時不加 do" mark="was">
      <NoteFix wrong="How did your holiday be?" right="How was your holiday?" fix="was" />
    </NoteSlide>

    <NoteSlide title="複數的主詞用 are" mark="was">
      <NoteFix wrong="Where is my shoes?" right="Where are my shoes?" fix="are" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
