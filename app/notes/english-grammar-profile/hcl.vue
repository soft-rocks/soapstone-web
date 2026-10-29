<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-with-adverbs-504, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + may + 副詞 + 原形動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Children living in cities', role: '主詞' },
          { t: 'may', kind: 'key', ring: true },
          { t: 'never', role: '副詞' },
          { t: 'get', role: '原形動詞' },
          { t: 'the chance to come near any animals at all.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="may even、may only、may already">
      <div class="rows is-labeled">
        <div>
          <span class="term">may even</span>
          <span>甚至可能。</span>
        </div>
        <div>
          <span class="term">may only</span>
          <span>可能只。</span>
        </div>
        <div>
          <span class="term">may already</span>
          <span>可能已經。常接 have 加過去分詞。</span>
        </div>
        <div>
          <span class="term">may never</span>
          <span>可能永遠不。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="副詞的位置" mark="may">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="She may already be at the station." :marks="['may', 'be']" /><span
              class="translation"
              >她可能已經在車站了。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">副詞放在 may 後面。動詞是 be 的時候，副詞也放在 may 和 be 中間。</p>
    </NoteSlide>
    <NoteSlide title="may just">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="If we run, we may just catch the bus."
              :marks="['may just']"
            /><span class="translation">如果我們用跑的，說不定還趕得上公車。</span></span
          >
        </div>
      </div>
      <p class="remark">may just 說一個不太大、可是有希望的可能。</p>
    </NoteSlide>
    <NoteSlide title="even 放在 may 和原形動詞中間" mark="may">
      <NoteFix
        wrong="You may find even new words."
        right="You may even find new words."
        :fix="['even', 'new']"
      />
    </NoteSlide>
    <NoteSlide title="副詞後面直接接原形動詞">
      <NoteFix
        wrong="They may never to see the sea."
        right="They may never see the sea."
        :fix="['see']"
      />
    </NoteSlide>
    <NoteSlide title="說已經發生，要用 have 加過去分詞">
      <NoteFix wrong="He may already left." right="He may already have left." :fix="['have']" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
