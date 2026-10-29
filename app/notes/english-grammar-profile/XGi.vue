<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adverbs-form-pre-and-post-modified-adverbs, as slides, in the order of content.md. One
// point per slide: the title names it, the diagram shows it, and `mark` circles the matching
// words of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="程度副詞 + 副詞 + 介系詞片語" mark="almost exclusively for">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Many politicians work', role: '主詞 + 動詞', kind: 'dim' },
          { t: 'almost', role: '程度副詞', kind: 'key' },
          { t: 'exclusively', role: '副詞', kind: 'key' },
          { t: 'for their own interests.', role: '介系詞片語', kind: 'key' },
        ]"
      />
      <p class="translation">很多政客幾乎都只為自己的利益做事。</p>
    </NoteSlide>

    <NoteSlide title="副詞和後面的介系詞" mark="exclusively for">
      <div class="rows is-labeled">
        <div>
          <span class="term">independently of</span>
          <span>不依賴，各自獨立</span>
        </div>
        <div>
          <span class="term">separately from</span>
          <span>和……分開</span>
        </div>
        <div>
          <span class="term">differently from、to</span>
          <span>和……不同</span>
        </div>
        <div>
          <span class="term">similarly to</span>
          <span>和……相似</span>
        </div>
        <div>
          <span class="term">exclusively for</span>
          <span>只為了</span>
        </div>
        <div>
          <span class="term">consistently with、regardless of</span>
          <span>和……一致、不管</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="前面的程度副詞" mark="almost">
      <div class="rows is-labeled">
        <div>
          <span class="term">almost、nearly</span>
          <span>幾乎，修飾表示全部的副詞</span>
        </div>
        <div>
          <span class="term">completely、entirely、totally</span>
          <span>完全</span>
        </div>
        <div>
          <span class="term">quite、very、rather</span>
          <span>相當、很，修飾可以分程度的副詞</span>
        </div>
        <div>
          <span class="term">remarkably、surprisingly</span>
          <span>非常、出乎意料地</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="separately 後面接 from">
      <NoteFix
        wrong="Wash the children's clothes separately of the adults' clothes."
        right="Wash the children's clothes separately from the adults' clothes."
        fix="separately from"
      />
    </NoteSlide>

    <NoteSlide title="修飾動詞用副詞 exclusively" mark="exclusively">
      <NoteFix
        wrong="We use this room exclusive for staff meetings."
        right="We use this room exclusively for staff meetings."
        fix="exclusively for"
      />
    </NoteSlide>

    <NoteSlide title="exclusively 前面用 almost，不用 very" mark="almost exclusively">
      <NoteFix
        wrong="The shop sells very exclusively organic food."
        right="The shop sells almost exclusively organic food."
        fix="almost exclusively"
      />
    </NoteSlide>

    <NoteSlide title="程度副詞放在副詞前面">
      <NoteFix
        wrong="The two departments work independently completely of each other."
        right="The two departments work completely independently of each other."
        fix="completely"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
