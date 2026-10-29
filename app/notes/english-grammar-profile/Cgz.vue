<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adverbs-form-frequency-mid-position, as slides, in the order of content.md. One point per
// slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="頻率副詞放在主詞和動詞中間">
      <NoteWords
        :size="30"
        :parts="[
          { t: 'She', role: '主詞' },
          { t: 'sometimes', role: '頻率副詞', kind: 'key' },
          { t: 'goes', role: '動詞' },
          { t: 'to the cinema.', role: '地點', kind: 'dim' },
        ]"
      />
      <p class="translation">她有時候會去看電影。</p>
    </NoteSlide>

    <NoteSlide title="be 和助動詞放在頻率副詞前面" mark="sometimes">
      <div class="rows is-labeled">
        <div>
          <span class="term">be 後面</span>
          <span
            ><NoteMark
              sentence="My grandparents are always happy to see us."
              :marks="['are always']"
            /><span class="translation">我爺爺奶奶看到我們總是很高興。</span></span
          >
        </div>
        <div>
          <span class="term">助動詞後面</span>
          <span
            ><NoteMark sentence="I can never find my keys." :marks="['can never find']" /><span
              class="translation"
              >我老是找不到鑰匙。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="各個頻率副詞的意思">
      <div class="rows is-labeled">
        <div>
          <span class="term">always</span>
          <span>每一次都這樣</span>
        </div>
        <div>
          <span class="term">usually</span>
          <span>大部分的時候，也可以放在句首</span>
        </div>
        <div>
          <span class="term">often</span>
          <span>常常，也可以放在句首</span>
        </div>
        <div>
          <span class="term">sometimes</span>
          <span>有時候，也可以放在句首</span>
        </div>
        <div>
          <span class="term">never</span>
          <span>從來不</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="一個頻率副詞修飾後面的幾個動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'In my free time I', role: '主詞', kind: 'dim' },
          { t: 'always', role: '頻率副詞', kind: 'key' },
          { t: 'listen to music,', role: '動詞' },
          { t: 'watch TV', role: '動詞' },
          { t: 'and tidy my room.', role: 'and + 動詞' },
        ]"
      />
      <p class="translation">有空的時候，我都會聽音樂、看電視、整理房間。</p>
    </NoteSlide>

    <NoteSlide title="疑問句和否定句的頻率副詞放在主要動詞前面" mark="sometimes goes">
      <div class="rows is-labeled">
        <div>
          <span class="term">疑問句</span>
          <span
            ><NoteMark
              sentence="Do you usually walk to school?"
              :marks="['you usually walk']"
            /><span class="translation">你通常走路上學嗎？</span></span
          >
        </div>
        <div>
          <span class="term">否定句</span>
          <span
            ><NoteMark sentence="We don't often eat out." :marks="['don\'t often eat']" /><span
              class="translation"
              >我們不常外食。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="頻率副詞放在主要動詞前面" mark="sometimes goes">
      <NoteFix
        wrong="I listen always to music in the car."
        right="I always listen to music in the car."
        fix="always listen"
      />
    </NoteSlide>

    <NoteSlide title="頻率副詞放在助動詞後面">
      <NoteFix
        wrong="I never can sleep on planes."
        right="I can never sleep on planes."
        fix="can never sleep"
      />
    </NoteSlide>

    <NoteSlide title="疑問句的頻率副詞放在主詞後面">
      <NoteFix
        wrong="Do always you take the bus?"
        right="Do you always take the bus?"
        fix="you always take"
      />
    </NoteSlide>

    <NoteSlide title="表示從來不用 never">
      <NoteFix
        wrong="I always don't eat breakfast."
        right="I never eat breakfast."
        fix="never eat"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
