<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adjectives-form-use-with-a-lot, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="a lot 放在比較級前面，表示差很多" mark="a lot cheaper">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'Taking the train is', kind: 'dim' },
          { t: 'a lot', role: 'a lot', kind: 'key', ring: true },
          { t: 'faster', role: '比較級', kind: 'key' },
          { t: 'than driving at rush hour.', role: 'than + 比較的對象' },
        ]"
      />
      <p class="translation">尖峰時間搭火車比開車快很多。</p>
    </NoteSlide>

    <NoteSlide title="長的形容詞用 a lot more，good 用 a lot better" mark="a lot cheaper">
      <div class="rows is-labeled">
        <div>
          <span class="term">a lot more + 形容詞</span>
          <span
            ><NoteMark
              sentence="Working from home is a lot more comfortable for me."
              :marks="['a lot more comfortable']"
            /><span class="translation">對我來說，在家工作舒服很多。</span></span
          >
        </div>
        <div>
          <span class="term">a lot better</span>
          <span
            ><NoteMark
              sentence="Your cough sounds a lot better today."
              :marks="['a lot better']"
            /><span class="translation">你今天咳嗽的聲音好很多了。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="would be a lot + 比較級，說另一個做法好很多" mark="is a lot cheaper">
      <NoteMark
        sentence="It would be a lot cheaper to book the flights now."
        :marks="['would be a lot cheaper']"
      />
      <p class="translation">現在訂機票會便宜很多。</p>
    </NoteSlide>

    <NoteSlide title="lot 前面要加 a" mark="a lot">
      <NoteFix
        wrong="This flat is lot bigger than our old one."
        right="This flat is a lot bigger than our old one."
        fix="a lot"
      />
    </NoteSlide>

    <NoteSlide title="修飾比較級用 a lot，不加 of" mark="a lot cheaper">
      <NoteFix
        wrong="The new road is a lot of safer."
        right="The new road is a lot safer."
        fix="a lot safer"
      />
    </NoteSlide>

    <NoteSlide title="a lot 後面要用比較級" mark="cheaper">
      <NoteFix
        wrong="Online tickets are a lot cheap than tickets at the door."
        right="Online tickets are a lot cheaper than tickets at the door."
        fix="cheaper"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
