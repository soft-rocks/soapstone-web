<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 090, as slides, in the order of notes/dragon-english-basic-100/090.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide title="give 後面接兩個受詞，人在前，東西在後" mark="gives you stress and fatigue">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'If', kind: 'dim' },
          { t: 'city life', role: '主詞' },
          { t: 'gives', role: '動詞', kind: 'key' },
          { t: 'you', role: '人' },
          { t: 'stress and fatigue,', role: '東西' },
        ]"
      />
      <p class="remark">主詞 <code>city life</code> 是單數，所以動詞是 <code>gives</code>。</p>
    </NoteSlide>

    <NoteSlide title="東西放在前面時，人用 to 帶出" mark="gives you stress and fatigue">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Please', kind: 'dim' },
          { t: 'give', role: '動詞' },
          { t: 'this letter', role: '東西' },
          { t: 'to your father.', role: 'to + 人', kind: 'key' },
        ]"
      />
      <p class="translation">請把這封信交給你爸爸。</p>
    </NoteSlide>

    <NoteSlide title="主詞不是人時，give 表示帶來某種感覺或結果" mark="city life gives">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'This music', role: '主詞', kind: 'key' },
          { t: 'gives', role: '動詞' },
          { t: 'me', role: '人' },
          { t: 'energy.', role: '感覺' },
        ]"
      />
      <p class="translation">這首音樂讓我很有精神。</p>
    </NoteSlide>

    <NoteSlide title="it is best to 的 it 是形式主詞，真正的主詞是 to 不定詞" mark="it is best to">
      <NoteWords
        :size="24"
        :move="{ from: 2, to: 0 }"
        :parts="[
          { t: 'it', role: '形式主詞', kind: 'key' },
          { t: 'is best', kind: 'dim' },
          { t: 'to relax in the mountains or on beaches', role: '真正的主詞', kind: 'key' },
        ]"
      />
      <p class="remark"><code>it is best to</code> 表示最好的做法是什麼。</p>
    </NoteSlide>

    <NoteSlide title="比較兩個做法用 it is better to，另一個做法用 than to" mark="it is best to">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'It is better', kind: 'dim' },
          { t: 'to take the train', role: '比較好的做法', kind: 'key' },
          { t: 'than to drive.', role: 'than to + 動詞原形' },
        ]"
      />
      <p class="translation">搭火車比開車好。</p>
    </NoteSlide>

    <NoteSlide title="最好不要做什麼，用 it is best not to" mark="it is best to">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'It is best', kind: 'dim' },
          { t: 'not', role: '否定', kind: 'key', ring: true },
          { t: 'to eat too much before bed.', role: 'to + 動詞原形' },
        ]"
      />
      <p class="translation">睡前最好不要吃太多。</p>
    </NoteSlide>

    <NoteSlide title="in order to 表示目的" mark="in order to relieve">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'We booked early', role: '動作' },
          { t: 'in order to', kind: 'key' },
          { t: 'get cheap tickets.', role: '目的' },
        ]"
      />
      <p class="translation">為了買到便宜的票，我們提早訂票。</p>
      <p class="remark">意思跟表示目的的 <code>to</code> 不定詞一樣。</p>
    </NoteSlide>

    <NoteSlide title="否定的目的用 in order not to" mark="in order to">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'We closed the door quietly', role: '動作' },
          { t: 'in order not to', kind: 'key' },
          { t: 'wake the baby.', role: '不要發生的事' },
        ]"
      />
      <p class="translation">我們輕輕關上門，以免吵醒小嬰兒。</p>
    </NoteSlide>

    <NoteSlide title="if 子句說一般的情況或未來可能的事，用現在式" mark="If city life gives">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'If', role: '連接詞', kind: 'key' },
          { t: 'city life', role: '主詞' },
          { t: 'gives', role: '現在式', kind: 'key', ring: true },
          { t: 'you stress and fatigue,', kind: 'dim' },
          { t: 'it is best to relax …', role: '主要子句' },
        ]"
      />
      <p class="remark"><code>if</code> 子句放在前面時，後面加逗號。</p>
    </NoteSlide>

    <NoteSlide
      title="if 句的主要子句可以用現在式、will、祈使句或 it is best to"
      mark="it is best to"
    >
      <div class="rows is-labeled">
        <div>
          <span class="term">現在式</span>
          <span
            ><NoteMark
              sentence="If Ann feels nervous, she talks very fast."
              :marks="['talks']"
            /><span class="translation">如果 Ann 覺得緊張，她說話就會很快。</span></span
          >
        </div>
        <div>
          <span class="term">will</span>
          <span
            ><NoteMark
              sentence="If the weather is nice this weekend, we'll go hiking."
              :marks="['we\'ll go']"
            /><span class="translation">如果這個週末天氣好，我們就去爬山。</span></span
          >
        </div>
        <div>
          <span class="term">祈使句</span>
          <span
            ><NoteMark sentence="If you feel tired, take a break." :marks="['take']" /><span
              class="translation"
              >如果你覺得累，就休息一下。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>
</template>
