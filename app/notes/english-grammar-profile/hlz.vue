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
    <NoteSlide title="有 my 或 your，最高級前面不加 the" mark="your oldest clothes">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Bring', kind: 'dim' },
          { t: 'your', role: '所有格', kind: 'key', ring: true },
          { t: 'warmest', role: '最高級', kind: 'key' },
          { t: 'coat.', role: '名詞' },
          { t: 'It\'s snowing.', kind: 'dim' },
        ]"
      />
      <p class="translation">帶你最保暖的外套，在下雪了。</p>
    </NoteSlide>

    <NoteSlide title="常用來說家人、東西和事情" mark="oldest">
      <div class="rows is-labeled">
        <div>
          <span class="term">家人</span>
          <span
            ><NoteMark
              sentence="My youngest daughter starts school next week."
              :marks="['My youngest daughter']"
            /><span class="translation">我的小女兒下禮拜開始上學。</span></span
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
            ><NoteMark sentence="Math is my worst subject." :marks="['my worst subject']" /><span
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

    <NoteSlide title="說最好的那件，用最高級 best" mark="oldest">
      <NoteFix
        wrong="This is my good dress. I only wear it to weddings."
        right="This is my best dress. I only wear it to weddings."
        fix="best"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
