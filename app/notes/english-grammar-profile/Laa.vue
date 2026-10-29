<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-use-emphasis-with-really, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + really + ought to + 原形動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'This is what almost everyone thinks, but', kind: 'dim' },
          { t: 'we', role: '主詞' },
          { t: 'really', kind: 'key', ring: true },
          { t: 'ought to', kind: 'key', ring: true },
          { t: 'think', role: '原形動詞' },
          { t: 'a little more about it.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="really、ought to、原形動詞" mark="ought to">
      <div class="rows is-labeled">
        <div>
          <span class="term">really</span>
          <span>真的。放在 ought to 前面，加強語氣。</span>
        </div>
        <div>
          <span class="term">ought to</span>
          <span>應該。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>說話者強烈建議的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="正式的 one">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="One really ought to know the facts first." :marks="['One']" /><span
              class="translation"
              >人真的應該先了解事實。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">正式的寫作常用 one 說一般人。</p>
    </NoteSlide>
    <NoteSlide title="給具體的建議">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="You really ought to ask about the timetable."
              :marks="['You really ought to']"
            /><span class="translation">你真的應該問一下時間表。</span></span
          >
        </div>
      </div>
      <p class="remark">you really ought to 常用來給對方一個重要的提醒。</p>
    </NoteSlide>
    <NoteSlide title="to 後面接原形動詞" mark="to">
      <NoteFix
        wrong="You really ought to asking."
        right="You really ought to ask."
        :fix="['ask.']"
      />
    </NoteSlide>
    <NoteSlide title="放在動詞前面要用副詞 really" mark="really">
      <NoteFix
        wrong="We real ought to think about it."
        right="We really ought to think about it."
        :fix="['really']"
      />
    </NoteSlide>
    <NoteSlide title="ought 後面要接 to" mark="ought">
      <NoteFix
        wrong="You really ought check the details."
        right="You really ought to check the details."
        :fix="['to']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
