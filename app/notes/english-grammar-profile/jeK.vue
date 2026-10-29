<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// verbs-form-verb-to-infinitive-1083, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="seem 後面接 to 和原形動詞">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'My room', role: '主詞', kind: 'dim' },
          { t: 'seems', role: '動詞', kind: 'key' },
          { t: 'to be', role: '不定詞', kind: 'key' },
          { t: 'very cold and unfriendly.', role: 'be 的補語' },
        ]"
      />
      <p class="translation">我的房間好像很冷，一點都不溫馨。</p>
      <p class="remark">時態標在 <code>seems</code> 上，<code>to</code> 後面用原形動詞。</p>
    </NoteSlide>

    <NoteSlide title="不定詞可以是否定、進行或完成的形式" mark="to be">
      <div class="rows is-labeled">
        <div>
          <span class="term">to + 原形動詞</span>
          <span
            ><NoteMark sentence="He managed to finish the report." :marks="['to finish']" /><span
              class="translation"
              >他設法把報告寫完了。</span
            ></span
          >
        </div>
        <div>
          <span class="term">not to + 原形動詞</span>
          <span
            ><NoteMark sentence="She decided not to go." :marks="['not to go']" /><span
              class="translation"
              >她決定不去。</span
            ></span
          >
        </div>
        <div>
          <span class="term">to be + 動詞&#x2060;-&#x2060;ing</span>
          <span
            ><NoteMark
              sentence="You seem to be working too hard."
              :marks="['to be working']"
            /><span class="translation">你好像工作得太辛苦了。</span></span
          >
        </div>
        <div>
          <span class="term">to have + 過去分詞</span>
          <span
            ><NoteMark sentence="He seems to have lost his keys." :marks="['to have lost']" /><span
              class="translation"
              >他好像把鑰匙弄丟了。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="not 否定的是不定詞，不是前面的動詞" mark="to">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'She', kind: 'dim' },
          { t: 'decided', role: '動詞' },
          { t: 'not', role: '否定 go', kind: 'key', ring: true },
          { t: 'to go.', role: '不定詞', kind: 'key' },
        ]"
      />
      <p class="translation">她決定不去。</p>
      <p class="remark">她做了決定，決定的內容是不去。</p>
    </NoteSlide>

    <NoteSlide title="to have + 過去分詞說的事比動詞早發生" mark="seems">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'He', kind: 'dim' },
          { t: 'seems', role: '現在看起來' },
          { t: 'to have lost', role: '之前已經丟了', kind: 'key' },
          { t: 'his keys.', kind: 'dim' },
        ]"
      />
      <p class="translation">他好像把鑰匙弄丟了。</p>
    </NoteSlide>

    <NoteSlide title="afford 後面接不定詞，不接動詞-ing" mark="to be">
      <NoteFix
        wrong="We can't afford buying a new car."
        right="We can't afford to buy a new car."
        fix="to buy"
      />
    </NoteSlide>

    <NoteSlide title="refuse 後面要加 to，再接原形動詞" mark="to">
      <NoteFix
        wrong="She refused answer my question."
        right="She refused to answer my question."
        fix="to"
      />
    </NoteSlide>

    <NoteSlide title="時態只標在前面的動詞上" mark="seems">
      <NoteFix
        wrong="I managed to passed the exam."
        right="I managed to pass the exam."
        fix="pass"
      />
    </NoteSlide>

    <NoteSlide title="enjoy 後面接動詞-ing，不接不定詞">
      <NoteMark
        sentence="We finished painting the fence before lunch."
        :marks="['finished painting']"
      />
      <p class="translation">我們午餐前把圍籬漆完了。</p>
    </NoteSlide>

    <NoteSlide title="表示目的的不定詞不是受詞">
      <NoteMark sentence="I'm going to buy pictures to hang on the wall." :marks="['to hang']" />
      <p class="translation">我要買畫掛在牆上。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
