<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-affirmative-interrogative-with-modal-auxiliary-verbs, as slides, in the order of
// content.md. One point per slide: the title names it, the diagram shows it, and `mark` circles
// the matching words of the note's sentence. Keep the parts of one sentence on one line: Vue
// drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="情態動詞放到主詞前面就是問句" mark="Would you like">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Can', role: '情態動詞', kind: 'key', ring: true },
          { t: 'you', role: '主詞', kind: 'key' },
          { t: 'lend', role: '原形動詞' },
          { t: 'me twenty dollars until Friday?', kind: 'dim' },
        ]"
      />
      <p class="translation">你可以借我二十塊到星期五嗎？</p>
    </NoteSlide>

    <NoteSlide title="Can I 請求允許，Shall we 提議，Would you like 邀請" mark="Would you like">
      <div class="rows is-labeled">
        <div>
          <span class="term">Can I</span>
          <span
            ><NoteMark
              sentence="I don't have any cash with me. Can I pay for the tickets by card?"
              :marks="['Can I']"
            /><span class="translation">我身上沒有現金。票可以刷卡付嗎？</span></span
          >
        </div>
        <div>
          <span class="term">Shall we</span>
          <span
            ><NoteMark
              sentence="We're late. Shall we take a taxi instead of the bus?"
              :marks="['Shall we']"
            /><span class="translation">我們遲到了，我們改搭計程車好嗎？</span></span
          >
        </div>
        <div>
          <span class="term">Would you like</span>
          <span
            ><NoteMark
              sentence="The waiter took our empty plates. Would you like to see the dessert menu?"
              :marks="['Would you like']"
            /><span class="translation">服務生收走了我們的空盤子。你要看甜點菜單嗎？</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="情態動詞的疑問句不加 do" mark="Would you">
      <NoteFix
        wrong="Do you can read Japanese menus?"
        right="Can you read Japanese menus?"
        fix="Can you"
      />
    </NoteSlide>

    <NoteSlide title="情態動詞後面不加 to" mark="like to">
      <NoteFix
        wrong="Can I to bring my dog into the café?"
        right="Can I bring my dog into the café?"
        fix="bring"
      />
    </NoteSlide>

    <NoteSlide title="情態動詞後面的動詞不加 -s" mark="come">
      <NoteFix wrong="Can she speaks English?" right="Can she speak English?" fix="speak" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
