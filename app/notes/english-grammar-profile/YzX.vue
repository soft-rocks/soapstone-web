<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-form-inversion-with-hardly-when, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="Hardly + had + 主詞 + 過去分詞 + when + 主詞 + 過去式">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Hardly', kind: 'key', ring: true },
          { t: 'had', kind: 'key', ring: true },
          { t: 'he', role: '主詞' },
          { t: 'taken', role: '過去分詞' },
          { t: 'them from the counter', kind: 'dim' },
          { t: 'when', kind: 'key', ring: true },
          { t: 'the monster', role: '主詞' },
          { t: 'vanished', role: '過去式' },
          { t: 'again.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="hardly、had + 主詞 + 過去分詞、when">
      <div class="rows is-labeled">
        <div>
          <span class="term">hardly</span>
          <span>才剛。放在句首。</span>
        </div>
        <div>
          <span class="term">had + 主詞 + 過去分詞</span>
          <span>先發生的事，倒裝。</span>
        </div>
        <div>
          <span class="term">when</span>
          <span>後面接馬上接著發生的事，用過去式。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="一般的順序" mark="Hardly">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="We wanted to play tennis. I had hardly arrived when it rained."
              :marks="['hardly', 'had']"
            /><span class="translation">我們想打網球。我才剛到就下雨了。</span></span
          >
        </div>
      </div>
      <p class="remark">不倒裝的時候，hardly 放在 had 後面。</p>
    </NoteSlide>
    <NoteSlide title="hardly 放在句首時，had 放在主詞前面" mark="Hardly">
      <NoteFix
        wrong="Hardly the guests had sat down when the door opened."
        right="Hardly had the guests sat down when the door opened."
        :fix="['had', 'sat']"
      />
    </NoteSlide>
    <NoteSlide title="hardly 和 when 一起用" mark="Hardly">
      <NoteFix
        wrong="Hardly had we arrived than it began to snow."
        right="Hardly had we arrived when it began to snow."
        :fix="['when']"
      />
    </NoteSlide>
    <NoteSlide title="had 後面接過去分詞" mark="had">
      <NoteFix
        wrong="Hardly had I took my seat when the film started."
        right="Hardly had I taken my seat when the film started."
        :fix="['taken']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
