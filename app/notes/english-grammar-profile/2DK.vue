<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// inverted-conditional-1123, as slides, in the order of content.md. One point per slide: the title
// names it, the diagram shows it, and `mark` circles the matching words of the note's sentence.
// Keep the parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="should 放到主詞前面，取代 if" mark="Should">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Should', role: '取代 if', kind: 'key' },
          { t: 'you', role: '主詞' },
          { t: 'see anything suspicious,', role: '原形動詞' },
          { t: 'call the police.', role: '主要子句', kind: 'dim' },
        ]"
      />
      <p class="translation">如果您看到任何可疑的東西，請報警。</p>
      <p class="remark">這個句型說未來可能發生的事，用在正式的書面文字。</p>
    </NoteSlide>

    <NoteSlide title="主要子句用祈使句、will 或現在式" mark="please do not hesitate to ask.">
      <div class="rows is-labeled">
        <div>
          <span class="term">祈使句<br /><i>要對方做的事</i></span>
          <span
            ><NoteMark
              sentence="Should the lift break down, use the stairs."
              :marks="['use the stairs.']"
            /><span class="translation">如果電梯故障，請走樓梯。</span></span
          >
        </div>
        <div>
          <span class="term">will<br /><i>會發生的事</i></span>
          <span
            ><NoteMark
              sentence="Should it rain on Saturday, the concert will move to the town hall."
              :marks="['will move']"
            /><span class="translation">如果星期六下雨，音樂會會改到市政廳舉行。</span></span
          >
        </div>
        <div>
          <span class="term">現在式<br /><i>固定的規定</i></span>
          <span
            ><NoteMark
              sentence="Should you choose the premium plan, you get free delivery."
              :marks="['get']"
            /><span class="translation">如果您選高級方案，就享有免運。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="Should + there + be + 名詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">there be</span>
          <span
            ><NoteMark
              sentence="Should there be a delay, we will let you know."
              :marks="['Should there be']"
            /><span class="translation">如果有延誤，我們會通知您。</span></span
          >
        </div>
        <div>
          <span class="term">there be</span>
          <span
            ><NoteMark
              sentence="Should there be a fire, the doors will open automatically."
              :marks="['Should there be']"
            /><span class="translation">如果發生火災，門會自動打開。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="否定和被動">
      <div class="rows is-labeled">
        <div>
          <span class="term">not + 原形動詞<br /><i>否定</i></span>
          <span
            ><NoteMark
              sentence="Should the medicine not help, see your doctor again."
              :marks="['not help,']"
            /><span class="translation">如果這種藥沒有幫助，請再去看醫生。</span></span
          >
        </div>
        <div>
          <span class="term">be + 過去分詞<br /><i>被動</i></span>
          <span
            ><NoteMark
              sentence="Should your flight be delayed, the airline will pay for a hotel."
              :marks="['be delayed,']"
            /><span class="translation">如果您的航班延誤，航空公司會出飯店的錢。</span></span
          >
        </div>
      </div>
      <p class="remark"><code>not</code> 放在主詞後面。</p>
    </NoteSlide>

    <NoteSlide title="原句：正式信件的結尾" mark="require">
      <NoteWords
        :size="20"
        :parts="[
          { t: 'Should', role: '取代 if' },
          { t: 'you', role: '主詞' },
          { t: 'require any further information,', role: '原形動詞' },
          { t: 'please do not hesitate to ask.', role: '主要子句（祈使句）', kind: 'key' },
        ]"
      />
      <p class="translation">如果您需要任何進一步的資訊，請不要客氣，儘管發問。</p>
      <p class="remark">
        <code>require</code> 是 <code>need</code> 的正式說法。<code>do not hesitate to ask</code>
        請對方儘管發問。
      </p>
    </NoteSlide>

    <NoteSlide title="there 放在 should 後面，be 放在 there 後面">
      <NoteFix
        wrong="Should be there any delays, we will inform you."
        right="Should there be any delays, we will inform you."
        fix="there be"
      />
    </NoteSlide>

    <NoteSlide title="should 後面接原形動詞" mark="require">
      <NoteFix
        wrong="Should you needed more time, please ask."
        right="Should you need more time, please ask."
        fix="need"
      />
    </NoteSlide>

    <NoteSlide title="倒裝的句型要有主詞" mark="you">
      <NoteFix
        wrong="Should need a ticket, ask the driver."
        right="Should you need a ticket, ask the driver."
        fix="you"
      />
    </NoteSlide>

    <NoteSlide title="If + 主詞 + should 意思一樣，也用在口語">
      <div class="rows is-labeled">
        <div>
          <span class="term">If you should</span>
          <span
            ><NoteMark
              sentence="If you should need a lift home, just ask."
              :marks="['If you should']"
            /><span class="translation">如果你需要人載你回家，儘管說。</span></span
          >
        </div>
        <div>
          <span class="term">If it should</span>
          <span
            ><NoteMark
              sentence="If it should snow tonight, the school will close."
              :marks="['If it should']"
            /><span class="translation">如果今晚下雪，學校會停課。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="should 放在主詞後面說建議">
      <div class="rows is-labeled">
        <div>
          <span class="term">主詞 + should<br /><i>建議</i></span>
          <span
            ><NoteMark sentence="You should check the timetable." :marks="['You should']" /><span
              class="translation"
              >你應該查一下時刻表。</span
            ></span
          >
        </div>
        <div>
          <span class="term">Should + 主詞<br /><i>條件</i></span>
          <span
            ><NoteMark
              sentence="Should you check the timetable, you will see the change."
              :marks="['Should you']"
            /><span class="translation">如果你查一下時刻表，就會看到這個變動。</span></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
