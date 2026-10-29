<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adjectives-form-before-nouns, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="比較級放在名詞前面" mark="my older brother">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'My parents bought', kind: 'dim' },
          { t: 'a', role: '限定詞' },
          { t: 'bigger', role: '比較級', kind: 'key', ring: true },
          { t: 'car.', role: '名詞', kind: 'key' },
        ]"
      />
      <p class="translation">我爸媽買了一輛比較大的車。</p>
    </NoteSlide>

    <NoteSlide title="長的形容詞用 more" mark="older">
      <NoteMark sentence="We need a more comfortable chair." :marks="['more comfortable chair']" />
      <p class="translation">我們需要一張比較舒服的椅子。</p>
    </NoteSlide>

    <NoteSlide title="older 和 younger" mark="older brother">
      <div class="rows is-labeled">
        <div>
          <span class="term">哥哥</span>
          <span><NoteMark sentence="my older brother" :marks="['older brother']" /></span>
        </div>
        <div>
          <span class="term">弟弟</span>
          <span><NoteMark sentence="my younger brother" :marks="['younger brother']" /></span>
        </div>
        <div>
          <span class="term">姊姊</span>
          <span><NoteMark sentence="my older sister" :marks="['older sister']" /></span>
        </div>
        <div>
          <span class="term">妹妹</span>
          <span><NoteMark sentence="my younger sister" :marks="['younger sister']" /></span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="older 前面不加 more" mark="older">
      <NoteFix
        wrong="She lives with her more old sister."
        right="She lives with her older sister."
        fix="older"
      />
    </NoteSlide>

    <NoteSlide title="good 的比較級是 better" mark="older">
      <NoteFix wrong="He wants a gooder job." right="He wants a better job." fix="better" />
    </NoteSlide>

    <NoteSlide title="older 前面用 an" mark="my older">
      <NoteFix wrong="I have a older brother." right="I have an older brother." fix="an">
        <code>older</code> 的發音以母音開頭。
      </NoteFix>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
