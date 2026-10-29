<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-form-with-time-adjuncts, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="時間副詞語說出什麼時候" mark="last summer">
      <NoteWords
        :size="20"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'worked', role: '過去簡單式', kind: 'key' },
          { t: 'as a helper at a summer camp in Canada', kind: 'dim' },
          { t: 'last summer.', role: '時間副詞語', kind: 'key', ring: true },
        ]"
      />
      <p class="translation">去年夏天，我在加拿大的一個夏令營當幫手。</p>
      <p class="remark">說話者在求職信裡介紹經驗。</p>
    </NoteSlide>

    <NoteSlide title="說出時間點" mark="last summer">
      <div class="rows is-labeled">
        <div>
          <span class="term">last</span>
          <span
            ><NoteMark sentence="They painted the kitchen last month." :marks="['last month']"
          /></span>
        </div>
        <div>
          <span class="term">ago</span>
          <span
            ><NoteMark sentence="The bus left five minutes ago." :marks="['five minutes ago']"
          /></span>
        </div>
        <div>
          <span class="term">in / on / at</span>
          <span><NoteMark sentence="My grandfather was born in 1948." :marks="['in 1948']" /></span>
        </div>
        <div>
          <span class="term">yesterday</span>
          <span
            ><NoteMark sentence="She called you earlier today." :marks="['earlier today']"
          /></span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="說出持續多久" mark="last summer">
      <div class="rows is-labeled">
        <div>
          <span class="term">for</span>
          <span
            ><NoteMark
              sentence="We waited at the airport for four hours."
              :marks="['for four hours']"
            /><span class="translation">我們在機場等了四個小時。</span></span
          >
        </div>
        <div>
          <span class="term">during</span>
          <span
            ><NoteMark
              sentence="Nobody spoke during the meeting."
              :marks="['during the meeting']"
            /><span class="translation">開會的時候沒有人說話。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="last 前面不加介系詞" mark="last summer">
      <NoteFix
        wrong="I visited my aunt in last summer."
        right="I visited my aunt last summer."
        fix="last summer."
      />
    </NoteSlide>

    <NoteSlide title="ago 搭配過去簡單式" mark="worked">
      <NoteFix
        wrong="I have moved to Taipei two years ago."
        right="I moved to Taipei two years ago."
        fix="moved"
      />
    </NoteSlide>

    <NoteSlide title="ago 放在一段時間後面" mark="last summer">
      <NoteFix
        wrong="I started this job ago three months."
        right="I started this job three months ago."
        fix="three months ago."
      />
    </NoteSlide>

    <NoteSlide title="往回算用 ago，不用 before" mark="last summer">
      <NoteFix
        wrong="We met before five years."
        right="We met five years ago."
        fix="five years ago."
      />
    </NoteSlide>

    <NoteSlide title="持續多久用 for" mark="last summer">
      <NoteFix
        wrong="She stayed in London during three weeks."
        right="She stayed in London for three weeks."
        fix="for"
      />
    </NoteSlide>

    <NoteSlide title="ago 和 before" mark="last summer">
      <div class="rows is-labeled">
        <div>
          <span class="term">從現在算</span>
          <span
            ><NoteMark sentence="I lost my keys two days ago." :marks="['two days ago']" /><span
              class="translation"
              >我兩天前弄丟了鑰匙。</span
            ></span
          >
        </div>
        <div>
          <span class="term">從過去算</span>
          <span
            ><NoteMark
              sentence="I realised I had lost them two days before."
              :marks="['two days before']"
            /><span class="translation">我才發現是兩天前就弄丟了。</span></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
