<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-use-itself-for-emphasis, as slides, in the order of content.md. One point per slide: the title names it, the
// diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="itself 緊接在單數名詞後面，強調是這個東西本身">
      <NoteWords
        :size="34"
        :parts="[
          { t: 'The building', role: '單數名詞' },
          { t: 'itself', role: '本身', kind: 'key' },
          { t: 'looks splendid.', role: '動詞 + 補語' },
        ]"
      />
      <p class="translation">這棟建築本身看起來很壯觀。</p>
    </NoteSlide>

    <NoteSlide title="名詞加 itself 可以當主詞、受詞，或放在介系詞後面" mark="itself">
      <div class="rows is-labeled">
        <div>
          <span class="term">主詞</span>
          <span
            ><NoteMark
              sentence="The hotel was hard to find, but the room itself was lovely."
              :marks="['the room itself']"
            /><span class="translation">那家飯店很難找，可是房間本身很漂亮。</span></span
          >
        </div>
        <div>
          <span class="term">受詞</span>
          <span
            ><NoteMark
              sentence="She liked the garden more than the house itself."
              :marks="['the house itself.']"
            /><span class="translation">比起房子本身，她更喜歡花園。</span></span
          >
        </div>
        <div>
          <span class="term">介系詞後面</span>
          <span
            ><NoteMark
              sentence="I paid more for the frame than for the painting itself."
              :marks="['the painting itself.']"
            /><span class="translation">我買畫框花的錢比買畫本身還多。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="強調的 itself 拿掉後，句子還是完整的" mark="itself">
      <div class="rows is-labeled">
        <div>
          <span class="term">強調</span>
          <span
            ><NoteMark sentence="The building itself looks splendid." :marks="['itself']" /><span
              class="translation"
              >拿掉 itself，句子還是完整的。</span
            ></span
          >
        </div>
        <div>
          <span class="term">受詞</span>
          <span
            ><NoteMark sentence="The cat washed itself." :marks="['itself.']" /><span
              class="translation"
              >itself 是 washed 的受詞，不能拿掉。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="複數名詞用 themselves" mark="itself">
      <NoteFix
        wrong="The rooms itself were clean."
        right="The rooms themselves were clean."
        fix="themselves"
      />
    </NoteSlide>

    <NoteSlide title="itself 緊接在名詞後面" mark="The building itself">
      <NoteFix
        wrong="Itself the town is small."
        right="The town itself is small."
        fix="The town itself"
      />
    </NoteSlide>

    <NoteSlide title="itself 是一個字，中間不空格" mark="itself">
      <NoteFix
        wrong="The museum it self is free."
        right="The museum itself is free."
        fix="itself"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
