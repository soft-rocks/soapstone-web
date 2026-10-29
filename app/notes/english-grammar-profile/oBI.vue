<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// what-cleft, as slides, in the order of content.md. One point per slide: the title names it,
// the diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on separate
// lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="What 子句先說出話題，焦點放在句尾">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'What we need', role: 'What 子句（主詞）' },
          { t: 'is', role: 'be' },
          { t: 'a strong publicity campaign directed at young people.', role: '焦點', kind: 'key' },
        ]"
      />
      <p class="translation">我們需要的是一個針對年輕人的強力宣傳活動。</p>
      <p class="remark">原來的句子是 We need a strong publicity campaign.</p>
    </NoteSlide>

    <NoteSlide
      title="焦點可以是名詞片語、to + 原形動詞、原形動詞或 that 子句"
      mark="a strong publicity campaign"
    >
      <div class="rows is-labeled">
        <div>
          <span class="term">名詞片語</span>
          <span
            ><NoteMark
              sentence="What I want is a quiet weekend."
              :marks="['a quiet weekend.']"
            /><span class="translation">我想要的是一個安靜的週末。</span></span
          >
        </div>
        <div>
          <span class="term">to + 原形動詞</span>
          <span
            ><NoteMark
              sentence="What tourists want is to see the famous sights."
              :marks="['to see']"
            /><span class="translation">觀光客想要的是去看有名的景點。</span></span
          >
        </div>
        <div>
          <span class="term">原形動詞</span>
          <span
            ><NoteMark
              sentence="What you should do is call her right now."
              :marks="['do', 'call']"
            /><span class="translation">你該做的是馬上打電話給她。</span></span
          >
        </div>
        <div>
          <span class="term">that 子句</span>
          <span
            ><NoteMark
              sentence="What I like about the book is that it's easy to follow."
              :marks="['that']"
            /><span class="translation">我喜歡這本書的地方是它很好懂。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="be 通常用單數，焦點是複數名詞時也可以用複數" mark="is">
      <div class="rows is-labeled">
        <div>
          <span class="term">單數</span>
          <span
            ><NoteMark
              sentence="What students learn is mostly facts and theories."
              :marks="['is']"
            /><span class="translation">學生學到的大多是事實和理論。</span></span
          >
        </div>
        <div>
          <span class="term">複數</span>
          <span
            ><NoteMark
              sentence="What everyone loved were the special effects."
              :marks="['were']"
            /><span class="translation">大家喜歡的是特效。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="be 的時態跟著 What 子句" mark="is">
      <div class="rows is-labeled">
        <div>
          <span class="term">現在式</span>
          <span
            ><NoteMark sentence="What worries me is the cost." :marks="['worries', 'is']" /><span
              class="translation"
              >讓我擔心的是費用。</span
            ></span
          >
        </div>
        <div>
          <span class="term">過去式</span>
          <span
            ><NoteMark
              sentence="What surprised me was the size of the crowd."
              :marks="['surprised', 'was']"
            /><span class="translation">讓我意外的是人潮的規模。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="What 子句不是問句，不加 do" mark="we need">
      <NoteFix
        wrong="What do we need is more time."
        right="What we need is more time."
        fix="we need"
      />
    </NoteSlide>

    <NoteSlide title="What 子句後面要有 be" mark="is">
      <NoteFix
        wrong="What I want a quiet weekend."
        right="What I want is a quiet weekend."
        fix="is"
      />
    </NoteSlide>

    <NoteSlide title="What 補上子句缺的受詞，That 不行" mark="What">
      <NoteFix wrong="That I need is a holiday." right="What I need is a holiday." fix="What" />
    </NoteSlide>

    <NoteSlide title="What 子句用 do，焦點用原形動詞">
      <NoteFix
        wrong="What you should do is calling the police."
        right="What you should do is call the police."
        fix="call"
      />
    </NoteSlide>

    <NoteSlide title="What 已經是受詞，子句裡不再加 it" mark="What we need">
      <NoteFix
        wrong="What companies care about it is money."
        right="What companies care about is money."
        fix="care about"
      />
    </NoteSlide>

    <NoteSlide
      title="it 分裂句的焦點在前，what 準分裂句的焦點在句尾"
      mark="a strong publicity campaign"
    >
      <div class="rows is-labeled">
        <div>
          <span class="term">it 分裂句</span>
          <span
            ><NoteMark
              sentence="It's a strong publicity campaign that we need."
              :marks="['a strong publicity campaign']"
            /><span class="translation">我們需要的是一個強力的宣傳活動。</span></span
          >
        </div>
        <div>
          <span class="term">what 準分裂句</span>
          <span
            ><NoteMark
              sentence="What I want is a quiet weekend."
              :marks="['a quiet weekend.']"
            /><span class="translation">我想要的是一個安靜的週末。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="焦點也可以放在句首，what 子句放在 be 後面" mark="What we need">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'A quiet weekend', role: '焦點', kind: 'key' },
          { t: 'is', role: 'be' },
          { t: 'what I want.', role: 'what 子句' },
        ]"
      />
      <p class="translation">一個安靜的週末就是我想要的。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
