<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 049, as slides, in the order of notes/dragon-english-basic-100/049.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide title="during 是介系詞，後面接名詞，表示在某段時間裡" mark="During">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'During', role: '介系詞', kind: 'key' },
          { t: 'the math class,', role: '名詞' },
          { t: 'my cell phone began to ring.', kind: 'dim' },
        ]"
      />
      <p class="translation">數學課上我的手機響了起來。</p>
    </NoteSlide>

    <NoteSlide title="接子句的時候用連接詞 while，不用 during" mark="During">
      <div class="rows is-labeled">
        <div>
          <span class="term">during + 名詞</span
          ><span
            ><NoteMark
              sentence="I fell asleep during the movie."
              :marks="['during the movie']"
            /><span class="translation">我看電影的時候睡著了。</span></span
          >
        </div>
        <div>
          <span class="term">while + 主詞 + 動詞</span
          ><span
            ><NoteMark
              sentence="My phone rang while the teacher was talking."
              :marks="['while the teacher was talking']"
            /><span class="translation">老師在講話的時候，我的手機響了。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="regret 後面接 that 子句或動名詞，表示後悔以前的事" mark="regretted that">
      <div class="rows is-labeled">
        <div>
          <span class="term">that 子句</span>
          <span
            ><NoteMark
              sentence="I regret that I didn't study harder."
              :marks="['that I didn\'t study']"
            /><span class="translation">我後悔我沒有更用功讀書。</span></span
          >
        </div>
        <div>
          <span class="term">動名詞</span>
          <span
            ><NoteMark sentence="She regrets telling him the secret." :marks="['telling']" /><span
              class="translation"
              >她後悔把秘密告訴他。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="動名詞的否定把 not 放在動名詞前面" mark="regretted">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'regret', role: '動詞' },
          { t: 'not', role: '否定詞', kind: 'key', ring: true },
          { t: 'taking', role: '動名詞', kind: 'key' },
          { t: 'more pictures in Kyoto.', kind: 'dim' },
        ]"
      />
      <p class="translation">我後悔在京都沒有多拍一些照片。</p>
    </NoteSlide>

    <NoteSlide title="過去完成式表示比過去某個時間更早發生的事" mark="hadn’t turned">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'I', role: '主詞' },
          { t: 'regretted', role: '過去式' },
          { t: 'that I', kind: 'dim' },
          { t: 'hadn’t turned', role: 'had + 過去分詞', kind: 'key' },
          { t: 'it off.', kind: 'dim' },
        ]"
      />
      <p class="translation">我很後悔沒有把手機關掉。</p>
      <p class="remark">沒有關手機發生在後悔之前。</p>
    </NoteSlide>

    <NoteSlide title="turn off 的受詞是名詞時，可以放在 off 前面或後面" mark="turned it off">
      <NoteWords
        :size="24"
        :move="{ from: 1, to: 3 }"
        :parts="[
          { t: 'Turn', role: '動詞' },
          { t: 'the TV', role: '名詞', kind: 'key' },
          { t: 'off', role: '小品詞' },
          { role: '也可以放這裡' },
          { t: 'before you go to bed.', kind: 'dim' },
        ]"
      />
      <p class="translation">睡覺前把電視關掉。</p>
    </NoteSlide>

    <NoteSlide title="turn off 的受詞是代名詞時，只能放在 turn 和 off 中間" mark="it">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'Can you', kind: 'dim' },
          { t: 'turn', role: '動詞' },
          { t: 'it', role: '代名詞', kind: 'key', ring: true },
          { t: 'off?', role: '小品詞' },
        ]"
      />
      <p class="translation">你可以把它關掉嗎？</p>
      <p class="remark"><code>turn on</code> 也一樣。</p>
    </NoteSlide>
  </NoteDeck>
</template>
