<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 022, as slides, in the order of notes/dragon-english-basic-100/022.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide
      title="兩件事都發生在過去時，when 子句和主要子句都用過去式"
      :mark="['got', 'couldn’t']"
    >
      <NoteWords
        :size="24"
        :parts="[
          { t: 'When', role: '連接詞', kind: 'key' },
          { t: 'I got on the train this morning,', role: 'when 子句\n過去式' },
          { t: 'I couldn’t find an empty seat.', role: '主要子句\n過去式' },
        ]"
      />
      <p class="remark">原句是先上火車，然後找不到空位。</p>
    </NoteSlide>

    <NoteSlide
      title="主要子句可以是接著發生的動作，也可以是那個時候的狀態"
      mark="couldn’t find an empty seat"
    >
      <div class="rows is-labeled">
        <div>
          <span class="term">動作</span>
          <span
            ><NoteMark
              sentence="When the bell rang, the students stood up."
              :marks="['stood up']"
            /><span class="translation">鐘響的時候，學生們站了起來。</span></span
          >
        </div>
        <div>
          <span class="term">狀態</span>
          <span
            ><NoteMark
              sentence="When we got off the plane, it was very hot."
              :marks="['was very hot']"
            /><span class="translation">我們下飛機的時候天氣很熱。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="when 子句放在句首時後面加逗號，放在句尾時前面不加" mark="When">
      <div class="rows is-labeled">
        <div>
          <span class="term">句首</span>
          <span
            ><NoteMark sentence="When I got home, I took a hot bath." :marks="['When']" /><span
              class="translation"
              >我一到家就洗了個熱水澡。</span
            ></span
          >
        </div>
        <div>
          <span class="term">句尾</span>
          <span
            ><NoteMark sentence="Tom was surprised when he saw the price." :marks="['when']" /><span
              class="translation"
              >Tom 看到價格的時候很驚訝。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="could 是 can 的過去式，表示過去能做到某件事" mark="couldn’t">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'could', role: 'can 的過去式', kind: 'key' },
          { t: 'swim', role: '動詞原形', kind: 'key' },
          { t: 'when I was five.', kind: 'dim' },
        ]"
      />
      <p class="translation">我五歲就會游泳了。</p>
    </NoteSlide>

    <NoteSlide title="couldn’t 表示過去做不到，後面接動詞原形" mark="couldn’t find">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'couldn’t', role: 'could + not', kind: 'key' },
          { t: 'find', role: '動詞原形', kind: 'key' },
          { t: 'an empty seat.', role: '受詞' },
        ]"
      />
    </NoteSlide>

    <NoteSlide title="this 加時間名詞時不加 in、on、at" mark="this morning">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'When I got on the train', kind: 'dim' },
          { t: 'in', role: '不加介系詞', kind: 'gone' },
          { t: 'this morning,', role: 'this + 時間名詞', kind: 'key' },
        ]"
      />
    </NoteSlide>

    <NoteSlide title="last、next、every 加時間名詞時也不加介系詞" mark="this morning">
      <div class="rows is-labeled">
        <div>
          <span class="term">last</span>
          <span
            ><NoteMark sentence="I saw Tom last week." :marks="['last week']" /><span
              class="translation"
              >我上星期見到了 Tom。</span
            ></span
          >
        </div>
        <div>
          <span class="term">next</span>
          <span
            ><NoteMark
              sentence="We are moving to a new apartment next month."
              :marks="['next month']"
            /><span class="translation">我們下個月要搬到新公寓。</span></span
          >
        </div>
        <div>
          <span class="term">every</span>
          <span
            ><NoteMark
              sentence="We go to the gym every Saturday."
              :marks="['every Saturday']"
            /><span class="translation">我們每個星期六去健身房。</span></span
          >
        </div>
      </div>
      <p class="remark"><code>yesterday</code>、<code>tomorrow</code> 前面也不加介系詞。</p>
    </NoteSlide>
  </NoteDeck>
</template>
