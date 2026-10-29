<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 073, as slides, in the order of notes/dragon-english-basic-100/073.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide title="lack 當動詞，後面直接接名詞" mark="lack common sense">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Some Japanese tourists', role: '主詞', kind: 'dim' },
          { t: 'lack', role: '動詞', kind: 'key' },
          { t: 'common sense', role: '名詞', kind: 'key' },
          { t: 'and carry a lot of cash …', kind: 'dim' },
        ]"
      />
      <p class="remark"><code>lack</code> 的意思是缺少。<code>lack</code> 後面不加介系詞。</p>
    </NoteSlide>

    <NoteSlide title="be lacking in 也表示缺少，常接自信、常識這類特質" mark="lack">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Ken', role: '主詞', kind: 'dim' },
          { t: 'is lacking in', role: '動詞', kind: 'key' },
          { t: 'confidence.', role: '名詞' },
        ]"
      />
      <p class="translation">Ken 缺乏自信。</p>
    </NoteSlide>

    <NoteSlide title="lack 當名詞時用 a lack of" mark="lack">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'There is', kind: 'dim' },
          { t: 'a lack of', role: '名詞 lack', kind: 'key' },
          { t: 'doctors', role: '名詞' },
          { t: 'in this town.', kind: 'dim' },
        ]"
      />
      <p class="translation">這個小鎮缺少醫生。</p>
    </NoteSlide>

    <NoteSlide title="a lot of 後面接可數名詞複數或不可數名詞" mark="a lot of">
      <div class="rows is-labeled">
        <div>
          <span class="term">可數名詞複數</span>
          <span
            ><NoteMark
              sentence="A lot of people visit this park on weekends."
              :marks="['people']"
            /><span class="translation">週末有很多人來這個公園。</span></span
          >
        </div>
        <div>
          <span class="term">不可數名詞</span>
          <span
            ><NoteMark sentence="I don't have a lot of time today." :marks="['time']" /><span
              class="translation"
              >我今天沒有很多時間。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="cash 是不可數名詞，不加 -s" mark="cash">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'carry', kind: 'dim' },
          { t: 'a lot of', role: '很多' },
          { t: 'cash', role: '不可數名詞', kind: 'key', ring: true },
          { t: 'in their back pockets.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
  </NoteDeck>
</template>
