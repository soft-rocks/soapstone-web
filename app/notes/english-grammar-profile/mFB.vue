<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adjectives-form-use-with-no-or-not-any, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between
// two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="not any 和 no 放在比較級前面，表示差距是零" mark="not any happier">
      <div class="rows is-labeled">
        <div>
          <span class="term">not any（口語）</span>
          <span
            ><NoteMark
              sentence="The new phone isn't any faster than my old one."
              :marks="['any faster']"
            /><span class="translation">新手機一點也沒有比我的舊手機快。</span></span
          >
        </div>
        <div>
          <span class="term">no（正式）</span>
          <span
            ><NoteMark
              sentence="Taking a taxi at rush hour is no faster than walking."
              :marks="['no faster']"
            /><span class="translation">尖峰時間搭計程車沒有比走路快。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="no + 比較級 + than 表示最多只有" mark="happier than">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'The water was', kind: 'dim' },
          { t: 'no higher', role: 'no + 比較級', kind: 'key', ring: true },
          { t: 'than my knees.', role: 'than + 範圍' },
        ]"
      />
      <p class="translation">水最多只到我的膝蓋。</p>
    </NoteSlide>

    <NoteSlide title="no better 說情況沒有改善" mark="not any happier">
      <NoteMark sentence="My cold is no better today." :marks="['no better']" />
      <p class="translation">我的感冒今天沒有好一點。</p>
    </NoteSlide>

    <NoteSlide title="no 前面不再加 not" mark="not any">
      <NoteFix
        wrong="The bus is not no cheaper than the train."
        right="The bus is no cheaper than the train."
        fix="no cheaper"
      />
    </NoteSlide>

    <NoteSlide title="any 後面要用比較級" mark="happier">
      <NoteFix
        wrong="The new office isn't any big than the old one."
        right="The new office isn't any bigger than the old one."
        fix="bigger"
      />
    </NoteSlide>

    <NoteSlide title="這裡的 any 要和 not 一起用" mark="not any">
      <NoteFix
        wrong="My coffee is any warmer now."
        right="My coffee isn't any warmer now."
        fix="isn't any"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
