<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-form-negative-826, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="否定句是主詞加 haven't，再接過去分詞" mark="haven't decided">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'We', role: '主詞' },
          { t: 'haven\'t decided', role: 'haven\'t + 過去分詞', kind: 'key', ring: true },
          { t: 'where to go', role: '受詞' },
          { t: 'yet.', role: '到現在還沒', kind: 'dim' },
        ]"
      />
      <p class="translation">我們還沒決定要去哪裡。</p>
      <p class="remark">他們討論了好幾個禮拜，還沒有結果。</p>
    </NoteSlide>

    <NoteSlide title="主詞可以是代名詞或名詞" mark="We">
      <div class="rows is-labeled">
        <div>
          <span class="term">代名詞</span>
          <span
            ><NoteMark
              sentence="My friends had a baby girl last week. They haven't chosen a name for her."
              :marks="['They', 'haven\'t']"
            /><span class="translation">我朋友上禮拜生了一個女兒。他們還沒幫她取名字。</span></span
          >
        </div>
        <div>
          <span class="term">名詞</span>
          <span
            ><NoteMark
              sentence="Business is slow at the moment. The company hasn't hired anyone new."
              :marks="['The company', 'hasn\'t']"
            /><span class="translation">最近生意很差。公司沒有僱用新人。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="否定句常加 yet、since、never" mark="yet.">
      <div class="rows is-labeled">
        <div>
          <span class="term">yet</span>
          <span
            ><NoteMark sentence="We haven't booked the flights yet." :marks="['yet.']" /><span
              class="translation"
              >我們還沒訂機票。</span
            ></span
          >
        </div>
        <div>
          <span class="term">since</span>
          <span
            ><NoteMark
              sentence="My uncle is still in shock. He hasn't spoken to anyone since the accident."
              :marks="['since']"
            /><span class="translation"
              >我叔叔還沒從驚嚇中恢復。他從那次意外以後就沒跟任何人說過話。</span
            ></span
          >
        </div>
        <div>
          <span class="term">never</span>
          <span
            ><NoteMark sentence="I've never ridden a motorbike." :marks="['never']" /><span
              class="translation"
              >我從來沒騎過機車。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="現在完成式的否定不用 didn't" mark="haven't">
      <NoteFix
        wrong="We didn't decided where to go yet."
        right="We haven't decided where to go yet."
        fix="haven't"
      />
    </NoteSlide>

    <NoteSlide title="never 已經是否定，不加 not" mark="haven't">
      <NoteFix
        wrong="My brother hasn't never eaten raw fish."
        right="My brother has never eaten raw fish."
        fix="has"
      />
    </NoteSlide>

    <NoteSlide title="否定句的 yet 放在句尾" mark="yet.">
      <NoteFix
        wrong="The council yet hasn't repaired the road."
        right="The council hasn't repaired the road yet."
        fix="yet."
      />
    </NoteSlide>

    <NoteSlide title="有過去的時間，用 didn't 加原形動詞" mark="haven't decided">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'My dad was busy with work.', kind: 'dim' },
          { t: 'We', kind: 'dim' },
          { t: 'didn\'t go', role: 'didn\'t + 原形動詞', kind: 'key', ring: true },
          { t: 'anywhere' },
          { t: 'last summer.', role: '過去的時間' },
        ]"
      />
      <p class="translation">我爸爸工作很忙。我們去年夏天哪裡都沒去。</p>
    </NoteSlide>

    <NoteSlide title="haven't 加名詞的意思是沒有，現在很少用" mark="haven't">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I can\'t pay for the taxi.', kind: 'dim' },
          { t: 'I', kind: 'dim' },
          { t: 'haven\'t', role: '沒有', kind: 'key', ring: true },
          { t: 'any money.', role: '名詞' },
        ]"
      />
      <p class="translation">我付不了計程車錢。我沒有錢。</p>
    </NoteSlide>

    <NoteSlide title="still 強調等了很久" mark="haven't decided">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'We\'ve talked about the trip for months.', kind: 'dim' },
          { t: 'We', kind: 'dim' },
          { t: 'still', role: '等了很久', kind: 'key', ring: true },
          { t: 'haven\'t decided.', kind: 'dim' },
        ]"
      />
      <p class="translation">我們談這趟旅行談了好幾個月。我們到現在還沒決定。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
