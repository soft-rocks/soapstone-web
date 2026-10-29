<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-use-recent-past-829, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="現在完成式加 just，說剛發生的事" mark="just">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I\'ve', role: '主詞 + have' },
          { t: 'just', role: '剛剛', kind: 'key', ring: true },
          { t: 'received', role: '過去分詞', kind: 'key' },
          { t: 'your email.', role: '受詞' },
        ]"
      />
      <p class="translation">我剛收到你的電子郵件。</p>
      <p class="remark">說話者正在讀這封信，也正在回覆。</p>
    </NoteSlide>

    <NoteSlide title="不加 just 也可以，結果到現在還在" mark="received">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'I can\'t come to the party.', kind: 'dim' },
          { t: 'My mother', kind: 'dim' },
          { t: 'has broken', role: 'has + 過去分詞', kind: 'key', ring: true },
          { t: 'her right leg.', kind: 'dim' },
        ]"
      />
      <p class="translation">我不能去派對。我媽媽右腳骨折了。</p>
      <p class="remark">媽媽的腳現在還打著石膏，不能走路。</p>
    </NoteSlide>

    <NoteSlide title="just 放在 have 和過去分詞中間" mark="I've just">
      <NoteFix
        wrong="I just have received your email."
        right="I've just received your email."
        fix="I've just"
      />
    </NoteSlide>

    <NoteSlide title="有過去的時間點，用過去簡單式" mark="received">
      <NoteFix
        wrong="I've just received your email two days ago."
        right="I received your email two days ago."
        fix="received"
      />
    </NoteSlide>

    <NoteSlide title="has just 後面接過去分詞" mark="received">
      <NoteFix
        wrong="Your mum has just leave for the station."
        right="Your mum has just left for the station."
        fix="left"
      />
    </NoteSlide>

    <NoteSlide title="美式英語常用 just 加過去簡單式" mark="just">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Can I call you back?', kind: 'dim' },
          { t: 'I', kind: 'dim' },
          { t: 'just got', role: 'just + 過去式', kind: 'key', ring: true },
          { t: 'home.', kind: 'dim' },
        ]"
      />
      <p class="translation">我可以晚點回電給你嗎？我剛到家。</p>
    </NoteSlide>

    <NoteSlide title="just now 放在句尾，接過去簡單式" mark="just">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Your sister', kind: 'dim' },
          { t: 'called', role: '過去簡單式' },
          { t: 'just now.', role: '剛才', kind: 'key', ring: true },
          { t: 'She wants to talk to you.', kind: 'dim' },
        ]"
      />
      <p class="translation">你姊姊剛剛打過電話來。她想跟你說話。</p>
    </NoteSlide>

    <NoteSlide title="說經驗的現在完成式，說發生過幾次" mark="received">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I\'m careful on the ski slope.', kind: 'dim' },
          { t: 'I\'ve broken my leg', kind: 'dim' },
          { t: 'twice.', role: '次數', kind: 'key', ring: true },
        ]"
      />
      <p class="translation">我在滑雪道上很小心。我的腳斷過兩次。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
