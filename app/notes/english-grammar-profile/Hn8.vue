<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-suggestions-1216, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="用 or 連起兩個 could，讓對方選一個做法" mark="or">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'We could take the bus,', role: '第一個做法', kind: 'key' },
          { t: 'or', role: '連接詞', kind: 'key', ring: true },
          { t: 'we could ask my parents', role: '第二個做法', kind: 'key' },
          { t: 'to take us there.', role: 'ask 的內容', kind: 'dim' },
        ]"
      />
      <p class="translation">我們可以搭公車，或是請我爸媽載我們去。</p>
      <p class="remark">說話者沒有決定要怎麼去。</p>
    </NoteSlide>

    <NoteSlide title="We could 一起做，You could 建議對方自己做" mark="We could">
      <div class="rows is-labeled">
        <div>
          <span class="term">We could</span>
          <span
            ><NoteMark
              sentence="We could go by train, or we could drive."
              :marks="['We could', 'we could#2']"
            /><span class="translation">我們可以搭火車，或是開車去。</span></span
          >
        </div>
        <div>
          <span class="term">You could</span>
          <span
            ><NoteMark
              sentence="If you want to visit an interesting place near Paris, you could go to Versailles."
              :marks="['you could']"
            /><span class="translation"
              >如果你想去巴黎附近有趣的地方，你可以去凡爾賽宮。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="句尾加 if you want，對方不想也沒關係" mark="We could">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'We could go bowling later,', role: 'We could + 原形動詞' },
          { t: 'if you want.', role: '對方決定', kind: 'key', ring: true },
        ]"
      />
      <p class="translation">你想的話，我們等一下可以去打保齡球。</p>
    </NoteSlide>

    <NoteSlide title="could 後面直接接原形動詞，不加 to" mark="take">
      <NoteFix wrong="We could to go to the zoo." right="We could go to the zoo." fix="go" />
    </NoteSlide>

    <NoteSlide title="建議說的是現在或未來，could 後面不接過去式" mark="take">
      <NoteFix wrong="You could went to the museum." right="You could go to the museum." fix="go" />
    </NoteSlide>

    <NoteSlide title="or 後面的 could 也接原形動詞" mark="ask">
      <NoteFix
        wrong="We could walk, or we could taking a taxi."
        right="We could walk, or we could take a taxi."
        fix="take"
      />
    </NoteSlide>

    <NoteSlide title="Let's 已經決定，We could 讓對方選" mark="We could">
      <div class="rows is-labeled">
        <div>
          <span class="term">Let's<br /><i>已經決定</i></span>
          <span
            ><NoteMark sentence="Let's take the bus." :marks="['Let\'s']" /><span
              class="translation"
              >我們搭公車吧。</span
            ></span
          >
        </div>
        <div>
          <span class="term">We could<br /><i>讓對方選</i></span>
          <span
            ><NoteMark
              sentence="We could take the bus, or we could ask my parents to take us there."
              :marks="['We could', 'we could#2']"
            /><span class="translation">我們可以搭公車，或是請我爸媽載我們去。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="Why don't we 用問句提建議，語氣更積極" mark="We could">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Why don\'t we', role: '問句', kind: 'key', ring: true },
          { t: 'eat out tonight?', kind: 'dim' },
        ]"
      />
      <p class="translation">我們今晚何不出去吃？</p>
    </NoteSlide>

    <NoteSlide title="We can 是安排上做得到，We could 比較客氣" mark="We could">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'We can', role: '做得到', kind: 'key', ring: true },
          { t: 'meet at the station at six.', kind: 'dim' },
        ]"
      />
      <p class="translation">我們可以六點在車站碰面。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
