<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// future-use-events-completed-in-the-future, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + will have + 過去分詞 + by + 未來的時間點">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'It\'s no problem if you want to leave at 4:30 p.m., as', kind: 'dim' },
          { t: 'the match', role: '主詞' },
          { t: 'will have', kind: 'key', ring: true },
          { t: 'finished', role: '過去分詞' },
          { t: 'by', kind: 'key', ring: true },
          { t: 'that time.', role: '未來的時間點' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="will have + 過去分詞、by + 未來的時間點" mark="by that time.">
      <div class="rows is-labeled">
        <div>
          <span class="term">will have + 過去分詞</span>
          <span>預計在那個時間點之前完成的事。</span>
        </div>
        <div>
          <span class="term">by + 未來的時間點</span>
          <span
            >最晚在什麼時候完成，像 by that time、by the end of the month、by the time you
            arrive。</span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="預計完成的事">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="If you cycle to work, you will have saved a lot of money by the end of the month."
              :marks="[]"
            /><span class="translation">如果你騎腳踏車上班，到月底你就省下很多錢了。</span></span
          >
        </div>
      </div>
      <p class="remark">說話者根據計畫或常理，推算事情到那時已經完成。</p>
    </NoteSlide>
    <NoteSlide title="預計沒完成的事">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="You won't have spent anything on petrol." :marks="[]" /><span
              class="translation"
              >你就不會花錢在汽油上了。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">否定句說到那個時間點還沒完成的事。</p>
    </NoteSlide>
    <NoteSlide title="by the time + 現在簡單式" mark="will">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="By the time you wake up, I'll have left for the airport."
              :marks="['By the time']"
            /><span class="translation">等你醒來的時候，我已經出發去機場了。</span></span
          >
        </div>
      </div>
      <p class="remark">by the time 後面接子句時，子句用現在簡單式，不用 will。</p>
    </NoteSlide>
    <NoteSlide title="by the time 子句說未來的時間，用現在簡單式">
      <NoteFix
        wrong="By the time you will arrive, we will have eaten."
        right="By the time you arrive, we will have eaten."
        :fix="['arrive,']"
      />
    </NoteSlide>
    <NoteSlide title="have 後面接過去分詞" mark="have">
      <NoteFix
        wrong="The match will have finish by that time."
        right="The match will have finished by that time."
        :fix="['finished']"
      />
    </NoteSlide>
    <NoteSlide title="說最晚在什麼時候完成，用 by" mark="by">
      <NoteFix
        wrong="We will have finished in Friday."
        right="We will have finished by Friday."
        :fix="['by']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
