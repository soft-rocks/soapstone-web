<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-affirmative, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="祈使句用原形動詞開頭，不寫主詞" mark="Come">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'you', kind: 'gone' },
          { t: 'Bring', role: '原形動詞', kind: 'key', ring: true },
          { t: 'a towel', role: '受詞' },
          { t: 'for the beach.', role: '其他', kind: 'dim' },
        ]"
      />
      <p class="translation">帶一條毛巾去海邊。</p>
    </NoteSlide>

    <NoteSlide title="加上 please，語氣比較客氣" mark="Come">
      <div class="rows is-labeled">
        <div>
          <span class="term">please 放在句首</span>
          <span
            ><NoteMark
              sentence="Please take a seat. The doctor will see you soon."
              :marks="['Please']"
            /><span class="translation">請坐，醫生很快就會幫你看診。</span></span
          >
        </div>
        <div>
          <span class="term">please 放在句尾</span>
          <span
            ><NoteMark
              sentence="Shut the gate behind you, please. The dog might run out."
              :marks="['please']"
            /><span class="translation">請隨手關上大門，狗可能會跑出去。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="祈使句用原形動詞，不加 -ing" mark="Come">
      <NoteFix
        wrong="Calling the doctor before nine."
        right="Call the doctor before nine."
        fix="Call"
      />
    </NoteSlide>

    <NoteSlide title="祈使句不寫主詞，動詞用原形" mark="Come">
      <NoteFix
        wrong="You comes to the front of the class."
        right="Come to the front of the class."
        fix="Come"
      />
    </NoteSlide>

    <NoteSlide title="祈使句不用 to 開頭" mark="Come">
      <NoteFix wrong="To bring your camera." right="Bring your camera." fix="Bring" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
