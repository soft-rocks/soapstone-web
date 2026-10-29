<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-subject-it-for-first-person, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="it 加 be 動詞說自己是誰">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Hello, Mrs. Bishop.', role: '打招呼', kind: 'dim' },
          { t: 'It', role: 'It', kind: 'key' },
          { t: '\'s', role: 'be 動詞', kind: 'key' },
          { t: 'Clarisse.', role: '名字' },
        ]"
      />
      <p class="translation">Bishop 太太您好，我是 Clarisse。</p>
    </NoteSlide>

    <NoteSlide title="當面用 I'm，看不到用 It's" mark="It's">
      <div class="rows is-labeled">
        <div>
          <span class="term">當面</span>
          <span
            ><NoteMark
              sentence="Hello, I'm Clarisse. I'm your new student."
              :marks="['I\'m Clarisse']"
            /><span class="translation">您好，我是 Clarisse。我是您的新學生。</span></span
          >
        </div>
        <div>
          <span class="term">電話</span>
          <span
            ><NoteMark
              sentence="Hello, Mrs. Bishop. It's Clarisse."
              :marks="['It\'s Clarisse']"
            /><span class="translation">Bishop 太太您好，我是 Clarisse。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="常見的場合" mark="It's Clarisse">
      <div class="rows is-labeled">
        <div>
          <span class="term">電話</span>
          <span
            ><NoteMark sentence="Hi, Dad. It's me." :marks="['It\'s me']" /><span
              class="translation"
              >嗨，爸。是我。</span
            ></span
          >
        </div>
        <div>
          <span class="term">敲門</span>
          <span
            ><NoteMark sentence="It's Tom. Can I come in?" :marks="['It\'s Tom']" /><span
              class="translation"
              >我是 Tom。我可以進來嗎？</span
            ></span
          >
        </div>
        <div>
          <span class="term">信</span>
          <span
            ><NoteMark sentence="Dear Cris, it's me, Paarth." :marks="['it\'s me']" /><span
              class="translation"
              >親愛的 Cris，是我，Paarth。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="It's 後面接 me" mark="It's">
      <NoteFix wrong="Hi, Mum. It's my." right="Hi, Mum. It's me." fix="me" />
    </NoteSlide>

    <NoteSlide title="It's 要有撇號" mark="It's">
      <NoteFix
        wrong="Hello, Mrs. Bishop. Its Clarisse."
        right="Hello, Mrs. Bishop. It's Clarisse."
        fix="It's"
      />
    </NoteSlide>

    <NoteSlide title="主詞是 it，用 is" mark="It's">
      <NoteFix
        wrong="Hello, Mrs. Bishop. It am Clarisse."
        right="Hello, Mrs. Bishop. It is Clarisse."
        fix="is"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
