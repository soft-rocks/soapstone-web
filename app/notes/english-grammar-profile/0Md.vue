<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-negative-565, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + ought not to + 原形動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'We', role: '主詞' },
          { t: 'ought not to', kind: 'key', ring: true },
          { t: 'forget', role: '原形動詞' },
          {
            t: 'that the food industry has increased the number of chemicals in its products.',
            kind: 'dim',
          },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="ought not to、there ought not to be" mark="ought">
      <div class="rows is-labeled">
        <div>
          <span class="term">ought not to</span>
          <span>不應該。not 放在 ought 和 to 中間。</span>
        </div>
        <div>
          <span class="term">there ought not to be</span>
          <span>不應該有。說不應該存在的情況。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="not 的位置" mark="ought">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="Many families can't afford to eat well. We ought not to throw food away."
              :marks="['ought', 'not', 'to']"
            /><span class="translation">很多家庭吃不起好的食物。我們不應該把食物丟掉。</span></span
          >
        </div>
      </div>
      <p class="remark">not 放在 ought 後面、to 前面。</p>
    </NoteSlide>
    <NoteSlide title="not 放在 ought 後面" mark="ought">
      <NoteFix
        wrong="Many soldiers died for our freedom. We not ought to forget this."
        right="Many soldiers died for our freedom. We ought not to forget this."
        :fix="['ought', 'to']"
      />
    </NoteSlide>
    <NoteSlide title="ought 的否定是 ought not to，不用 don't" mark="ought not to">
      <NoteFix
        wrong="Your cough is getting worse. You don't ought to smoke."
        right="Your cough is getting worse. You ought not to smoke."
        :fix="['ought', 'not']"
      />
    </NoteSlide>
    <NoteSlide title="to 後面接原形動詞" mark="to">
      <NoteFix
        wrong="Our bin is full of bread again. We ought not to wasting food."
        right="Our bin is full of bread again. We ought not to waste food."
        :fix="['waste']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
