<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adverbs-form-degree-and-time-modifying-verbs, as slides, in the order of content.md. One
// point per slide: the title names it, the diagram shows it, and `mark` circles the matching
// words of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="really 放在一般動詞前面">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'I', role: '主詞', kind: 'dim' },
          { t: 'really', role: '程度副詞', kind: 'key' },
          { t: 'like', role: '一般動詞' },
          { t: 'Japanese music.', role: '受詞' },
        ]"
      />
      <p class="translation">我真的很喜歡日本音樂。</p>
    </NoteSlide>

    <NoteSlide title="very much 放在受詞後面" mark="like">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'I like', role: '主詞 + 一般動詞', kind: 'dim' },
          { t: 'my college', role: '受詞' },
          { t: 'very much.', role: '程度副詞', kind: 'key' },
        ]"
      />
      <p class="translation">我很喜歡我的學院。</p>
    </NoteSlide>

    <NoteSlide title="always 和 sometimes 放在一般動詞前面" mark="really like">
      <div class="rows is-labeled">
        <div>
          <span class="term">always</span>
          <span
            ><NoteMark sentence="I always walk to school." :marks="['always walk']" /><span
              class="translation"
              >我都走路上學。</span
            ></span
          >
        </div>
        <div>
          <span class="term">sometimes</span>
          <span
            ><NoteMark
              sentence="We sometimes go to the shopping centre."
              :marks="['sometimes go']"
            /><span class="translation">我們有時候會去購物中心。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="really 放在助動詞後面，sometimes 也可以放在句首">
      <div class="rows is-labeled">
        <div>
          <span class="term">助動詞後面</span>
          <span
            ><NoteMark sentence="I can't really sing." :marks="['can\'t really']" /><span
              class="translation"
              >我其實不太會唱歌。</span
            ></span
          >
        </div>
        <div>
          <span class="term">sometimes 在句首</span>
          <span
            ><NoteMark sentence="Sometimes I take the bus." :marks="['Sometimes']" /><span
              class="translation"
              >我有時候搭公車。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="very much 不放在動詞和受詞中間">
      <NoteFix wrong="I like very much pizza." right="I like pizza very much." fix="very much" />
    </NoteSlide>

    <NoteSlide title="always 不放在一般動詞後面">
      <NoteFix
        wrong="He drinks always milk at night."
        right="He always drinks milk at night."
        fix="always drinks"
      />
    </NoteSlide>

    <NoteSlide title="never 已經是否定，不再加 not">
      <NoteFix wrong="I don't never eat fish." right="I never eat fish." fix="never" />
    </NoteSlide>

    <NoteSlide title="always 不放在 be 前面">
      <NoteFix wrong="The shop always is busy." right="The shop is always busy." fix="is always" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
