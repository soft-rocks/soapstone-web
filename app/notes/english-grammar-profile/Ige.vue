<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// determiners-form-with-plural-and-uncountable-nouns, as slides, in the order of content.md.
// One point per slide: the title names it, the diagram shows it, and `mark` circles the
// matching words of the note's sentence. Keep the parts of one sentence on one line: Vue drops
// the whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="some 加不可數名詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'we', role: '主詞' },
          { t: 'should bring', role: '動詞' },
          { t: 'some', role: '數量限定詞', kind: 'key' },
          { t: 'water', role: '不可數名詞', kind: 'key' },
          { t: 'to drink.', role: '目的', kind: 'dim' },
        ]"
      />
      <p class="translation">我們應該帶點水來喝。</p>
    </NoteSlide>

    <NoteSlide title="some、any、no" mark="some water">
      <div class="rows is-labeled">
        <div>
          <span class="term">some</span>
          <span
            ><NoteMark sentence="I think we should bring some water." :marks="['some']" /><span
              class="translation"
              >我覺得我們應該帶點水。</span
            ></span
          >
        </div>
        <div>
          <span class="term">any</span>
          <span
            ><NoteMark sentence="I don't have any clothes for the summer." :marks="['any']" /><span
              class="translation"
              >我沒有夏天穿的衣服。</span
            ></span
          >
        </div>
        <div>
          <span class="term">no</span>
          <span
            ><NoteMark sentence="There were no clouds." :marks="['no']" /><span class="translation"
              >天上一朵雲也沒有。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="more 和 lots of" mark="some">
      <div class="rows is-labeled">
        <div>
          <span class="term">more</span>
          <span
            ><NoteMark
              sentence="If you want more details, call this number."
              :marks="['more']"
            /><span class="translation">想知道更多細節，請打這個號碼。</span></span
          >
        </div>
        <div>
          <span class="term">lots of</span>
          <span
            ><NoteMark sentence="We had lots of fun." :marks="['lots of']" /><span
              class="translation"
              >我們玩得很開心。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="no 不再加 not" mark="some">
      <NoteFix wrong="There weren't no clouds." right="There were no clouds." fix="were no" />
    </NoteSlide>

    <NoteSlide title="不可數名詞不加 -s" mark="water">
      <NoteFix
        wrong="We need some informations about the trip."
        right="We need some information about the trip."
        fix="information"
      />
    </NoteSlide>

    <NoteSlide title="lots 後面要加 of" mark="some">
      <NoteFix
        wrong="We had lots fun at the party."
        right="We had lots of fun at the party."
        fix="lots of"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
