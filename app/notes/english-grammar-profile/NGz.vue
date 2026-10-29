<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-use-when-focus, as slides, in the order of content.md. One point per slide: the title names it, the
// diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="when 接在時間名詞後面，說明是哪一個時間">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'I remember', kind: 'dim' },
          { t: 'the day', role: '時間名詞' },
          { t: 'when', role: '在那個時間', kind: 'key' },
          { t: 'I lost my suitcase at the airport.', role: '主詞 + 動詞' },
        ]"
      />
      <p class="translation">我記得我在機場弄丟行李箱的那一天。</p>
    </NoteSlide>

    <NoteSlide title="子句放在主詞後面或句尾" mark="when">
      <div class="rows is-labeled">
        <div>
          <span class="term">主詞後面</span>
          <span
            ><NoteMark
              sentence="The summer when we went to Japan was the hottest in years."
              :marks="['when we went to Japan']"
            /><span class="translation">我們去日本的那個夏天是好幾年來最熱的。</span></span
          >
        </div>
        <div>
          <span class="term">句尾</span>
          <span
            ><NoteMark
              sentence="Do you remember the night when the power went out?"
              :marks="['when the power went out?']"
            /><span class="translation">你記得停電的那個晚上嗎？</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="when 常可以省略，也可以換成 that" mark="when">
      <div class="rows is-labeled">
        <div>
          <span class="term">省略</span>
          <span
            ><NoteMark
              sentence="That was the year I started university."
              :marks="['the year I']"
            /><span class="translation">那是我上大學的那一年。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="when 已經表示那個時間，不再加 then" mark="when">
      <NoteFix
        wrong="I miss the days when we were students then."
        right="I miss the days when we were students."
        fix="students."
      />
    </NoteSlide>

    <NoteSlide title="子句的動詞已經有受詞，表示時間用 when" mark="when">
      <NoteFix
        wrong="That was the moment which I knew I loved her."
        right="That was the moment when I knew I loved her."
        fix="when"
      />
    </NoteSlide>

    <NoteSlide title="說未來的時間，when 子句用現在式">
      <NoteFix
        wrong="Call me on the day when you will arrive."
        right="Call me on the day when you arrive."
        fix="arrive."
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
