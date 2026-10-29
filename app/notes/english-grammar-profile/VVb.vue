<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// present-form-negative-872, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞是 it，用 doesn't，cost 用原形">
      <NoteWords
        :size="40"
        :parts="[
          { t: 'It', role: '主詞' },
          { t: 'doesn\'t', role: 'doesn\'t', kind: 'key', ring: true },
          { t: 'cost', role: '原形動詞', kind: 'key' },
          { t: 'very much.', role: '程度', kind: 'dim' },
        ]"
      />
      <p class="translation">那不會很貴。</p>
    </NoteSlide>
    <NoteSlide title="這些動詞常用在否定句" mark="doesn't">
      <div class="rows is-labeled">
        <div>
          <span class="term">need</span>
          <span
            ><NoteMark
              sentence="You don't need a ticket for children."
              :marks="['don\'t', 'need']"
            /><span class="translation">小孩不用買票。</span></span
          >
        </div>
        <div>
          <span class="term">matter</span>
          <span
            ><NoteMark sentence="It doesn't matter." :marks="['doesn\'t', 'matter.']" /><span
              class="translation"
              >沒關係。</span
            ></span
          >
        </div>
        <div>
          <span class="term">mind</span>
          <span
            ><NoteMark sentence="I don't mind the rain." :marks="['don\'t', 'mind']" /><span
              class="translation"
              >我不在意下雨。</span
            ></span
          >
        </div>
        <div>
          <span class="term">mean</span>
          <span
            ><NoteMark
              sentence="That doesn't mean you're wrong."
              :marks="['doesn\'t', 'mean']"
            /><span class="translation">那不代表你錯了。</span></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="doesn't 後面的動詞不加 -s" mark="cost">
      <NoteFix
        wrong="It doesn't costs very much."
        right="It doesn't cost very much."
        :fix="['cost']"
      />
    </NoteSlide>
    <NoteSlide title="複數名詞的主詞用 don't" mark="doesn't">
      <NoteFix
        wrong="These shoes doesn't fit me."
        right="These shoes don't fit me."
        :fix="['don\'t']"
      />
    </NoteSlide>
    <NoteSlide title="need 後面接動詞時要加 to" mark="doesn't">
      <NoteFix
        wrong="You don't need bring a coat today."
        right="You don't need to bring a coat today."
        :fix="['to']"
      />
    </NoteSlide>
    <NoteSlide title="動詞的否定用 doesn't，不用 no" mark="doesn't">
      <NoteFix wrong="It no matters." right="It doesn't matter." :fix="['doesn\'t', 'matter.']" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
