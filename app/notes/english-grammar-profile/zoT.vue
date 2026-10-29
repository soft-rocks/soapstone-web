<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// future-form-inversion-with-only-when, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="Only when + 主詞 + 現在簡單式 + will + 主詞 + 原形動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Only when', kind: 'key', ring: true },
          { t: 'we', role: '主詞' },
          { t: 'understand that', role: '現在簡單式' },
          { t: 'will', kind: 'key', ring: true },
          { t: 'we', role: '主詞' },
          { t: 'be', role: '原形動詞' },
          { t: 'able to live in better societies.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="only when、only when 子句、will + 主詞" mark="Only when">
      <div class="rows is-labeled">
        <div>
          <span class="term">only when</span>
          <span>只有在……的時候。強調條件。</span>
        </div>
        <div>
          <span class="term">only when 子句</span>
          <span>說未來的條件，動詞用現在簡單式。</span>
        </div>
        <div>
          <span class="term">will + 主詞</span>
          <span>主要子句倒裝，will 放在主詞前面。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>那個條件達成後才會發生的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="其他助動詞也可以倒裝">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="Only when the rain stops can we start the work."
              :marks="['can']"
            /><span class="translation">只有雨停了，我們才能開工。</span></span
          >
        </div>
      </div>
      <p class="remark">主要子句用 can、should 也一樣倒裝。</p>
    </NoteSlide>
    <NoteSlide title="only when 放在句首時，主要子句的 will 要放在主詞前面" mark="Only when">
      <NoteFix
        wrong="Only when we understand that we will be able to live better."
        right="Only when we understand that will we be able to live better."
        :fix="['will', 'be']"
      />
    </NoteSlide>
    <NoteSlide title="倒裝的是主要子句" mark="Only when">
      <NoteFix
        wrong="Only when do we understand that will we live better."
        right="Only when we understand that will we live better."
        :fix="['we']"
      />
    </NoteSlide>
    <NoteSlide title="only when 子句說未來的條件，動詞用現在簡單式" mark="Only when">
      <NoteFix
        wrong="Only when people will manage this will they move on."
        right="Only when people manage this will they move on."
        :fix="['manage']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
