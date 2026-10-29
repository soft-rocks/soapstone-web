<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 076, as slides, in the order of notes/dragon-english-basic-100/076.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide
      title="It is not until ... that 表示到了某個時間才發生某件事"
      :mark="['not until', 'that']"
    >
      <NoteWords
        :size="22"
        :parts="[
          { t: 'It is not until', kind: 'key' },
          { t: 'you go abroad', role: '子句' },
          { t: 'that', kind: 'key' },
          {
            t: 'you realize how many neon lights …',
            role: '發生的事',
          },
        ]"
      />
      <p class="translation">{{ note.translation }}</p>
      <p class="remark">出國之前，你不會發現這件事。</p>
    </NoteSlide>

    <NoteSlide title="not until 後面可以接時間，也可以接子句" mark="you go abroad">
      <div class="rows is-labeled">
        <div>
          <span class="term">時間</span>
          <span
            ><NoteMark
              sentence="It was not until midnight that he came home."
              :marks="['midnight']"
            /><span class="translation">他到半夜才回家。</span></span
          >
        </div>
        <div>
          <span class="term">子句</span>
          <span
            ><NoteMark
              sentence="It was not until I got home that I noticed my phone was missing."
              :marks="['I got home']"
            /><span class="translation">我到家之後才發現我的手機不見了。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="講過去的事用 It was not until" mark="It is">
      <div class="rows is-labeled">
        <div>
          <span class="term">現在</span>
          <span
            ><NoteMark
              sentence="It is not until you get sick that you know the value of health."
              :marks="['It is']"
            /><span class="translation">人要等到生病，才知道健康的可貴。</span></span
          >
        </div>
        <div>
          <span class="term">過去</span>
          <span
            ><NoteMark
              sentence="It was not until last year that I learned to swim."
              :marks="['It was']"
            /><span class="translation">我到去年才學會游泳。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="how many 帶出間接問句，當 realize 的受詞" mark="how many">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'you', kind: 'dim' },
          { t: 'realize', role: '動詞', kind: 'key' },
          {
            t: 'how many neon lights there are in big Japanese cities.',
            role: '受詞：間接問句',
            kind: 'key',
          },
        ]"
      />
    </NoteSlide>

    <NoteSlide title="間接問句用直述句的語序，there 放在 are 前面" mark="there are">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'how many', role: '疑問詞' },
          { t: 'neon lights', role: '複數名詞' },
          { t: 'there', kind: 'key', ring: true },
          { t: 'are', role: '動詞', kind: 'key' },
          { t: 'in big Japanese cities.', kind: 'dim' },
        ]"
      />
    </NoteSlide>

    <NoteSlide title="間接問句也可以當介系詞的受詞" mark="how many">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I was surprised', kind: 'dim' },
          { t: 'at', role: '介系詞', kind: 'key' },
          { t: 'how many people there were at the station.', role: '受詞：間接問句', kind: 'key' },
        ]"
      />
      <p class="translation">車站裡的人多到讓我很驚訝。</p>
    </NoteSlide>
  </NoteDeck>
</template>
