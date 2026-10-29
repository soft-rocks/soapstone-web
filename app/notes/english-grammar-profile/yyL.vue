<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// negation-form-determiners-no, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="no 放在名詞前面，動詞用肯定的形式">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'had', role: '肯定的動詞' },
          { t: 'no clothes', role: 'no + 名詞', kind: 'key' },
          { t: 'to wear to John\'s party,', role: 'to + 原形動詞' },
          { t: 'so I went shopping yesterday.', kind: 'dim' },
        ]"
      />
      <p class="translation">我沒有衣服可以穿去 John 的派對，所以我昨天去逛街了。</p>
    </NoteSlide>

    <NoteSlide title="no + 名詞和 not any + 名詞的意思一樣" mark="no clothes">
      <div class="rows is-labeled">
        <div>
          <span class="term">no</span>
          <span
            ><NoteMark sentence="Our street has no trees." :marks="['no']" /><span
              class="translation"
              >我們這條街沒有樹。</span
            ></span
          >
        </div>
        <div>
          <span class="term">not any<br /><i>說話時比較常用</i></span>
          <span
            ><NoteMark
              sentence="Our street doesn't have any trees."
              :marks="['don\'t', 'any']"
            /><span class="translation">我們這條街一棵樹都沒有。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="there is 和 there are 後面常接 no + 名詞" mark="no clothes">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'There\'s', role: 'there is' },
          { t: 'no lift', role: 'no + 名詞', kind: 'key' },
          { t: 'in this building.', kind: 'dim' },
        ]"
      />
      <p class="translation">這棟大樓沒有電梯。</p>
    </NoteSlide>

    <NoteSlide title="no 已經表示否定，動詞不加 not" mark="had">
      <NoteFix
        wrong="We don't have no bread for breakfast."
        right="We have no bread for breakfast."
        fix="have no"
      >
        動詞加 <code>not</code> 時，名詞前面用 <code>any</code>。
      </NoteFix>
    </NoteSlide>

    <NoteSlide title="名詞前面用 no，不用 not" mark="no">
      <NoteFix
        wrong="There is not cinema in our town."
        right="There is no cinema in our town."
        fix="no"
      />
    </NoteSlide>

    <NoteSlide title="no 後面的名詞不加 a" mark="no clothes">
      <NoteFix wrong="We have no a garden." right="We have no garden." fix="no garden" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
