<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-use-pointing-in-formal-contexts, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between
// two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="See、Look at、Refer to、Note 請讀者看文件的某個部分" mark="See">
      <div class="rows is-labeled">
        <div>
          <span class="term">See</span>
          <span
            ><NoteMark sentence="See the attached file for details." :marks="['See']" /><span
              class="translation"
              >詳情請見附件。</span
            ></span
          >
        </div>
        <div>
          <span class="term">Look at</span>
          <span
            ><NoteMark
              sentence="The manager went through the report. Look at Table 2. Sales went up in March."
              :marks="['Look at']"
            /><span class="translation">經理逐項說明報告。請看表二，三月的業績上升了。</span></span
          >
        </div>
        <div>
          <span class="term">Refer to</span>
          <span
            ><NoteMark
              sentence="You asked about the meeting time again. Please refer to my previous email."
              :marks="['refer to']"
            /><span class="translation">你又問了會議時間。請參考我上一封電子郵件。</span></span
          >
        </div>
        <div>
          <span class="term">Note</span>
          <span
            ><NoteMark
              sentence="The letter from the visa office ends with a reminder. Note that the office is closed on Fridays."
              :marks="['Note that']"
            /><span class="translation"
              >簽證辦公室的信最後有一個提醒。請注意，辦公室星期五不上班。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="正式文件常寫得很短" mark="See">
      <NoteMark
        sentence="The festival newsletter came this morning. See below for the full list of events."
        :marks="['See below']"
      />
      <p class="translation">音樂節的通訊今天早上寄來了。完整的活動清單請見下方。</p>
    </NoteSlide>

    <NoteSlide title="refer 後面要接 to" mark="See">
      <NoteFix wrong="Please refer page 12." right="Please refer to page 12." fix="refer to" />
    </NoteSlide>

    <NoteSlide title="look 後面要接 at" mark="See">
      <NoteFix
        wrong="Look the table at the end of the report."
        right="Look at the table at the end of the report."
        fix="Look at"
      />
    </NoteSlide>

    <NoteSlide title="祈使句用原形動詞開頭" mark="See">
      <NoteFix wrong="Seeing the attached report." right="See the attached report." fix="See" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
