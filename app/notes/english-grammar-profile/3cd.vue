<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// present-use-speech-act-verbs, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="寫下 I apologize 的同時就完成了道歉">
      <NoteWords
        :size="32"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'apologize', role: '言語行為動詞', kind: 'key', ring: true },
          { t: 'for', role: 'for' },
          { t: 'missing your class.', role: '原因', kind: 'dim' },
        ]"
      />
      <p class="translation">很抱歉我沒去上你的課。</p>
    </NoteSlide>
    <NoteSlide title="這些動詞說出來就完成動作" mark="apologize">
      <div class="rows is-labeled">
        <div>
          <span class="term">suggest</span>
          <span
            ><NoteMark sentence="I suggest that we leave early." :marks="['suggest']" /><span
              class="translation"
              >我建議我們早點走。</span
            ></span
          >
        </div>
        <div>
          <span class="term">recommend</span>
          <span
            ><NoteMark sentence="I recommend the fish soup." :marks="['recommend']" /><span
              class="translation"
              >我推薦魚湯。</span
            ></span
          >
        </div>
        <div>
          <span class="term">promise</span>
          <span
            ><NoteMark sentence="I promise I won't be late." :marks="['promise']" /><span
              class="translation"
              >我保證不會遲到。</span
            ></span
          >
        </div>
        <div>
          <span class="term">thank</span>
          <span
            ><NoteMark sentence="We thank you for your help." :marks="['thank']" /><span
              class="translation"
              >我們感謝你的幫忙。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="apologise 和 apologize 是同一個字" mark="apologize">
      <div class="rows is-labeled">
        <div>
          <span class="term">美式</span>
          <span>apologize</span>
        </div>
        <div>
          <span class="term">英式</span>
          <span>apologise</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="apologise 後面接 for" mark="for">
      <NoteFix
        wrong="I apologise missing the meeting."
        right="I apologise for missing the meeting."
        :fix="['for']"
      />
    </NoteSlide>
    <NoteSlide title="suggest 後面不接 to 加原形動詞" mark="apologize">
      <NoteFix
        wrong="I suggest to take a taxi."
        right="I suggest taking a taxi."
        :fix="['taking']"
      />
    </NoteSlide>
    <NoteSlide title="recommend 後面接動詞-ing" mark="apologize">
      <NoteFix
        wrong="I recommend to visit the museum."
        right="I recommend visiting the museum."
        :fix="['visiting']"
      />
    </NoteSlide>
    <NoteSlide title="suggest 後面的子句不加 to" mark="apologize">
      <NoteFix
        wrong="I suggest you to go home early."
        right="I suggest you go home early."
        :fix="['go']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
