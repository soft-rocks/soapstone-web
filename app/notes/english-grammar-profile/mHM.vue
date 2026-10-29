<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adjectives-form-with-too-prepositional-phrase, as slides, in the order of content.md. One
// point per slide: the title names it, the diagram shows it, and `mark` circles the matching
// words of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="for + 人說明對誰來說太怎麼樣" mark="for me">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'This bike', role: '主詞' },
          { t: 'is', role: 'be', kind: 'dim' },
          { t: 'too big', role: 'too + 形容詞', kind: 'key' },
          { t: 'for my son.', role: 'for + 人', kind: 'key', ring: true },
        ]"
      />
      <p class="translation">這台腳踏車對我兒子來說太大了。</p>
    </NoteSlide>

    <NoteSlide title="for 也可以接事情" mark="too small for">
      <NoteMark sentence="It's too cold for a picnic today." :marks="['too cold for a picnic']" />
      <p class="translation">今天太冷了，不適合野餐。</p>
    </NoteSlide>

    <NoteSlide title="in、at 說明在哪裡、什麼時候太怎麼樣" mark="too small">
      <div class="rows is-labeled">
        <div>
          <span class="term">in + 地方</span>
          <span
            ><NoteMark
              sentence="It's too cold in this room. Can I close the window?"
              :marks="['in this room']"
            /><span class="translation">這個房間裡太冷了，我可以關窗嗎？</span></span
          >
        </div>
        <div>
          <span class="term">at + 時間</span>
          <span
            ><NoteMark
              sentence="The roads are too busy at rush hour."
              :marks="['at rush hour']"
            /><span class="translation">尖峰時間路上車太多了。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="for 後面用受格" mark="me">
      <NoteFix
        wrong="This bag is too heavy for I."
        right="This bag is too heavy for me."
        fix="me"
      />
    </NoteSlide>

    <NoteSlide title="for 片語放在形容詞後面" mark="too small for me">
      <NoteFix
        wrong="The test was too for me difficult."
        right="The test was too difficult for me."
        fix="too difficult for me"
      />
    </NoteSlide>

    <NoteSlide title="說明對誰來說，用 for，不用 to" mark="for">
      <NoteFix wrong="The box is too heavy to me." right="The box is too heavy for me." fix="for" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
