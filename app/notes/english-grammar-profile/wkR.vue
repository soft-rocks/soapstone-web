<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-object-it, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="it 當受詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I bought a new bag,', role: '前面提過的東西', kind: 'dim' },
          { t: 'and I', role: '主詞' },
          { t: 'love', role: '動詞' },
          { t: 'it.', role: '受詞', kind: 'key' },
        ]"
      />
      <p class="translation">我買了一個新包包，我好愛它。</p>
    </NoteSlide>

    <NoteSlide title="it 可以指的東西" mark="it">
      <div class="rows is-labeled">
        <div>
          <span class="term">東西</span>
          <span
            ><NoteMark sentence="I bought a new bag, and I love it." :marks="['it']" /><span
              class="translation"
              >我買了一個新包包，我好愛它。</span
            ></span
          >
        </div>
        <div>
          <span class="term">科目</span>
          <span
            ><NoteMark sentence="Maths is boring, and I don't like it." :marks="['it']" /><span
              class="translation"
              >數學很無聊，我不喜歡。</span
            ></span
          >
        </div>
        <div>
          <span class="term">一件事</span>
          <span
            ><NoteMark sentence="The film was sad, but I enjoyed it." :marks="['it']" /><span
              class="translation"
              >那部電影很悲傷，可是我很喜歡。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="一個用 it，兩個以上用 them" mark="it">
      <div class="rows is-labeled">
        <div>
          <span class="term">it</span>
          <span
            ><NoteMark sentence="I've lost my key. I can't find it." :marks="['it']" /><span
              class="translation"
              >我的鑰匙不見了。我找不到。</span
            ></span
          >
        </div>
        <div>
          <span class="term">them</span>
          <span
            ><NoteMark sentence="I've lost my keys. I can't find them." :marks="['them']" /><span
              class="translation"
              >我的鑰匙都不見了。我找不到。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="love 後面要有受詞" mark="it">
      <NoteFix
        wrong="I bought a new bag, and I love."
        right="I bought a new bag, and I love it."
        fix="love it"
      />
    </NoteSlide>

    <NoteSlide title="複數用 them" mark="it">
      <NoteFix
        wrong="I bought new shoes, and I love it."
        right="I bought new shoes, and I love them."
        fix="them"
      />
    </NoteSlide>

    <NoteSlide title="it 放在動詞後面" mark="love it">
      <NoteFix wrong="I it like very much." right="I like it very much." fix="like it" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
