<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// future-use-future-arrangements-414, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + am / is / are + 動詞-ing + 未來的時間" mark="very soon.">
      <div class="rows is-labeled">
        <div>
          <span class="term">am / is / are + 動詞&#x2060;-&#x2060;ing</span>
          <span>已經確定或安排好的事。</span>
        </div>
        <div>
          <span class="term">未來的時間</span>
          <span>像 tomorrow、next month、at 8 o'clock、very soon。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="更多的動詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">start / finish</span>
          <span
            ><NoteMark sentence="The course is starting next Monday." :marks="[]" /><span
              class="translation"
              >課程下星期一開始。</span
            ></span
          >
        </div>
        <div>
          <span class="term">move / fly / travel</span>
          <span
            ><NoteMark sentence="They're moving to Leeds in the spring." :marks="[]" /><span
              class="translation"
              >他們春天要搬到里茲。</span
            ></span
          >
        </div>
        <div>
          <span class="term">get married / take</span>
          <span
            ><NoteMark sentence="My sister is getting married in June." :marks="[]" /><span
              class="translation"
              >我姊六月要結婚。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">除了 go、come、have，現在進行式也可以用這些動詞說安排。</p>
    </NoteSlide>
    <NoteSlide title="已經排好時間的活動">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="The movie is starting at 8 o'clock." :marks="[]" /><span
              class="translation"
              >電影八點開始。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">電影、課程這類有固定時間的活動，也可以用現在進行式說。</p>
    </NoteSlide>
    <NoteSlide title="個人安排好的事用現在進行式">
      <NoteFix
        wrong="I attend my cousin's wedding tomorrow."
        right="I'm attending my cousin's wedding tomorrow."
        :fix="['I\'m attending']"
      />
    </NoteSlide>
    <NoteSlide title="字尾是不發音的 e，去掉 e 再加 -ing">
      <NoteFix
        wrong="We're moveing to a new flat next month."
        right="We're moving to a new flat next month."
        :fix="['moving']"
      />
    </NoteSlide>
    <NoteSlide title="動詞-ing 前面要有 am、is 或 are">
      <NoteFix
        wrong="My parents flying to Rome on Friday."
        right="My parents are flying to Rome on Friday."
        :fix="['are']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
