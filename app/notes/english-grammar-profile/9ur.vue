<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-use-desired-states-with-there-ought, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="There + ought to be + 名詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'There', kind: 'key', ring: true },
          { t: 'ought to be', kind: 'key', ring: true },
          { t: 'a lift,', role: '名詞' },
          { t: 'since the rooms were on the fourth floor.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="there ought to be、名詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">there ought to be</span>
          <span>應該有。</span>
        </div>
        <div>
          <span class="term">名詞</span>
          <span>應該有、可是現在沒有的東西。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="投訴信" mark="There ought to be">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="There was no hot water. There ought to be a notice about it."
              :marks="['There ought to be']"
            /><span class="translation">沒有熱水。應該要有告示說明。</span></span
          >
        </div>
      </div>
      <p class="remark">投訴信常先說現在的問題，再用 there ought to be 說應該有的東西。</p>
    </NoteSlide>
    <NoteSlide title="建議">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="There ought to be more buses in the evening."
              :marks="['There ought to be more']"
            /><span class="translation">晚上應該要有更多公車。</span></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="ought 後面要接 to" mark="ought">
      <NoteFix
        wrong="Our room was on the fifth floor. There ought be a lift in the hotel."
        right="Our room was on the fifth floor. There ought to be a lift in the hotel."
        :fix="['to']"
      />
    </NoteSlide>
    <NoteSlide title="ought to 後面要接 be" mark="ought to">
      <NoteFix
        wrong="Hundreds of people work in this business park. There ought to a bus stop here."
        right="Hundreds of people work in this business park. There ought to be a bus stop here."
        :fix="['be']"
      />
    </NoteSlide>
    <NoteSlide title="to 後面接原形 be" mark="to">
      <NoteFix
        wrong="The waiting room is always full. There ought to are more seats."
        right="The waiting room is always full. There ought to be more seats."
        :fix="['be']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
