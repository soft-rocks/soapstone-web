<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-affirmative-declarative-modal-auxiliary-verbs, as slides, in the order of
// content.md. One point per slide: the title names it, the diagram shows it, and `mark` circles
// the matching words of the note's sentence. Keep the parts of one sentence on one line: Vue
// drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="情態動詞後面接原形動詞" mark="will visit">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'can', role: '情態動詞', kind: 'key', ring: true },
          { t: 'help', role: '原形動詞', kind: 'key' },
          { t: 'you on Friday.', kind: 'dim' },
        ]"
      />
      <p class="translation">我星期五可以幫你。</p>
    </NoteSlide>

    <NoteSlide title="can、will、must 的意思不同" mark="will">
      <div class="rows is-labeled">
        <div>
          <span class="term">can：能、會</span>
          <span
            ><NoteMark
              sentence="My train gets in at a quarter to six. We can meet in front of the station at six."
              :marks="['can meet']"
            /><span class="translation"
              >我的火車五點四十五分到。我們可以六點在車站前面碰面。</span
            ></span
          >
        </div>
        <div>
          <span class="term">will：將會</span>
          <span
            ><NoteMark
              sentence="You're making the salads? Good. I'll bring some cake to the party."
              :marks="['I\'ll bring']"
            /><span class="translation">你要做沙拉？很好。我會帶蛋糕去派對。</span></span
          >
        </div>
        <div>
          <span class="term">must：必須</span>
          <span
            ><NoteMark
              sentence="The police stopped my brother yesterday. You must wear a helmet on a motorbike."
              :marks="['must wear']"
            /><span class="translation">警察昨天攔下我哥哥。騎機車一定要戴安全帽。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="情態動詞後面的動詞不加 -s" mark="visit">
      <NoteFix
        wrong="My grandmother can makes great dumplings."
        right="My grandmother can make great dumplings."
        fix="make"
      />
    </NoteSlide>

    <NoteSlide title="情態動詞不隨主詞變化" mark="will">
      <NoteFix
        wrong="The parcel wills arrive on Monday."
        right="The parcel will arrive on Monday."
        fix="will"
      />
    </NoteSlide>

    <NoteSlide title="情態動詞後面不加 to" mark="will visit">
      <NoteFix
        wrong="My little brother can to tie his own shoes."
        right="My little brother can tie his own shoes."
        fix="can tie"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
