<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// future-form-questions-399, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="是非疑問句">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="Are you going to come tomorrow evening?" :marks="[]" /><span
              class="translation"
              >你明天晚上要來嗎？</span
            ></span
          >
        </div>
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="Yes, I am. / No, I'm not." :marks="[]" /><span class="translation"
              >要。／不要。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">簡答用 be 動詞。</p>
    </NoteSlide>
    <NoteSlide title="wh- 疑問句">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="What colour paint are we going to use?" :marks="[]" /><span
              class="translation"
              >我們要用什麼顏色的油漆？</span
            ></span
          >
        </div>
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="Who is going to drive?" :marks="[]" /><span class="translation"
              >誰要開車？</span
            ></span
          >
        </div>
      </div>
      <p class="remark">疑問詞是主詞時，句子不換位置。</p>
    </NoteSlide>
    <NoteSlide title="wh- 疑問句裡，be 動詞放在主詞前面">
      <NoteFix
        wrong="What you are going to wear?"
        right="What are you going to wear?"
        :fix="['are', 'going']"
      />
    </NoteSlide>
    <NoteSlide title="be going to 的疑問句用 be 動詞開頭，不用 do">
      <NoteFix wrong="Do you going to come?" right="Are you going to come?" :fix="['Are']" />
    </NoteSlide>
    <NoteSlide title="簡答用問句裡的 be 動詞">
      <NoteFix
        wrong="Are you going to stay? — Yes, I will."
        right="Are you going to stay? — Yes, I am."
        :fix="['am.']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
