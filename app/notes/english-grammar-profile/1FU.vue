<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-form-with-adverbs-752, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + was / were + 副詞 + -ing">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'My younger brother', role: '主詞' },
          { t: 'was', kind: 'key', ring: true },
          { t: 'constantly', role: '副詞' },
          { t: 'bothering', role: '-ing' },
          { t: 'me.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="constantly / continually、gradually、desperately">
      <div class="rows is-labeled">
        <div>
          <span class="term">constantly / continually</span>
          <span>一直、不停地。</span>
        </div>
        <div>
          <span class="term">gradually</span>
          <span>漸漸地。</span>
        </div>
        <div>
          <span class="term">desperately</span>
          <span>拚命地。</span>
        </div>
        <div>
          <span class="term">wistfully</span>
          <span>帶著惆悵地。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="說變化">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="The weather was gradually getting warmer." :marks="[]" /><span
              class="translation"
              >天氣漸漸變暖了。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">was gradually + -&#x2060;ing 說慢慢改變的情況。</p>
    </NoteSlide>
    <NoteSlide title="用在故事裡">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="She was wistfully walking in the dusk." :marks="[]" /><span
              class="translation"
              >她帶著惆悵在黃昏中散步。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">故事常用這類副詞描述人物的心情。</p>
    </NoteSlide>
    <NoteSlide title="副詞放在 was 和 -ing 中間" mark="was">
      <NoteFix
        wrong="He was bothering constantly me."
        right="He was constantly bothering me."
        :fix="['constantly', 'me.']"
      />
    </NoteSlide>
    <NoteSlide title="放在動詞前面要用副詞">
      <NoteFix
        wrong="The water was gradual rising."
        right="The water was gradually rising."
        :fix="['gradually']"
      />
    </NoteSlide>
    <NoteSlide title="was 後面的動詞要加 -ing" mark="was">
      <NoteFix
        wrong="She was desperately try to find her keys."
        right="She was desperately trying to find her keys."
        :fix="['trying']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
