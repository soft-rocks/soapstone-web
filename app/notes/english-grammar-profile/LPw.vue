<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-use-with-that-of, as slides, in the order of content.md. One point per slide: the title names it, the
// diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="that 加名詞加 of his，帶出說話的人的態度">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'I kept silent when I was introduced to', kind: 'dim' },
          { t: 'that new girlfriend', role: 'that + 形容詞 + 名詞' },
          { t: 'of his.', role: 'of + 所有格代名詞', kind: 'key' },
        ]"
      />
      <p class="translation">有人介紹我認識他那個新女朋友的時候，我一句話也沒說。</p>
    </NoteSlide>

    <NoteSlide title="that 加名詞加 of 加所有格代名詞，常帶出不耐煩" mark="of his.">
      <div class="rows is-labeled">
        <div>
          <span class="term">of theirs</span>
          <span
            ><NoteMark
              sentence="I'm tired of hearing that loud music of theirs."
              :marks="['that loud music of theirs.']"
            /><span class="translation">我聽他們那吵死人的音樂聽煩了。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide
      title="his girlfriend 只說出是誰，that girlfriend of his 還帶出態度"
      mark="that new girlfriend"
    >
      <div class="rows is-labeled">
        <div>
          <span class="term">中性</span>
          <span
            ><NoteMark sentence="I met his new girlfriend." :marks="['his new girlfriend.']" /><span
              class="translation"
              >我見了他的新女朋友。</span
            ></span
          >
        </div>
        <div>
          <span class="term">帶態度</span>
          <span
            ><NoteMark
              sentence="I met that new girlfriend of his."
              :marks="['that new girlfriend of his.']"
            /><span class="translation">我見了他那個新女朋友。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="加稱讚的形容詞，帶著親暱或驕傲" mark="of his.">
      <div class="rows is-labeled">
        <div>
          <span class="term">親暱</span>
          <span
            ><NoteMark
              sentence="Where's that clever nephew of mine?"
              :marks="['that clever nephew of mine?']"
            /><span class="translation">我那個聰明的姪子在哪裡？</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="of 後面用所有格代名詞 his，不用 him" mark="of his.">
      <NoteFix
        wrong="I can't stand that dog of him."
        right="I can't stand that dog of his."
        fix="his."
      />
    </NoteSlide>

    <NoteSlide title="that 和 his 不能一起放在名詞前面" mark="that new girlfriend">
      <NoteFix
        wrong="That his car is always dirty."
        right="That car of his is always dirty."
        fix="That car of his"
      />
    </NoteSlide>

    <NoteSlide title="of 後面用 yours，不用 your" mark="of his.">
      <NoteFix wrong="Move that bike of your." right="Move that bike of yours." fix="yours." />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
