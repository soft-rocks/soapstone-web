<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-commands-and-instructions, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + shall + 原形動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'We must insist that the agreement is binding and that', kind: 'dim' },
          { t: 'the contract', role: '主詞' },
          { t: 'shall', kind: 'key', ring: true },
          { t: 'be', role: '原形動詞' },
          { t: 'fulfilled.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="shall、shall be + 過去分詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">shall</span>
          <span>必須、應當。用在法律和正式的規定。</span>
        </div>
        <div>
          <span class="term">shall be + 過去分詞</span>
          <span>被動，說事情必須被怎麼處理。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="insist that … shall" mark="insist that">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="We insist that the money shall be returned."
              :marks="['insist that', 'shall']"
            /><span class="translation">我們堅持這筆錢必須退還。</span></span
          >
        </div>
      </div>
      <p class="remark">insist that 後面的子句常用 shall 加強語氣。</p>
    </NoteSlide>
    <NoteSlide title="shall be 後面接過去分詞" mark="shall be">
      <NoteFix
        wrong="The contract shall be fulfil."
        right="The contract shall be fulfilled."
        :fix="['fulfilled.']"
      />
    </NoteSlide>
    <NoteSlide title="shall 後面直接接原形動詞" mark="shall">
      <NoteFix
        wrong="The buyer shall to pay within thirty days."
        right="The buyer shall pay within thirty days."
        :fix="['pay']"
      />
    </NoteSlide>
    <NoteSlide title="shall 不加 -s" mark="shall">
      <NoteFix
        wrong="The company shalls provide training."
        right="The company shall provide training."
        :fix="['shall']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
