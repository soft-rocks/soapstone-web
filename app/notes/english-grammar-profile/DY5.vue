<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// future-use-predictions-with-will, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="will 加原形動詞預測未來" mark="will be hotter">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'It', role: '主詞' },
          { t: 'will', role: '預測', kind: 'key', ring: true },
          { t: 'be hotter', role: '原形動詞' },
          { t: 'because of global warming.', role: '根據', kind: 'dim' },
        ]"
      />
      <p class="translation">因為全球暖化，天氣會變得更熱。</p>
      <p class="remark">學生根據現在的情況推測。</p>
    </NoteSlide>

    <NoteSlide title="肯定用 will / 'll，否定用 will not / won't" mark="will">
      <div class="rows is-labeled">
        <div>
          <span class="term">will / 'll</span>
          <span>說話者認為未來會發生的事。</span>
        </div>
        <div>
          <span class="term">will not / won't</span>
          <span>說話者認為未來不會發生的事。</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="加上 I think、probably 表示把握程度" mark="will">
      <div class="rows is-labeled">
        <div>
          <span class="term">I think ... will</span>
          <span
            ><NoteMark sentence="I think it'll rain later." :marks="['it\'ll']" /><span
              class="translation"
              >我覺得晚一點會下雨。</span
            ></span
          >
        </div>
        <div>
          <span class="term">probably</span>
          <span
            ><NoteMark sentence="She'll probably be late." :marks="['probably']" /><span
              class="translation"
              >她大概會遲到。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">probably 和 definitely 放在 will 後面。否定句放在 won't 前面。</p>
    </NoteSlide>

    <NoteSlide title="也可以根據經驗或個人看法預測" mark="will">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'You', role: '主詞' },
          { t: '\'ll', role: 'will', kind: 'key', ring: true },
          { t: 'love', role: '原形動詞' },
          { t: 'this film.', kind: 'dim' },
        ]"
      />
      <p class="translation">你一定會喜歡這部電影。</p>
    </NoteSlide>

    <NoteSlide title="預測狀態時，will 後面接 be" mark="be">
      <NoteFix
        wrong="It will hotter next summer."
        right="It will be hotter next summer."
        fix="will be"
      />
    </NoteSlide>

    <NoteSlide title="will 後面接原形動詞" mark="be">
      <NoteFix wrong="The weather will gets worse." right="The weather will get worse." fix="get" />
    </NoteSlide>

    <NoteSlide title="否定的預測常說 I don't think ... will" mark="will">
      <NoteFix
        wrong="I think it won't not rain."
        right="I don't think it will rain."
        fix="don't think"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
