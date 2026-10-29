<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// verbs-form-there-are, as slides, in the order of content.md. One point per slide: the title
// names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="there are 後面接兩個以上的人或東西">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'There are', role: 'there + be', kind: 'key' },
          { t: 'many shops and schools.', role: '複數名詞片語', kind: 'key' },
        ]"
      />
      <p class="translation">這裡有很多商店和學校。</p>
      <p class="remark">這句沒有寫地點。前面的句子已經說了是哪裡。</p>
    </NoteSlide>

    <NoteSlide title="地點可以放在句尾，也可以放在句首" mark="There are">
      <div class="rows is-labeled">
        <div>
          <span class="term">地點在句尾</span>
          <span
            ><NoteMark
              sentence="There are three cinemas in our town."
              :marks="['in our town']"
            /><span class="translation">我們鎮上有三家電影院。</span></span
          >
        </div>
        <div>
          <span class="term">地點在句首</span>
          <span
            ><NoteMark
              sentence="In the park there are a lot of trees."
              :marks="['In the park']"
            /><span class="translation">公園裡有很多樹。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="複數名詞前面常有數字、many 或 some" mark="many">
      <div class="rows is-labeled">
        <div>
          <span class="term">數字</span>
          <span
            ><NoteMark sentence="There are three bedrooms upstairs." :marks="['three']" /><span
              class="translation"
              >樓上有三間臥室。</span
            ></span
          >
        </div>
        <div>
          <span class="term">many</span>
          <span
            ><NoteMark sentence="There are many cafés in this street." :marks="['many']" /><span
              class="translation"
              >這條街上有很多咖啡店。</span
            ></span
          >
        </div>
        <div>
          <span class="term">some</span>
          <span
            ><NoteMark
              sentence="There are some students in the classroom."
              :marks="['some']"
            /><span class="translation">教室裡有一些學生。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="兩個以上的東西用 there are" mark="are">
      <NoteFix
        wrong="There is three lifts in this building."
        right="There are three lifts in this building."
        fix="are"
      />
    </NoteSlide>

    <NoteSlide title="there are 後面的名詞用複數" mark="shops">
      <NoteFix
        wrong="There are many bench in the old square."
        right="There are many benches in the old square."
        fix="benches"
      />
    </NoteSlide>

    <NoteSlide title="說某個地方有東西，用 there are，不用 have" mark="There are">
      <NoteFix
        wrong="In my school have many teachers."
        right="In my school there are many teachers."
        fix="there are"
      />
    </NoteSlide>

    <NoteSlide title="說有東西用 there are，不用 they are" mark="There">
      <NoteFix
        wrong="They are many people in the shop."
        right="There are many people in the shop."
        fix="There"
      />
    </NoteSlide>

    <NoteSlide title="一個東西用 there is" mark="There are">
      <NoteMark
        sentence="There is one bathroom in my flat."
        :marks="['There is', 'one bathroom']"
      />
      <p class="translation">我的公寓有一間浴室。</p>
    </NoteSlide>

    <NoteSlide title="說那些東西怎麼樣，用 they are" mark="There are">
      <NoteMark
        sentence="There are two cats in the garden. They are black."
        :marks="['They are']"
      />
      <p class="translation">花園裡有兩隻貓。牠們是黑色的。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
