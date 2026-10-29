<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// it-cleft, as slides, in the order of content.md. One point per slide: the title names it,
// the diagram shows it, and `mark` circles the matching words of the note's sentence. Keep the
// parts of one sentence on one line: Vue drops the whitespace between two elements on separate
// lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="要強調的部分放在 It was 後面">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'It', role: '形式主詞' },
          { t: 'was', role: 'be' },
          { t: 'Paul', role: '焦點', kind: 'key', ring: true },
          { t: 'who', role: '關係代名詞' },
          { t: 'stole the money.', role: '子句的其餘部分' },
        ]"
      />
      <p class="translation">偷錢的是 Paul。</p>
      <p class="remark">原來的句子是 Paul stole the money.</p>
    </NoteSlide>

    <NoteSlide title="焦點是人用 who 或 that，不是人用 that" mark="who">
      <div class="rows is-labeled">
        <div>
          <span class="term">人</span>
          <span
            ><NoteMark sentence="It was my sister who found the keys." :marks="['who']" /><span
              class="translation"
              >找到鑰匙的是我妹妹。</span
            ></span
          >
        </div>
        <div>
          <span class="term">東西</span>
          <span
            ><NoteMark
              sentence="It's the noise that bothers me, not the heat."
              :marks="['that']"
            /><span class="translation">讓我受不了的是噪音，不是天氣熱。</span></span
          >
        </div>
        <div>
          <span class="term">受詞</span>
          <span
            ><NoteMark
              sentence="It was the blue dress that she bought in the end."
              :marks="['that']"
            /><span class="translation">她最後買的是那件藍色洋裝。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="焦點是時間、地點或原因，用 that" mark="who">
      <div class="rows is-labeled">
        <div>
          <span class="term">時間</span>
          <span
            ><NoteMark
              sentence="It was on Friday that we got the news."
              :marks="['on Friday', 'that']"
            /><span class="translation">我們是星期五收到消息的。</span></span
          >
        </div>
        <div>
          <span class="term">地點</span>
          <span
            ><NoteMark
              sentence="It was in Rome that they first met."
              :marks="['in Rome', 'that']"
            /><span class="translation">他們是在羅馬第一次見面的。</span></span
          >
        </div>
        <div>
          <span class="term">原因</span>
          <span
            ><NoteMark
              sentence="It was because of the rain that the match was cancelled."
              :marks="['because of the rain', 'that']"
            /><span class="translation">比賽是因為下雨才取消的。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="焦點是代名詞，口語用受格，正式的文章用主格" mark="Paul">
      <div class="rows is-labeled">
        <div>
          <span class="term">受格</span>
          <span
            ><NoteMark sentence="It was me who called you." :marks="['me']" /><span
              class="translation"
              >打電話給你的是我。</span
            ></span
          >
        </div>
        <div>
          <span class="term">主格</span>
          <span
            ><NoteMark sentence="It was she who made the final decision." :marks="['she']" /><span
              class="translation"
              >做最後決定的是她。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="be 跟著 It 用單數，子句的動詞跟著焦點" mark="was">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'It', role: '形式主詞', kind: 'dim' },
          { t: 'is', role: '跟著 It', kind: 'key' },
          { t: 'my parents', role: '焦點' },
          { t: 'who', kind: 'dim' },
          { t: 'pay', role: '跟著 my parents', kind: 'key' },
          { t: 'the rent.', kind: 'dim' },
        ]"
      />
      <p class="translation">付房租的是我爸媽。</p>
    </NoteSlide>

    <NoteSlide title="分裂句要有形式主詞 It" mark="It">
      <NoteFix
        wrong="Was Anna who called you last night."
        right="It was Anna who called you last night."
        fix="It"
      />
    </NoteSlide>

    <NoteSlide title="分裂句的形式主詞不用 This" mark="It">
      <NoteFix
        wrong="This was the cat that broke the vase."
        right="It was the cat that broke the vase."
        fix="It"
      />
    </NoteSlide>

    <NoteSlide title="焦點不是人，不用 who" mark="who">
      <NoteFix
        wrong="It was in 2019 who I moved to London."
        right="It was in 2019 that I moved to London."
        fix="that"
      />
    </NoteSlide>

    <NoteSlide title="焦點移到 It was 後面，子句裡不再寫一次" mark="Paul">
      <NoteFix
        wrong="It was Lily who she ate the last cake."
        right="It was Lily who ate the last cake."
        fix="who ate"
      />
    </NoteSlide>

    <NoteSlide title="焦點是複數，be 也用單數" mark="was">
      <NoteFix
        wrong="They were my parents who paid for the trip."
        right="It was my parents who paid for the trip."
        fix="It was"
      />
    </NoteSlide>

    <NoteSlide title="分裂句拿掉 It was 和 who，剩下完整的句子" mark="It was">
      <div class="rows is-labeled">
        <div>
          <span class="term">分裂句</span>
          <span
            ><NoteMark
              sentence="It was Paul who stole the money."
              :marks="['It was', 'who']"
            /><span class="translation">剩下 Paul stole the money.</span></span
          >
        </div>
        <div>
          <span class="term">形式主詞</span>
          <span
            ><NoteMark sentence="It is true that he lied." :marks="['It is', 'that']" /><span
              class="translation"
              >剩下 true he lied，不是句子。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="what 分裂句的焦點放在句尾" mark="Paul">
      <div class="rows is-labeled">
        <div>
          <span class="term">it 分裂句</span>
          <span
            ><NoteMark
              sentence="It was the blue dress that she bought in the end."
              :marks="['the blue dress']"
            /><span class="translation">她最後買的是那件藍色洋裝。</span></span
          >
        </div>
        <div>
          <span class="term">what 分裂句</span>
          <span
            ><NoteMark
              sentence="What she bought was the blue dress."
              :marks="['the blue dress']"
            /><span class="translation">她買的是那件藍色洋裝。</span></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
