<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adverbs-form-use-mid-position-distancing, as slides, in the order of content.md. One
// point per slide: the title names it, the diagram shows it, and `mark` circles the matching
// words of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="保留態度副詞放在一般動詞前面" mark="theoretically has">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Piggy', role: '主詞' },
          { t: 'theoretically', role: '保留態度副詞', kind: 'key' },
          { t: 'has', role: '動詞' },
          { t: 'all the necessary skills.', role: '受詞', kind: 'dim' },
        ]"
      />
      <p class="translation">照理說，Piggy 具備所需的一切能力。</p>
    </NoteSlide>

    <NoteSlide title="放在 be 或助動詞後面" mark="theoretically">
      <div class="rows is-labeled">
        <div>
          <span class="term">be 後面</span>
          <span
            ><NoteMark
              sentence="The shop is officially closed on Sundays."
              :marks="['is officially']"
            /><span class="translation">那家店星期天照規定是不開的。</span></span
          >
        </div>
        <div>
          <span class="term">助動詞後面</span>
          <span
            ><NoteMark
              sentence="The new system should theoretically reduce costs."
              :marks="['should theoretically reduce']"
            /><span class="translation">照理說，新系統應該能降低成本。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="各個副詞的意思" mark="theoretically">
      <div class="rows is-labeled">
        <div>
          <span class="term">theoretically</span>
          <span>照理說，實際上可能做不到</span>
        </div>
        <div>
          <span class="term">technically</span>
          <span>嚴格來說，照規則或定義成立</span>
        </div>
        <div>
          <span class="term">officially</span>
          <span>照規定，名義上</span>
        </div>
        <div>
          <span class="term">ostensibly</span>
          <span>表面上，真正的理由可能不同</span>
        </div>
        <div>
          <span class="term">arguably</span>
          <span>可以說，別人可能不同意</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="後面常接 but 說出實際的情況">
      <div class="rows is-labeled">
        <div>
          <span class="term">technically</span>
          <span
            ><NoteMark
              sentence="He is technically still a student, but he works full-time."
              :marks="['technically', 'but']"
            /><span class="translation">嚴格來說他還是學生，不過他全職在工作。</span></span
          >
        </div>
        <div>
          <span class="term">officially</span>
          <span
            ><NoteMark
              sentence="She is officially on holiday, but she answers emails every day."
              :marks="['officially', 'but']"
            /><span class="translation">她名義上在休假，不過每天都在回電子郵件。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="修飾動詞用副詞" mark="theoretically">
      <NoteFix
        wrong="The plan theoretical works, but nobody has tested it."
        right="The plan theoretically works, but nobody has tested it."
        fix="theoretically"
      />
    </NoteSlide>

    <NoteSlide title="保留態度副詞放在 be 後面">
      <NoteFix
        wrong="The building officially is closed to the public."
        right="The building is officially closed to the public."
        fix="is officially"
      />
    </NoteSlide>

    <NoteSlide title="可以說是 arguably">
      <NoteFix
        wrong="This is argumentatively the best film of the decade."
        right="This is arguably the best film of the decade."
        fix="arguably"
      />
    </NoteSlide>

    <NoteSlide title="theoretically 和 in theory 只用一個">
      <NoteFix
        wrong="The new law should theoretically reduce crime in theory."
        right="The new law should theoretically reduce crime."
        fix="theoretically"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
