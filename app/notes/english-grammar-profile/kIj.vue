<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// future-form-with-adverbs, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + will + 副詞 + have + 過去分詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Sales', role: '主詞' },
          { t: 'will', kind: 'key', ring: true },
          { t: 'possibly', role: '副詞' },
          { t: 'have', kind: 'key', ring: true },
          { t: 'fallen', role: '過去分詞' },
          { t: 'to 5,000 units by the end of the year.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="will、副詞、have + 過去分詞" mark="possibly">
      <div class="rows is-labeled">
        <div>
          <span class="term">will</span>
          <span>表示未來。</span>
        </div>
        <div>
          <span class="term">副詞</span>
          <span>放在 will 後面、have 前面，這是句中副詞的位置。</span>
        </div>
        <div>
          <span class="term">have + 過去分詞</span>
          <span>到那個時間點已經完成的事。</span>
        </div>
        <div>
          <span class="term">表示可能性</span>
          <span>probably、possibly、certainly、surely、definitely</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="否定句裡的位置">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="He probably won't have finished by five."
              :marks="['won\'t']"
            /><span class="translation">到五點，他大概還沒做完。</span></span
          >
        </div>
      </div>
      <p class="remark">否定句裡，表示可能性的副詞放在 won't 前面。</p>
    </NoteSlide>
    <NoteSlide title="縮寫">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="By then you'll certainly have forgotten all about it."
              :marks="[]"
            /><span class="translation">到那時候，你一定早就把這件事忘光了。</span></span
          >
        </div>
      </div>
      <p class="remark">'ll 後面也可以接副詞。</p>
    </NoteSlide>
    <NoteSlide title="句中副詞放在 will 後面、have 前面" mark="will">
      <NoteFix
        wrong="By June we already will have moved."
        right="By June we will already have moved."
        :fix="['will', 'have']"
      />
    </NoteSlide>
    <NoteSlide title="未來完成式要有 have" mark="have">
      <NoteFix
        wrong="She will probably finished by then."
        right="She will probably have finished by then."
        :fix="['have']"
      />
    </NoteSlide>
    <NoteSlide title="否定句裡，probably 放在 won't 前面">
      <NoteFix
        wrong="He won't probably have arrived by noon."
        right="He probably won't have arrived by noon."
        :fix="['probably', 'have']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
