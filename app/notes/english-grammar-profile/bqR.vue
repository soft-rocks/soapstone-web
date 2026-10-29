<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adjectives-form-the-best-with-noun-and-to, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="to 不定詞說明是做什麼事最好的" mark="to visit Poland">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Spring is', kind: 'dim' },
          { t: 'the best time', role: 'the best + 名詞', kind: 'key' },
          { t: 'to visit Kyoto.', role: 'to 不定詞', kind: 'key', ring: true },
        ]"
      />
      <p class="translation">春天是去京都最好的時節。</p>
    </NoteSlide>

    <NoteSlide title="常見的名詞：time、place、way、person" mark="the best time">
      <div class="rows is-labeled">
        <div>
          <span class="term">the best place to</span>
          <span
            ><NoteMark
              sentence="The roof is the best place to watch the fireworks."
              :marks="['the best place to']"
            /><span class="translation">屋頂是看煙火最好的地方。</span></span
          >
        </div>
        <div>
          <span class="term">the best way to</span>
          <span
            ><NoteMark
              sentence="What's the best way to learn English?"
              :marks="['the best way to']"
            /><span class="translation">學英文最好的方法是什麼？</span></span
          >
        </div>
        <div>
          <span class="term">the best person to</span>
          <span
            ><NoteMark
              sentence="I'm not the best person to ask about cars."
              :marks="['the best person to']"
            /><span class="translation">車子的事問我不太準。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="to 後面用原形動詞" mark="to visit">
      <NoteFix
        wrong="This is the best place to buying fruit."
        right="This is the best place to buy fruit."
        fix="buy"
      />
    </NoteSlide>

    <NoteSlide title="名詞後面接動詞用 to，不用 for" mark="to visit">
      <NoteFix
        wrong="Autumn is the best time for visit Japan."
        right="Autumn is the best time to visit Japan."
        fix="to"
      />
    </NoteSlide>

    <NoteSlide title="best 加名詞時前面要加 the" mark="the best">
      <NoteFix
        wrong="Walking is best way to see the city."
        right="Walking is the best way to see the city."
        fix="the best"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
