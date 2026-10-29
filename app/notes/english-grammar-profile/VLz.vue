<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-form-negative-791, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + didn't + 原形動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'didn\'t', kind: 'key', ring: true },
          { t: 'realise', role: '原形動詞' },
          { t: 'I had lost the ring till I was at home.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="didn't、till / until">
      <div class="rows is-labeled">
        <div>
          <span class="term">didn't</span>
          <span>過去的否定。</span>
        </div>
        <div>
          <span class="term">till / until</span>
          <span>直到。didn't … till 意思是「直到……才」。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="didn't … till">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="The last question was very hard. I didn't know the answer until the teacher told us."
              :marks="[]"
            /><span class="translation">最後一題很難。直到老師告訴我們，我才知道答案。</span></span
          >
        </div>
      </div>
      <p class="remark">didn't … till 說一件事直到某個時候才發生。</p>
    </NoteSlide>
    <NoteSlide title="說對人的感覺">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="The salesman kept changing the price. I didn't trust him."
              :marks="['didn\'t trust']"
            /><span class="translation">那個業務員一直改價錢。我不相信他。</span></span
          >
        </div>
      </div>
      <p class="remark">didn't trust、didn't like、didn't believe 說過去對人的感覺。</p>
    </NoteSlide>
    <NoteSlide title="didn't 後面接原形動詞" mark="didn't">
      <NoteFix
        wrong="I didn't realised my phone was still at the café."
        right="I didn't realise my phone was still at the café."
        :fix="['realise']"
      />
    </NoteSlide>
    <NoteSlide title="一般動詞的否定用 didn't" mark="didn't">
      <NoteFix
        wrong="I wasn't trust the taxi driver."
        right="I didn't trust the taxi driver."
        :fix="['didn\'t']"
      />
    </NoteSlide>
    <NoteSlide title="說過去的事用 didn't" mark="didn't">
      <NoteFix
        wrong="Last year we don't use the garage for the car."
        right="Last year we didn't use the garage for the car."
        :fix="['didn\'t']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
