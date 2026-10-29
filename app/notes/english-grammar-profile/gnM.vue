<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-subject-questions, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="問句的主格代名詞放在助動詞後面">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Can', role: '情態動詞' },
          { t: 'we', role: '主格代名詞', kind: 'key' },
          { t: 'have', role: '動詞' },
          { t: 'a chat?', role: '受詞', kind: 'dim' },
        ]"
      />
      <p class="translation">我們可以聊一下嗎？</p>
    </NoteSlide>

    <NoteSlide title="Yes / No 問句和疑問詞問句" mark="Can we">
      <div class="rows is-labeled">
        <div>
          <span class="term">Yes / No 問句</span>
          <span
            ><NoteMark sentence="Can I help you?" :marks="['Can I']" /><span class="translation"
              >需要幫忙嗎？</span
            ></span
          >
        </div>
        <div>
          <span class="term">疑問詞問句</span>
          <span
            ><NoteMark sentence="What do you think about that?" :marks="['do you']" /><span
              class="translation"
              >你覺得那件事怎麼樣？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="直述句和問句" mark="Can we">
      <div class="rows is-labeled">
        <div>
          <span class="term">直述句</span>
          <span
            ><NoteMark sentence="We can have a chat." :marks="['We can']" /><span
              class="translation"
              >我們可以聊一下。</span
            ></span
          >
        </div>
        <div>
          <span class="term">問句</span>
          <span
            ><NoteMark sentence="Can we have a chat?" :marks="['Can we']" /><span
              class="translation"
              >我們可以聊一下嗎？</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="主詞用主格" mark="we">
      <NoteFix wrong="Can us have a chat?" right="Can we have a chat?" fix="we" />
    </NoteSlide>

    <NoteSlide title="疑問詞後面要有助動詞" mark="Can">
      <NoteFix wrong="What you think about that?" right="What do you think about that?" fix="do" />
    </NoteSlide>

    <NoteSlide title="did 後面用原形" mark="have">
      <NoteFix wrong="Did they went to the party?" right="Did they go to the party?" fix="go" />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
