<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// nouns-form-ing-forms-subject, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="動詞-&#x2060;ing 片語當主詞，動詞用單數">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'Driving', role: '動詞-ing', kind: 'key' },
          { t: 'in a city', role: '介系詞片語' },
          { t: 'is', role: '單數動詞', kind: 'key' },
          { t: 'stressful.', kind: 'dim' },
        ]"
      />
      <p class="translation">在城市裡開車壓力很大。</p>
    </NoteSlide>

    <NoteSlide title="動詞-&#x2060;ing 後面可以接受詞或介系詞片語" mark="Driving in a city">
      <div class="rows is-labeled">
        <div>
          <span class="term">只有動詞-&#x2060;ing</span>
          <span
            ><NoteMark sentence="Climbing is our favourite hobby." :marks="['Climbing']" /><span
              class="translation"
              >爬山是我們最喜歡的嗜好。</span
            ></span
          >
        </div>
        <div>
          <span class="term">+ 受詞</span>
          <span
            ><NoteMark
              sentence="Learning a language takes time."
              :marks="['Learning a language']"
            /><span class="translation">學一種語言需要時間。</span></span
          >
        </div>
        <div>
          <span class="term">+ 介系詞片語</span>
          <span
            ><NoteMark
              sentence="Working until midnight is not reasonable."
              :marks="['Working until midnight']"
            /><span class="translation">工作到半夜是不合理的。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="兩個動詞-&#x2060;ing 用 and 連接，動詞用複數" mark="is">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Swimming and cycling', role: '兩個動詞-ing', kind: 'key' },
          { t: 'are', role: '複數動詞', kind: 'key' },
          { t: 'good for your heart.', kind: 'dim' },
        ]"
      />
      <p class="translation">游泳和騎腳踏車對心臟很好。</p>
    </NoteSlide>

    <NoteSlide title="句首當主詞的動詞要加 -&#x2060;ing" mark="Driving">
      <NoteFix
        wrong="Drive in a city is stressful."
        right="Driving in a city is stressful."
        fix="Driving"
      />
    </NoteSlide>

    <NoteSlide title="主詞是 Watching，不是 films，動詞用單數" mark="is">
      <NoteFix
        wrong="Watching films in English help me a lot."
        right="Watching films in English helps me a lot."
        fix="helps"
      />
    </NoteSlide>

    <NoteSlide title="說一般的活動，動詞-&#x2060;ing 前面不加 the" mark="Driving">
      <NoteFix wrong="The smoking is bad for you." right="Smoking is bad for you." fix="Smoking" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
