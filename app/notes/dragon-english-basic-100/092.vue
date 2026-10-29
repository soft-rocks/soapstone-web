<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 092, as slides, in the order of notes/dragon-english-basic-100/092.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide title="drive 接人當受詞，表示開車載人去某個地方" mark="drive their children">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'parents', role: '主詞', kind: 'dim' },
          { t: 'drive', role: '動詞', kind: 'key' },
          { t: 'their children', role: '人', kind: 'key' },
          { t: 'everywhere', role: '地方' },
        ]"
      />
    </NoteSlide>

    <NoteSlide title="地方是名詞時，前面加 to" mark="everywhere">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'My mother', kind: 'dim' },
          { t: 'drives', role: '動詞' },
          { t: 'me', role: '人' },
          { t: 'to school', role: 'to + 地方', kind: 'key' },
          { t: 'every morning.', kind: 'dim' },
        ]"
      />
      <p class="translation">我媽媽每天早上開車送我上學。</p>
    </NoteSlide>

    <NoteSlide title="everywhere、home、there 是副詞，前面不加 to" mark="everywhere">
      <div class="rows is-labeled">
        <div>
          <span class="term">everywhere</span>
          <span
            ><NoteMark
              sentence="My uncle drove us everywhere when we visited him in Hokkaido."
              :marks="['everywhere']"
            /><span class="translation"
              >我們去北海道找我叔叔的時候，他開車載我們到處去。</span
            ></span
          >
        </div>
        <div>
          <span class="term">home</span>
          <span
            ><NoteMark sentence="Can you drive me home?" :marks="['home']" /><span
              class="translation"
              >你可以開車送我回家嗎？</span
            ></span
          >
        </div>
        <div>
          <span class="term">there</span>
          <span
            ><NoteMark
              sentence="The museum is far from here, so I'll drive you there."
              :marks="['there']"
            /><span class="translation">博物館離這裡很遠，所以我開車送你去。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="until 表示動作或狀態持續到某個時間點" mark="until">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'I lived with my parents', role: '持續的狀態' },
          { t: 'until', role: '連接詞', kind: 'key' },
          { t: 'I got married.', role: '時間點' },
        ]"
      />
      <p class="translation">我結婚以前都跟爸媽住。</p>
    </NoteSlide>

    <NoteSlide title="until 子句講未來的事也用現在式" mark="they are">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Stay in bed', kind: 'dim' },
          { t: 'until', role: '連接詞' },
          { t: 'you', role: '主詞' },
          { t: 'feel', role: '現在式', kind: 'key', ring: true },
          { t: 'better.', kind: 'dim' },
        ]"
      />
      <p class="translation">好一點之前都待在床上。</p>
      <p class="remark">原句講的是一般的情況，所以用現在式 <code>are</code>。</p>
    </NoteSlide>

    <NoteSlide title="enough 放在形容詞後面，表示程度夠做某件事" mark="old enough to get">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'they are', kind: 'dim' },
          { t: 'old', role: '形容詞' },
          { t: 'enough', kind: 'key' },
          { t: 'to get a driver’s license.', role: 'to + 動詞原形\n能做的事' },
        ]"
      />
    </NoteSlide>

    <NoteSlide title="not 加形容詞加 enough，表示程度不夠，做不到那件事" mark="old enough">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'This box', kind: 'dim' },
          { t: 'isn\'t', role: 'be + not', kind: 'key' },
          { t: 'big', role: '形容詞' },
          { t: 'enough', kind: 'key' },
          { t: 'to hold all the books.', role: 'to + 動詞原形\n做不到的事' },
        ]"
      />
      <p class="translation">這個箱子不夠大，裝不下所有的書。</p>
    </NoteSlide>
  </NoteDeck>
</template>
