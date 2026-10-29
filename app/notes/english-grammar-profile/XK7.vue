<script setup lang="ts">
import type notes from '~/content/english-grammar-profile/index.json';

// clauses-form-use-present-simple-if-clause-modal, as slides, in the order of content.md. One
// point per slide: the title names it, the diagram shows it, and `mark` circles the matching words
// of the note's sentence. Keep the parts of one sentence on one line: Vue drops the whitespace
// between two elements on separate lines.
defineProps<{ note: (typeof notes)[number] }>();
</script>

<template>
  <NoteHead :title="note.title" :name="note.translation" />

  <NoteDeck :sentence="note.title">
    <NoteSlide title="if 子句用現在簡單式，主要子句用情態動詞" mark="come">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'If it snows tomorrow,', role: '現在簡單式', kind: 'key' },
          { t: 'we might work from home.', role: '情態動詞 + 原形動詞' },
        ]"
      />
      <p class="translation">如果明天下雪，我們可能會在家工作。</p>
    </NoteSlide>

    <NoteSlide title="can 說可以做的事" mark="can">
      <div class="rows is-labeled">
        <div>
          <span class="term">can</span>
          <span
            ><NoteMark sentence="If you finish early, you can go home." :marks="['can go']" /><span
              class="translation"
              >如果你提早做完，可以回家。</span
            ></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="may、might、could 說可能發生的事">
      <div class="rows is-labeled">
        <div>
          <span class="term">may</span>
          <span
            ><NoteMark
              sentence="If the traffic is bad, we may miss the start of the film."
              :marks="['may miss']"
            /><span class="translation">如果塞車，我們可能會錯過電影開頭。</span></span
          >
        </div>
        <div>
          <span class="term">could</span>
          <span
            ><NoteMark
              sentence="If we leave now, we could catch the early train."
              :marks="['could catch']"
            /><span class="translation">如果我們現在出發，或許能趕上早班火車。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="should、must 說應該做的事">
      <div class="rows is-labeled">
        <div>
          <span class="term">should</span>
          <span
            ><NoteMark
              sentence="If you see the manager, you should ask about the job."
              :marks="['should ask']"
            /><span class="translation">如果你見到經理，應該問問那份工作。</span></span
          >
        </div>
        <div>
          <span class="term">must</span>
          <span
            ><NoteMark
              sentence="If you go to Kyoto, you must see the old temples."
              :marks="['must see']"
            /><span class="translation">如果你去京都，一定要去看那些古寺。</span></span
          >
        </div>
      </div>
      <p class="remark">
        <code>should</code> 說建議。<code>must</code> 說非做不可的事，或很強的建議。
      </p>
    </NoteSlide>

    <NoteSlide title="if 子句放在後面">
      <div class="rows is-labeled">
        <div>
          <span class="term">前面不加逗號</span>
          <span
            ><NoteMark
              sentence="We can go to the museum if it rains."
              :marks="['if it rains.']"
            /><span class="translation">如果下雨，我們可以去博物館。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="原句：邀請對方來住" mark="you can stay">
      <NoteWords
        :size="22"
        :parts="[
          { t: 'If you come to Brazil,', role: '現在簡單式', kind: 'key' },
          { t: 'you can stay at my home.', role: 'can + 原形動詞' },
        ]"
      />
      <p class="translation">如果你來巴西，可以住我家。</p>
    </NoteSlide>

    <NoteSlide title="if 子句不用 will" mark="come">
      <NoteFix
        wrong="If you will have time tomorrow, you can help me paint the fence."
        right="If you have time tomorrow, you can help me paint the fence."
        fix="have"
      />
    </NoteSlide>

    <NoteSlide title="情態動詞後面不加 to" mark="can stay">
      <NoteFix
        wrong="If the shop is closed, you can to buy milk at the station."
        right="If the shop is closed, you can buy milk at the station."
        fix="can buy"
      />
    </NoteSlide>

    <NoteSlide title="情態動詞後面的動詞不加 -s" mark="can stay">
      <NoteFix
        wrong="If she gets the visa, she can moves to Canada next year."
        right="If she gets the visa, she can move to Canada next year."
        fix="move"
      />
    </NoteSlide>

    <NoteSlide title="will 說確定的結果">
      <div class="rows is-labeled">
        <div>
          <span class="term">will<br /><i>確定的結果</i></span>
          <span
            ><NoteMark
              sentence="If you come early, you will see the parade."
              :marks="['will see']"
            /><span class="translation">如果你早點來，就會看到遊行。</span></span
          >
        </div>
        <div>
          <span class="term">can<br /><i>可以做的事</i></span>
          <span
            ><NoteMark
              sentence="If you come early, you can help us set up the chairs."
              :marks="['can see']"
            /><span class="translation">如果你早點來，可以幫我們擺椅子。</span></span
          >
        </div>
      </div>
    </NoteSlide>

    <NoteSlide title="過去簡單式說不太可能的事">
      <div class="rows is-labeled">
        <div>
          <span class="term">現在簡單式<br /><i>有可能</i></span>
          <span
            ><NoteMark
              sentence="If you visit Lisbon, you can stay with my aunt."
              :marks="['visit', 'can']"
            /><span class="translation">如果你去里斯本，可以住我阿姨家。</span></span
          >
        </div>
        <div>
          <span class="term">過去簡單式<br /><i>不太可能</i></span>
          <span
            ><NoteMark
              sentence="If you visited Lisbon in winter, you could stay with my aunt."
              :marks="['visited', 'could']"
            /><span class="translation">要是你冬天去里斯本，可以住我阿姨家。</span></span
          >
        </div>
      </div>
    </NoteSlide>
  </NoteDeck>

  <NoteExamples heading="例句" :groups="note.examples" />
</template>
