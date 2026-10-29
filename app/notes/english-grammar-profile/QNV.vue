<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-use-reason, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + 過去式 + because + 主詞 + was / were + -ing">
      <div class="rows is-labeled">
        <div>
          <span class="term">because</span>
          <span>因為。</span>
        </div>
        <div>
          <span class="term">was / were + -&#x2060;ing</span>
          <span>當時正在進行的事，當作原因。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="because 子句放在前面" mark="because">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="Because she was sitting in the corner, she could see the whole café."
              :marks="['Because']"
            /><span class="translation">因為她坐在角落，她可以看到整個咖啡館。</span></span
          >
        </div>
      </div>
      <p class="remark">because 子句放在句首時，後面加逗號。</p>
    </NoteSlide>
    <NoteSlide title="解釋自己為什麼沒做">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="I didn't answer because I was driving." :marks="[]" /><span
              class="translation"
              >我沒接，因為我在開車。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">過去進行式常用來解釋為什麼沒接電話或沒來。</p>
    </NoteSlide>
    <NoteSlide title="-ing 前面要有 was 或 were" mark="were">
      <NoteFix
        wrong="I didn't hear you because I listening to music."
        right="I didn't hear you because I was listening to music."
        :fix="['was']"
      />
    </NoteSlide>
    <NoteSlide title="主詞是 they，用 were" mark="they">
      <NoteFix
        wrong="They came because they was making a film."
        right="They came because they were making a film."
        :fix="['were']"
      />
    </NoteSlide>
    <NoteSlide title="because 和 so 不一起用" mark="because">
      <NoteFix
        wrong="Because it was raining, so we stayed inside."
        right="Because it was raining, we stayed inside."
        :fix="['we']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
