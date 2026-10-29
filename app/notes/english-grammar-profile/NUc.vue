<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-use-postmodifying-specifying-977, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="the ones + 後置修飾語" mark="the ones we ordered.">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'products', role: '複數名詞', kind: 'key' },
          { t: '… were not exactly', kind: 'dim' },
          { t: 'the ones', role: '代替 products', kind: 'key' },
          { t: 'we ordered.', role: '後置修飾語' },
        ]"
      />
      <p class="translation">我們收到的產品跟我們訂的不完全一樣。</p>
    </NoteSlide>

    <NoteSlide title="介系詞片語和子句" mark="the ones">
      <div class="rows is-labeled">
        <div>
          <span class="term">介系詞片語</span>
          <span
            ><NoteMark
              sentence="Our buses are slower than the ones in the capital."
              :marks="['in the capital.']"
            /><span class="translation">我們的公車比首都的慢。</span></span
          >
        </div>
        <div>
          <span class="term">關係子句</span>
          <span
            ><NoteMark
              sentence="Throw away the glasses that are chipped and keep the ones that aren't."
              :marks="['that aren\'t.']"
            /><span class="translation">有缺口的杯子丟掉，沒缺口的留著。</span></span
          >
        </div>
        <div>
          <span class="term">省略關係代名詞</span>
          <span
            ><NoteMark
              sentence="These pens are better than the ones we had before."
              :marks="['we had before.']"
            /><span class="translation">這些筆比我們以前用的好。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="分詞片語" mark="the ones">
      <div class="rows is-labeled">
        <div>
          <span class="term">過去分詞</span>
          <span
            ><NoteMark
              sentence="The parcels sent on Monday arrived, but the ones posted on Friday didn't."
              :marks="['posted on Friday']"
            /><span class="translation">星期一寄的包裹到了，星期五寄的還沒到。</span></span
          >
        </div>
        <div>
          <span class="term">現在分詞</span>
          <span
            ><NoteMark
              sentence="I like all your paintings, especially the ones hanging in the kitchen."
              :marks="['hanging in the kitchen.']"
            /><span class="translation">你的畫我都喜歡，尤其是掛在廚房的那幾幅。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="who、that、which" mark="we ordered.">
      <div class="rows is-labeled">
        <div>
          <span class="term">當受詞，可省略</span>
          <span
            ><NoteMark sentence="the ones (that) we ordered" :marks="['(that)']" /><span
              class="translation"
              >指人用 who 或 that，指東西用 that 或 which</span
            ></span
          >
        </div>
        <div>
          <span class="term">當主詞，不省略</span>
          <span
            ><NoteMark sentence="the ones that broke" :marks="['that']" /><span class="translation"
              >不能寫成 the ones broke</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="複數名詞用 the ones" mark="the ones">
      <NoteFix
        wrong="The tickets we got were not the one we booked."
        right="The tickets we got were not the ones we booked."
        fix="the ones"
      />
    </NoteSlide>

    <NoteSlide title="說地點用 in，不用 of">
      <NoteFix
        wrong="The prices here are lower than the ones of my country."
        right="The prices here are lower than the ones in my country."
        fix="in my country."
      />
    </NoteSlide>

    <NoteSlide title="指人用 who">
      <NoteFix
        wrong="The ones which helped us most were our neighbours."
        right="The ones who helped us most were our neighbours."
        fix="who"
      />
    </NoteSlide>

    <NoteSlide title="those + 後置修飾語：正式">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'The results are better than', kind: 'dim' },
          { t: 'those', role: '代替 the results', kind: 'key' },
          { t: 'from last year.', role: '後置修飾語' },
        ]"
      />
      <p class="translation">結果比去年的好。</p>
    </NoteSlide>

    <NoteSlide title="單數用 the one">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'My car is', kind: 'dim' },
          { t: 'the one', role: '代替單數名詞', kind: 'key' },
          { t: 'with the broken light.', role: '後置修飾語' },
        ]"
      />
      <p class="translation">我的車是車燈壞掉的那一輛。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
