<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// questions-use-seeking-agreement, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="先說一件事，再用短短的否定疑問句請對方同意">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'They\'re filming part of Harry Potter at our school.', role: '說一件事' },
          { t: 'Isn\'t that great?', role: '否定疑問句', kind: 'key' },
        ]"
      />
      <p class="translation">他們正在我們學校拍《哈利波特》的部分場景。是不是很棒？</p>
    </NoteSlide>

    <NoteSlide title="過去的事用 Wasn't that，看法後面加 Don't you think" mark="Isn't that">
      <div class="rows is-labeled">
        <div>
          <span class="term">Wasn't that</span>
          <span
            ><NoteMark
              sentence="The whole class passed the exam. Wasn't that brilliant?"
              :marks="['Wasn\'t that']"
            /><span class="translation">全班都考過了。是不是很厲害？</span></span
          >
        </div>
        <div>
          <span class="term">Don't you think</span>
          <span
            ><NoteMark
              sentence="This town is more beautiful in winter. Don't you think?"
              :marks="['Don\'t you think']"
            /><span class="translation">這個鎮冬天更美。你不覺得嗎？</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="還沒發生的事用 Wouldn't that be" mark="Isn't">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'We could all go camping together this summer.', role: '想像的事', kind: 'dim' },
          { t: 'Wouldn\'t that be fun?', role: 'Wouldn\'t that be', kind: 'key' },
        ]"
      />
      <p class="translation">我們今年夏天可以一起去露營。那不是很好玩嗎？</p>
    </NoteSlide>

    <NoteSlide title="想像的事不用 Isn't that be" mark="Isn't">
      <NoteFix
        wrong="We could go to Paris next summer. Isn't that be wonderful?"
        right="We could go to Paris next summer. Wouldn't that be wonderful?"
        fix="Wouldn't"
      />
    </NoteSlide>

    <NoteSlide title="否定疑問句要有主詞 that 或 it" mark="that">
      <NoteFix
        wrong="My sister is having twins. Isn't amazing?"
        right="My sister is having twins. Isn't that amazing?"
        fix="that"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
