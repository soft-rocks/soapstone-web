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
    <NoteSlide title="really 放在一般動詞前面" mark="really like">
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

    <NoteSlide title="very much 放在受詞後面">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'My cousin likes', role: '主詞 + 一般動詞', kind: 'dim' },
          { t: 'her college in Leeds', role: '受詞' },
          { t: 'very much.', role: '程度副詞', kind: 'key' },
        ]"
      />
      <p class="translation">我表姊很喜歡她在里茲念的學院。</p>
    </NoteSlide>

    <NoteSlide title="always 和 sometimes 放在一般動詞前面">
      <div class="rows is-labeled">
        <div>
          <span class="term">always</span>
          <span
            ><NoteMark sentence="My son always walks to school." :marks="['always walks']" /><span
              class="translation"
              >我兒子都走路上學。</span
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
            ><NoteMark sentence="My dad can't really dance." :marks="['can\'t really']" /><span
              class="translation"
              >我爸爸其實不太會跳舞。</span
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
      <NoteFix
        wrong="We enjoyed very much the concert."
        right="We enjoyed the concert very much."
        fix="very much"
      />
    </NoteSlide>

    <NoteSlide title="always 不放在一般動詞後面">
      <NoteFix
        wrong="He drinks always milk at night."
        right="He always drinks milk at night."
        fix="always drinks"
      />
    </NoteSlide>

    <NoteSlide title="never 已經是否定，不再加 not">
      <NoteFix
        wrong="Grandpa doesn't never drive at night."
        right="Grandpa never drives at night."
        fix="never"
      />
    </NoteSlide>

    <NoteSlide title="always 不放在 be 前面">
      <NoteFix wrong="The shop always is busy." right="The shop is always busy." fix="is always" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
