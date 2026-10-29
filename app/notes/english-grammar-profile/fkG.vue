<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// conjunctions-form-use-both-and-with-nouns, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words
// of the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="Both + 名詞 + and + 名詞" mark="Both friends and family">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Both', role: '連接詞', kind: 'key' },
          { t: 'friends', role: '名詞' },
          { t: 'and', role: '連接詞', kind: 'key' },
          { t: 'family', role: '名詞' },
          { t: 'are very important.', role: '複數動詞', kind: 'dim' },
        ]"
      />
      <p class="translation">朋友和家人都很重要。</p>
    </NoteSlide>

    <NoteSlide title="動詞 + both + 名詞 + and + 名詞" mark="Both">
      <NoteMark
        sentence="Argentina has both wonderful landscapes and excellent towns."
        :marks="['both', 'and']"
      />
      <p class="translation">阿根廷既有美麗的風景，也有很棒的城鎮。</p>
    </NoteSlide>

    <NoteSlide title="both … and 強調兩個都" mark="Both">
      <div class="rows is-labeled">
        <div>
          <span class="term">and</span>
          <span><NoteMark sentence="I like tea and coffee." :marks="['and']" /></span>
        </div>
        <div>
          <span class="term">both … and</span>
          <span
            ><NoteMark sentence="I like both tea and coffee." :marks="['both', 'and']" /><span
              class="translation"
              >兩個都喜歡，不是只有一個。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="動詞用複數" mark="are">
      <NoteFix
        wrong="Both my brother and my sister works in London."
        right="Both my brother and my sister work in London."
        fix="work"
      />
    </NoteSlide>

    <NoteSlide title="both 配 and，不配 or" mark="and">
      <NoteFix
        wrong="You need both a passport or a visa."
        right="You need both a passport and a visa."
        fix="and"
      />
    </NoteSlide>

    <NoteSlide title="both 放在第一個名詞前面" mark="Both friends">
      <NoteFix
        wrong="I both like tea and coffee."
        right="I like both tea and coffee."
        fix="both tea"
      />
    </NoteSlide>

    <NoteSlide title="both 不配 as well as" mark="and">
      <NoteFix
        wrong="Both Anna as well as Tom came to the party."
        right="Both Anna and Tom came to the party."
        fix="and"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
