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
    <NoteSlide title="主詞 + will + 原形動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'My town is growing very fast.', kind: 'dim' },
          { t: 'In twenty years\' time', kind: 'dim' },
          { t: 'it', role: '主詞' },
          { t: 'will', kind: 'key', ring: true },
          { t: 'be', role: '原形動詞' },
          { t: 'bigger than it is now.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="will、I think、原形動詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">will</span>
          <span>會。預測未來。</span>
        </div>
        <div>
          <span class="term">I think</span>
          <span>說這是自己的看法。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>預測的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="附加問句 won't + 代名詞？">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="Without exercise you'll soon put on weight, won't you?"
              :marks="['won\'t']"
            /><span class="translation">不運動的話，你很快就會變胖，對吧？</span></span
          >
        </div>
      </div>
      <p class="remark">預測後面常加 won't + 代名詞？，請對方同意。</p>
    </NoteSlide>
    <NoteSlide title="it'll 和 you'll" mark="it will">
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
      <p class="remark">口語常把 it will 縮寫成 it'll，you will 縮寫成 you'll。</p>
    </NoteSlide>
    <NoteSlide title="前面是肯定句，附加問句用 won't">
      <NoteFix
        wrong="You'll put on weight, will you?"
        right="You'll put on weight, won't you?"
        :fix="['won\'t']"
      />
    </NoteSlide>
    <NoteSlide title="will 後面接原形動詞" mark="will">
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
