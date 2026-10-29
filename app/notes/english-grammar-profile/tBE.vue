<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// nouns-form-common-nouns, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="普通名詞小寫開頭，人名大寫開頭">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'My', kind: 'dim' },
          { t: 'friend', role: '普通名詞', kind: 'key' },
          { t: 'is called', kind: 'dim' },
          { t: 'Jessica.', role: '專有名詞' },
        ]"
      />
      <p class="translation">我朋友叫 Jessica。</p>
      <p class="remark">普通名詞指一類的人、東西或地方。</p>
    </NoteSlide>

    <NoteSlide title="普通名詞指人、地方、東西、時間或活動" mark="friend">
      <div class="rows is-labeled">
        <div>
          <span class="term">人</span>
          <span>friend, mother, teacher, doctor</span>
        </div>
        <div>
          <span class="term">地方</span>
          <span>house, school, shop, park</span>
        </div>
        <div>
          <span class="term">東西</span>
          <span>car, book, phone, bag</span>
        </div>
        <div>
          <span class="term">時間</span>
          <span>day, week, morning, year</span>
        </div>
        <div>
          <span class="term">活動</span>
          <span>shopping, swimming, football</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="單數可數名詞前面要有限定詞" mark="My friend">
      <div class="rows is-labeled">
        <div>
          <span class="term">a</span>
          <span
            ><NoteMark sentence="I have a brother." :marks="['a brother']" /><span
              class="translation"
              >我有一個哥哥。</span
            ></span
          >
        </div>
        <div>
          <span class="term">the</span>
          <span
            ><NoteMark sentence="The park is near my school." :marks="['The park']" /><span
              class="translation"
              >公園在我學校附近。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="普通名詞在句中小寫開頭" mark="friend">
      <NoteFix wrong="My Teacher is very nice." right="My teacher is very nice." fix="teacher" />
    </NoteSlide>

    <NoteSlide title="car 前面要有限定詞" mark="My">
      <NoteFix wrong="I have car." right="I have a car." fix="a" />
    </NoteSlide>

    <NoteSlide title="兩個以上要用複數名詞">
      <NoteFix wrong="I have two sister." right="I have two sisters." fix="sisters" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
