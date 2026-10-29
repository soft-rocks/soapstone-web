<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 001, as slides, in the order of notes/dragon-english-basic-100/001.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide title="句首的 it 只佔主詞的位置，真正的主詞在後面">
      <NoteWords
        :size="24"
        :move="{ from: 2, to: 0 }"
        :parts="[
          { t: 'It', role: '形式主詞', kind: 'key' },
          { t: 'would be dangerous', kind: 'dim' },
          {
            t: 'to drink two bottles of whiskey and drive a car.',
            role: '真正的主詞',
            kind: 'key',
          },
        ]"
      />
      <p class="remark"><code>it</code> 本身沒有意思。真正的主詞是 <code>to</code> 不定詞片段。</p>
    </NoteSlide>

    <NoteSlide title="要說是誰做這件事，在 to 前面加 for 和人" mark="to drink">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'It was hard', kind: 'dim' },
          { t: 'for me', role: 'for + 人', kind: 'key' },
          { t: 'to find an empty seat.', role: 'to + 動詞原形' },
        ]"
      />
      <p class="translation">要找到空位對我來說很難。</p>
    </NoteSlide>

    <NoteSlide title="be 後面接形容詞或名詞" mark="dangerous">
      <div class="rows is-labeled">
        <div>
          <span class="term">形容詞</span>
          <span
            ><NoteMark
              sentence="It is dangerous to swim in this river."
              :marks="['dangerous']"
            /><span class="translation">在這條河裡游泳很危險。</span></span
          >
        </div>
        <div>
          <span class="term">名詞</span>
          <span
            ><NoteMark
              sentence="It was a pleasure to work with you."
              :marks="['a pleasure']"
            /><span class="translation">跟你共事很愉快。</span></span
          >
        </div>
        <div>
          <span class="term">形容詞，問句</span>
          <span
            ><NoteMark sentence="Is it safe to drink the tap water here?" :marks="['safe']" /><span
              class="translation"
              >這裡的自來水可以直接喝嗎？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="would 說在假設的條件下會有什麼結果" mark="would">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'It would be dangerous', role: '結果', kind: 'key' },
          { t: 'to drink two bottles of whiskey and drive a car.', role: '條件' },
        ]"
      />
      <p class="translation">{{ note.translation }}</p>
      <p class="remark">這個條件還沒有發生。</p>
    </NoteSlide>

    <NoteSlide title="條件不一定要用 if 子句說出來" mark="would">
      <div class="rows is-labeled">
        <div>
          <span class="term">名詞</span>
          <span
            ><NoteMark sentence="A taxi would be faster." :marks="['A taxi']" /><span
              class="translation"
              >搭計程車會比較快。</span
            ></span
          >
        </div>
        <div>
          <span class="term">動詞-ing 片段</span>
          <span
            ><NoteMark
              sentence="Moving to Osaka would mean leaving all my friends."
              :marks="['Moving to Osaka']"
            /><span class="translation">搬去大阪就表示要離開我所有的朋友。</span></span
          >
        </div>
        <div>
          <span class="term">前一句</span>
          <span
            ><NoteMark
              sentence="“Shall we meet at six?” “That would be great.”"
              :marks="['That']"
            /><span class="translation">「我們六點見好嗎？」「那太好了。」</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="and 後面的動詞共用前面的 to" mark="and drive">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'to', role: 'to', kind: 'key' },
          { t: 'drink', role: '動詞原形', kind: 'key' },
          { t: 'two bottles of whiskey', role: '受詞' },
          { t: 'and', role: 'and' },
          { t: 'to', role: '不再放', kind: 'gone' },
          { t: 'drive', role: '動詞原形', kind: 'key' },
          { t: 'a car', role: '受詞' },
        ]"
      />
    </NoteSlide>

    <NoteSlide title="每個動詞可以有自己的受詞" mark="to drink">
      <NoteFork
        stem="Remember to"
        :branches="[
          { head: 'lock', rest: 'the door', meaning: '動詞一', zh: '鎖門' },
          { head: 'and turn off', rest: 'the lights', meaning: '動詞二', zh: '關燈' },
        ]"
      />
      <p class="translation">記得鎖門、關燈。</p>
    </NoteSlide>
  </NoteDeck>
</template>
