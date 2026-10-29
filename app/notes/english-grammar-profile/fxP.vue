<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// sequence-of-tenses-1152, as slides, in the order of content.md. One point per slide: the title
// names it, the diagram shows it, and `mark` circles the matching words of the note's sentence.
// Keep the parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="told + 聽的人 + to + 動詞，轉述要求">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'At the airport', kind: 'dim' },
          { t: 'they', role: '主詞' },
          { t: 'told him', role: 'told + 聽的人' },
          { t: 'to come', role: 'to + 動詞', kind: 'key' },
          { t: 'the next morning.', role: '時間詞', kind: 'key' },
        ]"
      />
      <p class="translation">在機場，他們叫他隔天早上再來。</p>
    </NoteSlide>

    <NoteSlide title="原話的 tomorrow morning 換成 the next morning" mark="the next morning">
      <div class="rows is-labeled">
        <div>
          <span class="term">原話</span>
          <span
            ><NoteMark sentence='"Come tomorrow morning."' :marks="['tomorrow morning']" /><span
              class="translation"
              >「明天早上再來。」</span
            ></span
          >
        </div>
        <div>
          <span class="term">轉述</span>
          <span
            ><NoteMark
              sentence="They told him to come the next morning."
              :marks="['to come', 'the next morning']"
            /><span class="translation">他們叫他隔天早上再來。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="轉述說出的事，接 that 子句，will 換成 would">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'Her husband told me', kind: 'dim' },
          { t: 'they would fly back to Germany', role: '子句', kind: 'key' },
          { t: 'the following day.', role: '時間詞', kind: 'key' },
        ]"
      />
      <p class="translation">她先生跟我說，他們隔天就要飛回德國。</p>
    </NoteSlide>

    <NoteSlide title="時間已經過了：換成以原話說出那天為準的時間詞" mark="the next morning">
      <div class="rows is-labeled">
        <div>
          <span class="term">tomorrow</span>
          <span>the next day / the following day</span>
        </div>
        <div>
          <span class="term">tomorrow morning</span>
          <span>the next morning / the following morning</span>
        </div>
        <div>
          <span class="term">tomorrow night</span>
          <span>the next night / the following night</span>
        </div>
        <div>
          <span class="term">next week / month / year</span>
          <span>the following week / month / year</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="時間還沒到：時間詞照原話">
      <div class="rows is-labeled">
        <div>
          <span class="term">時態照原話</span>
          <span
            ><NoteMark
              sentence="Her text said she's coming home next month."
              :marks="['she\'s coming', 'next month']"
            /><span class="translation">她的簡訊說她下個月要回家。</span></span
          >
        </div>
        <div>
          <span class="term">will → would</span>
          <span
            ><NoteMark
              sentence="He said he would come home next month."
              :marks="['would', 'next month']"
            /><span class="translation">他說他下個月會回家。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="時間還沒到：if 子句和主要子句照原話">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'The coach said that', kind: 'dim' },
          { t: 'if I play this well next time,', role: 'if 子句', kind: 'key' },
          { t: 'I\'ll be in the team.', role: '主要子句', kind: 'key' },
        ]"
      />
      <p class="translation">教練說，如果我下次也打得這麼好，就能進球隊。</p>
    </NoteSlide>

    <NoteSlide title="時間已經過了，next year 要換" mark="the next morning">
      <NoteFix
        wrong="In 2020, my uncle said he would retire next year."
        right="In 2020, my uncle said he would retire the following year."
        fix="the following year"
      />
    </NoteSlide>

    <NoteSlide title="said 後面不直接接聽的人" mark="told him">
      <NoteFix
        wrong="The nurse said me to come back the next day."
        right="The nurse told me to come back the next day."
        fix="told me"
      />
    </NoteSlide>

    <NoteSlide title="聽的人後面接 to + 動詞" mark="to come">
      <NoteFix
        wrong="The guard told us wait outside until the following morning."
        right="The guard told us to wait outside until the following morning."
        fix="to wait"
      />
    </NoteSlide>

    <NoteSlide title="to + 動詞轉述要求，that 子句轉述一件事" mark="to come">
      <div class="rows is-labeled">
        <div>
          <span class="term">要求</span>
          <span
            ><NoteMark
              sentence="They told him to come the next morning."
              :marks="['to come']"
            /><span class="translation">他們叫他隔天早上再來。</span></span
          >
        </div>
        <div>
          <span class="term">一件事</span>
          <span
            ><NoteMark
              sentence="They told him that he could come the next morning."
              :marks="['that he could come']"
            /><span class="translation">他們跟他說，他隔天早上可以來。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="the next day 和 tomorrow 指的日子不同">
      <div class="rows is-labeled">
        <div>
          <span class="term">說話那天的隔天</span>
          <span
            ><NoteMark
              sentence="She said she would call me the next day."
              :marks="['the next day']"
            /><span class="translation">她說她隔天會打給我。</span></span
          >
        </div>
        <div>
          <span class="term">現在的明天</span>
          <span
            ><NoteMark sentence="She said she'll call me tomorrow." :marks="['tomorrow']" /><span
              class="translation"
              >她說她明天會打給我。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
