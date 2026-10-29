<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-form-negative-760, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + had not been + -ing">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Laura realised that', kind: 'dim' },
          { t: 'she', role: '主詞' },
          { t: 'had not been', kind: 'key', ring: true },
          { t: 'studying', role: '-ing' },
          { t: 'very hard lately.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="had not / hadn't、been + -ing">
      <div class="rows is-labeled">
        <div>
          <span class="term">had not / hadn't</span>
          <span>否定。</span>
        </div>
        <div>
          <span class="term">been + -&#x2060;ing</span>
          <span>持續一段時間的動作。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="說東西壞了一段時間">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="The heating hadn't been working for two days."
              :marks="['hadn\'t been working for']"
            /><span class="translation">暖氣已經兩天沒動了。</span></span
          >
        </div>
      </div>
      <p class="remark">hadn't been working for 常說機器壞了一段時間。</p>
    </NoteSlide>
    <NoteSlide title="說注意到一段時間的情況" mark="realised">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="I noticed that he hadn't been eating much."
              :marks="['noticed']"
            /><span class="translation">我注意到他一直沒吃什麼東西。</span></span
          >
        </div>
      </div>
      <p class="remark">
        realised 或 noticed 加 hadn't been + -&#x2060;ing，說忽然發現一段時間以來的情況。
      </p>
    </NoteSlide>
    <NoteSlide title="過去完成進行式的否定用 hadn't">
      <NoteFix
        wrong="She didn't been studying hard."
        right="She hadn't been studying hard."
        :fix="['hadn\'t']"
      />
    </NoteSlide>
    <NoteSlide title="not 放在 had 後面" mark="not">
      <NoteFix
        wrong="It had been not working for days."
        right="It had not been working for days."
        :fix="['not', 'working']"
      />
    </NoteSlide>
    <NoteSlide title="been 後面的動詞要加 -ing" mark="been">
      <NoteFix
        wrong="He hadn't been sleep well."
        right="He hadn't been sleeping well."
        :fix="['sleeping']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
