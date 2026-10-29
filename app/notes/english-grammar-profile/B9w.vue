<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-suggestions-1224, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="could 加原形動詞提出建議，讓對方決定" mark="could">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'We', role: '主詞' },
          { t: 'could', role: '建議', kind: 'key', ring: true },
          { t: 'meet', role: '原形動詞', kind: 'key' },
          { t: 'in the nice cafe next to your house', role: '地點', kind: 'dim' },
          { t: 'and have', role: 'and + 原形動詞', kind: 'key' },
          { t: 'a coffee.', role: '受詞' },
        ]"
      />
      <p class="translation">我們可以約在你家旁邊那間不錯的咖啡館，喝杯咖啡。</p>
      <p class="remark">對方可以說好，也可以提別的地方。</p>
    </NoteSlide>

    <NoteSlide title="We could 一起做，You could 建議對方自己做" mark="We">
      <div class="rows is-labeled">
        <div>
          <span class="term">We could<br /><i>一起做</i></span>
          <span
            ><NoteMark sentence="We could watch a film at my place." :marks="['We could']" /><span
              class="translation"
              >我們可以來我家看電影。</span
            ></span
          >
        </div>
        <div>
          <span class="term">You could<br /><i>對方自己做</i></span>
          <span
            ><NoteMark sentence="You could take up yoga." :marks="['You could']" /><span
              class="translation"
              >你可以去學瑜伽。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="could 後面可以接兩個動作，用 and 連起來" mark="meet">
      <NoteMark
        sentence="We could meet in the nice cafe next to your house and have a coffee."
        :marks="['meet', 'have']"
      />
      <p class="remark"><code>meet</code> 和 <code>have</code> 都接在 <code>could</code> 後面。</p>
    </NoteSlide>

    <NoteSlide title="改約時間或地點，問 Could it be ...?" mark="could">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Could', kind: 'key', ring: true },
          { t: 'it', role: '主詞' },
          { t: 'be', role: 'be', kind: 'key' },
          { t: 'at 5.30 pm?', role: '時間' },
        ]"
      />
      <p class="translation">可以改到下午五點半嗎？</p>
    </NoteSlide>

    <NoteSlide title="句首加 Maybe 或 Perhaps，建議更客氣" mark="We could">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Maybe', role: 'Maybe 或 Perhaps', kind: 'key', ring: true, alts: ['Perhaps'] },
          { t: 'we could ask', role: '主詞 + could + 原形動詞' },
          { t: 'Lisa to join us.', kind: 'dim' },
        ]"
      />
      <p class="translation">也許我們可以找 Lisa 一起來。</p>
    </NoteSlide>

    <NoteSlide title="could 後面直接接原形動詞，不加 to" mark="meet">
      <NoteFix
        wrong="We could to meet at the station."
        right="We could meet at the station."
        fix="meet"
      />
    </NoteSlide>

    <NoteSlide title="could 後面的動詞不加 -ing" mark="meet">
      <NoteFix
        wrong="You could joining a running club."
        right="You could join a running club."
        fix="join"
      />
    </NoteSlide>

    <NoteSlide title="and 後面的動詞也用原形" mark="have">
      <NoteFix
        wrong="We could go to the beach and having a picnic."
        right="We could go to the beach and have a picnic."
        fix="have"
      />
    </NoteSlide>

    <NoteSlide title="should 認為這樣做才對，could 只是一個做法" mark="could">
      <div class="rows is-labeled">
        <div>
          <span class="term">should</span>
          <span
            ><NoteMark sentence="You should see a doctor." :marks="['should']" /><span
              class="translation"
              >你應該去看醫生。</span
            ></span
          >
        </div>
        <div>
          <span class="term">could</span>
          <span
            ><NoteMark sentence="You could take up yoga." :marks="['could']" /><span
              class="translation"
              >你可以去學瑜伽。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="Shall we 用問句問，We could 用直述句提" mark="We could">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Shall we', role: '問對方要不要一起做', kind: 'key', ring: true },
          { t: 'meet at seven?', kind: 'dim' },
        ]"
      />
      <p class="translation">我們七點見面好嗎？</p>
    </NoteSlide>

    <NoteSlide title="說過去能力的 could 不是建議" mark="could">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'My grandfather', kind: 'dim' },
          { t: 'could speak', role: '過去的能力', kind: 'key', ring: true },
          { t: 'three languages.', kind: 'dim' },
        ]"
      />
      <p class="translation">我爺爺會說三種語言。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
