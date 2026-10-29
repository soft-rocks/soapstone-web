<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-use-if-it-were-to-infinitive, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between
// two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="if it were to 說一件不太會發生的未來的事" mark="were to">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'If it', role: '連接詞和主詞' },
          { t: 'were to fail,', role: 'were to + 原形動詞', kind: 'key' },
          { t: 'the company would lose millions.', role: '主要子句', kind: 'dim' },
        ]"
      />
      <p class="translation">萬一這個計畫失敗，公司會損失好幾百萬。</p>
      <p class="remark">
        <code>it</code> 指前面提過的東西。<code>it</code> 後面用 <code>were</code>，不用
        <code>is</code>。
      </p>
    </NoteSlide>

    <NoteSlide title="were to 後面接原形動詞，或接 to be + 過去分詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">原形動詞</span>
          <span
            ><NoteMark
              sentence="If it were to go bankrupt, production would stop."
              :marks="['were to go']"
            /><span class="translation">萬一供應商破產，生產就會停擺。</span></span
          >
        </div>
        <div>
          <span class="term">to be + 過去分詞<br /><i>被動</i></span>
          <span
            ><NoteMark
              sentence="If it were to be leaked, the company would face serious legal problems."
              :marks="['were to be leaked,']"
            /><span class="translation">萬一報告外洩，公司會面臨嚴重的法律問題。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="條件子句放在主要子句後面">
      <div class="rows is-labeled">
        <div>
          <span class="term">主要子句後面</span>
          <span
            ><NoteMark
              sentence="The project would need a much larger budget if it were to succeed."
              :marks="['if it were to succeed.']"
            /><span class="translation">這個計畫要成功的話，需要多得多的預算。</span></span
          >
        </div>
        <div>
          <span class="term">主要子句後面</span>
          <span
            ><NoteMark
              sentence="The government would antagonize farmers if it were to cut the subsidies."
              :marks="['if it were to cut']"
            /><span class="translation">如果政府削減補貼，就會激怒農民。</span></span
          >
        </div>
      </div>
      <p class="remark">條件子句放在後面時，前面不加逗號。</p>
    </NoteSlide>

    <NoteSlide title="主要子句也可以用 could 或 might">
      <div class="rows is-labeled">
        <div>
          <span class="term">could<br /><i>可以做到的事</i></span>
          <span
            ><NoteMark
              sentence="If it were to work, it could save thousands of lives."
              :marks="['could']"
            /><span class="translation">如果這種新藥有效，可能救活成千上萬的人。</span></span
          >
        </div>
        <div>
          <span class="term">might<br /><i>可能發生的事</i></span>
          <span
            ><NoteMark
              sentence="If it were to reach the coast, it might cause severe flooding."
              :marks="['might']"
            /><span class="translation">萬一暴風雨到了海岸，可能會造成嚴重的水災。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="原句：were to be published 是被動" mark="were to be published,">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'If it were to be published,', role: '條件子句（被動）', kind: 'key' },
          {
            t: 'the first issue would include a short introduction.',
            role: '主要子句',
            kind: 'dim',
          },
        ]"
      />
      <p class="translation">如果真的出版的話，第一期會有一篇簡短的介紹。</p>
      <p class="remark"><code>it</code> 指寫的人在籌劃的校刊。</p>
    </NoteSlide>

    <NoteSlide title="were 後面先接 to，再接原形動詞" mark="were to">
      <NoteFix
        wrong="The printer is old. If it were stop working, we would buy a new one."
        right="The printer is old. If it were to stop working, we would buy a new one."
        fix="to stop"
      />
    </NoteSlide>

    <NoteSlide title="主要子句用 would，不用 will">
      <NoteFix
        wrong="If it were to succeed, we will open three new branches."
        right="If it were to succeed, we would open three new branches."
        fix="would"
      />
    </NoteSlide>

    <NoteSlide title="would 只放在主要子句">
      <NoteFix
        wrong="If it would break down, we would miss the deadline."
        right="If it were to break down, we would miss the deadline."
        fix="were to"
      />
    </NoteSlide>

    <NoteSlide title="If it were + 形容詞或名詞，說現在不是事實的情況">
      <div class="rows is-labeled">
        <div>
          <span class="term">were + 形容詞</span>
          <span
            ><NoteMark
              sentence="If it were cheaper, I would buy it."
              :marks="['were cheaper,']"
            /><span class="translation">如果它便宜一點，我就會買。</span></span
          >
        </div>
        <div>
          <span class="term">were + 名詞</span>
          <span
            ><NoteMark
              sentence="If it were my car, I would sell it."
              :marks="['were my car,']"
            /><span class="translation">如果那是我的車，我會把它賣掉。</span></span
          >
        </div>
      </div>
      <p class="remark"><code>If it were to</code> 說未來的事。</p>
    </NoteSlide>

    <NoteSlide title="Were it to 省略 if，意思一樣，語氣更正式">
      <div class="rows is-labeled">
        <div>
          <span class="term">Were it to</span>
          <span
            ><NoteMark
              sentence="The factory is losing money. Were it to close, the whole town would suffer."
              :marks="['Were it to']"
            /><span class="translation">這間工廠在虧錢。萬一關廠，整個鎮都會受影響。</span></span
          >
        </div>
        <div>
          <span class="term">Were it to</span>
          <span
            ><NoteMark
              sentence="Were it to snow on the day, the race would be postponed."
              :marks="['Were it to']"
            /><span class="translation">萬一當天下雪，比賽會延期。</span></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
