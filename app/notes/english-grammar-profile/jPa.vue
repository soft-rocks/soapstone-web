<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// nouns-form-plural-es, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="字尾是 -&#x2060;ss 的名詞，複數加 -&#x2060;es">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Then I bought five different', kind: 'dim' },
          { t: 'dresses.', role: 'dress + es', kind: 'key' },
        ]"
      />
      <p class="translation">接著我買了五件不一樣的洋裝。</p>
      <p class="remark"><code>-&#x2060;es</code> 唸成一個音節。</p>
    </NoteSlide>

    <NoteSlide
      title="-&#x2060;s、-&#x2060;sh、-&#x2060;ch、-&#x2060;x、-&#x2060;z 和子音加 -&#x2060;o 結尾加 -&#x2060;es"
      mark="dresses."
    >
      <div class="rows is-labeled">
        <div>
          <span class="term">-&#x2060;s / -&#x2060;ss</span>
          <span>bus → buses, class → classes</span>
        </div>
        <div>
          <span class="term">-&#x2060;sh / -&#x2060;ch</span>
          <span>dish → dishes, watch → watches</span>
        </div>
        <div>
          <span class="term">-&#x2060;x / -&#x2060;z</span>
          <span>box → boxes, quiz → quizzes</span>
        </div>
        <div>
          <span class="term">子音 + -&#x2060;o</span>
          <span>tomato → tomatoes, potato → potatoes</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="母音加 -&#x2060;o、短的字和外來字只加 -&#x2060;s" mark="dresses.">
      <div class="rows is-labeled">
        <div>
          <span class="term">母音 + -&#x2060;o</span>
          <span>radio → radios, zoo → zoos</span>
        </div>
        <div>
          <span class="term">短的字和外來字</span>
          <span>photo → photos, piano → pianos</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="字尾是 -&#x2060;ch，加 -&#x2060;es">
      <NoteFix wrong="I made three sandwichs." right="I made three sandwiches." fix="sandwiches" />
    </NoteSlide>

    <NoteSlide title="字尾是 -&#x2060;x，加 -&#x2060;es">
      <NoteFix
        wrong="We need more boxs for the books."
        right="We need more boxes for the books."
        fix="boxes"
      />
    </NoteSlide>

    <NoteSlide title="photo 只加 -&#x2060;s">
      <NoteFix wrong="I took a lot of photoes." right="I took a lot of photos." fix="photos" />
    </NoteSlide>

    <NoteSlide title="tomato 是子音加 -&#x2060;o，加 -&#x2060;es">
      <NoteFix
        wrong="Can you buy some tomatos?"
        right="Can you buy some tomatoes?"
        fix="tomatoes"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
