<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// future-use-obligations-and-instructions-with-be-to, as slides, in the order of content.md.
// One point per slide: the title names it, the diagram shows it, and `mark` circles the
// matching words of the note's sentence. Keep the parts of one sentence on one line: Vue drops
// the whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="be to 說主詞必須做的事" mark="are to have">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'They', role: '主詞', kind: 'dim' },
          { t: 'are to', role: '必須', kind: 'key', ring: true },
          { t: 'have', role: '原形動詞', kind: 'key' },
          { t: 'their passports with them.', kind: 'dim' },
        ]"
      />
      <p class="translation">他們必須隨身攜帶護照。</p>
      <p class="remark">隨身帶護照是學校的規定。</p>
    </NoteSlide>

    <NoteSlide title="轉述規定時，主詞常是第三人稱" mark="They">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'All visitors', role: '第三人稱', kind: 'key', ring: true },
          { t: 'are to sign in', role: 'be to + 原形動詞' },
          { t: 'at the front desk.', kind: 'dim' },
        ]"
      />
      <p class="translation">所有訪客都必須在櫃檯登記。</p>
    </NoteSlide>

    <NoteSlide title="主詞用 you 時，be to 是直接的指示" mark="are to">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'You\'re to', role: 'you + be to', kind: 'key', ring: true },
          { t: 'wait here', role: '原形動詞' },
          { t: 'until I come back.', kind: 'dim' },
        ]"
      />
      <p class="translation">你在這裡等我回來。</p>
    </NoteSlide>

    <NoteSlide title="否定的 be not to 表示不准" mark="are to">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'The children', kind: 'dim' },
          { t: 'are not to', role: '不准', kind: 'key', ring: true },
          { t: 'play near the river.', role: '原形動詞' },
        ]"
      />
      <p class="translation">孩子們不准在河邊玩。</p>
    </NoteSlide>

    <NoteSlide title="被動 to be 加過去分詞說事情必須被怎麼處理" mark="are to have">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'These forms', role: '主詞', kind: 'dim' },
          { t: 'are to', role: 'be to' },
          { t: 'be returned', role: 'be + 過去分詞', kind: 'key', ring: true },
          { t: 'by Friday.', kind: 'dim' },
        ]"
      />
      <p class="translation">這些表格必須在星期五前交回。</p>
    </NoteSlide>

    <NoteSlide title="must 是說話者定的規定，be to 是轉述或正式的指示" mark="are to">
      <div class="rows is-labeled">
        <div>
          <span class="term">must<br /><i>說話者定的</i></span>
          <span
            ><NoteMark sentence="You must be home by ten." :marks="['must']" /><span
              class="translation"
              >你十點前一定要到家。</span
            ></span
          >
        </div>
        <div>
          <span class="term">be to<br /><i>轉述、正式指示</i></span>
          <span
            ><NoteMark sentence="You are to be home by ten." :marks="['are to']" /><span
              class="translation"
              >你十點前要到家。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="to 後面接原形動詞" mark="have">
      <NoteFix
        wrong="You are to leaving your bags at the door."
        right="You are to leave your bags at the door."
        fix="leave"
      />
    </NoteSlide>

    <NoteSlide title="被動是 to be 加過去分詞" mark="are to">
      <NoteFix
        wrong="All phones are to switched off."
        right="All phones are to be switched off."
        fix="be switched"
      />
    </NoteSlide>

    <NoteSlide title="not 放在 be 後面、to 前面" mark="are to">
      <NoteFix
        wrong="Students are to not use phones in class."
        right="Students are not to use phones in class."
        fix="not to"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
