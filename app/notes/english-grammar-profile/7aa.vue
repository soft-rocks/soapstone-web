<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-use-this-pointing, as slides, in the order of content.md. One point per slide: the title
// names it, the diagram shows it, and `mark` circles the matching words of the note's sentence.
// Keep the parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="this 指接下來的內容" mark="This is">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'This', role: '= 冒號後面', kind: 'key' },
          { t: 'is the information …:', kind: 'dim' },
          { t: 'it starts at 4 p.m. …', role: '接下來的內容' },
        ]"
      />
      <p class="translation">這是新美術課的資訊：下午 4 點開始，6 點結束。</p>
    </NoteSlide>

    <NoteSlide title="this 常帶出的內容" mark="This">
      <div class="rows is-labeled">
        <div>
          <span class="term">號碼和地址</span>
          <span
            ><NoteMark sentence="This is my number: 0754 567 78 51." :marks="['This']" /><span
              class="translation"
              >這是我的電話號碼：0754 567 78 51。</span
            ></span
          >
        </div>
        <div>
          <span class="term">計畫和時間</span>
          <span
            ><NoteMark
              sentence="This is the plan: we meet at ten and take the bus."
              :marks="['This']"
            /><span class="translation">計畫是這樣：我們十點碰面，然後搭公車。</span></span
          >
        </div>
        <div>
          <span class="term">要對方聽的話</span>
          <span
            ><NoteMark
              sentence="Listen to this: our teacher is getting married!"
              :marks="['this:']"
            /><span class="translation">你聽我說：我們老師要結婚了！</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="this 指後面，that 指前面" mark="This">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'This', role: '指後面', kind: 'key' },
          { t: 'is my address: 12 Park Road. Did you get', kind: 'dim' },
          { t: 'that?', role: '指前面', kind: 'key' },
        ]"
      />
      <p class="translation">這是我的地址：公園路 12 號。你記下來了嗎？</p>
    </NoteSlide>

    <NoteSlide title="帶出後面的內容用 this" mark="This">
      <NoteFix
        wrong="That is my email address: tom.green@mail.com."
        right="This is my email address: tom.green@mail.com."
        fix="This"
      />
    </NoteSlide>

    <NoteSlide title="this 接 is" mark="This is">
      <NoteFix
        wrong="This are the plan: we leave at nine and come back at five."
        right="This is the plan: we leave at nine and come back at five."
        fix="is"
      />
    </NoteSlide>

    <NoteSlide title="細節前面加冒號" mark="This is">
      <NoteFix
        wrong="This is my address 25 Hill Street."
        right="This is my address: 25 Hill Street."
        fix="address:"
      />
    </NoteSlide>

    <NoteSlide title="this 指前面的事">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'We missed the train.', role: '前面的事' },
          { t: 'This', role: '= 沒趕上火車', kind: 'key' },
          { t: 'made us late …', kind: 'dim' },
        ]"
      />
      <p class="translation">我們沒趕上火車，所以參加婚禮遲到了。</p>
    </NoteSlide>

    <NoteSlide title="Here is 帶出內容">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Here is', kind: 'key' },
          { t: 'my phone number:', kind: 'dim' },
          { t: '0712 345 678.', role: '接下來的內容' },
        ]"
      />
      <p class="translation">這是我的電話號碼：0712 345 678。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
