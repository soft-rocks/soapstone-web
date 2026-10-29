<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// nouns-form-complex-noun-phrase-with-possessive-s, as slides, in the order of content.md.
// One point per slide: the title names it, the diagram shows it, and `mark` circles the
// matching words of the note's sentence. Keep the parts of one sentence on one line: Vue
// drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="of 後面的名詞片語用 's 說明是誰的">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'The subject', role: '主要名詞', kind: 'key' },
          { t: 'of', role: 'of' },
          { t: 'my boss\'s', role: '名詞 + \'s', kind: 'key' },
          { t: 'talk', role: '名詞' },
          { t: 'will be IT skills.', kind: 'dim' },
        ]"
      />
      <p class="translation">我老闆這次演講的主題會是 IT 技能。</p>
      <p class="remark">由後往前讀：老闆的演講，演講的主題。</p>
    </NoteSlide>

    <NoteSlide title="動詞跟著最前面的主要名詞" mark="The subject">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'The window', role: '主要名詞', kind: 'key' },
          { t: 'of my neighbour\'s car', kind: 'dim' },
          { t: 'was', role: '單數動詞', kind: 'key' },
          { t: 'broken.', kind: 'dim' },
        ]"
      />
      <p class="translation">我鄰居車子的窗戶破了。</p>
    </NoteSlide>

    <NoteSlide title="說明是誰的車，neighbour 後面加 's" mark="boss's">
      <NoteFix
        wrong="I saw the window of my neighbour car was broken."
        right="I saw the window of my neighbour's car was broken."
        fix="neighbour's"
      />
    </NoteSlide>

    <NoteSlide title="'s 加在擁有的人後面，of 放在主要名詞後面" mark="of">
      <NoteFix
        wrong="The talk's subject of my boss will be IT skills."
        right="The subject of my boss's talk will be IT skills."
        fix="The subject of my boss's talk"
      />
    </NoteSlide>

    <NoteSlide title="主要名詞是 colour，動詞用單數">
      <NoteFix
        wrong="The colour of my sister's shoes are really bright."
        right="The colour of my sister's shoes is really bright."
        fix="is"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
