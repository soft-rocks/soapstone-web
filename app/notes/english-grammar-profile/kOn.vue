<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// during-for-in, as slides, in the order of content.md. One point per slide: the title names
// it, the diagram shows it, and `mark` circles the matching words of the note's sentence.
// Keep the parts of one sentence on one line: Vue drops the whitespace between two elements
// on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="opposite 說在……對面">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'My house is', kind: 'dim' },
          { t: 'opposite', role: '介系詞', kind: 'key' },
          { t: 'the post office.', role: '名詞片語' },
        ]"
      />
      <p class="translation">我家在郵局對面。</p>
    </NoteSlide>

    <NoteSlide title="更多介系詞說明精確的位置" mark="opposite">
      <div class="rows is-labeled">
        <div>
          <span class="term">between<br /><i>在兩個之間</i></span>
          <span>between the bank and the school</span>
        </div>
        <div>
          <span class="term">behind<br /><i>在……後面</i></span>
          <span>behind the door</span>
        </div>
        <div>
          <span class="term">above / below<br /><i>上方、下方</i></span>
          <span>above the sofa</span>
        </div>
        <div>
          <span class="term">along / across<br /><i>沿著、橫越</i></span>
          <span>along the river, across the road</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="during、until 和 by 說明時間" mark="opposite">
      <div class="rows is-labeled">
        <div>
          <span class="term">during<br /><i>在某段時間裡</i></span>
          <span>during the film</span>
        </div>
        <div>
          <span class="term">until<br /><i>直到</i></span>
          <span>until Friday</span>
        </div>
        <div>
          <span class="term">by<br /><i>最晚在……以前</i></span>
          <span
            ><NoteMark
              sentence="Please send me the photos by Friday."
              :marks="['by Friday']"
            /><span class="translation">請在星期五以前把照片寄給我。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="like、without 和 about 說比較、沒有和主題" mark="opposite">
      <div class="rows is-labeled">
        <div>
          <span class="term">like<br /><i>像</i></span>
          <span>blue like the sky</span>
        </div>
        <div>
          <span class="term">without<br /><i>沒有</i></span>
          <span>coffee without sugar</span>
        </div>
        <div>
          <span class="term">about<br /><i>關於</i></span>
          <span>a film about dogs</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="opposite 後面直接接名詞，不加 of" mark="opposite">
      <NoteFix
        wrong="The school is opposite of the park."
        right="The school is opposite the park."
        fix="opposite the park"
      />
    </NoteSlide>

    <NoteSlide title="最晚在某個時間以前完成用 by，持續到某個時間用 until">
      <NoteFix
        wrong="You must finish the essay until Monday."
        right="You must finish the essay by Monday."
        fix="by"
      />
    </NoteSlide>

    <NoteSlide title="說時間的長度用 for，不用 during">
      <NoteFix
        wrong="I lived in Paris during three years."
        right="I lived in Paris for three years."
        fix="for"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
