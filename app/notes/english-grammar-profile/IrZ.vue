<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-these-ones-those-ones, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="those + ones" mark="those ones">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Can I have a look at', kind: 'dim' },
          { t: 'those', role: '遠的', kind: 'key' },
          { t: 'ones', role: '代替複數名詞', kind: 'key' },
          { t: 'in the window?', kind: 'dim' },
        ]"
      />
      <p class="translation">我可以看一下櫥窗裡的那些嗎？</p>
    </NoteSlide>

    <NoteSlide title="these ones 和 those ones" mark="those ones">
      <div class="rows is-labeled">
        <div>
          <span class="term">these ones</span>
          <span
            ><NoteMark
              sentence="Have you got these ones in a bigger size?"
              :marks="['these ones']"
            /><span class="translation">這款有大一號的嗎？</span></span
          >
        </div>
        <div>
          <span class="term">those ones</span>
          <span
            ><NoteMark
              sentence="Not these apples. I want those ones at the back."
              :marks="['those ones']"
            /><span class="translation">不要這些蘋果，我要後面那些。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="正式的文章省略 ones">
      <div class="rows is-labeled">
        <div>
          <span class="term">口語</span>
          <span
            ><NoteMark sentence="I like those ones." :marks="['those ones.']" /><span
              class="translation"
              >我喜歡那些。</span
            ></span
          >
        </div>
        <div>
          <span class="term">正式</span>
          <span
            ><NoteMark
              sentence="The new figures are higher than those from last year."
              :marks="['those']"
            /><span class="translation">新的數字比去年的高。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="ones 前面用 those" mark="those">
      <NoteFix wrong="Can I try that ones on?" right="Can I try those ones on?" fix="those" />
    </NoteSlide>

    <NoteSlide title="說出名詞就不用 ones">
      <NoteFix
        wrong="Those ones shoes are very comfortable."
        right="Those shoes are very comfortable."
        fix="Those shoes"
      />
    </NoteSlide>

    <NoteSlide title="these ones 用複數動詞">
      <NoteFix
        wrong="These ones is cheaper than the others."
        right="These ones are cheaper than the others."
        fix="are"
      />
    </NoteSlide>

    <NoteSlide title="單數用 that one">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I\'ll take', kind: 'dim' },
          { t: 'that one.', role: '代替單數名詞', kind: 'key' },
        ]"
      />
      <p class="translation">我要那個。</p>
    </NoteSlide>

    <NoteSlide title="the ones + 修飾語">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I prefer', kind: 'dim' },
          { t: 'the ones', role: 'the ones', kind: 'key' },
          { t: 'with short sleeves.', role: '修飾語' },
        ]"
      />
      <p class="translation">我比較喜歡短袖的。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
