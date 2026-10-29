<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adjectives-form-ending-in-e-r, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="字尾是 -e，只加 -r" mark="safer">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Ice cream is', kind: 'dim' },
          { t: 'nicer', role: 'nice + -r', kind: 'key', ring: true },
          { t: 'in summer.', kind: 'dim' },
        ]"
      />
      <p class="translation">冰淇淋夏天吃比較好吃。</p>
    </NoteSlide>

    <NoteSlide title="常見的加 -r 的形容詞" mark="safer">
      <div class="rows is-labeled">
        <div>
          <span class="term">large → larger</span>
          <span
            ><NoteMark sentence="This room is larger than mine." :marks="['larger']" /><span
              class="translation"
              >這個房間比我的大。</span
            ></span
          >
        </div>
        <div>
          <span class="term">late → later</span>
          <span
            ><NoteMark sentence="The bus was later than usual." :marks="['later']" /><span
              class="translation"
              >公車比平常晚。</span
            ></span
          >
        </div>
        <div>
          <span class="term">close → closer</span>
          <span
            ><NoteMark
              sentence="The station is closer than the bus stop."
              :marks="['closer']"
            /><span class="translation">車站比公車站近。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="safe 只加 -r" mark="safer">
      <NoteFix
        wrong="Planes are safeer than cars."
        right="Planes are safer than cars."
        fix="safer"
      />
    </NoteSlide>

    <NoteSlide title="保留字尾的 e" mark="safer">
      <NoteFix
        wrong="This room is largr than mine."
        right="This room is larger than mine."
        fix="larger"
      />
    </NoteSlide>

    <NoteSlide title="nicer 前面不加 more" mark="safer">
      <NoteFix wrong="The new park is more nicer." right="The new park is nicer." fix="nicer" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
