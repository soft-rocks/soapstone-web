<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 068, as slides, in the order of notes/dragon-english-basic-100/068.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide title="forget to 表示忘了去做一件該做的事" mark="forget to">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'Don’t forget', role: '提醒別人', kind: 'key' },
          { t: 'to turn off', role: 'to + 動詞原形', kind: 'key' },
          { t: 'the air conditioner', role: '受詞' },
          { t: 'before you go to bed,', kind: 'dim' },
        ]"
      />
      <p class="remark">那件事還沒做。</p>
    </NoteSlide>

    <NoteSlide title="forget to 指還沒做的事，forget 接動詞-ing 指做過的事" mark="forget to">
      <div class="rows is-labeled">
        <div>
          <span class="term">to + 動詞原形<br /><i>還沒做</i></span>
          <span
            ><NoteMark sentence="Tom forgot to lock the door." :marks="['forgot to lock']" /><span
              class="translation"
              >Tom 忘了鎖門。</span
            ></span
          >
        </div>
        <div>
          <span class="term">動詞-ing<br /><i>做過的事</i></span>
          <span
            ><NoteMark
              sentence="I'll never forget meeting you in Kyoto."
              :marks="['forget meeting']"
            /><span class="translation">我永遠不會忘記在京都遇見你。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="祈使句後面接 or，說出不照做的後果" mark="or">
      <NoteWords
        :size="24"
        :parts="[
          {
            t: 'Don’t forget to turn off the air conditioner before you go to bed,',
            role: '祈使句',
            kind: 'dim',
          },
          { t: 'or', role: '不然', kind: 'key', ring: true },
          { t: 'you’ll catch a cold.', role: '不照做的後果', kind: 'key' },
        ]"
      />
      <p class="translation">{{ note.translation }}</p>
    </NoteSlide>

    <NoteSlide title="祈使句後面接 and，說出照做的結果" mark="or">
      <div class="rows is-labeled">
        <div>
          <span class="term">or<br /><i>不照做的後果</i></span>
          <span
            ><NoteMark sentence="Hurry up, or you'll miss the bus." :marks="['or']" /><span
              class="translation"
              >快一點，不然你會趕不上公車。</span
            ></span
          >
        </div>
        <div>
          <span class="term">and<br /><i>照做的結果</i></span>
          <span
            ><NoteMark sentence="Study hard, and you'll pass the test." :marks="['and']" /><span
              class="translation"
              >努力讀書，你就會通過考試。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="受詞是名詞時，可以放在 off 或 on 的前面或後面" mark="turn off">
      <div class="rows is-labeled">
        <div>
          <span class="term">turn off + 名詞</span>
          <span
            ><NoteMark
              sentence="Please turn off the TV and do your homework."
              :marks="['turn off', 'the TV']"
            /><span class="translation">請把電視關掉，去寫功課。</span></span
          >
        </div>
        <div>
          <span class="term">turn + 名詞 + on</span>
          <span
            ><NoteMark
              sentence="I turned the TV on and watched the baseball game."
              :marks="['turned', 'the TV', 'on']"
            /><span class="translation">我打開電視看棒球比賽。</span></span
          >
        </div>
      </div>
      <p class="remark"><code>turn off</code> 是關掉電器或燈。<code>turn on</code> 是打開。</p>
    </NoteSlide>

    <NoteSlide title="受詞是代名詞時，放在 turn 和 off 中間" mark="turn off">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'The radio is too loud. Can you', kind: 'dim' },
          { t: 'turn', role: '動詞' },
          { t: 'it', role: '代名詞', kind: 'key', ring: true },
          { t: 'off?', role: '小品詞' },
        ]"
      />
      <p class="translation">收音機太大聲了。可以關掉嗎？</p>
    </NoteSlide>
  </NoteDeck>
</template>
