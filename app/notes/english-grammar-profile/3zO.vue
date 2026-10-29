<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// reported-speech-form-direct-speech-reporting-clause-mid-position, as slides, in the order of
// content.md. One point per slide: the title names it, the diagram shows it, and `mark` circles the
// matching words of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="引述子句插在引號裡的話中間">
      <NoteWords
        :size="24"
        :parts="[
          { t: '&quot;We have come together,&quot;', role: '前半句' },
          { t: 'the man said,', role: '主詞 + 引述動詞', kind: 'key' },
          { t: '&quot;to celebrate our annual meeting.&quot;', role: '後半句' },
        ]"
      />
      <p class="translation">「我們齊聚一堂，」那個男人說，「是為了慶祝我們的年會。」</p>
    </NoteSlide>

    <NoteSlide title="同一句用逗號，後半句小寫；新的一句用句號，後半句大寫" mark="the man said,">
      <div class="rows is-labeled">
        <div>
          <span class="term">同一句</span>
          <span
            ><NoteMark
              sentence='"If you need anything," she said, "just call me."'
              :marks="['said,', 'just']"
            /><span class="translation">「如果你需要什麼，」她說，「打電話給我就好。」</span></span
          >
        </div>
        <div>
          <span class="term">新的一句</span>
          <span
            ><NoteMark
              sentence='"Forgive me," he said. "I will never leave you alone again."'
              :marks="['said.', 'I will']"
            /><span class="translation"
              >「原諒我，」他說。「我再也不會丟下你一個人了。」</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="thought 轉述心裡的話，標點一樣">
      <NoteWords
        :size="26"
        :parts="[
          { t: '&quot;No problem,&quot;', kind: 'dim' },
          { t: 'I thought.', role: '主詞 + thought', kind: 'key' },
          { t: '&quot;There\'s only one person in the queue.&quot;', kind: 'dim' },
        ]"
      />
      <p class="translation">「沒問題，」我心想。「排隊的只有一個人。」</p>
    </NoteSlide>

    <NoteSlide title="主詞是名詞時可以倒裝">
      <NoteWords
        :size="26"
        :parts="[
          { t: '&quot;The trouble is,&quot;', kind: 'dim' },
          { t: 'said', role: '引述動詞', kind: 'key' },
          { t: 'Tom,', role: '主詞', kind: 'key' },
          { t: '&quot;nobody asked me.&quot;', kind: 'dim' },
        ]"
      />
      <p class="translation">「問題是，」Tom 說，「根本沒有人問我。」</p>
    </NoteSlide>

    <NoteSlide title="後半句接著前半句，第一個字小寫" mark="to celebrate">
      <NoteFix
        wrong='"If you need anything," she said, "Just call me."'
        right='"If you need anything," she said, "just call me."'
        fix="just"
      />
    </NoteSlide>

    <NoteSlide title="引述子句放在引號外面" mark="the man said,">
      <NoteFix
        wrong='"I think, she said, we should leave now."'
        right='"I think," she said, "we should leave now."'
        fix="she said,"
      />
    </NoteSlide>

    <NoteSlide title="兩個完整的句子，引述動詞後面用句號">
      <NoteFix
        wrong='"I&apos;m tired," he said, "I&apos;m going to bed."'
        right='"I&apos;m tired," he said. "I&apos;m going to bed."'
        fix="said."
      />
    </NoteSlide>

    <NoteSlide title="前半句和引述動詞後面都加逗號">
      <NoteFix
        wrong='"Well" she said "that&apos;s a surprise."'
        right='"Well," she said, "that&apos;s a surprise."'
        fix="said,"
      />
    </NoteSlide>

    <NoteSlide title="引號裡的話一次說完，引述子句放在後面">
      <NoteWords
        :size="22"
        :parts="[
          { t: '&quot;We have come together to celebrate our annual meeting,&quot;', kind: 'dim' },
          { t: 'the man said.', role: '引述子句', kind: 'key' },
        ]"
      />
      <p class="translation">「我們齊聚一堂，是為了慶祝我們的年會。」那個男人說。</p>
    </NoteSlide>

    <NoteSlide title="引號裡的 I think 是說出的字，不是引述子句">
      <NoteWords
        :size="28"
        :parts="[
          { t: '&quot;This bag,', kind: 'dim' },
          { t: 'I think,', role: '插入語', kind: 'key' },
          { t: 'is yours.&quot;', kind: 'dim' },
        ]"
      />
      <p class="translation">「這個包包，我想，是你的。」</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
