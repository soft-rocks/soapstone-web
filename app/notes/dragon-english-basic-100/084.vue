<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 084, as slides, in the order of notes/dragon-english-basic-100/084.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide title="時間加 's 或 ' 再加 walk，表示走路要多久" mark="twenty minutes’ walk">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'The movie theater is about', kind: 'dim' },
          { t: 'twenty minutes’', role: '時間', kind: 'key' },
          { t: 'walk', role: '走路', kind: 'key' },
          { t: 'from here,', role: '起點' },
        ]"
      />
      <p class="remark">開車要多久用 <code>drive</code>。</p>
    </NoteSlide>

    <NoteSlide title="時間單位是單數時加 's，複數時只加撇號" mark="minutes’">
      <div class="rows is-labeled">
        <div>
          <span class="term">複數<br /><i>s'</i></span>
          <span
            ><NoteMark
              sentence="The station is ten minutes' walk from my house."
              :marks="['minutes\'']"
            /><span class="translation">車站離我家走路十分鐘。</span></span
          >
        </div>
        <div>
          <span class="term">單數<br /><i>'s</i></span>
          <span
            ><NoteMark
              sentence="The airport is an hour's drive from the city."
              :marks="['hour\'s']"
            /><span class="translation">機場離市區開車一個小時。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide
      title="寫成 a five-minute walk 時，時間單位用單數，中間加連字號"
      mark="twenty minutes’ walk"
    >
      <NoteWords
        :size="28"
        :parts="[
          { t: 'My school is', kind: 'dim' },
          { t: 'a', role: '冠詞' },
          { t: 'five-minute', role: '數字 + 單數時間單位', kind: 'key', ring: true },
          { t: 'walk', role: '走路' },
          { t: 'from here.', kind: 'dim' },
        ]"
      />
      <p class="translation">我的學校離這裡走路五分鐘。</p>
    </NoteSlide>

    <NoteSlide title="It takes 加時間加 to 不定詞，表示做一件事需要多少時間" mark="it takes">
      <NoteWords
        :size="24"
        :move="{ from: 2, to: 0 }"
        :parts="[
          { t: 'it', role: '形式主詞', kind: 'key' },
          { t: 'takes only five minutes', role: 'take + 時間' },
          { t: 'to get there by subway.', role: '真正的主詞', kind: 'key' },
        ]"
      />
    </NoteSlide>

    <NoteSlide title="要說是誰花時間，人放在 take 後面" mark="takes">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'It', kind: 'dim' },
          { t: 'took', role: 'take 的過去式' },
          { t: 'me', role: '人', kind: 'key', ring: true },
          { t: 'two hours', role: '時間' },
          { t: 'to finish my homework.', role: 'to + 動詞原形' },
        ]"
      />
      <p class="translation">我花了兩個小時寫完功課。</p>
      <p class="remark">
        <code>take</code> 的時態跟著句子變，像 <code>takes</code>、<code>took</code>、<code
          >will take</code
        >。
      </p>
    </NoteSlide>

    <NoteSlide title="問要花多少時間，用 How long does it take 開頭" mark="it takes">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'How long', role: '多久', kind: 'key' },
          { t: 'does it take', role: '助動詞 + it + take', kind: 'key' },
          { t: 'to get to the zoo?', role: 'to + 動詞原形' },
        ]"
      />
      <p class="translation">到動物園要多久？</p>
    </NoteSlide>

    <NoteSlide title="there、here、home 是副詞，前面不加 to" mark="get there">
      <div class="rows is-labeled">
        <div>
          <span class="term">there</span>
          <span
            ><NoteMark sentence="We went there by taxi." :marks="['went there']" /><span
              class="translation"
              >我們搭計程車去那裡。</span
            ></span
          >
        </div>
        <div>
          <span class="term">here</span>
          <span
            ><NoteMark sentence="How did you get here?" :marks="['get here']" /><span
              class="translation"
              >你是怎麼來這裡的？</span
            ></span
          >
        </div>
        <div>
          <span class="term">home</span>
          <span
            ><NoteMark sentence="I got home at nine last night." :marks="['got home']" /><span
              class="translation"
              >我昨晚九點到家。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="表示起點的 from 可以放在 here 和 there 前面" mark="from here">
      <div class="rows is-labeled">
        <div>
          <span class="term">from here</span>
          <span
            ><NoteMark
              sentence="How far is it from here to the hospital?"
              :marks="['from here']"
            /><span class="translation">從這裡到醫院有多遠？</span></span
          >
        </div>
        <div>
          <span class="term">from there</span>
          <span
            ><NoteMark
              sentence="We flew to Bangkok and took a bus from there."
              :marks="['from there']"
            /><span class="translation">我們飛到曼谷，再從那裡搭巴士。</span></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>
</template>
