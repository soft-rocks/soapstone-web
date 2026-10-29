<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 065, as slides, in the order of notes/dragon-english-basic-100/065.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide title="a few 是有一些，few 是很少，very few 是非常少" mark="very few">
      <div class="rows is-labeled">
        <div>
          <span class="term">a few</span>
          <span
            ><NoteMark sentence="I have a few friends in Osaka." :marks="['a few']" /><span
              class="translation"
              >我在大阪有幾個朋友。</span
            ></span
          >
        </div>
        <div>
          <span class="term">few</span>
          <span
            ><NoteMark sentence="Few people live on this small island." :marks="['Few']" /><span
              class="translation"
              >很少人住在這個小島上。</span
            ></span
          >
        </div>
        <div>
          <span class="term">very few</span>
          <span
            ><NoteMark
              sentence="Very few students came to school during the typhoon."
              :marks="['Very few']"
            /><span class="translation">颱風天很少學生來學校。</span></span
          >
        </div>
      </div>
      <p class="remark">
        <code>a few</code>、<code>few</code>、<code>very few</code> 後面都接可數名詞複數。
      </p>
    </NoteSlide>

    <NoteSlide title="few 後面接特定的一群人或東西時，先加 of" mark="very few of them">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'very few', role: '數量', kind: 'key' },
          { t: 'of', role: '介系詞', kind: 'key' },
          { t: 'them', role: '特定的一群人' },
          { t: 'know how to use them effectively.', kind: 'dim' },
        ]"
      />
    </NoteSlide>

    <NoteSlide title="of 後面接代名詞、the 加名詞或所有格加名詞" mark="of them">
      <div class="rows is-labeled">
        <div>
          <span class="term">代名詞</span>
          <span
            ><NoteMark sentence="Very few of us knew the answer." :marks="['us']" /><span
              class="translation"
              >我們之中很少人知道答案。</span
            ></span
          >
        </div>
        <div>
          <span class="term">the + 名詞</span>
          <span
            ><NoteMark
              sentence="Very few of the students answered the last question."
              :marks="['the students']"
            /><span class="translation">很少學生答出最後一題。</span></span
          >
        </div>
        <div>
          <span class="term">所有格 + 名詞</span>
          <span
            ><NoteMark
              sentence="A few of my classmates know how to play the guitar."
              :marks="['my classmates']"
            /><span class="translation">我班上有幾個同學會彈吉他。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="how to 加動詞原形表示做某件事的方法" mark="how to use">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'know', role: '動詞', kind: 'dim' },
          { t: 'how to', role: '方法', kind: 'key' },
          { t: 'use', role: '動詞原形', kind: 'key' },
          { t: 'them effectively.', kind: 'dim' },
        ]"
      />
      <p class="remark"><code>how to use them</code> 是 <code>know</code> 的受詞。</p>
    </NoteSlide>

    <NoteSlide title="how to 常放在 know、show、tell 後面當受詞" mark="know how to">
      <div class="rows is-labeled">
        <div>
          <span class="term">know</span>
          <span
            ><NoteMark
              sentence="Do you know how to get to the station?"
              :marks="['know', 'how to get']"
            /><span class="translation">你知道怎麼去車站嗎？</span></span
          >
        </div>
        <div>
          <span class="term">show</span>
          <span
            ><NoteMark
              sentence="My mother showed me how to make dumplings."
              :marks="['showed', 'how to make']"
            /><span class="translation">我媽媽教我怎麼包餃子。</span></span
          >
        </div>
        <div>
          <span class="term">tell</span>
          <span
            ><NoteMark
              sentence="Could you tell me how to use this machine?"
              :marks="['tell', 'how to use']"
            /><span class="translation">你可以告訴我怎麼用這台機器嗎？</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="動詞有受詞時，副詞放在受詞後面" mark="effectively">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'use', role: '動詞' },
          { t: 'them', role: '受詞' },
          { t: 'effectively.', role: '副詞', kind: 'key', ring: true },
        ]"
      />
      <p class="remark">副詞不放在動詞和受詞中間。</p>
    </NoteSlide>

    <NoteSlide title="effectively、carefully、well 說明動作做得怎麼樣" mark="effectively">
      <div class="rows is-labeled">
        <div>
          <span class="term">carefully</span>
          <span
            ><NoteMark sentence="Please read the question carefully." :marks="['carefully']" /><span
              class="translation"
              >請仔細讀題目。</span
            ></span
          >
        </div>
        <div>
          <span class="term">well</span>
          <span
            ><NoteMark sentence="He uses his time well." :marks="['well']" /><span
              class="translation"
              >他很會利用時間。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>
</template>
