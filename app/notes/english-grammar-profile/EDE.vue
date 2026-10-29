<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// future-use-assumptions, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + will have been + 動詞-ing">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I suppose you', role: '主詞' },
          { t: 'will have been', kind: 'key', ring: true },
          { t: 'studying', role: '動詞-ing' },
          { t: 'very hard to get that job.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="will、have been + 動詞-ing" mark="I suppose">
      <div class="rows is-labeled">
        <div>
          <span class="term">will</span>
          <span>表示說話者很有把握的推測，不表示未來。</span>
        </div>
        <div>
          <span class="term">have been + 動詞&#x2060;-&#x2060;ing</span>
          <span>到現在為止一直在進行的動作。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="從眼前看到的事推測">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="You'll be tired. You'll have been travelling all day."
              :marks="[]"
            /><span class="translation">你一定累了吧，你應該坐了一整天的車。</span></span
          >
        </div>
      </div>
      <p class="remark">說話者看到一個結果，推測造成結果的動作。</p>
    </NoteSlide>
    <NoteSlide title="will 是情態動詞，後面直接接原形的 have" mark="will">
      <NoteFix
        wrong="I expect you will to have been working hard all year."
        right="I expect you will have been working hard all year."
        :fix="['have']"
      />
    </NoteSlide>
    <NoteSlide title="will 後面的 have 用原形" mark="will">
      <NoteFix
        wrong="I'm sure he will has been practising a lot."
        right="I'm sure he will have been practising a lot."
        :fix="['have']"
      />
    </NoteSlide>
    <NoteSlide title="have 後面先接 been，再接動詞-ing" mark="have">
      <NoteFix
        wrong="They'll have waiting for us since noon."
        right="They'll have been waiting for us since noon."
        :fix="['been']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
