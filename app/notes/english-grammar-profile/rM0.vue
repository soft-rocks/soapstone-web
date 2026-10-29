<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// future-form-negative-402, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞 + am / is / are + not + going to + 原形動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'am', kind: 'key', ring: true },
          { t: 'not', kind: 'key', ring: true },
          { t: 'going to', kind: 'key', ring: true },
          { t: 'go', role: '原形動詞' },
          { t: 'to school tomorrow.', kind: 'dim' },
        ]"
      />
    </NoteSlide>
    <NoteSlide title="not、going to + 原形動詞" mark="am">
      <div class="rows is-labeled">
        <div>
          <span class="term">not</span>
          <span>放在 am、is、are 後面。</span>
        </div>
        <div>
          <span class="term">going to + 原形動詞</span>
          <span>不會做或不會發生的事。</span>
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="縮寫" mark="I am not">
      <div class="rows is-labeled">
        <div>
          <span class="term">I'm not going to</span>
          <span
            ><NoteMark sentence="I'm not going to tell you." :marks="['I\'m not']" /><span
              class="translation"
              >我不會告訴你。</span
            ></span
          >
        </div>
        <div>
          <span class="term">isn't going to / 's not going to</span>
          <span
            ><NoteMark sentence="He isn't going to like it." :marks="[]" /><span class="translation"
              >他不會喜歡的。</span
            ></span
          >
        </div>
        <div>
          <span class="term">aren't going to / 're not going to</span>
          <span
            ><NoteMark sentence="They aren't going to win." :marks="[]" /><span class="translation"
              >他們不會贏。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">口語常用縮寫。</p>
    </NoteSlide>
    <NoteSlide title="there is not going to be">
      <div class="rows is-labeled">
        <div>
          <span class="term">例句</span>
          <span
            ><NoteMark sentence="There isn't going to be a party this year." :marks="[]" /><span
              class="translation"
              >今年不會辦派對。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">there is not going to be 加名詞，表示某樣東西不會存在。</p>
    </NoteSlide>
    <NoteSlide title="going 後面要有 to，再接原形動詞" mark="going">
      <NoteFix
        wrong="I'm not going go to the meeting."
        right="I'm not going to go to the meeting."
        :fix="['to']"
      />
    </NoteSlide>
    <NoteSlide title="be going to 的否定用 be 動詞加 not，不用 don't" mark="not">
      <NoteFix wrong="I don't going to go." right="I'm not going to go." :fix="['I\'m not']" />
    </NoteSlide>
    <NoteSlide title="I am not 縮寫成 I'm not" mark="I am not">
      <NoteFix wrong="I amn't going to help." right="I'm not going to help." :fix="['I\'m not']" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
