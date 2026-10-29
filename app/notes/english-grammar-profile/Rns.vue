<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adjectives-form-ier, as slides, in the order of content.md. One point per slide: the title
// names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="字尾的 y 改成 i，再加 -er" mark="easier">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'My sister', role: '主詞' },
          { t: 'is', role: 'be', kind: 'dim' },
          { t: 'happier', role: '形容詞-ier', kind: 'key', ring: true },
          { t: 'than before.', role: 'than + 比較的對象', kind: 'key' },
        ]"
      />
      <p class="translation">我姊姊比以前開心。</p>
      <p class="remark"><code>happy</code> 變成 <code>happier</code>。</p>
    </NoteSlide>

    <NoteSlide title="常見的加 -ier 的形容詞" mark="easier">
      <div class="rows is-labeled">
        <div>
          <span class="term">easy → easier</span>
          <span
            ><NoteMark sentence="This test is easier than the last one." :marks="['easier']" /><span
              class="translation"
              >這次考試比上次簡單。</span
            ></span
          >
        </div>
        <div>
          <span class="term">busy → busier</span>
          <span
            ><NoteMark sentence="My parents are busier than I am." :marks="['busier']" /><span
              class="translation"
              >我爸媽比我忙。</span
            ></span
          >
        </div>
        <div>
          <span class="term">heavy → heavier</span>
          <span
            ><NoteMark sentence="My bag is heavier than yours." :marks="['heavier']" /><span
              class="translation"
              >我的包包比你的重。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="to 不定詞說明哪一方面比較容易" mark="easier to use">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'it\'s small and', kind: 'dim' },
          { t: 'easier', role: '形容詞-ier', kind: 'key' },
          { t: 'to use', role: 'to 不定詞', kind: 'key', ring: true },
          { t: 'than other phones', role: 'than + 比較的對象' },
        ]"
      />
      <p class="translation">它很小，而且比其他手機好用。</p>
    </NoteSlide>

    <NoteSlide title="y 要改成 i" mark="easier">
      <NoteFix
        wrong="This test is easyer than the last one."
        right="This test is easier than the last one."
        fix="easier"
      />
    </NoteSlide>

    <NoteSlide title="-ier 已經是比較級，前面不加 more" mark="easier">
      <NoteFix wrong="I am more happier now." right="I am happier now." fix="happier" />
    </NoteSlide>

    <NoteSlide title="加的是 -ier，不是 -r" mark="easier">
      <NoteFix
        wrong="My bag is heavyr than yours."
        right="My bag is heavier than yours."
        fix="heavier"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
