<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// passives-use-present-continuous-future-reference, as slides, in the order of content.md. One
// point per slide: the title names it, the diagram shows it, and `mark` circles the matching
// words of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="are being 加過去分詞，再加未來的時間">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'We', role: '主詞' },
          { t: 'are being', role: 'am / is / are being', kind: 'key' },
          { t: 'visited', role: '過去分詞', kind: 'key' },
          { t: 'by our sales director', role: 'by + 做動作的人', kind: 'dim' },
          { t: 'on Thursday morning.', role: '未來的時間' },
        ]"
      />
      <p class="translation">我們的業務總監星期四早上會來拜訪我們。</p>
    </NoteSlide>

    <NoteSlide title="時間詞決定說現在還是未來" mark="on Thursday morning">
      <div class="rows is-labeled">
        <div>
          <span class="term">現在</span>
          <span
            ><NoteMark
              sentence="The kitchen is being painted at the moment."
              :marks="['at the moment']"
            /><span class="translation">廚房現在正在油漆。</span></span
          >
        </div>
        <div>
          <span class="term">未來</span>
          <span
            ><NoteMark
              sentence="The kitchen is being painted next week."
              :marks="['next week']"
            /><span class="translation">廚房下星期要油漆。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="常用的動詞：hold、deliver、visit" mark="visited">
      <div class="rows is-labeled">
        <div>
          <span class="term">hold</span>
          <span
            ><NoteMark
              sentence="The meeting is being held in Room 5 tomorrow."
              :marks="['held']"
            /><span class="translation">會議明天在五號教室開。</span></span
          >
        </div>
        <div>
          <span class="term">deliver</span>
          <span
            ><NoteMark
              sentence="The new sofa is being delivered on Friday."
              :marks="['delivered']"
            /><span class="translation">新沙發星期五會送來。</span></span
          >
        </div>
        <div>
          <span class="term">visit</span>
          <span
            ><NoteMark
              sentence="We are being visited by the director tomorrow."
              :marks="['visited']"
            /><span class="translation">總監明天要來拜訪我們。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="用 is being，不用 is been" mark="being">
      <NoteFix
        wrong="The meeting is been held in Room 5 tomorrow."
        right="The meeting is being held in Room 5 tomorrow."
        fix="being"
      />
    </NoteSlide>

    <NoteSlide title="being 前面要有 am、is 或 are" mark="are">
      <NoteFix
        wrong="The new sofa being delivered on Friday."
        right="The new sofa is being delivered on Friday."
        fix="is"
      />
    </NoteSlide>

    <NoteSlide title="being 後面接過去分詞" mark="visited">
      <NoteFix
        wrong="We are being visiting by the director tomorrow."
        right="We are being visited by the director tomorrow."
        fix="visited"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
