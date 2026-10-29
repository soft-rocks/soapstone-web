<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-negative-declarative-modal-auxiliary-verbs, as slides, in the order of
// content.md. One point per slide: the title names it, the diagram shows it, and `mark` circles
// the matching words of the note's sentence. Keep the parts of one sentence on one line: Vue
// drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="not 放在情態動詞後面" mark="can't wait">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Grandpa', role: '主詞' },
          { t: 'can\'t', role: '情態動詞 + not', kind: 'key', ring: true },
          { t: 'hear', role: '原形動詞', kind: 'key' },
          { t: 'you from there.', kind: 'dim' },
        ]"
      />
      <p class="translation">爺爺在那裡聽不到你說話。</p>
    </NoteSlide>

    <NoteSlide title="couldn't、won't、shouldn't 的意思" mark="can't">
      <div class="rows is-labeled">
        <div>
          <span class="term">couldn't（過去不能）</span>
          <span
            ><NoteMark
              sentence="I couldn't open the jar, so I asked my dad."
              :marks="['couldn\'t open']"
            /><span class="translation">我打不開那個罐子，所以請我爸爸幫忙。</span></span
          >
        </div>
        <div>
          <span class="term">won't（不會）</span>
          <span
            ><NoteMark
              sentence="The car won't start, so we'll take the bus."
              :marks="['won\'t start']"
            /><span class="translation">車子發不動，所以我們搭公車吧。</span></span
          >
        </div>
        <div>
          <span class="term">shouldn't（不應該）</span>
          <span
            ><NoteMark
              sentence="The new director is coming today. We shouldn't be late for the meeting."
              :marks="['shouldn\'t be']"
            /><span class="translation">新主任今天要來。我們開會不應該遲到。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="I can't wait 是等不及" mark="can't wait">
      <NoteMark sentence="We can't wait to try your new restaurant." :marks="['can\'t wait']" />
      <p class="translation">我們等不及要去你的新餐廳吃了。</p>
    </NoteSlide>

    <NoteSlide title="not 放在情態動詞後面，不放在前面" mark="can't">
      <NoteFix
        wrong="This old car not can go up steep hills."
        right="This old car can't go up steep hills."
        fix="can't"
      />
    </NoteSlide>

    <NoteSlide title="情態動詞的否定不用 don't" mark="can't">
      <NoteFix
        wrong="Our dog doesn't can climb the stairs."
        right="Our dog can't climb the stairs."
        fix="can't"
      />
    </NoteSlide>

    <NoteSlide title="will not 縮寫成 won't" mark="can't">
      <NoteFix
        wrong="I willn't forget your birthday again."
        right="I won't forget your birthday again."
        fix="won't"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
