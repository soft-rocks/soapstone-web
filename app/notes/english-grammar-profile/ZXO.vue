<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-object-or-complement, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="動詞 + 不定代名詞" mark="invited everyone">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'I', kind: 'dim' },
          { t: 'invited', role: '動詞', kind: 'key' },
          { t: 'everyone', role: '不定代名詞', kind: 'key' },
          { t: 'in the school, …', kind: 'dim' },
        ]"
      />
      <p class="translation">我邀請了學校裡的每一個人……</p>
    </NoteSlide>

    <NoteSlide title="動詞後面" mark="everyone">
      <div class="rows is-labeled">
        <div>
          <span class="term">call</span>
          <span
            ><NoteMark sentence="I have to call someone." :marks="['call someone.']" /><span
              class="translation"
              >我得打個電話給一個人。</span
            ></span
          >
        </div>
        <div>
          <span class="term">know</span>
          <span
            ><NoteMark
              sentence="She knows everybody in the street."
              :marks="['knows everybody']"
            /><span class="translation">這條街上的人她都認識。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="介系詞後面">
      <div class="rows is-labeled">
        <div>
          <span class="term">from</span>
          <span
            ><NoteMark
              sentence="I borrowed this umbrella from somebody."
              :marks="['from somebody.']"
            /><span class="translation">這把傘是我跟別人借的。</span></span
          >
        </div>
        <div>
          <span class="term">to</span>
          <span
            ><NoteMark sentence="He said goodbye to everyone." :marks="['to everyone.']" /><span
              class="translation"
              >他跟大家道別。</span
            ></span
          >
        </div>
        <div>
          <span class="term">with</span>
          <span
            ><NoteMark
              sentence="I want to share this with someone."
              :marks="['with someone.']"
            /><span class="translation">我想跟一個人分享這個。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="everyone 後面不加 people" mark="everyone">
      <NoteFix
        wrong="I invited everyone people from my class."
        right="I invited everyone from my class."
        fix="everyone from"
      />
    </NoteSlide>

    <NoteSlide title="talk 後面加 to">
      <NoteFix
        wrong="I need to talk someone about my problem."
        right="I need to talk to someone about my problem."
        fix="talk to"
      />
    </NoteSlide>

    <NoteSlide title="誰給的：from">
      <NoteFix
        wrong="I got a nice card of somebody."
        right="I got a nice card from somebody."
        fix="from"
      />
    </NoteSlide>

    <NoteSlide title="every + 單數名詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I invited', kind: 'dim' },
          { t: 'every', role: 'every', kind: 'key' },
          { t: 'student', role: '單數名詞', kind: 'key' },
          { t: 'in my class.', kind: 'dim' },
        ]"
      />
      <p class="translation">我邀請了班上每一個學生。</p>
    </NoteSlide>

    <NoteSlide title="some people + 複數動詞" mark="some people didn't">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Some people', role: '複數', kind: 'key' },
          { t: 'don\'t like', role: '複數動詞', kind: 'key' },
          { t: 'parties.', kind: 'dim' },
        ]"
      />
      <p class="translation">有些人不喜歡派對。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
