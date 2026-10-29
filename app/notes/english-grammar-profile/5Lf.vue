<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adverbs-form-degree-modifying-adjectives, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words
// of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="程度副詞放在形容詞前面">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'I\'m', role: '主詞 + be', kind: 'dim' },
          { t: 'so', role: '程度副詞', kind: 'key' },
          { t: 'happy', role: '形容詞' },
          { t: 'because you can come!', role: '原因', kind: 'dim' },
        ]"
      />
      <p class="translation">你可以來，我真的好開心！</p>
    </NoteSlide>

    <NoteSlide title="really、extremely、pretty 加形容詞可以放在名詞前面" mark="so happy">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'It\'s', role: '主詞 + be', kind: 'dim' },
          { t: 'a', role: '冠詞' },
          { t: 'really', role: '程度副詞', kind: 'key' },
          { t: 'important', role: '形容詞' },
          { t: 'book', role: '名詞' },
          { t: 'for me.', role: '對誰', kind: 'dim' },
        ]"
      />
      <p class="translation">這本書對我很重要。</p>
    </NoteSlide>

    <NoteSlide title="程度從高到低：extremely、really、pretty、a bit" mark="so">
      <div class="rows is-labeled">
        <div>
          <span class="term">extremely</span>
          <span
            ><NoteMark
              sentence="The new phones are extremely expensive."
              :marks="['extremely expensive']"
            /><span class="translation">新的手機貴得要命。</span></span
          >
        </div>
        <div>
          <span class="term">really、so</span>
          <span
            ><NoteMark sentence="Your little girl is so clever." :marks="['so clever']" /><span
              class="translation"
              >你的小女兒好聰明。</span
            ></span
          >
        </div>
        <div>
          <span class="term">pretty</span>
          <span
            ><NoteMark sentence="Her French is pretty good." :marks="['pretty good']" /><span
              class="translation"
              >她的法文滿好的。</span
            ></span
          >
        </div>
        <div>
          <span class="term">a bit、a little</span>
          <span
            ><NoteMark sentence="The test was a bit difficult." :marks="['a bit difficult']" /><span
              class="translation"
              >考試有點難。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="好的性質不用 a bit，用 quite 或 pretty">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'The food was', role: '主詞 + be', kind: 'dim' },
          { t: 'pretty', role: '程度副詞', kind: 'key' },
          { t: 'good.', role: '好的性質' },
        ]"
      />
      <p class="translation">食物還滿好吃的。</p>
    </NoteSlide>

    <NoteSlide title="a bit 和形容詞中間不加 of">
      <NoteFix wrong="I'm a bit of tired today." right="I'm a bit tired today." fix="a bit tired" />
    </NoteSlide>

    <NoteSlide title="a 後面用 really，不用 so" mark="so">
      <NoteFix wrong="She's a so kind person." right="She's a really kind person." fix="really" />
    </NoteSlide>

    <NoteSlide title="fantastic 前面用 really，不用 extremely">
      <NoteFix
        wrong="The idea was extremely fantastic."
        right="The idea was really fantastic."
        fix="really"
      />
    </NoteSlide>

    <NoteSlide title="單數可數名詞前面要有 a">
      <NoteFix wrong="He's really tall man." right="He's a really tall man." fix="a really" />
    </NoteSlide>

    <NoteSlide title="a little 放在形容詞前面表示程度，放在名詞前面表示數量">
      <div class="rows is-labeled">
        <div>
          <span class="term">形容詞前面</span>
          <span
            ><NoteMark sentence="The soup is a little salty." :marks="['a little salty']" /><span
              class="translation"
              >湯有一點鹹。</span
            ></span
          >
        </div>
        <div>
          <span class="term">名詞前面</span>
          <span
            ><NoteMark sentence="Can I have a little salt?" :marks="['a little salt']" /><span
              class="translation"
              >可以給我一點鹽嗎？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="pretty 放在形容詞前面表示相當，放在名詞前面表示漂亮">
      <div class="rows is-labeled">
        <div>
          <span class="term">程度副詞</span>
          <span
            ><NoteMark sentence="The test was pretty easy." :marks="['pretty easy']" /><span
              class="translation"
              >考試滿簡單的。</span
            ></span
          >
        </div>
        <div>
          <span class="term">形容詞</span>
          <span
            ><NoteMark sentence="She's a pretty girl." :marks="['pretty girl']" /><span
              class="translation"
              >她是個漂亮的女孩。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
