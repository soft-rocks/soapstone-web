<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-form-use-background-information-with-time-conjunction, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="After / When + 主詞 + had been + -ing, + 主詞 + 過去式">
      <div class="rows is-labeled">
        <div>
          <span class="term">after / when</span>
          <span>在……之後、當……的時候。</span>
        </div>
        <div>
          <span class="term">had been + -&#x2060;ing</span>
          <span>已經持續一段時間的背景。</span>
        </div>
        <div>
          <span class="term">過去式</span>
          <span>主要的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="說每天的習慣">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="After we had been sunbathing all day, we went to a restaurant every evening."
              :marks="[]"
            /><span class="translation"
              >我們每天曬了一整天的太陽以後，晚上就去一家餐廳。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">after we had been + -&#x2060;ing 也可以說度假時每天的順序。</p>
    </NoteSlide>
    <NoteSlide title="子句的位置">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="After she had been studying for hours, she took a break."
              :marks="[]"
            /><span class="translation">她讀了好幾個小時以後，休息了一下。</span></span
          >
        </div>
      </div>
      <p class="remark">時間子句放在句首時，後面加逗號。</p>
    </NoteSlide>
    <NoteSlide title="been 前面要有 had" mark="been">
      <NoteFix
        wrong="After I been waiting for an hour, I left."
        right="After I had been waiting for an hour, I left."
        :fix="['had']"
      />
    </NoteSlide>
    <NoteSlide title="主要的事用過去式">
      <NoteFix
        wrong="After we had been walking, we had been having lunch."
        right="After we had been walking, we had lunch."
        :fix="['lunch.']"
      />
    </NoteSlide>
    <NoteSlide title="had been 後面的動詞要加 -ing" mark="had been">
      <NoteFix
        wrong="When he had been work for a year, he got a pay rise."
        right="When he had been working for a year, he got a pay rise."
        :fix="['working']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
