<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-use-premodifier-ones-general-reference, as slides, in the order of content.md. One
// point per slide: the title names it, the diagram shows it, and `mark` circles the matching words
// of the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="修飾語 + ones" mark="small ones">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'Large', role: '修飾語' },
          { t: 'schools', role: '複數名詞', kind: 'key' },
          { t: 'are usually better than', kind: 'dim' },
          { t: 'small', role: '修飾語' },
          { t: 'ones', role: '代替 schools', kind: 'key' },
          { t: '…', kind: 'dim' },
        ]"
      />
      <p class="translation">大型學校通常比小型學校好……</p>
    </NoteSlide>

    <NoteSlide title="泛指不加 the，特指加 the" mark="small ones">
      <div class="rows is-labeled">
        <div>
          <span class="term">泛指</span>
          <span
            ><NoteMark
              sentence="Old houses are often colder than new ones."
              :marks="['new ones.']"
            /><span class="translation">老房子通常比新房子冷。</span></span
          >
        </div>
        <div>
          <span class="term">特指</span>
          <span
            ><NoteMark
              sentence="I've read the new books. Now I'll read the old ones."
              :marks="['the old ones.']"
            /><span class="translation">新的那幾本我讀完了，現在要讀舊的那幾本。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="形容詞、名詞當修飾語" mark="small">
      <div class="rows is-labeled">
        <div>
          <span class="term">形容詞</span>
          <span
            ><NoteMark
              sentence="Cheap shoes don't last as long as expensive ones."
              :marks="['expensive']"
            /><span class="translation">便宜的鞋子沒有貴的耐穿。</span></span
          >
        </div>
        <div>
          <span class="term">名詞</span>
          <span
            ><NoteMark
              sentence="Plastic bags are worse for the planet than paper ones."
              :marks="['paper']"
            /><span class="translation">塑膠袋比紙袋更傷害地球。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="代替複數名詞用 ones" mark="ones">
      <NoteFix
        wrong="Large hospitals are often busier than small one."
        right="Large hospitals are often busier than small ones."
        fix="ones."
      />
    </NoteSlide>

    <NoteSlide title="形容詞不加 s">
      <NoteFix
        wrong="Big cars use more petrol than smalls."
        right="Big cars use more petrol than small ones."
        fix="small ones."
      />
    </NoteSlide>

    <NoteSlide title="不可數名詞不用 ones">
      <NoteFix
        wrong="I prefer fresh milk to powdered ones."
        right="I prefer fresh milk to powdered milk."
        fix="powdered milk."
      />
    </NoteSlide>

    <NoteSlide title="the + 修飾語 + ones：特定的幾個">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'The', role: '特指', kind: 'key' },
          { t: 'red', role: '修飾語' },
          { t: 'ones', kind: 'key' },
          { t: 'are mine.', kind: 'dim' },
        ]"
      />
      <p class="translation">紅色那些是我的。</p>
    </NoteSlide>

    <NoteSlide title="單數用 one">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I don\'t need a big car.', kind: 'dim' },
          { t: 'A small one', role: '代替單數名詞', kind: 'key' },
          { t: 'is fine.', kind: 'dim' },
        ]"
      />
      <p class="translation">我不需要大車，小的就好。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
