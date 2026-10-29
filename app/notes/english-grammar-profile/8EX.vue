<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-subject-ellipsis, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="輕鬆的信省略主詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Can\'t wait', role: '動詞（省略 I）', kind: 'key' },
          { t: 'to hear', role: 'to + 原形動詞' },
          { t: 'about your exam.', role: '補充', kind: 'dim' },
        ]"
      />
      <p class="translation">等不及想聽你說考試的事了。</p>
    </NoteSlide>

    <NoteSlide title="省略 I 和省略 it" mark="Can't wait">
      <div class="rows is-labeled">
        <div>
          <span class="term">省略 I</span>
          <span
            ><NoteMark
              sentence="Must rush now. I have to go out with Paul."
              :marks="['Must rush']"
            /><span class="translation">我得趕快走了。我要跟 Paul 出去。</span></span
          >
        </div>
        <div>
          <span class="term">省略 it</span>
          <span
            ><NoteMark
              sentence="A picnic on Sunday? Sounds great."
              :marks="['Sounds great']"
            /><span class="translation">星期天去野餐？聽起來很棒。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="輕鬆和正式" mark="Can't wait">
      <div class="rows is-labeled">
        <div>
          <span class="term">給朋友</span>
          <span
            ><NoteMark sentence="Got to go now. Write soon!" :marks="['Got to go']" /><span
              class="translation"
              >我得走了。快回信！</span
            ></span
          >
        </div>
        <div>
          <span class="term">正式的信</span>
          <span
            ><NoteMark
              sentence="I have to finish now. I look forward to your reply."
              :marks="['I have to']"
            /><span class="translation">我先寫到這裡。期待您的回覆。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="can't 後面接原形動詞" mark="Can't wait">
      <NoteFix wrong="Can't waits to see you." right="Can't wait to see you." fix="wait" />
    </NoteSlide>

    <NoteSlide title="sounds 後面接形容詞" mark="Can't wait">
      <NoteFix wrong="Sounds greatly." right="Sounds great." fix="great" />
    </NoteSlide>

    <NoteSlide title="must 後面不加 to" mark="Can't wait">
      <NoteFix wrong="Must to rush now." right="Must rush now." fix="Must rush" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
