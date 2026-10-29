<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-use-newsworthy, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="現在完成式報導新消息，不說時間" mark="has opened">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'A new shopping center', role: '主詞' },
          { t: 'has opened', role: 'has + 過去分詞', kind: 'key', ring: true },
          { t: 'in our town.', role: '地點', kind: 'dim' },
        ]"
      />
      <p class="translation">我們鎮上新開了一家購物中心。</p>
      <p class="remark">說話者寫信給筆友，開頭報告家鄉的新消息。</p>
    </NoteSlide>

    <NoteSlide title="第一句用現在完成式，細節改用過去簡單式" mark="has opened">
      <div class="rows is-labeled">
        <div>
          <span class="term">消息</span>
          <span
            ><NoteMark
              sentence="A fire has destroyed an old hotel in the city center."
              :marks="['has destroyed']"
            /><span class="translation">市中心一家老飯店被大火燒毀了。</span></span
          >
        </div>
        <div>
          <span class="term">細節</span>
          <span
            ><NoteMark
              sentence="The fire started at 2 a.m."
              :marks="['started', 'at 2 a.m.']"
            /><span class="translation">火是凌晨兩點燒起來的。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="報導新消息常見的動詞" mark="opened">
      <div class="rows is-labeled">
        <div>
          <span class="term">開幕或關閉</span>
          <span
            ><NoteMark
              sentence="The old cinema on Bridge Street has closed."
              :marks="['has closed']"
            /><span class="translation">橋街上那家老電影院關門了。</span></span
          >
        </div>
        <div>
          <span class="term">宣布或決定</span>
          <span
            ><NoteMark
              sentence="The government has announced a new tax on sugar."
              :marks="['has announced']"
            /><span class="translation">政府宣布要對糖課新稅。</span></span
          >
        </div>
        <div>
          <span class="term">贏得或失去</span>
          <span
            ><NoteMark
              sentence="Our national team has won the World Cup."
              :marks="['has won']"
            /><span class="translation">我們國家隊贏得了世界盃。</span></span
          >
        </div>
        <div>
          <span class="term">出現或消失</span>
          <span
            ><NoteMark
              sentence="A famous painting has disappeared from the museum."
              :marks="['has disappeared']"
            /><span class="translation">一幅名畫從博物館裡不見了。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="just 放在 has 和過去分詞中間，表示剛發生" mark="has opened">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'The prime minister', kind: 'dim' },
          { t: 'has' },
          { t: 'just', role: '剛發生', kind: 'key', ring: true },
          { t: 'arrived', role: '過去分詞' },
          { t: 'in Tokyo.', kind: 'dim' },
        ]"
      />
      <p class="translation">首相剛抵達東京。</p>
    </NoteSlide>

    <NoteSlide title="有過去的時間，用過去簡單式" mark="has opened">
      <NoteFix
        wrong="A new shopping center has opened last Saturday."
        right="A new shopping center opened last Saturday."
        fix="opened"
      />
    </NoteSlide>

    <NoteSlide title="has 後面接過去分詞" mark="opened">
      <NoteFix wrong="The team has win the cup." right="The team has won the cup." fix="won" />
    </NoteSlide>

    <NoteSlide title="單數主詞用 has" mark="has">
      <NoteFix
        wrong="The museum have closed for repairs."
        right="The museum has closed for repairs."
        fix="has"
      />
    </NoteSlide>

    <NoteSlide title="過去簡單式說出事情發生的時間" mark="has opened">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'The shopping center', kind: 'dim' },
          { t: 'opened', role: '過去簡單式', kind: 'key', ring: true },
          { t: 'on Saturday morning.', role: '時間' },
        ]"
      />
      <p class="translation">購物中心星期六早上開幕。</p>
    </NoteSlide>

    <NoteSlide title="現在完成進行式說還沒結束的動作" mark="has opened">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'They', kind: 'dim' },
          { t: 'have been building', role: '還在進行', kind: 'key', ring: true },
          { t: 'a new bridge for two years.', kind: 'dim' },
        ]"
      />
      <p class="translation">他們蓋一座新橋已經蓋了兩年。</p>
    </NoteSlide>

    <NoteSlide title="is open 說狀態，has opened 說剛開幕" mark="has opened">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'The new library', kind: 'dim' },
          { t: 'is open', role: '現在的狀態', kind: 'key', ring: true },
          { t: 'now.', kind: 'dim' },
        ]"
      />
      <p class="translation">新圖書館現在開放了。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
