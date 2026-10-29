<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-negative-573, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + shall not + 原形動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'This way,', kind: 'dim' },
          { t: 'students', role: '主詞' },
          { t: 'shall not', kind: 'key', ring: true },
          { t: 'die', role: '原形動詞' },
          { t: 'of boredom or feel that their stay was useless.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="shall not、shan't、原形動詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">shall not</span>
          <span>不會、不得。很正式。</span>
        </div>
        <div>
          <span class="term">shan't</span>
          <span>縮寫，比較口語，主要用在英式英文。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>不會發生或不准發生的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="合約和規定" mark="shall not">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="The tenant shall not change the locks on the front door."
              :marks="['shall not']"
            /><span class="translation">房客不得更換前門的鎖。</span></span
          >
        </div>
      </div>
      <p class="remark">合約和正式的規定常用 shall not 說不准做的事。</p>
    </NoteSlide>
    <NoteSlide title="很正式的信件用 I shall not be able to 說以後不能做的事">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="I regret that I shall not be able to attend the meeting on Friday."
              :marks="['shall not be able to']"
            /><span class="translation">很遺憾我星期五將無法出席會議。</span></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="shall 的否定是 shall not，不用 don't" mark="shall not">
      <NoteFix
        wrong="You helped our family through a hard year. We don't shall forget this."
        right="You helped our family through a hard year. We shall not forget this."
        :fix="['shall', 'not']"
      />
    </NoteSlide>
    <NoteSlide title="not 放在 shall 後面" mark="shall">
      <NoteFix
        wrong="Exams start at nine sharp. Students not shall be late."
        right="Exams start at nine sharp. Students shall not be late."
        :fix="['shall', 'be']"
      />
    </NoteSlide>
    <NoteSlide title="shall not 後面直接接原形動詞" mark="shall not">
      <NoteFix
        wrong="Both sides have signed. The contract shall not to be changed."
        right="Both sides have signed. The contract shall not be changed."
        :fix="['be']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
