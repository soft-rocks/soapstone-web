<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-form-with-adverbs-767, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + had + 副詞 + 過去分詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'had', kind: 'key', ring: true },
          { t: 'always', role: '副詞' },
          { t: 'wanted', role: '過去分詞' },
          {
            t: 'to visit European cities, and Paris was one of the easiest to get to.',
            kind: 'dim',
          },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="never、ever、just">
      <div class="rows is-labeled">
        <div>
          <span class="term">never</span>
          <span>從來沒有。</span>
        </div>
        <div>
          <span class="term">ever</span>
          <span>曾經。常用在最高級和問句。</span>
        </div>
        <div>
          <span class="term">just</span>
          <span>剛剛。</span>
        </div>
        <div>
          <span class="term">always</span>
          <span>一直。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="the + 最高級 + I had ever + 過去分詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="It was the most beautiful one I had ever seen." :marks="[]" /><span
              class="translation"
              >那是我看過最美的一個。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">說過去某個時候看過或做過最好的東西。</p>
    </NoteSlide>
    <NoteSlide title="had just + 過去分詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="I had just arrived home when I saw the letter."
              :marks="['had just']"
            /><span class="translation">我剛到家，就看到那封信。</span></span
          >
        </div>
      </div>
      <p class="remark">had just 說主要的事發生之前，剛剛才做完的事。</p>
    </NoteSlide>
    <NoteSlide title="說過去某時之前的經驗，用 had never 加過去分詞">
      <NoteFix
        wrong="Before that winter, I did never see snow."
        right="Before that winter, I had never seen snow."
        :fix="['had', 'seen']"
      />
    </NoteSlide>
    <NoteSlide title="had 後面接過去分詞 seen" mark="had">
      <NoteFix
        wrong="It was the best film I had ever saw."
        right="It was the best film I had ever seen."
        :fix="['seen.']"
      />
    </NoteSlide>
    <NoteSlide title="already 只用一次">
      <NoteFix
        wrong="They had already left already."
        right="They had already left."
        :fix="['left.']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
