<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// not-only-inversion-273, as slides, in the order of content.md. One point per slide: the title
// names it, the diagram shows it, and `mark` circles the matching words of the note's sentence.
// Keep the parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="Not only + do + 主詞 + 原形動詞" mark="Not only do I speak">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'Not only', role: '連接詞', kind: 'key' },
          { t: 'do', role: '助動詞', kind: 'key' },
          { t: 'I', role: '主詞' },
          { t: 'speak', role: '原形動詞' },
          { t: 'fluent English,', role: '受詞', kind: 'dim' },
          { t: 'but I also speak French.', role: '子句', kind: 'dim' },
        ]"
      />
      <p class="translation">我不只英文說得很流利，還會說法語。</p>
    </NoteSlide>

    <NoteSlide title="do、does、did 的選擇" mark="do">
      <div class="rows is-labeled">
        <div>
          <span class="term">do</span>
          <span>現在式，I、you、we、they、複數名詞</span>
        </div>
        <div>
          <span class="term">does</span>
          <span>現在式，he、she、it、單數名詞</span>
        </div>
        <div>
          <span class="term">did</span>
          <span>過去式，主詞不分單複數</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="第二個子句不倒裝" mark="but I also speak">
      <NoteMark
        sentence="Not only did they teach us useful knowledge, but they also organised practical exercises."
        :marks="['did they teach', 'they also organised']"
      />
      <p class="translation">他們不只教我們實用的知識，還安排了實作練習。</p>
    </NoteSlide>

    <NoteSlide title="前面加連接副詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">Indeed</span>
          <span>Indeed, not only did the trip help my English, …</span>
        </div>
        <div>
          <span class="term">Furthermore</span>
          <span>Furthermore, not only does the hotel offer free breakfast, …</span>
        </div>
        <div>
          <span class="term">For me</span>
          <span>For me, not only do team sports keep me fit, …</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="Not only 後面加助動詞">
      <NoteFix
        wrong="Not only they cooked dinner, but they also cleaned the kitchen."
        right="Not only did they cook dinner, but they also cleaned the kitchen."
        fix="did they cook"
      />
    </NoteSlide>

    <NoteSlide title="did 後面用原形動詞">
      <NoteFix
        wrong="Not only did he passed the test, but he also got the highest score."
        right="Not only did he pass the test, but he also got the highest score."
        fix="pass"
      />
    </NoteSlide>

    <NoteSlide title="單數主詞用 does">
      <NoteFix
        wrong="Not only do the museum open late, but it also has free entry on Sundays."
        right="Not only does the museum open late, but it also has free entry on Sundays."
        fix="does"
      />
    </NoteSlide>

    <NoteSlide title="but 後面用一般語序" mark="but I also">
      <NoteFix
        wrong="Not only did she sing, but did she also play the piano."
        right="Not only did she sing, but she also played the piano."
        fix="she also played"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
