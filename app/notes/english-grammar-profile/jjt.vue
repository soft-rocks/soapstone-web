<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-modified, as slides, in the order of content.md. One point per slide: the title
// names it, the diagram shows it, and `mark` circles the matching words of the note's sentence.
// Keep the parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="very / too / so + few / many" mark="far too few">
      <NoteWords
        :size="28"
        :parts="[
          { t: '… but', kind: 'dim' },
          { t: 'far', role: '加強 too' },
          { t: 'too', role: '太' },
          { t: 'few', role: '代名詞', kind: 'key' },
          { t: 'did.', kind: 'dim' },
        ]"
      />
      <p class="translation">……但這樣做的人實在太少了。</p>
    </NoteSlide>

    <NoteSlide title="very、too 和 so" mark="too">
      <div class="rows is-labeled">
        <div>
          <span class="term">very</span>
          <span
            ><NoteMark
              sentence="We invited a lot of people, but very few came."
              :marks="['very few']"
            /><span class="translation">我們邀了很多人，可是來的人非常少。</span></span
          >
        </div>
        <div>
          <span class="term">too</span>
          <span
            ><NoteMark
              sentence="I tried to count the birds, but there were too many."
              :marks="['too many.']"
            /><span class="translation">我想數那些鳥，可是太多了。</span></span
          >
        </div>
        <div>
          <span class="term">so</span>
          <span
            ><NoteMark
              sentence="So many applied that the office closed the list early."
              :marks="['So many']"
            /><span class="translation">申請的人這麼多，辦公室提早截止了。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="the very few" mark="few">
      <NoteWords
        :size="22"
        :parts="[
          { t: '… for', kind: 'dim' },
          { t: 'the very few', role: '極少數人', kind: 'key' },
          { t: 'who had access to it.', role: '哪一小群人' },
        ]"
      />
      <p class="translation">……只有極少數用得到的人能用。</p>
    </NoteSlide>

    <NoteSlide title="too 前面用 far" mark="far">
      <NoteFix
        wrong="We needed helpers, but very too few came."
        right="We needed helpers, but far too few came."
        fix="far"
      />
    </NoteSlide>

    <NoteSlide title="不可數名詞用 little" mark="few">
      <NoteFix
        wrong="I wanted some water, but there was too few."
        right="I wanted some water, but there was too little."
        fix="little."
      />
    </NoteSlide>

    <NoteSlide title="動詞用複數">
      <NoteFix
        wrong="Too many was waiting outside the door."
        right="Too many were waiting outside the door."
        fix="were"
      />
    </NoteSlide>

    <NoteSlide title="too many + 名詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'There are', kind: 'dim' },
          { t: 'too many', kind: 'key' },
          { t: 'cars', role: '名詞' },
          { t: 'in the city centre.', kind: 'dim' },
        ]"
      />
      <p class="translation">市中心的車太多了。</p>
    </NoteSlide>

    <NoteSlide title="a few 和 very few">
      <div class="rows is-labeled">
        <div>
          <span class="term">a few</span>
          <span
            ><NoteMark sentence="A few of my friends came to the party." :marks="['A few']" /><span
              class="translation"
              >我有幾個朋友來參加派對。</span
            ></span
          >
        </div>
        <div>
          <span class="term">very few</span>
          <span
            ><NoteMark
              sentence="We invited a lot of people, but very few came."
              :marks="['very few']"
            /><span class="translation">我們邀了很多人，可是來的人非常少。</span></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
