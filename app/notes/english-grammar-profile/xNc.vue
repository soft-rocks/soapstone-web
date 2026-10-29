<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-use-ing-clause, as slides, in the order of content.md. One point per slide: the title names it, the
// diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="動詞-ing 子句放在句首，說明主詞用的方法">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Using his best smile,', role: '動詞-ing 子句', kind: 'key' },
          { t: 'Paul', role: '主詞' },
          { t: 'asked her if he could sit beside her.', role: '主要子句' },
        ]"
      />
      <p class="translation">Paul 擺出他最迷人的笑容，問她能不能坐在她旁邊。</p>
      <p class="remark"><code>Paul</code> 也是 <code>Using</code> 的動作者。</p>
    </NoteSlide>

    <NoteSlide title="動詞-ing 子句說同時發生的事、原因或方法" mark="Using">
      <div class="rows is-labeled">
        <div>
          <span class="term">同時發生</span>
          <span
            ><NoteMark
              sentence="Holding the baby in one arm, she opened the door."
              :marks="['Holding']"
            /><span class="translation">她一手抱著寶寶，打開了門。</span></span
          >
        </div>
        <div>
          <span class="term">原因</span>
          <span
            ><NoteMark
              sentence="Knowing the city well, my cousin showed us all the best places."
              :marks="['Knowing']"
            /><span class="translation"
              >我表姊對這個城市很熟，帶我們去了所有最好玩的地方。</span
            ></span
          >
        </div>
        <div>
          <span class="term">方法</span>
          <span
            ><NoteMark sentence="Using a map, we found the hotel." :marks="['Using']" /><span
              class="translation"
              >我們用地圖找到了飯店。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="前一個動作已經完成，用 Having 加過去分詞" mark="Using">
      <div class="rows is-labeled">
        <div>
          <span class="term">完成</span>
          <span
            ><NoteMark
              sentence="Having finished the report, I sent it to my boss."
              :marks="['Having finished']"
            /><span class="translation">寫完報告後，我把它寄給了我老闆。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="動詞-ing 的動作者要是主要子句的主詞" mark="Paul">
      <NoteFix
        wrong="Walking along the beach, the sun went down."
        right="Walking along the beach, we watched the sun go down."
        fix="we"
      >
        在海邊走的是 <code>we</code>，不是太陽。
      </NoteFix>
    </NoteSlide>

    <NoteSlide title="動詞-ing 子句不寫主詞" mark="Using">
      <NoteFix
        wrong="I feeling hungry, I made a sandwich."
        right="Feeling hungry, I made a sandwich."
        fix="Feeling"
      />
    </NoteSlide>

    <NoteSlide title="動詞-ing 子句在前面時，後面加逗號" mark="smile,">
      <NoteFix
        wrong="Not knowing the answer I stayed quiet."
        right="Not knowing the answer, I stayed quiet."
        fix="answer,"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
