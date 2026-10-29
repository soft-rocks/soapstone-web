<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// questions-form-auxiliary-have, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="現在完成式的疑問句把 have 放在主詞前面">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I left my mobile phone at your house.', role: '前一句', kind: 'dim' },
          { t: 'Have', role: 'have', kind: 'key' },
          { t: 'you', role: '主詞' },
          { t: 'seen', role: '過去分詞', kind: 'key' },
          { t: 'it?', role: '受詞' },
        ]"
      />
      <p class="translation">我把手機忘在你家了。你有看到嗎？</p>
    </NoteSlide>

    <NoteSlide title="ever 問經驗，yet 問已經做了沒" mark="Have">
      <div class="rows is-labeled">
        <div>
          <span class="term">ever</span>
          <span
            ><NoteMark sentence="Have you ever been to Japan?" :marks="['ever']" /><span
              class="translation"
              >你去過日本嗎？</span
            ></span
          >
        </div>
        <div>
          <span class="term">yet</span>
          <span
            ><NoteMark sentence="Has the post arrived yet?" :marks="['yet']" /><span
              class="translation"
              >郵件到了沒？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="Have you got 問有沒有，不是現在完成式" mark="Have">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'Have you got', role: '= Do you have', kind: 'key' },
          { t: 'a pen?', role: '受詞' },
        ]"
      />
      <p class="translation">你有筆嗎？</p>
    </NoteSlide>

    <NoteSlide title="have 後面接過去分詞" mark="seen">
      <NoteFix wrong="Have you saw my keys?" right="Have you seen my keys?" fix="seen" />
    </NoteSlide>

    <NoteSlide title="現在完成式的疑問句不加 do" mark="Have">
      <NoteFix wrong="Do you have finished?" right="Have you finished?" fix="Have" />
    </NoteSlide>

    <NoteSlide title="主詞是 she 時用 Has" mark="Have">
      <NoteFix wrong="Have she called you?" right="Has she called you?" fix="Has" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
