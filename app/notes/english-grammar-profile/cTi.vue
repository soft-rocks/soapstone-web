<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// nouns-form-uncountable-nouns-694, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="accommodation 是不可數名詞，前面可以直接放形容詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I hope you can help me find', kind: 'dim' },
          { t: 'new', role: '形容詞' },
          { t: 'accommodation', role: '不可數名詞', kind: 'key' },
          { t: 'as soon as possible.', kind: 'dim' },
        ]"
      />
      <p class="translation">希望你能幫我盡快找到新的住處。</p>
    </NoteSlide>

    <NoteSlide title="地方、生活和抽象的東西常用不可數名詞" mark="accommodation">
      <div class="rows is-labeled">
        <div>
          <span class="term">地方和環境</span>
          <span>accommodation, countryside, scenery</span>
        </div>
        <div>
          <span class="term">生活和工作</span>
          <span>fashion, equipment, research, progress</span>
        </div>
        <div>
          <span class="term">抽象的東西</span>
          <span>advice, behaviour, education, health</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="中文可以數的東西，英文用單位詞來數" mark="accommodation">
      <div class="rows is-labeled">
        <div>
          <span class="term">advice</span>
          <span><NoteMark sentence="a piece of advice" :marks="['a piece of']" /></span>
        </div>
        <div>
          <span class="term">equipment</span>
          <span><NoteMark sentence="a piece of equipment" :marks="['a piece of']" /></span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="accommodation 不加 a" mark="accommodation">
      <NoteFix
        wrong="We're looking for an accommodation near the university."
        right="We're looking for accommodation near the university."
        fix="accommodation"
      />
    </NoteSlide>

    <NoteSlide title="equipment 沒有複數形">
      <NoteFix
        wrong="The gym has a lot of new equipments."
        right="The gym has a lot of new equipment."
        fix="equipment"
      />
    </NoteSlide>

    <NoteSlide title="不可數名詞不用 many">
      <NoteFix
        wrong="We made many progress this year."
        right="We made a lot of progress this year."
        fix="a lot of"
      />
    </NoteSlide>

    <NoteSlide title="不可數名詞當主詞，動詞用單數">
      <NoteFix
        wrong="The scenery here are beautiful."
        right="The scenery here is beautiful."
        fix="is"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
