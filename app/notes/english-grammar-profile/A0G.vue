<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// conjunctions-form-complex-adding, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="and + but + so 串起子句" mark="but">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'I was scared', role: '子句' },
          { t: 'and', role: '補充', kind: 'key' },
          { t: 'closed the window,', role: '動詞片語' },
          { t: 'but', role: '轉折', kind: 'key' },
          { t: 'I couldn\'t sleep,', role: '子句' },
          { t: 'so', role: '結果', kind: 'key' },
          { t: 'I opened it again.', role: '子句' },
        ]"
      />
      <p class="translation">我很害怕，就把窗戶關上了，可是我睡不著，所以又把它打開。</p>
    </NoteSlide>

    <NoteSlide title="then 接著發生的事">
      <NoteMark
        sentence="We went to his studio, then he started singing, and I joined in."
        :marks="['then', 'and']"
      />
      <p class="translation">我們去了他的錄音室，接著他開始唱歌，我也跟著唱。</p>
    </NoteSlide>

    <NoteSlide title="各個連接詞的意思" mark="so">
      <div class="rows is-labeled">
        <div>
          <span class="term">and</span>
          <span>補充另一件事，或接著發生的事</span>
        </div>
        <div>
          <span class="term">but</span>
          <span>和前面相反，或出乎意料</span>
        </div>
        <div>
          <span class="term">or</span>
          <span>兩件事選一件</span>
        </div>
        <div>
          <span class="term">so</span>
          <span>前面那件事的結果</span>
        </div>
        <div>
          <span class="term">then</span>
          <span>接著發生，常寫成 and then</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="先後發生的事用 then 分開">
      <NoteFix
        wrong="We went to the shop and we bought bread and we went home and we made sandwiches."
        right="We went to the shop and bought bread, then we went home and made sandwiches."
        fix="then"
      />
    </NoteSlide>

    <NoteSlide title="because 和 so 只用一個" mark="so">
      <NoteFix
        wrong="Because I was hungry, so I made a sandwich."
        right="I was hungry, so I made a sandwich."
        fix="I was hungry,"
      />
    </NoteSlide>

    <NoteSlide title="結果用 so" mark="so">
      <NoteFix
        wrong="The shop was closed, but I went home."
        right="The shop was closed, so I went home."
        fix="so"
      />
    </NoteSlide>

    <NoteSlide title="相反的事用 but" mark="but">
      <NoteFix
        wrong="The film was very long, so we enjoyed every minute."
        right="The film was very long, but we enjoyed every minute."
        fix="but"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
