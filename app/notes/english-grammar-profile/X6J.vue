<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// verbs-form-no-object-1059, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="不及物片語動詞後面不接受詞" mark="give up">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'She cried a lot, but she didn\'t', kind: 'dim' },
          { t: 'give', role: '動詞', kind: 'key' },
          { t: 'up.', role: '小品詞', kind: 'key' },
        ]"
      />
      <p class="translation">她哭了很久，但是沒有放棄。</p>
      <p class="remark"><code>give up</code> 的意思是放棄。</p>
    </NoteSlide>

    <NoteSlide title="意思和動詞本身的意思不同" mark="give up">
      <div class="rows is-labeled">
        <div>
          <span class="term">break down<br /><i>故障</i></span>
          <span
            ><NoteMark
              sentence="Our car broke down on the motorway."
              :marks="['broke down']"
            /><span class="translation">我們的車在高速公路上拋錨了。</span></span
          >
        </div>
        <div>
          <span class="term">take off<br /><i>起飛</i></span>
          <span
            ><NoteMark sentence="The plane took off at ten." :marks="['took off']" /><span
              class="translation"
              >飛機十點起飛。</span
            ></span
          >
        </div>
        <div>
          <span class="term">work out<br /><i>健身</i></span>
          <span
            ><NoteMark sentence="I work out three times a week." :marks="['work out']" /><span
              class="translation"
              >我一個星期健身三次。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="有受詞和沒有受詞，意思可能不同" mark="up">
      <div class="rows is-labeled">
        <div>
          <span class="term">沒有受詞</span>
          <span
            ><NoteMark sentence="The plane took off." :marks="['took off']" /><span
              class="translation"
              >飛機起飛了。</span
            ></span
          >
        </div>
        <div>
          <span class="term">有受詞</span>
          <span
            ><NoteMark sentence="He took off his coat." :marks="['his coat']" /><span
              class="translation"
              >他脫掉外套。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="故障是 break down，小品詞不能省略" mark="up">
      <NoteFix
        wrong="The car broke on the way home."
        right="The car broke down on the way home."
        fix="down"
      />
    </NoteSlide>

    <NoteSlide title="set off 說出發時沒有受詞" mark="up">
      <NoteFix wrong="We set off our trip at six." right="We set off at six." fix="set off" />
    </NoteSlide>

    <NoteSlide title="冷靜下來是 calm down" mark="up">
      <NoteFix wrong="Calm up. Everything is OK." right="Calm down. Everything is OK." fix="down" />
    </NoteSlide>

    <NoteSlide title="run out 要說用完什麼東西時，加 of">
      <NoteFix wrong="We ran out milk." right="We ran out of milk." fix="of" />
    </NoteSlide>

    <NoteSlide title="give up 有受詞時，意思是戒掉某件事" mark="give up">
      <NoteMark sentence="He gave up smoking last year." :marks="['smoking']" />
      <p class="translation">他去年戒菸了。</p>
    </NoteSlide>

    <NoteSlide title="out of the room 是介系詞片語，說的是地方" mark="give up">
      <NoteMark sentence="She ran out of the room." :marks="['out of the room']" />
      <p class="translation">她跑出房間。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
