<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 053, as slides, in the order of notes/dragon-english-basic-100/053.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide title="感官動詞加受詞加動詞-ing，表示動作正在進行" mark="saw my mother going">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I', kind: 'dim' },
          { t: 'saw', role: '感官動詞', kind: 'key' },
          { t: 'my mother', role: '受詞' },
          { t: 'going to work', role: '動詞-ing', kind: 'key' },
        ]"
      />
      <p class="remark"><code>going to work</code> 是媽媽正在做的動作。</p>
    </NoteSlide>

    <NoteSlide title="hear 和 watch 也可以接受詞和動詞-ing" mark="saw">
      <div class="rows is-labeled">
        <div>
          <span class="term">hear</span>
          <span
            ><NoteMark
              sentence="We heard a baby crying next door."
              :marks="['heard', 'crying']"
            /><span class="translation">我們聽到隔壁有嬰兒在哭。</span></span
          >
        </div>
        <div>
          <span class="term">watch</span>
          <span
            ><NoteMark
              sentence="We watched the monkeys eating bananas."
              :marks="['watched', 'eating']"
            /><span class="translation">我們看著猴子吃香蕉。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide
      title="關係代名詞在關係子句裡當受詞時，可以省略"
      mark="the earrings I had bought her"
    >
      <NoteWords
        :size="28"
        :parts="[
          { t: 'the earrings', role: '名詞', kind: 'key' },
          { t: 'that', role: '省略', kind: 'gone' },
          { t: 'I', role: '主詞' },
          { t: 'had bought her', role: '動詞' },
        ]"
      />
      <p class="translation">我買給她的耳環</p>
    </NoteSlide>

    <NoteSlide title="had bought 表示買耳環發生在看到媽媽之前" mark="had bought">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'I saw', role: '過去式' },
          { t: 'my mother going to work wearing the earrings I', kind: 'dim' },
          { t: 'had bought', role: '過去完成式', kind: 'key' },
          { t: 'her.', kind: 'dim' },
        ]"
      />
      <p class="remark">過去完成式表示比過去某個時間更早發生的事。</p>
    </NoteSlide>

    <NoteSlide title="buy 先接人再接東西，東西在前時人用 for 帶出" mark="bought her">
      <div class="rows is-labeled">
        <div>
          <span class="term">buy + 人 + 東西</span>
          <span
            ><NoteMark
              sentence="My father bought me a new bike."
              :marks="['me', 'a new bike']"
            /><span class="translation">我爸爸買了一台新腳踏車給我。</span></span
          >
        </div>
        <div>
          <span class="term">buy + 東西 + for + 人</span>
          <span
            ><NoteMark
              sentence="I bought some flowers for my mother."
              :marks="['some flowers', 'for my mother']"
            /><span class="translation">我買了一些花給我媽媽。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="bought her 買的東西是關係子句前面的名詞" mark="earrings">
      <NoteWords
        :size="28"
        :move="{ from: 4, to: 0 }"
        :parts="[
          { t: 'the earrings', role: '東西', kind: 'key' },
          { t: 'I', kind: 'dim' },
          { t: 'had bought', role: '動詞' },
          { t: 'her', role: '人' },
          { role: '沒有東西' },
        ]"
      />
    </NoteSlide>

    <NoteSlide title="句子後面的動詞-ing 片段說明主詞同時在做什麼" mark="wearing the earrings">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'My sister', role: '主詞' },
          { t: 'went to the party', role: '主要動作' },
          { t: 'wearing her new jacket.', role: '同時的動作', kind: 'key' },
        ]"
      />
      <p class="translation">我妹妹穿著她的新外套去參加派對。</p>
      <p class="remark"><code>wearing the earrings</code> 說明媽媽去上班的時候戴著耳環。</p>
    </NoteSlide>
  </NoteDeck>
</template>
