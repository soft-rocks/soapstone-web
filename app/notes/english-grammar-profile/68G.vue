<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-obligation-and-necessity-537, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + must + 原形動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Your parents', role: '主詞' },
          { t: 'must', kind: 'key', ring: true },
          { t: 'learn', role: '原形動詞' },
          { t: 'to let you live your own life.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="主詞、must、原形動詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">主詞</span>
          <span>代名詞或名詞都可以，像 we、they、the school、everyone。</span>
        </div>
        <div>
          <span class="term">must</span>
          <span>必須、一定要。說話者覺得很重要、很必要。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>必須做的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="說話者的意見" mark="must">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="The government must do more for old people."
              :marks="['must']"
            /><span class="translation">政府必須為老人多做一些事。</span></span
          >
        </div>
      </div>
      <p class="remark">must 常說說話者自己認為必要的事。用在意見和建議。</p>
    </NoteSlide>
    <NoteSlide title="轉述的時候" mark="must">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="The coach said we must train every morning." :marks="['must']" /><span
              class="translation"
              >教練說我們必須每天早上訓練。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">轉述過去說的話，must 可以不變。</p>
    </NoteSlide>
    <NoteSlide title="must 後面接原形動詞" mark="must">
      <NoteFix
        wrong="The school must helping these students."
        right="The school must help these students."
        :fix="['help']"
      />
    </NoteSlide>
    <NoteSlide title="must 後面的動詞不變化，一律用原形" mark="must">
      <NoteFix
        wrong="Everyone must brings their own towel."
        right="Everyone must bring their own towel."
        :fix="['bring']"
      />
    </NoteSlide>
    <NoteSlide title="must 後面直接接原形動詞" mark="must">
      <NoteFix
        wrong="Parents must to listen to their children."
        right="Parents must listen to their children."
        :fix="['listen']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
