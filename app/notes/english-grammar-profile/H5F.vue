<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-use-results, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + had been + -ing, + so + 主詞 + 過去式">
      <div class="rows is-labeled">
        <div>
          <span class="term">had been + -&#x2060;ing</span>
          <span>持續一段時間的事。</span>
        </div>
        <div>
          <span class="term">so / because</span>
          <span>連接原因和結果。</span>
        </div>
        <div>
          <span class="term">過去式</span>
          <span>結果。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="看得到的結果">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="We had been working hard all morning, so by lunchtime I was very tired."
              :marks="[]"
            /><span class="translation"
              >我們一整個早上都工作得很辛苦，所以到午餐時我很累。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">這個句型常說看得到的結果，像累、髒、濕。</p>
    </NoteSlide>
    <NoteSlide title="結果比動作重要">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="Her eyes were red. She had been crying." :marks="[]" /><span
              class="translation"
              >她的眼睛紅紅的。她剛剛一直在哭。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">說話者想強調的是結果。動作本身可能已經停了。</p>
    </NoteSlide>
    <NoteSlide title="結果用過去式">
      <NoteFix
        wrong="It had been snowing, so I had been staying inside."
        right="It had been snowing, so I stayed inside."
        :fix="['stayed']"
      />
    </NoteSlide>
    <NoteSlide title="been 前面要有 had" mark="been">
      <NoteFix
        wrong="She been running, so she was out of breath."
        right="She had been running, so she was out of breath."
        :fix="['had']"
      />
    </NoteSlide>
    <NoteSlide title="說過去的事用 had been" mark="had been">
      <NoteFix
        wrong="Last night he has been working, so he was tired."
        right="Last night he had been working, so he was tired."
        :fix="['had']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
