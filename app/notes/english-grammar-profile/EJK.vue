<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-use-if-past-simple-could-future, as slides, in the order of content.md. One point
// per slide: the title names it, the diagram shows it, and `mark` circles the matching words of
// the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="想像的情況和建議" mark="wanted">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'If you came on Saturday,', role: '過去簡單式', kind: 'key' },
          { t: 'we could have lunch together.', role: 'could + 原形動詞' },
        ]"
      />
      <p class="translation">如果你星期六來，我們可以一起吃午餐。</p>
      <p class="remark"><code>came</code> 不說過去的事。它說未來可能發生、但不確定的事。</p>
    </NoteSlide>

    <NoteSlide title="提出建議或提議幫忙" mark="we could">
      <div class="rows is-labeled">
        <div>
          <span class="term">建議<br /><i>we could</i></span>
          <span
            ><NoteMark
              sentence="If the weather stayed fine, we could have a barbecue in the garden."
              :marks="['we could']"
            /><span class="translation">如果天氣一直很好，我們可以在花園烤肉。</span></span
          >
        </div>
        <div>
          <span class="term">提議幫忙<br /><i>I could</i></span>
          <span
            ><NoteMark
              sentence="If you sent me the file, I could check it tonight."
              :marks="['I could']"
            /><span class="translation">如果你把檔案寄給我，我今晚可以幫你檢查。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="could 也說想像的能力">
      <div class="rows is-labeled">
        <div>
          <span class="term">能夠</span>
          <span
            ><NoteMark
              sentence="If I spoke Spanish, I could talk to my neighbours."
              :marks="['I could talk']"
            /><span class="translation">如果我會說西班牙文，我就能和鄰居聊天。</span></span
          >
        </div>
      </div>
      <p class="remark">事實是我不會說西班牙文。</p>
    </NoteSlide>

    <NoteSlide title="否定用 couldn't">
      <div class="rows is-labeled">
        <div>
          <span class="term">couldn't<br /><i>could not</i></span>
          <span
            ><NoteMark
              sentence="If the trains stopped running, we couldn't get to work."
              :marks="['couldn\'t']"
            /><span class="translation">如果火車停駛，我們就沒辦法去上班。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="原句：客氣地提出建議" mark="we could go fishing.">
      <NoteWords
        :size="22"
        :parts="[
          {
            t: 'If you wanted to do some outdoor activities,',
            role: '過去簡單式',
            kind: 'key',
          },
          { t: 'we could go fishing.', role: 'could + 原形動詞' },
        ]"
      />
      <p class="translation">如果你想做一些戶外活動，我們可以去釣魚。</p>
      <p class="remark">說話的人不知道對方想不想做戶外活動。用過去簡單式，語氣比較客氣。</p>
    </NoteSlide>

    <NoteSlide title="說未來的想像不用過去完成式" mark="wanted">
      <NoteFix
        wrong="If you had been free, we could see a film tomorrow."
        right="If you were free, we could see a film tomorrow."
        fix="were"
      />
    </NoteSlide>

    <NoteSlide title="if 子句不用 would" mark="wanted">
      <NoteFix
        wrong="If we would leave at seven, we could avoid the traffic."
        right="If we left at seven, we could avoid the traffic."
        fix="left"
      />
    </NoteSlide>

    <NoteSlide title="could 後面接原形動詞" mark="could go">
      <NoteFix
        wrong="If you joined the club, you could met new people."
        right="If you joined the club, you could meet new people."
        fix="could meet"
      />
    </NoteSlide>

    <NoteSlide title="現在簡單式覺得比較可能">
      <div class="rows is-labeled">
        <div>
          <span class="term">現在簡單式<br /><i>比較可能</i></span>
          <span
            ><NoteMark
              sentence="If you come on Friday, we could go to the market."
              :marks="['come']"
            /><span class="translation">如果你星期五來，我們可以去市場。</span></span
          >
        </div>
        <div>
          <span class="term">過去簡單式<br /><i>比較不確定</i></span>
          <span
            ><NoteMark
              sentence="If you came next month, we could see the flower festival."
              :marks="['came']"
            /><span class="translation">如果你下個月來的話，我們可以去看花節。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="would 說一定會有的結果">
      <div class="rows is-labeled">
        <div>
          <span class="term">could<br /><i>可能或能夠</i></span>
          <span
            ><NoteMark
              sentence="If we had a car, we could visit Grandma every week."
              :marks="['could']"
            /><span class="translation">如果我們有車，就可以每週去看奶奶。</span></span
          >
        </div>
        <div>
          <span class="term">would<br /><i>一定會</i></span>
          <span
            ><NoteMark sentence="If we had a garden, we would get a dog." :marks="['would']" /><span
              class="translation"
              >如果我們有院子，就會養一隻狗。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
