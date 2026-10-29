<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-form-use-after-if-only-imagined-past, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="If only + 主詞 + hadn't + 過去分詞!">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'If only', kind: 'key', ring: true },
          { t: 'I', role: '主詞' },
          { t: 'hadn\'t', kind: 'key', ring: true },
          { t: 'been', role: '過去分詞' },
          { t: 'that rude!', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="if only、hadn't + 過去分詞、would + 原形動詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">if only</span>
          <span>要是……就好了。</span>
        </div>
        <div>
          <span class="term">hadn't + 過去分詞</span>
          <span>後悔做了的事。</span>
        </div>
        <div>
          <span class="term">would + 原形動詞</span>
          <span>說現在可能會不一樣。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="過去的事影響現在">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="Anna and I don't talk any more. If only she had not moved to the city, we would still be close."
              :marks="['would']"
            /><span class="translation"
              >我和安娜現在不說話了。要是她當時沒有搬去城市，我們現在還會很親。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">
        if only … had not … 後面可以接 would 加原形動詞，說現在的情況可能會不同。
      </p>
    </NoteSlide>
    <NoteSlide title="連用好幾個 if only" mark="If only">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="My dad tried to warn me. If only I had listened to him, if only I hadn't shouted at him!"
              :marks="['If only', 'if only#2']"
            /><span class="translation"
              >我爸爸試著提醒我。要是我當時有聽他的話就好了，要是我當時沒有對他大吼就好了！</span
            ></span
          >
        </div>
      </div>
      <p class="remark">說很多後悔的事時，可以連用好幾個 if only。</p>
    </NoteSlide>
    <NoteSlide title="後悔過去的事，if only 後面用 hadn't 加過去分詞" mark="If only">
      <NoteFix
        wrong="If only I didn't say those things to my sister yesterday!"
        right="If only I hadn't said those things to my sister yesterday!"
        :fix="['hadn\'t said']"
      />
    </NoteSlide>
    <NoteSlide title="hadn't 後面接過去分詞" mark="hadn't">
      <NoteFix
        wrong="If only we hadn't went to that party on Friday!"
        right="If only we hadn't gone to that party on Friday!"
        :fix="['gone']"
      />
    </NoteSlide>
    <NoteSlide title="if only 後面用 hadn't 加過去分詞" mark="If only">
      <NoteFix
        wrong="If only I wouldn't have been so rude to the waiter!"
        right="If only I hadn't been so rude to the waiter!"
        :fix="['hadn\'t']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
