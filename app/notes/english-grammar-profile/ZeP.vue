<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// verb-plus-ving, as slides, in the order of content.md. One point per slide: the title names it, the
// diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="after 後面直接接動詞-ing，不寫主詞">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'After', role: '時間', kind: 'key' },
          { t: 'having breakfast,', role: '動詞-ing', kind: 'key' },
          { t: 'I started doing my homework.', role: '主要子句' },
        ]"
      />
      <p class="translation">吃完早餐後，我開始寫功課。</p>
      <p class="remark">主要子句的 <code>I</code> 也是吃早餐的人。</p>
    </NoteSlide>

    <NoteSlide title="子句在前面加逗號，在後面不加逗號" mark="After">
      <div class="rows is-labeled">
        <div>
          <span class="term">前面</span>
          <span
            ><NoteMark
              sentence="Before leaving the house, I always check the windows."
              :marks="['Before leaving', 'house,']"
            /><span class="translation">出門之前，我都會檢查窗戶。</span></span
          >
        </div>
        <div>
          <span class="term">後面</span>
          <span
            ><NoteMark
              sentence="I read for half an hour before going to sleep."
              :marks="['before going']"
            /><span class="translation">我睡覺前會看半小時的書。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="兩個子句的主詞一樣，可以把完整的子句改成動詞-ing" mark="having">
      <div class="rows is-labeled">
        <div>
          <span class="term">完整的子句</span>
          <span
            ><NoteMark
              sentence="After I finished work, I went to the gym."
              :marks="['I finished']"
            /><span class="translation">我下班後去了健身房。</span></span
          >
        </div>
        <div>
          <span class="term">動詞-ing</span>
          <span
            ><NoteMark
              sentence="After finishing work, I went to the gym."
              :marks="['finishing']"
            /><span class="translation">下班後我去了健身房。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="before 後面接動詞-ing，不接 to 不定詞" mark="having">
      <NoteFix
        wrong="Before to go out, turn off the lights."
        right="Before going out, turn off the lights."
        fix="going"
      />
    </NoteSlide>

    <NoteSlide title="after 後面直接接動詞時用動詞-ing" mark="having">
      <NoteFix
        wrong="After eat lunch, we went for a walk."
        right="After eating lunch, we went for a walk."
        fix="eating"
      />
    </NoteSlide>

    <NoteSlide title="動作者不同時，寫完整的子句" mark="I">
      <NoteFix
        wrong="After arriving at the airport, my brother picked me up."
        right="After I arrived at the airport, my brother picked me up."
        fix="I arrived"
      >
        想說的是我到了機場。動詞-ing 的動作者要和主要子句的主詞一樣。
      </NoteFix>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
