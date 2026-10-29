<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-form-questions-774, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="Had + 主詞 + 過去分詞 + …？">
      <div class="rows is-labeled">
        <div>
          <span class="term">Had</span>
          <span>放在主詞前面。</span>
        </div>
        <div>
          <span class="term">過去分詞</span>
          <span>問的那件事。</span>
        </div>
        <div>
          <span class="term">疑問詞</span>
          <span>why、what、where、how 放在句首。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="故事裡的疑問">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="The question was: why had he done that?" :marks="[]" /><span
              class="translation"
              >問題是：他為什麼那樣做？</span
            ></span
          >
        </div>
      </div>
      <p class="remark">小說常用這種問句寫人物心裡的疑問。</p>
    </NoteSlide>
    <NoteSlide title="過去完成式的問句用 had，不用 did" mark="Had">
      <NoteFix
        wrong="Why did he had done that?"
        right="Why had he done that?"
        :fix="['had', 'done']"
      />
    </NoteSlide>
    <NoteSlide title="問句把 had 放在主詞前面" mark="Had">
      <NoteFix
        wrong="Why he had left so early?"
        right="Why had he left so early?"
        :fix="['had', 'left']"
      />
    </NoteSlide>
    <NoteSlide title="had 後面接過去分詞" mark="Had">
      <NoteFix
        wrong="Had you saw the film before?"
        right="Had you seen the film before?"
        :fix="['seen']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
