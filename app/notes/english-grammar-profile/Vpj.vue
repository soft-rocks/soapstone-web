<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-use-events-in-progress, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + was / were + -ing">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'It', role: '主詞' },
          { t: 'was', kind: 'key', ring: true },
          { t: 'raining,', role: '-ing' },
          { t: 'but the concert was so good that I did not mind.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="was / were + -ing、常和過去式一起用">
      <div class="rows is-labeled">
        <div>
          <span class="term">was / were + -&#x2060;ing</span>
          <span>過去某段時間正在進行的動作。</span>
        </div>
        <div>
          <span class="term">常和過去式一起用</span>
          <span>一個說當時的情況，一個說發生的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="描述當時的場面">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="When I arrived, they were playing the last game."
              :marks="[]"
            /><span class="translation">我到的時候，他們正在打最後一場比賽。</span></span
          >
        </div>
      </div>
      <p class="remark">過去進行式常用來描述當時的場面。</p>
    </NoteSlide>
    <NoteSlide title="know 是狀態動詞，通常不用進行式">
      <NoteFix wrong="I was knowing the answer." right="I knew the answer." :fix="['knew']" />
    </NoteSlide>
    <NoteSlide title="主詞是 they，用 were">
      <NoteFix
        wrong="They was playing the final."
        right="They were playing the final."
        :fix="['were']"
      />
    </NoteSlide>
    <NoteSlide title="rain 加 -ing 不重複 n">
      <NoteFix
        wrong="It was rainning all day."
        right="It was raining all day."
        :fix="['raining']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
