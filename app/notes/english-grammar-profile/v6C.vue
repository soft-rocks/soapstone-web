<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-use-background-information-relative-clause, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="find out 後面接 who + had + 過去分詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'He went to the hotel because he wanted to find out', kind: 'dim' },
          { t: 'who', kind: 'key', ring: true },
          { t: 'had', kind: 'key', ring: true },
          { t: 'sent', role: '過去分詞' },
          { t: 'him a mysterious letter.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="who、which / that、had + 過去分詞">
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
          <span class="term">had + 過去分詞</span>
          <span>更早發生的事，當作背景。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="It was … who had …">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="We wanted to thank someone for the surprise. It was Annika who had arranged the party."
              :marks="['who had']"
            /><span class="translation"
              >我們想謝謝籌備驚喜的人。是安妮卡安排了那個派對。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">It was … who had … 強調是誰做了那件事。</p>
    </NoteSlide>
    <NoteSlide title="關係子句要用 who 帶出" mark="who">
      <NoteFix
        wrong="The couple had organised the party asked everyone to stay calm."
        right="The couple who had organised the party asked everyone to stay calm."
        :fix="['who']"
      />
    </NoteSlide>
    <NoteSlide title="說人用 who 或 that" mark="who">
      <NoteFix
        wrong="The man which had painted the picture was at the show."
        right="The man who had painted the picture was at the show."
        :fix="['who']"
      />
    </NoteSlide>
    <NoteSlide title="had 後面接過去分詞" mark="had">
      <NoteFix
        wrong="It was my uncle who had arrange the boat trip."
        right="It was my uncle who had arranged the boat trip."
        :fix="['arranged']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
