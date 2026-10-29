<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 099, as slides, in the order of notes/dragon-english-basic-100/099.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide title="連綴動詞 stay 後面接形容詞，表示保持某種狀態" mark="stay healthy">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'If you want to', kind: 'dim' },
          { t: 'stay', role: '連綴動詞', kind: 'key' },
          { t: 'healthy,', role: '形容詞', kind: 'key' },
        ]"
      />
    </NoteSlide>

    <NoteSlide title="keep 也可以接形容詞" mark="stay healthy">
      <div class="rows is-labeled">
        <div>
          <span class="term">stay</span>
          <span
            ><NoteMark
              sentence="My grandfather stayed healthy until he was ninety."
              :marks="['stayed healthy']"
            /><span class="translation">我爺爺到九十歲都很健康。</span></span
          >
        </div>
        <div>
          <span class="term">keep</span>
          <span
            ><NoteMark
              sentence="Keep still while I take your picture."
              :marks="['Keep still']"
            /><span class="translation">我幫你拍照的時候不要動。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="every 後面接可數名詞的單數" mark="every meal">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'after', role: '介系詞' },
          { t: 'every', kind: 'key' },
          { t: 'meal.', role: '單數名詞', kind: 'key' },
        ]"
      />
      <p class="remark"><code>after every meal</code> 表示每一餐之後。</p>
    </NoteSlide>

    <NoteSlide title="every 加名詞當主詞時，動詞用單數" mark="every meal">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Every student', role: '主詞' },
          { t: 'has', role: '單數動詞', kind: 'key', ring: true },
          { t: 'a locker.', kind: 'dim' },
        ]"
      />
      <p class="translation">每個學生都有一個置物櫃。</p>
    </NoteSlide>

    <NoteSlide title="every 加名詞可以單獨表示時間" mark="every meal">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I go jogging', kind: 'dim' },
          { t: 'every morning.', role: '時間', kind: 'key' },
        ]"
      />
      <p class="translation">我每天早上去慢跑。</p>
    </NoteSlide>

    <NoteSlide title="if 子句說條件，主要子句用 should 表示建議" mark="you should brush">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'If you want to stay healthy,', role: '條件\n現在式' },
          { t: 'you', role: '主詞' },
          { t: 'should brush', role: 'should + 動詞原形\n建議', kind: 'key' },
          { t: 'your teeth after every meal.', kind: 'dim' },
        ]"
      />
      <p class="remark"><code>if</code> 子句放在前面時，後面加逗號。</p>
    </NoteSlide>

    <NoteSlide title="play a part in 表示對某件事有影響" mark="play an important part in">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Teeth', role: '主詞' },
          { t: 'play', role: '動詞', kind: 'key' },
          { t: 'an important', role: '形容詞' },
          { t: 'part', role: '名詞', kind: 'key' },
          { t: 'in', role: '介系詞', kind: 'key' },
          { t: 'your health.', role: '名詞' },
        ]"
      />
      <p class="remark">
        原句的 <code>play an important part in your health</code> 表示牙齒對健康很重要。
      </p>
    </NoteSlide>

    <NoteSlide title="part 可以換成 role，前面常加 big、important、key" mark="important part">
      <div class="rows is-labeled">
        <div>
          <span class="term">a big part</span>
          <span
            ><NoteMark
              sentence="Music played a big part in my childhood."
              :marks="['a big part in']"
            /><span class="translation">音樂在我的童年裡佔了很重要的部分。</span></span
          >
        </div>
        <div>
          <span class="term">an important role</span>
          <span
            ><NoteMark
              sentence="Parents play an important role in their children's education."
              :marks="['an important role in']"
            /><span class="translation">父母在孩子的教育上扮演重要的角色。</span></span
          >
        </div>
        <div>
          <span class="term">a key role</span>
          <span
            ><NoteMark
              sentence="Exercise plays a key role in staying healthy."
              :marks="['a key role in', 'staying']"
            /><span class="translation">運動在保持健康上扮演關鍵的角色。</span></span
          >
        </div>
      </div>
      <p class="remark"><code>in</code> 後面接名詞或動詞-ing。</p>
    </NoteSlide>
  </NoteDeck>
</template>
