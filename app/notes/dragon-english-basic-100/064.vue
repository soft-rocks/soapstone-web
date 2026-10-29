<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 064, as slides, in the order of notes/dragon-english-basic-100/064.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide title="句首的 frankly speaking 表示說話的人用什麼態度說話" mark="Frankly speaking">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Frankly speaking,', role: '說話的態度', kind: 'key' },
          {
            t: 'the entrance exams I took yesterday were far more difficult than I had expected.',
            role: '主要子句',
            kind: 'dim',
          },
        ]"
      />
      <p class="translation">{{ note.translation }}</p>
    </NoteSlide>

    <NoteSlide title="speaking 的主詞是說話的人，不一定是子句的主詞" mark="speaking">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Generally speaking,', role: '主詞是說話的人', kind: 'key' },
          { t: 'Japanese trains', role: '子句的主詞' },
          { t: 'are on time.', kind: 'dim' },
        ]"
      />
      <p class="translation">一般來說，日本的火車很準時。</p>
    </NoteSlide>

    <NoteSlide title="常見的 speaking 片語" mark="Frankly speaking">
      <div class="rows">
        <div>
          <span class="term"><b>Frankly speaking</b></span
          ><span class="gloss">坦白說</span>
        </div>
        <div>
          <span class="term"><b>Generally speaking</b></span
          ><span class="gloss">一般來說</span>
        </div>
        <div>
          <span class="term"><b>Honestly speaking</b></span
          ><span class="gloss">老實說</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="far 放在比較級前面表示差很多，意思跟 much 一樣" mark="far more difficult">
      <div class="rows is-labeled">
        <div>
          <span class="term">far</span>
          <span
            ><NoteMark sentence="This suitcase is far heavier than mine." :marks="['far']" /><span
              class="translation"
              >這個行李箱比我的重很多。</span
            ></span
          >
        </div>
        <div>
          <span class="term">much</span>
          <span
            ><NoteMark sentence="My sister is much taller than me." :marks="['much']" /><span
              class="translation"
              >我姊姊比我高很多。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="預料發生在結果之前，所以 than 後面用過去完成式" mark="had expected">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'were far more difficult', role: '結果（過去式）', kind: 'dim' },
          { t: 'than', role: '連接詞' },
          { t: 'I', role: '主詞' },
          { t: 'had expected.', role: '過去完成式', kind: 'key', ring: true },
        ]"
      />
      <p class="remark">意思是比我原本預料的更難。</p>
    </NoteSlide>

    <NoteSlide title="口語也常用過去式，說成 than I expected 或 than I thought" mark="had expected">
      <div class="rows is-labeled">
        <div>
          <span class="term">過去完成式</span>
          <span
            ><NoteMark
              sentence="The trip was more expensive than we had expected."
              :marks="['had expected']"
            /><span class="translation">這趟旅行比我們原本預料的還貴。</span></span
          >
        </div>
        <div>
          <span class="term">過去式</span>
          <span
            ><NoteMark sentence="The soup was hotter than I thought." :marks="['thought']" /><span
              class="translation"
              >湯比我想的還燙。</span
            ></span
          >
        </div>
        <div>
          <span class="term">過去式</span>
          <span
            ><NoteMark
              sentence="The new teacher is kinder than I expected."
              :marks="['expected']"
            /><span class="translation">新老師比我預料的親切。</span></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>
</template>
