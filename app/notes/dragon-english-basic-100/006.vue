<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 006, as slides, in the order of notes/dragon-english-basic-100/006.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide title="名詞後面的動詞-ing 片語修飾這個名詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'An elderly woman', role: '名詞', kind: 'key' },
          { t: 'sitting next to me on the train', role: '動詞-ing 片語', kind: 'key' },
          { t: 'asked me where I was going.', kind: 'dim' },
        ]"
      />
      <p class="translation">{{ note.translation }}</p>
      <p class="remark">片語說明這個人正在做什麼。</p>
    </NoteSlide>

    <NoteSlide title="動詞-ing 片語等於省略了 who 和 be 動詞" mark="sitting">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'An elderly woman', role: '名詞' },
          { t: 'who was', role: '省略', kind: 'gone' },
          { t: 'sitting', role: '動詞-ing', kind: 'key' },
          { t: 'next to me on the train', kind: 'dim' },
        ]"
      />
    </NoteSlide>

    <NoteSlide title="ask 後面先接人，再接間接問句" mark="asked me where I was going">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'She', kind: 'dim' },
          { t: 'asked', role: '動詞', kind: 'key' },
          { t: 'me', role: '人' },
          { t: 'what time it was.', role: '間接問句', kind: 'key' },
        ]"
      />
      <p class="translation">她問我現在幾點。</p>
    </NoteSlide>

    <NoteSlide title="間接問句用直述句的語序，主詞在動詞前面" mark="where I was going">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'asked me', kind: 'dim' },
          { t: 'where', role: '疑問詞' },
          { t: 'I', role: '主詞', kind: 'key' },
          { t: 'was going.', role: '動詞', kind: 'key' },
        ]"
      />
    </NoteSlide>

    <NoteSlide title="沒有疑問詞的問題，用 if 或 whether 帶出間接問句" mark="where">
      <div class="rows is-labeled">
        <div>
          <span class="term">if</span>
          <span
            ><NoteMark
              sentence="The teacher asked us if we had any questions."
              :marks="['if']"
            /><span class="translation">老師問我們有沒有問題。</span></span
          >
        </div>
        <div>
          <span class="term">whether</span>
          <span
            ><NoteMark
              sentence="I asked Ann whether she wanted to come with us."
              :marks="['whether']"
            /><span class="translation">我問 Ann 她想不想跟我們一起來。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="主要動詞是過去式，間接問句的動詞也改成過去式" :mark="['asked', 'was going']">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'An elderly woman sitting next to me on the train', kind: 'dim' },
          { t: 'asked', role: '過去式', kind: 'key' },
          { t: 'me where I', kind: 'dim' },
          { t: 'was going.', role: '過去式', kind: 'key' },
        ]"
      />
      <p class="remark">老太太當時直接問的話是 <code>Where are you going?</code></p>
    </NoteSlide>

    <NoteSlide title="knew、wondered 後面的間接問句也用過去式" mark="was going">
      <div class="rows is-labeled">
        <div>
          <span class="term">know</span>
          <span
            ><NoteMark
              sentence="Nobody knew what time the store closed."
              :marks="['knew', 'closed']"
            /><span class="translation">沒有人知道那家店幾點關門。</span></span
          >
        </div>
        <div>
          <span class="term">wonder</span>
          <span
            ><NoteMark
              sentence="I wondered why the bus was so late."
              :marks="['wondered', 'was']"
            /><span class="translation">我很納悶公車怎麼這麼晚。</span></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>
</template>
