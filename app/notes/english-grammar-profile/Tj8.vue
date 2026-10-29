<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// nouns-form-complex-noun-phrases-with-adjectives, as slides, in the order of content.md. One
// point per slide: the title names it, the diagram shows it, and `mark` circles the matching
// words of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="名詞前面可以放兩個以上的形容詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'He had', kind: 'dim' },
          { t: 'beautiful', role: '評價', kind: 'key' },
          { t: 'green', role: '顏色', kind: 'key' },
          { t: 'eyes', role: '名詞' },
          { t: 'and', kind: 'dim' },
          { t: 'short,', role: '長短', kind: 'key' },
          { t: 'curly', role: '形狀', kind: 'key' },
          { t: 'red', role: '顏色', kind: 'key' },
          { t: 'hair.', role: '名詞' },
        ]"
      />
      <p class="translation">他有一雙漂亮的綠眼睛，還有一頭紅色的短捲髮。</p>
    </NoteSlide>

    <NoteSlide title="評價在前，材料和用途最靠近名詞" mark="beautiful green">
      <div class="rows is-labeled">
        <div>
          <span class="term">評價</span>
          <span>beautiful, nasty, comfortable</span>
        </div>
        <div>
          <span class="term">大小、長短</span>
          <span>big, tiny, long, short</span>
        </div>
        <div>
          <span class="term">新舊</span>
          <span>old, new, ancient</span>
        </div>
        <div>
          <span class="term">形狀</span>
          <span>round, square, curly</span>
        </div>
        <div>
          <span class="term">顏色</span>
          <span>red, white, purple</span>
        </div>
        <div>
          <span class="term">來源</span>
          <span>Italian, Chinese</span>
        </div>
        <div>
          <span class="term">材料、用途</span>
          <span>wooden, woollen, hooded, sandy</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="類別不同的形容詞之間不加逗號" mark="curly red">
      <div class="rows is-labeled">
        <div>
          <span class="term">顏色 + 用途</span>
          <span
            ><NoteMark sentence="I bought a white hooded jacket." :marks="['white hooded']" /><span
              class="translation"
              >我買了一件白色連帽外套。</span
            ></span
          >
        </div>
        <div>
          <span class="term">大小 + 形狀 + 材料</span>
          <span
            ><NoteMark
              sentence="We sat at a big round wooden table."
              :marks="['big round wooden']"
            /><span class="translation">我們坐在一張大圓木桌旁。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="都是評價的形容詞之間加逗號" mark="short,">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'It was a', kind: 'dim' },
          { t: 'cheap,', role: '評價', kind: 'key' },
          { t: 'comfortable', role: '評價', kind: 'key' },
          { t: 'hotel.', role: '名詞' },
        ]"
      />
      <p class="translation">那是一家便宜又舒服的飯店。</p>
      <p class="remark">長短 + 形狀的逗號可加可不加。</p>
    </NoteSlide>

    <NoteSlide title="大小的形容詞放在顏色前面">
      <NoteFix wrong="She has a black big dog." right="She has a big black dog." fix="big black" />
    </NoteSlide>

    <NoteSlide title="材料的形容詞最靠近名詞">
      <NoteFix
        wrong="I want a wooden brown table."
        right="I want a brown wooden table."
        fix="brown wooden"
      />
    </NoteSlide>

    <NoteSlide title="新舊的形容詞放在來源前面">
      <NoteFix
        wrong="They sell Italian old furniture."
        right="They sell old Italian furniture."
        fix="old Italian"
      />
    </NoteSlide>

    <NoteSlide title="名詞前面類別不同的形容詞不用 and 連接">
      <NoteFix
        wrong="She wore a long and black and silk dress."
        right="She wore a long black silk dress."
        fix="long black silk"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
