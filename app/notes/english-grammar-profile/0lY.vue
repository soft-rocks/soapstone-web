<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// adverbs-use-time-95, as slides, in the order of content.md. One point per slide: the title
// names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="immediately 放在一般動詞前面，表示馬上">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I', role: '主詞', kind: 'dim' },
          { t: 'immediately', role: '時間副詞', kind: 'key' },
          { t: 'called her', role: '動詞 + 受詞' },
          { t: 'to see if everything was OK.', role: '目的', kind: 'dim' },
        ]"
      />
      <p class="translation">我馬上打給她，看看是不是一切都好。</p>
    </NoteSlide>

    <NoteSlide title="大部分時間副詞放在句尾，nowadays 也常放在句首" mark="immediately">
      <div class="rows is-labeled">
        <div>
          <span class="term">句尾</span>
          <span
            ><NoteMark
              sentence="I went to the cinema with a new friend recently."
              :marks="['recently']"
            /><span class="translation">我最近跟一個新朋友去看了電影。</span></span
          >
        </div>
        <div>
          <span class="term">句首</span>
          <span
            ><NoteMark sentence="Nowadays, most people pay by card." :marks="['Nowadays,']" /><span
              class="translation"
              >現在大部分人都刷卡付錢。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="各個時間副詞說的時間不同">
      <div class="rows is-labeled">
        <div>
          <span class="term">recently</span>
          <span>最近，不久之前</span>
        </div>
        <div>
          <span class="term">lately</span>
          <span>最近這段時間</span>
        </div>
        <div>
          <span class="term">immediately</span>
          <span>馬上</span>
        </div>
        <div>
          <span class="term">eventually</span>
          <span>經過很久或很多麻煩之後，最後</span>
        </div>
        <div>
          <span class="term">nowadays</span>
          <span>現在這個時代，和以前對比</span>
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="lately 和現在完成式一起用">
      <NoteFix
        wrong="I saw a good film lately."
        right="I've seen some good films lately."
        fix="I've seen"
      />
    </NoteSlide>

    <NoteSlide title="「晚一點」用 later，lately 是「最近」">
      <NoteFix
        wrong="I'm busy now. I'll call you back lately."
        right="I'm busy now. I'll call you back later."
        fix="later."
      />
    </NoteSlide>

    <NoteSlide title="nowadays 和現在式一起用">
      <NoteFix
        wrong="Nowadays people wrote fewer letters."
        right="Nowadays people write fewer letters."
        fix="write"
      />
    </NoteSlide>

    <NoteSlide title="immediately 不放在動詞和受詞中間" mark="immediately">
      <NoteFix
        wrong="She called immediately the police."
        right="She immediately called the police."
        fix="immediately called"
      />
    </NoteSlide>

    <NoteSlide title="later 從現在往後算，afterwards 指那件事之後">
      <div class="rows is-labeled">
        <div>
          <span class="term">later</span>
          <span
            ><NoteMark sentence="I'll call you later." :marks="['later']" /><span
              class="translation"
              >我晚一點打給你。</span
            ></span
          >
        </div>
        <div>
          <span class="term">afterwards</span>
          <span
            ><NoteMark
              sentence="We had dinner and went for a walk afterwards."
              :marks="['afterwards']"
            /><span class="translation">我們吃了晚餐，之後去散步。</span></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
