<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 060, as slides, in the order of notes/dragon-english-basic-100/060.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide title="alike 放在 be 或 look 後面，表示相像" mark="are alike">
      <div class="rows is-labeled">
        <div>
          <span class="term">be</span>
          <span
            ><NoteMark sentence="My sister and I are alike." :marks="['are alike']" /><span
              class="translation"
              >我和我姊姊很像。</span
            ></span
          >
        </div>
        <div>
          <span class="term">look</span>
          <span
            ><NoteMark
              sentence="The twins look alike, but they act very differently."
              :marks="['look alike']"
            /><span class="translation">那對雙胞胎長得很像，但個性很不一樣。</span></span
          >
        </div>
      </div>
      <p class="remark"><code>alike</code> 是形容詞。主詞是兩個以上的人或東西。</p>
    </NoteSlide>

    <NoteSlide title="in that 子句說明前面那句話在哪一方面成立" mark="in that">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Doctors and teachers are alike', role: '主要子句', kind: 'dim' },
          { t: 'in that', role: '連接詞', kind: 'key' },
          {
            t: 'both of them deal not with things but with people.',
            role: '在哪一方面成立',
          },
        ]"
      />
      <p class="translation">{{ note.translation }}</p>
    </NoteSlide>

    <NoteSlide title="not A but B 表示不是 A，而是 B" :mark="['not', 'but']">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'deal', role: '動詞', kind: 'dim' },
          { t: 'not', kind: 'key' },
          { t: 'with things', role: 'A' },
          { t: 'but', role: '連接詞', kind: 'key' },
          { t: 'with people.', role: 'B' },
        ]"
      />
      <p class="remark">A 和 B 都是 <code>with</code> 開頭的介系詞片語。</p>
    </NoteSlide>

    <NoteSlide
      title="not A but B 的 A 和 B 用同一種詞類或結構"
      :mark="['with things', 'with people']"
    >
      <div class="rows is-labeled">
        <div>
          <span class="term">名詞</span>
          <span
            ><NoteMark
              sentence="He is not my brother but my cousin."
              :marks="['my brother', 'my cousin']"
            /><span class="translation">他不是我哥哥，而是我表哥。</span></span
          >
        </div>
        <div>
          <span class="term">介系詞片語</span>
          <span
            ><NoteMark
              sentence="I went there not by bus but by train."
              :marks="['by bus', 'by train']"
            /><span class="translation">我去那裡不是搭公車，而是搭火車。</span></span
          >
        </div>
        <div>
          <span class="term">to 不定詞</span>
          <span
            ><NoteMark
              sentence="She went there not to shop but to see her friend."
              :marks="['to shop', 'to see her friend']"
            /><span class="translation">她去那裡不是為了買東西，而是為了見她朋友。</span></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>
</template>
