<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// discourse-markers-form-use-organising-adding, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="前一句說一件事，言談標記補上另一件事" mark="Besides,">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'The hotel is close to the beach.', role: '前一句', kind: 'dim' },
          { t: 'In addition,', role: '言談標記', kind: 'key' },
          { t: 'it has a big pool.', role: '補充的資訊' },
        ]"
      />
      <p class="translation">這家飯店離海灘很近。此外，它還有一座大泳池。</p>
      <p class="remark">言談標記放在句首時，後面加逗號。</p>
    </NoteSlide>

    <NoteSlide title="moreover、furthermore 和 in addition 多用在正式的書面文字">
      <div class="rows is-labeled">
        <div>
          <span class="term">moreover</span>
          <span
            ><NoteMark
              sentence="The plan is too expensive. Moreover, it would take years."
              :marks="['Moreover,']"
            /><span class="translation">這個計畫太貴了。而且要花好幾年。</span></span
          >
        </div>
        <div>
          <span class="term">furthermore</span>
          <span
            ><NoteMark
              sentence="The course is free. Furthermore, students get a certificate."
              :marks="['Furthermore,']"
            /><span class="translation">這門課免費。此外，學生還能拿到證書。</span></span
          >
        </div>
        <div>
          <span class="term">in addition</span>
          <span
            ><NoteMark
              sentence="The flat has two bedrooms. In addition, there is a small garden."
              :marks="['In addition,']"
            /><span class="translation">這間公寓有兩間臥室。此外，還有一個小花園。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="besides 和 what is more 也引出補充的資訊">
      <div class="rows is-labeled">
        <div>
          <span class="term">besides</span>
          <span
            ><NoteMark
              sentence="I don't want to go out. Besides, it's raining."
              :marks="['Besides,']"
            /><span class="translation">我不想出門。再說，外面在下雨。</span></span
          >
        </div>
        <div>
          <span class="term">what is more</span>
          <span
            ><NoteMark
              sentence="The town is beautiful. What is more, the people are very friendly."
              :marks="['What is more,']"
            /><span class="translation">這個小鎮很漂亮。而且，那裡的人很友善。</span></span
          >
        </div>
        <div>
          <span class="term">what's more</span>
          <span
            ><NoteMark
              sentence="Cycling is good for your health. What's more, it's free."
              :marks="['What\'s more,']"
            /><span class="translation">騎腳踏車對身體好。而且還不用錢。</span></span
          >
        </div>
      </div>
      <p class="remark">
        <code>besides</code> 多用在口語，常引出更重要的理由。<code>what is more</code>
        在口語裡常縮寫成 <code>what's more</code>。
      </p>
    </NoteSlide>

    <NoteSlide title="分號後面的言談標記，後面加逗號">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'The room was dirty;', role: '分號', kind: 'dim' },
          { t: 'moreover,', role: '言談標記', kind: 'key' },
          { t: 'the staff were rude.', role: '補充的資訊' },
        ]"
      />
      <p class="translation">房間很髒；而且員工很沒禮貌。</p>
    </NoteSlide>

    <NoteSlide title="moreover 和 furthermore 可以放在主詞或 be 動詞後面">
      <div class="rows is-labeled">
        <div>
          <span class="term">be 動詞後面</span>
          <span
            ><NoteMark
              sentence="The new system is, furthermore, much easier to use."
              :marks="['furthermore,']"
            /><span class="translation">此外，新系統用起來也簡單得多。</span></span
          >
        </div>
        <div>
          <span class="term">主詞後面</span>
          <span
            ><NoteMark
              sentence="The museum, moreover, is free on Sundays."
              :marks="['moreover,']"
            /><span class="translation">而且，那間博物館星期天免費。</span></span
          >
        </div>
      </div>
      <p class="remark">放在句中時，前後加逗號。</p>
    </NoteSlide>

    <NoteSlide title="原句：Besides 補上更重要的理由" mark="Besides,">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'Besides,', role: '言談標記', kind: 'key' },
          { t: 'you\'re 18 years old, and you aren\'t a baby.', role: '補充的資訊' },
        ]"
      />
      <p class="translation">再說，你都 18 歲了，又不是小嬰兒。</p>
      <p class="remark">說話的人先說了一個理由，再用 <code>Besides</code> 補上更重要的理由。</p>
    </NoteSlide>

    <NoteSlide title="言談標記是 besides，不是介系詞 beside" mark="Besides,">
      <NoteFix
        wrong="I'm too tired to cook. Beside, there's no food in the fridge."
        right="I'm too tired to cook. Besides, there's no food in the fridge."
        fix="Besides,"
      />
    </NoteSlide>

    <NoteSlide title="in addition to 後面要接名詞片語或動名詞">
      <NoteFix
        wrong="The job is well paid. In addition to, it's close to my home."
        right="The job is well paid. In addition, it's close to my home."
        fix="In addition,"
      />
    </NoteSlide>

    <NoteSlide title="what is more 縮寫成 what's more，不能拿掉 is">
      <NoteFix
        wrong="The phone is cheap. What more, it has a great camera."
        right="The phone is cheap. What's more, it has a great camera."
        fix="What's more,"
      />
    </NoteSlide>

    <NoteSlide title="moreover 是副詞，兩個子句之間用分號或句號">
      <NoteFix
        wrong="The flat is cheap, moreover it is near the station."
        right="The flat is cheap; moreover, it is near the station."
        fix="cheap; moreover,"
      />
    </NoteSlide>

    <NoteSlide title="besides 和 in addition to 後面接名詞片語時是介系詞">
      <div class="rows is-labeled">
        <div>
          <span class="term">besides<br /><i>介系詞</i></span>
          <span
            ><NoteMark
              sentence="Besides English, she speaks French and Italian."
              :marks="['Besides English,']"
            /><span class="translation">除了英文，她還會說法文和義大利文。</span></span
          >
        </div>
        <div>
          <span class="term">in addition to<br /><i>名詞片語</i></span>
          <span
            ><NoteMark
              sentence="In addition to the main course, we ordered two desserts."
              :marks="['In addition to the main course,']"
            /><span class="translation">除了主菜，我們還點了兩份甜點。</span></span
          >
        </div>
        <div>
          <span class="term">in addition to<br /><i>動名詞</i></span>
          <span
            ><NoteMark
              sentence="In addition to working full-time, he looks after his mother."
              :marks="['In addition to working']"
            /><span class="translation">除了全職工作，他還要照顧他媽媽。</span></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
