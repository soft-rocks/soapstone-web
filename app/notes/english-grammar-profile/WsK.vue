<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// negation-form-questions, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="否定疑問句把助動詞和 n't 放在主詞前面">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'Aren\'t', role: '助動詞 + n\'t', kind: 'key' },
          { t: 'you', role: '主詞' },
          { t: 'excited about it?', role: '補語', kind: 'dim' },
        ]"
      />
      <p class="translation">這件事你不覺得興奮嗎？</p>
    </NoteSlide>

    <NoteSlide title="do、can 這類助動詞也一樣放在主詞前面" mark="Aren't">
      <div class="rows is-labeled">
        <div>
          <span class="term">Don't</span>
          <span
            ><NoteMark sentence="Doesn't she like fish?" :marks="['Doesn\'t']" /><span
              class="translation"
              >她不喜歡魚嗎？</span
            ></span
          >
        </div>
        <div>
          <span class="term">Can't</span>
          <span
            ><NoteMark
              sentence="Can't you hear the music from next door?"
              :marks="['Can\'t']"
            /><span class="translation">你聽不到隔壁的音樂嗎？</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="不縮寫時，not 放在主詞後面" mark="Aren't">
      <NoteWords
        :size="32"
        :parts="[
          { t: 'Did', role: '助動詞' },
          { t: 'you', role: '主詞' },
          { t: 'not', role: 'not', kind: 'key', ring: true },
          { t: 'hear the alarm?', role: '原形動詞' },
        ]"
      />
      <p class="translation">你沒聽到警報嗎？</p>
      <p class="remark">這個形式很正式，說話時很少用。</p>
    </NoteSlide>

    <NoteSlide title="肯定的直述句接否定的附加問句，否定的接肯定的" mark="Aren't">
      <div class="rows is-labeled">
        <div>
          <span class="term">肯定 + 否定</span>
          <span
            ><NoteMark
              sentence="Your cousin works in Paris, doesn't he?"
              :marks="['aren\'t you']"
            /><span class="translation">你表哥在巴黎工作，對吧？</span></span
          >
        </div>
        <div>
          <span class="term">否定 + 肯定</span>
          <span
            ><NoteMark sentence="You haven't seen my keys, have you?" :marks="['have you']" /><span
              class="translation"
              >你沒看到我的鑰匙吧？</span
            ></span
          >
        </div>
      </div>
      <p class="remark">
        直述句沒有助動詞時，附加問句用 <code>do</code>、<code>does</code> 或 <code>did</code>。
      </p>
    </NoteSlide>

    <NoteSlide title="I am 的否定附加問句用 aren't I" mark="Aren't">
      <NoteWords
        :size="32"
        :parts="[
          { t: 'I\'m next,', role: 'I am' },
          { t: 'aren\'t I?', role: '附加問句', kind: 'key' },
        ]"
      />
      <p class="translation">下一個是我，對吧？</p>
    </NoteSlide>

    <NoteSlide title="n't 和助動詞連在一起，放在主詞前面" mark="Aren't">
      <NoteFix wrong="Is it n't time for lunch?" right="Isn't it time for lunch?" fix="Isn't" />
    </NoteSlide>

    <NoteSlide title="附加問句不重複動詞">
      <NoteFix
        wrong="You've finished, haven't you finished?"
        right="You've finished, haven't you?"
        fix="haven't you"
      />
    </NoteSlide>

    <NoteSlide title="直述句沒有助動詞時，附加問句用 do">
      <NoteFix
        wrong="She lives near you, isn't she?"
        right="She lives near you, doesn't she?"
        fix="doesn't"
      />
    </NoteSlide>

    <NoteSlide title="附加問句用代名詞，不用名詞" mark="you">
      <NoteFix
        wrong="Your brother is a doctor, isn't your brother?"
        right="Your brother is a doctor, isn't he?"
        fix="he"
      />
    </NoteSlide>

    <NoteSlide title="I am 的附加問句不是 amn't I">
      <NoteFix wrong="I'm in the team, amn't I?" right="I'm in the team, aren't I?" fix="aren't" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
