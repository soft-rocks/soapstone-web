<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// discourse-markers-form-use-organising-openings-and-closings-formal, as slides, in the order of
// content.md. One point per slide: the title names it, the diagram shows it, and `mark` circles
// the matching words of the note's sentence. Keep the parts of one sentence on one line: Vue
// drops the whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="言談標記放在句首，後面加逗號">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'To begin with,', role: '言談標記', kind: 'key' },
          {
            t: 'I want to ensure that you are going to have a great time with us.',
            role: '句子',
            kind: 'dim',
          },
        ]"
      />
      <p class="translation">首先，我想確保您跟我們在一起會過得很愉快。</p>
      <p class="remark"><code>To begin with</code> 放在信的開頭，引出寫信的人第一件要說的事。</p>
    </NoteSlide>

    <NoteSlide title="to begin with 和 for a start 引出第一個重點" mark="To begin with,">
      <div class="rows is-labeled">
        <div>
          <span class="term">to begin with<br /><i>第一個重點</i></span>
          <span
            ><NoteMark
              sentence="To begin with, I would like to thank you all for coming."
              :marks="['To begin with,']"
            /><span class="translation">首先，我想謝謝各位今天到場。</span></span
          >
        </div>
        <div>
          <span class="term">for a start<br /><i>第一個理由</i></span>
          <span
            ><NoteMark
              sentence="For a start, the flat is too far from my office."
              :marks="['For a start,']"
            /><span class="translation">首先，那間公寓離我的辦公室太遠了。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="結尾的言談標記引出整篇文章的結論">
      <div class="rows is-labeled">
        <div>
          <span class="term">in conclusion</span>
          <span
            ><NoteMark
              sentence="In conclusion, zoos can help protect animals in danger."
              :marks="['In conclusion,']"
            /><span class="translation">總而言之，動物園可以幫助保護瀕危的動物。</span></span
          >
        </div>
        <div>
          <span class="term">to sum up</span>
          <span
            ><NoteMark
              sentence="To sum up, the plan is cheap, quick and easy to start."
              :marks="['To sum up,']"
            /><span class="translation">總結來說，這個計畫便宜、快速，又容易開始。</span></span
          >
        </div>
        <div>
          <span class="term">in summary</span>
          <span
            ><NoteMark
              sentence="In summary, most students want a longer lunch break."
              :marks="['In summary,']"
            /><span class="translation">總之，大部分學生都希望午休時間更長。</span></span
          >
        </div>
        <div>
          <span class="term">to conclude</span>
          <span
            ><NoteMark
              sentence="To conclude, I believe the town needs a new sports centre."
              :marks="['To conclude,']"
            /><span class="translation">最後，我認為這個城鎮需要一座新的運動中心。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="in 後面接名詞 conclusion">
      <NoteFix
        wrong="In conclude, the new rules have worked well."
        right="In conclusion, the new rules have worked well."
        fix="conclusion,"
      >
        用動詞 <code>conclude</code> 時寫 <code>to conclude</code>。
      </NoteFix>
    </NoteSlide>

    <NoteSlide title="for a start 的 start 前面加 a">
      <NoteFix
        wrong="For start, the tickets are too expensive."
        right="For a start, the tickets are too expensive."
        fix="a"
      />
    </NoteSlide>

    <NoteSlide title="in conclusion 的 conclusion 前面不加 the">
      <NoteFix
        wrong="In the conclusion, both schools have good teachers."
        right="In conclusion, both schools have good teachers."
        fix="In conclusion,"
      />
    </NoteSlide>

    <NoteSlide title="to 後面接動詞 sum up">
      <NoteFix
        wrong="To summary, the hotel was clean but noisy."
        right="To sum up, the hotel was clean but noisy."
        fix="sum up,"
      >
        用名詞 <code>summary</code> 時寫 <code>in summary</code>。
      </NoteFix>
    </NoteSlide>

    <NoteSlide title="to begin with 也可以表示一開始" mark="To begin with,">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'To begin with,', role: '一開始', kind: 'key' },
          { t: 'I hated my new school,', kind: 'dim' },
          { t: 'but now', role: '後來的改變', kind: 'key' },
          { t: 'I love it.', kind: 'dim' },
        ]"
      />
      <p class="translation">一開始我很討厭新學校，可是現在很喜歡。</p>
      <p class="remark">
        這句的 <code>to begin with</code> 說的是一段時間的開始，不是文章的第一個重點。
      </p>
    </NoteSlide>

    <NoteSlide title="in the end 說事情最後的結果，不是文章的結論">
      <div class="rows is-labeled">
        <div>
          <span class="term">in the end<br /><i>最後的結果</i></span>
          <span
            ><NoteMark
              sentence="We waited for an hour, and in the end we took a taxi."
              :marks="['in the end']"
            /><span class="translation">我們等了一個小時，最後搭了計程車。</span></span
          >
        </div>
        <div>
          <span class="term">in conclusion<br /><i>文章的結論</i></span>
          <span
            ><NoteMark
              sentence="In conclusion, zoos can help protect animals in danger."
              :marks="['In conclusion,']"
            /><span class="translation">總而言之，動物園可以幫助保護瀕危的動物。</span></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
