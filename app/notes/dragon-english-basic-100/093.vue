<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 093, as slides, in the order of notes/dragon-english-basic-100/093.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide title="Could you 加動詞原形，客氣地請別人做事" mark="Could you">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Could you', kind: 'key' },
          { t: 'open', role: '動詞原形' },
          { t: 'the window?', kind: 'dim' },
        ]"
      />
      <p class="translation">可以請你打開窗戶嗎？</p>
    </NoteSlide>

    <NoteSlide title="問路常用 Could you tell me how to get to 加地方" mark="how to get to">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Could you tell me', kind: 'dim' },
          { t: 'how to get to', role: '疑問詞 + to 不定詞', kind: 'key' },
          { t: 'the post office?', role: '地方' },
        ]"
      />
    </NoteSlide>

    <NoteSlide title="間接問句照直述句的語序" mark="Could you tell me">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Could you tell me', kind: 'dim' },
          { t: 'where', role: '疑問詞' },
          { t: 'the station', role: '主詞', kind: 'key' },
          { t: 'is?', role: '動詞', kind: 'key', ring: true },
        ]"
      />
      <p class="translation">可以請你告訴我車站在哪裡嗎？</p>
    </NoteSlide>

    <NoteSlide title="指路用祈使句，句首是動詞原形，沒有主詞" mark="Go straight">
      <NoteWords
        :size="28"
        :parts="[
          { role: '沒有主詞' },
          { t: 'Go straight', role: '動詞原形', kind: 'key' },
          { t: 'for two blocks,', role: 'for + 距離' },
        ]"
      />
      <p class="remark"><code>for</code> 加距離表示要走多遠。</p>
    </NoteSlide>

    <NoteSlide title="at 加地點表示在哪裡轉彎" mark="turn left">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Turn right', role: '動詞原形' },
          { t: 'at the second traffic light.', role: 'at + 地點', kind: 'key' },
        ]"
      />
      <p class="translation">在第二個紅綠燈右轉。</p>
    </NoteSlide>

    <NoteSlide title="then 連接兩個步驟" mark="then">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Go straight for two blocks,', role: '第一步' },
          { t: 'then', role: '連接詞', kind: 'key' },
          { t: 'turn left.', role: '第二步' },
        ]"
      />
    </NoteSlide>

    <NoteSlide
      title="指完路之後，用 You’ll find 說目的地在哪一邊"
      mark="You’ll find it on your right"
    >
      <NoteWords
        :size="28"
        :parts="[
          { t: 'You’ll find', role: '照著走就會看到', kind: 'key' },
          { t: 'it', role: '地方\n指郵局' },
          { t: 'on your right.', role: '在你的右手邊', kind: 'key' },
        ]"
      />
    </NoteSlide>

    <NoteSlide title="You’ll see 也這樣用，左手邊用 on your left" mark="on your right">
      <div class="rows is-labeled">
        <div>
          <span class="term">on your left</span>
          <span
            ><NoteMark
              sentence="Walk for five minutes, and you'll find the school on your left."
              :marks="['you\'ll find', 'on your left']"
            /><span class="translation">走五分鐘，你會在左手邊看到學校。</span></span
          >
        </div>
        <div>
          <span class="term">on your right</span>
          <span
            ><NoteMark
              sentence="Turn left at the end of the street, and you'll see the station on your right."
              :marks="['you\'ll see', 'on your right']"
            /><span class="translation">在街的盡頭左轉，你會在右手邊看到車站。</span></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>
</template>
