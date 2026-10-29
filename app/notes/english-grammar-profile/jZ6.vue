<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-habitual-and-typical, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + will + (often / usually) + 原形動詞" mark="will">
      <div class="rows is-labeled">
        <div>
          <span class="term">will</span>
          <span>常常會、通常會。說習慣或典型的情況。</span>
        </div>
        <div>
          <span class="term">often / usually</span>
          <span>放在 will 後面，說多常發生。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>習慣的行為。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="不是說未來" mark="will">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="My grandfather will sit in the garden for hours."
              :marks="['will']"
            /><span class="translation">我爺爺常常會在花園裡坐好幾個小時。</span></span
          >
        </div>
      </div>
      <p class="remark">這個 will 說的是一般的習慣，不是以後的事。</p>
    </NoteSlide>
    <NoteSlide title="說東西的典型特徵" mark="will">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="A good curry will usually contain garlic and onion."
              :marks="['will']"
            /><span class="translation">好的咖哩通常會有大蒜和洋蔥。</span></span
          >
        </div>
      </div>
      <p class="remark">will 也可以說東西通常的樣子，常用在介紹和說明。</p>
    </NoteSlide>
    <NoteSlide title="will 後面接原形動詞" mark="will">
      <NoteFix
        wrong="She will often knocks on the door."
        right="She will often knock on the door."
        :fix="['knock']"
      />
    </NoteSlide>
    <NoteSlide title="will 不加 -s" mark="will">
      <NoteFix
        wrong="He wills often go for walks."
        right="He will often go for walks."
        :fix="['will']"
      />
    </NoteSlide>
    <NoteSlide title="副詞後面直接接原形動詞">
      <NoteFix
        wrong="The dish will usually to contain rice."
        right="The dish will usually contain rice."
        :fix="['contain']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
