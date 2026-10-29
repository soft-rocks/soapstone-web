<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// reported-speech-form-use-temporal-shifts-past, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between
// two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="轉述過去說的話，時態和時間詞都後移">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'She had told me', role: '引述動詞' },
          { t: 'the previous day', role: '時間詞', kind: 'key' },
          { t: 'that', role: 'that' },
          { t: 'she had something important to tell me.', role: '子句（時態後移）', kind: 'key' },
        ]"
      />
      <p class="translation">她前一天就跟我說過，她有重要的事要告訴我。</p>
      <p class="remark">原話是 "I have something important to tell you."</p>
    </NoteSlide>

    <NoteSlide title="簡單式和進行式往過去移一格" mark="she had something">
      <div class="rows is-labeled">
        <div>
          <span class="term">have → had</span>
          <span
            ><NoteMark sentence="She said she had something to tell me." :marks="['had']" /><span
              class="translation"
              >她說她有事要告訴我。</span
            ></span
          >
        </div>
        <div>
          <span class="term">am working → was working</span>
          <span
            ><NoteMark sentence="He said he was working late." :marks="['was working']" /><span
              class="translation"
              >他說他要加班。</span
            ></span
          >
        </div>
        <div>
          <span class="term">lost → had lost</span>
          <span
            ><NoteMark sentence="He told me he had lost his keys." :marks="['had lost']" /><span
              class="translation"
              >他跟我說他把鑰匙弄丟了。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="完成式和未來的說法也往過去移一格" mark="she had something">
      <div class="rows is-labeled">
        <div>
          <span class="term">have finished → had finished</span>
          <span
            ><NoteMark sentence="She said she had finished." :marks="['had finished']" /><span
              class="translation"
              >她說她做完了。</span
            ></span
          >
        </div>
        <div>
          <span class="term">will → would</span>
          <span
            ><NoteMark sentence="Tom said he would call me." :marks="['would']" /><span
              class="translation"
              >Tom 說他會打給我。</span
            ></span
          >
        </div>
        <div>
          <span class="term">are going to → were going to</span>
          <span
            ><NoteMark
              sentence="They said they were going to move."
              :marks="['were going to']"
            /><span class="translation">他們說他們要搬家。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="日子的時間詞換成以原話那一天為準的說法" mark="the previous day">
      <div class="rows is-labeled">
        <div>
          <span class="term">yesterday</span>
          <span>the day before、the previous day</span>
        </div>
        <div>
          <span class="term">today</span>
          <span>that day</span>
        </div>
        <div>
          <span class="term">tonight</span>
          <span>that night</span>
        </div>
        <div>
          <span class="term">tomorrow</span>
          <span>the next day、the following day</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="週、ago、now、here、this 也換成以原話為準的說法" mark="the previous day">
      <div class="rows is-labeled">
        <div>
          <span class="term">last week</span>
          <span>the week before、the previous week</span>
        </div>
        <div>
          <span class="term">next week</span>
          <span>the following week</span>
        </div>
        <div>
          <span class="term">two days ago</span>
          <span>two days before、two days earlier</span>
        </div>
        <div>
          <span class="term">now</span>
          <span>then、at that time</span>
        </div>
        <div>
          <span class="term">here</span>
          <span>there</span>
        </div>
        <div>
          <span class="term">this</span>
          <span>that</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="tomorrow 和 yesterday 轉述時換掉" mark="the previous day">
      <div class="rows is-labeled">
        <div>
          <span class="term">tomorrow</span>
          <span
            ><NoteMark
              sentence="He said he would see me the next day."
              :marks="['the next day']"
            /><span class="translation">他說他隔天會跟我見面。</span></span
          >
        </div>
        <div>
          <span class="term">yesterday</span>
          <span
            ><NoteMark
              sentence="She told me she had seen her the day before."
              :marks="['the day before']"
            /><span class="translation">她跟我說，她前一天見過她。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="說話的時間已經過去，tomorrow 換成 the next day">
      <NoteFix
        wrong="Last month, Tom told me he would call me tomorrow."
        right="Last month, Tom told me he would call me the next day."
        fix="the next day"
      />
    </NoteSlide>

    <NoteSlide title="the following day 已經過去，will 後移成 would">
      <NoteFix
        wrong="She said that she will come the following day."
        right="She said that she would come the following day."
        fix="would"
      />
    </NoteSlide>

    <NoteSlide title="比說話更早的事，用過去完成式" mark="had">
      <NoteFix
        wrong="He told me the day before that he has lost his keys."
        right="He told me the day before that he had lost his keys."
        fix="had lost"
      />
    </NoteSlide>

    <NoteSlide title="tell 後面要接聽的人" mark="told me">
      <NoteFix
        wrong="She told that she was tired."
        right="She told me that she was tired."
        fix="told me"
      />
    </NoteSlide>

    <NoteSlide title="到現在還成立的事，時態可以不後移">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'She said she', kind: 'dim' },
          { t: 'lives', role: '現在簡單式', kind: 'key' },
          { t: 'in Paris.', kind: 'dim' },
        ]"
      />
      <p class="translation">她說她住在巴黎。</p>
    </NoteSlide>

    <NoteSlide title="同一天轉述，today 不用換">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'This morning, Mark said he\'s leaving', kind: 'dim' },
          { t: 'today.', role: 'today', kind: 'key' },
        ]"
      />
      <p class="translation">Mark 今天早上說他今天要走。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
