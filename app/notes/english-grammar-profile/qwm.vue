<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// future-use-looking-back-from-a-point-in, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + will have been + 動詞-ing + for + 一段時間 + by + 未來的時間點">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'will have been', kind: 'key', ring: true },
          { t: 'working', role: '動詞-ing' },
          { t: 'for my company', kind: 'dim' },
          { t: 'for', kind: 'key', ring: true },
          { t: 'one year', role: '一段時間' },
          { t: 'by', kind: 'key', ring: true },
          { t: 'the end of June.', role: '未來的時間點' },
        ]"
      />
    </NoteSlide>
    <NoteSlide
      title="未來的時間點、for + 一段時間、will have been + 動詞-ing"
      mark="by the end of June."
    >
      <div class="rows is-labeled">
        <div>
          <span class="term">未來的時間點</span>
          <span>說話者站的位置，像 by the end of June、this month、next Christmas。</span>
        </div>
        <div>
          <span class="term">for + 一段時間</span>
          <span>動作到那個時間點已經持續了多久。</span>
        </div>
        <div>
          <span class="term">will have been + 動詞&#x2060;-&#x2060;ing</span>
          <span>從過去開始、到那時還在進行的動作。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="強調持續的時間">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="By the time we get there, we'll have been driving for ten hours, so we'll be exhausted."
              :marks="[]"
            /><span class="translation"
              >等我們到那裡，我們就已經開了十個小時的車，一定會累壞。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">說話者用這個句型，強調動作持續得很久。後面常說出結果或原因。</p>
    </NoteSlide>
    <NoteSlide title="和未來完成式比較">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="By June I'll have written three reports." :marks="[]" /><span
              class="translation"
              >到六月，我就寫完三份報告了。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">說完成了幾次、做了多少，用未來完成式，不用未來完成進行式。</p>
    </NoteSlide>
    <NoteSlide title="站在未來的時間點往回看，要用 will have been" mark="will have been">
      <NoteFix
        wrong="By next June I have been working here for a year."
        right="By next June I will have been working here for a year."
        :fix="['will']"
      />
    </NoteSlide>
    <NoteSlide title="說完成了多少，用未來完成式">
      <NoteFix
        wrong="By June I will have been writing three reports."
        right="By June I will have written three reports."
        :fix="['written']"
      />
    </NoteSlide>
    <NoteSlide title="一段時間前面用 for" mark="for">
      <NoteFix
        wrong="By May I'll have been living here since two years."
        right="By May I'll have been living here for two years."
        :fix="['for']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
