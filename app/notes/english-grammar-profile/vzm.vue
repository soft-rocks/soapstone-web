<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// negation-form-use-not-stance-adverb-hedging, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="not 後面加態度副詞，讓否定的語氣委婉">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Personally,', kind: 'dim' },
          { t: 'I', role: '主詞' },
          { t: 'do not', role: '助動詞 + not' },
          { t: 'actually', role: '態度副詞', kind: 'key', ring: true },
          { t: 'think', role: '動詞' },
          { t: 'that this relationship will change.', role: 'that 子句', kind: 'dim' },
        ]"
      />
      <p class="translation">我個人其實不認為這段關係會改變。</p>
    </NoteSlide>

    <NoteSlide title="常用的有 necessarily、really、exactly、entirely" mark="actually">
      <div class="rows is-labeled">
        <div>
          <span class="term">不一定</span>
          <span
            ><NoteMark
              sentence="Older cars are not necessarily slower."
              :marks="['not necessarily']"
            /><span class="translation">舊車不一定比較慢。</span></span
          >
        </div>
        <div>
          <span class="term">不太</span>
          <span
            ><NoteMark sentence="I don't really like spicy food." :marks="['don\'t really']" /><span
              class="translation"
              >我不太喜歡辣的食物。</span
            ></span
          >
        </div>
        <div>
          <span class="term">算不上</span>
          <span
            ><NoteMark sentence="The test wasn't exactly easy." :marks="['wasn\'t exactly']" /><span
              class="translation"
              >那次考試算不上簡單。</span
            ></span
          >
        </div>
        <div>
          <span class="term">不完全</span>
          <span
            ><NoteMark
              sentence="I'm not entirely sure where I left my keys."
              :marks="['not entirely']"
            /><span class="translation">我不太確定我把鑰匙放在哪裡。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="態度副詞放在 not 前面，就變成加強否定" mark="do not actually">
      <div class="rows is-labeled">
        <div>
          <span class="term">委婉</span>
          <span
            ><NoteMark
              sentence="I don't really like the new office."
              :marks="['don\'t really']"
            /><span class="translation">我不太喜歡新的辦公室。</span></span
          >
        </div>
        <div>
          <span class="term">加強否定</span>
          <span
            ><NoteMark
              sentence="I really don't like the new boss."
              :marks="['really don\'t']"
            /><span class="translation">我真的很不喜歡新老闆。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="not 後面用副詞 necessarily，不用形容詞" mark="actually">
      <NoteFix
        wrong="I don't necessary agree with him."
        right="I don't necessarily agree with him."
        fix="necessarily"
      />
    </NoteSlide>

    <NoteSlide title="necessarily 放在 not 後面" mark="not actually">
      <NoteFix
        wrong="Rich people necessarily are not happy."
        right="Rich people are not necessarily happy."
        fix="not necessarily"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
