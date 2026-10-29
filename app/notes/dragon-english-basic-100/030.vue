<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 030, as slides, in the order of notes/dragon-english-basic-100/030.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide
      title="stay up 加時間，後面的動詞-ing 說明那段時間在做什麼"
      mark="preparing for the math lesson"
    >
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'stayed up', role: '動詞', kind: 'key' },
          { t: 'till four last night', role: '時間' },
          { t: 'preparing for the math lesson,', role: '動詞-ing', kind: 'key' },
        ]"
      />
      <p class="remark">動詞-ing 說明熬夜時在做什麼。</p>
    </NoteSlide>

    <NoteSlide title="spend 加時間，後面也接動詞-ing" mark="stayed up">
      <div class="rows is-labeled">
        <div>
          <span class="term">spend</span>
          <span
            ><NoteMark
              sentence="I spent the whole weekend cleaning my room."
              :marks="['spent', 'cleaning']"
            /><span class="translation">我整個週末都在打掃房間。</span></span
          >
        </div>
        <div>
          <span class="term">spend</span>
          <span
            ><NoteMark
              sentence="She spent two hours doing her homework."
              :marks="['spent', 'doing']"
            /><span class="translation">她花了兩個小時寫功課。</span></span
          >
        </div>
        <div>
          <span class="term">stay up</span>
          <span
            ><NoteMark
              sentence="We stayed up all night talking about our dreams."
              :marks="['stayed up', 'talking']"
            /><span class="translation">我們整晚沒睡，一直在聊我們的夢想。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="feel 是連綴動詞，後面的形容詞描述主詞的狀態" mark="feel very sleepy">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'feel', role: '連綴動詞', kind: 'key' },
          { t: 'very', kind: 'dim' },
          { t: 'sleepy.', role: '形容詞', kind: 'key' },
        ]"
      />
      <p class="remark">想睡是說話時的狀態，所以用現在式 <code>feel</code>。</p>
    </NoteSlide>

    <NoteSlide title="feel 後面的形容詞可以描述身體或心裡的狀態" mark="sleepy">
      <div class="rows is-labeled">
        <div>
          <span class="term">身體</span>
          <span
            ><NoteMark sentence="I feel tired after the long walk." :marks="['feel tired']" /><span
              class="translation"
              >走了很久之後我覺得很累。</span
            ></span
          >
        </div>
        <div>
          <span class="term">心裡</span>
          <span
            ><NoteMark
              sentence="She felt happy when she got the letter."
              :marks="['felt happy']"
            /><span class="translation">她收到那封信的時候覺得很開心。</span></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>
</template>
