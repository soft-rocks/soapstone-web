<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// verbs-form-prepositional-verb-stranded-preposition, as slides, in the order of content.md.
// One point per slide: the title names it, the diagram shows it, and `mark` circles the
// matching words of the note's sentence. Keep the parts of one sentence on one line: Vue
// drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="受詞移到前面，介系詞留在句尾" mark="which">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'There is', kind: 'dim' },
          { t: 'one difficulty', role: 'which 指的名詞' },
          { t: 'which', role: '受詞', kind: 'key', ring: true },
          { t: 'we should', kind: 'dim' },
          { t: 'deal', role: '動詞', kind: 'key' },
          { t: 'with.', role: '介系詞', kind: 'key' },
        ]"
      />
      <p class="translation">有一個難題是我們應該處理的。</p>
      <p class="remark">一般的語序是 <code>deal with one difficulty</code>。</p>
    </NoteSlide>

    <NoteSlide title="關係子句、wh 問句和 wh 子句的介系詞都可以留在句尾" mark="with">
      <div class="rows is-labeled">
        <div>
          <span class="term">關係子句</span>
          <span
            ><NoteMark
              sentence="This is the job which I applied for."
              :marks="['which', 'for']"
            /><span class="translation">這就是我應徵的工作。</span></span
          >
        </div>
        <div>
          <span class="term">wh 問句</span>
          <span
            ><NoteMark sentence="Who are you waiting for?" :marks="['Who', 'for']" /><span
              class="translation"
              >你在等誰？</span
            ></span
          >
        </div>
        <div>
          <span class="term">wh 子句</span>
          <span
            ><NoteMark
              sentence="I don't know who this bag belongs to."
              :marks="['who', 'to']"
            /><span class="translation">我不知道這個包包是誰的。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="to 不定詞和被動句的介系詞也留在後面" mark="with">
      <div class="rows is-labeled">
        <div>
          <span class="term">名詞 + to 不定詞</span>
          <span
            ><NoteMark
              sentence="I need someone to talk to."
              :marks="['someone', 'to talk to']"
            /><span class="translation">我需要一個可以說話的人。</span></span
          >
        </div>
        <div>
          <span class="term">形容詞 + to 不定詞</span>
          <span
            ><NoteMark
              sentence="This music is easy to listen to."
              :marks="['easy to listen to']"
            /><span class="translation">這種音樂聽起來很輕鬆。</span></span
          >
        </div>
        <div>
          <span class="term">被動</span>
          <span
            ><NoteMark
              sentence="The problem was dealt with quickly."
              :marks="['was dealt with']"
            /><span class="translation">這個問題很快就處理好了。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="正式的語序把介系詞放在 which 或 whom 前面" mark="which">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'There is one difficulty', kind: 'dim' },
          { t: 'with which', role: '介系詞 + which', kind: 'key', ring: true },
          { t: 'we should deal.', kind: 'dim' },
        ]"
      />
      <p class="translation">有一個難題是我們應該處理的。</p>
      <p class="remark">這個語序比較正式，常用在書面。</p>
    </NoteSlide>

    <NoteSlide title="受詞移到前面以後，介系詞後面不再放受詞" mark="with">
      <NoteFix
        wrong="This is the flat which I told you about it."
        right="This is the flat which I told you about."
        fix="about"
      />
    </NoteSlide>

    <NoteSlide title="留在句尾的介系詞不能省略" mark="with">
      <NoteFix wrong="Who are you waiting?" right="Who are you waiting for?" fix="for" />
    </NoteSlide>

    <NoteSlide title="介系詞移到前面時用 which，不用 that" mark="which">
      <NoteFix wrong="the job for that I applied" right="the job for which I applied" fix="which" />
    </NoteSlide>

    <NoteSlide title="介系詞移到前面時用 whom，不用 who" mark="which">
      <NoteFix wrong="the woman with who I work" right="the woman with whom I work" fix="whom" />
    </NoteSlide>

    <NoteSlide title="片語介系詞動詞的小品詞和介系詞都留在句尾" mark="with.">
      <NoteMark sentence="She's someone I look up to." :marks="['up to']" />
      <p class="translation">她是我尊敬的人。</p>
    </NoteSlide>

    <NoteSlide title="說地方時，關係子句可以用 where" mark="which">
      <NoteMark sentence="This is the town where I live." :marks="['where']" />
      <p class="translation">這是我住的城鎮。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
