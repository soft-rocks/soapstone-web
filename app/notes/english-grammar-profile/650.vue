<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// reported-speech-form-reported-statements-with-say-pronoun-shift, as slides, in the order of
// content.md. One point per slide: the title names it, the diagram shows it, and `mark` circles the
// matching words of the note's sentence. Keep the parts of one sentence on one line: Vue drops the
// whitespace between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="said + that + 子句">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'My mother', role: '主詞' },
          { t: 'said', role: '引述動詞', kind: 'key' },
          { t: 'that', role: 'that' },
          { t: 'she can take us there.', role: '子句', kind: 'key' },
        ]"
      />
      <p class="translation">我媽媽說她可以帶我們去那裡。</p>
    </NoteSlide>

    <NoteSlide title="原話的 I 換成 she，you 換成 us" mark="she">
      <div class="rows is-labeled">
        <div>
          <span class="term">原話</span>
          <span
            ><NoteMark sentence='"I can take you there."' :marks="['I', 'you']" /><span
              class="translation"
              >「我可以帶你們去那裡。」</span
            ></span
          >
        </div>
        <div>
          <span class="term">轉述</span>
          <span
            ><NoteMark
              sentence="My mother said that she can take us there."
              :marks="['she', 'us']"
            /><span class="translation">我媽媽說她可以帶我們去那裡。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="代名詞：I / you / we" mark="she">
      <div class="rows is-labeled">
        <div>
          <span class="term">I → he</span>
          <span
            ><NoteMark sentence="Max said that he's hungry." :marks="['he\'s']" /><span
              class="translation"
              >Max 說他餓了。</span
            ></span
          >
        </div>
        <div>
          <span class="term">you → us</span>
          <span
            ><NoteMark sentence="Sara said she'll meet us at the gate." :marks="['us']" /><span
              class="translation"
              >Sara 說她會在門口跟我們會合。</span
            ></span
          >
        </div>
        <div>
          <span class="term">we → they</span>
          <span
            ><NoteMark sentence="The kids said they're ready." :marks="['they\'re']" /><span
              class="translation"
              >孩子們說他們準備好了。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="代名詞：my / your" mark="us">
      <div class="rows is-labeled">
        <div>
          <span class="term">my → her</span>
          <span
            ><NoteMark sentence="Anna said her car is outside." :marks="['her']" /><span
              class="translation"
              >Anna 說她的車在外面。</span
            ></span
          >
        </div>
        <div>
          <span class="term">your → our</span>
          <span
            ><NoteMark sentence="The owner said our room is upstairs." :marks="['our']" /><span
              class="translation"
              >老闆說我們的房間在樓上。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="還成立的事照原話，已經過去的事後移" mark="can">
      <div class="rows is-labeled">
        <div>
          <span class="term">還成立</span>
          <span
            ><NoteMark sentence="Jim said he lives near the park." :marks="['lives']" /><span
              class="translation"
              >Jim 說他住在公園附近。</span
            ></span
          >
        </div>
        <div>
          <span class="term">已經過去</span>
          <span
            ><NoteMark sentence="When I called, Jim said he was busy." :marks="['was']" /><span
              class="translation"
              >我打電話的時候，Jim 說他在忙。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="說出聽的人：said to 或 told" mark="said">
      <div class="rows is-labeled">
        <div>
          <span class="term">said to</span>
          <span
            ><NoteMark
              sentence="My friend said to me that his dad can drive us to the pool."
              :marks="['said to me']"
            /><span class="translation">我朋友跟我說他爸爸可以載我們去游泳池。</span></span
          >
        </div>
        <div>
          <span class="term">told</span>
          <span
            ><NoteMark
              sentence="My friend told me that the pool opens at ten."
              :marks="['told me']"
            /><span class="translation">我朋友跟我說游泳池十點開。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="said 後面不直接接聽的人" mark="said">
      <NoteFix
        wrong="The teacher said us that we have to bring a notebook."
        right="The teacher said that we have to bring a notebook."
        fix="said that"
      />
    </NoteSlide>

    <NoteSlide title="原話的 I 是 Ryan，換成 he" mark="she">
      <NoteFix wrong="Ryan said that I'm sorry." right="Ryan said that he's sorry." fix="he's" />
    </NoteSlide>

    <NoteSlide title="過去說的話用 said" mark="said">
      <NoteFix
        wrong="Yesterday my dad say that he can fix my bike."
        right="Yesterday my dad said that he can fix my bike."
        fix="said"
      />
    </NoteSlide>

    <NoteSlide title="to me 緊接在 said 後面" mark="said">
      <NoteFix
        wrong="Tom said that to me he's running late."
        right="Tom said to me that he's running late."
        fix="said to me"
      />
    </NoteSlide>

    <NoteSlide title="直接引述保留原話的代名詞">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'My mother said,', kind: 'dim' },
          { t: '&quot;I can take you there.&quot;', role: '原話', kind: 'key' },
        ]"
      />
      <p class="translation">我媽媽說：「我可以帶你們去那裡。」</p>
    </NoteSlide>

    <NoteSlide title="said 的受詞是說的話，不是聽的人">
      <NoteWords
        :size="28"
        :parts="[
          { t: 'She said', kind: 'dim' },
          { t: 'something,', role: '說的話', kind: 'key' },
          { t: 'but I didn\'t hear it.', kind: 'dim' },
        ]"
      />
      <p class="translation">她說了些什麼，可是我沒聽到。</p>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
