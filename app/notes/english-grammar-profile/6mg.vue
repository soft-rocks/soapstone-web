<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// questions-form-negative-questions-with-be, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="be 加 n't 放在句首，請對方同意">
      <NoteWords
        :size="36"
        :parts="[
          { t: 'Isn\'t', role: 'be + n\'t', kind: 'key' },
          { t: 'he', role: '主詞' },
          { t: 'sweet?', role: '補語', kind: 'dim' },
        ]"
      />
      <p class="translation">他是不是很可愛？</p>
    </NoteSlide>

    <NoteSlide title="否定疑問句也表示驚訝，或確認以為是真的事" mark="Isn't">
      <div class="rows is-labeled">
        <div>
          <span class="term">驚訝</span>
          <span
            ><NoteMark sentence="Aren't you excited about it?" :marks="['Aren\'t']" /><span
              class="translation"
              >這件事你不覺得興奮嗎？</span
            ></span
          >
        </div>
        <div>
          <span class="term">確認</span>
          <span
            ><NoteMark sentence="Isn't the cottage in the mountains?" :marks="['Isn\'t']" /><span
              class="translation"
              >那間小屋不是在山上嗎？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="回答時，yes 和 no 跟著事實走" mark="Isn't">
      <div class="rows is-labeled">
        <div>
          <span class="term">事實是冷</span>
          <span
            ><NoteMark
              sentence='"Isn&apos;t it cold?" "Yes, it&apos;s freezing."'
              :marks="['Yes']"
            /><span class="translation">「不是很冷嗎？」「對啊，冷死了。」</span></span
          >
        </div>
        <div>
          <span class="term">事實是沒開</span>
          <span
            ><NoteMark
              sentence='"Isn&apos;t the shop open?" "No, it&apos;s closed on Mondays."'
              :marks="['No']"
            /><span class="translation">「那家店不是有開嗎？」「沒有，它星期一休息。」</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="n't 和 be 連在一起，放在主詞前面" mark="Isn't">
      <NoteFix wrong="Is he n't sweet?" right="Isn't he sweet?" fix="Isn't" />
    </NoteSlide>

    <NoteSlide title="I 的否定疑問句用 Aren't I" mark="Isn't">
      <NoteFix wrong="Amn't I right?" right="Aren't I right?" fix="Aren't" />
    </NoteSlide>

    <NoteSlide title="be 的否定疑問句不用 don't" mark="Isn't">
      <NoteFix wrong="Don't you happy?" right="Aren't you happy?" fix="Aren't" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
