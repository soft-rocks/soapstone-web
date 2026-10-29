<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// verbs-form-verbs-prepositional-phrase-that-clause, as slides, in the order of content.md.
// One point per slide: the title names it, the diagram shows it, and `mark` circles the
// matching words of the note's sentence. Keep the parts of one sentence on one line: Vue
// drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="介系詞片語說出聽話的人，放在轉述動詞和 that 子句中間" mark="to my friends">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'When I', kind: 'dim' },
          { t: 'said', role: '轉述動詞', kind: 'key' },
          { t: 'to my friends', role: '介系詞片語', kind: 'key', ring: true },
          { t: 'that I had met him,', role: 'that 子句' },
          { t: 'they didn\'t believe me.', role: '主要子句', kind: 'dim' },
        ]"
      />
      <p class="translation">我跟朋友說我見過他，他們都不相信。</p>
    </NoteSlide>

    <NoteSlide title="explain 後面先接 to，tell 後面直接接人" mark="to my friends">
      <div class="rows is-labeled">
        <div>
          <span class="term">explain<br /><i>轉述動詞 + to + 人</i></span>
          <span
            ><NoteMark
              sentence="She explained to me that the bus was late."
              :marks="['to me']"
            /><span class="translation">她跟我解釋說公車誤點了。</span></span
          >
        </div>
        <div>
          <span class="term">tell<br /><i>tell + 人</i></span>
          <span
            ><NoteMark sentence="She told me that the bus was late." :marks="['told me']" /><span
              class="translation"
              >她跟我說公車誤點了。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="不必說出聽話的人時，介系詞片語可以省略" mark="to my friends">
      <div class="rows is-labeled">
        <div>
          <span class="term">有介系詞片語</span>
          <span
            ><NoteMark
              sentence="He admitted to his boss that he was wrong."
              :marks="['to his boss']"
            /><span class="translation">他向老闆承認他錯了。</span></span
          >
        </div>
        <div>
          <span class="term">省略</span>
          <span
            ><NoteMark sentence="He admitted that he was wrong." :marks="['admitted that']" /><span
              class="translation"
              >他承認他錯了。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="explain 後面接聽話的人時，要加 to" mark="to">
      <NoteFix
        wrong="He explained me that the room was full."
        right="He explained to me that the room was full."
        fix="to me"
      />
    </NoteSlide>

    <NoteSlide title="tell 後面直接接聽話的人">
      <NoteFix
        wrong="She told to us that the show was cancelled."
        right="She told us that the show was cancelled."
        fix="told us"
      />
    </NoteSlide>

    <NoteSlide title="介系詞片語放在轉述動詞和 that 子句中間" mark="to my friends">
      <NoteFix
        wrong="I said that I was leaving to my boss."
        right="I said to my boss that I was leaving."
        fix="to my boss"
      />
    </NoteSlide>

    <NoteSlide title="to 後面的代名詞用受格">
      <NoteFix
        wrong="He mentioned to she that he was ill."
        right="He mentioned to her that he was ill."
        fix="her"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
