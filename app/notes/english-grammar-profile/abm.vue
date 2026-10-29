<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adverbs-use-place-96, as slides, in the order of content.md. One point per slide: the title
// names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="地點副詞放在移動動詞後面">
      <NoteWords
        :size="34"
        :parts="[
          { t: 'He', role: '主詞', kind: 'dim' },
          { t: 'went', role: '移動動詞' },
          { t: 'downstairs.', role: '地點副詞', kind: 'key' },
        ]"
      />
      <p class="translation">他下樓去了。</p>
    </NoteSlide>

    <NoteSlide title="地點副詞也可以放在 be 後面，或放在名詞後面" mark="downstairs">
      <div class="rows is-labeled">
        <div>
          <span class="term">be 後面</span>
          <span
            ><NoteMark sentence="The bathroom is upstairs." :marks="['upstairs']" /><span
              class="translation"
              >浴室在樓上。</span
            ></span
          >
        </div>
        <div>
          <span class="term">名詞後面</span>
          <span
            ><NoteMark sentence="We had lunch at a café nearby." :marks="['a café nearby']" /><span
              class="translation"
              >我們在附近一家咖啡館吃午餐。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="abroad 前面不加 to" mark="went downstairs">
      <NoteFix
        wrong="She went to abroad last year."
        right="She went abroad last year."
        fix="went abroad"
      />
    </NoteSlide>

    <NoteSlide title="upstairs 前面不加 in">
      <NoteFix
        wrong="The bathroom is in upstairs."
        right="The bathroom is upstairs."
        fix="upstairs."
      />
    </NoteSlide>

    <NoteSlide title="downstairs 結尾有 s" mark="downstairs">
      <NoteFix
        wrong="I'll wait for you downstair."
        right="I'll wait for you downstairs."
        fix="downstairs"
      />
    </NoteSlide>

    <NoteSlide title="upstairs 表示樓上，up the stairs 表示沿著樓梯往上">
      <div class="rows is-labeled">
        <div>
          <span class="term">upstairs</span>
          <span
            ><NoteMark sentence="My bedroom is upstairs." :marks="['upstairs']" /><span
              class="translation"
              >我的房間在樓上。</span
            ></span
          >
        </div>
        <div>
          <span class="term">up the stairs</span>
          <span
            ><NoteMark sentence="The cat ran up the stairs." :marks="['up the stairs']" /><span
              class="translation"
              >貓跑上樓梯。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
