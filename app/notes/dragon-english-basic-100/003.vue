<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 003, as slides, in the order of notes/dragon-english-basic-100/003.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide title="句首的 it 只佔主詞的位置，真正的主詞在後面">
      <NoteWords
        :size="24"
        :move="{ from: 2, to: 0 }"
        :parts="[
          { t: 'It', role: '形式主詞', kind: 'key' },
          { t: 'is really pleasant', kind: 'dim' },
          {
            t: 'to take a walk early in the morning, listening to birds sing.',
            role: '真正的主詞',
            kind: 'key',
          },
        ]"
      />
      <p class="translation">{{ note.translation }}</p>
      <p class="remark">真正的主詞是 <code>to</code> 不定詞片段。</p>
    </NoteSlide>

    <NoteSlide title="逗號後面的動詞-ing 表示同時在做的另一個動作" mark="listening">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'My grandfather sat on the sofa,', role: '主要子句' },
          { t: 'reading the newspaper.', role: '動詞-ing', kind: 'key' },
        ]"
      />
      <p class="translation">我爺爺坐在沙發上看報紙。</p>
      <p class="remark">這個動詞-ing 片段是分詞構句。</p>
    </NoteSlide>

    <NoteSlide title="動詞-ing 的主詞是做主要動作的人" mark="listening">
      <div class="rows is-labeled">
        <div>
          <span class="term">主詞寫出來</span>
          <span
            ><NoteMark
              sentence="She walked home, singing a song."
              :marks="['She', 'singing']"
            /><span class="translation">她一路唱著歌走回家。</span></span
          >
        </div>
        <div>
          <span class="term">主詞沒寫出來</span>
          <span
            ><NoteMark
              sentence="It is really pleasant to take a walk early in the morning, listening to birds sing."
              :marks="['take a walk', 'listening']"
            /><span class="translation">{{ note.translation }}</span></span
          >
        </div>
      </div>
      <p class="remark"><code>listening</code> 的主詞是散步的人，不是 <code>it</code>。</p>
    </NoteSlide>

    <NoteSlide title="感官動詞後面先接受詞，再接動詞原形" mark="listening to birds sing">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'I', kind: 'dim' },
          { t: 'heard', role: '感官動詞', kind: 'key' },
          { t: 'someone', role: '受詞' },
          { t: 'to', role: '不放', kind: 'gone' },
          { t: 'call', role: '動詞原形', kind: 'key' },
          { t: 'my name.', kind: 'dim' },
        ]"
      />
      <p class="translation">我聽到有人叫我的名字。</p>
    </NoteSlide>

    <NoteSlide title="感官動詞的受詞是做動作的人或東西" mark="birds sing">
      <div class="rows is-labeled">
        <div>
          <span class="term">see</span>
          <span
            ><NoteMark
              sentence="We saw the sun go down behind the mountains."
              :marks="['the sun go down']"
            /><span class="translation">我們看到太陽落到山的後面。</span></span
          >
        </div>
        <div>
          <span class="term">watch</span>
          <span
            ><NoteMark sentence="My mother watched me play soccer." :marks="['me play']" /><span
              class="translation"
              >我媽媽看我踢足球。</span
            ></span
          >
        </div>
        <div>
          <span class="term">listen to</span>
          <span
            ><NoteMark
              sentence="I like to listen to my father play the guitar."
              :marks="['my father play']"
            /><span class="translation">我喜歡聽我爸爸彈吉他。</span></span
          >
        </div>
      </div>
      <p class="remark">原句裡 <code>birds</code> 是受詞，<code>sing</code> 是鳥做的動作。</p>
    </NoteSlide>
  </NoteDeck>
</template>
