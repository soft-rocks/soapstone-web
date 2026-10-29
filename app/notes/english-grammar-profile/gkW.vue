<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// verbs-form-to-infinitive-or-ing-form-meaning, as slides, in the order of content.md. One
// point per slide: the title names it, the diagram shows it, and `mark` circles the matching
// words of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="remember 加動詞-ing 是記得以前做過的事">
      <NoteWords
        :size="24"
        :parts="[
          { t: 'I', role: '主詞', kind: 'dim' },
          { t: 'remember', role: '動詞', kind: 'key' },
          { t: 'feeling', role: '動詞-ing', kind: 'key' },
          { t: 'very unhappy and confused', role: 'feeling 的補語' },
          { t: 'all day long.', role: '時間', kind: 'dim' },
        ]"
      />
      <p class="translation">我記得我一整天都覺得很難過、很困惑。</p>
      <p class="remark">感受在前，記得在後。</p>
    </NoteSlide>

    <NoteSlide title="remember：不定詞是之後要做，動詞-ing 是做過了" mark="remember feeling">
      <div class="rows is-labeled">
        <div>
          <span class="term">remember to<br /><i>記得要去做</i></span>
          <span
            ><NoteMark sentence="Remember to lock the door." :marks="['Remember to lock']" /><span
              class="translation"
              >記得要鎖門。</span
            ></span
          >
        </div>
        <div>
          <span class="term">remember + 動詞&#x2060;-&#x2060;ing<br /><i>記得做過</i></span>
          <span
            ><NoteMark sentence="I remember locking the door." :marks="['remember locking']" /><span
              class="translation"
              >我記得我鎖過門了。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="forget：不定詞是沒有做，動詞-ing 是忘記做過" mark="remember">
      <div class="rows is-labeled">
        <div>
          <span class="term">forget to<br /><i>忘了去做</i></span>
          <span
            ><NoteMark sentence="I forgot to call my mum." :marks="['forgot to call']" /><span
              class="translation"
              >我忘了打電話給我媽。</span
            ></span
          >
        </div>
        <div>
          <span class="term">forget + 動詞&#x2060;-&#x2060;ing<br /><i>忘記做過</i></span>
          <span
            ><NoteMark
              sentence="I'll never forget meeting the Queen."
              :marks="['forget meeting']"
            /><span class="translation">我永遠不會忘記見到女王的那一次。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="stop：不定詞是停下來去做，動詞-ing 是不再做" mark="feeling">
      <NoteFork
        stem="We stopped"
        :branches="[
          { head: 'to buy', rest: 'some water', meaning: '停下來去做', zh: '我們停下來買水。' },
          {
            head: 'buying',
            rest: 'bottled water',
            meaning: '不再做',
            zh: '我們不再買瓶裝水了。',
          },
        ]"
      />
    </NoteSlide>

    <NoteSlide title="try：不定詞是努力去做，動詞-ing 是試試看" mark="feeling">
      <div class="rows is-labeled">
        <div>
          <span class="term">try to<br /><i>努力去做</i></span>
          <span
            ><NoteMark
              sentence="I tried to open the window, but it was stuck."
              :marks="['tried to open']"
            /><span class="translation">我試著開窗，可是窗戶卡住了。</span></span
          >
        </div>
        <div>
          <span class="term">try + 動詞&#x2060;-&#x2060;ing<br /><i>試試看</i></span>
          <span
            ><NoteMark
              sentence="Try opening the window. It might get cooler."
              :marks="['Try opening']"
            /><span class="translation">開窗試試看。可能會涼一點。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="regret：不定詞是遺憾地通知，動詞-ing 是後悔做過" mark="feeling">
      <div class="rows is-labeled">
        <div>
          <span class="term">regret to<br /><i>遺憾地通知</i></span>
          <span
            ><NoteMark
              sentence="We regret to inform you that the flight is cancelled."
              :marks="['regret to inform']"
            /><span class="translation">我們很遺憾地通知您，班機取消了。</span></span
          >
        </div>
        <div>
          <span class="term">regret + 動詞&#x2060;-&#x2060;ing<br /><i>後悔做過</i></span>
          <span
            ><NoteMark sentence="I regret saying that to her." :marks="['regret saying']" /><span
              class="translation"
              >我後悔對她說了那些話。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="go on：不定詞是接著做另一件事，動詞-ing 是繼續做" mark="feeling">
      <div class="rows is-labeled">
        <div>
          <span class="term">go on to<br /><i>接著做別的事</i></span>
          <span
            ><NoteMark
              sentence="After the history lesson, she went on to teach us maths."
              :marks="['went on to teach']"
            /><span class="translation">上完歷史課，她接著教我們數學。</span></span
          >
        </div>
        <div>
          <span class="term">go on + 動詞&#x2060;-&#x2060;ing<br /><i>繼續做</i></span>
          <span
            ><NoteMark
              sentence="She went on talking for an hour."
              :marks="['went on talking']"
            /><span class="translation">她繼續講了一個小時。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="need 加動詞-ing 和被動的意思相同" mark="feeling">
      <div class="rows is-labeled">
        <div>
          <span class="term">need to<br /><i>主詞去做</i></span>
          <span
            ><NoteMark sentence="I need to wash the car." :marks="['need to wash']" /><span
              class="translation"
              >我得洗車了。</span
            ></span
          >
        </div>
        <div>
          <span class="term">need + 動詞&#x2060;-&#x2060;ing<br /><i>主詞被處理</i></span>
          <span
            ><NoteMark sentence="The car needs washing." :marks="['needs washing']" /><span
              class="translation"
              >這輛車該洗了。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="還沒做的事用 to 加原形動詞" mark="feeling">
      <NoteFix
        wrong="Remember posting this letter on your way to work."
        right="Remember to post this letter on your way to work."
        fix="to post"
      >
        想說記得要買。
      </NoteFix>
    </NoteSlide>

    <NoteSlide title="不再做用動詞-ing" mark="feeling">
      <NoteFix
        wrong="My dad stopped to smoke ten years ago."
        right="My dad stopped smoking ten years ago."
        fix="smoking"
      >
        <code>stop to smoke</code> 的意思是停下來去抽菸。
      </NoteFix>
    </NoteSlide>

    <NoteSlide title="後悔做過的事用動詞-ing" mark="feeling">
      <NoteFix wrong="I regret to buy this car." right="I regret buying this car." fix="buying">
        <code>regret to</code> 用在正式的通知。
      </NoteFix>
    </NoteSlide>

    <NoteSlide title="need 加動詞-ing 時不加 being" mark="feeling">
      <NoteFix
        wrong="The plants need being watered."
        right="The plants need watering."
        fix="watering"
      />
    </NoteSlide>

    <NoteSlide title="start、begin、like 接哪一種，意思都差不多" mark="feeling">
      <div class="rows is-labeled">
        <div>
          <span class="term">不定詞</span>
          <span
            ><NoteMark sentence="It started to rain." :marks="['to rain']" /><span
              class="translation"
              >開始下雨了。</span
            ></span
          >
        </div>
        <div>
          <span class="term">動詞&#x2060;-&#x2060;ing</span>
          <span
            ><NoteMark sentence="It started raining." :marks="['raining']" /><span
              class="translation"
              >開始下雨了。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
