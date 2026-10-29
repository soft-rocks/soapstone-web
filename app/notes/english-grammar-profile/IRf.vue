<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// questions-form-clause-clause, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="or 連接兩個完整的疑問句">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Should I go there and talk to her,', role: '疑問句 A', kind: 'key' },
          { t: 'or', role: 'or' },
          { t: 'should I stay here?', role: '疑問句 B', kind: 'key' },
        ]"
      />
      <p class="translation">我應該過去跟她談，還是應該待在這裡？</p>
    </NoteSlide>

    <NoteSlide title="疑問句 B 的助動詞和時態可以和 A 不同" mark="should I">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Are you still with him,', role: 'are：現在式' },
          { t: 'or', kind: 'dim' },
          { t: 'did you two break up?', role: 'did：過去式', kind: 'key' },
        ]"
      />
      <p class="translation">你還跟他在一起，還是你們分手了？</p>
    </NoteSlide>

    <NoteSlide title="主詞和助動詞相同時，疑問句 B 可以只留下片語" mark="should I">
      <div class="rows is-labeled">
        <div>
          <span class="term">完整的疑問句<br /><i>選項分得清楚</i></span>
          <span
            ><NoteMark
              sentence="Should I go there, or should I stay here?"
              :marks="['should I#2']"
            /><span class="translation">我應該過去，還是應該待在這裡？</span></span
          >
        </div>
        <div>
          <span class="term">只留片語</span>
          <span
            ><NoteMark sentence="Should I go there or stay here?" :marks="['stay here']" /><span
              class="translation"
              >我應該過去還是待在這裡？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="疑問句 B 也要把助動詞放在主詞前面" mark="should I">
      <NoteFix
        wrong="Are you coming with us, or you are staying at home?"
        right="Are you coming with us, or are you staying at home?"
        fix="are you#2"
      />
    </NoteSlide>

    <NoteSlide title="疑問句 B 不能少了助動詞" mark="should">
      <NoteFix
        wrong="Did you finish the report, or you forgot?"
        right="Did you finish the report, or did you forget?"
        fix="did you forget"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
