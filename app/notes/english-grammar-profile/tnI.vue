<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// nouns-form-with-relative-clause-as-postmodifier, as slides, in the order of content.md.
// One point per slide: the title names it, the diagram shows it, and `mark` circles the
// matching words of the note's sentence. Keep the parts of one sentence on one line: Vue
// drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="逗號後面的關係子句補充名詞片語的資料">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'You can always visit', kind: 'dim' },
          { t: 'our shopping center,', role: '名詞片語' },
          { t: 'which', role: '關係代名詞', kind: 'key' },
          { t: 'is one of the biggest in Brazil.', role: '子句的其餘部分', kind: 'key' },
        ]"
      />
      <p class="translation">你隨時都可以來逛我們的購物中心，它是巴西最大的購物中心之一。</p>
      <p class="remark">拿掉關係子句，句子的意思還是完整。</p>
    </NoteSlide>

    <NoteSlide title="人用 who，東西用 which，地方用 where" mark="which">
      <div class="rows is-labeled">
        <div>
          <span class="term">who</span>
          <span
            ><NoteMark
              sentence="This is my brother Tom, who lives in Leeds."
              :marks="['who']"
            /><span class="translation">這是我哥哥 Tom，他住在里茲。</span></span
          >
        </div>
        <div>
          <span class="term">which</span>
          <span
            ><NoteMark
              sentence="I had lunch at the station café, which was very cheap."
              :marks="['which']"
            /><span class="translation">我在車站的咖啡店吃了午餐，那裡很便宜。</span></span
          >
        </div>
        <div>
          <span class="term">where</span>
          <span
            ><NoteMark
              sentence="We stayed in Brighton, where my aunt lives."
              :marks="['where']"
            /><span class="translation">我們住在布萊頓，我阿姨住在那裡。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="名詞片語在句中，關係子句前後都加逗號">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'My sister,', role: '名詞片語' },
          { t: 'who is a nurse,', role: '關係子句', kind: 'key' },
          { t: 'works at night.', kind: 'dim' },
        ]"
      />
      <p class="translation">我姊姊是護士，她上夜班。</p>
    </NoteSlide>

    <NoteSlide title="非限定關係子句不用 that" mark="which">
      <NoteFix
        wrong="I met Paul, that works with my dad."
        right="I met Paul, who works with my dad."
        fix="who"
      />
    </NoteSlide>

    <NoteSlide title="補充的關係子句前後要加逗號">
      <NoteFix
        wrong="My mother who is fifty runs every day."
        right="My mother, who is fifty, runs every day."
        fix="who is fifty,"
      >
        說話的人只有一個母親。
      </NoteFix>
    </NoteSlide>

    <NoteSlide title="which 已經代替名詞片語，子句裡不再加 it" mark="which">
      <NoteFix
        wrong="We went to the museum, which it was free."
        right="We went to the museum, which was free."
        fix="was"
      />
    </NoteSlide>

    <NoteSlide title="東西用 which，不用 who" mark="which">
      <NoteFix
        wrong="I lost my phone, who was new."
        right="I lost my phone, which was new."
        fix="which"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
