<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-use-singular-for-emphasis, as slides, in the order of content.md. One point per slide: the title names it, the
// diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="反身代名詞放在句尾，強調是這個人自己做的">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'The food was delicious, especially the cake,', kind: 'dim' },
          { t: 'which Sandra had made', role: '主詞 + 動詞' },
          { t: 'herself.', role: '強調', kind: 'key' },
        ]"
      />
      <p class="translation">食物很好吃，尤其是蛋糕，那是 Sandra 自己做的。</p>
    </NoteSlide>

    <NoteSlide title="放在句尾，強調沒有請別人做" mark="herself.">
      <div class="rows is-labeled">
        <div>
          <span class="term">myself</span>
          <span
            ><NoteMark
              sentence="Thanks, I'm glad you like it. I made this dress myself."
              :marks="['myself']"
            /><span class="translation">謝謝，很高興你喜歡。這件洋裝是我自己做的。</span></span
          >
        </div>
        <div>
          <span class="term">yourself</span>
          <span
            ><NoteMark
              sentence="Don't trust the numbers in the report. You should check them yourself before the meeting."
              :marks="['yourself']"
            /><span class="translation">別相信報告裡的數字。開會前你應該自己檢查一遍。</span></span
          >
        </div>
        <div>
          <span class="term">himself</span>
          <span
            ><NoteMark
              sentence="My dad didn't buy it in a shop. He built the bookshelf himself."
              :marks="['himself']"
            /><span class="translation">我爸爸不是在店裡買的。書架是他自己做的。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="緊接在名詞或代名詞後面，強調是這個人本人" mark="herself.">
      <div class="rows is-labeled">
        <div>
          <span class="term">名詞後面</span>
          <span
            ><NoteMark
              sentence="We visited the film studio last week. It was the director himself who showed us around the garden."
              :marks="['the director himself']"
            /><span class="translation"
              >我們上星期去參觀電影片廠。帶我們參觀花園的是導演本人。</span
            ></span
          >
        </div>
        <div>
          <span class="term">代名詞後面</span>
          <span
            ><NoteMark
              sentence="My whole family loves London. I myself have never been there."
              :marks="['I myself']"
            /><span class="translation">我全家都很愛倫敦。我本人從來沒去過。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="強調的反身代名詞拿掉後，句子還是完整的" mark="herself.">
      <div class="rows is-labeled">
        <div>
          <span class="term">強調</span>
          <span
            ><NoteMark sentence="She designed the logo herself." :marks="['herself.']" /><span
              class="translation"
              >標誌是她自己設計的。</span
            ></span
          >
        </div>
        <div>
          <span class="term">受詞</span>
          <span
            ><NoteMark sentence="She hurt herself." :marks="['herself.']" /><span
              class="translation"
              >她弄傷了自己。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">hurt herself 的 herself 是受詞，不能拿掉。</p>
    </NoteSlide>

    <NoteSlide title="my brother 是男性，用 himself" mark="herself.">
      <NoteFix
        wrong="We didn't go to a garage. My brother fixed the car herself."
        right="We didn't go to a garage. My brother fixed the car himself."
        fix="himself."
      />
    </NoteSlide>

    <NoteSlide title="正確的形式是 himself">
      <NoteFix
        wrong="Uncle Jim didn't pay anyone. He put up the fence hisself."
        right="Uncle Jim didn't pay anyone. He put up the fence himself."
        fix="himself."
      />
    </NoteSlide>

    <NoteSlide title="主詞用 I，myself 放在句尾">
      <NoteFix
        wrong="Nobody has booked a room yet. Myself will call the hotel."
        right="Nobody has booked a room yet. I'll call the hotel myself."
        fix="I'll"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
