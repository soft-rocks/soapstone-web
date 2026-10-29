<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// future-use-plans-and-intentions-with-will, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + will + 原形動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'will', kind: 'key', ring: true },
          { t: 'try', role: '原形動詞' },
          { t: 'to come to see you tomorrow.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="will / 'll、原形動詞" mark="I">
      <div class="rows is-labeled">
        <div>
          <span class="term">will / 'll</span>
          <span>說主詞打算做的事。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>打算做的動作。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="說話當下決定的事">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="The phone's ringing. I'll answer it." :marks="[]" /><span
              class="translation"
              >電話響了，我來接。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">說話者常在說話的時候才決定要做某件事。這時用 'll。</p>
    </NoteSlide>
    <NoteSlide title="答應別人的事" mark="will">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="Don't worry. I'll help you with the boxes." :marks="[]" /><span
              class="translation"
              >別擔心，我會幫你搬箱子。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">說話者答應要幫別人做事時，也用 will。</p>
    </NoteSlide>
    <NoteSlide title="will try to" mark="will try to">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="We'll try to finish early." :marks="[]" /><span class="translation"
              >我們會盡量早點做完。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">will try to 加原形動詞，表示說話者會盡量做這件事，但不確定做得到。</p>
    </NoteSlide>
    <NoteSlide title="try to 的 to 後面接原形動詞" mark="try to">
      <NoteFix
        wrong="I will try to coming tomorrow."
        right="I will try to come tomorrow."
        :fix="['come']"
      />
    </NoteSlide>
    <NoteSlide title="will 後面接原形動詞" mark="will">
      <NoteFix
        wrong="I will brought a ball with me."
        right="I will bring a ball with me."
        :fix="['bring']"
      />
    </NoteSlide>
    <NoteSlide title="will 後面直接接原形動詞" mark="will">
      <NoteFix
        wrong="We will to visit you next week."
        right="We will visit you next week."
        :fix="['visit']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
