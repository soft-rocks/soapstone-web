<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-use-defining-with-whose, as slides, in the order of content.md. One point per slide: the title names it, the
// diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="whose 加名詞說明是哪些人，不加逗號">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I had the opportunity to teach', kind: 'dim' },
          { t: 'Vietnamese children', role: '人' },
          { t: 'whose parents', role: 'whose + 名詞', kind: 'key' },
          { t: 'had immigrated to Australia.', role: '動詞' },
        ]"
      />
      <p class="translation">我有機會教一些越南孩子，他們的父母之前移民到了澳洲。</p>
    </NoteSlide>

    <NoteSlide title="whose 常接家人或工作關係的名詞" mark="whose parents">
      <div class="rows is-labeled">
        <div>
          <span class="term">家人</span>
          <span
            ><NoteMark
              sentence="I know a woman whose son plays for the national team."
              :marks="['whose son']"
            /><span class="translation">我認識一位女士，她兒子是國家隊的球員。</span></span
          >
        </div>
        <div>
          <span class="term">家人</span>
          <span
            ><NoteMark
              sentence="Students whose parents work late can stay in the library until seven."
              :marks="['whose parents']"
            /><span class="translation">父母工作到很晚的學生可以在圖書館待到七點。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="whose 加名詞也可以當子句的受詞" mark="whose parents">
      <div class="rows is-labeled">
        <div>
          <span class="term">受詞</span>
          <span
            ><NoteMark
              sentence="She's the author whose books my daughter loves."
              :marks="['whose books']"
            /><span class="translation">她就是寫了我女兒很喜歡的那些書的作者。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="說誰的家人用 whose，不用 who's" mark="whose">
      <NoteFix
        wrong="I have a friend who's father is a pilot."
        right="I have a friend whose father is a pilot."
        fix="whose"
      />
    </NoteSlide>

    <NoteSlide title="whose 已經表示他的，不用 that his" mark="whose">
      <NoteFix
        wrong="I met a man that his wife is from Brazil."
        right="I met a man whose wife is from Brazil."
        fix="whose"
      />
    </NoteSlide>

    <NoteSlide title="動詞跟著 whose 後面的名詞變化" mark="whose parents">
      <NoteFix
        wrong="I know a girl whose parents is teachers."
        right="I know a girl whose parents are teachers."
        fix="are"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
