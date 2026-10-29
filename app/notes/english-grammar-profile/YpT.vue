<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// negation-form-auxiliary-verbs-be-have-past, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="過去完成式的否定在 had 後面加 not">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'hadn\'t', role: 'had + not', kind: 'key' },
          { t: 'expected', role: '過去分詞', kind: 'key' },
          { t: 'to receive', role: 'to + 原形動詞' },
          { t: 'a letter from her.', role: '受詞', kind: 'dim' },
        ]"
      />
      <p class="translation">我沒想到會收到她的信。</p>
      <p class="remark">說的是收到信之前的想法。</p>
    </NoteSlide>

    <NoteSlide title="過去進行式的否定在 was 或 were 後面加 not" mark="hadn't">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'When you called,', kind: 'dim' },
          { t: 'I', role: '主詞' },
          { t: 'wasn\'t', role: 'was + not', kind: 'key' },
          { t: 'sleeping.', role: '動詞-ing', kind: 'key' },
        ]"
      />
      <p class="translation">你打來的時候我沒在睡覺。</p>
      <p class="remark">說的是過去某個時間點正在發生的事。</p>
    </NoteSlide>

    <NoteSlide title="hadn't 說的是過去某件事發生之前的情況" mark="hadn't">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'When we got to the cinema,', role: '過去的某件事', kind: 'dim' },
          { t: 'the film', role: '主詞' },
          { t: 'hadn\'t started.', role: '在那之前沒有發生', kind: 'key' },
        ]"
      />
      <p class="translation">我們到電影院的時候，電影還沒開始。</p>
    </NoteSlide>

    <NoteSlide title="過去完成式的否定不用 did" mark="hadn't">
      <NoteFix
        wrong="The builders didn't had finished the roof."
        right="The builders hadn't finished the roof."
        fix="hadn't"
      />
    </NoteSlide>

    <NoteSlide title="過去進行式的否定句要有 was 或 were">
      <NoteFix
        wrong="We not watching the game when the lights went out."
        right="We weren't watching the game when the lights went out."
        fix="weren't"
      />
    </NoteSlide>

    <NoteSlide title="複數主詞用 weren't">
      <NoteFix
        wrong="The children wasn't sleeping."
        right="The children weren't sleeping."
        fix="weren't"
      />
    </NoteSlide>

    <NoteSlide title="hadn't 後面接過去分詞，不接過去式" mark="expected">
      <NoteFix
        wrong="She hadn't went to a concert before."
        right="She hadn't been to a concert before."
        fix="been"
      >
        說「去過」用 <code>been</code>。
      </NoteFix>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
