<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adjectives-form-with-my-or-your, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="有 my 或 your，最高級前面不加 the" mark="your oldest">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Bring', kind: 'dim' },
          { t: 'your', role: '所有格', kind: 'key', ring: true },
          { t: 'warmest', role: '最高級', kind: 'key', ring: true },
          { t: 'coat.', role: '名詞' },
          { t: 'It\'s snowing.', kind: 'dim' },
        ]"
      />
      <p class="translation">帶你最保暖的外套，山上在下雪。</p>
    </NoteSlide>

    <NoteSlide title="常用來說家人、東西和事情">
      <div class="rows is-labeled">
        <div>
          <span class="term">家人</span>
          <span
            ><NoteMark
              sentence="My youngest daughter starts school on Monday."
              :marks="['My youngest daughter']"
            /><span class="translation">我的小女兒星期一開始上學。</span></span
          >
        </div>
        <div>
          <span class="term">東西</span>
          <span
            ><NoteMark
              sentence="Put on your best shoes for the wedding."
              :marks="['your best shoes']"
            /><span class="translation">穿你最好的鞋去婚禮。</span></span
          >
        </div>
        <div>
          <span class="term">事情</span>
          <span
            ><NoteMark sentence="Maths is my worst subject." :marks="['my worst subject']" /><span
              class="translation"
              >數學是我最差的科目。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="有 my 就不加 the" mark="your">
      <NoteFix
        wrong="I gave it to the my youngest brother."
        right="I gave it to my youngest brother."
        fix="my youngest"
      />
    </NoteSlide>

    <NoteSlide title="所有格放在最前面" mark="your oldest">
      <NoteFix
        wrong="Wear oldest your clothes."
        right="Wear your oldest clothes."
        fix="your oldest"
      />
    </NoteSlide>

    <NoteSlide title="短的形容詞，最高級加 -est" mark="oldest">
      <NoteFix
        wrong="My most young brother is six."
        right="My youngest brother is six."
        fix="youngest"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
