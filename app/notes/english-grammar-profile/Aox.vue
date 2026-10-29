<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-desired-states, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + ought to + be + 形容詞 / 過去分詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'There shouldn\'t be any rubbish dumps;', kind: 'dim' },
          { t: 'all the rubbish', role: '主詞' },
          { t: 'ought to', kind: 'key', ring: true },
          { t: 'be', kind: 'key', ring: true },
          { t: 'recycled.', role: '形容詞 / 過去分詞' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="ought to、as … as … ought to be">
      <div class="rows is-labeled">
        <div>
          <span class="term">ought to</span>
          <span>應該。說理想的狀態。</span>
        </div>
        <div>
          <span class="term">as … as … ought to be</span>
          <span>跟應該的一樣……。常用在否定句，說現實不夠好。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="說現實不夠好">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="There were three accidents near our school this year. The roads are not as safe as they ought to be." :marks="[]" /><span
              class="translation"
              >今年我們學校附近發生了三起車禍。路沒有應該的那麼安全。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">not as … as … ought to be 說現實比理想差。</p>
    </NoteSlide>
    <NoteSlide title="被動的理想" mark="ought to be">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="The dump outside our town is getting bigger. All rubbish ought to be recycled." :marks="['ought to be']" /><span
              class="translation"
              >我們鎮外的垃圾場越來越大。所有的垃圾都應該被回收。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">說東西應該被怎麼處理，用 ought to be 加過去分詞。</p>
    </NoteSlide>
    <NoteSlide title="形容詞前面要有 be" mark="be">
      <NoteFix
        wrong="There are bottles on every bench. Our parks ought to cleaner."
        right="There are bottles on every bench. Our parks ought to be cleaner."
        :fix="['be']"
      />
    </NoteSlide>
    <NoteSlide title="被動用 be 加過去分詞" mark="be">
      <NoteFix
        wrong="Old phones end up in the bin. They ought to be recycle."
        right="Old phones end up in the bin. They ought to be recycled."
        :fix="['recycled.']"
      />
    </NoteSlide>
    <NoteSlide title="句尾用 ought to be，形容詞不重複" mark="ought to be">
      <NoteFix
        wrong="A single ticket costs four pounds. The bus isn't as cheap as it ought to cheap."
        right="A single ticket costs four pounds. The bus isn't as cheap as it ought to be."
        :fix="['be.']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
