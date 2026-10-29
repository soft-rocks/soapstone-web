<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// verbs-form-verbs-to-infinitive-or-ing, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="love 後面接動詞-ing，說很喜歡做的事">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'love', role: '動詞', kind: 'key' },
          { t: 'listening', role: '動詞-ing', kind: 'key' },
          { t: 'to music,', kind: 'dim' },
          { t: 'especially hip-hop music.', role: '補充說明', kind: 'dim' },
        ]"
      />
      <p class="translation">我很愛聽音樂，尤其是嘻哈音樂。</p>
    </NoteSlide>

    <NoteSlide title="love、hate、prefer 接動詞-ing 或 to + 原形動詞，意思一樣" mark="listening">
      <div class="rows is-labeled">
        <div>
          <span class="term">love</span>
          <span
            ><NoteMark
              sentence="I love cooking. I love to cook."
              :marks="['cooking', 'to cook']"
            /><span class="translation">我很愛煮飯。</span></span
          >
        </div>
        <div>
          <span class="term">hate</span>
          <span
            ><NoteMark
              sentence="I hate wearing trousers. I hate to wear trousers."
              :marks="['wearing', 'to wear']"
            /><span class="translation">我很討厭穿長褲。</span></span
          >
        </div>
        <div>
          <span class="term">prefer</span>
          <span
            ><NoteMark
              sentence="I prefer walking. I prefer to walk."
              :marks="['walking', 'to walk']"
            /><span class="translation">我比較喜歡走路。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="prefer 比較兩件事，用 to 或 rather than" mark="love">
      <div class="rows is-labeled">
        <div>
          <span class="term">動詞&#x2060;-&#x2060;ing + to + 動詞&#x2060;-&#x2060;ing</span>
          <span
            ><NoteMark
              sentence="I prefer walking to driving."
              :marks="['walking', 'to driving']"
            /><span class="translation">比起開車，我比較喜歡走路。</span></span
          >
        </div>
        <div>
          <span class="term">to + 原形動詞 + rather than</span>
          <span
            ><NoteMark
              sentence="I prefer to walk rather than drive."
              :marks="['to walk', 'rather than drive']"
            /><span class="translation">我寧願走路，也不想開車。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="hate 後面不直接接原形動詞" mark="listening">
      <NoteFix
        wrong="We hate queue for the bus in the rain."
        right="We hate queuing for the bus in the rain."
        fix="queuing"
      />
    </NoteSlide>

    <NoteSlide title="不定詞的 to 後面接原形動詞" mark="listening">
      <NoteFix
        wrong="She prefers to travelling by train."
        right="She prefers to travel by train."
        fix="travel"
      />
    </NoteSlide>

    <NoteSlide title="prefer 比較兩件事時用 to，不用 than">
      <NoteFix
        wrong="I prefer cycling than driving."
        right="I prefer cycling to driving."
        fix="to"
      />
    </NoteSlide>

    <NoteSlide title="現在簡單式的 hate 照主詞變化" mark="love">
      <NoteFix
        wrong="My brother hate washing the dishes."
        right="My brother hates washing the dishes."
        fix="hates"
      />
    </NoteSlide>

    <NoteSlide title="would love 只接 to + 原形動詞，enjoy 只接動詞-ing" mark="love">
      <div class="rows is-labeled">
        <div>
          <span class="term">would love to</span>
          <span
            ><NoteMark sentence="I'd love to come." :marks="['I\'d love to']" /><span
              class="translation"
              >我很想去。</span
            ></span
          >
        </div>
        <div>
          <span class="term">enjoy + 動詞&#x2060;-&#x2060;ing</span>
          <span
            ><NoteMark sentence="I enjoy cooking." :marks="['enjoy cooking']" /><span
              class="translation"
              >我很喜歡煮飯。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
