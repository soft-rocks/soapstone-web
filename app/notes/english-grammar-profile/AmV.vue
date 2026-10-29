<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-past, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + have to / has to + have + 過去分詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'You certainly', role: '主詞' },
          { t: 'have to', kind: 'key', ring: true },
          { t: 'have', kind: 'key', ring: true },
          { t: 'lived', role: '過去分詞' },
          { t: 'in each place for a long time.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="have to have、過去分詞" mark="lived">
      <div class="rows is-labeled">
        <div>
          <span class="term">have to have</span>
          <span>在某個時間點之前必須已經。</span>
        </div>
        <div>
          <span class="term">過去分詞</span>
          <span>必須已經完成的事，像 lived、passed、finished、seen。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="條件常用 to 不定詞或 before">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="To join the course, you have to have passed the first exam."
              :marks="[]"
            /><span class="translation">要參加這門課，你必須已經通過第一次考試。</span></span
          >
        </div>
      </div>
      <p class="remark">這個句型常說做某件事的條件。</p>
    </NoteSlide>
    <NoteSlide title="「必看的」：have to have seen">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="These are the places that every tourist has to have seen."
              :marks="[]"
            /><span class="translation">這些是每個觀光客一定要去過的地方。</span></span
          >
        </div>
      </div>
      <p class="remark">觀光的說法 the places you have to have seen 指一定要去過的景點。</p>
    </NoteSlide>
    <NoteSlide title="第二個 have 後面接過去分詞" mark="have">
      <NoteFix
        wrong="You have to have live there."
        right="You have to have lived there."
        :fix="['lived']"
      />
    </NoteSlide>
    <NoteSlide title="說已經完成，要用 have 加過去分詞" mark="have">
      <NoteFix
        wrong="She has to finished the course."
        right="She has to have finished the course."
        :fix="['have']"
      />
    </NoteSlide>
    <NoteSlide title="to 後面接原形 have" mark="have">
      <NoteFix
        wrong="He has to has seen the doctor."
        right="He has to have seen the doctor."
        :fix="['have']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
