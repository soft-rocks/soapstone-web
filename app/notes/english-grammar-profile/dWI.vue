<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-his, as slides, in the order of content.md. One point per slide: the title names it, the
// diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="his 後面不接名詞，就是所有格代名詞">
      <NoteWords
        :size="32"
        :parts="[
          { t: 'He was', kind: 'dim' },
          { t: 'my confidant', role: 'my + 名詞' },
          { t: 'and I was', kind: 'dim' },
          { t: 'his.', role: '= his confidant', kind: 'key' },
        ]"
      />
      <p class="translation">他是我的知己，我也是他的。</p>
    </NoteSlide>

    <NoteSlide title="his 可以當主詞、受詞，也可以放在 be 和介系詞後面" mark="his.">
      <div class="rows is-labeled">
        <div>
          <span class="term">主詞</span>
          <span
            ><NoteMark
              sentence="Mine was a quiet childhood, but his was very difficult."
              :marks="['his was']"
            /><span class="translation">我的童年很平靜，可是他的很辛苦。</span></span
          >
        </div>
        <div>
          <span class="term">受詞</span>
          <span
            ><NoteMark sentence="My bike is broken, so I'm using his." :marks="['his.']" /><span
              class="translation"
              >我的腳踏車壞了，所以我在用他的。</span
            ></span
          >
        </div>
        <div><span class="term">be 後面</span><span>The black jacket is his.</span></div>
        <div><span class="term">介系詞後面</span><span>My office is next to his.</span></div>
      </div>
    </NoteSlide>

    <NoteSlide title="his 常和 mine、hers 放在同一句對照" mark="his.">
      <div class="rows is-labeled">
        <div>
          <span class="term">對照</span>
          <span
            ><NoteMark
              sentence="She kept her promise, and he kept his."
              :marks="['her promise,', 'his.']"
            /><span class="translation">她遵守了她的承諾，他也遵守了他的。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="his 當所有格代名詞時不再加 's" mark="his.">
      <NoteFix wrong="Those shoes are his's." right="Those shoes are his." fix="his." />
    </NoteSlide>

    <NoteSlide title="he's 是 he is，所有格代名詞是 his" mark="his.">
      <NoteFix wrong="The red pen is he's." right="The red pen is his." fix="his." />
    </NoteSlide>

    <NoteSlide title="比較的是手機，用 his，不用 him" mark="his.">
      <NoteFix wrong="My phone is newer than him." right="My phone is newer than his." fix="his." />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
