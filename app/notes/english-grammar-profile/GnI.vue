<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-past-negative-584, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + shouldn't have + 過去分詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I know I', role: '主詞' },
          { t: 'shouldn\'t have', kind: 'key', ring: true },
          { t: 'made', role: '過去分詞' },
          { t: 'it during school time, but I had no other choice.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="shouldn't have、過去分詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">shouldn't have</span>
          <span>過去不應該。事情已經做了。</span>
        </div>
        <div>
          <span class="term">過去分詞</span>
          <span>過去不應該做的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="承認錯誤" mark="I shouldn't have">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="I shouldn't have shouted at you. I'm sorry."
              :marks="['I shouldn\'t have']"
            /><span class="translation">我不應該對你大吼。對不起。</span></span
          >
        </div>
      </div>
      <p class="remark">I shouldn't have 常用來承認自己做錯了。</p>
    </NoteSlide>
    <NoteSlide title="批評別人">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="You shouldn't have driven so fast."
              :marks="['You shouldn\'t have']"
            /><span class="translation">你不應該開那麼快的。</span></span
          >
        </div>
      </div>
      <p class="remark">You shouldn't have 也可以批評別人做的事。</p>
    </NoteSlide>
    <NoteSlide title="have 後面接過去分詞" mark="have">
      <NoteFix
        wrong="I shouldn't have ate so much."
        right="I shouldn't have eaten so much."
        :fix="['eaten']"
      />
    </NoteSlide>
    <NoteSlide title="should 的否定是 shouldn't，不用 didn't" mark="shouldn't">
      <NoteFix
        wrong="I didn't should have said that."
        right="I shouldn't have said that."
        :fix="['shouldn\'t']"
      />
    </NoteSlide>
    <NoteSlide title="shouldn't 後面接原形 have" mark="shouldn't">
      <NoteFix
        wrong="We shouldn't had gone out."
        right="We shouldn't have gone out."
        :fix="['have']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
