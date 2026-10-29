<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// conjunctions-form-either-or-271, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between
// two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="Either + 子句 + , or + 子句" mark="Either">
      <NoteWords
        :size="20"
        :parts="[
          { t: 'Either', role: '連接詞', kind: 'key' },
          { t: 'you get something from your country,', role: '子句 + 逗號' },
          { t: 'or', role: '連接詞', kind: 'key' },
          { t: 'I get something from their wedding list.', role: '子句' },
        ]"
      />
      <p class="translation">要嘛你從你們國家帶點東西來，要嘛我從他們的結婚禮物清單上買一樣。</p>
    </NoteSlide>

    <NoteSlide title="用冒號帶出兩個選項">
      <NoteMark
        sentence="You have two options: either you take the train tonight, or you wait for the first bus tomorrow."
        :marks="['options:']"
      />
      <p class="translation">你有兩個選擇：要嘛今晚搭火車，要嘛等明天第一班公車。</p>
    </NoteSlide>

    <NoteSlide title="選項裡面再接子句">
      <div class="rows is-labeled">
        <div>
          <span class="term">which</span>
          <span>補充說明前面的事</span>
        </div>
        <div>
          <span class="term">because</span>
          <span>說明理由</span>
        </div>
        <div>
          <span class="term">and</span>
          <span>接著說下一步</span>
        </div>
      </div>
      <NoteMark
        sentence="Either we meet at the station, which is easier for you, or I pick you up at home and we drive there together."
        :marks="['which', 'and']"
      />
      <p class="translation">
        要嘛我們在車站碰面，這樣對你比較方便，要嘛我去你家接你，我們一起開車過去。
      </p>
    </NoteSlide>

    <NoteSlide title="either 和 or 搭配" mark="or">
      <NoteFix
        wrong="Either you call the hotel, and I send them an email."
        right="Either you call the hotel, or I send them an email."
        fix="or"
      />
    </NoteSlide>

    <NoteSlide title="or 後面的子句要有主詞" mark="or I">
      <NoteFix
        wrong="Either we leave now, or miss the last train."
        right="Either we leave now, or we miss the last train."
        fix="or we"
      />
    </NoteSlide>

    <NoteSlide title="二選一用 either，不用 neither" mark="Either">
      <NoteFix
        wrong="Neither you book the tickets, or I do it tomorrow."
        right="Either you book the tickets, or I do it tomorrow."
        fix="Either"
      />
    </NoteSlide>

    <NoteSlide title="either 放在第一個選項前面">
      <NoteFix
        wrong="You either have two choices: you stay, or you go."
        right="You have two choices: either you stay, or you go."
        fix="either you"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
