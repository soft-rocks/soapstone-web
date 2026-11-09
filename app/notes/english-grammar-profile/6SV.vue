<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adverbs-form-end-position-manner, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="情狀副詞放在受詞後面" mark="find it easily">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'You', role: '主詞', kind: 'dim' },
          { t: 'can', role: '助動詞', kind: 'dim' },
          { t: 'find', role: '動詞' },
          { t: 'it', role: '受詞' },
          { t: 'easily.', role: '情狀副詞', kind: 'key' },
        ]"
      />
      <p class="translation">你很容易就能找到。</p>
    </NoteSlide>

    <NoteSlide title="情狀副詞、地點、時間的順序">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Lily sang', role: '主詞 + 動詞', kind: 'dim' },
          { t: 'beautifully', role: '情狀副詞', kind: 'key' },
          { t: 'at the concert', role: '地點' },
          { t: 'last night.', role: '時間' },
        ]"
      />
      <p class="translation">Lily 昨晚在音樂會上唱得很好聽。</p>
    </NoteSlide>

    <NoteSlide title="程度副詞放在情狀副詞前面">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'He speaks', role: '主詞 + 動詞', kind: 'dim' },
          { t: 'English', role: '受詞', kind: 'dim' },
          { t: 'very', role: '程度副詞' },
          { t: 'clearly.', role: '情狀副詞', kind: 'key' },
        ]"
      />
      <p class="translation">他英文講得很清楚。</p>
    </NoteSlide>

    <NoteSlide title="連綴動詞後面用形容詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">形容詞說明主詞</span>
          <span
            ><NoteMark
              sentence="Your grandad sounds cheerful on the phone."
              :marks="['sounds cheerful']"
            /><span class="translation">你爺爺在電話裡聽起來心情很好。</span></span
          >
        </div>
        <div>
          <span class="term">情狀副詞說明動作</span>
          <span
            ><NoteMark
              sentence="The kids are singing happily in the car."
              :marks="['singing happily']"
            /><span class="translation">孩子們在車上開心地唱歌。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="情狀副詞不放在動詞和受詞中間">
      <NoteFix
        wrong="He packed carefully the plates."
        right="He packed the plates carefully."
        fix="the plates carefully."
      />
    </NoteSlide>

    <NoteSlide title="說明動作怎麼做用情狀副詞，不用形容詞">
      <NoteFix
        wrong="My uncle drives very careful."
        right="My uncle drives very carefully."
        fix="carefully."
      />
    </NoteSlide>

    <NoteSlide title="look 後面接形容詞">
      <NoteFix
        wrong="You look beautifully in that dress."
        right="You look beautiful in that dress."
        fix="look beautiful"
      />
    </NoteSlide>

    <NoteSlide title="very 放在情狀副詞前面">
      <NoteFix
        wrong="He finished the race quickly very."
        right="He finished the race very quickly."
        fix="very quickly."
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
