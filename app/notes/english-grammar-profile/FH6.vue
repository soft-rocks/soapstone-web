<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// present-use-politeness, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="I'm asking 讓請求聽起來比較客氣">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I\'m', role: '主詞 + be' },
          { t: 'asking', role: '動詞-ing', kind: 'key', ring: true },
          { t: 'permission', role: '受詞' },
          { t: 'to be excused from work for at least three days.', kind: 'dim' },
        ]"
      />
      <p class="translation">我想請求准假，至少請三天。</p>
    </NoteSlide>
    <NoteSlide title="hope、want 改用進行式，話比較不直接" mark="asking">
      <div class="rows is-labeled">
        <div>
          <span class="term">直接</span>
          <span
            ><NoteMark sentence="I hope you can come." :marks="['hope']" /><span class="translation"
              >我希望你能來。</span
            ></span
          >
        </div>
        <div>
          <span class="term">委婉</span>
          <span
            ><NoteMark sentence="I'm hoping you can come." :marks="['I\'m', 'hoping']" /><span
              class="translation"
              >我在想，你要是能來就好了。</span
            ></span
          >
        </div>
        <div>
          <span class="term">直接</span>
          <span
            ><NoteMark sentence="I want to talk to you about my salary." :marks="['want']" /><span
              class="translation"
              >我要跟你談我的薪水。</span
            ></span
          >
        </div>
        <div>
          <span class="term">委婉</span>
          <span
            ><NoteMark
              sentence="I'm wanting to talk to you about my salary."
              :marks="['I\'m', 'wanting']"
            /><span class="translation">我想跟你談談我的薪水。</span></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="正式的信件常用 I'm hoping 和 I'm wondering" mark="asking">
      <div class="rows is-labeled">
        <div>
          <span class="term">hope</span>
          <span
            ><NoteMark sentence="We're hoping to hear from you soon." :marks="['hoping']" /><span
              class="translation"
              >我們希望能很快收到您的回音。</span
            ></span
          >
        </div>
        <div>
          <span class="term">wonder</span>
          <span
            ><NoteMark
              sentence="I'm wondering if you could check my essay."
              :marks="['wondering', 'if']"
            /><span class="translation">不知道你能不能幫我看一下我的作文。</span></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="wondering 後面接 if 子句" mark="asking">
      <NoteFix
        wrong="I'm wondering could you help me."
        right="I'm wondering if you could help me."
        :fix="['if', 'you']"
      />
    </NoteSlide>
    <NoteSlide title="hoping 後面接 that 子句，不接 if" mark="asking">
      <NoteFix
        wrong="We're hoping if you can join us."
        right="We're hoping that you can join us."
        :fix="['that']"
      />
    </NoteSlide>
    <NoteSlide title="現在進行式的 be 後面接動詞-ing" mark="asking">
      <NoteFix
        wrong="I'm ask for one more week to finish the report."
        right="I'm asking for one more week to finish the report."
        :fix="['asking']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
