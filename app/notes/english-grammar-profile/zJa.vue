<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-use-you-general, as slides, in the order of content.md. One point per slide: the title
// names it, the diagram shows it, and `mark` circles the matching words of the note's sentence.
// Keep the parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="you 泛指任何人" mark="you">
      <NoteWords
        :size="18"
        :parts="[
          { t: 'If', kind: 'dim' },
          { t: 'you', role: '任何人', kind: 'key' },
          { t: 'want to travel to China,', kind: 'dim' },
          { t: 'you', role: '任何人', kind: 'key' },
          { t: 'need to learn a little Chinese.', kind: 'dim' },
        ]"
      />
      <p class="translation">如果你想去中國旅行，就要學一點中文。</p>
    </NoteSlide>

    <NoteSlide title="常用 you 的場合" mark="you need">
      <div class="rows is-labeled">
        <div>
          <span class="term">東西怎麼用</span>
          <span
            ><NoteMark
              sentence="With this phone, you can take pictures and play games."
              :marks="['you can']"
            /><span class="translation">這支手機可以拍照，也可以玩遊戲。</span></span
          >
        </div>
        <div>
          <span class="term">一個地方有什麼</span>
          <span
            ><NoteMark
              sentence="In this town, you can find good food everywhere."
              :marks="['you can']"
            /><span class="translation">這個小鎮到處都吃得到好吃的東西。</span></span
          >
        </div>
        <div>
          <span class="term">給建議</span>
          <span
            ><NoteMark
              sentence="You should drink a lot of water in hot weather."
              :marks="['You should']"
            /><span class="translation">天氣熱的時候要多喝水。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="your 和 yourself">
      <div class="rows is-labeled">
        <div>
          <span class="term">所有格 your</span>
          <span
            ><NoteMark
              sentence="You need your passport to get on the plane."
              :marks="['your']"
            /><span class="translation">搭飛機要帶護照。</span></span
          >
        </div>
        <div>
          <span class="term">反身代名詞 yourself</span>
          <span
            ><NoteMark
              sentence="In the hotel, you can make yourself a cup of tea."
              :marks="['yourself']"
            /><span class="translation">在飯店裡可以自己泡一杯茶。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="前面用 you，後面也用 you" mark="you need">
      <NoteFix
        wrong="If you want to stay healthy, people should eat vegetables."
        right="If you want to stay healthy, you should eat vegetables."
        fix="you should"
      />
    </NoteSlide>

    <NoteSlide title="you 後面的動詞不加 s" mark="you want">
      <NoteFix
        wrong="At this shop, you gets a free coffee with every cake."
        right="At this shop, you get a free coffee with every cake."
        fix="get"
      />
    </NoteSlide>

    <NoteSlide title="名詞前面用 your">
      <NoteFix
        wrong="You must show you ticket at the door."
        right="You must show your ticket at the door."
        fix="your"
      />
    </NoteSlide>

    <NoteSlide title="you're 是 you are">
      <NoteFix
        wrong="You can leave you're bags here."
        right="You can leave your bags here."
        fix="your"
      />
    </NoteSlide>

    <NoteSlide title="指聽的人的 you">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Have', kind: 'dim' },
          { t: 'you', role: '聽的人', kind: 'key' },
          { t: 'finished reading my book about Japan?', kind: 'dim' },
        ]"
      />
      <p class="translation">你看完我那本介紹日本的書了嗎？</p>
    </NoteSlide>

    <NoteSlide title="one 比 you 正式">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'One', role: '一般人（正式）', kind: 'key' },
          { t: 'should always be polite.', kind: 'dim' },
        ]"
      />
      <p class="translation">人應該永遠有禮貌。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
