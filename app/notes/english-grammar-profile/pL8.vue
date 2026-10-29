<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-use-recent-past, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="動作剛結束，影響還在" mark="has been snowing.">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'The roads might be slippery', role: '主句', kind: 'dim' },
          { t: 'when', role: '時間子句' },
          { t: 'it', role: '主詞' },
          { t: 'has been snowing.', role: 'has been + 動詞-ing', kind: 'key', ring: true },
        ]"
      />
      <p class="translation">剛下過雪的時候，路面可能會很滑。</p>
      <p class="remark">雪停了，路上還有雪和冰。</p>
    </NoteSlide>

    <NoteSlide title="從眼前的結果推出剛結束的動作" mark="has been snowing.">
      <div class="rows is-labeled">
        <div>
          <span class="term">紅眼睛</span>
          <span
            ><NoteMark
              sentence="Your eyes are red. Have you been crying?"
              :marks="['been crying?']"
            /><span class="translation">你的眼睛紅紅的。你剛剛哭過嗎？</span></span
          >
        </div>
        <div>
          <span class="term">很熱</span>
          <span
            ><NoteMark
              sentence="I'm hot because I've been running."
              :marks="['been running.']"
            /><span class="translation">我很熱，因為我剛剛在跑步。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="動作已經停了，不用現在進行式" mark="has been snowing.">
      <NoteFix
        wrong="Sorry, my hands are dirty. I am fixing the car."
        right="Sorry, my hands are dirty. I've been fixing the car."
        fix="I've been fixing"
      />
    </NoteSlide>

    <NoteSlide title="been 不能省略" mark="been">
      <NoteFix
        wrong="The floor is wet because I have cleaning it."
        right="The floor is wet because I have been cleaning it."
        fix="been"
      />
    </NoteSlide>

    <NoteSlide title="狀態動詞不用進行式" mark="has been snowing.">
      <NoteFix
        wrong="I've been knowing about the leak in the roof since Monday."
        right="I've known about the leak in the roof since Monday."
        fix="known"
      />
    </NoteSlide>

    <NoteSlide title="簡單式說做完，進行式說剛才在做" mark="has been snowing.">
      <div class="rows is-labeled">
        <div>
          <span class="term">現在完成簡單式<br /><i>做完了</i></span>
          <span
            ><NoteMark
              sentence="Come and see the new colour. I've painted the kitchen."
              :marks="['painted']"
            /><span class="translation">來看看新的顏色。我把廚房油漆好了。</span></span
          >
        </div>
        <div>
          <span class="term">現在完成進行式<br /><i>剛才在做</i></span>
          <span
            ><NoteMark
              sentence="Sorry about my clothes. I've been painting the kitchen."
              :marks="['been painting']"
            /><span class="translation">抱歉我的衣服很髒。我剛剛在油漆廚房。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="加 for 時，動作常常還在繼續" mark="has been snowing.">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'I can order for us in Madrid.', kind: 'dim' },
          { t: 'I\'ve been learning', role: '還在繼續', kind: 'key', ring: true },
          { t: 'Spanish', kind: 'dim' },
          { t: 'for two years.', role: '一段時間' },
        ]"
      />
      <p class="translation">在馬德里我可以幫大家點菜。我學西班牙文學了兩年。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
