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
    <NoteSlide title="first 放在第一件事前面，and then 接第二件事" :mark="['First', 'and then']">
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

    <NoteSlide title="after that 放在句首，指前面那件事之後">
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
          <span class="term">句尾的 next</span>
          <span
            ><NoteMark sentence="What should we do next?" :marks="['next?']" /><span
              class="translation"
              >我們接下來要做什麼？</span
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

    <NoteSlide title="then 可以放在 and 後面、逗號後面或主詞後面" mark="and then">
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
          <span class="term">逗號後面<br /><i>口語和指示</i></span>
          <span
            ><NoteMark sentence="Wait here, then follow me." :marks="['then']" /><span
              class="translation"
              >在這裡等，然後跟我來。</span
            ></span
          >
        </div>
        <div>
          <span class="term">主詞後面<br /><i>比較正式</i></span>
          <span
            ><NoteMark
              sentence="The minister read the report and she then signed it."
              :marks="['she then']"
            /><span class="translation">部長看了報告，接著簽了名。</span></span
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

    <NoteSlide title="after 不單獨當順序副詞，and 後面接 then" mark="and then">
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
          { t: 'At first', role: '時間片語', kind: 'key' },
          { t: 'I didn\'t like the city,', role: '以前的情況' },
          { t: 'but now I love it.', role: '後來的情況', kind: 'dim' },
        ]"
      />
      <p class="translation">一開始我不喜歡這個城市，可是現在我很愛。</p>
    </NoteSlide>

    <NoteSlide title="finally 也可以表示終於，at last 只表示終於">
      <div class="rows is-labeled">
        <div>
          <span class="term">at last</span>
          <span
            ><NoteMark sentence="The bus came at last." :marks="['at last.']" /><span
              class="translation"
              >公車終於來了。</span
            ></span
          >
        </div>
        <div>
          <span class="term">finally</span>
          <span
            ><NoteMark
              sentence="After three years of work, Sara finally finished her book."
              :marks="['finally']"
            /><span class="translation">Sara 花了三年，終於寫完了她的書。</span></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
