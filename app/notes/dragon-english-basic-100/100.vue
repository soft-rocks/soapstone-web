<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 100, as slides, in the order of notes/dragon-english-basic-100/100.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide title="that 子句可以是一個完整的條件句" mark="that">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Bear in mind', role: '記住', kind: 'dim' },
          { t: 'that', role: '連接詞', kind: 'key' },
          { t: 'if you have enthusiasm,', role: 'if 子句' },
          { t: 'you can succeed in anything.', role: '主要子句' },
        ]"
      />
      <p class="translation">{{ note.translation }}</p>
      <p class="remark">整句是請對方記住這個條件句。</p>
    </NoteSlide>

    <NoteSlide title="if 子句緊接在 that 後面，主要子句接在 if 子句後面" mark="that if">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Remember', kind: 'dim' },
          { t: 'that', role: '連接詞' },
          { t: 'if you are late,', role: 'if 子句', kind: 'key' },
          { t: 'you can\'t take the test.', role: '主要子句', kind: 'key' },
        ]"
      />
      <p class="translation">記住，如果你遲到，就不能參加考試。</p>
    </NoteSlide>

    <NoteSlide
      title="主要動詞是過去式時，條件句的現在式改成過去式，will 改成 would"
      mark="if you have"
    >
      <NoteWords
        :size="22"
        :parts="[
          { t: 'My teacher', kind: 'dim' },
          { t: 'told', role: '過去式', kind: 'key' },
          { t: 'me that if I', kind: 'dim' },
          { t: 'practiced', role: '過去式', kind: 'key' },
          { t: 'every day, I', kind: 'dim' },
          { t: 'would', role: 'will 改成 would', kind: 'key' },
          { t: 'get better.', kind: 'dim' },
        ]"
      />
      <p class="translation">我的老師跟我說，如果我每天練習，就會進步。</p>
    </NoteSlide>

    <NoteSlide title="succeed in 後面接名詞或動詞-ing" mark="succeed in anything">
      <div class="rows is-labeled">
        <div>
          <span class="term">動詞-ing</span>
          <span
            ><NoteMark
              sentence="She succeeded in passing the exam."
              :marks="['succeeded in', 'passing']"
            /><span class="translation">她成功通過了考試。</span></span
          >
        </div>
        <div>
          <span class="term">名詞</span>
          <span
            ><NoteMark
              sentence="He succeeded in business."
              :marks="['succeeded in', 'business']"
            /><span class="translation">他在事業上很成功。</span></span
          >
        </div>
      </div>
      <p class="remark">原句的 <code>succeed in</code> 後面接代名詞 <code>anything</code>。</p>
    </NoteSlide>

    <NoteSlide title="肯定句的 anything 表示任何一件事都可以" mark="anything">
      <div class="rows is-labeled">
        <div>
          <span class="term">take</span>
          <span
            ><NoteMark
              sentence="Take anything you want from the fridge."
              :marks="['anything']"
            /><span class="translation">冰箱裡的東西，你想拿什麼就拿什麼。</span></span
          >
        </div>
        <div>
          <span class="term">do</span>
          <span
            ><NoteMark sentence="I'll do anything for you." :marks="['anything']" /><span
              class="translation"
              >我願意為你做任何事。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">原句的 <code>succeed in anything</code> 表示做什麼事都能成功。</p>
    </NoteSlide>

    <NoteSlide title="問句的 anything 問有沒有，not ... anything 表示什麼都沒有" mark="anything">
      <div class="rows is-labeled">
        <div>
          <span class="term">問句</span>
          <span
            ><NoteMark sentence="Do you need anything?" :marks="['anything']" /><span
              class="translation"
              >你需要什麼嗎？</span
            ></span
          >
        </div>
        <div>
          <span class="term">否定句</span>
          <span
            ><NoteMark
              sentence="I didn't buy anything at the shop."
              :marks="['didn\'t', 'anything']"
            /><span class="translation">我在那家店什麼都沒買。</span></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>
</template>
