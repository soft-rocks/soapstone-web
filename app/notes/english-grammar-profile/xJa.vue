<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-a-lot-and-much, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="A lot / Much 當主詞" mark="A lot depends">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'A lot', role: '主詞：很多事', kind: 'key' },
          { t: 'depends', role: '單數動詞' },
          { t: 'on your background.', kind: 'dim' },
        ]"
      />
      <p class="translation">很多事要看你的背景。</p>
    </NoteSlide>

    <NoteSlide title="a lot 和 much" mark="A lot">
      <div class="rows is-labeled">
        <div>
          <span class="term">a lot</span>
          <span
            ><NoteMark sentence="A lot has happened since we last met." :marks="['A lot']" /><span
              class="translation"
              >從上次見面到現在發生了很多事。</span
            ></span
          >
        </div>
        <div>
          <span class="term">much（正式）</span>
          <span
            ><NoteMark sentence="Much has changed in the last ten years." :marks="['Much']" /><span
              class="translation"
              >過去十年改變了很多。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="常用的動詞" mark="depends">
      <div class="rows is-labeled">
        <div>
          <span class="term">現在完成式</span>
          <span
            ><NoteMark
              sentence="A lot has improved since the new manager arrived."
              :marks="['has improved']"
            /><span class="translation">新經理來了以後，很多地方都改善了。</span></span
          >
        </div>
        <div>
          <span class="term">被動</span>
          <span
            ><NoteMark
              sentence="Much has been written about this problem."
              :marks="['has been written']"
            /><span class="translation">關於這個問題的文章很多。</span></span
          >
        </div>
        <div>
          <span class="term">depend on</span>
          <span
            ><NoteMark
              sentence="Much depends on the weather tomorrow."
              :marks="['depends on']"
            /><span class="translation">很多事要看明天的天氣。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="動詞用單數" mark="depends">
      <NoteFix
        wrong="A lot have changed in my town."
        right="A lot has changed in my town."
        fix="has"
      />
    </NoteSlide>

    <NoteSlide title="寫成 a lot" mark="A lot">
      <NoteFix
        wrong="Lot has happened this year."
        right="A lot has happened this year."
        fix="A lot"
      />
    </NoteSlide>

    <NoteSlide title="很多事用 much">
      <NoteFix
        wrong="Many has been said about the new law."
        right="Much has been said about the new law."
        fix="Much"
      />
    </NoteSlide>

    <NoteSlide title="a lot of + 名詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'A lot of', kind: 'key' },
          { t: 'people', role: '名詞' },
          { t: 'have changed', role: '跟著名詞' },
          { t: 'jobs this year.', kind: 'dim' },
        ]"
      />
      <p class="translation">今年很多人換了工作。</p>
    </NoteSlide>

    <NoteSlide title="a lot 當副詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'My town has changed', kind: 'dim' },
          { t: 'a lot.', role: '程度，不是主詞', kind: 'key' },
        ]"
      />
      <p class="translation">我住的鎮變了很多。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
