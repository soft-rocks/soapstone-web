<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-use-that-already-mentioned, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="that 指前面提過的事" mark="that.">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'It\'s got a camera,', role: '前面提過的事' },
          { t: 'and I like', kind: 'dim' },
          { t: 'that.', role: '= 有相機', kind: 'key' },
        ]"
      />
      <p class="translation">它有相機，我很喜歡這一點。</p>
    </NoteSlide>

    <NoteSlide title="that 常用的位置" mark="that.">
      <div class="rows is-labeled">
        <div>
          <span class="term">受詞</span>
          <span
            ><NoteMark
              sentence="The room has a big window, and I love that."
              :marks="['that.']"
            /><span class="translation">房間有一扇大窗戶，我很喜歡這一點。</span></span
          >
        </div>
        <div>
          <span class="term">that's why</span>
          <span
            ><NoteMark
              sentence="The hotel was near the sea. That's why we chose it."
              :marks="['That\'s why']"
            /><span class="translation">那家旅館靠海，所以我們才選它。</span></span
          >
        </div>
        <div>
          <span class="term">介系詞後面</span>
          <span
            ><NoteMark
              sentence="The meeting ends at three. Call me after that."
              :marks="['after that.']"
            /><span class="translation">會議三點結束，之後再打給我。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="回應別人的話用 that" mark="that.">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I didn\'t know', kind: 'dim' },
          { t: 'that.', role: '= 對方說的話', kind: 'key' },
        ]"
      />
      <p class="translation">我不知道。</p>
    </NoteSlide>

    <NoteSlide title="指一件事用單數 that" mark="that.">
      <NoteFix
        wrong="The hotel has a pool, and the kids loved those."
        right="The hotel has a pool, and the kids loved that."
        fix="that."
      />
    </NoteSlide>

    <NoteSlide title="that 前面不加 it" mark="I like that.">
      <NoteFix
        wrong="The flat is near the station, and I like it that."
        right="The flat is near the station, and I like that."
        fix="like that."
      />
    </NoteSlide>

    <NoteSlide title="that's why 接結果" mark="that.">
      <NoteFix
        wrong="I had a bad cold. That's because I didn't go to school."
        right="I had a bad cold. That's why I didn't go to school."
        fix="why"
      />
    </NoteSlide>

    <NoteSlide title="that + 名詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'That', role: '限定詞', kind: 'key' },
          { t: 'phone', role: '名詞' },
          { t: 'is too expensive.', kind: 'dim' },
        ]"
      />
      <p class="translation">那支手機太貴了。</p>
    </NoteSlide>

    <NoteSlide title="連接詞 that">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'She said', kind: 'dim' },
          { t: 'that', role: '連接詞', kind: 'key' },
          { t: 'she was tired.', role: '子句' },
        ]"
      />
      <p class="translation">她說她累了。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
