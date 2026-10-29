<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-willingness-in-the-past, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + wouldn't + 原形動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'We had to leave without you because', kind: 'dim' },
          { t: 'the bus driver', role: '主詞' },
          { t: 'wouldn\'t', kind: 'key', ring: true },
          { t: 'wait.', role: '原形動詞' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="wouldn't、would not allow / let、原形動詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">wouldn't</span>
          <span>過去不肯、不願意。</span>
        </div>
        <div>
          <span class="term">would not allow / let</span>
          <span>過去不准。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>不肯做的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="人不願意" mark="wouldn't">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="My parents would not allow me to buy it." :marks="[]" /><span
              class="translation"
              >我爸媽不准我買。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">wouldn't 說人過去不願意做某件事。</p>
    </NoteSlide>
    <NoteSlide title="東西不肯動" mark="wouldn't">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="The door wouldn't open." :marks="['wouldn\'t']" /><span
              class="translation"
              >門打不開。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">wouldn't 也可以說東西過去不能用，好像它們不肯動。</p>
    </NoteSlide>
    <NoteSlide title="would 的否定是 wouldn't" mark="wouldn't">
      <NoteFix
        wrong="The driver didn't would wait."
        right="The driver wouldn't wait."
        :fix="['wouldn\'t']"
      />
    </NoteSlide>
    <NoteSlide title="allow 加人後面要接 to 和原形動詞" mark="to">
      <NoteFix
        wrong="They wouldn't allow me go."
        right="They wouldn't allow me to go."
        :fix="['to']"
      />
    </NoteSlide>
    <NoteSlide title="let 加人後面直接接原形動詞">
      <NoteFix
        wrong="My mum wouldn't let me to stay out."
        right="My mum wouldn't let me stay out."
        :fix="['stay']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
