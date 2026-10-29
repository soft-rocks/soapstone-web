<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adverbs-use-frequency-86, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="never 本身是否定，受詞用 anything">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'You', role: '主詞' },
          { t: 'never', role: '頻率副詞', kind: 'key' },
          { t: 'remember', role: '動詞' },
          { t: 'anything!', role: '受詞', kind: 'key' },
        ]"
      />
      <p class="translation">你老是什麼都不記得！</p>
    </NoteSlide>

    <NoteSlide title="頻率副詞放在 be 和助動詞後面" mark="never">
      <div class="rows is-labeled">
        <div>
          <span class="term">be 後面</span>
          <span
            ><NoteMark sentence="The bus is usually on time." :marks="['is usually']" /><span
              class="translation"
              >公車通常很準時。</span
            ></span
          >
        </div>
        <div>
          <span class="term">助動詞後面</span>
          <span
            ><NoteMark
              sentence="I can never find a parking space here."
              :marks="['can never']"
            /><span class="translation">我在這裡從來都找不到停車位。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="usually 是大部分的時候，often 是很多次" mark="never">
      <div class="rows is-labeled">
        <div>
          <span class="term">usually</span>
          <span
            ><NoteMark sentence="I usually take the train to work." :marks="['usually']" /><span
              class="translation"
              >我通常搭火車上班。</span
            ></span
          >
        </div>
        <div>
          <span class="term">often</span>
          <span
            ><NoteMark sentence="She often forgets her keys." :marks="['often']" /><span
              class="translation"
              >她常忘記帶鑰匙。</span
            ></span
          >
        </div>
        <div>
          <span class="term">never</span>
          <span
            ><NoteMark sentence="She never eats breakfast." :marks="['never']" /><span
              class="translation"
              >她從不吃早餐。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="weekly 這類副詞放在句尾">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'The magazine', role: '主詞', kind: 'dim' },
          { t: 'comes out', role: '動詞' },
          { t: 'weekly.', role: '頻率副詞', kind: 'key', alts: ['daily', 'monthly', 'yearly'] },
        ]"
      />
      <p class="translation">這本雜誌每週出刊。</p>
    </NoteSlide>

    <NoteSlide title="never 已經表示否定，不再加 don't" mark="never">
      <NoteFix wrong="I don't never eat meat." right="I never eat meat." fix="never" />
    </NoteSlide>

    <NoteSlide title="weekly 不放在動詞前面">
      <NoteFix wrong="We weekly clean the house." right="We clean the house weekly." fix="weekly" />
    </NoteSlide>

    <NoteSlide title="often 不放在動詞和受詞中間">
      <NoteFix
        wrong="I visit often my grandparents."
        right="I often visit my grandparents."
        fix="often"
      />
    </NoteSlide>

    <NoteSlide title="usually 放在 be 後面">
      <NoteFix
        wrong="The shop usually is open until nine."
        right="The shop is usually open until nine."
        fix="is usually"
      />
    </NoteSlide>

    <NoteSlide title="一句只用一個否定詞" mark="anything">
      <NoteFix wrong="He never says nothing." right="He never says anything." fix="anything" />
    </NoteSlide>

    <NoteSlide title="weekly 放在名詞前面時是形容詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">形容詞</span>
          <span
            ><NoteMark sentence="We have a weekly meeting." :marks="['weekly']" /><span
              class="translation"
              >我們每週開一次會。</span
            ></span
          >
        </div>
        <div>
          <span class="term">副詞</span>
          <span
            ><NoteMark
              sentence="We meet weekly to talk about the project."
              :marks="['weekly']"
            /><span class="translation">我們每週開會討論這個專案。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="問頻率用 How often">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'How often', role: '問頻率', kind: 'key' },
          { t: 'do you go to the gym?', kind: 'dim' },
        ]"
      />
      <p class="translation">你多久去一次健身房？</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
