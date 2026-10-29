<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// present-use-mental-process-verbs-880, as slides, in the order of content.md. One point per slide: the title names it,
// the rows show it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="understand 說心裡的狀態，用現在簡單式">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'totally', role: '副詞', kind: 'dim' },
          { t: 'understand', role: '心理動詞', kind: 'key', ring: true },
          { t: 'that you want to go somewhere with your friends.', kind: 'dim' },
        ]"
      />
      <p class="translation">我完全了解你想跟朋友一起去哪裡走走。</p>
    </NoteSlide>
    <NoteSlide title="這些動詞說記憶、相信和懷疑" mark="understand">
      <div class="rows is-labeled">
        <div>
          <span class="term">remember</span>
          <span
            ><NoteMark
              sentence="I remember her face, but not her name."
              :marks="['remember']"
            /><span class="translation">我記得她的臉，可是不記得她的名字。</span></span
          >
        </div>
        <div>
          <span class="term">believe</span>
          <span
            ><NoteMark sentence="Do you believe in ghosts?" :marks="['believe']" /><span
              class="translation"
              >你相信有鬼嗎？</span
            ></span
          >
        </div>
        <div>
          <span class="term">realise</span>
          <span
            ><NoteMark sentence="I realise this is difficult for you." :marks="['realise']" /><span
              class="translation"
              >我知道這對你來說很難。</span
            ></span
          >
        </div>
        <div>
          <span class="term">doubt</span>
          <span
            ><NoteMark sentence="I doubt he'll come." :marks="['doubt']" /><span class="translation"
              >我懷疑他會來。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="totally 和 really 放在心理動詞前面加強語氣" mark="totally">
      <div class="rows is-labeled">
        <div>
          <span class="term">totally</span>
          <span
            ><NoteMark sentence="I totally agree with you." :marks="['totally']" /><span
              class="translation"
              >我完全同意你。</span
            ></span
          >
        </div>
        <div>
          <span class="term">really</span>
          <span
            ><NoteMark
              sentence="I really don't understand this question."
              :marks="['really']"
            /><span class="translation">我真的看不懂這一題。</span></span
          >
        </div>
      </div>
    </NoteSlide>
    <NoteSlide title="心理動詞不用進行式" mark="understand">
      <NoteFix
        wrong="I'm understanding your problem."
        right="I understand your problem."
        :fix="['understand']"
      />
    </NoteSlide>
    <NoteSlide title="記得做過的事，remember 後面接動詞-ing" mark="understand">
      <NoteFix
        wrong="I remember to meet him at a party years ago."
        right="I remember meeting him at a party years ago."
        :fix="['meeting']"
      />
    </NoteSlide>
    <NoteSlide title="doubt 後面接子句" mark="understand">
      <NoteFix
        wrong="I doubt to finish on time."
        right="I doubt I'll finish on time."
        :fix="['I\'ll finish']"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
