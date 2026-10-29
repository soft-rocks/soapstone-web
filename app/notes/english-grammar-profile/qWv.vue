<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// negation-form-use-not-a-noun-emphasis, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="Not a single 加單數名詞放在句首，表示連一個都沒有">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Not a single noise', role: 'Not a single + 單數名詞', kind: 'key' },
          { t: 'could be heard', role: '被動' },
          { t: 'from inside any of the rooms.', role: '地點', kind: 'dim' },
        ]"
      />
      <p class="translation">每個房間裡都聽不到一點聲音。</p>
    </NoteSlide>

    <NoteSlide title="single 可以省略，加上語氣更強" mark="single">
      <div class="rows is-labeled">
        <div>
          <span class="term">Not a single</span>
          <span
            ><NoteMark sentence="Not a single guest arrived on time." :marks="['single']" /><span
              class="translation"
              >沒有一個客人準時到。</span
            ></span
          >
        </div>
        <div>
          <span class="term">Not a</span>
          <span
            ><NoteMark sentence="Not a word was said." :marks="['Not a']" /><span
              class="translation"
              >一句話都沒有人說。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="後面常接被動，注意力放在沒有東西上" mark="could be heard">
      <NoteWords
        :size="32"
        :parts="[
          { t: 'Not a word', role: 'Not a + 名詞' },
          { t: 'was said.', role: '被動', kind: 'key' },
        ]"
      />
      <p class="translation">一句話都沒有人說。</p>
    </NoteSlide>

    <NoteSlide title="a single 當受詞時，not 放在動詞上" mark="Not a single">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'We', role: '主詞' },
          { t: 'didn\'t catch', role: '否定的動詞', kind: 'key' },
          { t: 'a single fish', role: '受詞', kind: 'key' },
          { t: 'all day.', kind: 'dim' },
        ]"
      />
      <p class="translation">我們一整天連一條魚都沒釣到。</p>
    </NoteSlide>

    <NoteSlide title="主詞是單數名詞，動詞用單數" mark="noise">
      <NoteFix
        wrong="Not a single parent were at the meeting."
        right="Not a single parent was at the meeting."
        fix="was"
      />
    </NoteSlide>

    <NoteSlide title="a 後面接單數名詞" mark="noise">
      <NoteFix
        wrong="Not a single students passed."
        right="Not a single student passed."
        fix="student"
      />
    </NoteSlide>

    <NoteSlide title="這個句型用 not，不用 no" mark="Not">
      <NoteFix
        wrong="No a single cloud was in the sky."
        right="Not a single cloud was in the sky."
        fix="Not"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
