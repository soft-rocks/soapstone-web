<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adverbs-form-degree-before-adjectives, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="very、really 放在 be 後面的形容詞前面">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'My home is', role: '主詞 + be', kind: 'dim' },
          { t: 'very', role: '程度副詞', kind: 'key' },
          { t: 'light.', role: '形容詞' },
        ]"
      />
      <p class="translation">我家很明亮。</p>
    </NoteSlide>

    <NoteSlide title="名詞前面的形容詞也可以加 very、really" mark="a really good friend.">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'I have', role: '主詞 + 動詞', kind: 'dim' },
          { t: 'a', role: '冠詞' },
          { t: 'really', role: '程度副詞', kind: 'key' },
          { t: 'good', role: '形容詞' },
          { t: 'friend.', role: '名詞' },
        ]"
      />
      <p class="translation">我有一個很要好的朋友。</p>
    </NoteSlide>

    <NoteSlide title="複數名詞和不可數名詞前面不加 a">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'They are', role: '主詞 + be', kind: 'dim' },
          { t: 'really', role: '程度副詞', kind: 'key' },
          { t: 'nice', role: '形容詞' },
          { t: 'people.', role: '複數名詞' },
        ]"
      />
      <p class="translation">他們人真的很好。</p>
    </NoteSlide>

    <NoteSlide title="not very 表示不太，疑問句也用 very">
      <div class="rows is-labeled">
        <div>
          <span class="term">否定句</span>
          <span
            ><NoteMark sentence="The hotel isn't very big." :marks="['isn\'t very big.']" /><span
              class="translation"
              >那間飯店不太大。</span
            ></span
          >
        </div>
        <div>
          <span class="term">疑問句</span>
          <span
            ><NoteMark sentence="Is your school very far from here?" :marks="['very far']" /><span
              class="translation"
              >你的學校離這裡很遠嗎？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="a 放在程度副詞前面" mark="a really">
      <NoteFix
        wrong="She is very a nice teacher."
        right="She is a very nice teacher."
        fix="a very nice"
      />
    </NoteSlide>

    <NoteSlide title="程度副詞放在形容詞前面">
      <NoteFix
        wrong="The test was difficult very."
        right="The test was very difficult."
        fix="very difficult."
      />
    </NoteSlide>

    <NoteSlide title="修飾形容詞用 really，不用 real" mark="really">
      <NoteFix wrong="This soup is real hot." right="This soup is really hot." fix="really hot." />
    </NoteSlide>

    <NoteSlide title="形容詞前面用 very，不用 very much">
      <NoteFix
        wrong="The bag is very much expensive."
        right="The bag is very expensive."
        fix="very expensive."
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
