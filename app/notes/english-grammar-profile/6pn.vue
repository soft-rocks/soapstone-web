<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-use-don-t-you, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="加了 you，命令的語氣更強" mark="Don't you">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Don\'t', role: '否定', kind: 'dim' },
          { t: 'you', role: '指著對方', kind: 'key', ring: true },
          { t: 'ever', role: '永遠不准', kind: 'key' },
          { t: 'play with matches again!', role: '原形動詞', kind: 'dim' },
        ]"
      />
      <p class="translation">你再也不准玩火柴！</p>
    </NoteSlide>

    <NoteSlide title="Don't you dare 是很強的警告" mark="Don't you dare">
      <NoteMark
        sentence="A: I'm going to tell Mom. B: Don't you dare!"
        :marks="['Don\'t you dare']"
      />
      <p class="translation">A：我要去跟媽媽說。B：你敢！</p>
    </NoteSlide>

    <NoteSlide title="Don't you 也可以是溫柔但強烈的要求" mark="Don't you">
      <NoteMark
        sentence="Grandma waved from the hospital bed. Don't you worry about me. I'll be fine."
        :marks="['Don\'t you worry']"
      />
      <p class="translation">奶奶在病床上揮手。你不用擔心我，我會沒事的。</p>
    </NoteSlide>

    <NoteSlide title="you 放在 Don't 後面、dare 前面" mark="Don't you">
      <NoteFix
        wrong="Don't dare you throw that ball at the window!"
        right="Don't you dare throw that ball at the window!"
        fix="Don't you dare"
      />
    </NoteSlide>

    <NoteSlide title="Don't you dare 後面不加 to" mark="dare forget">
      <NoteFix wrong="Don't you dare to leave!" right="Don't you dare leave!" fix="leave" />
    </NoteSlide>

    <NoteSlide title="祈使句用原形動詞" mark="forget">
      <NoteFix
        wrong="Don't you ever came home this late again!"
        right="Don't you ever come home this late again!"
        fix="come"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
