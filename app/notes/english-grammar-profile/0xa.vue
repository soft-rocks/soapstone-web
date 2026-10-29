<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// verbs-form-phrasal-prepositional-verb-stranded-preposition, as slides, in the order of
// content.md. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="受詞移到前面，小品詞和介系詞留在句尾" mark="a person">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Sometimes we need', kind: 'dim' },
          { t: 'a person', role: '受詞', kind: 'key', ring: true },
          { t: 'to look', role: 'to + 動詞' },
          { t: 'up', role: '小品詞', kind: 'key' },
          { t: 'to.', role: '介系詞', kind: 'key' },
        ]"
      />
      <p class="translation">有時候我們需要一個可以尊敬的人。</p>
      <p class="remark">一般的語序是 <code>look up to a person</code>。</p>
    </NoteSlide>

    <NoteSlide title="名詞加 to 不定詞、關係子句都可以讓介系詞懸空" mark="to">
      <div class="rows is-labeled">
        <div>
          <span class="term">名詞 + to 不定詞</span>
          <span
            ><NoteMark
              sentence="She was the kind of teacher students could look up to."
              :marks="['teacher', 'up to']"
            /><span class="translation">她是學生可以尊敬的那種老師。</span></span
          >
        </div>
        <div>
          <span class="term">關係子句</span>
          <span
            ><NoteMark
              sentence="The noise is something I can't put up with."
              :marks="['something', 'up with']"
            /><span class="translation">這個噪音是我受不了的事。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="wh 問句和 wh 子句的介系詞也留在句尾" mark="to">
      <div class="rows is-labeled">
        <div>
          <span class="term">wh 問句</span>
          <span
            ><NoteMark
              sentence="What are you looking forward to?"
              :marks="['What', 'forward to']"
            /><span class="translation">你在期待什麼？</span></span
          >
        </div>
        <div>
          <span class="term">wh 子句</span>
          <span
            ><NoteMark
              sentence="Let me tell you what ideas I came up with."
              :marks="['what ideas', 'up with']"
            /><span class="translation">我跟你說我想出了哪些點子。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="被動句的小品詞和介系詞接在過去分詞後面" mark="to">
      <div class="rows is-labeled">
        <div>
          <span class="term">被動</span>
          <span
            ><NoteMark
              sentence="My grandfather was looked up to by everyone in the village."
              :marks="['was looked up to']"
            /><span class="translation">村裡每個人都很尊敬我爺爺。</span></span
          >
        </div>
        <div>
          <span class="term">被動</span>
          <span
            ><NoteMark
              sentence="Bad behaviour like that shouldn't be put up with."
              :marks="['be put up with']"
            /><span class="translation">那種壞行為不應該被容忍。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="受詞移到前面以後，介系詞後面不再放受詞" mark="to">
      <NoteFix
        wrong="She is a teacher who students look up to her."
        right="She is a teacher who students look up to."
        fix="to"
      />
    </NoteSlide>

    <NoteSlide title="留在句尾的介系詞不能省略" mark="to">
      <NoteFix
        wrong="This is a noise I can't put up."
        right="This is a noise I can't put up with."
        fix="with"
      />
    </NoteSlide>

    <NoteSlide title="小品詞不能省略" mark="up">
      <NoteFix
        wrong="What are you looking to?"
        right="What are you looking forward to?"
        fix="forward"
      />
    </NoteSlide>

    <NoteSlide title="片語介系詞動詞的小品詞不移到前面" mark="up">
      <NoteFix wrong="the man up to whom I look" right="the man I look up to" fix="look up to" />
    </NoteSlide>

    <NoteSlide title="介系詞動詞沒有小品詞，介系詞一樣可以懸空">
      <div class="rows is-labeled">
        <div>
          <span class="term">介系詞懸空</span>
          <span
            ><NoteMark sentence="This is the book I was looking for." :marks="['for']" /><span
              class="translation"
              >這就是我在找的書。</span
            ></span
          >
        </div>
        <div>
          <span class="term">介系詞 + which<br /><i>正式</i></span>
          <span
            ><NoteMark
              sentence="There is one difficulty with which we must deal."
              :marks="['with which']"
            /><span class="translation">有一個難題是我們必須處理的。</span></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
