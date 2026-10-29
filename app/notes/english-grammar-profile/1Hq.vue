<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-form-use-inversion-with-no-sooner-than, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="No sooner + had + 主詞 + 過去分詞 + than + 主詞 + 過去式">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'No sooner', kind: 'key', ring: true },
          { t: 'had', kind: 'key', ring: true },
          { t: 'I', role: '主詞' },
          { t: 'gone', role: '過去分詞' },
          { t: 'to bed', kind: 'dim' },
          { t: 'than', kind: 'key', ring: true },
          { t: 'someone', role: '主詞' },
          { t: 'broke', role: '過去式' },
          { t: 'the door down.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="no sooner、had + 主詞 + 過去分詞、than">
      <div class="rows is-labeled">
        <div>
          <span class="term">no sooner</span>
          <span>一……就……。放在句首。</span>
        </div>
        <div>
          <span class="term">had + 主詞 + 過去分詞</span>
          <span>先發生的事，倒裝。</span>
        </div>
        <div>
          <span class="term">than</span>
          <span>後面接馬上接著發生的事，用過去式。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="一般的說法">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="As soon as I got there, my classmates told me the news."
              :marks="['As soon as']"
            /><span class="translation">我一到那裡，同學們就告訴我那個消息。</span></span
          >
        </div>
      </div>
      <p class="remark">日常口語常用 as soon as 代替。</p>
    </NoteSlide>
    <NoteSlide title="no sooner 放在句首時，had 放在主詞前面" mark="No sooner">
      <NoteFix
        wrong="No sooner I had gone to bed than the phone rang."
        right="No sooner had I gone to bed than the phone rang."
        :fix="['had', 'gone']"
      />
    </NoteSlide>
    <NoteSlide title="no sooner 和 than 一起用" mark="No sooner">
      <NoteFix
        wrong="No sooner had she left when it started to rain."
        right="No sooner had she left than it started to rain."
        :fix="['than']"
      />
    </NoteSlide>
    <NoteSlide title="had 後面接過去分詞 sat" mark="had">
      <NoteFix
        wrong="No sooner had we sit down than the lights went out."
        right="No sooner had we sat down than the lights went out."
        :fix="['sat']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
