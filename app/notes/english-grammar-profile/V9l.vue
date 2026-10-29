<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// passives-form-present-continuous-negative, as slides, in the order of content.md. One point per slide: the title names it, the
// diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on separate
// lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="are not being 加過去分詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Students', role: '主詞' },
          { t: 'are', role: 'am / is / are' },
          { t: 'not being', role: 'not being', kind: 'key' },
          { t: 'educated', role: '過去分詞', kind: 'key' },
          { t: 'equally.', role: '方式', kind: 'dim' },
        ]"
      />
      <p class="translation">學生並沒有受到平等的教育。</p>
    </NoteSlide>

    <NoteSlide title="抱怨、說明現在的情況、安慰" mark="are not being educated">
      <div class="rows is-labeled">
        <div>
          <span class="term">抱怨</span>
          <span
            ><NoteMark
              sentence="The animals aren't being treated properly."
              :marks="['aren\'t being treated']"
            /><span class="translation">那些動物沒有得到好好的照顧。</span></span
          >
        </div>
        <div>
          <span class="term">現在的情況</span>
          <span
            ><NoteMark
              sentence="This room isn't being used at the moment."
              :marks="['isn\'t being used']"
            /><span class="translation">這個房間現在沒人在用。</span></span
          >
        </div>
        <div>
          <span class="term">安慰</span>
          <span
            ><NoteMark
              sentence="Don't worry, you aren't being tested today."
              :marks="['aren\'t being tested']"
            /><span class="translation">別擔心，你今天不用考試。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="not 放在 are 後面，being 前面" mark="not being">
      <NoteFix
        wrong="Students are being not educated equally."
        right="Students are not being educated equally."
        fix="not being"
      />
    </NoteSlide>

    <NoteSlide title="被動的否定不用 don't" mark="are not">
      <NoteFix
        wrong="The animals don't being treated well."
        right="The animals aren't being treated well."
        fix="aren't"
      />
    </NoteSlide>

    <NoteSlide title="用 isn't being，不用 isn't been" mark="being">
      <NoteFix
        wrong="The room isn't been used at the moment."
        right="The room isn't being used at the moment."
        fix="being"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
