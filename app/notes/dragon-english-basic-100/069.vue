<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 069, as slides, in the order of notes/dragon-english-basic-100/069.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide title="that 子句放在 saying 後面，說明那句俗話的內容" mark="a saying that">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'There is', kind: 'dim' },
          { t: 'a saying', role: '名詞', kind: 'key' },
          { t: 'that', role: '連接詞', kind: 'key' },
          { t: 'a cold can cause a variety of diseases.', role: '名詞的內容' },
        ]"
      />
      <p class="translation">有句話說感冒是萬病之源。</p>
    </NoteSlide>

    <NoteSlide title="that 子句也可以放在 idea、news 這類名詞後面" mark="a saying that">
      <div class="rows is-labeled">
        <div>
          <span class="term">saying</span>
          <span
            ><NoteMark
              sentence="There is a saying that time is money."
              :marks="['a saying that']"
            /><span class="translation">有一句話說時間就是金錢。</span></span
          >
        </div>
        <div>
          <span class="term">idea</span>
          <span
            ><NoteMark
              sentence="I like the idea that everyone should help each other."
              :marks="['the idea that']"
            /><span class="translation">我喜歡每個人都應該互相幫忙這個想法。</span></span
          >
        </div>
        <div>
          <span class="term">news</span>
          <span
            ><NoteMark
              sentence="I heard the news that Tom won the race."
              :marks="['the news that']"
            /><span class="translation">我聽到 Tom 贏了賽跑的消息。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="同位語的 that 在子句裡不當主詞，也不當受詞" mark="that">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'that', role: '連接詞', kind: 'key', ring: true },
          { t: 'a cold', role: '主詞' },
          { t: 'can cause', role: '動詞' },
          { t: 'a variety of diseases.', role: '受詞' },
        ]"
      />
      <p class="remark">子句的主詞和受詞都在 <code>that</code> 後面。</p>
    </NoteSlide>

    <NoteSlide title="not 放在 to 前面，表示不要做那件事" mark="not to catch">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Take care', role: '小心', kind: 'dim' },
          { t: 'not', role: '否定', kind: 'key', ring: true },
          { t: 'to catch', role: 'to + 動詞原形', kind: 'key' },
          { t: 'a cold.', role: '受詞' },
        ]"
      />
      <p class="translation">小心別感冒了。</p>
    </NoteSlide>

    <NoteSlide
      title="take care not to 和 be careful not to 都是小心不要做某事"
      mark="Take care not to"
    >
      <div class="rows is-labeled">
        <div>
          <span class="term">take care</span>
          <span
            ><NoteMark
              sentence="Take care not to wake the baby."
              :marks="['Take care not to']"
            /><span class="translation">小心不要吵醒寶寶。</span></span
          >
        </div>
        <div>
          <span class="term">be careful</span>
          <span
            ><NoteMark
              sentence="Be careful not to drop the cups."
              :marks="['Be careful not to']"
            /><span class="translation">小心不要把杯子弄掉。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="can 除了表示能力，也表示一件事有時候會發生" mark="can cause">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'a cold', role: '主詞' },
          { t: 'can', role: '可能性', kind: 'key', ring: true },
          { t: 'cause', role: '動詞原形', kind: 'key' },
          { t: 'a variety of diseases.', role: '受詞' },
        ]"
      />
      <p class="remark">感冒有可能引起各種疾病，不是每次都會。</p>
    </NoteSlide>
  </NoteDeck>
</template>
