<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adverbs-use-sequencing, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="first 放在第一件事前面，and then 接第二件事">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'First', role: '順序副詞', kind: 'key' },
          { t: 'we had dinner in a very expensive restaurant,', role: '第一件事' },
          { t: 'and then', role: '連接詞 + 順序副詞', kind: 'key' },
          { t: 'we went to a disco.', role: '第二件事' },
        ]"
      />
      <p class="translation">我們先在一家很貴的餐廳吃晚餐，然後去了一家迪斯可舞廳。</p>
    </NoteSlide>

    <NoteSlide title="after that 放在新的句子的句首，後面加逗號">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'First, we played some games.', role: '第一件事', kind: 'dim' },
          { t: 'After that,', role: '順序副詞', kind: 'key' },
          { t: 'a magician did some tricks.', role: '第二件事' },
        ]"
      />
      <p class="translation">我們先玩了一些遊戲。之後一位魔術師表演了幾個魔術。</p>
    </NoteSlide>

    <NoteSlide title="next 接下一步，finally 接最後一步">
      <div class="rows is-labeled">
        <div>
          <span class="term">next</span>
          <span
            ><NoteMark sentence="Next, put the eggs in the bowl." :marks="['Next,']" /><span
              class="translation"
              >接下來把蛋放進碗裡。</span
            ></span
          >
        </div>
        <div>
          <span class="term">finally</span>
          <span
            ><NoteMark sentence="Finally, add some salt." :marks="['Finally,']" /><span
              class="translation"
              >最後加一點鹽。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="then 可以放在 and 後面，也可以放在主詞後面" mark="then">
      <div class="rows is-labeled">
        <div>
          <span class="term">and 後面</span>
          <span
            ><NoteMark
              sentence="We went to the museum, and then we had lunch."
              :marks="['and then']"
            /><span class="translation">我們去了博物館，然後吃午餐。</span></span
          >
        </div>
        <div>
          <span class="term">主詞後面<br /><i>比較正式</i></span>
          <span
            ><NoteMark
              sentence="We went to the museum and we then had lunch."
              :marks="['we then']"
            /><span class="translation">我們去了博物館，接著吃了午餐。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="新的句子的句首用 after that，不用 after">
      <NoteFix
        wrong="We went shopping. After, we had a coffee."
        right="We went shopping. After that, we had a coffee."
        fix="After that,"
      />
    </NoteSlide>

    <NoteSlide title="排步驟用 first，不用 at first" mark="First">
      <NoteFix
        wrong="At first, wash your hands. Then cut the vegetables."
        right="First, wash your hands. Then cut the vegetables."
        fix="First,"
      />
    </NoteSlide>

    <NoteSlide title="and 後面接 then，不接 after" mark="and then">
      <NoteFix
        wrong="I finished my work and after I went home."
        right="I finished my work and then I went home."
        fix="and then"
      />
    </NoteSlide>

    <NoteSlide title="排最後一步用 finally，不用 at last">
      <NoteFix
        wrong="At last, put the cake in the oven."
        right="Finally, put the cake in the oven."
        fix="Finally,"
      />
    </NoteSlide>

    <NoteSlide title="at first 表示一開始，和後來的情況對比">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'At first', role: '一開始', kind: 'key' },
          { t: 'I didn\'t like the city,', role: '以前的情況' },
          { t: 'but now I love it.', role: '後來的情況', kind: 'dim' },
        ]"
      />
      <p class="translation">一開始我不喜歡這個城市，可是現在我很愛。</p>
    </NoteSlide>

    <NoteSlide title="at last 只表示終於">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'The bus came', role: '等了很久的事', kind: 'dim' },
          { t: 'at last.', role: '終於', kind: 'key' },
        ]"
      />
      <p class="translation">公車終於來了。</p>
      <p class="remark"><code>finally</code> 可以排最後一步，也可以表示終於。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
