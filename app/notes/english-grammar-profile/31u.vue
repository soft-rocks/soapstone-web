<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-ours-as-subject-902, as slides, in the order of content.md. One point per slide: the title names it, the
// diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="ours 當主詞，帶出倍數比較">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'Of course there are much larger gardens in this area, but', kind: 'dim' },
          { t: 'ours', role: '= our garden', kind: 'key' },
          { t: 'is more than four times as big as', role: '倍數比較' },
          { t: 'the one we had in Holland.', kind: 'dim' },
        ]"
      />
      <p class="translation">這一帶當然有大得多的花園，但我們的花園比我們在荷蘭那個大了四倍多。</p>
    </NoteSlide>

    <NoteSlide title="ours 加助動詞，代替前面說過的動詞片語" mark="ours">
      <div class="rows is-labeled">
        <div>
          <span class="term">as ours did</span>
          <span
            ><NoteMark
              sentence="I hope other parks will plant more trees, as ours did."
              :marks="['as ours did.']"
            /><span class="translation"
              >我希望其他公園也能種更多樹，就像我們的公園一樣。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="ours 後面接 twice as ... as 這類倍數比較" mark="four times as big as">
      <div class="rows is-labeled">
        <div>
          <span class="term">倍數</span>
          <span
            ><NoteMark
              sentence="Their kitchen is tiny. Ours is twice as big."
              :marks="['Ours is twice as big.']"
            /><span class="translation">他們的廚房很小。我們的是兩倍大。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="前一句說出名詞，下一句用 Ours 說自己的情況" mark="ours">
      <div class="rows is-labeled">
        <div>
          <span class="term">一段話</span>
          <span
            ><NoteMark
              sentence="The school runs summer camps. Ours was by a lake."
              :marks="['camps.', 'Ours']"
            /><span class="translation">學校有辦夏令營。我們參加的那一個在湖邊。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="後面沒有名詞時用 ours" mark="ours">
      <NoteFix
        wrong="Other schools changed their rules, as our did."
        right="Other schools changed their rules, as ours did."
        fix="ours"
      />
    </NoteSlide>

    <NoteSlide title="倍數比較寫成 three times as big as" mark="four times as big as">
      <NoteFix
        wrong="Ours is three times big as theirs."
        right="Ours is three times as big as theirs."
        fix="as big as"
      />
    </NoteSlide>

    <NoteSlide title="前面用過去式，助動詞也用 did">
      <NoteFix
        wrong="Their team trained hard last year, as ours does."
        right="Their team trained hard last year, as ours did."
        fix="did."
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
