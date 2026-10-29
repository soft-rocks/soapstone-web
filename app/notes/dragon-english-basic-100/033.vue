<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 033, as slides, in the order of notes/dragon-english-basic-100/033.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide title="say that 轉述別人的話，子句的 should 表示建議" mark="says that we should">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'My mother', role: '主詞', kind: 'dim' },
          { t: 'says that', role: '動詞 + 連接詞', kind: 'key' },
          { t: 'I', role: '主詞' },
          { t: 'should', role: '助動詞', kind: 'key' },
          { t: 'go to bed early.', role: '動詞原形' },
        ]"
      />
      <p class="translation">我媽媽說我應該早點睡。</p>
      <p class="remark">原句的老師建議大家在這裡等。</p>
    </NoteSlide>

    <NoteSlide title="主要動詞是現在式 says 時，子句的時態不用往前推" mark="says">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'The teacher', role: '主詞', kind: 'dim' },
          { t: 'says', role: '現在式', kind: 'key', ring: true },
          { t: 'that', role: '連接詞' },
          { t: 'we should wait here for a while', role: '時態不變', kind: 'key' },
        ]"
      />
    </NoteSlide>

    <NoteSlide title="if 子句用過去式，講現在或未來的情況" mark="if we left now">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'if', kind: 'dim' },
          { t: 'we', role: '主詞' },
          { t: 'left', role: '過去式', kind: 'key', ring: true },
          { t: 'now,', role: '現在', kind: 'key' },
          { t: 'we', role: '主詞' },
          { t: 'might get caught', role: 'might + 動詞原形' },
          { t: 'in a thunderstorm.', kind: 'dim' },
        ]"
      />
      <p class="remark">說話的人把這個情況當成假設。這個情況有可能發生。</p>
    </NoteSlide>

    <NoteSlide title="主要子句用 would、could 或 might 加動詞原形" mark="might">
      <div class="rows is-labeled">
        <div>
          <span class="term">would</span>
          <span
            ><NoteMark
              sentence="If we left now, we would get home before dinner."
              :marks="['would get']"
            /><span class="translation">如果我們現在走，就會在晚餐前到家。</span></span
          >
        </div>
        <div>
          <span class="term">could</span>
          <span
            ><NoteMark
              sentence="If I had more time, I could help you."
              :marks="['could help']"
            /><span class="translation">如果我有更多時間，我就可以幫你。</span></span
          >
        </div>
        <div>
          <span class="term">might</span>
          <span
            ><NoteMark
              sentence="If we took the bus, we might be late."
              :marks="['might be']"
            /><span class="translation">如果我們搭公車，可能會遲到。</span></span
          >
        </div>
      </div>
      <p class="remark"><code>might</code> 表示不確定。</p>
    </NoteSlide>

    <NoteSlide title="get caught in 表示遇上不好的事，沒辦法躲開" mark="get caught in">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'We', role: '主詞', kind: 'dim' },
          { t: 'got caught in', role: 'get + 過去分詞 + in', kind: 'key' },
          { t: 'the rain', role: '名詞' },
          { t: 'on the way home.', kind: 'dim' },
        ]"
      />
      <p class="translation">我們回家路上遇上了雨。</p>
      <p class="remark"><code>get</code> 加過去分詞表示被動。</p>
    </NoteSlide>

    <NoteSlide title="get caught in 後面常接 rain、storm、traffic" mark="thunderstorm">
      <div class="rows is-labeled">
        <div>
          <span class="term">rain</span>
          <span
            ><NoteMark
              sentence="Take an umbrella, or you'll get caught in the rain."
              :marks="['the rain']"
            /><span class="translation">帶把傘，不然你會遇上雨。</span></span
          >
        </div>
        <div>
          <span class="term">storm</span>
          <span
            ><NoteMark
              sentence="If we went out now, we might get caught in the storm."
              :marks="['the storm']"
            /><span class="translation">如果我們現在出去，可能會遇上暴風雨。</span></span
          >
        </div>
        <div>
          <span class="term">traffic</span>
          <span
            ><NoteMark
              sentence="I got caught in heavy traffic this morning."
              :marks="['heavy traffic']"
            /><span class="translation">我今天早上遇上了大塞車。</span></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>
</template>
