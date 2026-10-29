<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// present-use-temporary-situations, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="I'm living 表示住在這裡是暫時的">
      <NoteWords
        :size="36"
        :parts="[
          { t: 'I\'m', role: '主詞 + be' },
          { t: 'living', role: '動詞-ing', kind: 'key' },
          { t: 'with my friend', kind: 'dim' },
          { t: 'in Wolverhampton.', role: '地點', kind: 'dim' },
        ]"
      />
      <p class="translation">我現在跟我朋友一起住在伍爾弗漢普頓。</p>
    </NoteSlide>
    <NoteSlide title="現在簡單式說長久的情況，進行式說暫時的情況" mark="living">
      <div class="rows is-labeled">
        <div>
          <span class="term">長久</span>
          <span
            ><NoteMark sentence="I live in Taipei." :marks="['live']" /><span class="translation"
              >我住在台北。</span
            ></span
          >
        </div>
        <div>
          <span class="term">暫時</span>
          <span
            ><NoteMark sentence="I'm living in Taipei this year." :marks="['living']" /><span
              class="translation"
              >我今年住在台北。</span
            ></span
          >
        </div>
        <div>
          <span class="term">長久</span>
          <span
            ><NoteMark sentence="My mum works at the hospital." :marks="['works']" /><span
              class="translation"
              >我媽在醫院工作。</span
            ></span
          >
        </div>
        <div>
          <span class="term">暫時</span>
          <span
            ><NoteMark sentence="My mum is working today." :marks="['working']" /><span
              class="translation"
              >我媽今天要上班。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="只維持一段時間的情況，用現在進行式" mark="living">
      <NoteFix
        wrong="This month I stay with my grandparents."
        right="This month I'm staying with my grandparents."
        :fix="['I\'m', 'staying']"
      />
    </NoteSlide>
    <NoteSlide title="一輩子的事不是暫時的情況" mark="living">
      <NoteFix
        wrong="My parents are living in Canada all their lives."
        right="My parents have lived in Canada all their lives."
        :fix="['have', 'lived']"
      />
    </NoteSlide>
    <NoteSlide title="現在進行式要有 am、is 或 are" mark="I'm">
      <NoteFix
        wrong="I studying at a language school this year."
        right="I'm studying at a language school this year."
        :fix="['I\'m']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
