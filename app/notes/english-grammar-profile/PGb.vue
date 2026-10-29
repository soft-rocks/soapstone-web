<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-use-closing, as slides, in the order of content.md. One point per slide: the title names
// it, the diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on separate
// lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="That's all 結束一封信" mark="That's all">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'That', role: '前面寫的內容', kind: 'key' },
          { t: '\'s all', role: '就這些了', kind: 'key' },
          { t: 'for now.', role: '以後再寫' },
        ]"
      />
      <p class="translation">今天就先寫到這裡。</p>
    </NoteSlide>

    <NoteSlide title="That's all 的說法" mark="That's all">
      <div class="rows is-labeled">
        <div>
          <span class="term">for now</span>
          <span
            ><NoteMark
              sentence="That's all for now. Write back soon!"
              :marks="['That\'s all for now.']"
            /><span class="translation">今天就先寫到這裡，快點回信喔！</span></span
          >
        </div>
        <div>
          <span class="term">I think</span>
          <span
            ><NoteMark
              sentence="Well, I think that's all. See you next week."
              :marks="['I think that\'s all.']"
            /><span class="translation">嗯，我想就這些了，下星期見。</span></span
          >
        </div>
        <div>
          <span class="term">I can tell you</span>
          <span
            ><NoteMark
              sentence="That's all I can tell you about my town."
              :marks="['That\'s all I can tell you']"
            /><span class="translation">我能告訴你的關於我家鄉的事就這些了。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="正式的信不用 That's all">
      <NoteWords
        :size="28"
        :parts="[{ t: 'I look forward to hearing from you.', role: '正式的信', kind: 'key' }]"
      />
      <p class="translation">期待您的回信。</p>
    </NoteSlide>

    <NoteSlide title="用 That's，不用 This's" mark="That's">
      <NoteFix wrong="This's all for now." right="That's all for now." fix="That's" />
    </NoteSlide>

    <NoteSlide title="that 後面要有 's" mark="That's">
      <NoteFix
        wrong="That all for now. Write soon!"
        right="That's all for now. Write soon!"
        fix="That's"
      />
    </NoteSlide>

    <NoteSlide title="that's 要有撇號" mark="That's">
      <NoteFix
        wrong="Thats all for today. Love, Emma"
        right="That's all for today. Love, Emma"
        fix="That's"
      />
    </NoteSlide>

    <NoteSlide title="That's it：比較口語">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'That\'s it', kind: 'key' },
          { t: 'for today.', kind: 'dim' },
          { t: 'See you tomorrow.', kind: 'dim' },
        ]"
      />
      <p class="translation">今天就到這裡，明天見。</p>
    </NoteSlide>

    <NoteSlide title="all that + 子句">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'All that I want', role: '主詞', kind: 'key' },
          { t: 'is a quiet weekend.', kind: 'dim' },
        ]"
      />
      <p class="translation">我只想要一個安靜的週末。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
