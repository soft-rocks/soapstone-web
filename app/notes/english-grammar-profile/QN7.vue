<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// future-form-questions-381, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="是非疑問句" mark="Will">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="Won't the film have started by eight?" :marks="['Won\'t']" /><span
              class="translation"
              >八點以前電影不是已經開始了嗎？</span
            ></span
          >
        </div>
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="Will you have finished by six? — Yes, I will. / No, I won't."
              :marks="['won\'t.', 'Will']"
            /><span class="translation">你六點前會做完嗎？——會。／不會。</span></span
          >
        </div>
      </div>
      <p class="remark">否定疑問句用 Won't 開頭，說話者以為事情會發生。</p>
    </NoteSlide>
    <NoteSlide title="wh- 疑問句">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="How much will we have spent by the end of the trip?"
              :marks="[]"
            /><span class="translation">到旅行結束，我們會花掉多少錢？</span></span
          >
        </div>
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="Who will have heard the news by then?" :marks="[]" /><span
              class="translation"
              >到那時候，誰會已經聽到這個消息？</span
            ></span
          >
        </div>
      </div>
      <p class="remark">疑問詞是主詞時，句子不換位置。</p>
    </NoteSlide>
    <NoteSlide title="只有 will 移到主詞前面" mark="Will">
      <NoteFix
        wrong="Will have he changed?"
        right="Will he have changed?"
        :fix="['he', 'changed?']"
      />
    </NoteSlide>
    <NoteSlide title="will 後面的 have 用原形" mark="Will">
      <NoteFix
        wrong="Will she has left by then?"
        right="Will she have left by then?"
        :fix="['have']"
      />
    </NoteSlide>
    <NoteSlide title="未來完成式的疑問句用 will 開頭，不加 do" mark="Will">
      <NoteFix
        wrong="Do you will have finished by six?"
        right="Will you have finished by six?"
        :fix="['Will', 'have']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
