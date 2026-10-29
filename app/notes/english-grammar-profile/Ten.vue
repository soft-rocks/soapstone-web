<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// reported-speech-form-use-citation-present-simple, as slides, in the order of content.md. One
// point per slide: the title names it, the diagram shows it, and `mark` circles the matching words
// of the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="轉述書面資料，引述動詞用現在簡單式，子句不後移">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'The guidebook', role: '書面資料' },
          { t: 'says', role: '現在簡單式', kind: 'key' },
          { t: 'that', role: 'that' },
          { t: 'we can get there by train from London.', role: '子句（不後移）', kind: 'key' },
        ]"
      />
      <p class="translation">旅遊指南上說，我們可以從倫敦搭火車到那裡。</p>
    </NoteSlide>

    <NoteSlide title="say 後面不接人，tell 後面接讀的人" mark="says">
      <div class="rows is-labeled">
        <div>
          <span class="term">says</span>
          <span
            ><NoteMark
              sentence="The letter says that the meeting is on Friday."
              :marks="['says']"
            /><span class="translation">信上說會議在星期五。</span></span
          >
        </div>
        <div>
          <span class="term">tells + 人</span>
          <span
            ><NoteMark
              sentence="Your advertisement tells us that the hotel has a pool."
              :marks="['tells us']"
            /><span class="translation">你們的廣告上寫說，飯店有游泳池。</span></span
          >
        </div>
        <div>
          <span class="term">複數 + say</span>
          <span
            ><NoteMark
              sentence="The instructions say you need two batteries."
              :marks="['say']"
            /><span class="translation">說明書上說需要兩顆電池。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="看得出是哪份資料時，用 It 當主詞" mark="The guidebook">
      <div class="rows is-labeled">
        <div>
          <span class="term">前面提過</span>
          <span
            ><NoteMark
              sentence="It says you are looking for people to help at a summer camp."
              :marks="['It says']"
            /><span class="translation">上面寫說，你們在找人去夏令營幫忙。</span></span
          >
        </div>
        <div>
          <span class="term">場景看得出來</span>
          <span
            ><NoteMark sentence='Look, it says "No parking".' :marks="['it says']" /><span
              class="translation"
              >你看，上面寫著「禁止停車」。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="explains、warns、claims 也用現在簡單式" mark="says">
      <div class="rows is-labeled">
        <div>
          <span class="term">explains</span>
          <span
            ><NoteMark
              sentence="The website explains how the system works."
              :marks="['explains']"
            /><span class="translation">網站上有說明這套系統怎麼運作。</span></span
          >
        </div>
        <div>
          <span class="term">warns</span>
          <span
            ><NoteMark
              sentence="The label warns that the product contains nuts."
              :marks="['warns']"
            /><span class="translation">標籤上警告說，這個產品含有堅果。</span></span
          >
        </div>
        <div>
          <span class="term">claims</span>
          <span
            ><NoteMark
              sentence="The advert claims that the cream makes you look younger."
              :marks="['claims']"
            /><span class="translation">廣告宣稱這款乳霜能讓人看起來更年輕。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="say 後面不接人，要說出讀的人用 tell">
      <NoteFix
        wrong="The letter says me that I have won a prize."
        right="The letter tells me that I have won a prize."
        fix="tells me"
      />
    </NoteSlide>

    <NoteSlide title="tell 後面要接讀的人">
      <NoteFix
        wrong="The advert tells that the course is free."
        right="The advert tells us that the course is free."
        fix="tells us"
      />
    </NoteSlide>

    <NoteSlide title="instructions 是複數，引述動詞用 say">
      <NoteFix
        wrong="The instructions says that you need to charge it first."
        right="The instructions say that you need to charge it first."
        fix="say"
      />
    </NoteSlide>

    <NoteSlide title="介系詞片語不能當主詞" mark="The guidebook">
      <NoteFix
        wrong="In the newspaper says that the road will close."
        right="The newspaper says that the road will close."
        fix="The newspaper"
      />
    </NoteSlide>

    <NoteSlide title="According to 後面直接接主要子句，沒有 that">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'According to the guidebook,', role: '介系詞片語', kind: 'key' },
          { t: 'the museum is closed on Mondays.', role: '主要子句' },
        ]"
      />
      <p class="translation">根據旅遊指南，博物館星期一休館。</p>
    </NoteSlide>

    <NoteSlide title="人過去說的話，引述動詞用 said，時態後移">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'The teacher', kind: 'dim' },
          { t: 'said', role: '過去式', kind: 'key' },
          { t: 'we', kind: 'dim' },
          { t: 'could', role: '後移', kind: 'key' },
          { t: 'leave early.', kind: 'dim' },
        ]"
      />
      <p class="translation">老師說我們可以早點走。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
