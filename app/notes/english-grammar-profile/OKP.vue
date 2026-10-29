<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// passives-form-use-have-object-infinitive, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="have 加受詞，再接原形動詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'to just have', role: 'have' },
          { t: 'him', role: '受詞', kind: 'key' },
          { t: 'fill out', role: '原形動詞', kind: 'key' },
          { t: 'a multiple-choice form', role: '受詞', kind: 'dim' },
        ]"
      />
      <p class="translation">光是叫他填一份選擇題表格</p>
    </NoteSlide>

    <NoteSlide title="have 安排，make 強迫，get 說服" mark="have him fill out">
      <div class="rows is-labeled">
        <div>
          <span class="term">have</span>
          <span
            ><NoteMark sentence="I'll have my secretary call you." :marks="['have', 'call']" /><span
              class="translation"
              >我會叫我的秘書打給你。</span
            ></span
          >
        </div>
        <div>
          <span class="term">make</span>
          <span
            ><NoteMark
              sentence="The teacher made us stay after class."
              :marks="['made', 'stay']"
            /><span class="translation">老師逼我們下課後留下來。</span></span
          >
        </div>
        <div>
          <span class="term">get</span>
          <span
            ><NoteMark
              sentence="I got him to fill out the form."
              :marks="['got', 'to fill out']"
            /><span class="translation">我說服他填了表格。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="受詞做事用原形動詞，受詞被做用過去分詞" mark="him fill out">
      <div class="rows is-labeled">
        <div>
          <span class="term">原形動詞</span>
          <span
            ><NoteMark
              sentence="I had the mechanic check the brakes."
              :marks="['the mechanic check']"
            /><span class="translation">我叫技師檢查煞車。</span></span
          >
        </div>
        <div>
          <span class="term">過去分詞</span>
          <span
            ><NoteMark sentence="I had the brakes checked." :marks="['the brakes checked']" /><span
              class="translation"
              >我請人檢查了煞車。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="受詞後面不加 to" mark="fill out">
      <NoteFix
        wrong="We had them to practise their English."
        right="We had them practise their English."
        fix="practise"
      />
    </NoteSlide>

    <NoteSlide title="受詞是做事的人，用原形動詞" mark="fill out">
      <NoteFix
        wrong="I'll have my secretary called you."
        right="I'll have my secretary call you."
        fix="call"
      />
    </NoteSlide>

    <NoteSlide title="叫別人做事，不用 -ing" mark="fill out">
      <NoteFix
        wrong="The doctor had me taking a deep breath."
        right="The doctor had me take a deep breath."
        fix="take"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
