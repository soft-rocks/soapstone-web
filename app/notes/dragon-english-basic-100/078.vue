<script setup lang="ts">
import type entries from '~/content/dragon-english-basic-100/index.json';

// Dragon English 078, as slides, in the order of notes/dragon-english-basic-100/078.md in
// english-notes. One point per slide: the title names it, the diagram shows it, and `mark`
// circles the matching words of the note's sentence. Keep the parts of one sentence on one
// line: Vue drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof entries)[number] }>();
</script>

<template>
  <NoteHead :title="note.sentence" :name="note.translation" />

  <NoteDeck :sentence="note.sentence">
    <NoteSlide title="It is 加形容詞再加 that 子句，形容詞說明對這件事的看法" mark="surprising">
      <NoteWords
        :size="26"
        :move="{ from: 2, to: 0 }"
        :parts="[
          { t: 'It', role: '形式主詞', kind: 'key' },
          { t: 'is surprising', role: '看法' },
          { t: 'that Tom passed the test.', role: '真正的主詞', kind: 'key' },
        ]"
      />
      <p class="translation">Tom 通過了考試，很令人驚訝。</p>
    </NoteSlide>

    <NoteSlide title="常用的形容詞有 surprising、strange、natural，講過去用 It was" mark="It is surprising">
      <div class="rows is-labeled">
        <div>
          <span class="term">strange</span>
          <span
            ><NoteMark
              sentence="It is strange that Ann didn't call me."
              :marks="['strange']"
            /><span class="translation">Ann 沒有打電話給我，很奇怪。</span></span
          >
        </div>
        <div>
          <span class="term">natural</span>
          <span
            ><NoteMark sentence="It is natural that you feel nervous." :marks="['natural']" /><span
              class="translation"
              >你會緊張是很自然的。</span
            ></span
          >
        </div>
        <div>
          <span class="term">過去</span>
          <span
            ><NoteMark
              sentence="It was strange that the shop was closed on Saturday."
              :marks="['It was']"
            /><span class="translation">那家店星期六沒開，很奇怪。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="care 後面直接接間接問句，不加介系詞" mark="care how">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'many Americans', kind: 'dim' },
          { t: 'don\'t care', role: '動詞', kind: 'key' },
          { t: 'how you pronounce English', role: '間接問句', kind: 'key' },
          { t: 'as long as …', kind: 'dim' },
        ]"
      />
      <p class="remark">間接問句用直述句的語序：<code>you pronounce</code>。</p>
    </NoteSlide>

    <NoteSlide title="間接問句可以用 how、what、where，也可以用 whether" mark="how">
      <div class="rows is-labeled">
        <div>
          <span class="term">what</span>
          <span
            ><NoteMark sentence="I don't care what other people think." :marks="['what']" /><span
              class="translation"
              >我不在乎別人怎麼想。</span
            ></span
          >
        </div>
        <div>
          <span class="term">where</span>
          <span
            ><NoteMark
              sentence="I don't care where we eat. I'm just hungry."
              :marks="['where']"
            /><span class="translation">我不在乎我們在哪裡吃。我只是餓了。</span></span
          >
        </div>
        <div>
          <span class="term">whether</span>
          <span
            ><NoteMark
              sentence="My father doesn't care whether it rains or not."
              :marks="['whether']"
            /><span class="translation">我爸爸不在乎下不下雨。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="who 當子句的主詞時，後面直接接動詞" mark="how you">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'I don\'t care', kind: 'dim' },
          { t: 'who', role: '主詞', kind: 'key' },
          { t: 'sits', role: '動詞', kind: 'key' },
          { t: 'next to me on the bus.', kind: 'dim' },
        ]"
      />
      <p class="translation">我不在乎公車上誰坐我旁邊。</p>
    </NoteSlide>

    <NoteSlide title="as long as 帶出條件，意思是只要" mark="as long as">
      <NoteWords
        :size="24"
        :parts="[
          {
            t: 'many Americans don\'t care how you pronounce English',
            role: '主要子句',
            kind: 'dim',
          },
          { t: 'as long as', role: '只要', kind: 'key' },
          { t: 'they can understand what you are trying to say.', role: '條件' },
        ]"
      />
      <p class="remark">條件成立，主要子句的事就會發生。</p>
    </NoteSlide>

    <NoteSlide title="as long as 子句講未來的事，動詞也用現在式" mark="as long as">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'You can borrow my bike', kind: 'dim' },
          { t: 'as long as', role: '只要' },
          { t: 'you', role: '主詞' },
          { t: 'bring', role: '現在式', kind: 'key', ring: true },
          { t: 'it back tomorrow.', kind: 'dim' },
        ]"
      />
      <p class="translation">只要你明天還回來，就可以借我的腳踏車。</p>
    </NoteSlide>

    <NoteSlide title="as long as 子句放在句首時，後面加逗號" mark="as long as">
      <NoteWords
        :size="26"
        :parts="[
          { t: 'As long as it doesn\'t rain,', role: '條件', kind: 'key' },
          { t: 'we\'ll have the party in the garden.', role: '主要子句' },
        ]"
      />
      <p class="translation">只要不下雨，我們就在院子裡辦派對。</p>
    </NoteSlide>
  </NoteDeck>
</template>
