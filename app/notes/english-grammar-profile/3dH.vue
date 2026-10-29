<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adverbs-form-degree-end-position, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="程度副詞放在受詞後面">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'I', role: '主詞', kind: 'dim' },
          { t: 'miss', role: '動詞' },
          { t: 'you', role: '受詞' },
          { t: 'a lot.', role: '程度副詞', kind: 'key' },
        ]"
      />
      <p class="translation">我很想你。</p>
    </NoteSlide>

    <NoteSlide title="各個程度副詞的意思" mark="a lot">
      <div class="rows is-labeled">
        <div>
          <span class="term">a lot、very much</span>
          <span>很，非常</span>
        </div>
        <div>
          <span class="term">so much</span>
          <span>好，非常，說話者的感覺很強</span>
        </div>
        <div>
          <span class="term">too much</span>
          <span>太多，超過適當的程度</span>
        </div>
        <div>
          <span class="term">a bit、a little</span>
          <span>一點點</span>
        </div>
        <div>
          <span class="term">at all</span>
          <span>一點也不，只用在否定句和疑問句</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="too much 是太多，句尾的 too 是也">
      <div class="rows is-labeled">
        <div>
          <span class="term">too much</span>
          <span
            ><NoteMark sentence="You work too much." :marks="['too much']" /><span
              class="translation"
              >你工作太多了。</span
            ></span
          >
        </div>
        <div>
          <span class="term">too</span>
          <span
            ><NoteMark sentence="You work too." :marks="['too']" /><span class="translation"
              >你也有工作。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="否定句和疑問句的 at all">
      <div class="rows is-labeled">
        <div>
          <span class="term">否定句</span>
          <span
            ><NoteMark sentence="I didn't sleep at all last night." :marks="['at all']" /><span
              class="translation"
              >我昨晚完全沒睡。</span
            ></span
          >
        </div>
        <div>
          <span class="term">疑問句</span>
          <span
            ><NoteMark sentence="Did you enjoy the film at all?" :marks="['at all']" /><span
              class="translation"
              >你到底喜不喜歡那部電影？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="程度副詞不放在動詞和受詞中間" mark="you a lot">
      <NoteFix
        wrong="I changed a bit my plans."
        right="I changed my plans a bit."
        fix="my plans a bit"
      />
    </NoteSlide>

    <NoteSlide title="at all 放在句尾">
      <NoteFix
        wrong="I don't at all understand this question."
        right="I don't understand this question at all."
        fix="at all"
      />
    </NoteSlide>

    <NoteSlide title="肯定句不用 at all">
      <NoteFix wrong="I enjoyed the trip at all." right="I enjoyed the trip a lot." fix="a lot" />
    </NoteSlide>

    <NoteSlide title="表示太多用 too much">
      <NoteFix
        wrong="You worry too. Everything will be fine."
        right="You worry too much. Everything will be fine."
        fix="too much"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
