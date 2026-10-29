<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// nouns-form-proper-nouns, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="星期的名字在句中也大寫開頭">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I want to see you', kind: 'dim' },
          { t: 'on', role: '星期前面用 on' },
          { t: 'Saturday', role: '專有名詞', kind: 'key' },
          { t: 'and', kind: 'dim' },
          { t: 'Sunday.', role: '專有名詞', kind: 'key' },
        ]"
      />
      <p class="translation">我想在星期六和星期天見你。</p>
    </NoteSlide>

    <NoteSlide title="人名、地名、星期、月份、語言和節日都大寫" mark="Saturday and Sunday">
      <div class="rows is-labeled">
        <div>
          <span class="term">人名</span>
          <span>Jessica, Mr Smith, Dr Lee</span>
        </div>
        <div>
          <span class="term">地名</span>
          <span>Leicester, Japan, Hamilton</span>
        </div>
        <div>
          <span class="term">星期和月份</span>
          <span>Monday, Friday, March, December</span>
        </div>
        <div>
          <span class="term">語言和國籍</span>
          <span>English, French, Chinese</span>
        </div>
        <div>
          <span class="term">節日</span>
          <span>Christmas, New Year</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="城市和月份前面通常不加 a 或 the" mark="Saturday">
      <div class="rows is-labeled">
        <div>
          <span class="term">城市</span>
          <span
            ><NoteMark sentence="I live in Leicester." :marks="['Leicester']" /><span
              class="translation"
              >我住在萊斯特。</span
            ></span
          >
        </div>
        <div>
          <span class="term">月份</span>
          <span
            ><NoteMark sentence="My birthday is in May." :marks="['May']" /><span
              class="translation"
              >我的生日在五月。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">有些名字本身帶 <code>the</code>，像 <code>the British Museum</code>。</p>
    </NoteSlide>

    <NoteSlide title="星期和月份的名字大寫開頭" mark="Saturday">
      <NoteFix wrong="See you on monday." right="See you on Monday." fix="Monday" />
    </NoteSlide>

    <NoteSlide title="語言和國籍的名字大寫開頭">
      <NoteFix
        wrong="She speaks english and french."
        right="She speaks English and French."
        :fix="['English', 'French']"
      />
    </NoteSlide>

    <NoteSlide title="季節不是專有名詞，小寫開頭">
      <NoteFix wrong="I love Summer." right="I love summer." fix="summer" />
    </NoteSlide>

    <NoteSlide title="城市的名字前面不加 the">
      <NoteFix wrong="I was born in the Madrid." right="I was born in Madrid." fix="Madrid" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
