<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adverbs-form-adverb-adverb, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="程度副詞修飾情狀副詞" mark="very quickly">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'I hope to fix', role: '主詞 + 動詞', kind: 'dim' },
          { t: 'the problem', role: '受詞', kind: 'dim' },
          { t: 'very', role: '程度副詞', kind: 'key' },
          { t: 'quickly.', role: '情狀副詞' },
        ]"
      />
      <p class="translation">我希望能很快就把問題解決。</p>
    </NoteSlide>

    <NoteSlide title="程度副詞修飾時間副詞和程度副詞" mark="very">
      <div class="rows is-labeled">
        <div>
          <span class="term">+ 時間副詞</span>
          <span
            ><NoteMark sentence="I don't eat it very often." :marks="['very often']" /><span
              class="translation"
              >我不常吃。</span
            ></span
          >
        </div>
        <div>
          <span class="term">+ 程度副詞</span>
          <span
            ><NoteMark sentence="I love it so much." :marks="['so much']" /><span
              class="translation"
              >我好愛它。</span
            ></span
          >
        </div>
        <div>
          <span class="term">right + now</span>
          <span
            ><NoteMark sentence="I really need it right now." :marks="['right now']" /><span
              class="translation"
              >我現在馬上就需要。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="各個修飾副詞的副詞" mark="very">
      <div class="rows is-labeled">
        <div>
          <span class="term">very、really</span>
          <span>很，really 比較口語</span>
        </div>
        <div>
          <span class="term">so</span>
          <span>好、這麼，說話者的感覺很強</span>
        </div>
        <div>
          <span class="term">too</span>
          <span>太，程度高到造成問題</span>
        </div>
        <div>
          <span class="term">right</span>
          <span>就、馬上，修飾 now、here、there、away</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="程度副詞後面用副詞" mark="quickly">
      <NoteFix
        wrong="He finished his homework really quick."
        right="He finished his homework really quickly."
        fix="really quickly"
      />
    </NoteSlide>

    <NoteSlide title="修飾動詞用 so much">
      <NoteFix wrong="I miss you so many." right="I miss you so much." fix="so much" />
    </NoteSlide>

    <NoteSlide title="right 放在 now 前面">
      <NoteFix
        wrong="I'm busy now right. Can I call you back?"
        right="I'm busy right now. Can I call you back?"
        fix="right now"
      />
    </NoteSlide>

    <NoteSlide title="只說程度高用 really" mark="very">
      <NoteFix
        wrong="She speaks English too well. She sounds like a native speaker."
        right="She speaks English really well. She sounds like a native speaker."
        fix="really well"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
