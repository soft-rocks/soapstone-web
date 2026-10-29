<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-form-affirmative-784, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + 動詞的過去式" mark="lived">
      <div class="rows is-labeled">
        <div>
          <span class="term">規則動詞</span>
          <span>加 -&#x2060;ed，像 lived、played、watched。</span>
        </div>
        <div>
          <span class="term">不規則動詞</span>
          <span>有自己的過去式，像 went、met、saw、had。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="加上過去的時間">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="Jo and I are very close. I met her about ten years ago."
              :marks="['ago.']"
            /><span class="translation">我和喬很親。我大約十年前認識她。</span></span
          >
        </div>
      </div>
      <p class="remark">過去式常和 yesterday、last week、ago 這類時間詞一起用。</p>
    </NoteSlide>
    <NoteSlide title="go 的過去式是 went" mark="went">
      <NoteFix
        wrong="We goed to the beach with our cousins yesterday."
        right="We went to the beach with our cousins yesterday."
        :fix="['went']"
      />
    </NoteSlide>
    <NoteSlide title="過去式不加 -s">
      <NoteFix
        wrong="My grandfather liveds in a village near the sea."
        right="My grandfather lived in a village near the sea."
        :fix="['lived']"
      />
    </NoteSlide>
    <NoteSlide title="說過去的事用過去式">
      <NoteFix
        wrong="Last summer I visit my aunt in Scotland."
        right="Last summer I visited my aunt in Scotland."
        :fix="['visited']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
