<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 028, as slides, in the order of notes/dragon-english-basic-100/028.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide title="過去完成式表示一件事在過去某個時間點之前已經發生" mark="had changed">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Bob had changed a lot,', role: '先發生\n過去完成式', kind: 'key' },
          { t: 'so when I saw him at a class reunion,', role: '時間點\n過去式' },
          { t: 'I didn’t recognize him.', kind: 'dim' },
        ]"
      />
      <p class="remark">Bob 在同學會之前就已經變了很多。</p>
    </NoteSlide>

    <NoteSlide title="過去完成式是 had 加過去分詞，另一件過去的事用過去式" mark="had changed">
      <div class="rows is-labeled">
        <div>
          <span class="term">when</span>
          <span
            ><NoteMark
              sentence="When I got to school, the class had already begun."
              :marks="['got', 'had already begun']"
            /><span class="translation">我到學校的時候，課已經開始了。</span></span
          >
        </div>
        <div>
          <span class="term">before</span>
          <span
            ><NoteMark
              sentence="She had never seen snow before she went to Hokkaido."
              :marks="['had never seen', 'went']"
            /><span class="translation">她去北海道之前從來沒看過雪。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="so 連接兩個子句，前面是原因，後面是結果" mark="so">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Bob had changed a lot,', role: '原因' },
          { t: 'so', role: '連接詞', kind: 'key' },
          { t: 'when I saw him at a class reunion, I didn’t recognize him.', role: '結果' },
        ]"
      />
    </NoteSlide>

    <NoteSlide title="so 後面的子句裡可以再放一個 when 子句" mark="so when I saw him">
      <div class="rows is-labeled">
        <div>
          <span class="term">so</span>
          <span
            ><NoteMark sentence="It was raining, so we stayed home." :marks="['so']" /><span
              class="translation"
              >外面在下雨，所以我們待在家。</span
            ></span
          >
        </div>
        <div>
          <span class="term">so + when 子句</span>
          <span
            ><NoteMark
              sentence="I was tired, so when I got home, I went to bed right away."
              :marks="['so when I got home']"
            /><span class="translation">我很累，所以我回到家就馬上去睡了。</span></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>
</template>
