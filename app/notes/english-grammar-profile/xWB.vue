<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-form-questions-763, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="Had + 主詞 + been + -ing + …？" mark="What">
      <div class="rows is-labeled">
        <div>
          <span class="term">Had</span>
          <span>放在主詞前面。</span>
        </div>
        <div>
          <span class="term">been + -&#x2060;ing</span>
          <span>一直在做的事。</span>
        </div>
        <div>
          <span class="term">疑問詞</span>
          <span>what、why、how long、where 放在句首。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="How long had …？">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="How long had you been waiting?" :marks="[]" /><span
              class="translation"
              >你等了多久？</span
            ></span
          >
        </div>
      </div>
      <p class="remark">How long had … been + -&#x2060;ing 問一件事持續了多久。</p>
    </NoteSlide>
    <NoteSlide title="正式和文學的用法">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="Why had she been waiting for so long?" :marks="[]" /><span
              class="translation"
              >她為什麼等了那麼久？</span
            ></span
          >
        </div>
      </div>
      <p class="remark">這種問句不常出現在日常對話裡，常用在小說、報導和調查。</p>
    </NoteSlide>
    <NoteSlide title="問句把 had 放在主詞前面" mark="had">
      <NoteFix
        wrong="What he had been doing?"
        right="What had he been doing?"
        :fix="['had', 'been']"
      />
    </NoteSlide>
    <NoteSlide title="過去完成進行式的問句用 had" mark="had">
      <NoteFix
        wrong="Why did she been waiting so long?"
        right="Why had she been waiting so long?"
        :fix="['had']"
      />
    </NoteSlide>
    <NoteSlide title="had 和 -ing 中間要有 been" mark="been">
      <NoteFix
        wrong="How long had you waiting?"
        right="How long had you been waiting?"
        :fix="['been']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
