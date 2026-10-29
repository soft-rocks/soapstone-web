<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-regret-1232, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞是說話者自己，could have 表示後悔" mark="could have">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'I', role: '說話者自己', kind: 'key', ring: true },
          { t: 'could have', role: 'could have', kind: 'key' },
          { t: 'listened', role: '過去分詞', kind: 'key' },
          { t: 'more', role: '程度' },
          { t: 'to my team members.', role: 'listen to 的受詞' },
        ]"
      />
      <p class="translation">我本來可以多聽聽團隊成員的意見的。</p>
      <p class="remark">說話者當時做得到，卻沒有多聽別人的意見。</p>
    </NoteSlide>

    <NoteSlide title="have 後面接過去分詞，或 been 加形容詞" mark="listened">
      <div class="rows is-labeled">
        <div>
          <span class="term">過去分詞</span>
          <span
            ><NoteMark sentence="I could have stayed in touch with him." :marks="['stayed']" /><span
              class="translation"
              >我本來可以跟他保持聯絡的。</span
            ></span
          >
        </div>
        <div>
          <span class="term">been + 形容詞</span>
          <span
            ><NoteMark
              sentence="I could have been more patient."
              :marks="['been', 'patient']"
            /><span class="translation">我本來可以更有耐心一點的。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="後面接 but，說出當時沒做的原因" mark="could have">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I could have asked,', role: 'could have + 過去分詞' },
          { t: 'but I was too shy.', role: '沒做的原因', kind: 'key', ring: true },
        ]"
      />
      <p class="translation">我本來可以問的，可是我太害羞了。</p>
    </NoteSlide>

    <NoteSlide title="當時想做卻做不到，用 wish 或 If only 加 could have" mark="could have">
      <div class="rows is-labeled">
        <div>
          <span class="term">I wish I could have<br /><i>想做，卻做不到</i></span>
          <span
            ><NoteMark
              sentence="I wish I could have come to your party."
              :marks="['wish', 'could have come']"
            /><span class="translation">真希望我當時能去你的派對。</span></span
          >
        </div>
        <div>
          <span class="term">If only I could have</span>
          <span
            ><NoteMark sentence="If only I could have spoken to him." :marks="['If only']" /><span
              class="translation"
              >要是我當時能跟他說上話就好了。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="have 後面接過去分詞，不接原形動詞" mark="listened">
      <NoteFix
        wrong="I could have listen more."
        right="I could have listened more."
        fix="listened"
      />
    </NoteSlide>

    <NoteSlide title="wish 後面用 could，不用 can" mark="could">
      <NoteFix wrong="I wish I can have stayed." right="I wish I could have stayed." fix="could">
        <code>can</code> 後面不接 <code>have</code> 和過去分詞。
      </NoteFix>
    </NoteSlide>

    <NoteSlide title="說過去的事，wish I could 後面接 have 和過去分詞" mark="could have">
      <NoteFix
        wrong="I wish I could stayed longer."
        right="I wish I could have stayed longer."
        fix="have stayed"
      >
        <code>I wish I could stay longer</code> 也對，說的是現在的希望。
      </NoteFix>
    </NoteSlide>

    <NoteSlide title="should have 是該做的事，could have 是更好的選擇" mark="could have">
      <NoteFork
        stem="I"
        :branches="[
          {
            head: 'should have',
            rest: 'listened to you',
            meaning: '那是自己該做的事',
            zh: '我早該聽你的。',
          },
          {
            head: 'could have',
            rest: 'stayed in touch with him',
            meaning: '當時有更好的選擇',
            zh: '我本來可以跟他保持聯絡的。',
          },
        ]"
      />
    </NoteSlide>

    <NoteSlide title="主詞換成別人，could have 就是批評" mark="I">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'You', role: '別人', kind: 'key', ring: true },
          { t: 'could have told', role: 'could have + 過去分詞' },
          { t: 'me.', kind: 'dim' },
        ]"
      />
      <p class="translation">你本來可以跟我說的。</p>
    </NoteSlide>

    <NoteSlide title="少了 have，說的就是現在或未來的事" mark="have">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I', kind: 'dim' },
          { t: 'could help', role: 'could + 原形動詞', kind: 'key', ring: true },
          { t: 'you', role: '受詞' },
          { t: 'tomorrow.', role: '未來' },
        ]"
      />
      <p class="translation">我明天可以幫你。</p>
      <p class="remark">說話者在提議。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
