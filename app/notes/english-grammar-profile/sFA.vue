<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-offers, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="Can I + 原形動詞 ...?">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'How', kind: 'dim' },
          { t: 'can I', kind: 'key', ring: true },
          { t: 'help', role: '原形動詞 ...' },
          { t: 'you?', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="Can I ...?、What / How can I ...?、I can ...">
      <div class="rows is-labeled">
        <div>
          <span class="term">Can I ...?</span>
          <span>問對方要不要你幫這件事。</span>
        </div>
        <div>
          <span class="term">What / How can I ...?</span>
          <span>問對方需要什麼幫忙。</span>
        </div>
        <div>
          <span class="term">I can ...</span>
          <span>直接說你可以幫什麼。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="店員和服務人員常說的話">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="Can I help you?" :marks="[]" /><span class="translation"
              >需要幫忙嗎？</span
            ></span
          >
        </div>
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="What can I do for you?" :marks="[]" /><span class="translation"
              >我可以為你做什麼？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="回應提議">
      <div class="rows is-labeled">
        <div>
          <span class="term">接受</span>
          <span
            ><NoteMark sentence="Yes, please. / Thanks, that's very kind." :marks="[]" /><span
              class="translation"
              >好，麻煩你。／謝謝，你人真好。</span
            ></span
          >
        </div>
        <div>
          <span class="term">拒絕</span>
          <span
            ><NoteMark sentence="No, thanks. I'm fine." :marks="[]" /><span class="translation"
              >不用了，謝謝，我沒問題。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="提議幫忙用 Can I，不用 Do I" mark="can I">
      <NoteFix
        wrong="Do I carry your bags for you?"
        right="Can I carry your bags for you?"
        :fix="['Can']"
      />
    </NoteSlide>
    <NoteSlide title="疑問句裡，can 放在主詞前面" mark="can">
      <NoteFix wrong="How I can help you?" right="How can I help you?" :fix="['can', 'help']" />
    </NoteSlide>
    <NoteSlide title="can 後面直接接原形動詞" mark="can">
      <NoteFix
        wrong="I can to help you with the housework."
        right="I can help you with the housework."
        :fix="['help']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
