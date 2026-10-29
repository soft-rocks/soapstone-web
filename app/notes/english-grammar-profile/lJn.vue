<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// nouns-form-noun-prepositional-phrases, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words
// of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="介系詞片語放在名詞後面，修飾它前面的名詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'It was', kind: 'dim' },
          { t: 'a beautiful red dress', role: '主要名詞' },
          { t: 'with blue flowers', role: '修飾 dress', kind: 'key' },
          { t: 'on the back.', role: '修飾 flowers', kind: 'key' },
        ]"
      />
      <p class="translation">那是一件很漂亮的紅色洋裝，背面有藍色的花。</p>
    </NoteSlide>

    <NoteSlide title="不同的介系詞說明特徵、主題、位置或來源" mark="with">
      <div class="rows is-labeled">
        <div>
          <span class="term">with<br /><i>特徵</i></span>
          <span>a girl with long hair</span>
        </div>
        <div>
          <span class="term">about<br /><i>主題</i></span>
          <span>a film about Bavarian pupils</span>
        </div>
        <div>
          <span class="term">on<br /><i>位置</i></span>
          <span>the shop on the corner</span>
        </div>
        <div>
          <span class="term">from<br /><i>來源</i></span>
          <span>a letter from my aunt</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="動詞跟著主要名詞，不跟著介系詞片語裡的名詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'The box', role: '主要名詞', kind: 'key' },
          { t: 'of old photos', role: '介系詞片語', kind: 'dim' },
          { t: 'is', role: '單數動詞', kind: 'key' },
          { t: 'in the attic.', kind: 'dim' },
        ]"
      />
      <p class="translation">那箱老照片在閣樓。</p>
    </NoteSlide>

    <NoteSlide title="介系詞片語不放在名詞前面" mark="with blue flowers">
      <NoteFix
        wrong="I met a with long hair girl."
        right="I met a girl with long hair."
        fix="with long hair"
      />
    </NoteSlide>

    <NoteSlide title="主要名詞是 key，動詞用單數">
      <NoteFix
        wrong="The key to the doors are on the table."
        right="The key to the doors is on the table."
        fix="is"
      />
    </NoteSlide>

    <NoteSlide title="說明東西有什麼特徵，用 with" mark="with">
      <NoteFix
        wrong="I want a room of a sea view."
        right="I want a room with a sea view."
        fix="with"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
