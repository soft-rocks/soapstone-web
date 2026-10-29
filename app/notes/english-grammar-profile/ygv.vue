<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// questions-form-negative-questions-auxiliary-verbs, as slides, in the order of content.md. One
// point per slide: the title names it, the diagram shows it, and `mark` circles the matching
// words of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="Don't 放在句首，表示驚訝">
      <NoteWords
        :size="36"
        :parts="[
          { t: 'Don\'t', role: 'do + n\'t', kind: 'key' },
          { t: 'you', role: '主詞' },
          { t: 'know', role: '原形動詞' },
          { t: 'me?', role: '受詞', kind: 'dim' },
        ]"
      />
      <p class="translation">你不認得我了嗎？</p>
    </NoteSlide>

    <NoteSlide title="過去用 Didn't，完成式用 Haven't 加過去分詞" mark="Don't">
      <div class="rows is-labeled">
        <div>
          <span class="term">Didn't</span>
          <span
            ><NoteMark sentence="Didn't she say she was coming?" :marks="['Didn\'t', 'say']" /><span
              class="translation"
              >她不是說她會來嗎？</span
            ></span
          >
        </div>
        <div>
          <span class="term">Haven't</span>
          <span
            ><NoteMark sentence="Haven't you seen it yet?" :marks="['Haven\'t', 'seen']" /><span
              class="translation"
              >你還沒看過嗎？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="Don't you think 表示覺得對方應該同意" mark="Don't you">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Don\'t you think', role: '請對方同意', kind: 'key' },
          { t: 'she would be happy?', role: '子句' },
        ]"
      />
      <p class="translation">你不覺得她會很開心嗎？</p>
    </NoteSlide>

    <NoteSlide title="Haven't you got 驚訝對方沒有某樣東西" mark="Don't">
      <NoteWords
        :size="32"
        :parts="[
          { t: 'Haven\'t you got', role: '你沒有……嗎', kind: 'key' },
          { t: 'a coat?', role: '受詞' },
        ]"
      />
      <p class="translation">你沒有外套嗎？</p>
    </NoteSlide>

    <NoteSlide title="Didn't 後面用原形動詞" mark="know">
      <NoteFix wrong="Didn't you went to the party?" right="Didn't you go to the party?" fix="go" />
    </NoteSlide>

    <NoteSlide title="主詞是 she 時用 Doesn't" mark="Don't">
      <NoteFix wrong="Don't she work here?" right="Doesn't she work here?" fix="Doesn't" />
    </NoteSlide>

    <NoteSlide title="Haven't 後面接過去分詞" mark="know">
      <NoteFix wrong="Haven't you see it yet?" right="Haven't you seen it yet?" fix="seen" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
