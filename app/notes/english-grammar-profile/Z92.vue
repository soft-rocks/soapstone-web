<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// negation-form-auxiliary-verb-do-present, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="現在簡單式的否定在原形動詞前面加 don't">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'don\'t', role: 'don\'t', kind: 'key' },
          { t: 'have', role: '原形動詞', kind: 'key' },
          { t: 'a dining room,', role: '受詞' },
          { t: 'so we eat in the living room.', kind: 'dim' },
        ]"
      />
      <p class="translation">我家沒有飯廳，所以我們在客廳吃飯。</p>
    </NoteSlide>

    <NoteSlide title="主詞是 he、she、it 時用 doesn't" mark="don't">
      <div class="rows is-labeled">
        <div>
          <span class="term">I / you / we / they</span>
          <span
            ><NoteMark sentence="They don't live in the city." :marks="['don\'t']" /><span
              class="translation"
              >他們不住在城裡。</span
            ></span
          >
        </div>
        <div>
          <span class="term">he / she / it</span>
          <span
            ><NoteMark sentence="My brother doesn't eat fish." :marks="['doesn\'t']" /><span
              class="translation"
              >我哥哥不吃魚。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="正式的文章用 do not 和 does not" mark="don't">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'The hotel', role: '主詞' },
          { t: 'does not', role: 'does not', kind: 'key' },
          { t: 'accept', role: '原形動詞' },
          { t: 'pets.', role: '受詞', kind: 'dim' },
        ]"
      />
      <p class="translation">這家飯店不接受寵物。</p>
    </NoteSlide>

    <NoteSlide title="not 前面要有 do" mark="don't">
      <NoteFix wrong="I not like coffee." right="I don't like coffee." fix="don't" />
    </NoteSlide>

    <NoteSlide title="主詞是 he、she、it 時不用 don't" mark="don't">
      <NoteFix wrong="She don't live here." right="She doesn't live here." fix="doesn't" />
    </NoteSlide>

    <NoteSlide title="doesn't 後面的動詞不加 -s" mark="have">
      <NoteFix
        wrong="He doesn't works on Saturdays."
        right="He doesn't work on Saturdays."
        fix="work"
      >
        <code>-&#x2060;s</code> 已經在 <code>does</code> 上。
      </NoteFix>
    </NoteSlide>

    <NoteSlide title="be 的否定不用 don't" mark="don't">
      <NoteFix wrong="I don't hungry." right="I'm not hungry." fix="I'm not" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
