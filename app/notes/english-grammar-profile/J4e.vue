<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// questions-form-use-strong-alternative, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="or 後面接完全相反的選項，讓讀者注意問題">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Is this new industry', role: '疑問句' },
          { t: 'a blessing for the region', role: '選項 A' },
          { t: 'or', role: 'or' },
          { t: 'the exact opposite?', role: '極端的選項 B', kind: 'key' },
        ]"
      />
      <p class="translation">這個新產業對這個地區是福氣，還是正好相反？</p>
    </NoteSlide>

    <NoteSlide
      title="選項 B 常是 the exact opposite、a disaster 這類說法"
      mark="the exact opposite"
    >
      <div class="rows is-labeled">
        <div>
          <span class="term">a waste of time</span>
          <span
            ><NoteMark
              sentence="Is the internet a useful tool for students or a waste of time?"
              :marks="['a waste of time']"
            /><span class="translation">網路對學生來說是有用的工具，還是浪費時間？</span></span
          >
        </div>
        <div>
          <span class="term">a disaster</span>
          <span
            ><NoteMark
              sentence="Is this new law a step forward or a disaster for workers?"
              :marks="['a disaster']"
            /><span class="translation">這條新法律對勞工來說是進步，還是一場災難？</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="說話時，這種問題表示說話者覺得答案是 B" mark="or">
      <NoteWords
        :size="32"
        :parts="[
          { t: 'Is this', kind: 'dim' },
          { t: 'a holiday', role: '選項 A' },
          { t: 'or', kind: 'dim' },
          { t: 'a punishment?', role: '說話者的感覺', kind: 'key' },
        ]"
      />
      <p class="translation">這是度假還是處罰？</p>
    </NoteSlide>

    <NoteSlide title="the exact opposite 要有 the" mark="the exact opposite">
      <NoteFix
        wrong="Is it a success or exact opposite?"
        right="Is it a success or the exact opposite?"
        fix="the"
      />
    </NoteSlide>

    <NoteSlide title="選擇疑問句用 or，不用 and" mark="or">
      <NoteFix
        wrong="Is social media a good thing and a danger?"
        right="Is social media a good thing or a danger?"
        fix="or"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
