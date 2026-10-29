<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-use-let-third-person-pronoun-devolving, as slides, in the order of content.md.
// One point per slide: the title names it, the diagram shows it, and `mark` circles the
// matching words of the note's sentence. Keep the parts of one sentence on one line: Vue drops
// the whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="let 把事情交給別人自己處理" mark="Let them find">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'He broke the chair, so', kind: 'dim' },
          { t: 'let him', role: '交給他', kind: 'key', ring: true },
          { t: 'repair it.', role: '原形動詞', kind: 'key' },
        ]"
      />
      <p class="translation">椅子是他弄壞的，所以讓他自己修。</p>
    </NoteSlide>

    <NoteSlide title="常加 own 或 themselves，強調自己來" mark="their own">
      <NoteMark
        sentence="They're old enough. Let them cook their own dinner."
        :marks="['their own dinner']"
      />
      <p class="translation">他們夠大了，讓他們自己煮晚餐。</p>
    </NoteSlide>

    <NoteSlide title="Let them be 表示別管他們" mark="Let them">
      <NoteMark
        sentence="The twins are fighting about the TV again. Let them be. They'll stop arguing soon."
        :marks="['Let them be']"
      />
      <p class="translation">雙胞胎又在為電視吵架了。別管他們，他們很快就不吵了。</p>
    </NoteSlide>

    <NoteSlide title="let 後面的動詞不加 to" mark="find">
      <NoteFix wrong="Let them to sort it out." right="Let them sort it out." fix="sort" />
    </NoteSlide>

    <NoteSlide title="her 對應 herself" mark="their own">
      <NoteFix
        wrong="Let them clean up the mess theirselves."
        right="Let them clean up the mess themselves."
        fix="themselves"
      />
    </NoteSlide>

    <NoteSlide title="let 後面的代名詞用受格" mark="them">
      <NoteFix wrong="Let they pay for it." right="Let them pay for it." fix="them" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
