<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adjectives-form-with-prepositional-phrase, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="形容詞後面接固定的介系詞" mark="full of">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Swimming', role: '主詞' },
          { t: 'is', role: 'be', kind: 'dim' },
          { t: 'good', role: '形容詞', kind: 'key' },
          { t: 'for', role: '介系詞', kind: 'key', ring: true },
          { t: 'your back.', role: '名詞' },
        ]"
      />
      <p class="translation">游泳對你的背很好。</p>
    </NoteSlide>

    <NoteSlide title="good for 和 good at 意思不一樣" mark="full of">
      <div class="rows is-labeled">
        <div>
          <span class="term">good for（有好處）</span>
          <span
            ><NoteMark
              sentence="Fruit is good for you, so eat an apple."
              :marks="['good for']"
            /><span class="translation">水果對你有好處，吃顆蘋果吧。</span></span
          >
        </div>
        <div>
          <span class="term">good at（很會）</span>
          <span
            ><NoteMark sentence="My sister is good at math." :marks="['good at']" /><span
              class="translation"
              >我姊姊數學很好。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="afraid、interested、kind 後面接不同的介系詞" mark="of">
      <div class="rows is-labeled">
        <div>
          <span class="term">afraid of</span>
          <span
            ><NoteMark
              sentence="My little brother is afraid of dogs."
              :marks="['afraid of']"
            /><span class="translation">我弟弟怕狗。</span></span
          >
        </div>
        <div>
          <span class="term">interested in</span>
          <span
            ><NoteMark
              sentence="Ann is interested in old movies."
              :marks="['interested in']"
            /><span class="translation">Ann 對老電影有興趣。</span></span
          >
        </div>
        <div>
          <span class="term">kind to</span>
          <span
            ><NoteMark
              sentence="The nurses were very kind to my mother."
              :marks="['kind to']"
            /><span class="translation">護理師們對我媽媽很好。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="full 後面接 of" mark="full of">
      <NoteFix wrong="The box is full books." right="The box is full of books." fix="of" />
    </NoteSlide>

    <NoteSlide title="interested 後面接 in" mark="of">
      <NoteFix wrong="I'm interested about art." right="I'm interested in art." fix="in" />
    </NoteSlide>

    <NoteSlide title="介系詞後面的動詞加 -ing" mark="of people">
      <NoteFix wrong="He is good at swim." right="He is good at swimming." fix="swimming" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
