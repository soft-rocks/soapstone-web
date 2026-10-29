<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 007, as slides, in the order of notes/dragon-english-basic-100/007.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide title="tell 後面先接聽話的人，再接 that 子句" mark="told us that">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'She', kind: 'dim' },
          { t: 'told', role: '動詞', kind: 'key' },
          { t: 'me', role: '聽話的人' },
          { t: 'that she was busy.', role: 'that 子句', kind: 'key' },
        ]"
      />
      <p class="translation">她跟我說她很忙。</p>
      <p class="remark"><code>that</code> 子句是說話的內容。</p>
    </NoteSlide>

    <NoteSlide title="tell 後面的 that 可以省略" mark="that">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'My father', kind: 'dim' },
          { t: 'told', role: '動詞' },
          { t: 'us', role: '聽話的人' },
          { t: 'that', role: '可以省略', kind: 'gone' },
          { t: 'he would be home late.', role: '說話的內容' },
        ]"
      />
      <p class="translation">我爸爸跟我們說他會晚回家。</p>
    </NoteSlide>

    <NoteSlide title="say 後面不接人，直接接 that 子句" mark="told us">
      <div class="rows is-labeled">
        <div>
          <span class="term">tell + 人</span>
          <span
            ><NoteMark sentence="She told me that she was busy." :marks="['told me']" /><span
              class="translation"
              >她跟我說她很忙。</span
            ></span
          >
        </div>
        <div>
          <span class="term">say</span>
          <span
            ><NoteMark sentence="Ann said that she liked the movie." :marks="['said that']" /><span
              class="translation"
              >Ann 說她喜歡那部電影。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide
      title="主要動詞是過去式，that 子句的動詞也改成過去式"
      :mark="['told', 'was inconvenient']"
    >
      <NoteWords
        :size="22"
        :parts="[
          { t: 'Tom', kind: 'dim' },
          { t: 'told', role: '過去式', kind: 'key' },
          { t: 'us that we should rent a car to get around the city', kind: 'dim' },
          { t: 'because the public transportation', kind: 'dim' },
          { t: 'was inconvenient.', role: '過去式', kind: 'key' },
        ]"
      />
      <p class="translation">{{ note.translation }}</p>
    </NoteSlide>

    <NoteSlide title="should 表示建議，後面接動詞原形" mark="should rent">
      <div class="rows is-labeled">
        <div>
          <span class="term">should</span>
          <span
            ><NoteMark sentence="You should go to bed early tonight." :marks="['should go']" /><span
              class="translation"
              >你今晚應該早點睡。</span
            ></span
          >
        </div>
        <div>
          <span class="term">shouldn't</span>
          <span
            ><NoteMark
              sentence="We shouldn't eat too much before bed."
              :marks="['shouldn\'t eat']"
            /><span class="translation">我們睡前不應該吃太多。</span></span
          >
        </div>
      </div>
      <p class="remark"><code>shouldn't</code> 是 <code>should not</code> 的縮寫。</p>
    </NoteSlide>

    <NoteSlide title="轉述過去的建議時，should 不改形式" mark="should">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'My teacher', kind: 'dim' },
          { t: 'told', role: '過去式' },
          { t: 'me that I', kind: 'dim' },
          { t: 'should', role: '不改形式', kind: 'key', ring: true },
          { t: 'read more English books.', kind: 'dim' },
        ]"
      />
      <p class="translation">我的老師跟我說我應該多讀英文書。</p>
    </NoteSlide>

    <NoteSlide title="動作後面的 to 不定詞說明做這個動作的目的" mark="to get around the city">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Tom told us that we should', kind: 'dim' },
          { t: 'rent a car', role: '動作' },
          { t: 'to get around the city', role: '目的', kind: 'key' },
          { t: 'because the public transportation was inconvenient.', kind: 'dim' },
        ]"
      />
      <p class="translation">{{ note.translation }}</p>
    </NoteSlide>
  </NoteDeck>
</template>
