<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// focus-form-use-non-finite-with-ed-clauses, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="過去分詞和地點放在句首，be 和主詞倒裝">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Outlined', role: '過去分詞', kind: 'key' },
          { t: 'below', role: '地點', kind: 'key' },
          { t: 'are', role: 'be' },
          { t: 'some essential reasons', role: '主詞' },
          { t: 'which justify my choice.', role: '關係子句', kind: 'dim' },
        ]"
      />
      <p class="translation">以下列出幾個支持我這個選擇的重要理由。</p>
      <p class="remark">一般語序是 Some essential reasons are outlined below.</p>
    </NoteSlide>

    <NoteSlide title="be 跟著句尾的主詞變化" mark="are">
      <div class="rows is-labeled">
        <div>
          <span class="term">單數主詞</span>
          <span
            ><NoteMark sentence="Attached is a copy of my CV." :marks="['is', 'a copy']" /><span
              class="translation"
              >隨信附上我的履歷一份。</span
            ></span
          >
        </div>
        <div>
          <span class="term">複數主詞</span>
          <span
            ><NoteMark
              sentence="Enclosed are two copies of the contract."
              :marks="['are', 'two copies']"
            /><span class="translation">隨信附上合約兩份。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="過去分詞子句的主詞就是主要子句的主詞" mark="Outlined">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Built in 1890,', role: '過去分詞子句', kind: 'key' },
          { t: 'the station', role: '主詞', kind: 'key', ring: true },
          { t: 'is the oldest building in town.', kind: 'dim' },
        ]"
      />
      <p class="translation">這座車站建於 1890 年，是鎮上最古老的建築。</p>
      <p class="remark">車站是被建造的，所以用過去分詞。</p>
    </NoteSlide>

    <NoteSlide title="Compared with、Based on、Given 是固定說法" mark="Outlined">
      <div class="rows is-labeled">
        <div>
          <span class="term">Compared with<br /><i>比較</i></span>
          <span
            ><NoteMark
              sentence="Compared with last year, sales have gone up."
              :marks="['Compared with']"
            /><span class="translation">跟去年比起來，銷售量增加了。</span></span
          >
        </div>
        <div>
          <span class="term">Based on<br /><i>根據</i></span>
          <span
            ><NoteMark
              sentence="Based on these results, we recommend a new system."
              :marks="['Based on']"
            /><span class="translation">根據這些結果，我們建議換一套新系統。</span></span
          >
        </div>
        <div>
          <span class="term">Given<br /><i>考慮到</i></span>
          <span
            ><NoteMark
              sentence="Given the cost, the plan is not realistic."
              :marks="['Given']"
            /><span class="translation">考慮到費用，這個計畫不切實際。</span></span
          >
        </div>
      </div>
      <p class="remark">這些固定說法的主詞可以不是主要子句的主詞。</p>
    </NoteSlide>

    <NoteSlide title="過去分詞的主詞要是主要子句的主詞">
      <NoteFix
        wrong="Built in 1890, I visited the old station."
        right="Built in 1890, the old station is worth a visit."
        fix="the old station"
      >
        <code>I</code> 不是被建造的。
      </NoteFix>
    </NoteSlide>

    <NoteSlide title="主詞是複數，be 用 are" mark="are">
      <NoteFix
        wrong="Attached is two copies of the invoice."
        right="Attached are two copies of the invoice."
        fix="are"
      />
    </NoteSlide>

    <NoteSlide title="固定說法是 based on，用過去分詞">
      <NoteFix
        wrong="Basing on the survey, most staff want flexible hours."
        right="Based on the survey, most staff want flexible hours."
        fix="Based"
      />
    </NoteSlide>

    <NoteSlide title="倒裝的句子要有 be" mark="are">
      <NoteFix
        wrong="Enclosed a copy of my certificate."
        right="Enclosed is a copy of my certificate."
        fix="is"
      />
    </NoteSlide>

    <NoteSlide title="現在分詞是主詞做的動作，過去分詞是主詞被做的動作" mark="Outlined">
      <div class="rows is-labeled">
        <div>
          <span class="term">現在分詞</span>
          <span
            ><NoteMark sentence="Walking home, I saw an old friend." :marks="['Walking']" /><span
              class="translation"
              >走路回家的時候，我遇到一個老朋友。</span
            ></span
          >
        </div>
        <div>
          <span class="term">過去分詞</span>
          <span
            ><NoteMark
              sentence="Asked about the delay, the manager refused to comment."
              :marks="['Asked']"
            /><span class="translation">被問到延誤的事，經理拒絕回應。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="過去分詞子句拿掉連接詞、主詞和 be">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'When it was', role: '拿掉的成分', kind: 'gone' },
          { t: 'compared with other capitals,', role: '過去分詞子句', kind: 'key' },
          { t: 'Berlin came out on top.', kind: 'dim' },
        ]"
      />
      <p class="translation">跟其他首都比起來，柏林名列第一。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
