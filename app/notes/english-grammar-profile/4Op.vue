<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// verbs-form-there-is-are-a-lot-of, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="a lot of 後面的名詞是複數，一般用 there are">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'You can go to the town center because', kind: 'dim' },
          { t: 'there are', role: 'there + be', kind: 'key' },
          { t: 'a lot of', role: '數量詞' },
          { t: 'shops', role: '複數名詞', kind: 'key' },
          { t: 'there.', role: '地點', kind: 'dim' },
        ]"
      />
      <p class="translation">你可以去市中心，因為那裡有很多商店。</p>
    </NoteSlide>

    <NoteSlide title="複數名詞口語也說 there's，不可數名詞只用 there is" mark="there are">
      <div class="rows is-labeled">
        <div>
          <span class="term">複數名詞<br /><i>寫作</i></span>
          <span
            ><NoteMark
              sentence="There are a lot of bikes outside the station."
              :marks="['There are', 'bikes']"
            /><span class="translation">車站外面有很多腳踏車。</span></span
          >
        </div>
        <div>
          <span class="term">複數名詞<br /><i>口語</i></span>
          <span
            ><NoteMark
              sentence="There's a lot of cars in the car park today!"
              :marks="['There\'s', 'cars']"
            /><span class="translation">今天停車場好多車！</span></span
          >
        </div>
        <div>
          <span class="term">不可數名詞</span>
          <span
            ><NoteMark
              sentence="There is a lot of dust under the bed."
              :marks="['There is', 'dust']"
            /><span class="translation">床底下灰塵很多。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="traffic 是不可數名詞，用 there is" mark="there are">
      <NoteFix
        wrong="There are a lot of traffic on this road."
        right="There is a lot of traffic on this road."
        fix="is"
      />
    </NoteSlide>

    <NoteSlide title="a lot 後面接名詞時要加 of" mark="of">
      <NoteFix
        wrong="There are a lot tourists in summer."
        right="There are a lot of tourists in summer."
        fix="of"
      />
    </NoteSlide>

    <NoteSlide title="可數名詞在 a lot of 後面用複數" mark="shops">
      <NoteFix
        wrong="There are a lot of shop in my street."
        right="There are a lot of shops in my street."
        fix="shops"
      />
    </NoteSlide>

    <NoteSlide title="a lot of 要有 a，lots of 才不加 a" mark="a">
      <NoteFix
        wrong="There are lot of cars outside."
        right="There are a lot of cars outside."
        fix="a"
      />
    </NoteSlide>

    <NoteSlide title="many 比 a lot of 正式" mark="a lot of">
      <NoteMark sentence="There are many old houses in my village." :marks="['many']" />
      <p class="translation">我的村子有很多老房子。</p>
    </NoteSlide>

    <NoteSlide title="a lot 後面沒有名詞時，不加 of" mark="a lot of">
      <NoteMark sentence="There is a lot to do in this city." :marks="['a lot to']" />
      <p class="translation">這個城市有很多事可以做。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
