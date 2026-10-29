<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// determiners-form-use-the-more-the-more, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words
// of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="The + 比較級, the + 比較級" mark="The better">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'The better', role: 'the + 比較級', kind: 'key' },
          { t: 'the education you have,', role: '名詞 + 主詞 + 動詞', kind: 'dim' },
          { t: 'the better', role: 'the + 比較級', kind: 'key' },
          { t: 'the opportunities you can get.', role: '名詞 + 主詞 + 動詞', kind: 'dim' },
        ]"
      />
      <p class="translation">你受的教育越好，能得到的機會就越好。</p>
    </NoteSlide>

    <NoteSlide title="比較級後面接什麼" mark="The better the education">
      <div class="rows is-labeled">
        <div>
          <span class="term">主詞和動詞</span>
          <span
            ><NoteMark
              sentence="The more you practise, the better you get."
              :marks="['The more', 'the better']"
            /><span class="translation">你練得越多，就越進步。</span></span
          >
        </div>
        <div>
          <span class="term">名詞</span>
          <span
            ><NoteMark
              sentence="The more money he earns, the more he spends."
              :marks="['The more money']"
            /><span class="translation">他賺的錢越多，花得就越多。</span></span
          >
        </div>
        <div>
          <span class="term">只有比較級</span>
          <span
            ><NoteMark sentence="The sooner, the better." :marks="['The sooner,', 'the better.']" /><span
              class="translation"
              >越快越好。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="常用的比較級" mark="better">
      <div class="rows is-labeled">
        <div>
          <span class="term">more、less</span>
          <span>越多、越少</span>
        </div>
        <div>
          <span class="term">better、worse</span>
          <span>越好、越糟</span>
        </div>
        <div>
          <span class="term">-er</span>
          <span>the older、the bigger、the faster</span>
        </div>
        <div>
          <span class="term">more + 形容詞</span>
          <span>the more expensive、the more difficult</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="兩個比較級前面都加 the" mark="The better">
      <NoteFix
        wrong="More you practise, better you get."
        right="The more you practise, the better you get."
        fix="the better"
      />
    </NoteSlide>

    <NoteSlide title="the 後面接比較級">
      <NoteFix
        wrong="The much you read, the good your English becomes."
        right="The more you read, the better your English becomes."
        fix="the better"
      />
    </NoteSlide>

    <NoteSlide title="名詞緊接在比較級後面" mark="The better the education">
      <NoteFix
        wrong="The more you have money, the more you want."
        right="The more money you have, the more you want."
        fix="The more money"
      />
    </NoteSlide>

    <NoteSlide title="兩半之間只用逗號">
      <NoteFix
        wrong="The harder you work, so the more you earn."
        right="The harder you work, the more you earn."
        fix="work, the more"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
