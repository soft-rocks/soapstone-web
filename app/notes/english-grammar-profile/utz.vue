<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adjectives-form-combining-two-adjectives-with-and, as slides, in the order of content.md.
// One point per slide: the title names it, the diagram shows it, and `mark` circles the
// matching words of the note's sentence. Keep the parts of one sentence on one line: Vue drops
// the whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="and 放在兩個形容詞中間" mark="nice and friendly">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'The teachers', role: '主詞', kind: 'dim' },
          { t: 'are', role: 'be' },
          { t: 'very', role: '副詞', kind: 'dim' },
          { t: 'nice', role: '形容詞', kind: 'key' },
          { t: 'and', role: '連接詞', kind: 'key', ring: true },
          { t: 'friendly.', role: '形容詞', kind: 'key' },
        ]"
      />
      <p class="translation">老師們人都很好，也很友善。</p>
      <p class="remark">兩個形容詞都形容主詞。</p>
    </NoteSlide>

    <NoteSlide title="兩個形容詞也可以放在名詞前面或 look 後面" mark="and">
      <div class="rows is-labeled">
        <div>
          <span class="term">be 後面</span>
          <span
            ><NoteMark sentence="My room is small and quiet." :marks="['small and quiet']" /><span
              class="translation"
              >我的房間又小又安靜。</span
            ></span
          >
        </div>
        <div>
          <span class="term">名詞前面</span>
          <span
            ><NoteMark
              sentence="It was a long and difficult day."
              :marks="['long and difficult']"
            /><span class="translation">那是漫長又辛苦的一天。</span></span
          >
        </div>
        <div>
          <span class="term">look / feel 後面</span>
          <span
            ><NoteMark sentence="You look tired and hungry." :marks="['tired and hungry']" /><span
              class="translation"
              >你看起來又累又餓。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="very 放在第一個形容詞前面" mark="very">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'The beach was', kind: 'dim' },
          { t: 'very', role: '副詞', kind: 'key', ring: true },
          { t: 'clean', role: '形容詞' },
          { t: 'and', role: '連接詞' },
          { t: 'beautiful.', role: '形容詞' },
        ]"
      />
      <p class="translation">那片海灘非常乾淨又漂亮。</p>
    </NoteSlide>

    <NoteSlide title="兩個形容詞中間要加 and" mark="and">
      <NoteFix
        wrong="The hotel was clean cheap."
        right="The hotel was clean and cheap."
        fix="and"
      />
    </NoteSlide>

    <NoteSlide title="and 後面要接形容詞，不接動詞" mark="friendly">
      <NoteFix wrong="The soup is hot and taste." right="The soup is hot and tasty." fix="tasty">
        <code>taste</code> 是動詞，形容詞是 <code>tasty</code>。
      </NoteFix>
    </NoteSlide>

    <NoteSlide title="主詞和形容詞中間要有 be" mark="are">
      <NoteFix
        wrong="The rooms clean and quiet."
        right="The rooms are clean and quiet."
        fix="are"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
