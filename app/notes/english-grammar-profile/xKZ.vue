<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adverbs-use-organising, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="firstly 放在句首，列出第一點">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'Firstly,', role: '言談標記', kind: 'key' },
          { t: 'I advise', role: '主詞 + 動詞' },
          { t: 'you', role: '受詞' },
          { t: 'to visit both schools.', role: '不定詞片語' },
        ]"
      />
      <p class="translation">首先，我建議你兩間學校都去看看。</p>
    </NoteSlide>

    <NoteSlide title="secondly 接下一點，finally 接最後一點" mark="Firstly,">
      <div class="rows is-labeled">
        <div>
          <span class="term">secondly</span>
          <span
            ><NoteMark
              sentence="Secondly, talk to some students there."
              :marks="['Secondly,']"
            /><span class="translation">第二，跟那裡的學生聊聊。</span></span
          >
        </div>
        <div>
          <span class="term">finally</span>
          <span
            ><NoteMark sentence="Finally, compare the prices." :marks="['Finally,']" /><span
              class="translation"
              >最後，比較一下價錢。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="what's more 補充一點，actually 帶出新的資訊">
      <div class="rows is-labeled">
        <div>
          <span class="term">what's more</span>
          <span
            ><NoteMark
              sentence="The topic is useful. What's more, it's very interesting."
              :marks="['What\'s more,']"
            /><span class="translation">這個主題很實用。而且很有趣。</span></span
          >
        </div>
        <div>
          <span class="term">actually</span>
          <span
            ><NoteMark
              sentence="I said Tuesday, but actually the meeting is on Wednesday."
              :marks="['actually']"
            /><span class="translation">我說星期二，不過會議其實是星期三。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="firstly 只用在列點，說先後順序用 first" mark="Firstly,">
      <NoteFix
        wrong="Firstly I fed the cat, and then I made breakfast."
        right="First I fed the cat, and then I made breakfast."
        fix="First"
      />
    </NoteSlide>

    <NoteSlide title="列出最後一點用 finally，不用 at last">
      <NoteFix
        wrong="At last, I want to thank everyone for coming."
        right="Finally, I want to thank everyone for coming."
        fix="Finally,"
      />
    </NoteSlide>

    <NoteSlide title="what's more 的 's 不能省略">
      <NoteFix
        wrong="The flat is cheap. What more, it has a garden."
        right="The flat is cheap. What's more, it has a garden."
        fix="What's more,"
      />
    </NoteSlide>

    <NoteSlide title="finally 有兩個 l">
      <NoteFix
        wrong="Finaly, we need a bigger room for the class."
        right="Finally, we need a bigger room for the class."
        fix="Finally,"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
