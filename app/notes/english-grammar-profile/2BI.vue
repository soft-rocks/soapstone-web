<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-reproaches-and-appeals, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="You can't / cannot + 原形動詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">You can't ...</span>
          <span>告訴對方「你不能再這樣」。</span>
        </div>
        <div>
          <span class="term">Can't you ...?</span>
          <span>帶著不耐煩或擔心的問句，不是真的要對方回答。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>對方不該做的事，或應該看清楚的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="You can't go on + 動詞-ing">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="You can't go on studying so hard."
              :marks="['can\'t go on', 'go on']"
            /><span class="translation">你不能再這樣拼命讀書了。</span></span
          >
        </div>
      </div>
      <p class="remark">
        go on 加動詞&#x2060;-&#x2060;ing 表示「一直做下去」。can't go on 表示不能再一直這樣。
      </p>
    </NoteSlide>
    <NoteSlide title="前面加 please 或 listen">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="Please, listen. You can't work all the time."
              :marks="['Please,', 'listen.']"
            /><span class="translation">拜託，聽我說，你不能一直工作。</span></span
          >
        </div>
      </div>
      <p class="remark">懇求時常在前面加 please、listen、look。</p>
    </NoteSlide>
    <NoteSlide title="go on 後面接動詞-ing">
      <NoteFix
        wrong="You can't go on study so hard."
        right="You can't go on studying so hard."
        :fix="['studying']"
      />
    </NoteSlide>
    <NoteSlide title="can 的否定是 can't 或 cannot" mark="Can't">
      <NoteFix
        wrong="You don't can forget your friends."
        right="You can't forget your friends."
        :fix="['can\'t']"
      />
    </NoteSlide>
    <NoteSlide title="see 後面的子句用一般的語序" mark="see">
      <NoteFix
        wrong="Can't you see how exhausted are you?"
        right="Can't you see how exhausted you are?"
        :fix="['you are?']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
