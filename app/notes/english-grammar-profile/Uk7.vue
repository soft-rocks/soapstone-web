<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-form-negative-797, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="didn't 加原形動詞" mark="didn't hesitate">
      <NoteWords
        :size="20"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'didn\'t', role: '否定', kind: 'key' },
          { t: 'hesitate', role: '原形動詞', kind: 'key', ring: true },
          { t: 'and', role: '連接' },
          { t: 'went', role: '過去式', kind: 'key' },
          { t: 'there straight away.', kind: 'dim' },
        ]"
      />
      <p class="translation">我毫不猶豫，馬上就去了那裡。</p>
      <p class="remark">說話者聽說奶奶跌倒了。</p>
    </NoteSlide>

    <NoteSlide title="規則動詞和不規則動詞" mark="didn't hesitate">
      <div class="rows is-labeled">
        <div>
          <span class="term">規則動詞</span>
          <span
            ><NoteMark
              sentence="I didn't realise how late it was."
              :marks="['didn\'t realise']"
            /><span class="translation">我沒發現已經這麼晚了。</span></span
          >
        </div>
        <div>
          <span class="term">不規則動詞</span>
          <span
            ><NoteMark sentence="You didn't eat much at dinner." :marks="['didn\'t eat']" /><span
              class="translation"
              >你晚餐沒吃什麼。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="be 動詞用 wasn't / weren't" mark="didn't hesitate">
      <div class="rows is-labeled">
        <div>
          <span class="term">wasn't</span>
          <span
            ><NoteMark sentence="I'm sure it wasn't my fault." :marks="['wasn\'t']" /><span
              class="translation"
              >我確定那不是我的錯。</span
            ></span
          >
        </div>
        <div>
          <span class="term">weren't</span>
          <span
            ><NoteMark
              sentence="My parents weren't at home that weekend."
              :marks="['weren\'t']"
            /><span class="translation">那個週末我爸媽不在家。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="and 和 or" mark="and went">
      <div class="rows is-labeled">
        <div>
          <span class="term">and</span>
          <span
            ><NoteMark sentence="I didn't stop and drove on." :marks="['and drove']" /><span
              class="translation"
              >我沒停車，繼續往前開。</span
            ></span
          >
        </div>
        <div>
          <span class="term">or</span>
          <span
            ><NoteMark sentence="I didn't stop or slow down." :marks="['or slow down']" /><span
              class="translation"
              >我沒停車，也沒減速。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="didn't 後面接原形動詞" mark="hesitate">
      <NoteFix
        wrong="We didn't understood the instructions."
        right="We didn't understand the instructions."
        fix="understand"
      />
    </NoteSlide>

    <NoteSlide title="be 動詞不用 didn't" mark="didn't hesitate">
      <NoteFix
        wrong="I didn't be at home when you called."
        right="I wasn't at home when you called."
        fix="wasn't"
      />
    </NoteSlide>

    <NoteSlide title="一般動詞要用 didn't" mark="didn't hesitate">
      <NoteFix wrong="I not knew the answer." right="I didn't know the answer." fix="didn't know" />
    </NoteSlide>

    <NoteSlide title="一個子句只用一個否定的字" mark="didn't hesitate">
      <NoteFix
        wrong="We didn't see nobody on the beach."
        right="We didn't see anybody on the beach."
        fix="anybody"
      />
    </NoteSlide>

    <NoteSlide title="didn't 和 wasn't" mark="didn't hesitate">
      <div class="rows is-labeled">
        <div>
          <span class="term">一般動詞</span>
          <span
            ><NoteMark sentence="I didn't feel hungry." :marks="['didn\'t feel']" /><span
              class="translation"
              >我不覺得餓。</span
            ></span
          >
        </div>
        <div>
          <span class="term">be 動詞</span>
          <span
            ><NoteMark sentence="I wasn't hungry." :marks="['wasn\'t']" /><span class="translation"
              >我不餓。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
