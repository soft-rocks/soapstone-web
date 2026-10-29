<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-polite-requests, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="Would you mind + -ing？">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'We\'re having a barbecue for lunch.', kind: 'dim' },
          { t: 'Would you mind', kind: 'key', ring: true },
          { t: 'bringing', role: '-ing' },
          { t: 'a salad?', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="Would you mind + -ing、Would you mind if I …、Would it be possible">
      <div class="rows is-labeled">
        <div>
          <span class="term">Would you mind + -&#x2060;ing</span>
          <span>你介意……嗎？請對方做事。</span>
        </div>
        <div>
          <span class="term">Would you mind if I …</span>
          <span>你介意我……嗎？請求許可。</span>
        </div>
        <div>
          <span class="term">Would it be possible</span>
          <span>有可能……嗎？很客氣。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="改時間">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="Would you mind if we met at five instead of four?"
              :marks="['Would you mind if we met']"
            /><span class="translation">你介意我們改成五點見面，不要四點嗎？</span></span
          >
        </div>
      </div>
      <p class="remark">Would you mind if we met … 常用來客氣地改約會時間。</p>
    </NoteSlide>
    <NoteSlide title="mind 後面接 -ing" mark="mind">
      <NoteFix
        wrong="Would you mind to bring a salad?"
        right="Would you mind bringing a salad?"
        :fix="['bringing']"
      />
    </NoteSlide>
    <NoteSlide title="would you mind if 後面的子句用過去式">
      <NoteFix
        wrong="Would you mind if I will sit here?"
        right="Would you mind if I sat here?"
        :fix="['sat']"
      />
    </NoteSlide>
    <NoteSlide title="possible 後面接 to 和原形動詞">
      <NoteFix
        wrong="Would it be possible meet later?"
        right="Would it be possible to meet later?"
        :fix="['to']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
