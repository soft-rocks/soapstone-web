<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-ours-as-subject, as slides, in the order of content.md. One point per slide: the title names it, the
// diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="Ours 放在句首當主詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Ours', role: '= our store', kind: 'key' },
          { t: 'is', role: '動詞' },
          { t: 'the only store in this locality', role: '補語' },
          { t: 'which opens at 7:00 a.m.', role: '關係子句', kind: 'dim' },
        ]"
      />
      <p class="translation">我們店是這一帶唯一早上 7 點就開門的店。</p>
    </NoteSlide>

    <NoteSlide title="動詞跟著 ours 代替的名詞變化" mark="Ours is">
      <div class="rows is-labeled">
        <div>
          <span class="term">單數</span>
          <span
            ><NoteMark
              sentence="Their flight is at nine, but ours is at noon."
              :marks="['ours is']"
            /><span class="translation">他們的班機九點，可是我們的是中午。</span></span
          >
        </div>
        <div>
          <span class="term">單數</span>
          <span
            ><NoteMark
              sentence="Their house has a pool. Ours has a big garden."
              :marks="['Ours has']"
            /><span class="translation">他們的房子有游泳池。我們的有一座大花園。</span></span
          >
        </div>
        <div>
          <span class="term">複數</span>
          <span
            ><NoteMark
              sentence="Their products are cheap, but ours are more reliable."
              :marks="['ours are']"
            /><span class="translation">他們的產品很便宜，可是我們的比較可靠。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="商業信件用 Ours is 介紹自己的公司或店" mark="Ours is">
      <div class="rows is-labeled">
        <div>
          <span class="term">介紹</span>
          <span
            ><NoteMark
              sentence="Ours is a small family business with three shops."
              :marks="['Ours is']"
            /><span class="translation">我們是一家有三間店面的小型家族企業。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="ours 沒有撇號" mark="Ours">
      <NoteFix
        wrong="Our's is the house with the red door."
        right="Ours is the house with the red door."
        fix="Ours"
      />
    </NoteSlide>

    <NoteSlide title="後面沒有名詞時用 ours 當主詞" mark="Ours">
      <NoteFix
        wrong="Their car is old, but our is new."
        right="Their car is old, but ours is new."
        fix="ours"
      />
    </NoteSlide>

    <NoteSlide title="ours 代替複數名詞時，動詞用複數" mark="Ours is">
      <NoteFix
        wrong="Their rooms are small, but ours is huge."
        right="Their rooms are small, but ours are huge."
        fix="are#2"
      >
        <code>ours</code> 代替好幾個房間，等於 <code>our rooms</code>。
      </NoteFix>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
