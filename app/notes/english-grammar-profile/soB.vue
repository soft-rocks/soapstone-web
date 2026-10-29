<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// verbs-form-verb-pronoun-particle-1061, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="代名詞受詞放在動詞和小品詞中間" mark="it">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Think', role: '動詞', kind: 'key' },
          { t: 'it', role: '代名詞受詞', kind: 'key', ring: true },
          { t: 'over', role: '小品詞', kind: 'key' },
          { t: 'and tell me what you decide to do.', kind: 'dim' },
        ]"
      />
      <p class="translation">你仔細想一想，再告訴我你決定怎麼做。</p>
      <p class="remark"><code>think over</code> 的意思是仔細考慮。</p>
    </NoteSlide>

    <NoteSlide title="名詞受詞放在小品詞前後都可以，代名詞只能放在中間" mark="it">
      <div class="rows is-labeled">
        <div>
          <span class="term">代名詞</span>
          <span
            ><NoteMark
              sentence="I heard about the club, and I wanted to check it out."
              :marks="['it']"
            /><span class="translation">我聽說了那個社團，想去看看。</span></span
          >
        </div>
        <div>
          <span class="term">名詞在中間</span>
          <span
            ><NoteMark sentence="I want to check the club out." :marks="['the club']" /><span
              class="translation"
              >我想去看看那個社團。</span
            ></span
          >
        </div>
        <div>
          <span class="term">名詞在後面</span>
          <span
            ><NoteMark sentence="I want to check out the club." :marks="['the club']" /><span
              class="translation"
              >我想去看看那個社團。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="代名詞不放在小品詞後面" mark="it over">
      <NoteFix
        wrong="I like the jacket. Can I try on it?"
        right="I like the jacket. Can I try it on?"
        fix="it on"
      />
    </NoteSlide>

    <NoteSlide title="put off 要有受詞" mark="it">
      <NoteFix
        wrong="The meeting is on Friday, but we have to put off."
        right="The meeting is on Friday, but we have to put it off."
        fix="it"
      />
    </NoteSlide>

    <NoteSlide title="代名詞受詞用受格" mark="it">
      <NoteFix wrong="Please call she back later." right="Please call her back later." fix="her" />
    </NoteSlide>

    <NoteSlide title="仔細考慮是 think over，不是 think out" mark="over">
      <NoteFix
        wrong="Think it out and tell me your answer."
        right="Think it over and tell me your answer."
        fix="over"
      />
    </NoteSlide>

    <NoteSlide title="介系詞動詞和片語介系詞動詞的代名詞放在介系詞後面">
      <div class="rows is-labeled">
        <div>
          <span class="term">介系詞動詞</span>
          <span
            ><NoteMark sentence="I'll look for it in the dictionary." :marks="['for it']" /><span
              class="translation"
              >我會在字典裡找。</span
            ></span
          >
        </div>
        <div>
          <span class="term">片語介系詞動詞</span>
          <span
            ><NoteMark sentence="I can't put up with it." :marks="['with it']" /><span
              class="translation"
              >我受不了了。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
