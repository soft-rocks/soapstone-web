<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 091, as slides, in the order of notes/dragon-english-basic-100/091.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide title="have difficulty 後面直接接動詞-ing" mark="have difficulty">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'women', role: '主詞', kind: 'dim' },
          { t: 'have difficulty', kind: 'key' },
          { t: 'getting promoted', role: '動詞-ing' },
          { t: 'or', role: '連接詞' },
          { t: 'returning to their jobs', role: '動詞-ing' },
        ]"
      />
      <p class="remark"><code>have difficulty</code> 表示做某件事有困難。</p>
    </NoteSlide>

    <NoteSlide title="have trouble 跟 have difficulty 的用法和意思一樣" mark="have difficulty">
      <div class="rows is-labeled">
        <div>
          <span class="term">have difficulty</span>
          <span
            ><NoteMark
              sentence="I have difficulty remembering names."
              :marks="['have difficulty', 'remembering']"
            /><span class="translation">我很難記住名字。</span></span
          >
        </div>
        <div>
          <span class="term">have trouble</span>
          <span
            ><NoteMark
              sentence="Did you have trouble finding the hotel?"
              :marks="['have trouble', 'finding']"
            /><span class="translation">你找飯店有遇到困難嗎？</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="get 加過去分詞，表示主詞接受一個動作" mark="getting promoted">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Ms. Lin', role: '主詞' },
          { t: 'got', role: 'get 的過去式', kind: 'key' },
          { t: 'promoted', role: '過去分詞', kind: 'key' },
          { t: 'to manager last month.', kind: 'dim' },
        ]"
      />
      <p class="translation">林小姐上個月升為經理。</p>
      <p class="remark">原句的 <code>getting promoted</code> 表示得到升遷。</p>
    </NoteSlide>

    <NoteSlide title="get lost 和 get hurt 也是 get 加過去分詞" mark="getting promoted">
      <div class="rows is-labeled">
        <div>
          <span class="term">get lost</span>
          <span
            ><NoteMark sentence="We got lost in Shibuya." :marks="['got lost']" /><span
              class="translation"
              >我們在澀谷迷路了。</span
            ></span
          >
        </div>
        <div>
          <span class="term">get hurt</span>
          <span
            ><NoteMark sentence="Be careful not to get hurt." :marks="['get hurt']" /><span
              class="translation"
              >小心不要受傷。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">主詞進入一種狀態。</p>
    </NoteSlide>

    <NoteSlide title="after 和 before 當介系詞時，後面接動詞-ing" mark="after giving birth">
      <div class="rows is-labeled">
        <div>
          <span class="term">after</span>
          <span
            ><NoteMark
              sentence="After finishing my homework, I watched TV."
              :marks="['After finishing']"
            /><span class="translation">寫完功課之後，我看了電視。</span></span
          >
        </div>
        <div>
          <span class="term">before</span>
          <span
            ><NoteMark sentence="Wash your hands before eating." :marks="['before eating']" /><span
              class="translation"
              >吃東西前要洗手。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="動詞-ing 的主詞跟主要子句的主詞一樣" :mark="['women', 'giving birth']">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'women', role: '主要子句的主詞', kind: 'key', ring: true },
          { t: 'have difficulty …', kind: 'dim' },
          { t: 'after', role: '介系詞' },
          { t: 'giving birth', role: '動詞-ing\n主詞是 women', kind: 'key' },
          { t: 'and', role: '連接詞' },
          { t: 'raising their children.', role: '動詞-ing' },
        ]"
      />
    </NoteSlide>
  </NoteDeck>
</template>
