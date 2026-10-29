<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adverbs-form-degree-modifying-adverbs, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="程度副詞放在另一個副詞前面">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'We left', role: '主詞 + 動詞', kind: 'dim' },
          { t: 'really', role: '程度副詞', kind: 'key' },
          { t: 'early', role: '時間副詞' },
          { t: 'on a Friday morning.', role: '時間', kind: 'dim' },
        ]"
      />
      <p class="translation">我們在一個星期五的早上很早就出發了。</p>
    </NoteSlide>

    <NoteSlide title="程度副詞也可以修飾情狀副詞" mark="really early">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'I opened', role: '主詞 + 動詞', kind: 'dim' },
          { t: 'the box', role: '受詞', kind: 'dim' },
          { t: 'very', role: '程度副詞', kind: 'key' },
          { t: 'carefully.', role: '情狀副詞' },
        ]"
      />
      <p class="translation">我很小心地打開箱子。</p>
    </NoteSlide>

    <NoteSlide title="extremely 程度最高，a bit 程度最低" mark="really">
      <div class="rows is-labeled">
        <div>
          <span class="term">extremely</span>
          <span
            ><NoteMark
              sentence="My sister sings extremely well."
              :marks="['extremely well']"
            /><span class="translation">我姊姊唱歌唱得非常好。</span></span
          >
        </div>
        <div>
          <span class="term">very、really、so</span>
          <span
            ><NoteMark sentence="She types really fast." :marks="['really fast']" /><span
              class="translation"
              >她打字打得很快。</span
            ></span
          >
        </div>
        <div>
          <span class="term">quite、pretty</span>
          <span
            ><NoteMark sentence="I usually get up pretty early." :marks="['pretty early']" /><span
              class="translation"
              >我通常起得滿早的。</span
            ></span
          >
        </div>
        <div>
          <span class="term">a bit、a little</span>
          <span
            ><NoteMark sentence="The bus came a bit early today." :marks="['a bit early']" /><span
              class="translation"
              >公車今天早到了一點。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="too 加副詞後面可以接 for 說明對誰來說太過">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'You\'re speaking', role: '主詞 + 動詞', kind: 'dim' },
          { t: 'too fast', role: '程度副詞 + 副詞', kind: 'key' },
          { t: 'for me.', role: '對誰' },
        ]"
      />
      <p class="translation">你說得太快了，我跟不上。</p>
    </NoteSlide>

    <NoteSlide title="very 跟著被修飾的副詞放在動詞後面">
      <NoteFix
        wrong="She very speaks quietly."
        right="She speaks very quietly."
        fix="very quietly"
      />
    </NoteSlide>

    <NoteSlide title="really 後面用副詞 carefully，不用形容詞" mark="really">
      <NoteFix
        wrong="He drove really careful."
        right="He drove really carefully."
        fix="carefully"
      />
    </NoteSlide>

    <NoteSlide title="原級的副詞前面用 very，不用 much">
      <NoteFix wrong="The car went much fast." right="The car went very fast." fix="very" />
    </NoteSlide>

    <NoteSlide title="表示太過的副詞拼成 too">
      <NoteFix wrong="You walk to slowly." right="You walk too slowly." fix="too" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
