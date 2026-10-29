<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// modality-use-past-possibility, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="could have 說過去有機會做、卻沒有做的事" mark="could have phoned">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'Alice was disappointed', role: '主要子句', kind: 'dim' },
          { t: 'that', kind: 'dim' },
          { t: 'her mother', role: '主詞' },
          { t: 'could have', role: 'could have', kind: 'key', ring: true },
          { t: 'phoned', role: '過去分詞', kind: 'key' },
          { t: 'her', role: '受詞' },
          { t: 'but didn\'t.', role: '沒有發生', kind: 'key' },
        ]"
      />
      <p class="translation">Alice 很失望，她媽媽明明可以打電話給她，卻沒有打。</p>
      <p class="remark">說話者知道媽媽沒有打電話，所以這句不是推測。</p>
    </NoteSlide>

    <NoteSlide title="have 後面接過去分詞，或 been 加其他成分" mark="phoned">
      <div class="rows is-labeled">
        <div>
          <span class="term">過去分詞</span>
          <span
            ><NoteMark
              sentence="She could have taken the bus, but she walked."
              :marks="['taken']"
            /><span class="translation">她本來可以搭公車，可是她走路去。</span></span
          >
        </div>
        <div>
          <span class="term">been + 形容詞</span>
          <span
            ><NoteMark
              sentence="The accident could have been much worse."
              :marks="['been', 'worse']"
            /><span class="translation">那場車禍本來可能嚴重得多。</span></span
          >
        </div>
        <div>
          <span class="term">been + 過去分詞<br /><i>被動</i></span>
          <span
            ><NoteMark
              sentence="All these problems could have been avoided."
              :marks="['been avoided']"
            /><span class="translation">這些問題本來都可以避免。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="couldn't have 表示這件事在過去不可能發生" mark="could have">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'The ticket was so expensive', role: '原因', kind: 'dim' },
          { t: 'that I', kind: 'dim' },
          { t: 'couldn\'t have', role: '不可能', kind: 'key', ring: true },
          { t: 'bought', role: '過去分詞', kind: 'key' },
          { t: 'it.', role: '受詞' },
        ]"
      />
      <p class="translation">票太貴了，我根本買不起。</p>
    </NoteSlide>

    <NoteSlide title="說過去的事，could 後面接 have 和過去分詞" mark="could have">
      <NoteFix wrong="She could phoned me." right="She could have phoned me." fix="have phoned" />
    </NoteSlide>

    <NoteSlide title="have 後面接過去分詞，不接過去式" mark="phoned">
      <NoteFix wrong="We could have went by train." right="We could have gone by train." fix="gone">
        <code>go</code> 的過去式是 <code>went</code>，過去分詞是 <code>gone</code>。
      </NoteFix>
    </NoteSlide>

    <NoteSlide title="but 後面用過去式 didn't" mark="but didn't">
      <NoteFix
        wrong="He could have helped, but he hasn't."
        right="He could have helped, but he didn't."
        fix="didn't"
      />
    </NoteSlide>

    <NoteSlide title="推測的 could have 不知道結果，過去的可能知道結果" mark="but didn't">
      <div class="rows is-labeled">
        <div>
          <span class="term">推測<br /><i>不知道結果</i></span>
          <span
            ><NoteMark
              sentence="He could have missed the bus. I don't know."
              :marks="['I don\'t know']"
            /><span class="translation">他可能沒趕上公車。我不知道。</span></span
          >
        </div>
        <div>
          <span class="term">過去的可能<br /><i>知道沒有發生</i></span>
          <span
            ><NoteMark
              sentence="My brother could have lent me the money, but he didn't."
              :marks="['but he didn\'t']"
            /><span class="translation">我哥本來可以借我錢，可是他沒有。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="could 加原形動詞說過去的能力，這件事有發生" mark="could have">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'My mother', kind: 'dim' },
          { t: 'could cook', role: 'could + 原形動詞', kind: 'key', ring: true },
          { t: 'when she was ten.', role: '過去的時間' },
        ]"
      />
      <p class="translation">我媽媽十歲就會做菜了。</p>
    </NoteSlide>

    <NoteSlide title="would have 是一定會發生的結果，could have 是有機會發生" mark="could have">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'If you had called,', role: '條件', kind: 'dim' },
          { t: 'I', role: '主詞' },
          { t: 'would have', role: '一定會', kind: 'key', ring: true },
          { t: 'picked', role: '過去分詞', kind: 'key' },
          { t: 'you up.', kind: 'dim' },
        ]"
      />
      <p class="translation">如果你那時打電話來，我就會去接你。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
