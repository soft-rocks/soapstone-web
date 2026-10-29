<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-form-negative-787, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + didn't + 原形動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I was surprised because', kind: 'dim' },
          { t: 'the heating', role: '主詞' },
          { t: 'didn\'t', kind: 'key', ring: true },
          { t: 'work.', role: '原形動詞' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="didn't、原形動詞" mark="didn't">
      <div class="rows is-labeled">
        <div>
          <span class="term">didn't</span>
          <span>did not 的縮寫。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>didn't 後面的動詞用原形，不用過去式。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="didn't 後面用原形動詞" mark="didn't">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="I bought these boots at the market. They didn't cost much."
              :marks="['didn\'t']"
            /><span class="translation">我在市場買了這雙靴子。它們不貴。</span></span
          >
        </div>
      </div>
      <p class="remark">didn't 已經表示過去，後面的動詞用原形。</p>
    </NoteSlide>
    <NoteSlide title="說對方沒做到">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="You said you would help me move. You didn't come."
              :marks="['didn\'t']"
            /><span class="translation">你說你會幫我搬家。你沒有來。</span></span
          >
        </div>
      </div>
      <p class="remark">You didn't 常用來說對方沒做到答應的事。</p>
    </NoteSlide>
    <NoteSlide title="didn't 後面接原形動詞" mark="didn't">
      <NoteFix
        wrong="The kettle in our room didn't worked."
        right="The kettle in our room didn't work."
        :fix="['work.']"
      />
    </NoteSlide>
    <NoteSlide title="一般動詞的否定用 didn't" mark="didn't">
      <NoteFix
        wrong="I wasn't tell my parents about the accident."
        right="I didn't tell my parents about the accident."
        :fix="['didn\'t']"
      />
    </NoteSlide>
    <NoteSlide title="否定要用 didn't" mark="didn't">
      <NoteFix
        wrong="We not see the sea from our window."
        right="We didn't see the sea from our window."
        :fix="['didn\'t']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
