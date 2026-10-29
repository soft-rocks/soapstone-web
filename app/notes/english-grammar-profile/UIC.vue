<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-use-politeness-i-thought, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="I thought 讓提議聽起來委婉" mark="I thought">
      <NoteWords
        :size="20"
        :parts="[
          { t: 'I thought', role: '委婉', kind: 'key', ring: true },
          { t: 'you', role: '子句的主詞' },
          { t: 'might', role: '不確定', kind: 'key' },
          { t: 'be interested in writing', role: 'be interested in + 動詞-ing' },
          { t: 'about a special dish from your country.', kind: 'dim' },
        ]"
      />
      <p class="translation">我想你可能會有興趣寫一道你們國家的特色菜。</p>
      <p class="remark">說話者在編國際食譜，寫信邀外國朋友。</p>
    </NoteSlide>

    <NoteSlide title="常見的說法" mark="I thought you might">
      <div class="rows is-labeled">
        <div>
          <span class="term">對方的需要</span>
          <span><NoteMark sentence="I thought you might like this." :marks="['you might']" /></span>
        </div>
        <div>
          <span class="term">好主意</span>
          <span
            ><NoteMark
              sentence="I thought it would be useful to meet."
              :marks="['it would be useful to']"
          /></span>
        </div>
        <div>
          <span class="term">一起做</span>
          <span><NoteMark sentence="I thought we could have lunch." :marks="['we could']" /></span>
        </div>
        <div>
          <span class="term">自己決定</span>
          <span><NoteMark sentence="I thought I'd let you know." :marks="['I\'d']" /></span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="正式書信用 We thought" mark="I thought">
      <NoteMark
        sentence="Dear Mr Lee, thank you for shopping with us. We thought you would like to know that your order has been sent."
        :marks="['We thought', 'would']"
      />
      <p class="translation">
        李先生您好，謝謝您在本店購物。我們想您會想知道，您訂購的東西已經寄出了。
      </p>
    </NoteSlide>

    <NoteSlide title="might 後面要接 be" mark="might">
      <NoteFix
        wrong="I thought you might interested in this cooking course."
        right="I thought you might be interested in this cooking course."
        fix="be"
      />
    </NoteSlide>

    <NoteSlide title="I thought 後面接 I'd" mark="I thought">
      <NoteFix
        wrong="I thought to let you know about the change of room."
        right="I thought I'd let you know about the change of room."
        fix="I'd let"
      />
    </NoteSlide>

    <NoteSlide title="to 後面接原形動詞" mark="I thought">
      <NoteFix
        wrong="I thought it would be a good idea to booking a table."
        right="I thought it would be a good idea to book a table."
        fix="book"
      />
    </NoteSlide>

    <NoteSlide title="委婉的 I thought 和想錯了的 I thought" mark="I thought">
      <div class="rows is-labeled">
        <div>
          <span class="term">現在的想法</span>
          <span
            ><NoteMark
              sentence="Here's a USB stick from the wedding. I thought you might like a copy of the photos."
              :marks="['I thought']"
            /><span class="translation">這是婚禮的隨身碟。我想你可能會想要一份照片。</span></span
          >
        </div>
        <div>
          <span class="term">想錯了</span>
          <span
            ><NoteMark
              sentence="Sorry I'm late. I thought the shop opened at nine, but it opens at ten."
              :marks="['I thought']"
            /><span class="translation"
              >抱歉我來晚了。我以為那家店九點開，結果十點才開。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="I think 直接說出意見" mark="I thought you might">
      <div class="rows is-labeled">
        <div>
          <span class="term">直接</span>
          <span
            ><NoteMark
              sentence="You're the best person for it. I think you should apply for the job."
              :marks="['I think']"
            /><span class="translation">你是最適合的人。我覺得你應該去應徵那份工作。</span></span
          >
        </div>
        <div>
          <span class="term">委婉</span>
          <span
            ><NoteMark
              sentence="Here's an advert from the paper. I thought you might want to apply for the job."
              :marks="['I thought', 'might']"
            /><span class="translation"
              >這是報紙上的廣告。我想你也許會想去應徵那份工作。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
