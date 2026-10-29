<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// determiners-form-either-neither-with-singular-nouns, as slides, in the order of content.md.
// One point per slide: the title names it, the diagram shows it, and `mark` circles the
// matching words of the note's sentence. Keep the parts of one sentence on one line: Vue drops
// the whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="either 直接加單數名詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'can be accessed easily', role: '動詞', kind: 'dim' },
          { t: 'from', role: '介系詞', kind: 'dim' },
          { t: 'either', role: 'either', kind: 'key' },
          { t: 'floor.', role: '單數名詞', kind: 'key' },
        ]"
      />
      <p class="translation">不管從哪一層樓都能輕鬆到達</p>
    </NoteSlide>

    <NoteSlide title="either 是任何一個或兩邊都" mark="either floor">
      <div class="rows is-labeled">
        <div>
          <span class="term">任何一個</span>
          <span
            ><NoteMark sentence="You can sit at either table." :marks="['either table']" /><span
              class="translation"
              >兩張桌子你坐哪一張都可以。</span
            ></span
          >
        </div>
        <div>
          <span class="term">兩邊都</span>
          <span
            ><NoteMark
              sentence="There are trees on either side of the road."
              :marks="['either side']"
            /><span class="translation">路的兩邊都有樹。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="neither 加單數名詞：兩個都不" mark="either">
      <div class="rows is-labeled">
        <div>
          <span class="term">neither answer</span>
          <span
            ><NoteMark sentence="Neither answer is correct." :marks="['Neither answer']" /><span
              class="translation"
              >兩個答案都不對。</span
            ></span
          >
        </div>
        <div>
          <span class="term">neither party</span>
          <span
            ><NoteMark
              sentence="Neither party could predict the rise in prices."
              :marks="['Neither party']"
            /><span class="translation">雙方都沒辦法預料價格上漲。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="名詞用單數" mark="floor">
      <NoteFix wrong="You can use either floors." right="You can use either floor." fix="floor" />
    </NoteSlide>

    <NoteSlide title="either 後面不加 the" mark="either floor">
      <NoteFix
        wrong="You can sit at either the table."
        right="You can sit at either table."
        fix="either table"
      />
    </NoteSlide>

    <NoteSlide title="neither 不再加 not" mark="either">
      <NoteFix wrong="Neither answer isn't correct." right="Neither answer is correct." fix="is" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
