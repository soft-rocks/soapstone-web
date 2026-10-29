<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-past-affirmative-626, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + would have + 過去分詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I did not think', kind: 'dim' },
          { t: 'my friend Janis', role: '主詞' },
          { t: 'would have', kind: 'key', ring: true },
          { t: 'done', role: '過去分詞' },
          { t: 'that.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="would have、過去分詞、if … had">
      <div class="rows is-labeled">
        <div>
          <span class="term">would have</span>
          <span>過去會。說過去想像的情況。</span>
        </div>
        <div>
          <span class="term">過去分詞</span>
          <span>過去想像中的事。</span>
        </div>
        <div>
          <span class="term">if … had</span>
          <span>跟過去事實相反的條件。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="和過去事實相反" mark="would have">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="If I had known, I would have helped you."
              :marks="['would have']"
            /><span class="translation"
              >如果我當時知道，我就會幫你了。（事實上我不知道）</span
            ></span
          >
        </div>
      </div>
      <p class="remark">would have 常說和過去事實相反的結果。</p>
    </NoteSlide>
    <NoteSlide title="縮寫" mark="would have">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="I'd have come if you'd asked." :marks="['I\'d have']" /><span
              class="translation"
              >如果你有問，我就會來了。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">口語常把 would have 說成 would've 或 I'd have。</p>
    </NoteSlide>
    <NoteSlide title="have 後面接過去分詞" mark="have">
      <NoteFix
        wrong="That would have change my life."
        right="That would have changed my life."
        :fix="['changed']"
      />
    </NoteSlide>
    <NoteSlide title="would 後面接原形 have" mark="would">
      <NoteFix wrong="I would had called you." right="I would have called you." :fix="['have']" />
    </NoteSlide>
    <NoteSlide title="if 子句用 had 加過去分詞">
      <NoteFix
        wrong="If I would have known, I would have come."
        right="If I had known, I would have come."
        :fix="['had']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
