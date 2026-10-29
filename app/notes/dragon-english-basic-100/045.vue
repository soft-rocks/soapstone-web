<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 045, as slides, in the order of notes/dragon-english-basic-100/045.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide title="not only A but also B 表示兩件事都成立，重點放在 B">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'James came to Japan eight years ago', kind: 'dim' },
          { t: 'not only', kind: 'key' },
          { t: 'because he wanted to visit temples,', role: 'A' },
          { t: 'but also', kind: 'key' },
          { t: 'because he had a Japanese girlfriend.', role: 'B' },
        ]"
      />
      <p class="translation">{{ note.translation }}</p>
    </NoteSlide>

    <NoteSlide title="A 和 B 用同一種詞類或結構" :mark="['because', 'because#2']">
      <div class="rows is-labeled">
        <div>
          <span class="term">名詞</span>
          <span
            ><NoteMark
              sentence="She speaks not only English but also French."
              :marks="['English', 'French']"
            /><span class="translation">她不只會說英文，也會說法文。</span></span
          >
        </div>
        <div>
          <span class="term">形容詞</span>
          <span
            ><NoteMark
              sentence="He is not only kind but also funny."
              :marks="['kind', 'funny']"
            /><span class="translation">他不只親切，也很風趣。</span></span
          >
        </div>
        <div>
          <span class="term">because 子句</span>
          <span
            ><NoteMark
              sentence="I went to Kyoto not only because I like old temples, but also because my friend lives there."
              :marks="['because', 'because#2']"
            /><span class="translation"
              >我去京都不只是因為我喜歡古老的寺廟，也是因為我朋友住在那裡。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="not only A but also B 當主詞時，動詞跟 B 一致">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Not only', kind: 'dim' },
          { t: 'my brother', role: 'A' },
          { t: 'but also', kind: 'dim' },
          { t: 'my sister', role: 'B', kind: 'key' },
          { t: 'plays', role: '動詞', kind: 'key', ring: true },
          { t: 'the piano.', kind: 'dim' },
        ]"
      />
      <p class="translation">不只我哥哥，我姊姊也會彈鋼琴。</p>
    </NoteSlide>

    <NoteSlide title="ago 放在一段時間的後面" mark="eight years ago">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'The train left', kind: 'dim' },
          { t: 'ten minutes', role: '時間長度' },
          { t: 'ago.', kind: 'key' },
        ]"
      />
      <p class="translation">火車十分鐘前開走了。</p>
      <p class="remark"><code>ago</code> 表示從現在往回算的時間點。</p>
    </NoteSlide>

    <NoteSlide title="有 ago 的句子用過去式" mark="came">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'started', role: '過去式', kind: 'key', ring: true },
          { t: 'learning English', kind: 'dim' },
          { t: 'six years ago.', role: '時間長度 + ago' },
        ]"
      />
      <p class="translation">我六年前開始學英文。</p>
    </NoteSlide>
  </NoteDeck>
</template>
