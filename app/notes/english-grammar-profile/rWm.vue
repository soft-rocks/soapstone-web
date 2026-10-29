<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-possibility-in-the-past, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + might have + 過去分詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I thought that', kind: 'dim' },
          { t: 'a burglar', role: '主詞' },
          { t: 'might have', kind: 'key', ring: true },
          { t: 'broken', role: '過去分詞' },
          { t: 'into our house.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="might have、過去分詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">might have</span>
          <span>過去可能。</span>
        </div>
        <div>
          <span class="term">過去分詞</span>
          <span>過去可能發生的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="說可能的原因">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="Many things might have led to these changes."
              :marks="['might have led to']"
            /><span class="translation">很多原因可能導致了這些改變。</span></span
          >
        </div>
      </div>
      <p class="remark">寫作常用 might have led to 或 might have caused 說可能的原因。</p>
    </NoteSlide>
    <NoteSlide title="說當時的猜想" mark="might have">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="I thought I might have lost my keys."
              :marks="['might have', 'I thought']"
            /><span class="translation">我以為我可能把鑰匙弄丟了。</span></span
          >
        </div>
      </div>
      <p class="remark">I thought 加 might have，說過去某個時候的猜想。後來可能發現猜錯了。</p>
    </NoteSlide>
    <NoteSlide title="have 後面接過去分詞" mark="have">
      <NoteFix
        wrong="Someone might have break the window."
        right="Someone might have broken the window."
        :fix="['broken']"
      />
    </NoteSlide>
    <NoteSlide title="might 後面接原形 have" mark="might">
      <NoteFix
        wrong="The storm might has caused the damage."
        right="The storm might have caused the damage."
        :fix="['have']"
      />
    </NoteSlide>
    <NoteSlide title="lead 的過去分詞是 led">
      <NoteFix
        wrong="Many things might have leaded to this."
        right="Many things might have led to this."
        :fix="['led']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
