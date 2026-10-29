<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-seeking-advice, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="What / Which / Where + shall + I + 原形動詞？">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I have to travel to Argentina for health reasons.', kind: 'dim' },
          { t: 'What', kind: 'key', ring: true },
          { t: 'shall', kind: 'key', ring: true },
          { t: 'I', kind: 'key', ring: true },
          { t: 'do', role: '原形動詞' },
          { t: 'with next week\'s work?', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="原形動詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">原形動詞</span>
          <span>不知道怎麼做的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="問選擇">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="I need to get to Bristol by ten tomorrow. Shall I take the bus or the train?" :marks="[]" /><span
              class="translation"
              >我明天十點前要到 Bristol。我該搭公車還是火車？</span
            ></span
          >
        </div>
      </div>
      <p class="remark">Shall I … or …？ 請對方從兩個選擇中挑一個。</p>
    </NoteSlide>
    <NoteSlide title="疑問詞後面先放 shall，再放主詞" mark="shall">
      <NoteFix
        wrong="It's Mum's birthday on Sunday. What I shall buy for her?"
        right="It's Mum's birthday on Sunday. What shall I buy for her?"
        :fix="['shall', 'buy']"
      />
    </NoteSlide>
    <NoteSlide title="shall 的問句不用 do" mark="shall">
      <NoteFix wrong="I've locked my keys in the car. What do I shall do?" right="I've locked my keys in the car. What shall I do?" :fix="['shall', 'do?']" />
    </NoteSlide>
    <NoteSlide title="shall 後面直接接原形動詞" mark="shall">
      <NoteFix
        wrong="The wedding is at four. Which dress shall I to wear?"
        right="The wedding is at four. Which dress shall I wear?"
        :fix="['wear?']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
