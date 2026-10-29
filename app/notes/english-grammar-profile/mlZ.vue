<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// present-form-use-with-adverbs-of-indefinite-frequency, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="be always 加動詞-ing 抱怨一再發生的事">
      <NoteWords
        :size="36"
        :parts="[
          { t: 'You', role: '主詞' },
          { t: 'are', role: 'be' },
          { t: 'always', role: 'always', kind: 'key', ring: true },
          { t: 'losing', role: '動詞-ing', kind: 'key' },
          { t: 'things.', role: '受詞', kind: 'dim' },
        ]"
      />
      <p class="translation">你老是弄丟東西。</p>
    </NoteSlide>
    <NoteSlide title="說的是好事時，表示驚訝或欣賞" mark="always">
      <div class="rows is-labeled">
        <div>
          <span class="term">抱怨</span>
          <span
            ><NoteMark
              sentence="He's always leaving his socks on the floor."
              :marks="['always', 'leaving']"
            /><span class="translation">他老是把襪子丟在地上。</span></span
          >
        </div>
        <div>
          <span class="term">驚訝或欣賞</span>
          <span
            ><NoteMark
              sentence="She's always helping other people."
              :marks="['always', 'helping']"
            /><span class="translation">她總是在幫別人。</span></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="現在簡單式說習慣，進行式帶著說話者的感受" mark="always">
      <div class="rows is-labeled">
        <div>
          <span class="term">習慣</span>
          <span
            ><NoteMark sentence="He always leaves at eight." :marks="['always', 'leaves']" /><span
              class="translation"
              >他每天都八點出門。</span
            ></span
          >
        </div>
        <div>
          <span class="term">帶著感受</span>
          <span
            ><NoteMark
              sentence="He's always leaving his phone at home."
              :marks="['always', 'leaving']"
            /><span class="translation">他老是把手機忘在家裡。</span></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="forever 的用法和 always 相同，語氣更強" mark="always">
      <div class="rows is-labeled">
        <div>
          <span class="term">forever</span>
          <span
            ><NoteMark
              sentence="She's forever complaining about her job."
              :marks="['forever']"
            /><span class="translation">她老是在抱怨她的工作。</span></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="always 放在 be 後面" mark="always">
      <NoteFix
        wrong="You always are losing things."
        right="You are always losing things."
        :fix="['are', 'always']"
      />
    </NoteSlide>
    <NoteSlide title="be always 後面的動詞加 -ing" mark="losing">
      <NoteFix
        wrong="She is always complain about the food."
        right="She is always complaining about the food."
        :fix="['complaining']"
      />
    </NoteSlide>
    <NoteSlide title="現在進行式要有 am、is 或 are" mark="are">
      <NoteFix
        wrong="My neighbours always making noise at night."
        right="My neighbours are always making noise at night."
        :fix="['are']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
