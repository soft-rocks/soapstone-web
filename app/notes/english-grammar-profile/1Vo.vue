<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-affirmative, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + can + 原形動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'You', role: '主詞' },
          { t: 'can', kind: 'key', ring: true },
          { t: 'make', role: '原形動詞' },
          { t: 'a quick snack, for example, a sandwich.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="can、原形動詞" mark="can">
      <div class="rows is-labeled">
        <div>
          <span class="term">can</span>
          <span>每個主詞都用 can，不加 -&#x2060;s。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>can 後面直接接原形動詞，不加 to。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="主詞不同，can 不變">
      <div class="rows is-labeled">
        <div>
          <span class="term">I / you / we / they</span>
          <span
            ><NoteMark sentence="We can swim." :marks="[]" /><span class="translation"
              >我們會游泳。</span
            ></span
          >
        </div>
        <div>
          <span class="term">he / she / it</span>
          <span
            ><NoteMark sentence="She can swim." :marks="[]" /><span class="translation"
              >她會游泳。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="介紹地方時常用 you can" mark="You">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="You can see the sea from the hotel." :marks="['You']" /><span
              class="translation"
              >從飯店可以看到海。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">介紹一個地方可以做什麼，主詞常用 you。這個 you 指的是任何人。</p>
    </NoteSlide>
    <NoteSlide title="can 後面直接接原形動詞" mark="can">
      <NoteFix wrong="I can to play the piano." right="I can play the piano." :fix="['play']" />
    </NoteSlide>
    <NoteSlide title="can 不隨主詞改變" mark="can">
      <NoteFix wrong="She cans speak French." right="She can speak French." :fix="['can']" />
    </NoteSlide>
    <NoteSlide title="can 後面接原形動詞，不加 -s" mark="can">
      <NoteFix wrong="He can drives a car." right="He can drive a car." :fix="['drive']" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
