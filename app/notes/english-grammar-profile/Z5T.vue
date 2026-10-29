<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adjectives-form-combining-more-than-two-adjectives, as slides, in the order of content.md.
// One point per slide: the title names it, the diagram shows it, and `mark` circles the
// matching words of the note's sentence. Keep the parts of one sentence on one line: Vue drops
// the whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="前面的形容詞用逗號隔開，最後一個前面放 and" mark="and">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'She is', kind: 'dim' },
          { t: 'beautiful,', role: '形容詞', kind: 'key' },
          { t: 'intelligent,', role: '形容詞', kind: 'key' },
          { t: 'funny', role: '形容詞', kind: 'key' },
          { t: 'and', role: '連接詞', kind: 'key', ring: true },
          { t: 'very reliable.', role: '形容詞' },
        ]"
      />
      <p class="translation">她漂亮、聰明、風趣，而且非常可靠。</p>
    </NoteSlide>

    <NoteSlide title="very 放在它修飾的形容詞前面" mark="very">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'funny', kind: 'dim' },
          { t: 'and', kind: 'dim' },
          { t: 'very', role: '修飾 reliable', kind: 'key', ring: true },
          { t: 'reliable', role: '形容詞' },
        ]"
      />
      <p class="remark">
        <code>not very</code> 也放在形容詞前面，像 <code>not very handsome</code>。
      </p>
    </NoteSlide>

    <NoteSlide title="and 前面可以加逗號，也可以不加" mark="funny and">
      <div class="rows is-labeled">
        <div>
          <span class="term">不加逗號</span>
          <span
            ><NoteMark
              sentence="Our classroom is large, bright and noisy."
              :marks="['bright and']"
            /><span class="translation">我們的教室很大、很明亮，也很吵。</span></span
          >
        </div>
        <div>
          <span class="term">加逗號</span>
          <span
            ><NoteMark
              sentence="The lesson was short, clear, and useful."
              :marks="['clear, and']"
            /><span class="translation">那堂課很短、很清楚，也很有用。</span></span
          >
        </div>
      </div>
      <p class="remark">兩種寫法都對，同一篇文章裡用同一種。</p>
    </NoteSlide>

    <NoteSlide title="最後一個形容詞前面要加 and" mark="and">
      <NoteFix
        wrong="My teacher is kind, funny, smart."
        right="My teacher is kind, funny and smart."
        fix="and smart"
      />
    </NoteSlide>

    <NoteSlide title="be 和第一個形容詞中間不加逗號" mark="is">
      <NoteFix
        wrong="He is, tall, thin and friendly."
        right="He is tall, thin and friendly."
        fix="is tall"
      />
    </NoteSlide>

    <NoteSlide title="be 後面接形容詞，不接副詞" mark="reliable">
      <NoteFix
        wrong="The work was quick, easy and carefully."
        right="The work was quick, easy and careful."
        fix="careful"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
