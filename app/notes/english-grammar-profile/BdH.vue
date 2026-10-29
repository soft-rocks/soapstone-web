<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// present-form-indirect-questions, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="Do you know 後面的子句用直述句的語序">
      <NoteWords
        :size="32"
        :parts="[
          { t: 'Do you know', role: 'Do you know', kind: 'dim' },
          { t: 'which present', role: '疑問詞', kind: 'key' },
          { t: 'I', role: '主詞', ring: true },
          { t: 'like', role: '動詞', ring: true },
          { t: 'best?', kind: 'dim' },
        ]"
      />
      <p class="translation">你知道我最喜歡哪一個禮物嗎？</p>
    </NoteSlide>
    <NoteSlide title="放進 Do you know 後面，主詞移到動詞前面" mark="I">
      <div class="rows is-labeled">
        <div>
          <span class="term">直接</span>
          <span
            ><NoteMark sentence="Where is the station?" :marks="['is', 'the', 'station?']" /><span
              class="translation"
              >車站在哪裡？</span
            ></span
          >
        </div>
        <div>
          <span class="term">間接</span>
          <span
            ><NoteMark
              sentence="Do you know where the station is?"
              :marks="['the', 'station', 'is?']"
            /><span class="translation">你知道車站在哪裡嗎？</span></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="間接問句不加 do 和 does" mark="like">
      <div class="rows is-labeled">
        <div>
          <span class="term">直接</span>
          <span
            ><NoteMark sentence="What time does the film start?" :marks="['does', 'start?']" /><span
              class="translation"
              >電影幾點開始？</span
            ></span
          >
        </div>
        <div>
          <span class="term">間接</span>
          <span
            ><NoteMark
              sentence="Do you know what time the film starts?"
              :marks="['starts?']"
            /><span class="translation">你知道電影幾點開始嗎？</span></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="疑問詞後面也可以接 to 加原形動詞" mark="which">
      <div class="rows is-labeled">
        <div>
          <span class="term">how to</span>
          <span
            ><NoteMark
              sentence="Do you know how to get to my house?"
              :marks="['how', 'to', 'get']"
            /><span class="translation">你知道怎麼去我家嗎？</span></span
          >
        </div>
        <div>
          <span class="term">what to</span>
          <span
            ><NoteMark
              sentence="Do you know what to do in this town?"
              :marks="['what', 'to', 'do#2']"
            /><span class="translation">你知道這個小鎮有什麼好玩的嗎？</span></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="is 放在主詞後面" mark="I">
      <NoteFix
        wrong="Do you know where is the bank?"
        right="Do you know where the bank is?"
        :fix="['the', 'bank', 'is?']"
      />
    </NoteSlide>
    <NoteSlide title="間接問句裡不加 does" mark="like">
      <NoteFix
        wrong="Do you know what time does the shop open?"
        right="Do you know what time the shop opens?"
        :fix="['opens?']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
