<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 027, as slides, in the order of notes/dragon-english-basic-100/027.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide
      title="take 加時間加 off 表示請假，時間放在 take 和 off 中間"
      mark="took two weeks off"
    >
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'took', role: '動詞', kind: 'key' },
          { t: 'two weeks', role: '時間', ring: true },
          { t: 'off,', role: '小品詞', kind: 'key' },
        ]"
      />
      <p class="remark">請假就是不去上班或上學。</p>
    </NoteSlide>

    <NoteSlide title="take off 中間的時間可以是一段長度或特定的日子" mark="two weeks">
      <div class="rows is-labeled">
        <div>
          <span class="term">一段長度</span>
          <span
            ><NoteMark
              sentence="My father took three days off to visit my grandmother."
              :marks="['three days']"
            /><span class="translation">我爸爸請了三天假去看我奶奶。</span></span
          >
        </div>
        <div>
          <span class="term">特定的日子</span>
          <span
            ><NoteMark sentence="Can I take Friday off next week?" :marks="['Friday']" /><span
              class="translation"
              >我下星期五可以請假嗎？</span
            ></span
          >
        </div>
        <div>
          <span class="term">時段</span>
          <span
            ><NoteMark
              sentence="She was sick, so she took the afternoon off."
              :marks="['the afternoon']"
            /><span class="translation">她生病了，所以下午請了假。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="同一個主詞做兩件事時，用 and 連接兩個動詞" mark="and went">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I', role: '主詞', kind: 'key' },
          { t: 'took two weeks off,', role: '動詞 A' },
          { t: 'and', role: '連接詞' },
          { t: 'I', role: '不再寫', kind: 'gone' },
          { t: 'went on a trip to Europe', role: '動詞 B' },
          { t: 'with my wife.', kind: 'dim' },
        ]"
      />
      <p class="remark">原句的逗號只表示停頓，可以省略。</p>
    </NoteSlide>

    <NoteSlide title="and 連接兩個動詞時，前面一般不加逗號" mark="and">
      <div class="rows is-labeled">
        <div>
          <span class="term">finished、went</span
          ><span
            ><NoteMark
              sentence="Tom finished his homework and went to bed."
              :marks="['and']"
            /><span class="translation">Tom 寫完功課就去睡了。</span></span
          >
        </div>
        <div>
          <span class="term">opened、looked</span
          ><span
            ><NoteMark sentence="She opened the window and looked outside." :marks="['and']" /><span
              class="translation"
              >她打開窗戶往外看。</span
            ></span
          >
        </div>
        <div>
          <span class="term">came、went</span
          ><span
            ><NoteMark
              sentence="My sister came home and went straight to her room."
              :marks="['and']"
            /><span class="translation">我妹妹回到家，就直接進了她的房間。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="last、next、this 加時間名詞，前面不加介系詞" mark="Last summer">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'in', role: '不加介系詞', kind: 'gone' },
          { t: 'Last summer', role: 'last + 時間名詞', kind: 'key' },
          { t: 'I took two weeks off …', kind: 'dim' },
        ]"
      />
    </NoteSlide>

    <NoteSlide title="last、next、this 加時間名詞，可以放在句首或句尾" mark="Last summer">
      <div class="rows is-labeled">
        <div>
          <span class="term">句首</span>
          <span
            ><NoteMark
              sentence="Last summer we stayed at my uncle's house in Tainan."
              :marks="['Last summer']"
            /><span class="translation">去年夏天我們住在我叔叔台南的家。</span></span
          >
        </div>
        <div>
          <span class="term">句尾</span>
          <span
            ><NoteMark sentence="I'll see you next Monday." :marks="['next Monday']" /><span
              class="translation"
              >我們下星期一見。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>
</template>
