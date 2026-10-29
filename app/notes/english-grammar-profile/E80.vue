<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-subject-and-object-pronouns-both-a, as slides, in the order of content.md. One
// point per slide: the title names it, the diagram shows it, and `mark` circles the matching words
// of the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="Both 當主詞" mark="Both are">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Both', role: '兩部都', kind: 'key' },
          { t: 'are', role: '複數動詞' },
          { t: 'very good films.', kind: 'dim' },
        ]"
      />
      <p class="translation">這兩部電影都很好看。</p>
    </NoteSlide>

    <NoteSlide title="both、a few 和 another" mark="Both">
      <div class="rows is-labeled">
        <div>
          <span class="term">both</span>
          <span
            ><NoteMark sentence="Both look nice." :marks="['Both']" /><span class="translation"
              >兩件都好看。</span
            ></span
          >
        </div>
        <div>
          <span class="term">a few</span>
          <span
            ><NoteMark sentence="Only a few are interesting." :marks="['a few']" /><span
              class="translation"
              >有趣的只有幾個。</span
            ></span
          >
        </div>
        <div>
          <span class="term">another</span>
          <span
            ><NoteMark
              sentence="This cup is dirty. Can I have another?"
              :marks="['another?']"
            /><span class="translation">這個杯子髒了，可以再給我一個嗎？</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="當主詞和當受詞" mark="Both">
      <div class="rows is-labeled">
        <div>
          <span class="term">當主詞</span>
          <span
            ><NoteMark
              sentence="I have two brothers. Both live in London."
              :marks="['Both live']"
            /><span class="translation">我有兩個哥哥，兩個都住在倫敦。</span></span
          >
        </div>
        <div>
          <span class="term">當受詞</span>
          <span
            ><NoteMark sentence="I think you'll enjoy both." :marks="['enjoy both.']" /><span
              class="translation"
              >我想兩個你都會喜歡。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="both 後面用複數動詞" mark="are">
      <NoteFix
        wrong="I bought two plants, and both is growing well."
        right="I bought two plants, and both are growing well."
        fix="are"
      />
    </NoteSlide>

    <NoteSlide title="三個以上用 all" mark="Both">
      <NoteFix
        wrong="I have three sisters, and both are teachers."
        right="I have three sisters, and all are teachers."
        fix="all"
      />
    </NoteSlide>

    <NoteSlide title="another 後面不加 ones">
      <NoteFix
        wrong="These biscuits are nice. Can I have another ones?"
        right="These biscuits are nice. Can I have another?"
        fix="another?"
      />
    </NoteSlide>

    <NoteSlide title="幾個用 a few">
      <NoteFix
        wrong="I don't need many stamps. Few will do."
        right="I don't need many stamps. A few will do."
        fix="A few"
      />
    </NoteSlide>

    <NoteSlide title="兩個裡的另一個：the other">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'One is red, and', kind: 'dim' },
          { t: 'the other', role: '另一輛', kind: 'key' },
          { t: 'is black.', kind: 'dim' },
        ]"
      />
      <p class="translation">一輛是紅的，另一輛是黑的。</p>
    </NoteSlide>

    <NoteSlide title="both of + 受格代名詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Both of', kind: 'key' },
          { t: 'them', role: '受格代名詞' },
          { t: 'are very good films.', kind: 'dim' },
        ]"
      />
      <p class="translation">兩部都是很好看的電影。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
