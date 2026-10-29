<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adverbs-use-very-with-adjectives, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="very 放在形容詞前面，a 放在 very 前面">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'He\'s', role: '主詞 + be', kind: 'dim' },
          { t: 'a', role: '冠詞' },
          { t: 'very', role: '程度副詞', kind: 'key' },
          { t: 'good', role: '形容詞', kind: 'key' },
          { t: 'man.', role: '名詞' },
        ]"
      />
      <p class="translation">他是個很好的人。</p>
    </NoteSlide>

    <NoteSlide title="very 加形容詞可以放在 be、連綴動詞後面或名詞前面" mark="very good">
      <div class="rows is-labeled">
        <div>
          <span class="term">be</span>
          <span
            ><NoteMark sentence="I'm very happy in my new flat." :marks="['very happy']" /><span
              class="translation"
              >我住在新公寓很開心。</span
            ></span
          >
        </div>
        <div>
          <span class="term">look、feel、seem</span>
          <span
            ><NoteMark sentence="You look very tired." :marks="['very tired']" /><span
              class="translation"
              >你看起來很累。</span
            ></span
          >
        </div>
        <div>
          <span class="term">複數名詞前面</span>
          <span
            ><NoteMark sentence="They are very nice people." :marks="['very nice']" /><span
              class="translation"
              >他們人很好。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="a 或 an 看 very 的發音決定" mark="a very">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'a', role: '看 very 的發音', kind: 'key', ring: true },
          { t: 'very', role: '程度副詞' },
          { t: 'old', role: '形容詞' },
          { t: 'house', role: '名詞' },
        ]"
      />
    </NoteSlide>

    <NoteSlide title="a 放在 very 前面" mark="a very">
      <NoteFix
        wrong="She is very a kind teacher."
        right="She is a very kind teacher."
        fix="a very"
      />
    </NoteSlide>

    <NoteSlide title="very 不修飾動詞，修飾動詞用 very much" mark="very">
      <NoteFix wrong="I very like this song." right="I like this song very much." fix="very much" />
    </NoteSlide>

    <NoteSlide title="主詞和 very 加形容詞中間要有 be">
      <NoteFix wrong="The soup very hot." right="The soup is very hot." fix="is" />
    </NoteSlide>

    <NoteSlide title="very 不修飾比較級，比較級前面用 much" mark="very">
      <NoteFix wrong="This bag is very cheaper." right="This bag is much cheaper." fix="much" />
    </NoteSlide>

    <NoteSlide title="very 只表示程度高，too 表示超過限度" mark="very">
      <div class="rows is-labeled">
        <div>
          <span class="term">very<br /><i>搬得動</i></span>
          <span
            ><NoteMark
              sentence="The box is very heavy, but I can carry it."
              :marks="['very heavy']"
            /><span class="translation">箱子很重，可是我搬得動。</span></span
          >
        </div>
        <div>
          <span class="term">too<br /><i>搬不動</i></span>
          <span
            ><NoteMark
              sentence="The box is too heavy. I can't carry it."
              :marks="['too heavy']"
            /><span class="translation">箱子太重了。我搬不動。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="not very 加形容詞表示程度不高" mark="very good">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'The film', role: '主詞', kind: 'dim' },
          { t: 'wasn\'t', role: 'be + not' },
          { t: 'very', role: '程度副詞', kind: 'key' },
          { t: 'good.', role: '形容詞' },
        ]"
      />
      <p class="translation">那部電影不怎麼好看。</p>
      <p class="remark">這個說法比直接說 <code>bad</code> 委婉。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
