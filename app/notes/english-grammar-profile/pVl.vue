<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// focus-form-use-it-be-adjective-that-clause, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between
// two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="It 先佔主詞的位置，that 子句是真正的主詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'It', role: '形式主詞', kind: 'key' },
          { t: '\'s', role: 'be' },
          { t: 'great', role: '形容詞', kind: 'key' },
          { t: 'that', role: 'that' },
          { t: 'you\'ve got a new job!', role: '子句', kind: 'key' },
        ]"
      />
      <p class="translation">你找到新工作了，太好了！</p>
    </NoteSlide>

    <NoteSlide title="形容詞說出說話的人對那件事的評價" mark="great">
      <div class="rows is-labeled">
        <div>
          <span class="term">感受</span>
          <span
            ><NoteMark
              sentence="It's sad that your sister has to move away."
              :marks="['sad']"
            /><span class="translation">你姊姊得搬走，真令人難過。</span></span
          >
        </div>
        <div>
          <span class="term">真假</span>
          <span
            ><NoteMark sentence="It's true that the hotel is a bit old." :marks="['true']" /><span
              class="translation"
              >那家飯店是有點舊，這是真的。</span
            ></span
          >
        </div>
        <div>
          <span class="term">可能</span>
          <span
            ><NoteMark
              sentence="It's likely that the train will be late."
              :marks="['likely']"
            /><span class="translation">火車很可能會誤點。</span></span
          >
        </div>
        <div>
          <span class="term">重要</span>
          <span
            ><NoteMark
              sentence="It's important that you feel happy at work."
              :marks="['important']"
            /><span class="translation">你在工作上覺得開心，這很重要。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="It's true that 先承認一件事，再用 but 說出不同的看法">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'It\'s true that', role: '承認', kind: 'key' },
          { t: 'some of the shows are funny,', kind: 'dim' },
          { t: 'but', role: '不同的看法', kind: 'key' },
          { t: 'the rest are boring.', kind: 'dim' },
        ]"
      />
      <p class="translation">有些節目是很好笑沒錯，但其他的都很無聊。</p>
    </NoteSlide>

    <NoteSlide title="口語常省略 that，意思不變" mark="that">
      <div class="rows is-labeled">
        <div>
          <span class="term">有 that</span>
          <span
            ><NoteMark sentence="It's lucky that you called." :marks="['that']" /><span
              class="translation"
              >幸好你打了電話來。</span
            ></span
          >
        </div>
        <div>
          <span class="term">沒有 that</span>
          <span
            ><NoteMark sentence="It's lucky you were at home." :marks="['lucky you']" /><span
              class="translation"
              >幸好你在家。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="that 子句放在後面時，前面要有 It" mark="It's">
      <NoteFix
        wrong="Is great that you've got a new job."
        right="It's great that you've got a new job."
        fix="It's"
      />
    </NoteSlide>

    <NoteSlide title="sure 描述人的想法，It's 後面用 certain">
      <NoteFix
        wrong="It's sure that he will win."
        right="It's certain that he will win."
        fix="certain"
      />
    </NoteSlide>

    <NoteSlide title="that 後面接完整的子句，動詞前面不加 to">
      <NoteFix
        wrong="It's important that you to get enough sleep."
        right="It's important that you get enough sleep."
        fix="you get"
      />
    </NoteSlide>

    <NoteSlide title="完整的子句用 that 帶出來，不用 what" mark="that">
      <NoteFix
        wrong="It's clear what he is lying."
        right="It's clear that he is lying."
        fix="that"
      />
    </NoteSlide>

    <NoteSlide title="to 後面直接接動詞，沒有主詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'It\'s great', kind: 'dim' },
          { t: 'to see', role: 'to + 原形動詞', kind: 'key' },
          { t: 'you again.', kind: 'dim' },
        ]"
      />
      <p class="translation">再見到你真好。</p>
    </NoteSlide>

    <NoteSlide title="人當主詞時，形容詞說出這個人的想法">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I\'m sure', role: '人 + be + 形容詞', kind: 'key' },
          { t: 'that he will win.', kind: 'dim' },
        ]"
      />
      <p class="translation">我確定他會贏。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
