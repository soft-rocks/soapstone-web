<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-form-use-background-information-with-relative-clause, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="名詞 + who / which / that + had been + -ing">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'After a few minutes the door opened and', kind: 'dim' },
          { t: 'the man', role: '名詞' },
          { t: 'who', kind: 'key', ring: true },
          { t: 'had been', kind: 'key', ring: true },
          { t: 'following', role: '-ing' },
          { t: 'me came in.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="who、which / that、had been + -ing">
      <div class="rows is-labeled">
        <div>
          <span class="term">who</span>
          <span>說人。</span>
        </div>
        <div>
          <span class="term">which / that</span>
          <span>說東西。</span>
        </div>
        <div>
          <span class="term">had been + -&#x2060;ing</span>
          <span>在主要的事發生之前，一直在做的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="介紹故事的人物">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="There were two men who had been chasing the thief."
              :marks="[]"
            /><span class="translation">有兩個男人一直在追那個小偷。</span></span
          >
        </div>
      </div>
      <p class="remark">關係子句常用來介紹故事裡的人物。</p>
    </NoteSlide>
    <NoteSlide title="說歷史人物">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="The guide told us about an old lord who had been living there in the 18th century."
              :marks="[]"
            /><span class="translation"
              >導遊跟我們說了一個 18 世紀住在那裡的老貴族的故事。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">導覽和介紹常用這個句型說以前住在某地的人。</p>
    </NoteSlide>
    <NoteSlide title="been 前面要有 had" mark="been">
      <NoteFix
        wrong="The man who been following me came in."
        right="The man who had been following me came in."
        :fix="['had']"
      />
    </NoteSlide>
    <NoteSlide title="說人用 who 或 that" mark="who">
      <NoteFix
        wrong="The woman which had been waiting left."
        right="The woman who had been waiting left."
        :fix="['who']"
      />
    </NoteSlide>
    <NoteSlide title="had been 後面的動詞要加 -ing" mark="had been">
      <NoteFix
        wrong="The dog that had been bark all night was quiet."
        right="The dog that had been barking all night was quiet."
        :fix="['barking']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
