<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adjectives-form-before-the-noun, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="逗號隔開名詞前的兩個形容詞" mark="old,">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'It\'s an', kind: 'dim' },
          { t: 'old,', role: '形容詞', kind: 'key', ring: true },
          { t: 'Victorian-style', role: '形容詞', kind: 'key' },
          { t: 'house.', role: '名詞' },
        ]"
      />
      <p class="translation">那是一棟維多利亞風格的老房子。</p>
      <p class="remark">兩個形容詞都形容房子。</p>
    </NoteSlide>

    <NoteSlide title="中間可以加 and 的兩個形容詞，用逗號隔開" mark="old,">
      <div class="rows is-labeled">
        <div>
          <span class="term">逗號</span>
          <span
            ><NoteMark sentence="It was a long, hot summer." :marks="['long, hot']" /><span
              class="translation"
              >那是一個漫長又炎熱的夏天。</span
            ></span
          >
        </div>
        <div>
          <span class="term">and</span>
          <span
            ><NoteMark sentence="It was a long and hot summer." :marks="['long and hot']" /><span
              class="translation"
              >那是一個漫長又炎熱的夏天。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">兩句的意思一樣。</p>
    </NoteSlide>

    <NoteSlide title="種類不同的形容詞照順序排，通常不加逗號" mark="Victorian-style">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'He bought an', kind: 'dim' },
          { t: 'old', role: '新舊', kind: 'key' },
          { t: 'wooden', role: '材料', kind: 'key' },
          { t: 'table.', role: '名詞' },
        ]"
      />
      <p class="translation">他買了一張舊的木頭桌子。</p>
      <p class="remark">看法 → 大小 → 新舊 → 顏色 → 來源 → 材料 + 名詞</p>
    </NoteSlide>

    <NoteSlide title="最後一個形容詞和名詞中間不加逗號" mark="house">
      <NoteFix
        wrong="It was a long, hot, summer."
        right="It was a long, hot summer."
        fix="hot summer"
      />
    </NoteSlide>

    <NoteSlide title="新舊放在材料前面" mark="old,">
      <NoteFix
        wrong="He bought a wooden old table."
        right="He bought an old wooden table."
        fix="old wooden"
      />
    </NoteSlide>

    <NoteSlide title="名詞是複數時，形容詞不加 -s" mark="old,">
      <NoteFix
        wrong="We met two nices, friendly waiters."
        right="We met two nice, friendly waiters."
        fix="nice"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
