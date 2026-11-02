<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-predictions-612, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="will 根據現在的情況預測未來" mark="will">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'My town is growing very fast. In twenty years\' time', kind: 'dim' },
          { t: 'it', role: '主詞' },
          { t: 'will', kind: 'key', ring: true },
          { t: 'be', role: '原形動詞' },
          { t: 'bigger than it is now.', kind: 'dim' },
        ]"
      />
      <p class="translation">我的家鄉發展得很快。二十年後它會比現在大。</p>
    </NoteSlide>
    <NoteSlide title="預測後面加 won't 和代名詞，請對方同意" mark="will">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="Without exercise you'll soon put on weight, won't you?"
              :marks="['won\'t you?']"
            /><span class="translation">不運動的話，你很快就會變胖，對吧？</span></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="口語常把 it will 縮成 it'll" mark="it">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="It'll be harder to meet your old friends."
              :marks="['It\'ll']"
            /><span class="translation">要見到老朋友會比較難。</span></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="附加問句用 will 的否定 won't，不用 don't" mark="will">
      <NoteFix
        wrong="You'll put on weight, don't you?"
        right="You'll put on weight, won't you?"
        :fix="['won\'t']"
      />
    </NoteSlide>
    <NoteSlide title="will 後面不用 -ing" mark="will">
      <NoteFix
        wrong="The town will growing bigger."
        right="The town will grow bigger."
        :fix="['grow']"
      />
    </NoteSlide>
    <NoteSlide title="will 後面直接接原形動詞" mark="will">
      <NoteFix wrong="It will to be harder." right="It will be harder." :fix="['be']" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
