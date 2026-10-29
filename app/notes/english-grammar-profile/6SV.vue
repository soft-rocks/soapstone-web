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

    <NoteSlide title="情狀副詞、地點、時間的順序" mark="easily">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'She sang', role: '主詞 + 動詞', kind: 'dim' },
          { t: 'beautifully', role: '情狀副詞', kind: 'key' },
          { t: 'at the concert', role: '地點' },
          { t: 'last night.', role: '時間' },
        ]"
      />
      <p class="translation">她昨晚在音樂會上唱得很好聽。</p>
    </NoteSlide>

    <NoteSlide title="程度副詞放在情狀副詞前面" mark="easily">
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
            ><NoteMark sentence="You look happy." :marks="['look happy']" /><span
              class="translation"
              >你看起來很開心。</span
            ></span
          >
        </div>
        <div>
          <span class="term">情狀副詞說明動作</span>
          <span
            ><NoteMark sentence="You sing happily." :marks="['sing happily']" /><span
              class="translation"
              >你唱得很開心。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="情狀副詞不放在動詞和受詞中間" mark="find it easily">
      <NoteFix
        wrong="Please read carefully the instructions."
        right="Please read the instructions carefully."
        fix="the instructions carefully"
      />
    </NoteSlide>

    <NoteSlide title="情狀副詞放在地點前面">
      <NoteFix
        wrong="The children played in the garden happily."
        right="The children played happily in the garden."
        fix="happily in the garden"
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
        wrong="She speaks French fluently very."
        right="She speaks French very fluently."
        fix="very fluently"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
