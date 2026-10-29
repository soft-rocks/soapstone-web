<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// verbs-form-verb-pronoun-particle-1065, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="代名詞受詞放在動詞和小品詞中間" mark="it">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I tried to', kind: 'dim' },
          { t: 'clean', role: '動詞', kind: 'key' },
          { t: 'it', role: '代名詞受詞', kind: 'key', ring: true },
          { t: 'up', role: '小品詞', kind: 'key' },
          { t: 'as much as possible.', role: '程度', kind: 'dim' },
        ]"
      />
      <p class="translation">我盡量把它清乾淨了。</p>
      <p class="remark"><code>clean up</code> 的意思是打掃乾淨。</p>
    </NoteSlide>

    <NoteSlide title="名詞受詞可以放在小品詞中間或後面" mark="it">
      <div class="rows is-labeled">
        <div>
          <span class="term">名詞在中間</span>
          <span
            ><NoteMark sentence="I cleaned the kitchen up." :marks="['the kitchen']" /><span
              class="translation"
              >我把廚房打掃乾淨了。</span
            ></span
          >
        </div>
        <div>
          <span class="term">名詞在後面</span>
          <span
            ><NoteMark sentence="I cleaned up the kitchen." :marks="['the kitchen']" /><span
              class="translation"
              >我把廚房打掃乾淨了。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="代名詞受詞常指前面說過的東西" mark="it">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I heard', kind: 'dim' },
          { t: 'the new band', role: '前面說過的東西', kind: 'key' },
          { t: 'was good, so I went to check', kind: 'dim' },
          { t: 'them', role: '指 the new band', kind: 'key', ring: true },
          { t: 'out.', kind: 'dim' },
        ]"
      />
      <p class="translation">我聽說那個新樂團很好，就去聽聽看。</p>
    </NoteSlide>

    <NoteSlide title="代名詞不放在小品詞後面" mark="it up">
      <NoteFix
        wrong="The problem is hard, but we'll figure out it."
        right="The problem is hard, but we'll figure it out."
        fix="it out"
      />
    </NoteSlide>

    <NoteSlide title="laugh off 要有受詞" mark="it">
      <NoteFix
        wrong="He made a mistake, but he laughed off."
        right="He made a mistake, but he laughed it off."
        fix="it"
      />
    </NoteSlide>

    <NoteSlide title="淡化是 play down，play up 是誇大" mark="up">
      <NoteFix
        wrong="The news was bad, but the minister played it up."
        right="The news was bad, but the minister played it down."
        fix="down"
      />
    </NoteSlide>

    <NoteSlide title="put up with 的代名詞放在 with 後面" mark="it">
      <NoteMark sentence="I can't put up with it any more." :marks="['with it']" />
      <p class="translation">我再也受不了了。</p>
    </NoteSlide>

    <NoteSlide title="talk it over 的 it 可以指整件事" mark="it">
      <NoteMark sentence="Let's talk it over after dinner." :marks="['it']" />
      <p class="translation">我們晚餐後好好談一談。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
