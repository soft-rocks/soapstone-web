<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-use-negative-interrogative, as slides, in the order of content.md. One point per slide: the title names it, the
// diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on separate
// lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="助動詞加 n't 放在句首，表示感嘆" mark="Wouldn't it be wonderful">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Isn\'t', role: '助動詞 + n\'t', kind: 'key', ring: true },
          { t: 'it', role: '主詞' },
          { t: 'beautiful!', role: '形容詞', kind: 'key' },
        ]"
      />
      <p class="translation">真美啊！</p>
    </NoteSlide>

    <NoteSlide title="常見的說法：想像、讚嘆、希望對方同意、回想" mark="Wouldn't it">
      <div class="rows is-labeled">
        <div>
          <span class="term">想像</span>
          <span
            ><NoteMark
              sentence="Wouldn't it be lovely to live by the sea!"
              :marks="['Wouldn\'t it be lovely']"
            /><span class="translation">住在海邊該有多好！</span></span
          >
        </div>
        <div>
          <span class="term">讚嘆</span>
          <span
            ><NoteMark sentence="Isn't that amazing!" :marks="['Isn\'t that']" /><span
              class="translation"
              >太神奇了！</span
            ></span
          >
        </div>
        <div>
          <span class="term">希望對方同意</span>
          <span
            ><NoteMark sentence="Doesn't that sound great?" :marks="['Doesn\'t that sound']" /><span
              class="translation"
              >聽起來不是很棒嗎？</span
            ></span
          >
        </div>
        <div>
          <span class="term">回想</span>
          <span
            ><NoteMark sentence="Didn't we have a great time!" :marks="['Didn\'t we']" /><span
              class="translation"
              >我們玩得真開心！</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="表示讚嘆時，助動詞加 n't 放在主詞前面" mark="Wouldn't it">
      <NoteFix
        wrong="It wouldn't be wonderful!"
        right="Wouldn't it be wonderful!"
        fix="Wouldn't it"
      />
    </NoteSlide>

    <NoteSlide title="doesn't 後面用原形動詞" mark="be">
      <NoteFix wrong="Doesn't that sounds great?" right="Doesn't that sound great?" fix="sound" />
    </NoteSlide>

    <NoteSlide title="n't 跟著助動詞或 be" mark="Wouldn't">
      <NoteFix wrong="Not is it lovely!" right="Isn't it lovely!" fix="Isn't" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
