<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adverbs-form-degree-modifying-pronouns, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words
// of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="程度副詞放在不定代名詞前面">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'You can eat very well and pay', role: '主詞 + 動詞', kind: 'dim' },
          { t: 'almost', role: '程度副詞', kind: 'key' },
          { t: 'nothing.', role: '不定代名詞' },
        ]"
      />
      <p class="translation">你可以吃得很好，又幾乎不用花錢。</p>
    </NoteSlide>

    <NoteSlide title="各個程度副詞修飾的不定代名詞" mark="almost nothing.">
      <div class="rows is-labeled">
        <div>
          <span class="term">almost</span>
          <span>every-、no-、any-，幾乎</span>
        </div>
        <div>
          <span class="term">nearly</span>
          <span>every-，幾乎</span>
        </div>
        <div>
          <span class="term">practically</span>
          <span>every-、no-、any-，幾乎，比 almost 口語</span>
        </div>
        <div>
          <span class="term">absolutely</span>
          <span>every-、no-、any-，完全</span>
        </div>
        <div>
          <span class="term">hardly</span>
          <span>any-，幾乎不</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="加 any- 開頭的代名詞，表示不管是哪一個都可以">
      <div class="rows is-labeled">
        <div>
          <span class="term">absolutely</span>
          <span
            ><NoteMark
              sentence="You can buy absolutely anything you like."
              :marks="['absolutely anything']"
            /><span class="translation">你想買什麼都買得到。</span></span
          >
        </div>
        <div>
          <span class="term">practically</span>
          <span
            ><NoteMark
              sentence="My grandma will eat practically anything."
              :marks="['practically anything.']"
            /><span class="translation">我奶奶幾乎什麼都吃。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="程度副詞後面直接接不定代名詞，不加 of" mark="almost nothing.">
      <NoteFix
        wrong="Almost of everyone came to the party."
        right="Almost everyone came to the party."
        fix="Almost everyone"
      />
    </NoteSlide>

    <NoteSlide title="very 不修飾代名詞">
      <NoteFix
        wrong="Very everybody liked the film."
        right="Nearly everybody liked the film."
        fix="Nearly"
      />
    </NoteSlide>

    <NoteSlide title="hardly 後面接 any- 開頭的代名詞">
      <NoteFix
        wrong="There was hardly nothing left."
        right="There was hardly anything left."
        fix="hardly anything"
      />
    </NoteSlide>

    <NoteSlide title="nobody 已經是否定，動詞不再加 not">
      <NoteFix
        wrong="I didn't see absolutely nobody."
        right="I saw absolutely nobody."
        fix="saw absolutely nobody."
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
