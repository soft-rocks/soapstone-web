<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 057, as slides, in the order of notes/dragon-english-basic-100/057.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide
      title="whether 子句是名詞子句，可以放在句首當主詞"
      mark="Whether a college is good or bad"
    >
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Whether', role: '連接詞', kind: 'key' },
          { t: 'a college is good or bad', role: '兩種可能' },
          { t: 'depends', role: '動詞' },
          { t: 'not only on how many books its library has', kind: 'dim' },
        ]"
      />
      <p class="remark"><code>whether</code> 子句表示兩種可能裡的哪一種。</p>
    </NoteSlide>

    <NoteSlide title="whether 子句算單數，後面的動詞用單數形" mark="depends">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Whether we go or not', role: 'whether 子句' },
          { t: 'depends', role: '單數動詞', kind: 'key', ring: true },
          { t: 'on the weather.', kind: 'dim' },
        ]"
      />
      <p class="translation">我們去不去要看天氣。</p>
    </NoteSlide>

    <NoteSlide title="whether 子句的 or not 可以省略" mark="or bad">
      <div class="rows is-labeled">
        <div>
          <span class="term">有 or not</span>
          <span
            ><NoteMark
              sentence="Whether he comes or not doesn't matter to me."
              :marks="['or not']"
            /><span class="translation">他來不來對我來說不重要。</span></span
          >
        </div>
        <div>
          <span class="term">省略 or not</span>
          <span
            ><NoteMark
              sentence="Whether I can go depends on my parents."
              :marks="['Whether I can go']"
            /><span class="translation">我能不能去要看我爸媽。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide
      title="depend on 後面接名詞，或 how、whether 開頭的名詞子句"
      mark="depends not only on"
    >
      <div class="rows is-labeled">
        <div>
          <span class="term">名詞</span>
          <span
            ><NoteMark sentence="The price depends on the size." :marks="['the size']" /><span
              class="translation"
              >價格看尺寸而定。</span
            ></span
          >
        </div>
        <div>
          <span class="term">how 子句</span>
          <span
            ><NoteMark
              sentence="It depends on how much time we have."
              :marks="['how much time we have']"
            /><span class="translation">那要看我們有多少時間。</span></span
          >
        </div>
        <div>
          <span class="term">whether 子句</span>
          <span
            ><NoteMark
              sentence="Our trip depends on whether it rains."
              :marks="['whether it rains']"
            /><span class="translation">我們的旅行要看會不會下雨。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide
      title="not only 和 also 連接兩個 depend on，兩件事都影響結果"
      :mark="['not only', 'also']"
    >
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Our trip', kind: 'dim' },
          { t: 'depends not only on', kind: 'key' },
          { t: 'the weather.', role: '第一件事' },
          { t: 'It also depends on', kind: 'key' },
          { t: 'how much money we have.', role: '第二件事' },
        ]"
      />
      <p class="translation">我們的旅行不只要看天氣，也要看我們有多少錢。</p>
      <p class="remark"><code>depend on</code> 的意思是取決於。</p>
    </NoteSlide>

    <NoteSlide title="how 帶出的名詞子句用直述句的語序，主詞在動詞前面" mark="how good they are">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'how good', role: 'how + 形容詞', kind: 'key' },
          { t: 'they', role: '主詞' },
          { t: 'are', role: '動詞', kind: 'key', ring: true },
        ]"
      />
    </NoteSlide>

    <NoteSlide
      title="how 後面可以接 many 加名詞、形容詞或副詞"
      mark="how many books its library has"
    >
      <div class="rows is-labeled">
        <div>
          <span class="term">how many + 名詞</span>
          <span
            ><NoteMark
              sentence="I don't know how many brothers he has."
              :marks="['how many brothers', 'he has']"
            /><span class="translation">我不知道他有幾個兄弟。</span></span
          >
        </div>
        <div>
          <span class="term">how + 形容詞</span>
          <span
            ><NoteMark
              sentence="Tell me how old your sister is."
              :marks="['how old', 'your sister is']"
            /><span class="translation">告訴我你妹妹幾歲。</span></span
          >
        </div>
        <div>
          <span class="term">how + 副詞</span>
          <span
            ><NoteMark
              sentence="Your score depends on how well you answer the last question."
              :marks="['how well', 'you answer']"
            /><span class="translation">你的分數取決於你最後一題答得多好。</span></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>
</template>
