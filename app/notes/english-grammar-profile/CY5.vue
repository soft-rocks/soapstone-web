<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-speculation, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="couldn't have 表示說話者確定過去的事沒有發生" mark="couldn't have">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Surely', role: '不相信', kind: 'dim' },
          { t: 'I', role: '主詞', kind: 'dim' },
          { t: 'couldn\'t have', role: 'couldn\'t have', kind: 'key', ring: true },
          { t: 'left', role: '過去分詞', kind: 'key' },
          { t: 'it', role: '受詞' },
          { t: 'on my seat.', kind: 'dim' },
        ]"
      />
      <p class="translation">我總不可能把它忘在座位上了吧。</p>
      <p class="remark">說話者從記得的事推論，認定自己沒有把筆記本留在座位上。</p>
    </NoteSlide>

    <NoteSlide title="have 後面接過去分詞，或 been 加其他成分" mark="left">
      <div class="rows is-labeled">
        <div>
          <span class="term">過去分詞</span>
          <span
            ><NoteMark
              sentence="Your father couldn't have seen my message."
              :marks="['seen']"
            /><span class="translation">你爸爸不可能看到我的訊息。</span></span
          >
        </div>
        <div>
          <span class="term">been + 形容詞</span>
          <span
            ><NoteMark
              sentence="The water couldn't have been that cold."
              :marks="['been', 'cold']"
            /><span class="translation">水不可能那麼冷。</span></span
          >
        </div>
        <div>
          <span class="term">been + 動詞-&#x2060;ing</span>
          <span
            ><NoteMark
              sentence="You couldn't have been paying attention."
              :marks="['been paying']"
            /><span class="translation">你不可能有在專心聽。</span></span
          >
        </div>
        <div>
          <span class="term">been + 過去分詞<br /><i>被動</i></span>
          <span
            ><NoteMark
              sentence="The fence couldn't have been painted last week."
              :marks="['been painted']"
            /><span class="translation">這道圍籬不可能是上星期漆的。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="can't have 加過去分詞也表示這件事沒有發生" mark="couldn't have">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'She', role: '主詞', kind: 'dim' },
          { t: 'can\'t have', role: 'can\'t have', kind: 'key', ring: true },
          { t: 'missed', role: '過去分詞', kind: 'key' },
          { t: 'the bus.', kind: 'dim' },
        ]"
      />
      <p class="translation">她不可能錯過公車。</p>
    </NoteSlide>

    <NoteSlide title="have 後面接過去分詞，不接原形動詞" mark="left">
      <NoteFix wrong="She couldn't have see us." right="She couldn't have seen us." fix="seen" />
    </NoteSlide>

    <NoteSlide title="have 後面接過去分詞，不接過去式" mark="left">
      <NoteFix wrong="He couldn't have went home." right="He couldn't have gone home." fix="gone">
        <code>go</code> 的過去式是 <code>went</code>，過去分詞是 <code>gone</code>。
      </NoteFix>
    </NoteSlide>

    <NoteSlide title="could 後面的動詞用原形，寫 have" mark="have">
      <NoteFix
        wrong="I couldn't had left it there."
        right="I couldn't have left it there."
        fix="have"
      />
    </NoteSlide>

    <NoteSlide title="couldn't've 書寫時寫 have，不寫 of" mark="have">
      <NoteFix wrong="You couldn't of known." right="You couldn't have known." fix="have">
        口語的 <code>couldn't've</code> 聽起來像 <code>couldn't of</code>。
      </NoteFix>
    </NoteSlide>

    <NoteSlide title="少了 have，說的就是過去做不到的事" mark="have">
      <div class="rows is-labeled">
        <div>
          <span class="term">couldn't + 原形動詞<br /><i>做不到</i></span>
          <span
            ><NoteMark sentence="I couldn't open the door." :marks="['couldn\'t open']" /><span
              class="translation"
              >我打不開門。</span
            ></span
          >
        </div>
        <div>
          <span class="term">couldn't have + 過去分詞<br /><i>推測沒有發生</i></span>
          <span
            ><NoteMark
              sentence="Surely I couldn't have left it on my seat."
              :marks="['couldn\'t have left']"
            /><span class="translation">我總不可能把它忘在座位上了吧。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="must have 確定發生了，could have 表示有可能發生" mark="couldn't have">
      <div class="rows is-labeled">
        <div>
          <span class="term">must have<br /><i>確定發生了</i></span>
          <span
            ><NoteMark
              sentence="She must have put it away and forgotten about it."
              :marks="['must have put']"
            /><span class="translation">她一定是把它收起來，然後就忘了。</span></span
          >
        </div>
        <div>
          <span class="term">could have<br /><i>有可能發生</i></span>
          <span
            ><NoteMark
              sentence="The thief could have come in through the back door."
              :marks="['could have come']"
            /><span class="translation">小偷有可能是從後門進來的。</span></span
          >
        </div>
        <div>
          <span class="term">couldn't have<br /><i>確定沒有發生</i></span>
          <span
            ><NoteMark
              sentence="Surely I couldn't have left it on my seat."
              :marks="['couldn\'t have left']"
            /><span class="translation">我總不可能把它忘在座位上了吧。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="couldn't have 加 without，說的是假設的情況" mark="couldn't have">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'I', kind: 'dim' },
          { t: 'couldn\'t have done it', role: 'couldn\'t have + 過去分詞' },
          { t: 'without your help.', role: '假設的條件', kind: 'key', ring: true },
        ]"
      />
      <p class="translation">沒有你幫忙，我不可能做到。</p>
      <p class="remark">這句不是推測。主詞做到了這件事。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
