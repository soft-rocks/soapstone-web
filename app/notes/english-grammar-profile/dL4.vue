<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// verbs-form-use-would-hate-to, as slides, in the order of content.md. One point per slide:
// the title names it, the diagram shows it, and `mark` circles the matching words of the
// note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="would hate 後面接 to 和原形動詞">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'We in the student committee', role: '主詞', kind: 'dim' },
          { t: 'would hate', role: 'would hate', kind: 'key' },
          { t: 'to see', role: 'to + 原形動詞', kind: 'key' },
          { t: 'all that space', role: 'see 的受詞' },
          { t: 'go to waste.', role: '原形動詞' },
        ]"
      />
      <p class="translation">我們學生委員會很不希望看到那麼大的空間白白浪費掉。</p>
      <p class="remark">主詞用 <code>would hate to</code> 強調自己很不希望某件事發生。</p>
    </NoteSlide>

    <NoteSlide title="口語常把 would 縮寫成 'd" mark="would">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'I\'d', role: 'I would', kind: 'key', ring: true },
          { t: 'hate', role: '原形' },
          { t: 'to keep you waiting.', role: 'to + 原形動詞' },
        ]"
      />
      <p class="translation">我很不想讓你等。</p>
      <p class="remark"><code>would</code> 表示假設的情況。</p>
    </NoteSlide>

    <NoteSlide title="to 後面可以是原形動詞、被動或 see + 受詞 + 原形動詞" mark="to see">
      <div class="rows is-labeled">
        <div>
          <span class="term">原形動詞</span>
          <span
            ><NoteMark sentence="They would hate to give up the flat." :marks="['give up']" /><span
              class="translation"
              >他們很不想放棄那間公寓。</span
            ></span
          >
        </div>
        <div>
          <span class="term">被動</span>
          <span
            ><NoteMark sentence="She would hate to be told what to do." :marks="['be told']" /><span
              class="translation"
              >她很不希望被人指揮。</span
            ></span
          >
        </div>
        <div>
          <span class="term">see + 受詞 + 原形動詞</span>
          <span
            ><NoteMark
              sentence="She would hate to see the old bakery close."
              :marks="['see', 'close']"
            /><span class="translation">她很不希望看到那家老麵包店關門。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="not to 否定的是後面的動作，不是 hate" mark="hate">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'I', kind: 'dim' },
          { t: 'would hate', role: 'would hate' },
          { t: 'not', role: '否定 thank', kind: 'key', ring: true },
          { t: 'to thank them', role: 'to + 原形動詞', kind: 'key' },
          { t: 'in person.', kind: 'dim' },
        ]"
      />
      <p class="translation">要是沒能當面向他們道謝，我會很過意不去。</p>
      <p class="remark">主詞想當面道謝。</p>
    </NoteSlide>

    <NoteSlide title="would hate 後面接動詞時，動詞前面加 to" mark="to">
      <NoteFix
        wrong="We would hate see the space go to waste."
        right="We would hate to see the space go to waste."
        fix="to see"
      />
    </NoteSlide>

    <NoteSlide title="to 後面接原形動詞，不接動詞-ing" mark="see">
      <NoteFix
        wrong="I would hate to missing the last bus."
        right="I would hate to miss the last bus."
        fix="miss"
      >
        這個 <code>to</code> 是不定詞的 <code>to</code>，不是介系詞。
      </NoteFix>
    </NoteSlide>

    <NoteSlide title="would 後面的 hate 用原形" mark="hate">
      <NoteFix
        wrong="She would hates to let them down."
        right="She would hate to let them down."
        fix="hate"
      />
    </NoteSlide>

    <NoteSlide title="被動是 to be 加過去分詞">
      <NoteFix
        wrong="He would hate to be mistake for a liar."
        right="He would hate to be mistaken for a liar."
        fix="mistaken"
      />
    </NoteSlide>

    <NoteSlide title="沒有 would，說的就不是假設的情況" mark="would">
      <div class="rows is-labeled">
        <div>
          <span class="term">would hate to<br /><i>假設的情況</i></span>
          <span
            ><NoteMark sentence="I'd hate to keep you waiting." :marks="['I\'d hate to']" /><span
              class="translation"
              >我很不想讓你等。</span
            ></span
          >
        </div>
        <div>
          <span class="term">hate to<br /><i>真的要做</i></span>
          <span
            ><NoteMark
              sentence="I hate to leave so early, but I have to catch a train."
              :marks="['hate to']"
            /><span class="translation">我也不想這麼早走，可是我得趕火車。</span></span
          >
        </div>
        <div>
          <span class="term">hate + 動詞-ing<br /><i>平常的感受</i></span>
          <span
            ><NoteMark sentence="I hate working late on Fridays." :marks="['hate working']" /><span
              class="translation"
              >我很討厭星期五加班。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="I hate to say this, but 是固定說法">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'I hate to say this, but', role: '固定說法', kind: 'key' },
          { t: 'you\'re wrong.', role: '對方不想聽的話' },
        ]"
      />
      <p class="translation">我也不想這麼說，可是你錯了。</p>
    </NoteSlide>

    <NoteSlide title="would love to 的句型相同，意思相反" mark="hate">
      <NoteFork
        stem="I would"
        :branches="[
          { head: 'love to', rest: 'help', meaning: '很想做', zh: '我很想幫忙。' },
          {
            head: 'hate to',
            rest: 'keep you waiting',
            meaning: '很不想做',
            zh: '我很不想讓你等。',
          },
        ]"
      />
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
