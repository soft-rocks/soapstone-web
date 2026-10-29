<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adjectives-form-with-enough, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="enough 放在形容詞後面" mark="good enough">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'My room is', kind: 'dim' },
          { t: 'big', role: '形容詞', kind: 'key' },
          { t: 'enough', role: 'enough', kind: 'key', ring: true },
          { t: 'for a desk and a bed.', role: 'for + 東西' },
        ]"
      />
      <p class="translation">我的房間夠大，放得下一張書桌和一張床。</p>
    </NoteSlide>

    <NoteSlide title="後面可以接 for 加名詞，或 to 不定詞" mark="good enough">
      <div class="rows is-labeled">
        <div>
          <span class="term">enough + for</span>
          <span
            ><NoteMark
              sentence="Is the water warm enough for the kids?"
              :marks="['warm enough for']"
            /><span class="translation">水對孩子們來說夠暖嗎？</span></span
          >
        </div>
        <div>
          <span class="term">enough + to 不定詞</span>
          <span
            ><NoteMark
              sentence="She's old enough to drive."
              :marks="['old enough to drive']"
            /><span class="translation">她已經到可以開車的年紀了。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="not + 形容詞 + enough，表示不夠" mark="don't">
      <NoteMark sentence="The car isn't big enough for all of us." :marks="['isn\'t big enough']" />
      <p class="translation">車子不夠大，我們全部坐不下。</p>
    </NoteSlide>

    <NoteSlide title="enough 修飾形容詞時放在後面" mark="good enough">
      <NoteFix
        wrong="The room isn't enough big for two people."
        right="The room isn't big enough for two people."
        fix="big enough"
      />
    </NoteSlide>

    <NoteSlide title="後面接動詞時用 to 不定詞" mark="enough">
      <NoteFix
        wrong="He isn't tall enough for reach the shelf."
        right="He isn't tall enough to reach the shelf."
        fix="to reach"
      />
    </NoteSlide>

    <NoteSlide title="不夠熱用 not warm enough，too warm 是太熱" mark="enough">
      <NoteFix
        wrong="The coffee is too warm. Can you heat it up?"
        right="The coffee isn't warm enough. Can you heat it up?"
        fix="isn't warm enough"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
