<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-non-finite-after-if, as slides, in the order of content.md. One point per slide: the title names it, the
// diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="if 後面直接接過去分詞，省略了主詞和 be">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Please do not hesitate to ask for further assistance', role: '主要子句' },
          { t: 'if', role: '條件', kind: 'key' },
          { t: 'needed.', role: '過去分詞', kind: 'key' },
        ]"
      />
      <p class="translation">如果需要進一步的協助，請儘管提出。</p>
      <p class="remark"><code>if needed</code> 等於 <code>if it is needed</code>。</p>
    </NoteSlide>

    <NoteSlide title="常見的說法：if required、if asked、if taken" mark="if needed.">
      <div class="rows is-labeled">
        <div>
          <span class="term">if required</span>
          <span
            ><NoteMark sentence="Add more water if required." :marks="['if required.']" /><span
              class="translation"
              >如果需要，就多加點水。</span
            ></span
          >
        </div>
        <div>
          <span class="term">if taken</span>
          <span
            ><NoteMark
              sentence="This medicine can cause headaches if taken on an empty stomach."
              :marks="['if taken']"
            /><span class="translation">這種藥空腹吃的話可能會頭痛。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="子句可以放在名詞後面，前後加逗號" mark="if needed.">
      <div class="rows is-labeled">
        <div>
          <span class="term">句中</span>
          <span
            ><NoteMark
              sentence="These changes, if introduced, could save the company a lot of money."
              :marks="['if introduced,']"
            /><span class="translation">這些改變如果實施的話，可以幫公司省下很多錢。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="省略主詞和 be 的條件子句用過去分詞" mark="needed.">
      <NoteFix
        wrong="Ask the staff for help if needing."
        right="Ask the staff for help if needed."
        fix="needed."
      />
    </NoteSlide>

    <NoteSlide title="省略的主詞要是主要子句的主詞">
      <NoteFix
        wrong="If cooked too long, I don't like vegetables."
        right="If cooked too long, vegetables lose their taste."
        fix="vegetables"
      >
        煮的是蔬菜，不是 <code>I</code>。
      </NoteFix>
    </NoteSlide>

    <NoteSlide title="if 後面用過去分詞 required" mark="needed.">
      <NoteFix
        wrong="Sign the form again if require."
        right="Sign the form again if required."
        fix="required."
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
