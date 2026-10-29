<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 054, as slides, in the order of notes/dragon-english-basic-100/054.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide title="if 子句講條件，then 帶出後面的結果" :mark="['If', 'then']">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'If', role: '連接詞', kind: 'key' },
          { t: 'you expect that schools only teach academic subjects,', role: '條件' },
          { t: 'then', role: '副詞', kind: 'key' },
          { t: 'this proves that …', role: '結果' },
        ]"
      />
      <p class="translation">{{ note.translation }}</p>
    </NoteSlide>

    <NoteSlide title="疑問句放進句子裡當受詞時，主詞在前，動詞在後" mark="what schools are for">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'what', role: '疑問詞', kind: 'key' },
          { t: 'schools', role: '主詞' },
          { t: 'are', role: '動詞', kind: 'key', ring: true },
          { t: 'for', role: '介系詞' },
        ]"
      />
      <p class="remark">
        <code>What are schools for?</code> 放進句子裡變成 <code>what schools are for</code>。
      </p>
    </NoteSlide>

    <NoteSlide title="介系詞 for 留在子句最後，what ... for 問的是用途" mark="for">
      <div class="rows is-labeled">
        <div>
          <span class="term">按鈕的用途</span>
          <span
            ><NoteMark
              sentence="Do you know what this button is for?"
              :marks="['what', 'for']"
            /><span class="translation">你知道這個按鈕是做什麼用的嗎？</span></span
          >
        </div>
        <div>
          <span class="term">考試的目的</span>
          <span
            ><NoteMark
              sentence="Students should understand what tests are for."
              :marks="['what', 'for']"
            /><span class="translation">學生應該了解考試是做什麼用的。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="prove that 表示證明某件事是真的" mark="proves that">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'this', role: '主詞', kind: 'dim' },
          { t: 'proves', role: '動詞', kind: 'key' },
          { t: 'that you don’t understand what schools are for.', role: 'that 子句' },
        ]"
      />
      <p class="remark">主詞 <code>this</code> 指前面 <code>if</code> 子句講的想法。</p>
    </NoteSlide>

    <NoteSlide title="expect that 表示預期某件事會發生，或認為某件事是這樣" mark="expect that">
      <div class="rows is-labeled">
        <div>
          <span class="term">預期會發生</span>
          <span
            ><NoteMark
              sentence="We expect that more tourists will come to Taiwan next year."
              :marks="['expect that']"
            /><span class="translation">我們預期明年會有更多觀光客來台灣。</span></span
          >
        </div>
        <div>
          <span class="term">認為是這樣</span>
          <span
            ><NoteMark
              sentence="If you expect that everything will be easy, then you will be disappointed."
              :marks="['expect that']"
            /><span class="translation">如果你以為每件事都會很簡單，那你會失望的。</span></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>
</template>
