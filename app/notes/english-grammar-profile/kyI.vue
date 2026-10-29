<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adjectives-form-with-than, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="than 後面放比較的對象" mark="than my old phone">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'The sea', role: '主詞' },
          { t: 'is', role: 'be', kind: 'dim' },
          { t: 'warmer', role: '比較級', kind: 'key' },
          { t: 'than the pool.', role: 'than + 名詞片語', kind: 'key', ring: true },
        ]"
      />
      <p class="translation">海水比游泳池的水溫暖。</p>
    </NoteSlide>

    <NoteSlide title="than 後面的形式" mark="than">
      <div class="rows is-labeled">
        <div>
          <span class="term">名詞片語</span>
          <span
            ><NoteMark sentence="Paris is bigger than Rome." :marks="['than Rome']" /><span
              class="translation"
              >巴黎比羅馬大。</span
            ></span
          >
        </div>
        <div>
          <span class="term">受格代名詞</span>
          <span
            ><NoteMark sentence="She is taller than him." :marks="['than him']" /><span
              class="translation"
              >她比他高。</span
            ></span
          >
        </div>
        <div>
          <span class="term">主格 + 助動詞</span>
          <span
            ><NoteMark sentence="You are faster than I am." :marks="['than I am']" /><span
              class="translation"
              >你比我快。</span
            ></span
          >
        </div>
        <div>
          <span class="term">所有格代名詞</span>
          <span
            ><NoteMark sentence="Their kitchen is cleaner than ours." :marks="['than ours']" /><span
              class="translation"
              >他們的廚房比我們的乾淨。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="比較級後面接 than，不接 that" mark="than">
      <NoteFix wrong="Paris is bigger that Rome." right="Paris is bigger than Rome." fix="than" />
    </NoteSlide>

    <NoteSlide title="比較用 than，不用 then" mark="than">
      <NoteFix wrong="My brother is older then me." right="My brother is older than me." fix="than">
        <code>then</code> 是然後、那時候。
      </NoteFix>
    </NoteSlide>

    <NoteSlide title="比較的東西要對得上" mark="my old phone">
      <NoteFix wrong="My car is newer than Tom." right="My car is newer than Tom's." fix="Tom's">
        車跟車比。<code>Tom's</code> 是 Tom 的車。
      </NoteFix>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
