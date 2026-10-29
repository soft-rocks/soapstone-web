<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// conjunctions-form-use-both-and-with-phrases-and, as slides, in the order of content.md. One
// point per slide: the title names it, the diagram shows it, and `mark` circles the matching
// words of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="both + 動詞 + and + 動詞" mark="both entertain and educate.">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Television can', role: '主詞 + 情態動詞', kind: 'dim' },
          { t: 'both', role: '連接詞', kind: 'key' },
          { t: 'entertain', role: '動詞' },
          { t: 'and', role: '連接詞', kind: 'key' },
          { t: 'educate.', role: '動詞' },
        ]"
      />
      <p class="translation">電視既能娛樂，也能教育。</p>
    </NoteSlide>

    <NoteSlide title="連接動詞片語和介系詞片語" mark="both">
      <div class="rows is-labeled">
        <div>
          <span class="term">動詞片語</span>
          <span
            ><NoteMark
              sentence="I could both get some enjoyment and make some money."
              :marks="['both', 'and']"
            /><span class="translation">我既能玩得開心，又能賺點錢。</span></span
          >
        </div>
        <div>
          <span class="term">介系詞片語</span>
          <span
            ><NoteMark
              sentence="We are famous both at home and abroad."
              :marks="['both at home and abroad.']"
            /><span class="translation">我們在國內外都很有名。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="both 的位置" mark="can both">
      <div class="rows is-labeled">
        <div>
          <span class="term">情態動詞後面</span>
          <span>can both entertain and educate</span>
        </div>
        <div>
          <span class="term">介系詞片語前面</span>
          <span>both at home and abroad</span>
        </div>
        <div>
          <span class="term">主詞相同</span>
          <span>主詞放前面，連接後面的部分</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="兩邊的結構相同" mark="both entertain and educate.">
      <NoteFix
        wrong="The course helps you both to speak better and writing faster."
        right="The course helps you both speak better and write faster."
        fix="write"
      />
    </NoteSlide>

    <NoteSlide title="and 後面不加 also" mark="and">
      <NoteFix
        wrong="This job is both well paid and also interesting."
        right="This job is both well paid and interesting."
        fix="and interesting."
      />
    </NoteSlide>

    <NoteSlide title="both 放在第一個片語前面">
      <NoteFix
        wrong="We both went to Paris and to Rome."
        right="We went both to Paris and to Rome."
        fix="both to Paris"
      />
    </NoteSlide>

    <NoteSlide title="不連接兩個完整的子句">
      <NoteFix
        wrong="Both I was tired and I was hungry."
        right="I was both tired and hungry."
        fix="both tired and hungry."
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
