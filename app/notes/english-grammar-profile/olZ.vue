<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// future-use-be-going-to, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="was / were going to 說過去那時候的未來" mark="were going to meet">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'We', role: '主詞', kind: 'dim' },
          { t: 'were going to', role: 'be 的過去式 + going to', kind: 'key', ring: true },
          { t: 'meet', role: '原形動詞', kind: 'key' },
          { t: 'two days later', role: '約定之後' },
          { t: 'in the square next to the center.', kind: 'dim' },
        ]"
      />
      <p class="translation">我們本來打算兩天後在市中心旁邊的廣場見面。</p>
      <p class="remark">約定在過去，見面在約定之後。</p>
    </NoteSlide>

    <NoteSlide title="was 和 were 跟著主詞變化" mark="were">
      <div class="rows is-labeled">
        <div>
          <span class="term">I / he / she / it + was</span>
          <span
            ><NoteMark
              sentence="She was going to return the phone, but then she saw her own number on the screen."
              :marks="['was']"
            /><span class="translation"
              >她本來要把手機還回去，可是後來她在螢幕上看到自己的號碼。</span
            ></span
          >
        </div>
        <div>
          <span class="term">you / we / they + were</span>
          <span
            ><NoteMark
              sentence="We were going to have a picnic, so we got up early."
              :marks="['were']"
            /><span class="translation">我們打算去野餐，所以很早就起床了。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="計畫沒有完成時，後面常接 but 說明原因" mark="were going to">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'She was going to return the phone,', role: '過去的計畫' },
          { t: 'but', role: '連接詞', kind: 'key', ring: true },
          { t: 'then she saw her own number on the screen.', role: '沒完成的原因' },
        ]"
      />
      <p class="translation">她本來要把手機還回去，可是後來她在螢幕上看到自己的號碼。</p>
    </NoteSlide>

    <NoteSlide title="也可以說過去預料會發生的事" mark="were going to">
      <div class="rows">
        <div>
          <span
            ><NoteMark
              sentence="It was going to rain, so we stayed inside."
              :marks="['was going to rain']"
            /><span class="translation">看起來要下雨了，所以我們待在屋裡。</span></span
          >
        </div>
        <div>
          <span
            ><NoteMark
              sentence="She didn't know what was going to happen."
              :marks="['was going to happen']"
            /><span class="translation">她不知道接下來會發生什麼事。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="主詞是 we，用 were" mark="were">
      <NoteFix
        wrong="We was going to meet in the square."
        right="We were going to meet in the square."
        fix="were"
      />
    </NoteSlide>

    <NoteSlide title="going to 後面接原形動詞" mark="meet">
      <NoteFix wrong="I was going to calling you." right="I was going to call you." fix="call" />
    </NoteSlide>

    <NoteSlide title="過去的意思由 were 表示，to 後面用原形" mark="meet">
      <NoteFix
        wrong="They were going to visited us."
        right="They were going to visit us."
        fix="visit"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
