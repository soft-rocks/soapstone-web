<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-it-be-important-clause, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="It + is / was + important + (that) + 主詞 + 動詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">it</span>
          <span>形式主詞，指後面的子句。</span>
        </div>
        <div>
          <span class="term">important</span>
          <span>重要。</span>
        </div>
        <div>
          <span class="term">that</span>
          <span>可以省略。</span>
        </div>
        <div>
          <span class="term">子句</span>
          <span>重要的那件事，常用現在簡單式。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="給建議" mark="It's important that you">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="It's important that you take breaks."
              :marks="['It\'s important that you']"
            /><span class="translation">你要記得休息，這很重要。</span></span
          >
        </div>
      </div>
      <p class="remark">It's important that you ... 是很常見的建議方式。比 You must ... 委婉。</p>
    </NoteSlide>
    <NoteSlide title="前面加 I think">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="I think it's important that we listen to each other."
              :marks="['I think']"
            /><span class="translation">我覺得我們互相傾聽很重要。</span></span
          >
        </div>
      </div>
      <p class="remark">I think 讓建議更委婉。</p>
    </NoteSlide>
    <NoteSlide title="句子要有主詞">
      <NoteFix
        wrong="Is important that you sleep well."
        right="It's important that you sleep well."
        :fix="['It\'s']"
      />
    </NoteSlide>
    <NoteSlide title="that 子句要有自己的主詞" mark="that">
      <NoteFix
        wrong="It's important that eat healthy food."
        right="It's important that you eat healthy food."
        :fix="['you']"
      />
    </NoteSlide>
    <NoteSlide title="that 子句的主詞後面直接接動詞，不加 to" mark="that">
      <NoteFix
        wrong="It's important that you to drink water."
        right="It's important that you drink water."
        :fix="['drink']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
