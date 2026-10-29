<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// determiners-form-its, as slides, in the order of content.md. One point per slide: the title
// names it, the diagram shows it, and `mark` circles the matching words of the note's sentence.
// Keep the parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="its 加名詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'They\'ve chosen my school', role: '主詞、動詞、受詞', kind: 'dim' },
          { t: 'because of', role: '原因' },
          { t: 'its', role: 'its', kind: 'key' },
          { t: 'size.', role: '名詞', kind: 'key' },
        ]"
      />
      <p class="translation">他們選了我們學校，是因為學校的規模。</p>
    </NoteSlide>

    <NoteSlide title="its 和 it's" mark="its">
      <div class="rows is-labeled">
        <div>
          <span class="term">its</span>
          <span
            ><NoteMark sentence="The dog wagged its tail." :marks="['its']" /><span
              class="translation"
              >那隻狗搖著尾巴。</span
            ></span
          >
        </div>
        <div>
          <span class="term">it's</span>
          <span
            ><NoteMark sentence="It's a big dog." :marks="['It\'s']" /><span class="translation"
              >那是一隻大狗。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="with its 描述特點" mark="its size">
      <div class="rows is-labeled">
        <div>
          <span class="term">地方</span>
          <span
            ><NoteMark
              sentence="Verona is a great city, with its old buildings and churches."
              :marks="['with its']"
            /><span class="translation"
              >維洛那是一座很棒的城市，有很多古老的建築和教堂。</span
            ></span
          >
        </div>
        <div>
          <span class="term">東西</span>
          <span
            ><NoteMark
              sentence="It was the biggest TV in the market, with its huge black screen."
              :marks="['with its']"
            /><span class="translation">那是市場裡最大的電視，有一個巨大的黑色螢幕。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="所有格沒有撇號" mark="its">
      <NoteFix
        wrong="The company changed it's name last year."
        right="The company changed its name last year."
        fix="its"
      />
    </NoteSlide>

    <NoteSlide title="東西用 its" mark="its">
      <NoteFix
        wrong="The table has a scratch on his leg."
        right="The table has a scratch on its leg."
        fix="its"
      />
    </NoteSlide>

    <NoteSlide title="名詞前面用 its" mark="its">
      <NoteFix
        wrong="The bird is feeding it babies."
        right="The bird is feeding its babies."
        fix="its"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
