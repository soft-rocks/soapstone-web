<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 089, as slides, in the order of notes/dragon-english-basic-100/089.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide title="of 加動詞-ing 放在名詞後面，說明名詞的內容" mark="dream of becoming">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'his dream', role: '名詞', kind: 'key' },
          { t: 'of', role: '介系詞' },
          { t: 'becoming an astronaut', role: '動詞-ing', kind: 'key' },
        ]"
      />
      <p class="remark">Tom 的夢想是當太空人。</p>
    </NoteSlide>

    <NoteSlide title="idea、chance、habit 也常接 of 加動詞-ing" mark="dream of becoming">
      <div class="rows is-labeled">
        <div>
          <span class="term">idea</span>
          <span
            ><NoteMark
              sentence="I like the idea of living in the country."
              :marks="['idea of living']"
            /><span class="translation">我喜歡住在鄉下這個主意。</span></span
          >
        </div>
        <div>
          <span class="term">chance</span>
          <span
            ><NoteMark
              sentence="Is there any chance of winning the game?"
              :marks="['chance of winning']"
            /><span class="translation">有沒有贏得比賽的機會？</span></span
          >
        </div>
        <div>
          <span class="term">habit</span>
          <span
            ><NoteMark
              sentence="She has a habit of biting her nails."
              :marks="['habit of biting']"
            /><span class="translation">她有咬指甲的習慣。</span></span
          >
        </div>
      </div>
      <p class="remark"><code>dream</code>、<code>way</code>、<code>hope</code> 也這樣用。</p>
    </NoteSlide>

    <NoteSlide title="realize 接夢想或目標時，意思是實現" mark="realized his dream">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'She', kind: 'dim' },
          { t: 'realized', role: '實現', kind: 'key' },
          { t: 'her dream', role: '夢想' },
          { t: 'of opening a café.', kind: 'dim' },
        ]"
      />
      <p class="translation">她實現了開咖啡店的夢想。</p>
    </NoteSlide>

    <NoteSlide title="realize 接 that 子句時，意思是意識到、發現" mark="realized">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Tom suddenly', kind: 'dim' },
          { t: 'realized', role: '意識到', kind: 'key' },
          { t: 'that', role: '可以省略' },
          { t: 'he had forgotten his wallet.', role: 'that 子句' },
        ]"
      />
      <p class="translation">Tom 突然發現自己忘了帶錢包。</p>
    </NoteSlide>

    <NoteSlide
      title="at the expense of 表示得到一個結果，但是犧牲了另一個東西"
      mark="at the expense of"
    >
      <NoteWords
        :size="24"
        :parts="[
          { t: 'He worked day and night', role: '得到的結果' },
          { t: 'at the expense of', kind: 'key' },
          { t: 'his health.', role: '犧牲的東西', kind: 'key' },
        ]"
      />
      <p class="translation">他日夜工作，犧牲了自己的健康。</p>
    </NoteSlide>

    <NoteSlide title="at the expense of 常放在句尾，前面可以加 but" mark="but at the expense of">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Tom finally realized his dream …,', role: '得到的結果', kind: 'dim' },
          { t: 'but', role: '連接詞' },
          { t: 'at the expense of', kind: 'key' },
          { t: 'many other things.', role: '犧牲的東西' },
        ]"
      />
      <p class="translation">{{ note.translation }}</p>
    </NoteSlide>
  </NoteDeck>
</template>
