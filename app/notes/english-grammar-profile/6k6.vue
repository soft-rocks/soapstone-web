<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// that-of-substitution, as slides, in the order of content.md. One point per slide: the title names
// it, the diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on separate
// lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="that of 代替前面的名詞" mark="that of">
      <NoteWords
        :size="22"
        :parts="[
          { t: '… system', role: '前面的名詞', kind: 'key' },
          { t: 'differs … from', kind: 'dim' },
          { t: 'that of', role: '= the system of', kind: 'key' },
          { t: 'European …', role: '誰的' },
        ]"
      />
      <p class="translation">俄羅斯的教育制度跟歐洲……國家的教育制度差別很大。</p>
    </NoteSlide>

    <NoteSlide title="that of 和 those of" mark="that of">
      <div class="rows is-labeled">
        <div>
          <span class="term">單數名詞</span>
          <span
            ><NoteMark
              sentence="The population of Tokyo is larger than that of London."
              :marks="['that of']"
            /><span class="translation">東京的人口比倫敦多。</span></span
          >
        </div>
        <div>
          <span class="term">不可數名詞</span>
          <span
            ><NoteMark
              sentence="The quality of this paper is better than that of the old one."
              :marks="['that of']"
            /><span class="translation">這種紙的品質比舊的好。</span></span
          >
        </div>
        <div>
          <span class="term">複數名詞</span>
          <span
            ><NoteMark
              sentence="His ideas are similar to those of his teacher."
              :marks="['those of']"
            /><span class="translation">他的想法和他老師的想法很像。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="用在比較" mark="differs dramatically from">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'The prices', role: '複數', kind: 'key' },
          { t: '… are higher than', kind: 'dim' },
          { t: 'those of', kind: 'key' },
          { t: 'used cars.', kind: 'dim' },
        ]"
      />
      <p class="translation">新車的價錢比二手車高。</p>
    </NoteSlide>

    <NoteSlide title="比較一樣的東西" mark="that of">
      <NoteFix
        wrong="The climate of Spain is warmer than England."
        right="The climate of Spain is warmer than that of England."
        fix="that of"
      />
    </NoteSlide>

    <NoteSlide title="複數名詞用 those">
      <NoteFix
        wrong="Our prices are lower than that of our competitors."
        right="Our prices are lower than those of our competitors."
        fix="those"
      />
    </NoteSlide>

    <NoteSlide title="of 前面用 that" mark="that">
      <NoteFix
        wrong="The new design is different from it of the old model."
        right="The new design is different from that of the old model."
        fix="that"
      />
    </NoteSlide>

    <NoteSlide title="口語用所有格">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'My car is faster than', kind: 'dim' },
          { t: 'my brother\'s.', role: '所有格', kind: 'key' },
        ]"
      />
      <p class="translation">我的車比我哥的快。</p>
    </NoteSlide>

    <NoteSlide title="those + 關係子句">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'The new rules affect', kind: 'dim' },
          { t: 'those', role: '指人', kind: 'key' },
          { t: 'who work at night.', role: '關係子句' },
        ]"
      />
      <p class="translation">新規定影響到晚上工作的人。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
