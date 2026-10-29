<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// conjunctions-form-simple-279, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="once + 子句, + 主要子句" mark="once">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Believe me,', role: '引導語', kind: 'dim' },
          { t: 'once', role: '連接詞', kind: 'key' },
          { t: 'you have tried it,', role: '從屬子句' },
          { t: 'you\'ll never give it up.', role: '主要子句' },
        ]"
      />
      <p class="translation">相信我，你只要試過一次，就再也不會想放棄了。</p>
    </NoteSlide>

    <NoteSlide title="子句說未來不用 will" mark="have tried">
      <NoteMark
        sentence="Unless the situation improves, we will be forced to try a new supplier."
        :marks="['improves,', 'will be']"
      />
      <p class="translation">除非情況好轉，否則我們只好換一家供應商。</p>
    </NoteSlide>

    <NoteSlide title="時間和條件" mark="once">
      <div class="rows is-labeled">
        <div>
          <span class="term">once</span>
          <span>一旦，前一件事完成，後一件事就發生</span>
        </div>
        <div>
          <span class="term">whenever</span>
          <span>每當、每次</span>
        </div>
        <div>
          <span class="term">unless</span>
          <span>除非，意思是 if … not</span>
        </div>
        <div>
          <span class="term">provided (that)</span>
          <span>只要，that 可以省略</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="對比和例外">
      <div class="rows is-labeled">
        <div>
          <span class="term">whereas</span>
          <span
            ><NoteMark
              sentence="My brother loves sport, whereas I prefer reading."
              :marks="['whereas']"
            /><span class="translation">我哥很愛運動，而我比較喜歡看書。</span></span
          >
        </div>
        <div>
          <span class="term">except that</span>
          <span
            ><NoteMark
              sentence="The holiday was perfect, except that it rained on the last day."
              :marks="['except that']"
            /><span class="translation">這次度假很完美，只是最後一天下雨了。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="unless 和 if … not">
      <div class="rows is-labeled">
        <div>
          <span class="term">unless</span>
          <span>We'll miss the train unless we leave now.</span>
        </div>
        <div>
          <span class="term">if … not</span>
          <span>We'll miss the train if we don't leave now.</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="unless 後面不加 not">
      <NoteFix
        wrong="I won't go to the party unless you don't come with me."
        right="I won't go to the party unless you come with me."
        fix="you come"
      />
    </NoteSlide>

    <NoteSlide title="once 子句用現在式" mark="once you have tried">
      <NoteFix
        wrong="Once you will finish the course, you will get a certificate."
        right="Once you finish the course, you will get a certificate."
        fix="finish"
      />
    </NoteSlide>

    <NoteSlide title="說出原因用 because">
      <NoteFix
        wrong="I stayed at home whereas I was ill."
        right="I stayed at home because I was ill."
        fix="because"
      />
    </NoteSlide>

    <NoteSlide title="except 接名詞不加 that">
      <NoteFix
        wrong="Everyone came to the party except that Tom."
        right="Everyone came to the party except Tom."
        fix="except Tom."
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
