<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adverbs-use-degree-with-verbs-88, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="a lot 放在動詞後面">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'We listened to music, and', kind: 'dim' },
          { t: 'we', role: '主詞' },
          { t: 'danced', role: '動詞' },
          { t: 'a lot', role: '程度副詞片語', kind: 'key' },
          { t: 'too.', role: '也', kind: 'dim' },
        ]"
      />
      <p class="translation">我們聽了音樂，也跳了很多舞。</p>
    </NoteSlide>

    <NoteSlide title="動詞有受詞時，a lot 和 so much 放在受詞後面" mark="a lot">
      <div class="rows is-labeled">
        <div>
          <span class="term">a lot</span>
          <span
            ><NoteMark sentence="My mum helps me a lot." :marks="['a lot']" /><span
              class="translation"
              >我媽幫了我很多忙。</span
            ></span
          >
        </div>
        <div>
          <span class="term">so much</span>
          <span
            ><NoteMark sentence="I miss you so much!" :marks="['so much']" /><span
              class="translation"
              >我好想你！</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="a lot 用在一般的敘述，so much 帶感情" mark="a lot">
      <div class="rows is-labeled">
        <div>
          <span class="term">a lot<br /><i>一般的敘述</i></span>
          <span
            ><NoteMark sentence="My brother travels a lot for work." :marks="['a lot']" /><span
              class="translation"
              >我哥哥常因為工作出差。</span
            ></span
          >
        </div>
        <div>
          <span class="term">so much<br /><i>帶感情</i></span>
          <span
            ><NoteMark sentence="Thank you so much for the present!" :marks="['so much']" /><span
              class="translation"
              >非常謝謝你的禮物！</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="a lot 不放在動詞和受詞中間" mark="a lot">
      <NoteFix wrong="I like a lot this song." right="I like this song a lot." fix="a lot" />
    </NoteSlide>

    <NoteSlide title="當副詞用時要寫 a lot" mark="a lot">
      <NoteFix wrong="She talks lot." right="She talks a lot." fix="a lot" />
    </NoteSlide>

    <NoteSlide title="so much 不放在動詞前面">
      <NoteFix wrong="I so much love this city." right="I love this city so much." fix="so much" />
    </NoteSlide>

    <NoteSlide title="a lot 是兩個字" mark="a lot">
      <NoteFix wrong="We laughed alot." right="We laughed a lot." fix="a lot" />
    </NoteSlide>

    <NoteSlide title="a lot 修飾動詞，a lot of 後面接名詞" mark="a lot">
      <NoteFork
        stem="He eats"
        :branches="[
          { head: 'a lot', rest: '', meaning: '修飾動詞', zh: '他吃很多。' },
          { head: 'a lot of', rest: 'fruit', meaning: '後面接名詞', zh: '他吃很多水果。' },
        ]"
      />
    </NoteSlide>

    <NoteSlide title="so much 後面接不可數名詞時，表示數量很多">
      <div class="rows is-labeled">
        <div>
          <span class="term">修飾動詞</span>
          <span
            ><NoteMark sentence="I love you so much." :marks="['so much']" /><span
              class="translation"
              >我好愛你。</span
            ></span
          >
        </div>
        <div>
          <span class="term">接名詞</span>
          <span
            ><NoteMark sentence="I have so much work today." :marks="['so much work']" /><span
              class="translation"
              >我今天有好多工作。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
