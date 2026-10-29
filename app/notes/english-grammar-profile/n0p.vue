<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// determiners-form-this-with-uncountable-nouns, as slides, in the order of content.md. One
// point per slide: the title names it, the diagram shows it, and `mark` circles the matching
// words of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="this + 不可數名詞 + 單數動詞" mark="this food is">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'My mother told me that', role: '主詞 + 動詞 + that', kind: 'dim' },
          { t: 'this', role: '這種', kind: 'key' },
          { t: 'food', role: '不可數名詞' },
          { t: 'is', role: '單數動詞', kind: 'key' },
          { t: 'healthy and good for me.', role: '補語', kind: 'dim' },
        ]"
      />
      <p class="translation">我媽媽跟我說，這種食物很健康，對我很好。</p>
    </NoteSlide>

    <NoteSlide title="常和 this 一起用的不可數名詞" mark="this food">
      <div class="rows is-labeled">
        <div>
          <span class="term">吃的和喝的</span>
          <span>this food、this bread、this water</span>
        </div>
        <div>
          <span class="term">東西的材料</span>
          <span>this paper、this wood、this cotton</span>
        </div>
        <div>
          <span class="term">消息和資料</span>
          <span>this information、this news、this advice</span>
        </div>
        <div>
          <span class="term">其他</span>
          <span>this music、this weather、this furniture</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="不可數名詞用 this，不用 these" mark="this">
      <div class="rows is-labeled">
        <div>
          <span class="term">this</span>
          <span>this furniture、this advice</span>
        </div>
        <div>
          <span class="term">these</span>
          <span>these chairs、these tips</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="information 前面用 this" mark="this">
      <NoteFix
        wrong="These information is very useful."
        right="This information is very useful."
        fix="This information"
      />
    </NoteSlide>

    <NoteSlide title="不可數名詞不加 -s" mark="food">
      <NoteFix
        wrong="I bought this furnitures last year."
        right="I bought this furniture last year."
        fix="furniture"
      />
    </NoteSlide>

    <NoteSlide title="動詞用單數" mark="is">
      <NoteFix wrong="This music are too loud." right="This music is too loud." fix="is" />
    </NoteSlide>

    <NoteSlide title="this 和 a 不一起用" mark="this food">
      <NoteFix
        wrong="This a bread is very soft."
        right="This bread is very soft."
        fix="This bread"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
