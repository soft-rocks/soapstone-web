<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// present-use-temporary-repeated-actions, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="進行式說最近反覆做、只維持一段時間的事">
      <NoteWords
        :size="36"
        :parts="[
          { t: 'I\'m', role: '主詞 + be' },
          { t: 'doing', role: '動詞-ing', kind: 'key' },
          { t: 'a lot of great leisure activities.', role: '受詞', kind: 'dim' },
        ]"
      />
      <p class="translation">我最近參加了很多很棒的休閒活動。</p>
    </NoteSlide>
    <NoteSlide title="暫時的習慣用進行式，一直都有的習慣用現在簡單式" mark="doing">
      <div class="rows is-labeled">
        <div>
          <span class="term">一直都有</span>
          <span
            ><NoteMark sentence="I go swimming every Saturday." :marks="['go']" /><span
              class="translation"
              >我每個星期六都去游泳。</span
            ></span
          >
        </div>
        <div>
          <span class="term">暫時</span>
          <span
            ><NoteMark
              sentence="I'm going swimming every Saturday this summer."
              :marks="['I\'m', 'going']"
            /><span class="translation">今年夏天我每個星期六都去游泳。</span></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="暫時反覆的動作用現在進行式" mark="doing">
      <NoteFix
        wrong="These days I take the train to work because my car is broken."
        right="These days I'm taking the train to work because my car is broken."
        :fix="['I\'m', 'taking']"
      />
    </NoteSlide>
    <NoteSlide title="長久的事實用現在簡單式" mark="doing">
      <NoteFix
        wrong="The earth is going round the sun once a year."
        right="The earth goes round the sun once a year."
        :fix="['goes']"
      />
    </NoteSlide>
    <NoteSlide title="現在進行式要有 am、is 或 are" mark="I'm">
      <NoteFix
        wrong="She running every morning this month."
        right="She's running every morning this month."
        :fix="['She\'s']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
