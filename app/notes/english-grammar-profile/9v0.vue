<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// pronouns-form-same-subject-and-object-plural, as slides, in the order of content.md. One point per slide: the title names it, the
// diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on
// separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="主詞和受詞是同一群人，受詞用反身代名詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'In the evening,', kind: 'dim' },
          { t: 'you', role: '主詞' },
          { t: 'can entertain', role: '動詞' },
          { t: 'yourselves', role: '反身代名詞', kind: 'key' },
          { t: 'by dancing or listening to music.', kind: 'dim' },
        ]"
      />
      <p class="translation">晚上你們可以跳跳舞或聽聽音樂，自己找點樂子。</p>
    </NoteSlide>

    <NoteSlide
      title="we 用 ourselves，複數的 you 用 yourselves，they 用 themselves"
      mark="yourselves"
    >
      <div class="rows is-labeled">
        <div><span class="term">we</span><span>ourselves</span></div>
        <div><span class="term">you（兩個人以上）</span><span>yourselves</span></div>
        <div><span class="term">they / 複數名詞</span><span>themselves</span></div>
      </div>
    </NoteSlide>

    <NoteSlide title="enjoy、help 常和反身代名詞一起用" mark="yourselves">
      <div class="rows is-labeled">
        <div>
          <span class="term">enjoy</span>
          <span
            ><NoteMark
              sentence="Thanks for inviting us. We really enjoyed ourselves at your party last night."
              :marks="['enjoyed ourselves']"
            /><span class="translation"
              >謝謝你邀請我們。我們昨晚在你的派對上玩得很開心。</span
            ></span
          >
        </div>
        <div>
          <span class="term">help</span>
          <span
            ><NoteMark
              sentence="Welcome to the party. The fridge is in the kitchen. Help yourselves to drinks, everyone."
              :marks="['Help yourselves']"
            /><span class="translation">歡迎來參加派對。冰箱在廚房。大家自己拿飲料喝。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="反身代名詞說對自己做，each other 說對彼此做" mark="yourselves">
      <div class="rows is-labeled">
        <div>
          <span class="term">反身代名詞</span>
          <span
            ><NoteMark
              sentence="The two drivers were very upset after the crash. They blamed themselves."
              :marks="['themselves']"
            /><span class="translation">車禍之後，那兩個駕駛都很難過。他們都怪自己。</span></span
          >
        </div>
        <div>
          <span class="term">each other</span>
          <span
            ><NoteMark
              sentence="The two drivers were very angry after the crash. They blamed each other."
              :marks="['each other']"
            /><span class="translation">車禍之後，那兩個駕駛都很生氣。他們互相責怪。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="受詞和主詞是同一群人，用 ourselves" mark="yourselves">
      <NoteFix
        wrong="A family moved in next door. We introduced us to the new neighbours."
        right="A family moved in next door. We introduced ourselves to the new neighbours."
        fix="ourselves"
      />
    </NoteSlide>

    <NoteSlide title="enjoy 要接受詞" mark="yourselves">
      <NoteFix
        wrong="The sun shone all week. We enjoyed a lot at the beach."
        right="The sun shone all week. We enjoyed ourselves a lot at the beach."
        fix="ourselves"
      />
    </NoteSlide>

    <NoteSlide title="正確的形式是 themselves">
      <NoteFix
        wrong="They had been playing in the mud. The kids washed theirselves before dinner."
        right="They had been playing in the mud. The kids washed themselves before dinner."
        fix="themselves"
      />
    </NoteSlide>

    <NoteSlide title="對兩個人以上說話，用 yourselves" mark="yourselves">
      <NoteFix
        wrong="The head teacher is visiting today. Children, please behave yourself."
        right="The head teacher is visiting today. Children, please behave yourselves."
        fix="yourselves."
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
