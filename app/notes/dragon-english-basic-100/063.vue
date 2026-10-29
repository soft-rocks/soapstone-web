<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 063, as slides, in the order of notes/dragon-english-basic-100/063.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide
      title="it doesn't follow that 表示從前面的事推不出後面的事"
      :mark="['Just because', 'follow that']"
    >
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Just because', role: '連接詞', kind: 'key' },
          { t: 'he is quiet,', role: '被當成理由的事實' },
          { t: 'it doesn\'t follow that', role: '推不出來', kind: 'key' },
          { t: 'he is unhappy.', role: '推不出來的事' },
        ]"
      />
      <p class="translation">他很安靜，不代表他不開心。</p>
    </NoteSlide>

    <NoteSlide title="it doesn't always follow that 表示不一定推得出來" mark="always">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Just because young people today read less than they used to,', kind: 'dim' },
          { t: 'it doesn’t', kind: 'dim' },
          { t: 'always', role: '不一定', kind: 'key', ring: true },
          { t: 'follow that', kind: 'dim' },
          { t: 'they are less eager to learn.', kind: 'dim' },
        ]"
      />
      <p class="translation">{{ note.translation }}</p>
    </NoteSlide>

    <NoteSlide title="used to 表示以前的習慣，用來跟現在比較" mark="than they used to">
      <div class="rows is-labeled">
        <div>
          <span class="term">less</span>
          <span
            ><NoteMark
              sentence="My father works less than he used to."
              :marks="['less than he used to']"
            /><span class="translation">我爸爸工作得比以前少。</span></span
          >
        </div>
        <div>
          <span class="term">more</span>
          <span
            ><NoteMark
              sentence="I eat more vegetables than I used to."
              :marks="['more', 'than I used to']"
            /><span class="translation">我吃的蔬菜比以前多。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="比較句裡，used to 後面的動詞常省略" mark="used to">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'read', role: '動詞', kind: 'dim' },
          { t: 'less than', role: '比較' },
          { t: 'they', role: '主詞' },
          { t: 'used to', role: '以前的習慣', kind: 'key' },
          { t: 'read', role: '省略的動詞', kind: 'gone' },
        ]"
      />
    </NoteSlide>

    <NoteSlide title="很想做一個動作用 eager to，很想要一樣東西用 eager for" mark="eager to learn">
      <div class="rows is-labeled">
        <div>
          <span class="term">to + 動詞原形</span>
          <span
            ><NoteMark sentence="She is eager to study abroad." :marks="['eager to study']" /><span
              class="translation"
              >她很想出國讀書。</span
            ></span
          >
        </div>
        <div>
          <span class="term">for + 名詞</span>
          <span
            ><NoteMark
              sentence="The kids were eager for summer vacation."
              :marks="['eager for summer vacation']"
            /><span class="translation">孩子們很期待暑假。</span></span
          >
        </div>
      </div>
      <p class="remark"><code>less eager to learn</code> 是比較不想學。</p>
    </NoteSlide>
  </NoteDeck>
</template>
