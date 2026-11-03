<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adjectives-form-combining-two-adjectives-with-but, as slides, in the order of content.md.
// One point per slide: the title names it, the diagram shows it, and `mark` circles the
// matching words of the note's sentence. Keep the parts of one sentence on one line: Vue drops
// the whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="but 連接意思相反的兩個形容詞" mark="cloudy but fine">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'The weather', role: '主詞', kind: 'dim' },
          { t: 'was', role: 'be' },
          { t: 'cloudy', role: '缺點', kind: 'key' },
          { t: 'but', role: '連接詞', kind: 'key', ring: true },
          { t: 'fine.', role: '優點', kind: 'key' },
        ]"
      />
      <p class="translation">天氣多雲，不過還不錯。</p>
      <p class="remark">兩個形容詞都形容主詞。</p>
    </NoteSlide>

    <NoteSlide title="缺點和優點可以前後對調" mark="cloudy but fine">
      <div class="rows is-labeled">
        <div>
          <span class="term">缺點 + but + 優點</span>
          <span
            ><NoteMark sentence="The room was small but clean." :marks="['small but clean']" /><span
              class="translation"
              >房間很小，但是很乾淨。</span
            ></span
          >
        </div>
        <div>
          <span class="term">優點 + but + 缺點</span>
          <span
            ><NoteMark
              sentence="The restaurant was nice but expensive."
              :marks="['nice but expensive']"
            /><span class="translation">那家餐廳很不錯，但是很貴。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="意思一樣用 and，意思相反用 but" mark="but">
      <NoteFork
        stem="The café was cosy"
        :branches="[
          { head: 'and', rest: 'friendly', meaning: '一樣是優點', zh: '咖啡館很溫馨，也很親切。' },
          {
            head: 'but',
            rest: 'very noisy',
            meaning: '意思相反',
            zh: '咖啡館很溫馨，但是非常吵。',
          },
        ]"
      />
    </NoteSlide>

    <NoteSlide title="意思不相反的形容詞用 and 連接">
      <NoteFix
        wrong="My new neighbours are kind but helpful."
        right="My new neighbours are kind and helpful."
        fix="and"
      />
    </NoteSlide>

    <NoteSlide title="but 後面接形容詞，不接副詞" mark="but fine">
      <NoteFix
        wrong="The bag was cheap but beautifully."
        right="The bag was cheap but beautiful."
        fix="beautiful"
      />
    </NoteSlide>

    <NoteSlide title="主詞和形容詞中間要有 be" mark="was">
      <NoteFix
        wrong="The movie long but interesting."
        right="The movie was long but interesting."
        fix="was"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
