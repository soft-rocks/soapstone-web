<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// verbs-form-verb-particle-preposition-object, as slides, in the order of content.md. One
// point per slide: the title names it, the diagram shows it, and `mark` circles the matching
// words of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="片語介系詞動詞由動詞、小品詞和介系詞組成" mark="get on with">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'I\'d better stop now and', kind: 'dim' },
          { t: 'get', role: '動詞', kind: 'key' },
          { t: 'on', role: '小品詞', kind: 'key' },
          { t: 'with', role: '介系詞', kind: 'key' },
          { t: 'my studying.', role: '受詞' },
        ]"
      />
      <p class="translation">我最好就此打住，繼續唸我的書。</p>
      <p class="remark"><code>get on with</code> 的意思是繼續做。</p>
    </NoteSlide>

    <NoteSlide title="受詞放在介系詞後面，代名詞也一樣" mark="my studying">
      <div class="rows is-labeled">
        <div>
          <span class="term">名詞</span>
          <span
            ><NoteMark sentence="We ran out of milk." :marks="['milk']" /><span class="translation"
              >我們的牛奶喝完了。</span
            ></span
          >
        </div>
        <div>
          <span class="term">代名詞</span>
          <span
            ><NoteMark sentence="We ran out of it." :marks="['it']" /><span class="translation"
              >我們把它用完了。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="同一個動詞，小品詞和介系詞不同，意思不同" mark="on with">
      <div class="rows is-labeled">
        <div>
          <span class="term">get on with<br /><i>相處</i></span>
          <span
            ><NoteMark sentence="I get on with my sister." :marks="['on with']" /><span
              class="translation"
              >我和我姊姊處得很好。</span
            ></span
          >
        </div>
        <div>
          <span class="term">get away from<br /><i>離開</i></span>
          <span
            ><NoteMark sentence="I need to get away from the office." :marks="['away from']" /><span
              class="translation"
              >我需要離開辦公室一下。</span
            ></span
          >
        </div>
        <div>
          <span class="term">get out of<br /><i>下車</i></span>
          <span
            ><NoteMark sentence="He got out of the car." :marks="['out of']" /><span
              class="translation"
              >他下了車。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="catch up 後面接人時，要加介系詞 with" mark="with">
      <NoteFix
        wrong="I need to catch up the others."
        right="I need to catch up with the others."
        fix="with"
      />
    </NoteSlide>

    <NoteSlide title="小品詞不能省略" mark="on">
      <NoteFix wrong="We ran of sugar." right="We ran out of sugar." fix="out" />
    </NoteSlide>

    <NoteSlide title="run out 的介系詞是 of" mark="with">
      <NoteFix wrong="We ran out from milk." right="We ran out of milk." fix="of" />
    </NoteSlide>

    <NoteSlide title="介系詞後面的動詞用動詞-ing" mark="studying">
      <NoteFix
        wrong="Let's get on with clean the kitchen."
        right="Let's get on with cleaning the kitchen."
        fix="cleaning"
      />
    </NoteSlide>

    <NoteSlide title="介系詞動詞沒有小品詞，片語動詞沒有介系詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">介系詞動詞</span>
          <span
            ><NoteMark sentence="We talked about the trip." :marks="['talked about']" /><span
              class="translation"
              >我們聊了這趟旅行。</span
            ></span
          >
        </div>
        <div>
          <span class="term">片語動詞</span>
          <span
            ><NoteMark sentence="She gave up." :marks="['gave up']" /><span class="translation"
              >她放棄了。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
