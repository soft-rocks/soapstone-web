<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// present-use-events-in-progress-859, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="planning 說這幾天正在進行的計畫">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'I\'m', role: '主詞 + be' },
          { t: 'planning', role: '動詞-ing', kind: 'key' },
          { t: 'a picnic', role: '受詞' },
          { t: 'in the park on Saturday.', kind: 'dim' },
        ]"
      />
      <p class="translation">我正在計畫星期六去公園野餐。</p>
    </NoteSlide>
    <NoteSlide title="這些動詞說一段時間裡慢慢進行的事" mark="planning">
      <div class="rows is-labeled">
        <div>
          <span class="term">計畫</span>
          <span
            ><NoteMark sentence="I'm thinking about changing my job." :marks="['thinking']" /><span
              class="translation"
              >我在考慮換工作。</span
            ></span
          >
        </div>
        <div>
          <span class="term">預期</span>
          <span
            ><NoteMark
              sentence="We're expecting a lot of guests tonight."
              :marks="['expecting']"
            /><span class="translation">我們今晚預計會有很多客人。</span></span
          >
        </div>
        <div>
          <span class="term">變化</span>
          <span
            ><NoteMark sentence="She's recovering from a bad cold." :marks="['recovering']" /><span
              class="translation"
              >她感冒很嚴重，正在康復。</span
            ></span
          >
        </div>
        <div>
          <span class="term">努力</span>
          <span
            ><NoteMark
              sentence="He's struggling with his maths homework."
              :marks="['struggling']"
            /><span class="translation">他的數學作業寫得很吃力。</span></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="be expecting a baby 的意思是懷孕" mark="planning">
      <div class="rows is-labeled">
        <div>
          <span class="term">等人來</span>
          <span
            ><NoteMark
              sentence="I'm expecting my cousin to visit me."
              :marks="['expecting']"
            /><span class="translation">我在等我表妹來看我。</span></span
          >
        </div>
        <div>
          <span class="term">懷孕</span>
          <span
            ><NoteMark
              sentence="My sister is expecting a baby in May."
              :marks="['expecting', 'baby']"
            /><span class="translation">我姊姊五月要生寶寶。</span></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="正在進行的計畫用現在進行式" mark="planning">
      <NoteFix
        wrong="I plan a party for my mum's birthday. Can you help?"
        right="I'm planning a party for my mum's birthday. Can you help?"
        :fix="['I\'m', 'planning']"
      />
    </NoteSlide>
    <NoteSlide title="look forward to 後面接動詞-ing" mark="planning">
      <NoteFix
        wrong="I'm looking forward to see you."
        right="I'm looking forward to seeing you."
        :fix="['seeing']"
      />
    </NoteSlide>
    <NoteSlide title="plan 加 -ing 要重複 n" mark="planning">
      <NoteFix
        wrong="We're planing a trip to the mountains."
        right="We're planning a trip to the mountains."
        :fix="['planning']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
