<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// past-use-single-continuing-event, as slides, in the order of content.md. One point per slide: the
// title names it, the diagram shows it, and `mark` circles the matching words of the note's
// sentence. Keep the parts of one sentence on one line: Vue drops the whitespace between two
// elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="has been 加動詞-ing，說持續到現在的活動" mark="has been working">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'Susan', role: '主詞' },
          { t: 'has been working', role: 'has + been + 動詞-ing', kind: 'key', ring: true },
          { t: 'in our company', kind: 'dim' },
          { t: 'for six years', role: '一段時間', kind: 'key' },
          { t: 'as a sales representative.', role: '身分', kind: 'dim' },
        ]"
      />
      <p class="translation">Susan 在我們公司當業務代表已經六年了。</p>
      <p class="remark">經理替 Susan 寫推薦信。</p>
    </NoteSlide>

    <NoteSlide title="for 接一段時間，since 接起點" mark="for six years">
      <div class="rows is-labeled">
        <div>
          <span class="term">for<br /><i>一段時間</i></span>
          <span
            ><NoteMark
              sentence="Where is it? We've been waiting for the bus for half an hour."
              :marks="['for half an hour.']"
            /><span class="translation">公車在哪裡？我們等公車等了半個小時。</span></span
          >
        </div>
        <div>
          <span class="term">since<br /><i>起點</i></span>
          <span
            ><NoteMark
              sentence="Ask Mrs Chen about the school. She has been teaching there since 2018."
              :marks="['since 2018.']"
            /><span class="translation"
              >學校的事去問陳老師。她從 2018 年就在那所學校教書。</span
            ></span
          >
        </div>
        <div>
          <span class="term">since<br /><i>子句</i></span>
          <span
            ><NoteMark
              sentence="My cousin knows the city well. She has been living in London since she left school."
              :marks="['since she left school.']"
            /><span class="translation">我表姊很熟那座城市。她畢業以後就一直住在倫敦。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="How long 問持續多久" mark="has been working">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'You play so well.', kind: 'dim' },
          { t: 'How long', role: '疑問詞', kind: 'key', ring: true },
          { t: 'have you', role: 'have + 主詞' },
          { t: 'been learning', role: 'been + 動詞-ing' },
          { t: 'the piano?', kind: 'dim' },
        ]"
      />
      <p class="translation">你彈得真好。你學鋼琴多久了？</p>
    </NoteSlide>

    <NoteSlide title="持續到現在，不用現在式" mark="has been working">
      <NoteFix
        wrong="My uncle is living with us since last April."
        right="My uncle has been living with us since last April."
        fix="has been living"
      />
    </NoteSlide>

    <NoteSlide title="一段時間用 for，不用 since" mark="for six years">
      <NoteFix
        wrong="Our cleaner has been coming here since six years."
        right="Our cleaner has been coming here for six years."
        fix="for"
      />
    </NoteSlide>

    <NoteSlide title="been 不能漏掉" mark="been">
      <NoteFix
        wrong="We have waiting for the plumber for an hour."
        right="We have been waiting for the plumber for an hour."
        fix="been waiting"
      />
    </NoteSlide>

    <NoteSlide title="狀態動詞用現在完成簡單式" mark="has been working">
      <NoteFix
        wrong="I have been knowing my best friend since we were children."
        right="I have known my best friend since we were children."
        fix="have known"
      />
    </NoteSlide>

    <NoteSlide title="過去完成進行式持續到過去的時間點" mark="has been working">
      <div class="rows is-labeled">
        <div>
          <span class="term">現在完成進行式</span>
          <span
            ><NoteMark
              sentence="Susan is our best salesperson. She has been working in our company for six years."
              :marks="['has been working']"
            /><span class="translation"
              >Susan 是我們最好的業務。她在我們公司工作六年了。</span
            ></span
          >
        </div>
        <div>
          <span class="term">過去完成進行式</span>
          <span
            ><NoteMark
              sentence="We were sad to see Susan go. She had been working in our company for six years when she left."
              :marks="['had been working']"
            /><span class="translation"
              >Susan 走了，我們很難過。她離職的時候，已經在我們公司工作六年了。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="過去簡單式說已經結束的一段時間" mark="has been working">
      <div class="rows is-labeled">
        <div>
          <span class="term">還住在台北</span>
          <span
            ><NoteMark
              sentence="I know all the night markets here. I have been living in Taipei for ten years."
              :marks="['have been living']"
            /><span class="translation">這裡的夜市我都知道。我在台北住十年了。</span></span
          >
        </div>
        <div>
          <span class="term">已經不住了</span>
          <span
            ><NoteMark
              sentence="Now I live in Tainan, but I lived in Taipei for ten years."
              :marks="['lived']"
            /><span class="translation">我現在住台南，不過我在台北住過十年。</span></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
