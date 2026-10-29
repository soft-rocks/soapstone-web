<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-advice, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="You + ought to + 原形動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'If you\'d rather go with your friend,', kind: 'dim' },
          { t: 'you', kind: 'key', ring: true },
          { t: 'ought to', kind: 'key', ring: true },
          { t: 'talk', role: '原形動詞' },
          { t: 'to your parents first.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="you ought to、I think、原形動詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">you ought to</span>
          <span>你應該。</span>
        </div>
        <div>
          <span class="term">I think</span>
          <span>放在前面，讓建議更客氣。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>建議的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="加上 first" mark="first.">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="You want to change your essay topic? You ought to ask your teacher first." :marks="['first.']" /><span
              class="translation"
              >你想換作文題目？你應該先問你的老師。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">建議做事的順序時，常在句尾加 first。</p>
    </NoteSlide>
    <NoteSlide title="ought 後面要接 to" mark="ought">
      <NoteFix wrong="Your neighbours' music keeps you awake. You ought talk to them." right="Your neighbours' music keeps you awake. You ought to talk to them." :fix="['to']" />
    </NoteSlide>
    <NoteSlide title="to 後面接原形動詞" mark="to">
      <NoteFix
        wrong="You've got a high temperature. I think you ought to went home."
        right="You've got a high temperature. I think you ought to go home."
        :fix="['go']"
      />
    </NoteSlide>
    <NoteSlide title="ought to 後面直接接原形動詞，不再加 to" mark="ought to">
      <NoteFix wrong="You've run three races this week. You ought to to rest your legs." right="You've run three races this week. You ought to rest your legs." :fix="['rest.']" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
