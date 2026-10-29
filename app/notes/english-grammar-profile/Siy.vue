<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// negation-form-adverbs, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="never 本身是否定，動詞用肯定的形式">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'I stayed there for two weeks,', kind: 'dim' },
          { t: 'and', kind: 'dim' },
          { t: 'it', role: '主詞' },
          { t: 'never', role: 'never', kind: 'key' },
          { t: 'rained.', role: '肯定的動詞' },
        ]"
      />
      <p class="translation">我在那裡待了兩個星期，一次雨都沒下。</p>
    </NoteSlide>

    <NoteSlide title="ever 跟在否定的字後面，yet 放在句尾" mark="never">
      <div class="rows is-labeled">
        <div>
          <span class="term">ever</span>
          <span
            ><NoteMark sentence="Nobody ever visits that old castle." :marks="['ever']" /><span
              class="translation"
              >從來沒有人去那座老城堡。</span
            ></span
          >
        </div>
        <div>
          <span class="term">yet</span>
          <span
            ><NoteMark sentence="I haven't decided yet." :marks="['yet']" /><span
              class="translation"
              >我還沒決定。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="still 放在否定的助動詞前面" mark="never">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'still', role: 'still', kind: 'key', ring: true },
          { t: 'don\'t', role: '否定的助動詞' },
          { t: 'believe her.', kind: 'dim' },
        ]"
      />
      <p class="translation">我還是不相信她。</p>
    </NoteSlide>

    <NoteSlide title="still 表示等了很久，有點不耐煩或意外" mark="never">
      <div class="rows is-labeled">
        <div>
          <span class="term">yet</span>
          <span
            ><NoteMark sentence="The guests haven't arrived yet." :marks="['yet']" /><span
              class="translation"
              >客人還沒到。</span
            ></span
          >
        </div>
        <div>
          <span class="term">still</span>
          <span
            ><NoteMark
              sentence="The repair man still hasn't fixed the boiler."
              :marks="['still']"
            /><span class="translation">修理工到現在還沒修好熱水器。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="never 的動詞不再加 not" mark="never">
      <NoteFix
        wrong="My uncle doesn't never wear a tie."
        right="My uncle never wears a tie."
        fix="never wears"
      />
    </NoteSlide>

    <NoteSlide title="否定句的 still 放在否定的助動詞前面">
      <NoteFix
        wrong="The school hasn't still sent the report."
        right="The school still hasn't sent the report."
        fix="still hasn't"
      />
    </NoteSlide>

    <NoteSlide title="直述句的 ever 要跟著否定的字" mark="never">
      <NoteFix
        wrong="I have ever ridden a camel."
        right="I have never ridden a camel."
        fix="never"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
