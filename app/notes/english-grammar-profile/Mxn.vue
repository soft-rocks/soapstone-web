<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// conjunctions-form-use-not-only-but-also, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between
// two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="not only + 名詞片語 + but also + 名詞片語" mark="not only">
      <NoteWords
        :size="20"
        :parts="[
          { t: 'This book is', role: '主詞 + 動詞', kind: 'dim' },
          { t: 'not only', role: '連接詞', kind: 'key' },
          { t: 'a guide to the history of music', role: '名詞片語' },
          { t: 'but also', role: '連接詞', kind: 'key' },
          { t: 'a compendium of theory.', role: '名詞片語' },
        ]"
      />
      <p class="translation">這本書不只是一本音樂史指南，也是一本樂理大全。</p>
    </NoteSlide>

    <NoteSlide title="連接動詞片語和形容詞" mark="but also">
      <div class="rows is-labeled">
        <div>
          <span class="term">動詞片語</span>
          <span
            ><NoteMark
              sentence="Regular exercise can not only improve your health but also reduce stress."
              :marks="['not only', 'but also']"
            /><span class="translation">規律運動不只能改善健康，也能減輕壓力。</span></span
          >
        </div>
        <div>
          <span class="term">形容詞</span>
          <span
            ><NoteMark
              sentence="The new library is not only bigger but also much quieter."
              :marks="['not only', 'but also']"
            /><span class="translation">新圖書館不只比較大，也安靜得多。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="also 的位置和省略" mark="but also">
      <div class="rows is-labeled">
        <div>
          <span class="term">but also</span>
          <span>He not only wrote the songs but also sang them.</span>
        </div>
        <div>
          <span class="term">but + 主詞 + also</span>
          <span>She not only cooked dinner, but she also washed the dishes.</span>
        </div>
        <div>
          <span class="term">省略 also</span>
          <span>The meal was not only cheap but delicious.</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="not only 放在第一項前面" mark="is not only">
      <div class="rows is-labeled">
        <div>
          <span class="term">be 動詞後面</span>
          <span>is not only cheap</span>
        </div>
        <div>
          <span class="term">情態動詞後面</span>
          <span>can not only save money</span>
        </div>
        <div>
          <span class="term">一般動詞前面</span>
          <span>not only speaks Japanese</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="和 but also 搭配" mark="but also">
      <NoteFix
        wrong="The course is not only useful and also fun."
        right="The course is not only useful but also fun."
        fix="but also"
      />
    </NoteSlide>

    <NoteSlide title="兩項的結構相同">
      <NoteFix
        wrong="He is not only a good teacher but also writes novels."
        right="He is not only a good teacher but also a successful novelist."
        fix="a successful novelist."
      />
    </NoteSlide>

    <NoteSlide title="not only 放在形容詞前面">
      <NoteFix
        wrong="She not only is talented but also hard-working."
        right="She is not only talented but also hard-working."
        fix="is not only"
      />
    </NoteSlide>

    <NoteSlide title="第二項前面用 but also" mark="but also">
      <NoteFix
        wrong="The museum is not only free also open every day."
        right="The museum is not only free but also open every day."
        fix="but also"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
