<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adjectives-form-combining-comparative-adjectives-with-and, as slides, in the order of
// content.md. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="and 連接兩個比較級" mark="faster and cheaper">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'In the future,', kind: 'dim' },
          { t: 'cars', role: '主詞' },
          { t: 'will be', role: '動詞' },
          { t: 'faster', role: '比較級', kind: 'key' },
          { t: 'and', role: '連接詞', kind: 'key', ring: true },
          { t: 'cheaper.', role: '比較級', kind: 'key' },
        ]"
      />
      <p class="translation">以後汽車會更快，也更便宜。</p>
      <p class="remark">兩個比較級都形容主詞。</p>
    </NoteSlide>

    <NoteSlide title="兩個比較級可以是 -er，也可以用 more" mark="faster">
      <div class="rows is-labeled">
        <div>
          <span class="term">-er + and + -er</span>
          <span
            ><NoteMark
              sentence="My new phone is lighter and faster."
              :marks="['lighter and faster']"
            /><span class="translation">我的新手機比較輕，也比較快。</span></span
          >
        </div>
        <div>
          <span class="term">more + and + more</span>
          <span
            ><NoteMark
              sentence="The new library is more modern and more comfortable."
              :marks="['more modern and more comfortable']"
            /><span class="translation">新的圖書館比較現代，也比較舒服。</span></span
          >
        </div>
        <div>
          <span class="term">-er + and + more</span>
          <span
            ><NoteMark
              sentence="Trains are cheaper and more comfortable than planes."
              :marks="['cheaper and more comfortable']"
            /><span class="translation">火車比飛機便宜，也比飛機舒服。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="比較的對象放在最後，用 than" mark="cheaper">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'This bag is', kind: 'dim' },
          { t: 'smaller and lighter', role: '比較級 + and + 比較級', kind: 'key' },
          { t: 'than mine.', role: 'than + 比較的對象', kind: 'key', ring: true },
        ]"
      />
      <p class="translation">這個包包比我的小，也比我的輕。</p>
    </NoteSlide>

    <NoteSlide title="兩個比較級也可以放在名詞前面" mark="faster and cheaper">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'They want a', kind: 'dim' },
          { t: 'bigger and better', role: '比較級 + and + 比較級', kind: 'key' },
          { t: 'school.', role: '名詞' },
        ]"
      />
      <p class="translation">他們想要一所更大、更好的學校。</p>
    </NoteSlide>

    <NoteSlide title="加了 -er 的形容詞前面不加 more" mark="faster">
      <NoteFix
        wrong="The new trains are more faster and more cheaper."
        right="The new trains are faster and cheaper."
        fix="faster and cheaper"
      />
    </NoteSlide>

    <NoteSlide title="and 後面也要用比較級" mark="cheaper">
      <NoteFix
        wrong="The new bus is faster and cheap."
        right="The new bus is faster and cheaper."
        fix="cheaper"
      />
    </NoteSlide>

    <NoteSlide title="good 的比較級是 better" mark="faster">
      <NoteFix
        wrong="I feel gooder and stronger now."
        right="I feel better and stronger now."
        fix="better"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
