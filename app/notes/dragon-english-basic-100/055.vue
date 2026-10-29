<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 055, as slides, in the order of notes/dragon-english-basic-100/055.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide
      title="spend 後面先接時間，再用動詞-ing 接做的事"
      mark="spend most of their time working"
    >
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Most Japanese people', role: '主詞', kind: 'dim' },
          { t: 'spend', role: '動詞', kind: 'key' },
          { t: 'most of their time', role: '時間' },
          { t: 'working', role: '做的事', kind: 'key' },
          { t: 'to live.', kind: 'dim' },
        ]"
      />
      <p class="translation">{{ note.translation }}</p>
    </NoteSlide>

    <NoteSlide title="spend 後面也可以接金錢" mark="spend">
      <div class="rows is-labeled">
        <div>
          <span class="term">時間 + 動詞-ing</span>
          <span
            ><NoteMark
              sentence="I spent the whole afternoon washing the car."
              :marks="['the whole afternoon', 'washing']"
            /><span class="translation">我花了整個下午洗車。</span></span
          >
        </div>
        <div>
          <span class="term">金錢 + 動詞-ing</span>
          <span
            ><NoteMark
              sentence="She spends a lot of money buying clothes."
              :marks="['a lot of money', 'buying']"
            /><span class="translation">她花很多錢買衣服。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="spend 做的事是名詞時，用 on 帶出" mark="spend">
      <div class="rows is-labeled">
        <div>
          <span class="term">時間 + on</span>
          <span
            ><NoteMark
              sentence="He spends too much time on video games."
              :marks="['on video games']"
            /><span class="translation">他花太多時間在電動上。</span></span
          >
        </div>
        <div>
          <span class="term">金錢 + on</span>
          <span
            ><NoteMark sentence="We spent 3,000 yen on lunch." :marks="['on lunch']" /><span
              class="translation"
              >我們午餐花了三千日圓。</span
            ></span
          >
        </div>
      </div>
      <p class="remark"><code>spend</code> 的過去式和過去分詞都是 <code>spent</code>。</p>
    </NoteSlide>

    <NoteSlide title="表示目的的 to 不定詞說明做前面那個動作的目的" mark="to live">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'She', role: '主詞', kind: 'dim' },
          { t: 'went to Tokyo', role: '動作' },
          { t: 'to study fashion design.', role: '目的', kind: 'key' },
        ]"
      />
      <p class="translation">她去東京學服裝設計。</p>
      <p class="remark"><code>work to live</code> 的意思是為了生活而工作。</p>
    </NoteSlide>

    <NoteSlide title="work to live 和 live to work 的意思不同" mark="working to live">
      <div class="rows is-labeled">
        <div>
          <span class="term">work to live</span>
          <span
            ><NoteMark sentence="Most people work to live." :marks="['work to live']" /><span
              class="translation"
              >大部分的人為了生活而工作。</span
            ></span
          >
        </div>
        <div>
          <span class="term">live to work</span>
          <span
            ><NoteMark sentence="My uncle lives to work." :marks="['lives to work']" /><span
              class="translation"
              >我舅舅為了工作而活。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>
</template>
