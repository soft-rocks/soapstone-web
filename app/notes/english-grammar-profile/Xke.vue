<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// nouns-form-as-complement-of-be, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="be 後面的名詞片語說明主詞是誰">
      <NoteWords
        :size="32"
        :parts="[
          { t: 'He', role: '主詞' },
          { t: 'is', role: 'be' },
          { t: 'a student.', role: '補語', kind: 'key' },
        ]"
      />
      <p class="translation">他是學生。</p>
      <p class="remark">主詞和補語指同一個人。</p>
    </NoteSlide>

    <NoteSlide title="補語可以是職業、名詞片語、人名或複數名詞" mark="a student.">
      <div class="rows is-labeled">
        <div>
          <span class="term">a + 職業</span>
          <span
            ><NoteMark sentence="My mother is a nurse." :marks="['a nurse']" /><span
              class="translation"
              >我媽媽是護理師。</span
            ></span
          >
        </div>
        <div>
          <span class="term">+ 形容詞</span>
          <span
            ><NoteMark sentence="She is a good friend." :marks="['a good friend']" /><span
              class="translation"
              >她是一個好朋友。</span
            ></span
          >
        </div>
        <div>
          <span class="term">人名</span>
          <span
            ><NoteMark sentence="Hi Rie, it's Mohamad." :marks="['Mohamad']" /><span
              class="translation"
              >嗨 Rie，我是 Mohamad。</span
            ></span
          >
        </div>
        <div>
          <span class="term">複數名詞</span>
          <span
            ><NoteMark sentence="They are doctors." :marks="['doctors']" /><span class="translation"
              >他們是醫生。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="there is 和 there are 說明有什麼東西" mark="is">
      <div class="rows is-labeled">
        <div>
          <span class="term">there is</span>
          <span
            ><NoteMark sentence="There is a big garden." :marks="['a big garden']" /><span
              class="translation"
              >有一個大院子。</span
            ></span
          >
        </div>
        <div>
          <span class="term">there are</span>
          <span
            ><NoteMark sentence="There are two bathrooms." :marks="['two bathrooms']" /><span
              class="translation"
              >有兩間浴室。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="單數的職業名詞前面要加 a 或 an" mark="a">
      <NoteFix wrong="My father is engineer." right="My father is an engineer." fix="an" />
    </NoteSlide>

    <NoteSlide title="主詞和名詞補語中間要有 be" mark="is">
      <NoteFix wrong="She a teacher." right="She is a teacher." fix="is" />
    </NoteSlide>

    <NoteSlide title="主詞是複數，補語也用複數" mark="a student.">
      <NoteFix
        wrong="My brothers are a student."
        right="My brothers are students."
        fix="students"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
