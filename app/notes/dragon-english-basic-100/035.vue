<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 035, as slides, in the order of notes/dragon-english-basic-100/035.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide title="連綴動詞 look 接形容詞，意思是看起來" mark="looks happy">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'Ann', role: '主詞' },
          { t: 'looks', role: '連綴動詞', kind: 'key' },
          { t: 'happy.', role: '形容詞', kind: 'key' },
        ]"
      />
      <p class="remark">形容詞描述說話的人看到的樣子。</p>
    </NoteSlide>

    <NoteSlide title="must have 加過去分詞，表示對過去的事有把握的推測" mark="must have happened">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Something good', role: '主詞', kind: 'dim' },
          { t: 'must have', role: '助動詞 + have', kind: 'key' },
          { t: 'happened', role: '過去分詞', kind: 'key' },
          { t: 'to her.', kind: 'dim' },
        ]"
      />
      <p class="remark">說話的人從 Ann 開心的樣子推測有好事發生。</p>
    </NoteSlide>

    <NoteSlide title="must have 從眼前的情況推測過去一定發生過的事" mark="must have happened">
      <div class="rows is-labeled">
        <div>
          <span class="term">地上是濕的</span>
          <span
            ><NoteMark
              sentence="The ground is wet. It must have rained last night."
              :marks="['must have rained']"
            /><span class="translation">地上是濕的。昨晚一定下過雨。</span></span
          >
        </div>
        <div>
          <span class="term">Tom 不在</span>
          <span
            ><NoteMark
              sentence="Tom isn't here. He must have gone home."
              :marks="['must have gone']"
            /><span class="translation">Tom 不在這裡。他一定是回家了。</span></span
          >
        </div>
      </div>
      <p class="remark">說話的人沒有看到那件事發生。</p>
    </NoteSlide>

    <NoteSlide title="形容詞修飾 something 時，放在 something 後面" mark="Something good">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Something', role: '代名詞', kind: 'key' },
          { t: 'good', role: '形容詞', kind: 'key', ring: true },
          { t: 'must have happened to her.', kind: 'dim' },
        ]"
      />
      <p class="remark"><code>something good</code> 是好事。</p>
    </NoteSlide>

    <NoteSlide title="anything、nothing 的形容詞也放在後面" mark="Something good">
      <div class="rows is-labeled">
        <div>
          <span class="term">something</span>
          <span
            ><NoteMark
              sentence="I want to eat something sweet."
              :marks="['something sweet']"
            /><span class="translation">我想吃點甜的東西。</span></span
          >
        </div>
        <div>
          <span class="term">anything</span>
          <span
            ><NoteMark
              sentence="Is there anything interesting on TV?"
              :marks="['anything interesting']"
            /><span class="translation">電視上有什麼有趣的節目嗎？</span></span
          >
        </div>
        <div>
          <span class="term">nothing</span>
          <span
            ><NoteMark
              sentence="Nothing special happened today."
              :marks="['Nothing special']"
            /><span class="translation">今天沒有發生什麼特別的事。</span></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>
</template>
