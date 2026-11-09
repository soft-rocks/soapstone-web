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
          { t: 'The kitchen in my new flat is', role: '主詞 + be', kind: 'dim' },
          { t: 'very', role: '程度副詞', kind: 'key' },
          { t: 'modern.', role: '形容詞' },
        ]"
      />
      <p class="translation">我新公寓的廚房很現代。</p>
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
            ><NoteMark sentence="The hotel isn't very far." :marks="['isn\'t very far.']" /><span
              class="translation"
              >那間飯店不太遠。</span
            ></span
          >
        </div>
        <div>
          <span class="term">疑問句</span>
          <span
            ><NoteMark
              sentence="Is the walk to your office very long?"
              :marks="['very long?']"
            /><span class="translation">你走路去辦公室要很久嗎？</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="a 放在程度副詞前面" mark="a really">
      <NoteFix
        wrong="Our coach gave us very a tough training session."
        right="Our coach gave us a very tough training session."
        fix="a very tough"
      />
    </NoteSlide>

    <NoteSlide title="程度副詞放在形容詞前面">
      <NoteFix
        wrong="The last chapter of the book was sad very."
        right="The last chapter of the book was very sad."
        fix="very sad."
      />
    </NoteSlide>

    <NoteSlide title="修飾形容詞用 really，不用 real" mark="really">
      <NoteFix
        wrong="The new library is real popular with students."
        right="The new library is really popular with students."
        fix="really popular"
      />
    </NoteSlide>

    <NoteSlide title="形容詞前面用 very，不用 very much">
      <NoteFix
        wrong="Their wedding was very much expensive."
        right="Their wedding was very expensive."
        fix="very expensive."
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
