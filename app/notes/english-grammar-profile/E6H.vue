<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adverbs-form-front-position-133, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="副詞放在句首，後面照樣接主詞和動詞" mark="Perhaps I left">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Perhaps', role: '副詞', kind: 'key' },
          { t: 'I', role: '主詞' },
          { t: 'left', role: '動詞' },
          { t: 'it', role: '受詞', kind: 'dim' },
          { t: 'in your living room.', role: '地點', kind: 'dim' },
        ]"
      />
      <p class="translation">也許我把它忘在你家客廳了。</p>
    </NoteSlide>

    <NoteSlide title="However 連接前一句" mark="Perhaps">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'I\'d love to come.', role: '前一句', kind: 'dim' },
          { t: 'However,', role: '副詞', kind: 'key' },
          { t: 'I', role: '主詞' },
          { t: 'can only study', role: '動詞' },
          { t: 'on Mondays.', role: '時間', kind: 'dim' },
        ]"
      />
      <p class="translation">我很想來。不過我只有星期一能上課。</p>
    </NoteSlide>

    <NoteSlide title="各個副詞的意思" mark="Perhaps">
      <div class="rows is-labeled">
        <div>
          <span class="term">perhaps</span>
          <span>也許，比 maybe 正式</span>
        </div>
        <div>
          <span class="term">however</span>
          <span>不過，說出和前一句相反的事</span>
        </div>
        <div>
          <span class="term">suddenly</span>
          <span>突然</span>
        </div>
        <div>
          <span class="term">luckily</span>
          <span>幸好</span>
        </div>
        <div>
          <span class="term">usually、often</span>
          <span>通常、常常，也可以放在句中</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="同一句用 but，換一句用 However">
      <div class="rows is-labeled">
        <div>
          <span class="term">but</span>
          <span
            ><NoteMark
              sentence="It was a lovely hotel, but it was too expensive."
              :marks="['but']"
            /><span class="translation">那是一間很棒的旅館，不過太貴了。</span></span
          >
        </div>
        <div>
          <span class="term">However</span>
          <span
            ><NoteMark
              sentence="It was a lovely hotel. However, it was too expensive."
              :marks="['However,']"
            /><span class="translation">那是一間很棒的旅館。不過，太貴了。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="however 前面的句子用句號結束">
      <NoteFix
        wrong="I like my job, however I want more money."
        right="I like my job. However, I want more money."
        fix="job. However,"
      />
    </NoteSlide>

    <NoteSlide title="but 和 however 只用一個">
      <NoteFix
        wrong="The museum was interesting. But however, it was very crowded."
        right="The museum was interesting. However, it was very crowded."
        fix="However,"
      />
    </NoteSlide>

    <NoteSlide title="句首用副詞 suddenly，不用形容詞 sudden">
      <NoteFix
        wrong="Sudden the dog started barking."
        right="Suddenly the dog started barking."
        fix="Suddenly"
      />
    </NoteSlide>

    <NoteSlide title="lucky 把 y 改成 i 再加 -ly">
      <NoteFix wrong="Luckyly, nobody was hurt." right="Luckily, nobody was hurt." fix="Luckily," />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
