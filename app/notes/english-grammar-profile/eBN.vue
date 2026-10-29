<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-use-one-another-formal, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="one another 當介系詞的受詞" mark="one another">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'my two dogs', role: '主詞（複數）', kind: 'key' },
          { t: 'say to', role: '動詞 + 介系詞' },
          { t: 'one another', role: '介系詞的受詞', kind: 'key' },
        ]"
      />
      <p class="translation">我那兩隻狗彼此在說什麼。</p>
    </NoteSlide>

    <NoteSlide title="動詞的受詞和介系詞的受詞" mark="say to one another">
      <div class="rows is-labeled">
        <div>
          <span class="term">動詞的受詞</span>
          <span
            ><NoteMark
              sentence="New members can get to know one another at the welcome dinner."
              :marks="['know one another']"
            /><span class="translation">新成員可以在迎新晚宴上互相認識。</span></span
          >
        </div>
        <div>
          <span class="term">介系詞的受詞</span>
          <span
            ><NoteMark
              sentence="The members of the committee rarely agree with one another."
              :marks="['with one another']"
            /><span class="translation">委員會的成員很少意見一致。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="所有格 one another's 後面接名詞">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'The two scientists respected', kind: 'dim' },
          { t: 'one another\'s', role: '所有格', kind: 'key' },
          { t: 'work.', role: '名詞' },
        ]"
      />
      <p class="translation">那兩位科學家都尊重對方的研究。</p>
    </NoteSlide>

    <NoteSlide title="one another 比 each other 正式" mark="one another">
      <div class="rows is-labeled">
        <div>
          <span class="term">one another</span>
          <span
            ><NoteMark
              sentence="We have known one another for many years."
              :marks="['one another']"
            /><span class="translation">我們認識彼此很多年了。</span></span
          >
        </div>
        <div>
          <span class="term">each other</span>
          <span
            ><NoteMark sentence="We've known each other for years." :marks="['each other']" /><span
              class="translation"
              >我們認識好多年了。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="互相做的事，不用反身代名詞" mark="one another">
      <NoteFix
        wrong="At the end of the meeting, the two leaders thanked themselves."
        right="At the end of the meeting, the two leaders thanked one another."
        fix="one another."
      />
    </NoteSlide>

    <NoteSlide title="listen 後面先接 to" mark="to">
      <NoteFix
        wrong="The students listened one another carefully."
        right="The students listened to one another carefully."
        fix="to"
      />
    </NoteSlide>

    <NoteSlide title="discuss 後面直接接受詞">
      <NoteFix
        wrong="The members discussed about one another's ideas."
        right="The members discussed one another's ideas."
        fix="discussed"
      />
    </NoteSlide>

    <NoteSlide title="所有格寫成 one another's">
      <NoteFix
        wrong="The neighbours look after one anothers' gardens."
        right="The neighbours look after one another's gardens."
        fix="one another's"
      />
    </NoteSlide>

    <NoteSlide title="相互代名詞是 one another，不是 one other" mark="one another">
      <NoteFix
        wrong="Team members should support one other."
        right="Team members should support one another."
        fix="one another."
      />
    </NoteSlide>

    <NoteSlide title="themselves 指回主詞自己">
      <div class="rows is-labeled">
        <div>
          <span class="term">themselves</span>
          <span
            ><NoteMark
              sentence="The children enjoyed themselves at the party."
              :marks="['themselves']"
            /><span class="translation">孩子們在派對上玩得很開心。</span></span
          >
        </div>
        <div>
          <span class="term">one another</span>
          <span
            ><NoteMark
              sentence="The children helped one another at the party."
              :marks="['one another']"
            /><span class="translation">孩子們在派對上互相幫忙。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="one another 不當主詞，主詞用 each">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'We each', role: '主詞', kind: 'key' },
          { t: 'know what', kind: 'dim' },
          { t: 'the other', role: '對方', kind: 'key' },
          { t: 'wants.', kind: 'dim' },
        ]"
      />
      <p class="translation">我們都知道對方想要什麼。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
