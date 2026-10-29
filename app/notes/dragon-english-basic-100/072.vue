<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 072, as slides, in the order of notes/dragon-english-basic-100/072.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide title="主要子句說的事跟 although 子句預期的結果不同" mark="Although">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Although', role: '連接詞', kind: 'key', ring: true },
          { t: 'you believe you know a word,', role: '子句' },
          {
            t: 'you may learn something new …',
            role: '主要子句',
            kind: 'dim',
          },
        ]"
      />
      <p class="translation">{{ note.translation }}</p>
      <p class="remark">
        <code>although</code> 的意思是雖然。<code>although</code> 子句放在句首時，後面加逗號。
      </p>
    </NoteSlide>

    <NoteSlide title="although 子句也可以放在主要子句後面" mark="Although">
      <div class="rows is-labeled">
        <div>
          <span class="term">句首</span>
          <span
            ><NoteMark
              sentence="Although it was raining, we went for a walk."
              :marks="['Although']"
            /><span class="translation">雖然在下雨，我們還是去散步了。</span></span
          >
        </div>
        <div>
          <span class="term">句尾</span>
          <span
            ><NoteMark
              sentence="We enjoyed the trip although it rained every day."
              :marks="['although']"
            /><span class="translation">雖然每天都下雨，我們這趟旅行還是玩得很開心。</span></span
          >
        </div>
        <div>
          <span class="term">though</span>
          <span
            ><NoteMark
              sentence="My brother went out though he had a cold."
              :marks="['though']"
            /><span class="translation">我弟弟雖然感冒了，還是出門了。</span></span
          >
        </div>
      </div>
      <p class="remark"><code>though</code> 的意思一樣，常用在口語。</p>
    </NoteSlide>

    <NoteSlide title="look up 的受詞是名詞時，可以放在 up 前面或後面" mark="look it up">
      <div class="rows is-labeled">
        <div>
          <span class="term">look up + 名詞</span>
          <span
            ><NoteMark
              sentence="I looked up the word in the dictionary."
              :marks="['looked up', 'the word']"
            /><span class="translation">我在字典裡查了這個字。</span></span
          >
        </div>
        <div>
          <span class="term">look + 名詞 + up</span>
          <span
            ><NoteMark
              sentence="I looked the address up on my phone."
              :marks="['looked', 'the address', 'up']"
            /><span class="translation">我用手機查了那個地址。</span></span
          >
        </div>
      </div>
      <p class="remark"><code>look up</code> 表示在字典、網路或書裡查一個字或資料。</p>
    </NoteSlide>

    <NoteSlide title="look up 的受詞是代名詞時，放在 look 和 up 中間" mark="look it up">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'look', role: '動詞' },
          { t: 'it', role: '代名詞', kind: 'key', ring: true },
          { t: 'up', role: '小品詞' },
          { t: 'in the dictionary.', kind: 'dim' },
        ]"
      />
    </NoteSlide>

    <NoteSlide title="may 表示有可能，但不確定" mark="may learn">
      <div class="rows is-labeled">
        <div>
          <span class="term">may</span>
          <span
            ><NoteMark sentence="It may snow tonight." :marks="['may']" /><span class="translation"
              >今晚可能會下雪。</span
            ></span
          >
        </div>
        <div>
          <span class="term">might</span>
          <span
            ><NoteMark sentence="Wear a jacket. It might get cold later." :marks="['might']" /><span
              class="translation"
              >穿件外套。等一下可能會變冷。</span
            ></span
          >
        </div>
        <div>
          <span class="term">may not<br /><i>可能不會</i></span>
          <span
            ><NoteMark sentence="Tom may not come to the party." :marks="['may not']" /><span
              class="translation"
              >Tom 可能不會來派對。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>
</template>
