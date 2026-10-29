<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-use-emphasising-an-instruction, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between
// two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="說完安排，再加一句 Don't 提醒對方" mark="Don't be late">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'The train leaves at eight.', role: '安排', kind: 'dim' },
          { t: 'Don\'t miss it!', role: '提醒', kind: 'key', ring: true },
        ]"
      />
      <p class="translation">火車八點開，別錯過了！</p>
    </NoteSlide>

    <NoteSlide title="常見的提醒" mark="Don't">
      <div class="rows is-labeled">
        <div>
          <span class="term">Don't forget</span>
          <span
            ><NoteMark
              sentence="It's her eightieth birthday today. Call your grandmother tonight. Don't forget."
              :marks="['Don\'t forget']"
            /><span class="translation">今天是她八十歲生日。今晚打給你奶奶，別忘了。</span></span
          >
        </div>
        <div>
          <span class="term">Don't lose it</span>
          <span
            ><NoteMark
              sentence="Here's the key to the flat. Don't lose it."
              :marks="['Don\'t lose it']"
            /><span class="translation">這是公寓的鑰匙，別弄丟了。</span></span
          >
        </div>
        <div>
          <span class="term">Don't tell anyone</span>
          <span
            ><NoteMark
              sentence="I'm getting married in May. Don't tell anyone yet."
              :marks="['Don\'t tell anyone']"
            /><span class="translation">我五月要結婚了，先別告訴任何人。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="否定祈使句用 Don't 開頭" mark="Don't">
      <NoteFix
        wrong="Bring your passport. Not forget!"
        right="Bring your passport. Don't forget!"
        fix="Don't"
      />
    </NoteSlide>

    <NoteSlide title="late 是形容詞，前面要加 be" mark="be late">
      <NoteFix
        wrong="See you at six. Don't late!"
        right="See you at six. Don't be late!"
        fix="be"
      />
    </NoteSlide>

    <NoteSlide title="Don't 後面用原形動詞" mark="Don't be">
      <NoteFix
        wrong="Keep the key safe. Don't losing it."
        right="Keep the key safe. Don't lose it."
        fix="lose"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
