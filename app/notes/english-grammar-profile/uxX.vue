<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// passives-form-present-simple-affirmative-710, as slides, in the order of content.md. One
// point per slide: the title names it, the diagram shows it, and `mark` circles the matching
// words of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞加 am、is 或 are，再接過去分詞">
      <NoteWords
        :size="32"
        :parts="[
          { t: 'Our office', role: '主詞' },
          { t: 'is', role: 'am / is / are', kind: 'key' },
          { t: 'situated', role: '過去分詞', kind: 'key' },
          { t: 'near the airport.', role: '地點', kind: 'dim' },
        ]"
      />
      <p class="translation">我們的辦公室在機場附近。</p>
    </NoteSlide>

    <NoteSlide title="I 用 am，單數用 is，複數用 are" mark="is">
      <div class="rows is-labeled">
        <div>
          <span class="term">am</span>
          <span
            ><NoteMark sentence="I'm paid every Friday." :marks="['I\'m']" /><span
              class="translation"
              >我每個星期五領薪水。</span
            ></span
          >
        </div>
        <div>
          <span class="term">is</span>
          <span
            ><NoteMark sentence="Our office is situated near the airport." :marks="['is']" /><span
              class="translation"
              >我們的辦公室在機場附近。</span
            ></span
          >
        </div>
        <div>
          <span class="term">are</span>
          <span
            ><NoteMark sentence="The walls are painted dark blue." :marks="['are']" /><span
              class="translation"
              >牆壁漆成深藍色。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="說一直都是這樣的事，和常常發生的事" mark="is situated">
      <div class="rows is-labeled">
        <div>
          <span class="term">一直都是這樣</span>
          <span
            ><NoteMark sentence="The hotel is situated by the sea." :marks="['is situated']" /><span
              class="translation"
              >這間旅館在海邊。</span
            ></span
          >
        </div>
        <div>
          <span class="term">常常發生</span>
          <span
            ><NoteMark
              sentence="The bins are emptied every Tuesday."
              :marks="['are emptied']"
            /><span class="translation">垃圾桶每個星期二清空。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="複數主詞用 are" mark="is">
      <NoteFix
        wrong="The walls is painted dark blue."
        right="The walls are painted dark blue."
        fix="are"
      />
    </NoteSlide>

    <NoteSlide title="被動要有 be" mark="is">
      <NoteFix
        wrong="Our office situated near the airport."
        right="Our office is situated near the airport."
        fix="is"
      />
    </NoteSlide>

    <NoteSlide title="語言是被說的，用被動" mark="is situated">
      <NoteFix
        wrong="Spanish speaks in many countries."
        right="Spanish is spoken in many countries."
        fix="is spoken"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
