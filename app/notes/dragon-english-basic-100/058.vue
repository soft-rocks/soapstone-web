<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 058, as slides, in the order of notes/dragon-english-basic-100/058.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide title="increase 當名詞時，用 in 帶出增加的東西" mark="increase in">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'The increase', role: '名詞', kind: 'key' },
          { t: 'in', role: '介系詞', kind: 'key' },
          { t: 'the amount of CO2 in the atmosphere', role: '增加的東西' },
          { t: 'is closely connected with global warming.', kind: 'dim' },
        ]"
      />
      <p class="translation">{{ note.translation }}</p>
    </NoteSlide>

    <NoteSlide title="decrease 和 rise 當名詞時也用 in" mark="increase in">
      <div class="rows is-labeled">
        <div>
          <span class="term">decrease in</span>
          <span
            ><NoteMark
              sentence="We saw a decrease in the number of car accidents."
              :marks="['decrease in']"
            /><span class="translation">我們看到車禍的數量減少了。</span></span
          >
        </div>
        <div>
          <span class="term">rise in</span>
          <span
            ><NoteMark
              sentence="A rise in temperature can cause heavy rain."
              :marks="['rise in']"
            /><span class="translation">氣溫上升可能造成大雨。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="increase 當動詞時，增加的東西是主詞，不加 in" mark="increase">
      <div class="rows is-labeled">
        <div>
          <span class="term">名詞</span>
          <span
            ><NoteMark
              sentence="There was a large increase in the price of rice."
              :marks="['increase in', 'the price of rice']"
            /><span class="translation">米價漲了很多。</span></span
          >
        </div>
        <div>
          <span class="term">動詞</span>
          <span
            ><NoteMark
              sentence="Prices increased a lot last year."
              :marks="['Prices', 'increased']"
            /><span class="translation">去年物價漲了很多。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide
      title="the amount of 接不可數名詞，the number of 接複數名詞"
      mark="the amount of CO2"
    >
      <div class="rows is-labeled">
        <div>
          <span class="term">the amount of<br /><i>量</i></span>
          <span
            ><NoteMark
              sentence="The amount of water in the river has dropped."
              :marks="['water']"
            /><span class="translation">河裡的水量變少了。</span></span
          >
        </div>
        <div>
          <span class="term">the number of<br /><i>個數</i></span>
          <span
            ><NoteMark
              sentence="The number of cars on this road increases every year."
              :marks="['cars']"
            /><span class="translation">這條路上的車子數量每年都在增加。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="the number of 當主詞時，動詞用單數形">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'The number of', kind: 'key' },
          { t: 'students in this school', role: '複數名詞' },
          { t: 'is', role: '單數動詞', kind: 'key', ring: true },
          { t: '800.', kind: 'dim' },
        ]"
      />
      <p class="translation">這所學校的學生人數是 800 人。</p>
    </NoteSlide>

    <NoteSlide title="the 換成 a large 的時候，表示很多" mark="the amount of">
      <div class="rows is-labeled">
        <div>
          <span class="term">a large amount of</span>
          <span
            ><NoteMark
              sentence="A large amount of rain fell last night."
              :marks="['A large amount of']"
            /><span class="translation">昨晚下了大量的雨。</span></span
          >
        </div>
        <div>
          <span class="term">a large number of</span>
          <span
            ><NoteMark
              sentence="We need a large number of chairs for the party."
              :marks="['a large number of']"
            /><span class="translation">我們的派對需要很多椅子。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="be connected with 表示兩件事有關係，with 可以換成 to" mark="connected with">
      <div class="rows is-labeled">
        <div>
          <span class="term">connected with</span>
          <span
            ><NoteMark
              sentence="The increase in the number of cars is connected with the bad air in the city."
              :marks="['connected with']"
            /><span class="translation">汽車數量增加，跟城市的空氣不好有關。</span></span
          >
        </div>
        <div>
          <span class="term">connected to</span>
          <span
            ><NoteMark
              sentence="The rise in the price of vegetables is connected to the typhoon."
              :marks="['connected to']"
            /><span class="translation">蔬菜價格上漲跟颱風有關。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="closely 放在 connected 前面，表示關係很密切" mark="closely">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Your health', role: '主詞' },
          { t: 'is', kind: 'dim' },
          { t: 'closely', role: '副詞', kind: 'key', ring: true },
          { t: 'connected with', kind: 'key' },
          { t: 'what you eat.', role: '名詞子句' },
        ]"
      />
      <p class="translation">你的健康跟你吃什麼關係很密切。</p>
    </NoteSlide>
  </NoteDeck>
</template>
