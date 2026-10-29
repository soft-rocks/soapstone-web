<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 021, as slides, in the order of notes/dragon-english-basic-100/021.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide
      title="It has been 加時間加 since，表示從某件事發生到現在過了多久"
      mark="It has been only a week since"
    >
      <NoteWords
        :size="24"
        :parts="[
          { t: 'It has been', kind: 'key' },
          { t: 'only', role: '時間很短' },
          { t: 'a week', role: '一段時間' },
          { t: 'since', role: '連接詞', kind: 'key' },
          { t: 'I began a part-time job at a convenience store,', role: '主詞 + 過去式' },
        ]"
      />
      <p class="remark"><code>since</code> 後面的過去式表示那件事開始的時間點。</p>
    </NoteSlide>

    <NoteSlide title="It has been 在口語常縮寫成 It's been" mark="It has been">
      <div class="rows is-labeled">
        <div>
          <span class="term">It has been</span>
          <span
            ><NoteMark
              sentence="It has been two years since we moved here."
              :marks="['It has been']"
            /><span class="translation">我們搬來這裡已經兩年了。</span></span
          >
        </div>
        <div>
          <span class="term">It's been</span>
          <span
            ><NoteMark
              sentence="It's been a long time since I last saw you."
              :marks="['It\'s been']"
            /><span class="translation">自從上次見到你，已經好久了。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="be used to 表示已經習慣，to 是介系詞" mark="used to it">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I’m', role: '主詞 + be', kind: 'dim' },
          { t: 'already', kind: 'dim' },
          { t: 'used to', kind: 'key' },
          { t: 'it.', role: '代名詞' },
        ]"
      />
      <p class="remark"><code>it</code> 指前面的打工。</p>
    </NoteSlide>

    <NoteSlide title="be used to 後面接名詞或動詞-ing" mark="used to">
      <div class="rows is-labeled">
        <div>
          <span class="term">動詞-ing</span>
          <span
            ><NoteMark sentence="I'm used to getting up early." :marks="['getting']" /><span
              class="translation"
              >我習慣早起了。</span
            ></span
          >
        </div>
        <div>
          <span class="term">名詞</span>
          <span
            ><NoteMark
              sentence="She is not used to the cold weather."
              :marks="['the cold weather']"
            /><span class="translation">她不習慣寒冷的天氣。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="get used to 表示漸漸變得習慣" mark="used to">
      <div class="rows is-labeled">
        <div>
          <span class="term">名詞</span>
          <span
            ><NoteMark
              sentence="You will soon get used to the new school."
              :marks="['get used to']"
            /><span class="translation">你很快就會習慣新學校。</span></span
          >
        </div>
        <div>
          <span class="term">動詞-ing</span>
          <span
            ><NoteMark
              sentence="You'll soon get used to wearing a uniform."
              :marks="['get used to']"
            /><span class="translation">你很快就會習慣穿制服。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="already 放在 be 動詞後面，或 have 和過去分詞中間" mark="already">
      <div class="rows is-labeled">
        <div>
          <span class="term">be 動詞後面</span>
          <span
            ><NoteMark
              sentence="It's only nine o'clock, but she is already asleep."
              :marks="['is already']"
            /><span class="translation">才九點，她已經睡著了。</span></span
          >
        </div>
        <div>
          <span class="term">have 和過去分詞中間</span>
          <span
            ><NoteMark
              sentence="I have already finished my homework."
              :marks="['have already finished']"
            /><span class="translation">我已經寫完功課了。</span></span
          >
        </div>
      </div>
      <p class="remark"><code>already</code> 表示事情比預期早發生。</p>
    </NoteSlide>

    <NoteSlide title="否定句和問句用 yet，放在句尾" mark="already">
      <div class="rows is-labeled">
        <div>
          <span class="term">問句</span>
          <span
            ><NoteMark sentence="Has your package arrived yet?" :marks="['yet']" /><span
              class="translation"
              >你的包裹到了嗎？</span
            ></span
          >
        </div>
        <div>
          <span class="term">否定句</span>
          <span
            ><NoteMark sentence="I haven't eaten lunch yet." :marks="['yet']" /><span
              class="translation"
              >我還沒吃午餐。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>
</template>
