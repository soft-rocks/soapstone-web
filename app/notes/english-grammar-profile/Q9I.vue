<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-use-for-emphasis-with-did, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="did 加原形動詞，強調真的發生過" mark="did rain">
      <NoteWords
        :size="20"
        :parts="[
          { t: 'It is true that', role: '承認', kind: 'dim' },
          { t: 'it', role: '主詞' },
          { t: 'did rain', role: 'did + 原形動詞', kind: 'key', ring: true },
          { t: 'during the day,', kind: 'dim' },
          { t: 'but', role: '不同的地方', kind: 'key' },
          { t: 'it was not a sudden downpour.', kind: 'dim' },
        ]"
      />
      <p class="translation">白天確實下過雨，但並不是突然下的大雨。</p>
      <p class="remark">主辦單位寫信更正報紙對音樂節的報導。</p>
    </NoteSlide>

    <NoteSlide title="常用的情況" mark="did rain">
      <div class="rows is-labeled">
        <div>
          <span class="term">回應懷疑</span>
          <span
            ><NoteMark sentence="I did lock the door." :marks="['did lock']" /><span
              class="translation"
              >我真的有鎖門。</span
            ></span
          >
        </div>
        <div>
          <span class="term">承認一部分</span>
          <span
            ><NoteMark
              sentence="The train did arrive late, but only by five minutes."
              :marks="['did arrive']"
            /><span class="translation">火車確實晚到了，不過只晚了五分鐘。</span></span
          >
        </div>
        <div>
          <span class="term">最後真的發生</span>
          <span
            ><NoteMark
              sentence="Everyone said the new plan would fail, but it did work in the end."
              :marks="['did work']"
            /><span class="translation">大家都說新計畫會失敗，結果最後真的成功了。</span></span
          >
        </div>
        <div>
          <span class="term">感謝或感受</span>
          <span
            ><NoteMark sentence="I did enjoy the party last night." :marks="['did enjoy']" /><span
              class="translation"
              >我昨晚在派對上玩得很開心。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="did 後面接原形動詞" mark="rain">
      <NoteFix
        wrong="Our school did raised more money than last year."
        right="Our school did raise more money than last year."
        fix="raise"
      />
    </NoteSlide>

    <NoteSlide title="be 動詞不用 did 加強" mark="did">
      <NoteFix
        wrong="The hotel did be very noisy at night."
        right="The hotel really was very noisy at night."
        fix="really was"
      />
    </NoteSlide>

    <NoteSlide title="did 後面不接 could" mark="did">
      <NoteFix
        wrong="I did could finish the painting before the guests arrived."
        right="I was able to finish the painting before the guests arrived."
        fix="was able to"
      />
    </NoteSlide>

    <NoteSlide title="did 回應對方的懷疑" mark="did rain">
      <div class="rows is-labeled">
        <div>
          <span class="term">一般</span>
          <span
            ><NoteMark
              sentence="Our school fair was a big success. We had 34 games at the fair."
              :marks="['had']"
            /><span class="translation">我們學校的園遊會很成功。園遊會有 34 個遊戲。</span></span
          >
        </div>
        <div>
          <span class="term">加強</span>
          <span
            ><NoteMark
              sentence="You say there was nothing for children to do. We did have 34 games at the fair."
              :marks="['did have']"
            /><span class="translation"
              >您說沒有給小孩玩的東西。園遊會確實有 34 個遊戲。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="代替動詞的 did 後面不接動詞" mark="did rain">
      <div class="rows is-labeled">
        <div>
          <span class="term">加強</span>
          <span
            ><NoteMark
              sentence="Don't blame me. I did tell him about the meeting."
              :marks="['did tell']"
            /><span class="translation">別怪我。我真的有跟他說開會的事。</span></span
          >
        </div>
        <div>
          <span class="term">代替動詞</span>
          <span
            ><NoteMark
              sentence="Tom missed the meeting. He said I hadn't told him, but I did."
              :marks="['did.']"
            /><span class="translation">湯姆沒來開會。他說我沒跟他說，可是我有說。</span></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
