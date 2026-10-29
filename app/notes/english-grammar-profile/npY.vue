<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-use-time, as slides, in the order of content.md. One point per slide: the title names it, the
// diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="when 子句說明事情發生的時間">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'I feel comfortable', role: '主要子句' },
          { t: 'when', role: '連接詞', kind: 'key' },
          { t: 'I am wearing these clothes.', role: '時間子句' },
        ]"
      />
      <p class="translation">我穿這些衣服的時候覺得很舒服。</p>
    </NoteSlide>

    <NoteSlide title="時間子句在後面不加逗號，在前面要加逗號" mark="when">
      <div class="rows is-labeled">
        <div>
          <span class="term">後面</span>
          <span
            ><NoteMark
              sentence="I always listen to music when I'm cooking."
              :marks="['when']"
            /><span class="translation">我煮飯的時候都會聽音樂。</span></span
          >
        </div>
        <div>
          <span class="term">前面</span>
          <span
            ><NoteMark
              sentence="When I got home, the house was empty."
              :marks="['When', 'home,']"
            /><span class="translation">我回到家的時候，家裡沒人。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="when、while、before、after、until 和 as soon as 說時間的關係" mark="when">
      <div class="rows is-labeled">
        <div>
          <span class="term">when<br /><i>在那個時候</i></span>
          <span>When I was a child, I lived in Hualien.</span>
        </div>
        <div>
          <span class="term">while<br /><i>同時發生</i></span>
          <span>While I was waiting, I read a magazine.</span>
        </div>
        <div>
          <span class="term">before / after<br /><i>之前、之後</i></span>
          <span>Wash your hands before you eat.</span>
        </div>
        <div>
          <span class="term">until<br /><i>直到</i></span>
          <span>Wait here until I come back.</span>
        </div>
        <div>
          <span class="term">as soon as<br /><i>一……就</i></span>
          <span>Call me as soon as you arrive.</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="說未來的事，時間子句用現在式" mark="am wearing">
      <div class="rows is-labeled">
        <div>
          <span class="term">未來</span>
          <span
            ><NoteMark
              sentence="I'll call you when I get to the hotel."
              :marks="['I\'ll', 'get']"
            /><span class="translation">我到飯店的時候會打給你。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="說未來的時間，時間子句不用 will">
      <NoteFix
        wrong="I'll text you when I will arrive."
        right="I'll text you when I arrive."
        fix="arrive."
      />
    </NoteSlide>

    <NoteSlide title="連接詞已經連接兩個子句，不加 so">
      <NoteFix
        wrong="When I finished work, so I went home."
        right="When I finished work, I went home."
        fix="I went home."
      />
    </NoteSlide>

    <NoteSlide title="while 後面接子句，只接名詞用 during">
      <NoteFix
        wrong="While the lesson, my phone rang."
        right="While I was in the lesson, my phone rang."
        fix="I was in"
      >
        只接名詞要寫 <code>during the lesson</code>。
      </NoteFix>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
