<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 026, as slides, in the order of notes/dragon-english-basic-100/026.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide title="thanks to 後面接名詞，說明好結果的原因" mark="Thanks to the map">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Thanks to', kind: 'key' },
          { t: 'the map you drew me the other day,', role: '名詞：原因' },
          { t: 'I managed to get here without getting lost.', role: '主要子句：好結果' },
        ]"
      />
    </NoteSlide>

    <NoteSlide title="thanks to 可以放在句首或句尾" mark="Thanks to">
      <div class="rows is-labeled">
        <div>
          <span class="term">句首</span>
          <span
            ><NoteMark
              sentence="Thanks to your help, I finished the work on time."
              :marks="['Thanks to your help']"
            /><span class="translation">多虧你的幫忙，我準時做完了工作。</span></span
          >
        </div>
        <div>
          <span class="term">句尾</span>
          <span
            ><NoteMark sentence="We won the game thanks to Tom." :marks="['thanks to Tom']" /><span
              class="translation"
              >多虧了 Tom，我們贏了比賽。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="當受詞的關係代名詞可以省略" mark="the map you drew me">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'the map', role: '名詞', kind: 'key' },
          { t: 'that', role: '關係代名詞', kind: 'gone' },
          { t: 'you', role: '主詞' },
          { t: 'drew', role: '動詞' },
          { t: 'me', kind: 'dim' },
        ]"
      />
      <p class="remark"><code>map</code> 是 <code>drew</code> 的受詞。</p>
    </NoteSlide>

    <NoteSlide title="名詞後面的子句修飾這個名詞" mark="the map you drew me">
      <div class="rows is-labeled">
        <div>
          <span class="term">the book</span
          ><span
            ><NoteMark sentence="This is the book I bought yesterday." :marks="['the book']" /><span
              class="translation"
              >這是我昨天買的書。</span
            ></span
          >
        </div>
        <div>
          <span class="term">the girl</span
          ><span
            ><NoteMark
              sentence="The girl you met at the party is my sister."
              :marks="['The girl']"
            /><span class="translation">你在派對上遇到的那個女生是我妹妹。</span></span
          >
        </div>
        <div>
          <span class="term">the pen</span
          ><span
            ><NoteMark sentence="I lost the pen you gave me." :marks="['the pen']" /><span
              class="translation"
              >我把你給我的筆弄丟了。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">
        每一句的名詞後面都省略了 <code>that</code>、<code>which</code> 或 <code>who</code>。
      </p>
    </NoteSlide>

    <NoteSlide title="manage to 表示事情不容易，但最後做到了" mark="managed to get">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'managed to', role: '過去式', kind: 'key' },
          { t: 'get', role: '動詞原形', kind: 'key' },
          { t: 'here', kind: 'dim' },
        ]"
      />
      <p class="remark">過去式 <code>managed to</code> 表示那件事已經做成了。</p>
    </NoteSlide>

    <NoteSlide title="manage to 後面接動詞原形" mark="managed to">
      <div class="rows is-labeled">
        <div>
          <span class="term">catch</span
          ><span
            ><NoteMark
              sentence="I managed to catch the last train."
              :marks="['managed to catch']"
            /><span class="translation">我總算趕上了末班火車。</span></span
          >
        </div>
        <div>
          <span class="term">finish</span
          ><span
            ><NoteMark
              sentence="She managed to finish her homework before dinner."
              :marks="['managed to finish']"
            /><span class="translation">她總算在晚餐前寫完功課。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="without 是介系詞，後面的動詞-ing 是它的受詞" mark="without getting lost">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'without', role: '介系詞', kind: 'key' },
          { t: 'getting lost.', role: '動詞-ing', kind: 'key' },
        ]"
      />
      <p class="remark"><code>without getting lost</code> 是沒有迷路。</p>
    </NoteSlide>

    <NoteSlide title="without 加動詞-ing，表示沒有做那個動作" mark="without">
      <div class="rows is-labeled">
        <div>
          <span class="term">brushing</span
          ><span
            ><NoteMark
              sentence="He went to bed without brushing his teeth."
              :marks="['without brushing']"
            /><span class="translation">他沒刷牙就去睡覺了。</span></span
          >
        </div>
        <div>
          <span class="term">looking</span
          ><span
            ><NoteMark
              sentence="Don't cross the street without looking both ways."
              :marks="['without looking']"
            /><span class="translation">不要沒看左右兩邊就過馬路。</span></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>
</template>
