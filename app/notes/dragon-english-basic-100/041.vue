<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 041, as slides, in the order of notes/dragon-english-basic-100/041.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide title="let 加受詞加動詞原形，表示允許一個人做某件事" mark="lets anyone else play">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'he never', kind: 'dim' },
          { t: 'lets', role: '動詞', kind: 'key' },
          { t: 'anyone else', role: '受詞' },
          { t: 'play', role: '動詞原形', kind: 'key', ring: true },
          { t: 'them.', role: 'play 的受詞' },
        ]"
      />
      <p class="remark">受詞是做動作的人。動詞原形前面不放 <code>to</code>。</p>
    </NoteSlide>

    <NoteSlide title="let 的過去式和過去分詞都是 let" mark="lets">
      <div class="rows is-labeled">
        <div>
          <span class="term">現在式</span>
          <span
            ><NoteMark
              sentence="My parents let me stay up late on Saturdays."
              :marks="['let']"
            /><span class="translation">我爸媽星期六讓我晚睡。</span></span
          >
        </div>
        <div>
          <span class="term">過去式</span>
          <span
            ><NoteMark
              sentence="My father let me use his camera yesterday."
              :marks="['let']"
            /><span class="translation">我爸爸昨天讓我用他的相機。</span></span
          >
        </div>
        <div>
          <span class="term">過去式</span>
          <span
            ><NoteMark
              sentence="The teacher let us go home early last Friday."
              :marks="['let']"
            /><span class="translation">老師上星期五讓我們提早回家。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="else 放在 anyone 這類字後面，意思是其他的" mark="anyone else">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Does', kind: 'dim' },
          { t: 'anyone', role: '代名詞' },
          { t: 'else', role: '其他的', kind: 'key', ring: true },
          { t: 'want some cake?', kind: 'dim' },
        ]"
      />
      <p class="translation">還有其他人想吃蛋糕嗎？</p>
      <p class="remark">原句的 <code>anyone else</code> 指 Tom 以外的人。</p>
    </NoteSlide>

    <NoteSlide title="else 也可以放在疑問詞後面" mark="else">
      <div class="rows is-labeled">
        <div>
          <span class="term">what</span>
          <span
            ><NoteMark sentence="What else did you buy?" :marks="['What else']" /><span
              class="translation"
              >你還買了什麼？</span
            ></span
          >
        </div>
        <div>
          <span class="term">who</span>
          <span
            ><NoteMark sentence="Who else is coming to the party?" :marks="['Who else']" /><span
              class="translation"
              >還有誰要來派對？</span
            ></span
          >
        </div>
        <div>
          <span class="term">where</span>
          <span
            ><NoteMark sentence="Where else did you go in Taiwan?" :marks="['Where else']" /><span
              class="translation"
              >你在台灣還去了哪裡？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="never 放在一般動詞前面，動詞照樣加 -s" mark="never lets">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'he', role: '第三人稱單數' },
          { t: 'never', role: '副詞', kind: 'key', ring: true },
          { t: 'lets', role: '動詞 + s', kind: 'key' },
          { t: 'anyone else play them.', kind: 'dim' },
        ]"
      />
      <p class="remark"><code>never</code> 表示從來不。</p>
    </NoteSlide>

    <NoteSlide title="never 放在 be 動詞後面" mark="never">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'She', role: '主詞' },
          { t: 'is', role: 'be 動詞', kind: 'key' },
          { t: 'never', role: '副詞', kind: 'key', ring: true },
          { t: 'late for school.', kind: 'dim' },
        ]"
      />
      <p class="translation">她上學從來不遲到。</p>
    </NoteSlide>
  </NoteDeck>
</template>
