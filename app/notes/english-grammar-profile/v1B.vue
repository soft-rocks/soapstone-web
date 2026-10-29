<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-form-questions-792, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="Why didn't 問沒發生的事" mark="Why didn't">
      <NoteWords
        :size="20"
        :parts="[
          { t: 'Why', role: '疑問詞', kind: 'key' },
          { t: 'didn\'t', role: '否定', kind: 'key', ring: true },
          { t: 'he', role: '主詞' },
          { t: 'call', role: '原形動詞', kind: 'key' },
          { t: 'me?', role: '受詞' },
        ]"
      />
      <p class="translation">他為什麼沒打給我？</p>
      <p class="remark">朋友說要打電話來，卻沒打。</p>
    </NoteSlide>

    <NoteSlide title="一般動詞用 did" mark="call">
      <div class="rows is-labeled">
        <div>
          <span class="term">是非問句</span>
          <span
            ><NoteMark sentence="Did she like the film?" :marks="['Did', 'like']" /><span
              class="translation"
              >她喜歡那部電影嗎？</span
            ></span
          >
        </div>
        <div>
          <span class="term">疑問詞問句</span>
          <span
            ><NoteMark sentence="Where did you buy that jacket?" :marks="['did', 'buy']" /><span
              class="translation"
              >你那件外套在哪裡買的？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="be 動詞用 was / were" mark="call">
      <div class="rows is-labeled">
        <div>
          <span class="term">was</span>
          <span
            ><NoteMark sentence="Was the exam difficult?" :marks="['Was']" /><span
              class="translation"
              >考試難嗎？</span
            ></span
          >
        </div>
        <div>
          <span class="term">were</span>
          <span
            ><NoteMark sentence="Where were you at eight o'clock?" :marks="['were']" /><span
              class="translation"
              >你八點的時候在哪裡？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="附加問句" mark="didn't">
      <div class="rows is-labeled">
        <div>
          <span class="term">肯定句</span>
          <span
            ><NoteMark
              sentence="You saw him yesterday, didn't you?"
              :marks="['didn\'t you']"
            /><span class="translation">你昨天見過他，對吧？</span></span
          >
        </div>
        <div>
          <span class="term">否定句</span>
          <span
            ><NoteMark sentence="She didn't come to class, did she?" :marks="['did she']" /><span
              class="translation"
              >她沒來上課吧？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="Did 後面接原形動詞" mark="call">
      <NoteFix wrong="Did you went to the party?" right="Did you go to the party?" fix="go" />
    </NoteSlide>

    <NoteSlide title="疑問詞後面接 did" mark="Why didn't">
      <NoteFix
        wrong="Where you went yesterday?"
        right="Where did you go yesterday?"
        fix="did you go"
      />
    </NoteSlide>

    <NoteSlide title="be 動詞不用 did" mark="Why didn't">
      <NoteFix
        wrong="Did you be tired after the trip?"
        right="Were you tired after the trip?"
        fix="Were"
      />
    </NoteSlide>

    <NoteSlide title="附加問句也用過去式" mark="didn't">
      <NoteFix
        wrong="We arranged to meet on Tuesday, don't we?"
        right="We arranged to meet on Tuesday, didn't we?"
        fix="didn't"
      />
    </NoteSlide>

    <NoteSlide title="Did 和 Were" mark="call">
      <div class="rows is-labeled">
        <div>
          <span class="term">一般動詞</span>
          <span
            ><NoteMark sentence="Did you enjoy the trip?" :marks="['Did', 'enjoy']" /><span
              class="translation"
              >你旅行玩得開心嗎？</span
            ></span
          >
        </div>
        <div>
          <span class="term">be 動詞</span>
          <span
            ><NoteMark sentence="Were you happy with the trip?" :marks="['Were']" /><span
              class="translation"
              >你對這趟旅行滿意嗎？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="Why did 和 Why didn't" mark="Why didn't">
      <div class="rows is-labeled">
        <div>
          <span class="term">發生了</span>
          <span
            ><NoteMark sentence="Why did he leave early?" :marks="['Why did']" /><span
              class="translation"
              >他為什麼早走？</span
            ></span
          >
        </div>
        <div>
          <span class="term">沒發生</span>
          <span
            ><NoteMark sentence="Why didn't he stay longer?" :marks="['Why didn\'t']" /><span
              class="translation"
              >他為什麼沒多待一會兒？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
