<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// present-form-questions, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="疑問詞放在句首，be 放在主詞前面">
      <NoteWords
        :size="36"
        :parts="[
          { t: 'What', role: '疑問詞', kind: 'key' },
          { t: 'are', role: 'be', kind: 'key' },
          { t: 'you', role: '主詞' },
          { t: 'bringing', role: '動詞-ing' },
          { t: 'with you?', kind: 'dim' },
        ]"
      />
      <p class="translation">你要帶什麼東西來？</p>
    </NoteSlide>
    <NoteSlide title="who 或 what 當主詞時，直接接 is 和動詞-ing" mark="What">
      <div class="rows is-labeled">
        <div>
          <span class="term">疑問詞當主詞</span>
          <span
            ><NoteMark sentence="Who is cooking tonight?" :marks="['Who', 'is']" /><span
              class="translation"
              >今晚誰煮飯？</span
            ></span
          >
        </div>
        <div>
          <span class="term">疑問詞當受詞</span>
          <span
            ><NoteMark sentence="Who are you meeting tonight?" :marks="['Who', 'are']" /><span
              class="translation"
              >你今晚要跟誰見面？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="信裡用這種問句問近況、正在做的事和計畫" mark="are">
      <div class="rows is-labeled">
        <div>
          <span class="term">近況</span>
          <span
            ><NoteMark sentence="How are you doing?" :marks="['How', 'are']" /><span
              class="translation"
              >你最近好嗎？</span
            ></span
          >
        </div>
        <div>
          <span class="term">正在做的事</span>
          <span
            ><NoteMark sentence="What are you studying now?" :marks="['What', 'are']" /><span
              class="translation"
              >你現在在念什麼？</span
            ></span
          >
        </div>
        <div>
          <span class="term">計畫</span>
          <span
            ><NoteMark sentence="When are you coming home?" :marks="['When', 'are']" /><span
              class="translation"
              >你什麼時候回家？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="問句的 be 放在主詞前面" mark="are">
      <NoteFix wrong="What you are doing?" right="What are you doing?" fix="are" />
    </NoteSlide>
    <NoteSlide title="現在進行式的問句要有 be" mark="are">
      <NoteFix wrong="Where you going?" right="Where are you going?" fix="are" />
    </NoteSlide>
    <NoteSlide title="複數的主詞用 are" mark="are">
      <NoteFix wrong="Why is your parents moving?" right="Why are your parents moving?" fix="are" />
    </NoteSlide>
    <NoteSlide title="動詞是 -ing 時，問句用 be，不用 do" mark="are">
      <NoteFix
        wrong="What do you doing these days?"
        right="What are you doing these days?"
        fix="are"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
