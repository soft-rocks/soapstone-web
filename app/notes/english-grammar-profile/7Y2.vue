<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// nouns-use-nominalisation-formality, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="報告用名詞說出生產的量">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'As indicated by the charts,', role: '引述資料', kind: 'dim' },
          { t: 'output', role: '名詞', kind: 'key' },
          { t: 'in state-owned industry', role: '介系詞片語' },
          { t: 'increased by 12% in 2000.', kind: 'dim' },
        ]"
      />
      <p class="translation">如圖表所示，國營產業的產量在 2000 年成長了 12%。</p>
      <p class="remark">一般的說法用動詞：<code>factories produced more</code>。</p>
    </NoteSlide>

    <NoteSlide title="動詞變成名詞，副詞變成形容詞" mark="output">
      <div class="rows is-labeled">
        <div>
          <span class="term">一般的說法</span>
          <span
            ><NoteMark sentence="Sales fell sharply in March." :marks="['fell sharply']" /><span
              class="translation"
              >三月的銷售額大幅下滑。</span
            ></span
          >
        </div>
        <div>
          <span class="term">名詞化的說法</span>
          <span
            ><NoteMark
              sentence="There was a sharp fall in sales in March."
              :marks="['a sharp fall']"
            /><span class="translation">三月的銷售額出現大幅下滑。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="動詞和形容詞都可以變成名詞" mark="output">
      <div class="rows is-labeled">
        <div>
          <span class="term">動詞 → 名詞</span>
          <span>increase → an increase, decide → a decision, grow → growth</span>
        </div>
        <div>
          <span class="term">形容詞 → 名詞</span>
          <span>important → importance, able → ability, safe → safety</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="名詞化常用 in、of 和 make 這些句型" mark="output in">
      <div class="rows is-labeled">
        <div>
          <span class="term">名詞 + in</span>
          <span>a significant increase in output</span>
        </div>
        <div>
          <span class="term">the + 名詞 + of</span>
          <span>the introduction of new rules</span>
        </div>
        <div>
          <span class="term">make / take / reach</span>
          <span>make a decision, take action, reach an agreement</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="increase 當名詞時，後面接 in" mark="in">
      <NoteFix
        wrong="There was a large increase of prices."
        right="There was a large increase in prices."
        fix="in"
      />
    </NoteSlide>

    <NoteSlide title="修飾名詞要用形容詞 sharp">
      <NoteFix
        wrong="There was a sharply rise in unemployment."
        right="There was a sharp rise in unemployment."
        fix="sharp"
      />
    </NoteSlide>

    <NoteSlide title="make 後面接名詞 decision">
      <NoteFix
        wrong="The company made a decide to close the factory."
        right="The company made a decision to close the factory."
        fix="decision"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
