<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adverbs-form-adverb-adverb-143, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="quite 修飾情狀副詞" mark="quite well">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'We', role: '主詞', kind: 'dim' },
          { t: 'get along', role: '動詞' },
          { t: 'quite', role: '程度副詞', kind: 'key' },
          { t: 'well.', role: '情狀副詞' },
        ]"
      />
      <p class="translation">我們處得滿好的。</p>
    </NoteSlide>

    <NoteSlide title="其他修飾副詞的組合" mark="quite">
      <div class="rows is-labeled">
        <div>
          <span class="term">almost + always</span>
          <span
            ><NoteMark
              sentence="My style is almost always the same."
              :marks="['almost always']"
            /><span class="translation">我的穿著幾乎都一樣。</span></span
          >
        </div>
        <div>
          <span class="term">just + 時間副詞</span>
          <span
            ><NoteMark sentence="It came out just yesterday." :marks="['just yesterday']" /><span
              class="translation"
              >它昨天才剛上映。</span
            ></span
          >
        </div>
        <div>
          <span class="term">much + too</span>
          <span
            ><NoteMark sentence="You're driving much too fast." :marks="['much too fast']" /><span
              class="translation"
              >你開得實在太快了。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="各個修飾副詞的副詞" mark="quite">
      <div class="rows is-labeled">
        <div>
          <span class="term">quite、pretty、fairly</span>
          <span>滿、相當，比 very 低</span>
        </div>
        <div>
          <span class="term">almost、nearly</span>
          <span>幾乎，修飾 always、never</span>
        </div>
        <div>
          <span class="term">just</span>
          <span>放在 too、so 前面是真的，放在時間副詞前面是才剛</span>
        </div>
        <div>
          <span class="term">much、far</span>
          <span>加強 too，表示太過頭</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="almost never 是幾乎從不">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'I', role: '主詞', kind: 'dim' },
          { t: 'almost', role: '程度副詞', kind: 'key' },
          { t: 'never', role: '頻率副詞' },
          { t: 'eat fast food.', role: '動詞 + 受詞', kind: 'dim' },
        ]"
      />
      <p class="translation">我幾乎從不吃速食。</p>
    </NoteSlide>

    <NoteSlide title="much 放在 too 前面">
      <NoteFix
        wrong="She talks too much fast for me."
        right="She talks much too fast for me."
        fix="much too fast"
      />
    </NoteSlide>

    <NoteSlide title="表示幾乎用 almost">
      <NoteFix
        wrong="I most always take the bus to work."
        right="I almost always take the bus to work."
        fix="almost always"
      />
    </NoteSlide>

    <NoteSlide title="just 放在時間副詞前面">
      <NoteFix
        wrong="The shop opened yesterday just."
        right="The shop opened just yesterday."
        fix="just yesterday"
      />
    </NoteSlide>

    <NoteSlide title="修飾副詞用 fairly" mark="quite well">
      <NoteFix
        wrong="My grandmother can still walk fair well."
        right="My grandmother can still walk fairly well."
        fix="fairly well"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
