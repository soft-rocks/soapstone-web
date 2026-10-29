<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adverbs-form-time-end-position, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="時間副詞放在句尾">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'We', role: '主詞' },
          { t: 'can', role: '助動詞', kind: 'dim' },
          { t: 'meet', role: '動詞' },
          { t: 'tomorrow.', role: '時間副詞', kind: 'key' },
        ]"
      />
      <p class="translation">我們可以明天見面。</p>
    </NoteSlide>

    <NoteSlide title="受詞放在動詞後面、時間副詞前面" mark="tomorrow">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'I\'ll', role: '主詞', kind: 'dim' },
          { t: 'call', role: '動詞' },
          { t: 'you', role: '受詞' },
          { t: 'tonight.', role: '時間副詞', kind: 'key' },
        ]"
      />
      <p class="translation">我今晚打電話給你。</p>
    </NoteSlide>

    <NoteSlide title="地點在前面，時間在後面" mark="tomorrow">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'We', role: '主詞', kind: 'dim' },
          { t: 'went', role: '動詞' },
          { t: 'to the zoo', role: '地點' },
          { t: 'yesterday.', role: '時間副詞', kind: 'key' },
        ]"
      />
      <p class="translation">我們昨天去了動物園。</p>
    </NoteSlide>

    <NoteSlide title="句尾的時間副詞" mark="tomorrow">
      <div class="rows is-labeled">
        <div>
          <span class="term">today、tomorrow、yesterday、tonight</span>
          <span>哪一天或哪一個晚上</span>
        </div>
        <div>
          <span class="term">now</span>
          <span>現在</span>
        </div>
        <div>
          <span class="term">soon</span>
          <span>不久以後</span>
        </div>
        <div>
          <span class="term">later</span>
          <span>等一下，晚一點</span>
        </div>
        <div>
          <span class="term">early、late</span>
          <span>比平常或約好的時間早、晚</span>
        </div>
        <div>
          <span class="term">again</span>
          <span>再一次</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="late 是很晚，lately 是最近">
      <div class="rows is-labeled">
        <div>
          <span class="term">late</span>
          <span
            ><NoteMark sentence="I got up late." :marks="['late']" /><span class="translation"
              >我起得很晚。</span
            ></span
          >
        </div>
        <div>
          <span class="term">lately</span>
          <span
            ><NoteMark sentence="Have you seen Tom lately?" :marks="['lately']" /><span
              class="translation"
              >你最近有看到 Tom 嗎？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="時間副詞不放在動詞和受詞中間">
      <NoteFix
        wrong="I will call tonight my grandma."
        right="I will call my grandma tonight."
        fix="my grandma tonight"
      />
    </NoteSlide>

    <NoteSlide title="tomorrow 前面不加介系詞" mark="tomorrow">
      <NoteFix wrong="See you at tomorrow." right="See you tomorrow." fix="you tomorrow" />
    </NoteSlide>

    <NoteSlide title="地點放在時間前面">
      <NoteFix
        wrong="We went yesterday to the beach."
        right="We went to the beach yesterday."
        fix="to the beach yesterday"
      />
    </NoteSlide>

    <NoteSlide title="表示很晚用 late">
      <NoteFix
        wrong="On Saturdays I wake up lately."
        right="On Saturdays I wake up late."
        fix="late"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
