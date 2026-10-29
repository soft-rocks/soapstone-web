<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-use-present-simple-if-clause-real, as slides, in the order of content.md. One
// point per slide: the title names it, the diagram shows it, and `mark` circles the matching words
// of the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="if 子句用現在簡單式說真實的條件" mark="have">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'If I feel tired after lunch,', role: '現在簡單式', kind: 'key' },
          { t: 'I usually go for a short walk.', role: '主要子句' },
        ]"
      />
      <p class="translation">如果午餐後覺得累，我通常會去散個步。</p>
    </NoteSlide>

    <NoteSlide title="現在簡單式說習慣" mark="always read">
      <div class="rows is-labeled">
        <div>
          <span class="term">習慣</span>
          <span
            ><NoteMark
              sentence="If it's cold, my dad always wears his old hat."
              :marks="['always wears']"
            /><span class="translation">天冷的時候，我爸總是戴他那頂舊帽子。</span></span
          >
        </div>
      </div>
      <p class="remark">
        這時 <code>if</code> 的意思接近 <code>when</code> 或 <code>whenever</code>。
      </p>
    </NoteSlide>

    <NoteSlide title="主要子句用 can 或祈使句">
      <div class="rows is-labeled">
        <div>
          <span class="term">can</span>
          <span
            ><NoteMark
              sentence="If you have a student card, you can get in for free."
              :marks="['can get in']"
            /><span class="translation">如果你有學生證，就可以免費入場。</span></span
          >
        </div>
        <div>
          <span class="term">祈使句</span>
          <span
            ><NoteMark
              sentence="If you need more information, call the office."
              :marks="['call the office.']"
            /><span class="translation">如果你需要更多資料，就打電話到辦公室。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="主要子句說現在的情況">
      <div class="rows is-labeled">
        <div>
          <span class="term">be 動詞</span>
          <span
            ><NoteMark
              sentence="If you need help, I'm in the next room."
              :marks="['I\'m in the next room.']"
            /><span class="translation">如果你需要幫忙，我就在隔壁房間。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="if 子句放在後面">
      <div class="rows is-labeled">
        <div>
          <span class="term">前面不加逗號</span>
          <span
            ><NoteMark
              sentence="Leo gets angry if he loses at cards."
              :marks="['if he loses at cards.']"
            /><span class="translation">Leo 玩牌輸了就會生氣。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="原句：有空就看書" mark="I always read a book.">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'If I have spare time,', role: '現在簡單式', kind: 'key' },
          { t: 'I always read a book.', role: '習慣' },
        ]"
      />
      <p class="translation">只要有空，我都會看書。</p>
      <p class="remark">這裡的 <code>if</code> 意思接近 <code>whenever</code>。</p>
    </NoteSlide>

    <NoteSlide title="第三人稱單數的動詞加 -s" mark="read">
      <NoteFix
        wrong="If my sister has time, she always cook dinner."
        right="If my sister has time, she always cooks dinner."
        fix="cooks"
      />
    </NoteSlide>

    <NoteSlide title="if 子句不用 will" mark="have">
      <NoteFix
        wrong="If you will need the car tonight, tell me now."
        right="If you need the car tonight, tell me now."
        fix="need"
      />
    </NoteSlide>

    <NoteSlide title="always 放在一般動詞前面" mark="always read">
      <NoteFix
        wrong="If I have time, I read always the news."
        right="If I have time, I always read the news."
        fix="always read"
      />
    </NoteSlide>

    <NoteSlide title="will 說未來某一次">
      <div class="rows is-labeled">
        <div>
          <span class="term">現在簡單式<br /><i>每次都會</i></span>
          <span
            ><NoteMark sentence="If it rains, we play cards indoors." :marks="['play']" /><span
              class="translation"
              >下雨的時候，我們會在室內玩牌。</span
            ></span
          >
        </div>
        <div>
          <span class="term">will<br /><i>未來某一次</i></span>
          <span
            ><NoteMark
              sentence="If it rains tomorrow, we'll go to the museum instead."
              :marks="['tomorrow,', 'we\'ll go']"
            /><span class="translation">如果明天下雨，我們就改去博物館。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="過去簡單式說不是事實的情況">
      <div class="rows is-labeled">
        <div>
          <span class="term">現在簡單式<br /><i>真的會發生</i></span>
          <span
            ><NoteMark sentence="If I have time, I read." :marks="['have', 'read.']" /><span
              class="translation"
              >我有時間就會看書。</span
            ></span
          >
        </div>
        <div>
          <span class="term">過去簡單式<br /><i>不是事實</i></span>
          <span
            ><NoteMark
              sentence="If I had time, I would read more."
              :marks="['had', 'would read']"
            /><span class="translation">要是我有時間，我會多看點書。</span></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
