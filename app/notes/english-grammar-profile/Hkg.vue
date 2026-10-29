<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// verbs-form-verb-preposition-object-1049, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words
// of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="介系詞動詞由動詞和介系詞組成，後面接受詞" mark="deal with">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Our company needs to train some staff on how to', kind: 'dim' },
          { t: 'deal', role: '動詞', kind: 'key' },
          { t: 'with', role: '介系詞', kind: 'key' },
          { t: 'customer complaints.', role: '受詞' },
        ]"
      />
      <p class="translation">我們公司需要訓練一些員工處理客訴。</p>
      <p class="remark"><code>deal with</code> 的意思是處理。</p>
    </NoteSlide>

    <NoteSlide title="受詞可以是名詞、代名詞、動詞-ing 或 wh 子句" mark="customer complaints">
      <div class="rows is-labeled">
        <div>
          <span class="term">名詞</span>
          <span
            ><NoteMark sentence="She applied for the job." :marks="['the job']" /><span
              class="translation"
              >她應徵了那份工作。</span
            ></span
          >
        </div>
        <div>
          <span class="term">代名詞</span>
          <span
            ><NoteMark sentence="You can rely on me." :marks="['me']" /><span class="translation"
              >你可以信賴我。</span
            ></span
          >
        </div>
        <div>
          <span class="term">動詞&#x2060;-&#x2060;ing</span>
          <span
            ><NoteMark sentence="He insisted on paying for dinner." :marks="['paying']" /><span
              class="translation"
              >他堅持要請吃晚餐。</span
            ></span
          >
        </div>
        <div>
          <span class="term">wh 子句</span>
          <span
            ><NoteMark
              sentence="It depends on what time you arrive."
              :marks="['what time you arrive']"
            /><span class="translation">那要看你幾點到。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="deal 後面接受詞時，要加介系詞 with" mark="with">
      <NoteFix
        wrong="We need to deal the problem today."
        right="We need to deal with the problem today."
        fix="with"
      />
    </NoteSlide>

    <NoteSlide title="depend 的介系詞是 on" mark="with">
      <NoteFix wrong="It depends of the weather." right="It depends on the weather." fix="on" />
    </NoteSlide>

    <NoteSlide title="介系詞後面的動詞用動詞-ing">
      <NoteFix
        wrong="She succeeded in pass the exam."
        right="She succeeded in passing the exam."
        fix="passing"
      />
    </NoteSlide>

    <NoteSlide title="接 that 子句時，拿掉介系詞">
      <NoteFix
        wrong="They complained about that the room was cold."
        right="They complained that the room was cold."
        fix="complained that"
      />
    </NoteSlide>

    <NoteSlide title="agree with 接人或看法，agree to 接提議或計畫">
      <NoteFork
        stem="I agree"
        :branches="[
          { head: 'with', rest: 'you', meaning: '同意看法', zh: '我同意你的看法。' },
          { head: 'to', rest: 'the plan', meaning: '同意計畫', zh: '我同意這個計畫。' },
        ]"
      />
    </NoteSlide>

    <NoteSlide title="discuss 後面直接接受詞">
      <NoteFix
        wrong="We discussed about the problem."
        right="We discussed the problem."
        fix="discussed"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
