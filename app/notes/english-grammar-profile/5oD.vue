<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-use-possibly-politeness, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="Could + I / you + possibly + 原形動詞 + …？">
      <div class="rows is-labeled">
        <div>
          <span class="term">could</span>
          <span>可以……嗎？客氣的請求。</span>
        </div>
        <div>
          <span class="term">possibly</span>
          <span>放在主詞後面，讓請求更客氣。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>請求的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="用在正式的信件">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="Could you possibly recommend what we should do?"
              :marks="['Could you possibly']"
            /><span class="translation">您可以建議我們應該怎麼做嗎？</span></span
          >
        </div>
      </div>
      <p class="remark">正式的信件常用 Could you possibly 請對方給建議或資訊。</p>
    </NoteSlide>
    <NoteSlide title="possibly 放在主詞後面" mark="possibly">
      <NoteFix
        wrong="Possibly could I see you?"
        right="Could I possibly see you?"
        :fix="['Could', 'possibly']"
      />
    </NoteSlide>
    <NoteSlide title="possibly 後面直接接原形動詞" mark="possibly">
      <NoteFix
        wrong="Could you possibly to help me?"
        right="Could you possibly help me?"
        :fix="['help']"
      />
    </NoteSlide>
    <NoteSlide title="放在動詞前面要用副詞 possibly" mark="possibly">
      <NoteFix
        wrong="Could I possible borrow your pen?"
        right="Could I possibly borrow your pen?"
        :fix="['possibly']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
