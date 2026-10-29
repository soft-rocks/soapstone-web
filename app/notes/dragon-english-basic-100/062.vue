<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 062, as slides, in the order of notes/dragon-english-basic-100/062.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide title="倍數放在第一個 as 的前面" mark="about twice as expensive">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'This motorbike is', kind: 'dim' },
          { t: 'about', role: '大約' },
          { t: 'twice', role: '倍數', kind: 'key', ring: true },
          { t: 'as expensive', role: 'as + 形容詞', kind: 'key' },
          { t: 'in the U.K. as in Japan.', kind: 'dim' },
        ]"
      />
      <p class="translation">{{ note.translation }}</p>
      <p class="remark"><code>about</code> 放在倍數前面。</p>
    </NoteSlide>

    <NoteSlide title="兩倍用 twice，三倍以上用 times，一半用 half" mark="twice">
      <div class="rows is-labeled">
        <div>
          <span class="term">twice</span>
          <span
            ><NoteMark sentence="My room is twice as big as yours." :marks="['twice']" /><span
              class="translation"
              >我的房間是你的兩倍大。</span
            ></span
          >
        </div>
        <div>
          <span class="term">three times</span>
          <span
            ><NoteMark
              sentence="This bridge is three times as long as that one."
              :marks="['three times']"
            /><span class="translation">這座橋是那座的三倍長。</span></span
          >
        </div>
        <div>
          <span class="term">half</span>
          <span
            ><NoteMark sentence="This bag is half as heavy as my old one." :marks="['half']" /><span
              class="translation"
              >這個包包只有我舊包包的一半重。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="比較數量時，用 as much 或 as many 加名詞" mark="twice as">
      <div class="rows is-labeled">
        <div>
          <span class="term">as much<br /><i>不可數名詞</i></span>
          <span
            ><NoteMark
              sentence="Tom earns twice as much money as his brother."
              :marks="['as much money']"
            /><span class="translation">Tom 賺的錢是他弟弟的兩倍。</span></span
          >
        </div>
        <div>
          <span class="term">as many<br /><i>複數名詞</i></span>
          <span
            ><NoteMark
              sentence="Tom has three times as many comics as I do."
              :marks="['as many comics']"
            /><span class="translation">Tom 的漫畫是我的三倍多。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="第二個 as 後面的介系詞片語保留介系詞" :mark="['in the U.K.', 'in Japan']">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'twice as expensive', kind: 'dim' },
          { t: 'in the U.K.', role: '介系詞片語', kind: 'key' },
          { t: 'as', role: '連接詞' },
          { t: 'in Japan.', role: '介系詞片語', kind: 'key' },
        ]"
      />
      <p class="remark">比較的是在英國的價錢和在日本的價錢。</p>
    </NoteSlide>

    <NoteSlide title="沒有倍數的 as ... as 也可以比較兩個介系詞片語" mark="as expensive">
      <div class="rows is-labeled">
        <div>
          <span class="term">否定句</span>
          <span
            ><NoteMark
              sentence="The beach isn't as crowded in winter as in summer."
              :marks="['in winter', 'in summer']"
            /><span class="translation">海灘冬天沒有夏天那麼擠。</span></span
          >
        </div>
        <div>
          <span class="term">疑問句</span>
          <span
            ><NoteMark
              sentence="Is it as hot in Kaohsiung as in Taipei?"
              :marks="['in Kaohsiung', 'in Taipei']"
            /><span class="translation">高雄跟台北一樣熱嗎？</span></span
          >
        </div>
        <div>
          <span class="term">just as</span>
          <span
            ><NoteMark
              sentence="This ramen shop is just as busy on weekdays as on weekends."
              :marks="['just']"
            /><span class="translation">這家拉麵店平日跟週末一樣忙。</span></span
          >
        </div>
      </div>
      <p class="remark"><code>just as</code> 表示兩邊完全一樣。</p>
    </NoteSlide>
  </NoteDeck>
</template>
