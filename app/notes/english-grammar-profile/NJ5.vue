<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// verbs-form-verb-adverb-preposition, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="副詞可以放在動詞和介系詞中間" mark="carefully">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'I hope you will', kind: 'dim' },
          { t: 'look', role: '動詞', kind: 'key' },
          { t: 'carefully', role: '副詞', kind: 'key', ring: true },
          { t: 'at', role: '介系詞', kind: 'key' },
          { t: 'the enclosed papers.', role: '受詞' },
        ]"
      />
      <p class="translation">希望您能仔細看看隨信附上的文件。</p>
      <p class="remark">副詞說明動作怎麼做。</p>
    </NoteSlide>

    <NoteSlide title="副詞也可以放在受詞後面或動詞前面" mark="carefully">
      <div class="rows is-labeled">
        <div>
          <span class="term">動詞和介系詞中間</span>
          <span
            ><NoteMark
              sentence="Please listen carefully to the instructions."
              :marks="['carefully']"
            /><span class="translation">請仔細聽說明。</span></span
          >
        </div>
        <div>
          <span class="term">受詞後面</span>
          <span
            ><NoteMark
              sentence="Please listen to the instructions carefully."
              :marks="['carefully']"
            /><span class="translation">請把說明仔細聽清楚。</span></span
          >
        </div>
        <div>
          <span class="term">動詞前面</span>
          <span
            ><NoteMark sentence="She quickly looked at her phone." :marks="['quickly']" /><span
              class="translation"
              >她很快看了一下手機。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="受詞很長時，副詞常放在動詞和介系詞中間" mark="the enclosed papers">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'We need to', kind: 'dim' },
          { t: 'deal properly with', role: '動詞 + 副詞 + 介系詞', kind: 'key' },
          { t: 'the complaints from last month\'s customers.', role: '受詞' },
        ]"
      />
      <p class="translation">我們得好好處理上個月客人的投訴。</p>
    </NoteSlide>

    <NoteSlide title="副詞不放在介系詞和受詞中間" mark="carefully at">
      <NoteFix
        wrong="Please look at carefully the map."
        right="Please look carefully at the map."
        fix="carefully at"
      />
    </NoteSlide>

    <NoteSlide title="說明動作怎麼做，用副詞，不用形容詞" mark="carefully">
      <NoteFix
        wrong="You should think serious about the offer."
        right="You should think seriously about the offer."
        fix="seriously"
      />
    </NoteSlide>

    <NoteSlide title="介系詞放在受詞前面" mark="at">
      <NoteFix
        wrong="He listened closely the teacher to."
        right="He listened closely to the teacher."
        fix="to the teacher"
      />
    </NoteSlide>

    <NoteSlide title="片語動詞的副詞不放在動詞和小品詞中間，程度副詞常放在動詞前面">
      <div class="rows is-labeled">
        <div>
          <span class="term">片語動詞</span>
          <span
            ><NoteMark sentence="She turned the music down quickly." :marks="['quickly']" /><span
              class="translation"
              >她很快把音樂調小聲。</span
            ></span
          >
        </div>
        <div>
          <span class="term">程度副詞</span>
          <span
            ><NoteMark sentence="I completely agree with you." :marks="['completely']" /><span
              class="translation"
              >我完全同意你的看法。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
