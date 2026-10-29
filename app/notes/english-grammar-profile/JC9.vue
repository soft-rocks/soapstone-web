<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// prepositions-form-use-formal, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="upon 等於 on，比較正式">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'Why don\'t you', role: '提出建議', kind: 'dim' },
          { t: 'act', role: '動詞' },
          { t: 'upon', role: '介系詞', kind: 'key' },
          { t: 'my advice?', role: '名詞片語' },
        ]"
      />
      <p class="translation">你為什麼不照我的建議去做呢？</p>
    </NoteSlide>

    <NoteSlide title="正式的介系詞和常用的說法" mark="upon">
      <div class="rows is-labeled">
        <div>
          <span class="term">upon<br /><i>= on</i></span>
          <span
            ><NoteMark
              sentence="Upon arrival, please go to the front desk."
              :marks="['Upon']"
            /><span class="translation">抵達後，請到櫃台報到。</span></span
          >
        </div>
        <div>
          <span class="term">amongst<br /><i>= among</i></span>
          <span>amongst the guests</span>
        </div>
        <div>
          <span class="term">regarding<br /><i>= about</i></span>
          <span
            ><NoteMark
              sentence="Please contact us regarding your order."
              :marks="['regarding']"
            /><span class="translation">關於您的訂單，請與我們聯絡。</span></span
          >
        </div>
        <div>
          <span class="term">amid<br /><i>在混亂或聲音之中</i></span>
          <span>amid the noise</span>
        </div>
        <div>
          <span class="term">toward / unlike</span>
          <span>toward the station, unlike other areas</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="商業信件用 concerning，日常說話用 about" mark="upon">
      <div class="rows is-labeled">
        <div>
          <span class="term">正式</span>
          <span
            ><NoteMark
              sentence="We are writing concerning your recent complaint."
              :marks="['concerning']"
            /><span class="translation">我們寫信是關於您最近的申訴。</span></span
          >
        </div>
        <div>
          <span class="term">日常</span>
          <span
            ><NoteMark sentence="I'm calling about your complaint." :marks="['about']" /><span
              class="translation"
              >我打來是關於你的申訴。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="regarding 前面不加 about">
      <NoteFix
        wrong="I'm writing about regarding the meeting."
        right="I'm writing regarding the meeting."
        fix="regarding"
      />
    </NoteSlide>

    <NoteSlide title="兩個之間用 between，amongst 用在三個以上">
      <NoteFix
        wrong="I found the letter amongst the two books."
        right="I found the letter between the two books."
        fix="between"
      />
    </NoteSlide>

    <NoteSlide title="upon 後面接名詞片語或動詞-ing，不接子句" mark="upon">
      <NoteFix
        wrong="Upon we arrived, we checked in."
        right="Upon arriving, we checked in."
        fix="arriving,"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
