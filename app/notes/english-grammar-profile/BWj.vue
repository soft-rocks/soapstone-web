<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-form-with-adverbs-775, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + had + 副詞 + 過去分詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'He', role: '主詞' },
          { t: 'had', kind: 'key', ring: true },
          { t: 'finally', role: '副詞' },
          { t: 'achieved', role: '過去分詞' },
          { t: 'his goal!', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="finally、recently、suddenly">
      <div class="rows is-labeled">
        <div>
          <span class="term">finally</span>
          <span>終於。</span>
        </div>
        <div>
          <span class="term">recently</span>
          <span>最近。</span>
        </div>
        <div>
          <span class="term">suddenly</span>
          <span>突然。</span>
        </div>
        <div>
          <span class="term">simply</span>
          <span>就只是、簡直。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="被動句裡的副詞" mark="had">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="When we came back from holiday, the flat was empty. The furniture had simply been taken away."
              :marks="['been', 'had']"
            /><span class="translation"
              >我們度假回來的時候，公寓是空的。家具就這樣被搬走了。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">被動的過去完成式，副詞放在 had 和 been 中間。</p>
    </NoteSlide>
    <NoteSlide title="suddenly 說突然的事">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="There was a loud bang in the night. My sister had suddenly woken up and was screaming."
              :marks="['had suddenly']"
            /><span class="translation">夜裡有一聲巨響。我妹妹突然醒來，一直尖叫。</span></span
          >
        </div>
      </div>
      <p class="remark">had suddenly 說之前突然發生的事。</p>
    </NoteSlide>
    <NoteSlide title="副詞放在 had 和過去分詞中間" mark="had">
      <NoteFix
        wrong="By June my dad had paid finally all his debts."
        right="By June my dad had finally paid all his debts."
        :fix="['finally paid']"
      />
    </NoteSlide>
    <NoteSlide title="放在動詞前面要用副詞">
      <NoteFix
        wrong="When we met again, my old teacher had complete forgotten my name."
        right="When we met again, my old teacher had completely forgotten my name."
        :fix="['completely']"
      />
    </NoteSlide>
    <NoteSlide title="had 後面接過去分詞" mark="had">
      <NoteFix
        wrong="When I visited my cousins, they had recently move house."
        right="When I visited my cousins, they had recently moved house."
        :fix="['moved']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
