<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-use-subordinating-conjunctions-conditions-1127, as slides, in the order of
// content.md. One point per slide: the title names it, the diagram shows it, and `mark` circles
// the matching words of the note's sentence. Keep the parts of one sentence on one line: Vue drops
// the whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="連接詞引導條件子句" mark="on condition that">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'You can use my laptop', role: '主要子句', kind: 'dim' },
          { t: 'so long as', role: '連接詞', kind: 'key' },
          { t: 'you don\'t install anything.', role: '條件子句' },
        ]"
      />
      <p class="translation">只要你不安裝任何東西，就可以用我的筆電。</p>
    </NoteSlide>

    <NoteSlide title="連接詞的意思">
      <div class="rows is-labeled">
        <div>
          <span class="term">so long as<br /><i>只要</i></span>
          <span
            ><NoteMark
              sentence="We'll start the meeting at nine so long as everyone arrives on time."
              :marks="['so long as']"
            /><span class="translation">只要大家準時到，我們九點開始開會。</span></span
          >
        </div>
        <div>
          <span class="term">on condition that<br /><i>條件是</i></span>
          <span
            ><NoteMark
              sentence="My aunt lent us her flat on condition that we watered her plants."
              :marks="['on condition that']"
            /><span class="translation">我阿姨把公寓借給我們，條件是我們要幫她澆花。</span></span
          >
        </div>
        <div>
          <span class="term">in the event that<br /><i>萬一</i></span>
          <span
            ><NoteMark
              sentence="In the event that the power goes off, the computer saves your work."
              :marks="['In the event that']"
            /><span class="translation">萬一停電，電腦會儲存你的檔案。</span></span
          >
        </div>
      </div>
      <p class="remark">
        <code>on condition that</code> 和 <code>in the event that</code> 多用在正式的文字。
      </p>
    </NoteSlide>

    <NoteSlide title="條件子句的時態">
      <div class="rows is-labeled">
        <div>
          <span class="term">現在簡單式<br /><i>未來的事</i></span>
          <span
            ><NoteMark
              sentence="We'll start the meeting at nine so long as everyone arrives on time."
              :marks="['arrives']"
            /><span class="translation">只要大家準時到，我們九點開始開會。</span></span
          >
        </div>
        <div>
          <span class="term">現在簡單式<br /><i>一般的事實</i></span>
          <span
            ><NoteMark
              sentence="My cat is friendly so long as you don't touch her tail."
              :marks="['don\'t touch']"
            /><span class="translation">只要你不碰牠的尾巴，我的貓都很友善。</span></span
          >
        </div>
        <div>
          <span class="term">過去式<br /><i>過去的事</i></span>
          <span
            ><NoteMark
              sentence="My aunt lent us her flat on condition that we watered her plants."
              :marks="['watered']"
            /><span class="translation">我阿姨把公寓借給我們，條件是我們要幫她澆花。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="條件子句放在前面，後面加逗號">
      <div class="rows is-labeled">
        <div>
          <span class="term">主要子句前面</span>
          <span
            ><NoteMark
              sentence="In the event that the power goes off, the computer saves your work."
              :marks="['goes off,']"
            /><span class="translation">萬一停電，電腦會儲存你的檔案。</span></span
          >
        </div>
        <div>
          <span class="term">主要子句前面</span>
          <span
            ><NoteMark
              sentence="So long as the weather holds, we'll finish the roof tomorrow."
              :marks="['holds,']"
            /><span class="translation">只要天氣一直這麼好，我們明天就能把屋頂做完。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="原句：說小時候的事，兩個子句都用過去式" mark="knew">
      <NoteWords
        :size="20"
        :parts="[
          { t: 'I was allowed to go out with my friends', role: '主要子句（被動）', kind: 'dim' },
          { t: 'on condition that', role: '連接詞' },
          { t: 'my parents knew where I was.', role: '條件子句', kind: 'key' },
        ]"
      />
      <p class="translation">只要我爸媽知道我在哪裡，我就可以跟朋友出去。</p>
      <p class="remark">允許的人是爸媽。爸媽提出的條件是要知道說話的人在哪裡。</p>
    </NoteSlide>

    <NoteSlide title="說未來的事，條件子句不用 will">
      <NoteFix
        wrong="We'll lend you the van on condition that you will return it tomorrow."
        right="We'll lend you the van on condition that you return it tomorrow."
        fix="return"
      />
    </NoteSlide>

    <NoteSlide title="on condition that 的介系詞是 on" mark="on condition that">
      <NoteFix
        wrong="You can stay in condition that you keep quiet."
        right="You can stay on condition that you keep quiet."
        fix="on"
      />
    </NoteSlide>

    <NoteSlide title="in the event of 後面接名詞，不接子句">
      <NoteFix
        wrong="In the event of the train is late, take a taxi."
        right="In the event that the train is late, take a taxi."
        fix="that"
      />
      <p class="remark">
        接名詞時用 <code>in the event of</code>，像 <code>in the event of a delay</code>。
      </p>
    </NoteSlide>

    <NoteSlide title="as long as 說條件，也說時間的長度">
      <div class="rows is-labeled">
        <div>
          <span class="term">條件<br /><i>只要</i></span>
          <span
            ><NoteMark
              sentence="As long as you're home by ten, you can go to the party."
              :marks="['As long as']"
            /><span class="translation">只要十點前回家，你就可以去派對。</span></span
          >
        </div>
        <div>
          <span class="term">時間的長度</span>
          <span
            ><NoteMark sentence="You can stay as long as you like." :marks="['as long as']" /><span
              class="translation"
              >你想待多久就待多久。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="in case 說預先做的事">
      <div class="rows is-labeled">
        <div>
          <span class="term">in case<br /><i>預先做的事</i></span>
          <span
            ><NoteMark sentence="Take an umbrella in case it rains." :marks="['in case']" /><span
              class="translation"
              >帶把傘，以防下雨。</span
            ></span
          >
        </div>
        <div>
          <span class="term">in the event that<br /><i>條件</i></span>
          <span
            ><NoteMark
              sentence="In the event that it rains, we'll eat inside."
              :marks="['In the event that']"
            /><span class="translation">萬一下雨，我們就在裡面吃。</span></span
          >
        </div>
      </div>
      <p class="remark">現在就帶傘，不管後來有沒有下雨。下雨時才在裡面吃。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
