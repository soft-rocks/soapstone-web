<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// discourse-markers-form-use-so-summarising-informal, as slides, in the order of content.md. One
// point per slide: the title names it, the diagram shows it, and `mark` circles the matching words
// of the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="So 引出總結或接下來的問題" mark="So,">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I\'ll be free at three.', role: '前面說的事', kind: 'dim' },
          { t: 'So,', role: '言談標記', kind: 'key' },
          { t: 'I\'ll be at your house at half past three.', role: '總結或問題' },
        ]"
      />
      <p class="translation">我三點有空。所以，我三點半會到你家。</p>
      <p class="remark"><code>So</code> 放在句首，後面加逗號。</p>
    </NoteSlide>

    <NoteSlide title="So 引出總結或結論">
      <div class="rows is-labeled">
        <div>
          <span class="term">安排</span>
          <span
            ><NoteMark
              sentence="The train arrives at six. So, I'll meet you at the station at quarter past."
              :marks="['So,']"
            /><span class="translation">火車六點到。所以，我六點十五分在車站跟你碰面。</span></span
          >
        </div>
        <div>
          <span class="term">結果</span>
          <span
            ><NoteMark
              sentence="My neighbours had a raucous party last night. So, I didn't get much sleep."
              :marks="['So,']"
            /><span class="translation"
              >我鄰居昨晚開了一場很吵的派對。所以，我沒怎麼睡。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="So 在說完經過後引出道歉或收尾">
      <div class="rows is-labeled">
        <div>
          <span class="term">道歉</span>
          <span
            ><NoteMark
              sentence="I missed the bus and my phone died. So, I'm really sorry I didn't call you."
              :marks="['So,']"
            /><span class="translation"
              >我錯過公車，手機又沒電。所以，真的很抱歉沒打給你。</span
            ></span
          >
        </div>
        <div>
          <span class="term">收尾</span>
          <span
            ><NoteMark
              sentence="I've told you all about the new job. So, that's my news."
              :marks="['So,']"
            /><span class="translation">新工作的事我都跟你說了。總之，這就是我的近況。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="So 接著問聽的人" mark="So,">
      <div class="rows is-labeled">
        <div>
          <span class="term">說完安排</span>
          <span
            ><NoteMark
              sentence="I can come on Saturday or Sunday. So, which day is better for you?"
              :marks="['So,']"
            /><span class="translation">我星期六或星期天都可以。那，哪一天你比較方便？</span></span
          >
        </div>
        <div>
          <span class="term">對話</span>
          <span
            ><NoteMark
              sentence='"The restaurant is full tonight." "So, where shall we eat?"'
              :marks="['So,']"
            /><span class="translation">「那家餐廳今晚客滿了。」「那我們要去哪裡吃？」</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="原句：So 問讀的人的看法" mark="So,">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'So,', role: '言談標記', kind: 'key' },
          { t: 'what do you think?', role: '問題' },
        ]"
      />
      <p class="translation">那，你覺得怎麼樣？</p>
      <p class="remark">寫的人先說了自己的想法，再用 <code>So</code> 問讀的人的看法。</p>
    </NoteSlide>

    <NoteSlide title="言談標記是 so，不是連接詞 so that">
      <NoteFix
        wrong="The café opens at nine. So that, we can have breakfast there."
        right="The café opens at nine. So, we can have breakfast there."
        fix="So,"
      />
      <p class="remark"><code>so that</code> 引出目的，後面直接接子句。</p>
    </NoteSlide>

    <NoteSlide title="because 和 so 不一起用">
      <NoteFix
        wrong="Because I'm ill, so I can't come to your party."
        right="I'm ill. So, I can't come to your party."
        fix="So,"
      />
    </NoteSlide>

    <NoteSlide title="So 不改變問句的語序，where 後面要有 do" mark="So,">
      <NoteFix wrong="So, where you want to go?" right="So, where do you want to go?" fix="do" />
    </NoteSlide>

    <NoteSlide title="連接詞 so 連接同一個句子裡的兩個子句">
      <div class="rows is-labeled">
        <div>
          <span class="term">連接詞</span>
          <span
            ><NoteMark
              sentence="The car wouldn't start, so we took the bus."
              :marks="['so']"
            /><span class="translation">車子發不動，所以我們搭公車。</span></span
          >
        </div>
        <div>
          <span class="term">連接詞</span>
          <span
            ><NoteMark sentence="The tickets were cheap, so I bought two." :marks="['so']" /><span
              class="translation"
              >票很便宜，所以我買了兩張。</span
            ></span
          >
        </div>
      </div>
      <p class="remark">
        連接詞 <code>so</code> 前面加逗號，後面不加逗號。言談標記 <code>So</code>
        放在新句子的句首，後面加逗號。
      </p>
    </NoteSlide>

    <NoteSlide title="副詞 so 後面接形容詞，意思是很、非常">
      <div class="rows is-labeled">
        <div>
          <span class="term">so sore</span>
          <span
            ><NoteMark sentence="My feet are so sore after the hike!" :marks="['so sore']" /><span
              class="translation"
              >健行完我的腳好痠！</span
            ></span
          >
        </div>
        <div>
          <span class="term">so funny</span>
          <span
            ><NoteMark
              sentence="The book was so funny that I read it in one day."
              :marks="['so funny']"
            /><span class="translation">這本書好笑到我一天就看完了。</span></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
