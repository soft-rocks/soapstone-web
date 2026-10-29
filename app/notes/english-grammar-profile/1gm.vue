<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// verbs-form-negative, as slides, in the order of content.md. One point per slide: the title
// names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="複數名詞的否定用 there aren't">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Spring is the best time because', kind: 'dim' },
          { t: 'there', role: '引導詞' },
          { t: 'aren\'t', role: 'be + n\'t', kind: 'key' },
          { t: 'too many', role: '數量詞' },
          { t: 'tourists.', role: '複數名詞', kind: 'key' },
        ]"
      />
      <p class="translation">春天是最好的時節，因為觀光客沒那麼多。</p>
    </NoteSlide>

    <NoteSlide title="be 照名詞和時態選" mark="aren't">
      <div class="rows is-labeled">
        <div>
          <span class="term">單數名詞</span>
          <span
            ><NoteMark
              sentence="There isn't a post office near my flat."
              :marks="['isn\'t']"
            /><span class="translation">我家附近沒有郵局。</span></span
          >
        </div>
        <div>
          <span class="term">不可數名詞</span>
          <span
            ><NoteMark sentence="There isn't any noise at night." :marks="['isn\'t']" /><span
              class="translation"
              >晚上一點聲音都沒有。</span
            ></span
          >
        </div>
        <div>
          <span class="term">過去式，複數名詞</span>
          <span
            ><NoteMark
              sentence="There weren't any buses after midnight."
              :marks="['weren\'t']"
            /><span class="translation">半夜以後一班公車都沒有。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="any 是一個都沒有，many 和 much 是不多" mark="too many">
      <div class="rows is-labeled">
        <div>
          <span class="term">any<br /><i>一個都沒有</i></span>
          <span
            ><NoteMark sentence="There aren't any apples in the bowl." :marks="['any']" /><span
              class="translation"
              >碗裡一顆蘋果都沒有。</span
            ></span
          >
        </div>
        <div>
          <span class="term">many<br /><i>不多</i></span>
          <span
            ><NoteMark
              sentence="There aren't many apples on the tree this year."
              :marks="['many']"
            /><span class="translation">今年樹上的蘋果不多。</span></span
          >
        </div>
        <div>
          <span class="term">much<br /><i>不多</i></span>
          <span
            ><NoteMark sentence="There isn't much bread left." :marks="['much']" /><span
              class="translation"
              >麵包剩不多了。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="複數名詞用 aren't" mark="aren't">
      <NoteFix
        wrong="There isn't any chairs in the room."
        right="There aren't any chairs in the room."
        fix="aren't"
      />
    </NoteSlide>

    <NoteSlide title="否定句的名詞前面用 any，不用 some" mark="too many">
      <NoteFix
        wrong="There aren't some shops near here."
        right="There aren't any shops near here."
        fix="any"
      />
    </NoteSlide>

    <NoteSlide title="一句裡只用一個否定" mark="aren't">
      <NoteFix
        wrong="There isn't no parking at the hospital."
        right="There isn't any parking at the hospital."
        fix="any"
      >
        <code>There's no parking at the hospital.</code> 也對。
      </NoteFix>
    </NoteSlide>

    <NoteSlide title="說某個地方沒有東西，用 there isn't" mark="there aren't">
      <NoteFix
        wrong="In my town don't have a cinema."
        right="In my town there isn't a cinema."
        fix="there isn't"
      />
    </NoteSlide>

    <NoteSlide title="no 加名詞也是否定" mark="aren't">
      <NoteMark sentence="There's no hot water this morning." :marks="['no']" />
      <p class="translation">今天早上沒有熱水。</p>
    </NoteSlide>

    <NoteSlide title="說某個東西的情況，用 it isn't" mark="aren't">
      <NoteMark
        sentence="There's a café on the corner, but it isn't open today."
        :marks="['it isn\'t']"
      />
      <p class="translation">轉角有一家咖啡店，可是今天沒開。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
