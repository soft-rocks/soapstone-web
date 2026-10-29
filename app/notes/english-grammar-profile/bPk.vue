<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-suggestions-538, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="You + must + 原形動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Rome is really fantastic and', kind: 'dim' },
          { t: 'you', kind: 'key', ring: true },
          { t: 'must', kind: 'key', ring: true },
          { t: 'go', role: '原形動詞' },
          { t: 'there!', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="you must、we must、原形動詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">you must</span>
          <span>你一定要。推薦對方。</span>
        </div>
        <div>
          <span class="term">we must</span>
          <span>我們一定要。建議大家一起做。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>推薦做的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="we must … again">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="We must do that again, don't you think?"
              :marks="['We must do that again,']"
            /><span class="translation">我們一定要再來一次，你不覺得嗎？</span></span
          >
        </div>
      </div>
      <p class="remark">
        玩得很開心以後，常說 We must do that again，意思是「我們一定要再來一次」。
      </p>
    </NoteSlide>
    <NoteSlide title="加上理由">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="You must see this film. It's brilliant." :marks="[]" /><span
              class="translation"
              >你一定要看這部電影。太精彩了。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">熱情的建議常接著說理由。</p>
    </NoteSlide>
    <NoteSlide title="must 後面直接接原形動詞" mark="must">
      <NoteFix
        wrong="You must to visit the old town."
        right="You must visit the old town."
        :fix="['visit']"
      />
    </NoteSlide>
    <NoteSlide title="must 不加 -s" mark="must">
      <NoteFix
        wrong="Everyone musts try this cake."
        right="Everyone must try this cake."
        :fix="['must']"
      />
    </NoteSlide>
    <NoteSlide title="again 放在受詞後面">
      <NoteFix
        wrong="We must do again that."
        right="We must do that again."
        :fix="['that again.']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
