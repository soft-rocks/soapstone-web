<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-linking-verb-like-or-similar-to, as slides, in the order of content.md. One
// point per slide: the title names it, the diagram shows it, and `mark` circles the matching
// words of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="連綴動詞 + like + 名詞，表示像什麼" mark="smelled like">
      <div class="rows is-labeled">
        <div>
          <span class="term">look like</span>
          <span
            ><NoteMark
              sentence="It's round and silver, with lights all around it. The new library looks like a spaceship."
              :marks="['looks like']"
            /><span class="translation"
              >它是圓的、銀色的，四周都是燈。新的圖書館看起來像太空船。</span
            ></span
          >
        </div>
        <div>
          <span class="term">taste like</span>
          <span
            ><NoteMark
              sentence="I didn't put any sugar in it, but this tea tastes like honey."
              :marks="['tastes like']"
            /><span class="translation">我沒加糖，可是這茶喝起來像蜂蜜。</span></span
          >
        </div>
        <div>
          <span class="term">feel like</span>
          <span
            ><NoteMark
              sentence="I slept for ten hours on our first night. The hotel bed felt like a cloud."
              :marks="['felt like']"
            /><span class="translation"
              >我們第一晚我睡了十個小時。飯店的床躺起來像雲一樣。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="be similar to 是差不多，不是一模一樣" mark="like roses">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Your story', role: '主詞' },
          { t: 'is', role: 'be', kind: 'dim' },
          { t: 'similar to', role: 'similar to', kind: 'key', ring: true },
          { t: 'my dream.', role: '名詞', kind: 'key' },
        ]"
      />
      <p class="translation">你的故事跟我的夢很像。</p>
    </NoteSlide>

    <NoteSlide title="連綴動詞後面接名詞時要加 like" mark="like">
      <NoteFix wrong="This tastes chicken." right="This tastes like chicken." fix="like chicken" />
    </NoteSlide>

    <NoteSlide title="similar 後面接 to" mark="like">
      <NoteFix wrong="Her bag is similar with mine." right="Her bag is similar to mine." fix="to" />
    </NoteSlide>

    <NoteSlide title="similar 是形容詞，前面要有 be" mark="smelled">
      <NoteFix
        wrong="The weather similar to Spain."
        right="The weather is similar to Spain's."
        fix="is similar"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
