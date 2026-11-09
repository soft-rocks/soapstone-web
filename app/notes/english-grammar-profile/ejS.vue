<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adverbs-form-degree-before-adjectives-132, as slides, in the order of content.md. One
// point per slide: the title names it, the diagram shows it, and `mark` circles the matching
// words of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="程度副詞放在形容詞前面" mark="so glad">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'I\'m', role: '主詞 + be', kind: 'dim' },
          { t: 'so', role: '程度副詞', kind: 'key' },
          { t: 'glad', role: '形容詞' },
          { t: 'you\'re coming.', role: '子句', kind: 'dim' },
        ]"
      />
      <p class="translation">你要來，我真的好高興。</p>
    </NoteSlide>

    <NoteSlide title="各個程度副詞的意思" mark="so">
      <div class="rows is-labeled">
        <div>
          <span class="term">so</span>
          <span>好、這麼，表示說話者的感覺很強</span>
        </div>
        <div>
          <span class="term">quite</span>
          <span>相當、滿，比 very 低</span>
        </div>
        <div>
          <span class="term">too</span>
          <span>太，程度高到造成問題</span>
        </div>
        <div>
          <span class="term">a bit、a little</span>
          <span>有點，常接表示不好的形容詞</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="very 是很，too 是太">
      <div class="rows is-labeled">
        <div>
          <span class="term">very</span>
          <span
            ><NoteMark
              sentence="The climb is very steep, but my grandpa can manage it."
              :marks="['very steep']"
            /><span class="translation">那段坡很陡，不過我爺爺爬得上去。</span></span
          >
        </div>
        <div>
          <span class="term">too</span>
          <span
            ><NoteMark
              sentence="The ladder is too short. We can't reach the roof."
              :marks="['too short.']"
            /><span class="translation">梯子太短了。我們搆不到屋頂。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="quite 放在 a 前面">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'It\'s', role: '主詞 + be', kind: 'dim' },
          { t: 'quite', role: '程度副詞', kind: 'key' },
          { t: 'a', role: '冠詞' },
          { t: 'long', role: '形容詞' },
          { t: 'drive', role: '名詞' },
          { t: 'to the coast.', role: '地點', kind: 'dim' },
        ]"
      />
      <p class="translation">開車到海邊滿遠的。</p>
    </NoteSlide>

    <NoteSlide title="so 和 too 後面接的成分">
      <div class="rows is-labeled">
        <div>
          <span class="term">so + 形容詞 + that 子句</span>
          <span
            ><NoteMark
              sentence="The queue was so long that we gave up."
              :marks="['so long that']"
            /><span class="translation">隊伍長到我們放棄了。</span></span
          >
        </div>
        <div>
          <span class="term">too + 形容詞 + to + 動詞原形</span>
          <span
            ><NoteMark sentence="He's too young to drive." :marks="['too young to drive']" /><span
              class="translation"
              >他年紀太小，不能開車。</span
            ></span
          >
        </div>
        <div>
          <span class="term">too + 形容詞 + for + 名詞</span>
          <span
            ><NoteMark
              sentence="These shoes are too small for me."
              :marks="['too small for me']"
            /><span class="translation">這雙鞋我穿太小了。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="只說程度高用 very，不用 too">
      <NoteFix
        wrong="Your new flat is too beautiful."
        right="Your new flat is very beautiful."
        fix="very beautiful"
      />
    </NoteSlide>

    <NoteSlide title="too 直接接形容詞">
      <NoteFix
        wrong="The rent in the city centre is too much high."
        right="The rent in the city centre is too high."
        fix="too high."
      />
    </NoteSlide>

    <NoteSlide title="a bit 只接單獨的形容詞">
      <NoteFix wrong="It was a bit cold day." right="It was a bit cold." fix="a bit cold" />
    </NoteSlide>

    <NoteSlide title="接 that 子句用 so，不用 very">
      <NoteFix
        wrong="I was very hungry that I ate two pizzas."
        right="I was so hungry that I ate two pizzas."
        fix="so hungry that"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
