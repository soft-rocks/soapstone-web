<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// prepositions-form-use-preposition-wh-word, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words
// of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="正式的寫法把介系詞放在 whom 前面">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'In my opinion, children need', kind: 'dim' },
          { t: 'someone', role: '名詞' },
          { t: 'to whom', role: '介系詞 + whom', kind: 'key' },
          { t: 'they can talk.', role: '主詞 + 動詞' },
        ]"
      />
      <p class="translation">我認為孩子需要一個可以說話的對象。</p>
      <p class="remark">子句原本是 <code>they can talk to someone</code>。</p>
    </NoteSlide>

    <NoteSlide title="口語把介系詞留在句尾，正式的寫法移到前面" mark="to whom">
      <div class="rows is-labeled">
        <div>
          <span class="term">口語</span>
          <span
            ><NoteMark sentence="The manager I spoke to was very helpful." :marks="['to']"
          /></span>
        </div>
        <div>
          <span class="term">正式</span>
          <span
            ><NoteMark
              sentence="The manager to whom I spoke was very helpful."
              :marks="['to whom']"
            /><span class="translation">跟我談過的那位經理幫了很大的忙。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="介系詞後面說人用 whom，說東西用 which" mark="whom">
      <div class="rows is-labeled">
        <div>
          <span class="term">人</span>
          <span><NoteMark sentence="The manager with whom I spoke" :marks="['with whom']" /></span>
        </div>
        <div>
          <span class="term">東西</span>
          <span
            ><NoteMark
              sentence="This is the club of which she is the president."
              :marks="['of which']"
            /><span class="translation">這是她擔任會長的社團。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="介系詞後面說東西不用 that">
      <NoteFix
        wrong="The house in that I grew up is now a museum."
        right="The house in which I grew up is now a museum."
        fix="which"
      />
    </NoteSlide>

    <NoteSlide title="介系詞後面說人不用 who" mark="whom">
      <NoteFix
        wrong="The teacher to who I wrote never replied."
        right="The teacher to whom I wrote never replied."
        fix="whom"
      />
    </NoteSlide>

    <NoteSlide title="介系詞移到前面，句尾不再重複" mark="they can talk.">
      <NoteFix
        wrong="The topic about which we talked about was interesting."
        right="The topic about which we talked was interesting."
        fix="talked"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
