<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// nouns-form-irregular-plural-nouns, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="mouse 的複數不加 -&#x2060;s，改成 mice">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'The floor in the kitchen has many', kind: 'dim' },
          { t: 'holes,', role: '規則複數' },
          { t: 'and I think there are', kind: 'dim' },
          { t: 'mice.', role: '不規則複數', kind: 'key' },
        ]"
      />
      <p class="translation">廚房的地板有很多洞，我覺得有老鼠。</p>
    </NoteSlide>

    <NoteSlide title="不規則複數改母音、加 -&#x2060;en、不變或改成 -&#x2060;ves" mark="mice.">
      <div class="rows is-labeled">
        <div>
          <span class="term">改母音</span>
          <span>man → men, foot → feet, mouse → mice</span>
        </div>
        <div>
          <span class="term">加 -&#x2060;en / -&#x2060;ren</span>
          <span>child → children</span>
        </div>
        <div>
          <span class="term">單複數同形</span>
          <span>sheep → sheep, fish → fish</span>
        </div>
        <div>
          <span class="term">-&#x2060;f / -&#x2060;fe → -&#x2060;ves</span>
          <span>knife → knives, half → halves</span>
        </div>
        <div>
          <span class="term">person</span>
          <span>person → people</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="不規則複數名詞當主詞，動詞用複數" mark="are">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'The children', role: '不規則複數', kind: 'key' },
          { t: 'are', role: '複數動詞', kind: 'key' },
          { t: 'in the garden.', kind: 'dim' },
        ]"
      />
      <p class="translation">孩子們在院子裡。</p>
    </NoteSlide>

    <NoteSlide title="child 的複數是 children" mark="mice.">
      <NoteFix wrong="My childs are at school." right="My children are at school." fix="children" />
    </NoteSlide>

    <NoteSlide title="people 已經是複數，不再加 -&#x2060;s">
      <NoteFix
        wrong="Some peoples don't like cats."
        right="Some people don't like cats."
        fix="people"
      />
    </NoteSlide>

    <NoteSlide title="people 是複數，動詞用 are" mark="are">
      <NoteFix wrong="People is very kind here." right="People are very kind here." fix="are" />
    </NoteSlide>

    <NoteSlide title="half 的複數是 halves">
      <NoteFix
        wrong="Cut the apple into two halfs."
        right="Cut the apple into two halves."
        fix="halves"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
