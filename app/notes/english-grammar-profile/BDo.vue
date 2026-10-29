<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// conjunctions-use-but-concessive, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="子句 + , but + 子句" mark="but">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'It is very small,', role: '讓人預期的事' },
          { t: 'but', role: '連接詞', kind: 'key' },
          { t: 'it is very easy to clean.', role: '出乎意料的結果' },
        ]"
      />
      <p class="translation">它很小，但打掃起來很容易。</p>
    </NoteSlide>

    <NoteSlide title="形容詞 + but + 形容詞" mark="small, but">
      <NoteMark
        sentence="My home is small but so comfortable."
        :marks="['small but so comfortable.']"
      />
      <p class="translation">我家很小，但是非常舒服。</p>
    </NoteSlide>

    <NoteSlide title="出乎意料的對比和一般的對比" mark="but">
      <div class="rows is-labeled">
        <div>
          <span class="term">出乎意料</span>
          <span
            ><NoteMark sentence="He is very rich, but he is not happy." :marks="['but']" /><span
              class="translation"
              >有錢通常讓人以為他很快樂。</span
            ></span
          >
        </div>
        <div>
          <span class="term">一般的對比</span>
          <span
            ><NoteMark sentence="I like tea, but my sister likes coffee." :marks="['but']" /><span
              class="translation"
              >兩件事不一樣，沒有預期。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="沒有對比用 and">
      <NoteFix
        wrong="Our hotel was near the beach, but it had a lovely pool."
        right="Our hotel was near the beach, and it had a lovely pool."
        fix="and"
      />
    </NoteSlide>

    <NoteSlide title="although 和 but 只用一個">
      <NoteFix
        wrong="Although the flat is small, but it is very comfortable."
        right="Although the flat is small, it is very comfortable."
        fix="small, it"
      />
    </NoteSlide>

    <NoteSlide title="but 後面是相反的結果" mark="but">
      <NoteFix
        wrong="It was raining hard, but we stayed at home."
        right="It was raining hard, but we went for a walk."
        fix="went for a walk."
      />
    </NoteSlide>

    <NoteSlide title="but 放在兩個子句中間" mark="but">
      <NoteFix
        wrong="But it is old, the car still runs well."
        right="The car is old, but it still runs well."
        fix="old, but"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
