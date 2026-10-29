<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 050, as slides, in the order of notes/dragon-english-basic-100/050.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide title="be busy 後面直接接動名詞，不加 to" mark="busy doing">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'I’m', role: '主詞 + be' },
          { t: 'so busy', role: 'so + 形容詞' },
          { role: '不加 to' },
          { t: 'doing', role: '動名詞', kind: 'key', ring: true },
          { t: 'the housework every day', kind: 'dim' },
        ]"
      />
      <p class="remark"><code>be busy</code> 加動名詞表示忙著做某件事。</p>
    </NoteSlide>

    <NoteSlide title="be busy 後面接名詞時用 be busy with" mark="busy">
      <div class="rows is-labeled">
        <div>
          <span class="term">動名詞</span>
          <span
            ><NoteMark
              sentence="My mother is busy cooking dinner."
              :marks="['busy cooking']"
            /><span class="translation">我媽媽正忙著煮晚餐。</span></span
          >
        </div>
        <div>
          <span class="term">with + 名詞</span>
          <span
            ><NoteMark
              sentence="I was busy with my homework last night."
              :marks="['busy with my homework']"
            /><span class="translation">我昨晚忙著寫作業。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="so 表示程度很高，that 子句說出這個程度帶來的結果" :mark="['so', 'that']">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'I’m', kind: 'dim' },
          { t: 'so', kind: 'key' },
          { t: 'busy doing the housework every day', role: '程度' },
          { t: 'that', role: '連接詞', kind: 'key' },
          { t: 'I have no time to see a movie.', role: '結果' },
        ]"
      />
      <p class="translation">{{ note.translation }}</p>
    </NoteSlide>

    <NoteSlide title="so ... that 的 that 在口語裡常省略" mark="that">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'The music was', kind: 'dim' },
          { t: 'so loud', role: '程度' },
          { t: 'that', role: '省略', kind: 'gone' },
          { t: 'I couldn\'t hear you.', role: '結果' },
        ]"
      />
      <p class="translation">音樂大聲到我聽不到你說話。</p>
    </NoteSlide>

    <NoteSlide title="to 不定詞放在 time 後面，說明這是做什麼事的時間" mark="no time to see">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'have', role: '動詞' },
          { t: 'no time', role: '受詞', kind: 'key' },
          { t: 'to see a movie.', role: 'to + 動詞原形', kind: 'key' },
        ]"
      />
      <p class="translation">我沒有時間去看電影。</p>
    </NoteSlide>

    <NoteSlide title="have no time to 也可以寫成 don't have time to" mark="have no time">
      <div class="rows is-labeled">
        <div>
          <span class="term">have no time to</span>
          <span
            ><NoteMark sentence="I have no time to eat breakfast." :marks="['have no time']" /><span
              class="translation"
              >我沒有時間吃早餐。</span
            ></span
          >
        </div>
        <div>
          <span class="term">don't have time to</span>
          <span
            ><NoteMark
              sentence="I don't have time to watch TV on weekdays."
              :marks="['don\'t have time']"
            /><span class="translation">我平日沒有時間看電視。</span></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>
</template>
