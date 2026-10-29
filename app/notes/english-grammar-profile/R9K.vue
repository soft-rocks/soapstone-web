<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-with-whose-name, as slides, in the order of content.md. One point per slide: the title names it, the
// diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="whose name 說前面那個人的名字">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'We have', kind: 'dim' },
          { t: 'a new employee', role: '名詞' },
          { t: 'whose name', role: '他的名字', kind: 'key' },
          { t: 'is Mary Watts.', role: '動詞 + 補語' },
        ]"
      />
      <p class="translation">我們有一位新員工，名字叫 Mary Watts。</p>
    </NoteSlide>

    <NoteSlide title="說明是哪一個人不加逗號，補充資料加逗號" mark="whose name">
      <div class="rows is-labeled">
        <div>
          <span class="term">限定</span>
          <span
            ><NoteMark
              sentence="I met a woman whose name was also Emily."
              :marks="['whose name']"
            /><span class="translation">我認識了一個也叫 Emily 的女人。</span></span
          >
        </div>
        <div>
          <span class="term">非限定</span>
          <span
            ><NoteMark
              sentence="Let me introduce my roommate, whose name is Nikos."
              :marks="['whose name']"
            /><span class="translation">我來介紹我的室友，他叫 Nikos。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="whose name 可以當子句的主詞或受詞" mark="whose name">
      <div class="rows is-labeled">
        <div>
          <span class="term">主詞</span>
          <span
            ><NoteMark sentence="an employee whose name is Mary Watts" :marks="['whose name']"
          /></span>
        </div>
        <div>
          <span class="term">受詞</span>
          <span
            ><NoteMark
              sentence="There was a teacher whose name everyone knew."
              :marks="['whose name']"
            /><span class="translation">有一位每個人都知道名字的老師。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="說誰的名字用 whose，不用 who's" mark="whose name">
      <NoteFix
        wrong="I have a friend who's name is Lisa."
        right="I have a friend whose name is Lisa."
        fix="whose"
      >
        <code>who's</code> 是 <code>who is</code>。
      </NoteFix>
    </NoteSlide>

    <NoteSlide title="whose 已經表示他的，不再加 his" mark="whose name">
      <NoteFix
        wrong="I met a man who his name was Carlos."
        right="I met a man whose name was Carlos."
        fix="whose"
      />
    </NoteSlide>

    <NoteSlide title="whose name 當受詞時，句尾不再加 it">
      <NoteFix
        wrong="There's a singer whose name I always forget it."
        right="There's a singer whose name I always forget."
        fix="forget."
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
