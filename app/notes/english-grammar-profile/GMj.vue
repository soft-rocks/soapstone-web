<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// determiners-form-use-the-other, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="the other + 單數名詞" mark="the other side">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'She saw his blue jacket in a shop on', role: '主詞 + 動詞 + 受詞 + 地點', kind: 'dim' },
          { t: 'the other', role: '另一個', kind: 'key' },
          { t: 'side', role: '單數名詞' },
          { t: 'of the street.', role: '介系詞片語', kind: 'dim' },
        ]"
      />
      <p class="translation">她在對街的一家店裡看到了他那件藍色夾克。</p>
    </NoteSlide>

    <NoteSlide title="the other + 複數名詞">
      <NoteMark
        sentence="In the first lesson I met all the other people in the class."
        :marks="['the other people']"
      />
      <p class="translation">第一堂課我認識了班上其他所有的人。</p>
    </NoteSlide>

    <NoteSlide title="another、other、the other" mark="the other">
      <div class="rows is-labeled">
        <div>
          <span class="term">another</span>
          <span>再一個或別的一個，不特定：another biscuit</span>
        </div>
        <div>
          <span class="term">other</span>
          <span>別的一些，不是全部：other people</span>
        </div>
        <div>
          <span class="term">the other</span>
          <span>雙方知道的，剩下的全部：the other sister</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="常見的說法" mark="the other side">
      <div class="rows is-labeled">
        <div>
          <span class="term">the other side</span>
          <span>另一邊、對面</span>
        </div>
        <div>
          <span class="term">on the other hand</span>
          <span>另一方面</span>
        </div>
        <div>
          <span class="term">the other day</span>
          <span>前幾天</span>
        </div>
        <div>
          <span class="term">the other way round</span>
          <span>反過來</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="兩個裡面剩下的用 the other">
      <NoteFix
        wrong="I lost one of my gloves, and I can't find another one."
        right="I lost one of my gloves, and I can't find the other one."
        fix="the other"
      />
    </NoteSlide>

    <NoteSlide title="名詞前面的 other 不加 s">
      <NoteFix
        wrong="The others students are in the hall."
        right="The other students are in the hall."
        fix="The other"
      />
    </NoteSlide>

    <NoteSlide title="剩下的全部要加 the">
      <NoteFix
        wrong="Tom is here. Other children are still at school."
        right="Tom is here. The other children are still at school."
        fix="The other"
      />
    </NoteSlide>

    <NoteSlide title="改天說 another day">
      <NoteFix
        wrong="I'm busy now. Let's meet the other day."
        right="I'm busy now. Let's meet another day."
        fix="another day."
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
