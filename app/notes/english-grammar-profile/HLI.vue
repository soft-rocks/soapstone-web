<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-how-clause, as slides, in the order of content.md. One point per slide: the title names it, the
// diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on separate
// lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="How 直接接主詞和動詞" mark="How I love">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'How', role: 'How', kind: 'key', ring: true },
          { t: 'I', role: '主詞' },
          { t: 'miss', role: '動詞', kind: 'key' },
          { t: 'my grandmother\'s cooking!', role: '受詞', kind: 'dim' },
        ]"
      />
      <p class="translation">我好想念奶奶煮的菜！</p>
    </NoteSlide>

    <NoteSlide title="常見的動詞：love、hate、miss、long to、wish" mark="love">
      <div class="rows is-labeled">
        <div>
          <span class="term">hate</span>
          <span
            ><NoteMark sentence="How I hate Mondays!" :marks="['hate']" /><span class="translation"
              >我好討厭星期一！</span
            ></span
          >
        </div>
        <div>
          <span class="term">miss</span>
          <span
            ><NoteMark sentence="How I miss those days!" :marks="['miss']" /><span
              class="translation"
              >我好懷念那些日子！</span
            ></span
          >
        </div>
        <div>
          <span class="term">long to</span>
          <span
            ><NoteMark sentence="How I long to see the sea again!" :marks="['long to']" /><span
              class="translation"
              >我好想再看到大海！</span
            ></span
          >
        </div>
        <div>
          <span class="term">wish</span>
          <span
            ><NoteMark sentence="How I wish I could go!" :marks="['wish']" /><span
              class="translation"
              >我真希望我能去！</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="副詞放在主詞和動詞中間" mark="I love">
      <NoteMark sentence="How I often longed to play outside!" :marks="['I often longed']" />
      <p class="translation">我以前多常渴望到外面玩！</p>
    </NoteSlide>

    <NoteSlide title="不加 do，主詞在動詞前面" mark="I love">
      <NoteFix wrong="How do I love this song!" right="How I love this song!" fix="How I" />
    </NoteSlide>

    <NoteSlide title="much 只出現一次" mark="How I love">
      <NoteFix wrong="How much I love it much!" right="How much I love it!" fix="love it" />
    </NoteSlide>

    <NoteSlide title="long 後面接 to 不定詞" mark="love">
      <NoteFix
        wrong="How I long be there again!"
        right="How I long to be there again!"
        fix="long to"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
