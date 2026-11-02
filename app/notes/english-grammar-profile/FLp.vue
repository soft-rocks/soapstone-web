<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-reported-speech-634, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="said 後面轉述的 will 改成 would" mark="would">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'She accepted the invitation and', kind: 'dim' },
          { t: 'said', role: '轉述動詞（過去式）', kind: 'key' },
          { t: 'that she', kind: 'dim' },
          { t: 'would', role: '原本的 will', kind: 'key', ring: true },
          { t: 'come', role: '原形動詞' },
          { t: 'on the 21st of June.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="直接引述的 will，間接引述時變成 would" mark="would">
      <div class="rows is-labeled">
        <div>
          <span class="term">直接引述</span>
          <span
            ><NoteMark sentence='"I will come," she said.' :marks="['will']" /><span
              class="translation"
              >她說：「我會來。」</span
            ></span
          >
        </div>
        <div>
          <span class="term">間接引述</span>
          <span
            ><NoteMark sentence="She said she would come." :marks="['would']" /><span
              class="translation"
              >她說她會來。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="promised 後面也用 would，won't 變成 wouldn't" mark="said">
      <div class="rows is-labeled">
        <div>
          <span class="term">promised</span>
          <span
            ><NoteMark
              sentence="She promised she would keep my secret."
              :marks="['promised', 'would']"
            /><span class="translation">她答應會保守我的秘密。</span></span
          >
        </div>
        <div>
          <span class="term">wouldn't</span>
          <span
            ><NoteMark sentence="She said she wouldn't tell anyone." :marks="['wouldn\'t']" /><span
              class="translation"
              >她說她不會告訴任何人。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="轉述過去的預測也用 would" mark="would">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="My uncle told me I would love sailing, and he was right!"
              :marks="['would']"
            /><span class="translation">我叔叔告訴我我會很愛航海，他說對了！</span></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="would 後面的動詞不加 -s" mark="would">
      <NoteFix
        wrong="My aunt said she would comes to stay for a week."
        right="My aunt said she would come to stay for a week."
        :fix="['come']"
      />
    </NoteSlide>
    <NoteSlide title="told 後面要接人" mark="said">
      <NoteFix
        wrong="The landlord told that he would fix the heating."
        right="The landlord told me that he would fix the heating."
        :fix="['me']"
      />
    </NoteSlide>
    <NoteSlide title="would 後面直接接原形動詞" mark="would">
      <NoteFix
        wrong="They said they would to help us."
        right="They said they would help us."
        :fix="['help']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
