<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-past-negative-553, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + needn't have + 過去分詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'You', role: '主詞' },
          { t: 'needn\'t have', kind: 'key', ring: true },
          { t: 'bought', role: '過去分詞' },
          { t: 'me anything!', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="needn't have、過去分詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">needn't have</span>
          <span>其實不必。事情已經做了。</span>
        </div>
        <div>
          <span class="term">過去分詞</span>
          <span>過去做了、可是沒有必要的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="感謝別人的好意" mark="You needn't have">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="You needn't have bothered so much."
              :marks="['You needn\'t have']"
            /><span class="translation">你其實不必這麼費心的。</span></span
          >
        </div>
      </div>
      <p class="remark">You needn't have 常用來感謝別人多做的事，語氣客氣。</p>
    </NoteSlide>
    <NoteSlide title="have 後面接過去分詞" mark="have">
      <NoteFix
        wrong="You needn't have buy so much wine for the party."
        right="You needn't have bought so much wine for the party."
        :fix="['bought']"
      />
    </NoteSlide>
    <NoteSlide title="needn't 後面接原形 have" mark="needn't">
      <NoteFix
        wrong="We needn't had taken a taxi. The hotel was just round the corner."
        right="We needn't have taken a taxi. The hotel was just round the corner."
        :fix="['have']"
      />
    </NoteSlide>
    <NoteSlide title="說過去不必做的事，用 needn't have 加過去分詞" mark="needn't have">
      <NoteFix
        wrong="She needn't came so early."
        right="She needn't have come so early."
        :fix="['have come']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
