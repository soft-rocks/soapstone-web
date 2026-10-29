<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// conjunctions-form-use-plus-with-clauses, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words
// of the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="子句 + , plus + 子句" mark="plus">
      <NoteWords
        :size="20"
        :parts="[
          { t: 'I would be more than pleased to have you at my home,', role: '好處' },
          { t: 'plus', role: '而且', kind: 'key' },
          { t: 'you won\'t have to pay a thing!', role: '另一個好處' },
        ]"
      />
      <p class="translation">我非常樂意讓你來我家，而且你一毛錢都不用花！</p>
    </NoteSlide>

    <NoteSlide title="句子。 + Plus, + 句子。" mark="plus">
      <NoteMark sentence="It's pretty cheap. Plus, it's really fun!" :marks="['Plus,']" />
      <p class="translation">它滿便宜的。而且真的很好玩！</p>
    </NoteSlide>

    <NoteSlide title="plus 的用法" mark="plus">
      <div class="rows is-labeled">
        <div>
          <span class="term">意思方向</span>
          <span>和前面相同，常是另一個好處</span>
        </div>
        <div>
          <span class="term">句首</span>
          <span>Plus 後面常加逗號</span>
        </div>
        <div>
          <span class="term">正式的文章</span>
          <span>用 in addition、moreover、what's more</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="相反的意思用 But">
      <NoteFix
        wrong="The hotel is very cheap. Plus, the rooms are dirty."
        right="The hotel is very cheap. But the rooms are dirty."
        fix="But"
      />
    </NoteSlide>

    <NoteSlide title="Plus 後面接完整的句子">
      <NoteFix
        wrong="The app is free. Plus, very easy to use."
        right="The app is free. Plus, it's very easy to use."
        fix="it's"
      />
    </NoteSlide>

    <NoteSlide title="plus 後面不加 also">
      <NoteFix
        wrong="The flat is near my office. Plus, it's also very quiet."
        right="The flat is near my office. Plus, it's very quiet."
        fix="it's very"
      />
    </NoteSlide>

    <NoteSlide title="正式的文章用 In addition">
      <NoteFix
        wrong="The new system reduces costs. Plus, it improves safety."
        right="The new system reduces costs. In addition, it improves safety."
        fix="In addition,"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
