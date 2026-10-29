<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-form-affirmative-790, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + 動詞的過去式" mark="gave up.">
      <div class="rows is-labeled">
        <div>
          <span class="term">規則動詞</span>
          <span>加 -&#x2060;ed，像 convinced、faced、filmed、decided。</span>
        </div>
        <div>
          <span class="term">不規則動詞</span>
          <span>像 gave、chose、began、taught。</span>
        </div>
        <div>
          <span class="term">片語動詞</span>
          <span>只改動詞的部分，像 gave up、went out。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="說一連串的動作">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="It was a busy Saturday. I got up early, cleaned the house and visited my grandmother."
              :marks="['got up', 'cleaned', 'visited']"
            /><span class="translation"
              >那是個忙碌的星期六。我很早起床，打掃家裡，然後去看我奶奶。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">過去式常用來說一連串的動作。</p>
    </NoteSlide>
    <NoteSlide title="片語動詞只改動詞的部分">
      <NoteFix
        wrong="My dad gave upped his job at the bank."
        right="My dad gave up his job at the bank."
        :fix="['up']"
      />
    </NoteSlide>
    <NoteSlide title="choose 的過去式是 chose">
      <NoteFix
        wrong="My sister choosed a blue dress for the wedding."
        right="My sister chose a blue dress for the wedding."
        :fix="['chose']"
      />
    </NoteSlide>
    <NoteSlide title="teach 的過去式是 taught">
      <NoteFix
        wrong="My grandfather teached me to play chess."
        right="My grandfather taught me to play chess."
        :fix="['taught']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
