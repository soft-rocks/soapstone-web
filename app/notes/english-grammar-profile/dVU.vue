<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-use-something-in-vague-expressions, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="例子 + or something like that" mark="or something like that.">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'You can bring', kind: 'dim' },
          { t: 'a cake', role: '例子', kind: 'key' },
          { t: 'or something like that.', role: '或類似的東西', kind: 'key' },
        ]"
      />
      <p class="translation">你可以帶個蛋糕或之類的東西。</p>
    </NoteSlide>

    <NoteSlide title="or something、like that 和 else" mark="or something">
      <div class="rows is-labeled">
        <div>
          <span class="term">or something</span>
          <span
            ><NoteMark
              sentence="Let's have a sandwich or something."
              :marks="['or something.']"
            /><span class="translation">我們吃個三明治什麼的吧。</span></span
          >
        </div>
        <div>
          <span class="term">… like that</span>
          <span
            ><NoteMark
              sentence="He sells phones or something like that."
              :marks="['or something like that.']"
            /><span class="translation">他好像是賣手機之類的。</span></span
          >
        </div>
        <div>
          <span class="term">… else</span>
          <span
            ><NoteMark
              sentence="We can play cards or something else."
              :marks="['or something else.']"
            /><span class="translation">我們可以玩撲克牌或別的。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="想不起來、給對方選擇">
      <div class="rows is-labeled">
        <div>
          <span class="term">想不起來</span>
          <span
            ><NoteMark sentence="Her name is Anna or something." :marks="['or something.']" /><span
              class="translation"
              >她叫 Anna 還是什麼的。</span
            ></span
          >
        </div>
        <div>
          <span class="term">給對方選擇</span>
          <span
            ><NoteMark sentence="Bring some juice or something." :marks="['or something.']" /><span
              class="translation"
              >帶點果汁什麼的來吧。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="例子和 something 之間要用 or" mark="or">
      <NoteFix
        wrong="Let's order some pizza something."
        right="Let's order some pizza or something."
        fix="or"
      />
    </NoteSlide>

    <NoteSlide title="something 連在一起寫" mark="something">
      <NoteFix
        wrong="We can watch a film or some thing."
        right="We can watch a film or something."
        fix="something."
      />
    </NoteSlide>

    <NoteSlide title="something 不加 s" mark="something">
      <NoteFix
        wrong="You can wear a dress or somethings."
        right="You can wear a dress or something."
        fix="something."
      />
    </NoteSlide>

    <NoteSlide title="something to + 動詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Can you lend me', kind: 'dim' },
          { t: 'something', role: '要帶的東西', kind: 'key' },
          { t: 'to read', role: '不定詞', kind: 'key' },
          { t: 'on the plane?', kind: 'dim' },
        ]"
      />
      <p class="translation">你可以借我一本在飛機上看的書嗎？</p>
    </NoteSlide>

    <NoteSlide title="否定句用 or anything">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I don\'t need', role: '否定', kind: 'key' },
          { t: 'a bag', role: '例子' },
          { t: 'or anything.', role: '或類似的東西', kind: 'key' },
        ]"
      />
      <p class="translation">我不需要袋子什麼的。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
