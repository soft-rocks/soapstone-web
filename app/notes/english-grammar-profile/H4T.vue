<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-requests, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="Can you + 原形動詞 ...?">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Can you', kind: 'key', ring: true },
          { t: 'call', role: '原形動詞 ...' },
          { t: 'me?', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="Can you、原形動詞" mark="you">
      <div class="rows is-labeled">
        <div>
          <span class="term">Can you</span>
          <span>請對方做事。</span>
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span>你希望對方做的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="請求和邀請">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark
              sentence="Can you come on Sunday at seven o'clock?"
              :marks="['Can you come']"
            /><span class="translation">你星期天七點可以來嗎？</span></span
          >
        </div>
      </div>
      <p class="remark">Can you come ...? 可以邀請對方在某個時間來。</p>
    </NoteSlide>
    <NoteSlide title="回應請求">
      <div class="rows is-labeled">
        <div>
          <span class="term">答應</span>
          <span
            ><NoteMark sentence="Yes, of course. / Sure. / No problem." :marks="[]" /><span
              class="translation"
              >好，當然。／好啊。／沒問題。</span
            ></span
          >
        </div>
        <div>
          <span class="term">拒絕</span>
          <span
            ><NoteMark sentence="Sorry, I can't. I'm busy." :marks="[]" /><span class="translation"
              >抱歉，我沒辦法，我在忙。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="請求用問句，can 放在 you 前面" mark="Can">
      <NoteFix wrong="You can call me?" right="Can you call me?" :fix="['Can you']" />
    </NoteSlide>
    <NoteSlide title="can 後面直接接原形動詞" mark="Can">
      <NoteFix wrong="Can you to help me?" right="Can you help me?" :fix="['help']" />
    </NoteSlide>
    <NoteSlide title="can 後面接原形動詞" mark="Can">
      <NoteFix
        wrong="Can you sending me the address?"
        right="Can you send me the address?"
        :fix="['send']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
