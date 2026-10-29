<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adverbs-form-time-and-sequencing-modifying-clauses, as slides, in the order of content.md.
// One point per slide: the title names it, the diagram shows it, and `mark` circles the
// matching words of the note's sentence. Keep the parts of one sentence on one line: Vue
// drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="句首的時間副詞修飾後面的整個子句">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Yesterday', role: '時間副詞', kind: 'key' },
          { t: 'I went shopping', role: '第一個動詞' },
          { t: 'and', role: '連接詞', kind: 'dim' },
          { t: 'bought some clothes.', role: '第二個動詞' },
        ]"
      />
      <p class="translation">昨天我去逛街，買了一些衣服。</p>
    </NoteSlide>

    <NoteSlide title="時間副詞也可以放在句尾" mark="Yesterday">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'I went shopping', role: '子句', kind: 'dim' },
          { t: 'yesterday.', role: '時間副詞', kind: 'key' },
        ]"
      />
      <p class="translation">我昨天去逛街。</p>
      <p class="remark">
        比較長的時間副詞放在句首時，後面常加逗號，像 <code>Last summer, we went to Italy.</code>。
      </p>
    </NoteSlide>

    <NoteSlide title="順序副詞放在子句的句首">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'First', role: '順序副詞', kind: 'key' },
          { t: 'we had dinner,', role: '第一件事' },
          { t: 'and then', role: '順序副詞', kind: 'key' },
          { t: 'we went to the pub.', role: '第二件事' },
        ]"
      />
      <p class="translation">我們先吃晚餐，然後去了酒吧。</p>
    </NoteSlide>

    <NoteSlide title="often、just 放在一般動詞前面，或放在 have 後面">
      <div class="rows is-labeled">
        <div>
          <span class="term">一般動詞前面</span>
          <span
            ><NoteMark sentence="I often eat pasta at weekends." :marks="['often eat']" /><span
              class="translation"
              >我週末常吃義大利麵。</span
            ></span
          >
        </div>
        <div>
          <span class="term">have 後面</span>
          <span
            ><NoteMark
              sentence="I've just heard about your accident."
              :marks="['I\'ve just']"
            /><span class="translation">我剛聽說你出意外的事。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="時間副詞不放在動詞和受詞中間" mark="Yesterday">
      <NoteFix
        wrong="I bought yesterday some new shoes."
        right="I bought some new shoes yesterday."
        fix="yesterday"
      />
    </NoteSlide>

    <NoteSlide title="接下一件事用 then，不用 after">
      <NoteFix
        wrong="First we had a coffee and after we went to the park."
        right="First we had a coffee and then we went to the park."
        fix="then"
      />
    </NoteSlide>

    <NoteSlide title="yesterday 前面不加介系詞" mark="Yesterday">
      <NoteFix
        wrong="In yesterday I stayed at home."
        right="Yesterday I stayed at home."
        fix="Yesterday"
      />
    </NoteSlide>

    <NoteSlide title="often 放在 be 後面">
      <NoteFix
        wrong="The trains often are crowded."
        right="The trains are often crowded."
        fix="are often"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
