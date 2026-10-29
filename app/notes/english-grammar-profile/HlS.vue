<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-form-questions-628, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="Would you (please) + 原形動詞 + …？">
      <div class="rows is-labeled">
        <div>
          <span class="term">Would you</span>
          <span>你可以……嗎？有禮貌的請求。</span>
        </div>
        <div>
          <span class="term">Wouldn't that be</span>
          <span>那不是很……嗎？請對方同意。</span>
        </div>
        <div>
          <span class="term">wouldn't it?</span>
          <span>附加問句。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="Would you let me know">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="Would you let me know what you think?"
              :marks="['Would you let me know']"
            /><span class="translation">可以讓我知道你的想法嗎？</span></span
          >
        </div>
      </div>
      <p class="remark">Would you let me know 常用在信件結尾，請對方回覆。</p>
    </NoteSlide>
    <NoteSlide title="附加問句">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="It would be fantastic, wouldn't it?" :marks="[]" /><span
              class="translation"
              >那會很棒，對吧？</span
            ></span
          >
        </div>
      </div>
      <p class="remark">it would be …, wouldn't it? 請對方同意自己的看法。</p>
    </NoteSlide>
    <NoteSlide title="would 後面直接接原形動詞" mark="Would">
      <NoteFix wrong="Would you to help me?" right="Would you help me?" :fix="['help']" />
    </NoteSlide>
    <NoteSlide title="前面是肯定句，附加問句用 wouldn't">
      <NoteFix
        wrong="It would be great, would it?"
        right="It would be great, wouldn't it?"
        :fix="['wouldn\'t']"
      />
    </NoteSlide>
    <NoteSlide title="問句把 would 放在句首，不用 do" mark="Would">
      <NoteFix
        wrong="Do you would let me know?"
        right="Would you let me know?"
        :fix="['Would', 'let']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
