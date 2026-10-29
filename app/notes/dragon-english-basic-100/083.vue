<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 083, as slides, in the order of notes/dragon-english-basic-100/083.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide title="quite a few 表示相當多，後面接可數名詞複數" mark="Quite a few">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Quite a few', role: '相當多', kind: 'key' },
          { t: 'elderly women', role: '可數名詞複數', kind: 'key' },
          { t: 'look down on their husbands, …', kind: 'dim' },
        ]"
      />
    </NoteSlide>

    <NoteSlide title="a few 是有一些，few 是很少" mark="Quite a few">
      <div class="rows is-labeled">
        <div>
          <span class="term">quite a few<br /><i>相當多</i></span>
          <span
            ><NoteMark
              sentence="Quite a few students walk to school."
              :marks="['Quite a few']"
            /><span class="translation">相當多學生走路上學。</span></span
          >
        </div>
        <div>
          <span class="term">a few<br /><i>有一些</i></span>
          <span
            ><NoteMark sentence="Ken has a few comic books in his bag." :marks="['a few']" /><span
              class="translation"
              >Ken 的包包裡有幾本漫畫。</span
            ></span
          >
        </div>
        <div>
          <span class="term">few<br /><i>很少</i></span>
          <span
            ><NoteMark sentence="Few people know this small town." :marks="['Few']" /><span
              class="translation"
              >很少人知道這個小鎮。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="逗號後面的 who 子句補充說明前面的人" mark="who">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'their husbands,', role: '人', kind: 'key' },
          {
            t: 'who cannot do anything by themselves and ask too much of them.',
            role: '補充說明',
            kind: 'key',
          },
        ]"
      />
      <p class="remark">子句說明這些丈夫是什麼樣的人。</p>
    </NoteSlide>

    <NoteSlide title="by 加反身代名詞表示自己一個人做" mark="by themselves">
      <div class="rows is-labeled">
        <div>
          <span class="term">I</span>
          <span
            ><NoteMark sentence="I made this cake by myself." :marks="['by myself']" /><span
              class="translation"
              >這個蛋糕是我自己做的。</span
            ></span
          >
        </div>
        <div>
          <span class="term">The old man</span>
          <span
            ><NoteMark sentence="The old man lives by himself." :marks="['by himself']" /><span
              class="translation"
              >那位老先生一個人住。</span
            ></span
          >
        </div>
        <div>
          <span class="term">The children</span>
          <span
            ><NoteMark
              sentence="The children cleaned the classroom by themselves."
              :marks="['by themselves']"
            /><span class="translation">孩子們自己打掃了教室。</span></span
          >
        </div>
      </div>
      <p class="remark">反身代名詞要跟主詞一致。</p>
    </NoteSlide>

    <NoteSlide title="look down on 由動詞、副詞和介系詞組成，受詞放在 on 後面" mark="look down on">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'look', role: '動詞', kind: 'key' },
          { t: 'down', role: '副詞', kind: 'key' },
          { t: 'on', role: '介系詞', kind: 'key' },
          { t: 'their husbands,', role: '受詞' },
        ]"
      />
      <p class="remark"><code>look down on</code> 表示看不起。受詞不放在中間。</p>
    </NoteSlide>

    <NoteSlide title="look up to、put up with 的結構和 look down on 一樣" mark="look down on">
      <div class="rows is-labeled">
        <div>
          <span class="term">look up to<br /><i>尊敬</i></span>
          <span
            ><NoteMark
              sentence="I have always looked up to my older brother."
              :marks="['looked up to']"
            /><span class="translation">我一直很尊敬我哥哥。</span></span
          >
        </div>
        <div>
          <span class="term">put up with<br /><i>忍受</i></span>
          <span
            ><NoteMark
              sentence="How do you put up with your noisy neighbors?"
              :marks="['put up with']"
            /><span class="translation">你怎麼忍受得了那麼吵的鄰居？</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="ask 後面放要求的內容，of 後面放人" mark="ask too much of them">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'ask', role: '動詞', kind: 'key' },
          { t: 'too much', role: '要求的內容', alts: ['a lot'] },
          { t: 'of', role: '介系詞', kind: 'key' },
          { t: 'them.', role: '人' },
        ]"
      />
      <p class="remark">原句的 <code>ask too much of them</code> 表示對她們要求太多。</p>
    </NoteSlide>
  </NoteDeck>
</template>
